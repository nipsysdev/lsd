/**
 * Metadata Extractor
 *
 * This module extracts component metadata from source files using ts-morph.
 * It extracts props, variants, sizes, sub-components, and exports.
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import { Project, type SourceFile, SyntaxKind } from 'ts-morph';
import { readFile } from '../utils/file-utils';
import { resolveComponentPath } from './component-discovery';

/**
 * Metadata for a single component property
 */
export interface PropMetadata {
  /** Property name */
  name: string;
  /** TypeScript type as string */
  type: string;
  /** Default value if specified */
  defaultValue?: string;
  /** Description from TSDoc */
  description?: string;
  /** Whether the property is required */
  isRequired: boolean;
  /** Available options for union types (e.g., "sm" | "md" | "lg") */
  options?: string[];
  /** Component name this prop belongs to (e.g., "ButtonGroup", "ButtonGroupText") */
  componentName?: string;
}

/**
 * Metadata for a component variant (e.g., size, color)
 */
export interface VariantMetadata {
  /** Variant name (e.g., "size", "variant") */
  name: string;
  /** Available values for this variant */
  values: string[];
  /** Default value for this variant */
  defaultValue?: string;
}

/**
 * Complete component metadata
 */
export interface ComponentMetadata {
  /** Component name (e.g., "accordion") */
  name: string;
  /** Component properties with their metadata */
  props: PropMetadata[];
  /** Available variants (e.g., size, color) */
  variants: string[];
  /** Available size values (sm, md, lg, etc.) */
  sizes: string[];
  /** Items exported from component index.ts */
  exports: string[];
  /** Sub-components (e.g., AccordionTrigger, AccordionContent) */
  subComponents: string[];
  /** Path to main component file */
  filePath: string;
  /** Whether this component wraps a Radix UI primitive */
  isRadixComponent: boolean;
}

/**
 * Extract component metadata from source files
 *
 * @param componentName - Name of the component (e.g., "accordion")
 * @returns Complete component metadata
 * @throws {Error} If component files cannot be found or parsed
 */
export async function extractComponentMetadata(componentName: string): Promise<ComponentMetadata> {
  const componentDir = resolveComponentPath(componentName);
  const mainComponentPath = path.join(componentDir, `${toPascalCase(componentName)}.tsx`);
  const typesPath = path.join(componentDir, 'types.ts');
  const indexPath = path.join(componentDir, 'index.ts');

  // Resolve tsconfig path relative to script location
  const __dirname = path.dirname(new URL(import.meta.url).pathname);
  const scriptDir = path.dirname(__dirname); // docs-generator directory
  const tsConfigPath = path.resolve(scriptDir, '../../../lsd/tsconfig.json');

  const project = new Project({
    tsConfigFilePath: tsConfigPath,
  });

  // Load main component file
  let sourceFile: SourceFile | undefined;
  try {
    // Resolve the absolute path and add to project
    const sourceFsPath = path.resolve(process.cwd(), mainComponentPath);
    const loadedFile = project.addSourceFileAtPathIfExists(sourceFsPath);
    sourceFile = loadedFile ?? undefined;
  } catch (error) {
    console.error(`Error loading component file: ${mainComponentPath}`, error);
  }

  // Load types file if it exists
  let typesFile: SourceFile | undefined;
  try {
    const typesFsPath = path.resolve(process.cwd(), typesPath);
    if (await fileExists(typesFsPath)) {
      const loadedFile = project.addSourceFileAtPathIfExists(typesFsPath);
      typesFile = loadedFile ?? undefined;
    }
  } catch (_error) {
    // Types file might not exist for all components
  }

  // Load index file to extract exports and sub-components
  let indexFile: SourceFile | undefined;
  let exports: string[] = [];
  let subComponents: string[] = [];
  try {
    const indexFsPath = path.resolve(process.cwd(), indexPath);
    if (await fileExists(indexFsPath)) {
      const loadedFile = project.addSourceFileAtPathIfExists(indexFsPath);
      indexFile = loadedFile ?? undefined;
      if (indexFile) {
        const exportsResult = await scanComponentFilesForExportAs(indexFile, componentName);
        exports = exportsResult.exports;
        subComponents = exportsResult.subComponents;
      }
    }
  } catch (error) {
    console.error(`Error loading index file: ${indexPath}`, error);
  }

  // Extract props from both main component file and types file
  const sourceFileProps = sourceFile ? await extractProps(sourceFile) : [];
  const typesFileProps = typesFile ? await extractProps(typesFile) : [];
  // Merge props, avoiding duplicates (consider both name and componentName)
  const allProps = [...sourceFileProps];
  for (const prop of typesFileProps) {
    if (!allProps.find(p => p.name === prop.name && p.componentName === prop.componentName)) {
      allProps.push(prop);
    }
  }

  // Detect if this component wraps a Radix UI primitive
  const isRadixComponent = sourceFile ? await detectRadixImport(sourceFile) : false;

  // Extract default values from component function parameters (main component)
  const functionDefaults = sourceFile
    ? extractDefaultValuesFromFunction(sourceFile, toPascalCase(componentName))
    : new Map<string, string>();

  // Extract default values from CVA definitions (main component)
  const cvaDefaults = sourceFile
    ? extractDefaultValuesFromCVA(sourceFile)
    : new Map<string, Map<string, string>>();

  // Extract defaults from subcomponent files
  const subComponentDefaults = new Map<string, Map<string, string>>();
  for (const subComp of subComponents) {
    try {
      const subCompPath = path.join(componentDir, `${subComp}.tsx`);
      const subCompFsPath = path.resolve(process.cwd(), subCompPath);
      if (await fileExists(subCompFsPath)) {
        const subSourceFile = project.addSourceFileAtPathIfExists(subCompFsPath);
        if (subSourceFile) {
          // Extract function defaults (highest priority)
          const fnDefaults = extractDefaultValuesFromFunction(subSourceFile, subComp);
          subComponentDefaults.set(subComp, fnDefaults);

          // Extract CVA defaults and merge with function defaults
          const cvaSubDefaults = extractDefaultValuesFromCVA(subSourceFile);
          for (const [cvaName, cvaDefaultMap] of cvaSubDefaults) {
            if (!subComponentDefaults.has(cvaName)) {
              subComponentDefaults.set(cvaName, cvaDefaultMap);
            } else {
              const existingDefaults = subComponentDefaults.get(cvaName)!;
              for (const [propName, defaultValue] of cvaDefaultMap) {
                if (!existingDefaults.has(propName)) {
                  existingDefaults.set(propName, defaultValue);
                }
              }
            }
          }
        }
      }
    } catch (error) {
      // Ignore errors for subcomponents that might not exist or have issues
      console.warn(`Warning: Could not extract defaults for ${subComp}`, error);
    }
  }

  // Merge defaults into props
  // Priority: function parameter defaults > CVA defaults
  for (const prop of allProps) {
    const propName = prop.name;
    const compName = prop.componentName || componentName;

    // First check main component function defaults
    if (!prop.componentName && functionDefaults.has(propName)) {
      prop.defaultValue = functionDefaults.get(propName);
      continue;
    }

    // Then check subcomponent function defaults
    if (prop.componentName && subComponentDefaults.has(prop.componentName)) {
      const subDefaults = subComponentDefaults.get(prop.componentName)!;
      if (subDefaults.has(propName)) {
        prop.defaultValue = subDefaults.get(propName);
        continue;
      }
    }

    // Then check CVA defaults for this component
    if (cvaDefaults.has(compName)) {
      const compDefaults = cvaDefaults.get(compName)!;
      if (compDefaults.has(propName)) {
        prop.defaultValue = compDefaults.get(propName);
      }
    }
  }

  return {
    name: componentName,
    props: allProps,
    variants: typesFile ? await extractVariants(typesFile) : [],
    sizes: typesFile ? await extractSizes(typesFile) : [],
    exports,
    subComponents,
    filePath: mainComponentPath,
    isRadixComponent,
  };
}

/**
 * Extract props from a component source file
 *
 * For components that wrap primitives (like Accordion wrapping AccordionPrimitive.Root),
 * we attempt to extract props from the type parameter. Note that this is a limitation
 * - we cannot fully analyze the primitive's type at build time without importing it.
 *
 * @param sourceFile - The component source file
 * @returns Array of prop metadata
 */
export async function extractProps(sourceFile: SourceFile): Promise<PropMetadata[]> {
  const props: PropMetadata[] = [];

  // Build a map of type alias declarations for quick lookup
  const typeAliases = new Map<string, string>();
  const typeAliasDeclarations = sourceFile.getTypeAliases();
  for (const typeAlias of typeAliasDeclarations) {
    if (typeAlias.isExported()) {
      const name = typeAlias.getName();
      const definition = typeAlias.getTypeNode()?.getText() || '';
      typeAliases.set(name, definition);
    }
  }

  // Find exported interfaces ending with "Props" or "Options"
  const interfaces = sourceFile.getInterfaces();
  const propsInterfaces = interfaces.filter(iface => {
    const name = iface.getName();
    return (name.endsWith('Props') || name.endsWith('Options')) && iface.isExported();
  });

  // Extract props from each Props interface
  for (const iface of propsInterfaces) {
    const properties = iface.getProperties();

    // Extract component name from interface name (e.g., ButtonGroupProps -> ButtonGroup)
    const interfaceName = iface.getName();
    const componentName = interfaceName.replace(/Props$/, '').replace(/Options$/, '');

    for (const prop of properties) {
      let propType = prop.getType().getText();
      // Remove absolute paths from type imports
      propType = cleanTypePaths(propType);
      const propName = prop.getName();

      // Skip private or internal props
      if (propName.startsWith('_') || propName.startsWith('#')) {
        continue;
      }

      // Check if prop is optional
      const isRequired = !prop.hasQuestionToken();

      // Extract default value from initializer (if any)
      let defaultValue: string | undefined;
      const initializer = prop.getInitializer();
      if (initializer) {
        defaultValue = initializer.getText();
      }

      // Extract options from union types
      let options: string[] | undefined;
      // First, try to find union values in the prop type itself
      if (propType.includes('|')) {
        options = parseUnionTypeOptions(propType);
      }
      // If no options found and propType is a simple identifier, try to resolve it as a type alias
      if (!options && typeAliases.has(propType)) {
        const aliasDefinition = typeAliases.get(propType)!;
        if (aliasDefinition.includes('|')) {
          options = parseUnionTypeOptions(aliasDefinition);
        }
      }

      // Extract description from JSDoc (required)
      const propJSDoc = prop.getJsDocs();

      // Debug logging: log extracted prop
      if (process.env.DEBUG_EXTRACTION === 'true') {
        console.log(`Extracting prop: ${propName} (${componentName})`);
        console.log(`  Type: ${propType}`);
        console.log(`  Options: ${options?.join(', ') || 'none'}`);
        console.log(`  Has JSDoc: ${propJSDoc.length > 0}`);
        console.log(`  Required: ${isRequired}`);
      }
      let propDescription: string;
      if (propJSDoc.length > 0) {
        propDescription = propJSDoc[0]
          .getDescription()
          .split('\n')
          .map((line: string) => line.trim())
          .join(' ')
          .trim();
      } else {
        // Skip props without JSDoc comments
        continue;
      }

      // Skip duplicates (props might be defined in multiple interfaces)
      const existingProp = props.find(
        p => p.name === propName && p.componentName === componentName
      );
      if (!existingProp) {
        props.push({
          name: propName,
          type: propType,
          description: propDescription,
          isRequired,
          options,
          defaultValue,
          componentName, // Track which component this prop belongs to
        });
      }
    }
  }

  return props;
}

/**
 * Extract variant types from types.ts file
 *
 * Looks for CVA variant definitions and extracts available values.
 *
 * @param sourceFile - The types source file
 * @returns Array of variant names
 */
export async function extractVariants(sourceFile: SourceFile): Promise<string[]> {
  const variants: string[] = [];

  // Look for cva() calls with variant definitions
  const variableDeclarations = sourceFile.getVariableStatements();

  for (const varDecl of variableDeclarations) {
    const declList = varDecl.getDeclarations();
    for (const decl of declList) {
      const initializer = decl.getInitializer();
      if (!initializer) continue;

      const initText = initializer.getFullText();

      // Look for cva() function calls
      if (initText.includes('cva(')) {
        // Extract variant names from the variants object
        // Use [\s\S] instead of . with s flag for compatibility
        const variantsMatch = initText.match(/variants:[\s\S]*?{([^}]*(?:{[^}]*}[^}]*)*)}/);
        if (variantsMatch) {
          const variantsContent = variantsMatch[1];
          // Find variant names (keys in the variants object)
          const variantKeys = variantsContent.match(/(\w+):\s*{/g);
          if (variantKeys) {
            for (const key of variantKeys) {
              const variantName = key.replace(/:\s*{/, '').trim();
              if (!variants.includes(variantName)) {
                variants.push(variantName);
              }
            }
          }
        }
      }
    }
  }

  return variants;
}

/**
 * Extract size variants from types.ts file
 *
 * Looks for CVA size variants (sm, md, lg, etc.)
 *
 * @param sourceFile - The types source file
 * @returns Array of size values
 */
export async function extractSizes(sourceFile: SourceFile): Promise<string[]> {
  const sizes: string[] = [];

  // Look for cva() calls and extract size values
  const variableDeclarations = sourceFile.getVariableStatements();

  for (const varDecl of variableDeclarations) {
    const declList = varDecl.getDeclarations();
    for (const decl of declList) {
      const initializer = decl.getInitializer();
      if (!initializer) continue;

      const initText = initializer.getFullText();

      // Look for cva() function calls
      if (initText.includes('cva(')) {
        // Extract size values from the size variant
        // Use [\s\S] instead of . with s flag for compatibility
        const sizeMatch = initText.match(/size:[\s\S]*?{([^}]*(?:{[^}]*}[^}]*)*)}/);
        if (sizeMatch) {
          const sizeContent = sizeMatch[1];
          // Extract size keys (e.g., sm, md, lg)
          const sizeKeys = sizeContent.match(/(\w+):\s*\[/g);
          if (sizeKeys) {
            for (const key of sizeKeys) {
              const sizeName = key.replace(/:\s*\[/, '').trim();
              if (!sizes.includes(sizeName)) {
                sizes.push(sizeName);
              }
            }
          }
        }
      }
    }
  }

  return sizes;
}

/**
 * Extract exports and sub-components from index.ts
 *
 * @param sourceFile - The index source file
 * @returns Object with exports and sub-components arrays
 */
/**
 * Scan component directory for @exportAs tags in component files
 *
 * Looks for JSDoc @exportAs tags to identify component type:
 * - @exportAs root: marks the main component
 * - @exportAs sub: marks sub-components
 *
 * @param sourceFile - The index source file
 * @param componentName - Component name
 * @returns Object with exports and sub-components arrays
 */
async function scanComponentFilesForExportAs(
  sourceFile: SourceFile,
  _componentName: string
): Promise<{ exports: string[]; subComponents: string[] }> {
  const exports: string[] = [];
  const subComponents: string[] = [];
  const componentDir = path.dirname(sourceFile.getFilePath());

  const exportDeclarations = sourceFile.getExportDeclarations();
  const interfaceExports = sourceFile.getInterfaces();

  // Extract all exports
  for (const exportDecl of exportDeclarations) {
    const namedExports = exportDecl.getNamedExports();
    for (const namedExport of namedExports) {
      const exportName = namedExport.getName();

      // Skip types (they're exported separately below)
      if (
        exportName.endsWith('Props') ||
        exportName.endsWith('Size') ||
        exportName.endsWith('Variant') ||
        exportName.endsWith('Align')
      ) {
        continue;
      }

      exports.push(exportName);
    }
  }

  // Extract type exports
  for (const iface of interfaceExports) {
    const exportName = iface.getName();
    if (!exports.includes(exportName)) {
      exports.push(exportName);
    }
  }

  // Scan local component files for @exportAs annotations
  const files = fs.readdirSync(componentDir);

  for (const file of files) {
    if (
      (file.match(/\.tsx?$/) || file.match(/\.ts$/)) &&
      file !== 'index.ts' &&
      file !== 'types.ts' &&
      file !== 'test.ts' &&
      file !== 'spec.ts'
    ) {
      const filePath = path.join(componentDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');

      // Look for @exportAs tag in the file
      const exportAsMatch = content.match(/@exportAs\s+(root|sub)/);
      if (exportAsMatch) {
        const exportAsType = exportAsMatch[1];
        const componentNameFromFile = path.basename(file, path.extname(file));

        if (exportAsType === 'sub' && exports.includes(componentNameFromFile)) {
          if (!subComponents.includes(componentNameFromFile)) {
            subComponents.push(componentNameFromFile);
          }

          // Debug logging
          if (process.env.DEBUG_SUBCOMPONENTS === 'true') {
            console.log(`@exportAs sub found in ${file}: ${componentNameFromFile}`);
          }
        }
      }
    }
  }

  return { exports, subComponents };
}

/**
 * Parse union type to extract options
 *
 * @param typeString - The type string (e.g., "'sm' | 'md' | 'lg' | 'xl'")
 * @returns Array of option values
 */
function parseUnionTypeOptions(typeString: string): string[] {
  // Remove generic types and extract union values
  const unionMatch = typeString.match(/'([^']+)'|"([^"]+)"|(\w+)\s*\|/g);

  if (!unionMatch) {
    return [];
  }

  return unionMatch
    .map(option => {
      // Remove quotes and pipes
      return option
        .replace(/[|"'`]/g, '')
        .replace(/\s*\|?\s*$/, '')
        .trim();
    })
    .filter(Boolean);
}

/**
 * Capitalize the first letter of a string
 */
function _capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Convert kebab-case to PascalCase (e.g., "alert-dialog" → "AlertDialog")
 */
function toPascalCase(str: string): string {
  return str
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

/**
 * Check if a file exists
 */
async function fileExists(filePath: string): Promise<boolean> {
  try {
    await readFile(filePath);
    return true;
  } catch {
    return false;
  }
}

/**
 * Detect if a source file imports from Radix UI
 *
 * Checks if the source file has any import statements from Radix UI
 * packages (either 'radix-ui' or '@radix-ui/react-*').
 *
 * @param sourceFile - The source file to check
 * @returns true if the file imports from Radix UI, false otherwise
 */
async function detectRadixImport(sourceFile: SourceFile): Promise<boolean> {
  const importDeclarations = sourceFile.getImportDeclarations();
  for (const importDecl of importDeclarations) {
    const moduleSpecifier = importDecl.getModuleSpecifierValue();
    if (moduleSpecifier === 'radix-ui' || moduleSpecifier.startsWith('@radix-ui/react-')) {
      return true;
    }
  }
  return false;
}

/**
 * Clean absolute file paths from type strings
 *
 * Removes import() paths like `import("/path/to/file")` from type strings,
 * keeping only the clean type name.
 *
 * @param typeText - The type text to clean
 * @returns Cleaned type text without absolute paths
 */
function cleanTypePaths(typeText: string): string {
  return typeText.replace(/import\([^)]+\)\./g, '');
}

/**
 * Extract default values from component function parameters
 *
 * Finds default values specified in component function signatures.
 * Handles both regular function components and React.forwardRef wrappers.
 *
 * @param sourceFile - The component source file
 * @param componentName - Name of the component to search for
 * @returns Map of prop names to their default values
 */
export function extractDefaultValuesFromFunction(
  sourceFile: SourceFile,
  componentName: string
): Map<string, string> {
  const defaults = new Map<string, string>();

  // Find variable declarations for the component
  const varDeclarations = sourceFile.getVariableStatements();

  for (const varDecl of varDeclarations) {
    const declList = varDecl.getDeclarations();
    for (const decl of declList) {
      if (decl.getName() !== componentName) continue;

      const initializer = decl.getInitializer();
      if (!initializer) continue;

      const kind = initializer.getKind();

      // Handle React.forwardRef(wrapper) calls
      if (kind === SyntaxKind.CallExpression) {
        const callExpr = initializer.asKindOrThrow(SyntaxKind.CallExpression);
        const expression = callExpr.getExpression();

        // Check if this is a React.forwardRef call
        const exprText = expression.getText();
        if (!exprText.includes('forwardRef')) continue;

        // Get the arguments to forwardRef
        const args = callExpr.getArguments();
        if (args.length === 0) continue;

        // The first argument is the render function (usually an arrow function)
        const renderFunc = args[0];
        const renderFuncKind = renderFunc.getKind();

        if (renderFuncKind === SyntaxKind.ArrowFunction) {
          const arrowFunc = renderFunc.asKindOrThrow(SyntaxKind.ArrowFunction);
          const params = arrowFunc.getParameters();
          if (params.length > 0) {
            // Get the props parameter (first parameter)
            const propsParam = params[0];
            extractDefaultsFromParameter(propsParam, defaults);
          }
        }
      }
      // Handle direct arrow function components
      else if (kind === SyntaxKind.ArrowFunction) {
        const arrowFunc = initializer.asKindOrThrow(SyntaxKind.ArrowFunction);
        const params = arrowFunc.getParameters();
        if (params.length > 0) {
          const propsParam = params[0];
          extractDefaultsFromParameter(propsParam, defaults);
        }
      }
    }
  }

  return defaults;
}

/**
 * Extract defaults from a single parameter
 *
 * @param param - The parameter to extract defaults from
 * @param defaults - Map to store extracted defaults
 */
function extractDefaultsFromParameter(
  param: import('ts-morph').ParameterDeclaration,
  defaults: Map<string, string>
): void {
  // Check if parameter has a binding pattern (destructuring)
  const paramNode = param.compilerNode;
  const hasBindingPattern =
    paramNode.name &&
    (paramNode.name.kind === SyntaxKind.ObjectBindingPattern ||
      paramNode.name.kind === SyntaxKind.ArrayBindingPattern);

  if (!hasBindingPattern) {
    // Simple parameter without destructuring
    const initializer = param.getInitializer();
    if (initializer && param.getName() !== 'ref') {
      defaults.set(param.getName(), initializer.getText());
    }
    return;
  }

  // Handle destructuring patterns
  if (paramNode.name.kind === SyntaxKind.ObjectBindingPattern) {
    const bindingPattern = paramNode.name;
    for (const element of bindingPattern.elements) {
      if (element.kind === SyntaxKind.BindingElement) {
        const bindingElement = element;

        // Get the property name (might be renamed: { prop: newName = default })
        let propName: string;
        if (bindingElement.propertyName) {
          propName = bindingElement.propertyName.getText();
        } else if (bindingElement.name.kind === SyntaxKind.Identifier) {
          propName = bindingElement.name.text;
        } else {
          continue;
        }

        // Get the initializer (default value)
        if (bindingElement.initializer) {
          defaults.set(propName, bindingElement.initializer.getText());
        }
      }
    }
  } else if (paramNode.name.kind === SyntaxKind.ArrayBindingPattern) {
    const bindingPattern = paramNode.name;
    for (let i = 0; i < bindingPattern.elements.length; i++) {
      const element = bindingPattern.elements[i];
      if (element.kind === SyntaxKind.BindingElement) {
        const bindingElement = element;
        const accessTokenor = bindingElement.initializer;

        if (accessTokenor) {
          const propName =
            bindingElement.name.kind === SyntaxKind.Identifier ? bindingElement.name.text : `_${i}`;
          defaults.set(propName, accessTokenor.getText());
        }
      }
    }
  }
}

/**
 * Extract default values from CVA defaultVariants
 *
 * Finds default values specified in cva() calls in the source file.
 *
 * @param sourceFile - The source file to scan
 * @returns Map of component names to their variant default values
 */
export function extractDefaultValuesFromCVA(
  sourceFile: SourceFile
): Map<string, Map<string, string>> {
  const allDefaults = new Map<string, Map<string, string>>();

  const varDeclarations = sourceFile.getVariableStatements();

  for (const varDecl of varDeclarations) {
    const declList = varDecl.getDeclarations();
    for (const decl of declList) {
      const initializer = decl.getInitializer();
      if (!initializer) continue;

      const initText = initializer.getFullText();

      // Look for cva() function calls
      if (initText.includes('cva(')) {
        const componentName = decl.getName();
        const defaults = extractVariantsFromCVA(initText);
        if (defaults.size > 0) {
          allDefaults.set(componentName, defaults);
        }
      }
    }
  }

  return allDefaults;
}

/**
 * Extract variant defaults from a CVA call text
 *
 * @param cvaText - The text of a cva() call
 * @returns Map of variant names to their default values
 */
function extractVariantsFromCVA(cvaText: string): Map<string, string> {
  const defaults = new Map<string, string>();

  // Extract the defaultVariants object
  // Looking for: defaultVariants: { variant: 'value', size: 'value' }
  const defaultVariantsMatch = cvaText.match(/defaultVariants:\s*\{([^}]*(?:\{[^}]*\}[^}]*)*)\}/);

  if (!defaultVariantsMatch) {
    return defaults;
  }

  const variantsContent = defaultVariantsMatch[1];

  // Extract each variant name and its default value
  // Pattern: variantName: 'value' or variantName: "value" or variantName: identifier
  const variantPattern = /(\w+)\s*:\s*(['"])(.*?)\2|(\w+)\s*:\s*(\w+)/g;
  let match: RegExpExecArray | null;

  match = variantPattern.exec(variantsContent);
  while (match !== null) {
    const [, name1, , value1, name2, value2] = match;
    const variantName = name1 || name2;
    const defaultValue = value1 || value2;

    if (variantName && defaultValue) {
      defaults.set(variantName, defaultValue);
    }

    match = variantPattern.exec(variantsContent);
  }

  return defaults;
}

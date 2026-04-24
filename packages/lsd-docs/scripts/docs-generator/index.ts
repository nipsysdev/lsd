/**
 * Documentation Generator Orchestrator
 *
 * This is the main entry point for the documentation generator.
 * It coordinates all the parsers, generators, and scanners to create
 * complete documentation pages for components.
 */

import * as path from 'node:path';
import { Project } from 'ts-morph';
import { generatePage } from './generators/page-generator';
import { discoverAllComponents } from './parsers/component-discovery';
import { extractComponentMetadata } from './parsers/metadata-extractor';
import { parseTSDoc, type TSDocMetadata } from './parsers/tsdoc-parser';
import { loadAllExamples } from './scanners/example-loader';
import { ComponentNotFoundError, handleError } from './utils/error-handler';
import { writeFile } from './utils/file-utils';

/**
 * Options for generating documentation
 */
export interface GenerateOptions {
  /** Component name to generate docs for */
  componentName: string;
  /** Whether to force regenerate even if file exists */
  force?: boolean;
  /** Output directory for generated files */
  outputDir?: string;
}

/**
 * Generate documentation for a single component
 *
 * This is the main orchestrator that coordinates all the components:
 * 1. Validates component exists
 * 2. Extracts component metadata (props, variants, sizes, sub-components)
 * 3. Parses TSDoc annotations from source files
 * 4. Discovers and loads all examples
 * 5. Generates the complete page.tsx file
 * 6. Writes the generated file to the filesystem
 *
 * @param componentName - Name of the component (e.g., "accordion", "button")
 * @returns Promise that resolves when documentation is generated
 */
export async function generateDocumentation(componentName: string): Promise<void> {
  try {
    console.log(`\n🔍 Generating documentation for "${componentName}"...`);

    // Step 1: Validate component exists
    console.log('  ✅ Validating component...');
    const allComponents = await discoverAllComponents();
    if (!allComponents.includes(componentName)) {
      throw new ComponentNotFoundError(componentName);
    }

    // Step 2: Extract component metadata
    console.log('  📝 Extracting component metadata...');
    const metadata = await extractComponentMetadata(componentName);
    console.log(
      `     Found ${metadata.props.length} props, ${metadata.variants.length} variants, ${metadata.subComponents.length} sub-components`
    );

    // Step 3: Parse TSDoc annotations
    console.log('  📚 Parsing TSDoc annotations...');
    let tsdoc: TSDocMetadata;
    try {
      // Resolve tsconfig path relative to script location
      const __dirname = path.dirname(new URL(import.meta.url).pathname);
      const tsConfigPath = path.resolve(__dirname, '../../../lsd/tsconfig.json');

      // Load the main component file for TSDoc parsing
      const project = new Project({
        tsConfigFilePath: tsConfigPath,
      });
      const sourceFile = project.addSourceFileAtPath(metadata.filePath);
      tsdoc = await parseTSDoc(sourceFile);

      // Also parse TSDoc from types.ts if it exists
      const _typesPath = metadata.filePath.replace(/\.tsx$/, '/types.ts');
      const typesPathResolved = path.resolve(
        __dirname,
        '../../../lsd/src/components/ui',
        componentName,
        'types.ts'
      );
      try {
        const typesFile = project.addSourceFileAtPathIfExists(typesPathResolved);
        if (typesFile) {
          const typesTsdoc = await parseTSDoc(typesFile);
          // Merge TSDoc from types.ts (types.ts can provide additional metadata but not override)
          tsdoc = {
            description: tsdoc.description || typesTsdoc.description,
            remarks: tsdoc.remarks || typesTsdoc.remarks,
            customTags: { ...tsdoc.customTags, ...typesTsdoc.customTags },
          };
        }
      } catch {
        // types.ts might not exist, that's fine
      }

      console.log(`     Found ${Object.keys(tsdoc.customTags).length} custom tags`);
    } catch (error) {
      console.warn('     Warning: Failed to parse TSDoc, using defaults');
      console.warn(`     Error details: ${error instanceof Error ? error.message : String(error)}`);
      tsdoc = {
        description: `Interactive ${componentName} component with multiple variants and features`,
        customTags: {},
      };
    }

    // After TSDoc is parsed (or defaults loaded), validate required fields
    // Ensure we have at least a description
    if (!tsdoc.description) {
      throw new Error(
        `Component ${componentName} must have a TSDoc description. Add it to the main component file or types.ts`
      );
    }

    // If component has sub-components, require composition tag
    if (metadata.subComponents.length > 0 && !tsdoc.customTags.docSectionComposition) {
      throw new Error(
        `Component ${componentName} has ${metadata.subComponents.length} sub-components but no @docSectionComposition tag. ` +
          'Add a @docSectionComposition tag to document the hierarchical structure of the component and its sub-components. ' +
          'Example:\n' +
          '• DropdownMenu - Root container for the menu\n' +
          '  • DropdownMenuTrigger - Button that opens the menu\n' +
          '  • DropdownMenuContent - The menu content container\n' +
          '    • DropdownMenuItem - Individual menu items\n' +
          '    • DropdownMenuSeparator - Visual separator between items\n' +
          '  • DropdownMenuPortal - Renders the menu outside the parent component'
      );
    }

    // Step 4: Discover and load examples
    console.log('  🎯 Discovering and loading examples...');
    const examples = await loadAllExamples(componentName);
    if (examples.length === 0) {
      console.warn('     Warning: No examples found for this component');
    } else {
      console.log(`     Loaded ${examples.length} examples`);
      for (const example of examples) {
        console.log(`       - ${example.title} (${example.category})`);
      }
    }

    // Step 5: Generate documentation page
    console.log('  ✨ Generating documentation page...');
    const pageContent = generatePage({
      componentName,
      metadata,
      examples,
      tsdocMetadata: tsdoc,
      navigation: generateNavigation(componentName, allComponents),
    });

    // Step 6: Write to file
    // Use absolute path from workspace root to avoid path duplication
    // From docs-generator, go up 3 levels to reach workspace root:
    // docs-generator → scripts → lsd-docs → workspace root
    const __dirname = path.dirname(new URL(import.meta.url).pathname);
    const workspaceRoot = path.resolve(__dirname, '../../../..');
    const outputPath = path.join(
      workspaceRoot,
      'packages/lsd-docs/app/components',
      componentName,
      'page.tsx'
    );
    await writeFile(outputPath, pageContent);

    console.log(`✅ Successfully generated documentation for "${componentName}"`);
    console.log(`   Output: ${outputPath}`);
  } catch (error) {
    handleError(error as Error);
  }
}

/**
 * Generate documentation for all components
 *
 * Iterates through all discovered components and generates documentation
 * for each one. Components with errors are logged but don't stop the process.
 *
 * @returns Promise that resolves when all documentation is generated
 */
export async function generateAllComponents(): Promise<void> {
  try {
    const components = await discoverAllComponents();
    console.log(`\n🚀 Found ${components.length} components to document`);
    console.log('   This may take a while...\n');

    const results = {
      success: 0,
      failed: 0,
      failedComponents: [] as string[],
    };

    for (const component of components) {
      try {
        await generateDocumentation(component);
        results.success++;
      } catch (error) {
        results.failed++;
        results.failedComponents.push(component);
        console.error(`\n❌ Failed to generate documentation for "${component}"`);
        console.error(error);
      }
    }

    console.log(`\n${'='.repeat(60)}`);
    console.log('📊 Generation Summary:');
    console.log(`   ✅ Success: ${results.success} components`);
    console.log(`   ❌ Failed: ${results.failed} components`);

    if (results.failedComponents.length > 0) {
      console.log('\n   Failed components:');
      for (const component of results.failedComponents) {
        console.log(`     - ${component}`);
      }
    }

    console.log('='.repeat(60));
  } catch (error) {
    console.error('\nFatal error during bulk generation:', error);
    process.exit(1);
  }
}

/**
 * Generate navigation info for a component
 *
 * Attempts to find the previous and next components in the navigation order.
 * Uses the order defined in packages/lsd-docs/app/config/navigation.ts
 *
 * @param componentName - Current component name
 * @param allComponents - List of all component names
 * @returns Navigation object with previous/next info, if available
 */
function generateNavigation(
  componentName: string,
  allComponents: string[]
): { previous?: { title: string; href: string }; next?: { title: string; href: string } } {
  // Get the ordered list of components from navigation configuration
  const orderedComponents = getOrderedComponents(allComponents);
  const index = orderedComponents.indexOf(componentName);

  const navigation: {
    previous?: { title: string; href: string };
    next?: { title: string; href: string };
  } = {};

  if (index > 0) {
    navigation.previous = {
      title: capitalize(orderedComponents[index - 1]),
      href: `/components/${orderedComponents[index - 1]}`,
    };
  }

  if (index < orderedComponents.length - 1) {
    navigation.next = {
      title: capitalize(orderedComponents[index + 1]),
      href: `/components/${orderedComponents[index + 1]}`,
    };
  }

  return navigation;
}

/**
 * Get ordered list of components from navigation configuration
 *
 * Extracts all component URLs in the order they appear in navigation.ts,
 * maintaining the hierarchical structure (Forms, Navigation, Feedback, etc.)
 *
 * @param allComponents - List of all available component names
 * @returns Ordered array of component names that exist
 */
function getOrderedComponents(allComponents: string[]): string[] {
  // Extract all component URLs in order from navItems structure
  // This matches the structure in packages/lsd-docs/app/config/navigation.ts
  const componentOrder = [
    // Getting Started (skip - not components)
    // Design Tokens (skip - not components)
    // Components
    // Forms
    'autocomplete',
    'button',
    'button-group',
    'calendar',
    'checkbox',
    'input',
    'input-group',
    'label',
    'field',
    'form',
    'radio-group',
    'slider',
    'select',
    'switch',
    'textarea',
    // Navigation
    'command',
    'dropdown-menu',
    'navigation-menu',
    'menubar',
    'sidebar',
    'tabs',
    // Feedback
    'alert',
    'progress',
    'sonner',
    // Layout
    'card',
    'scroll-area',
    'separator',
    // Data Display
    'accordion',
    'avatar',
    'badge',
    'table',
    'toggle',
    'toggle-group',
    // Overlays
    'alert-dialog',
    'dialog',
    'popover',
    'sheet',
    'tooltip',
  ];

  // Filter to only include components that actually exist
  return componentOrder.filter(component => allComponents.includes(component));
}

/**
 * Capitalize the first letter of a string
 */
function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

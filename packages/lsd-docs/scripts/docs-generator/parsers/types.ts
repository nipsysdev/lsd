/**
 * Types Parser
 *
 * This module extracts variant and size types from component type definitions.
 * It parses union types and type literals to determine available options.
 */

import type { SourceFile } from 'ts-morph';

/**
 * Metadata for a type definition
 */
export interface TypeMetadata {
  /** Type name (e.g., "AccordionVariants") */
  name: string;
  /** Available values for this type */
  values: string[];
  /** Description from TSDoc */
  description?: string;
  /** Default value if specified */
  defaultValue?: string;
}

/**
 * Extract variant types from a types.ts file
 *
 * Looks for type aliases that define union types or intersections that might
 * contain variant information (e.g., size options like "sm" | "md" | "lg").
 *
 * @param sourceFile - The types source file
 * @returns Array of type metadata
 */
export function extractTypeMetadata(sourceFile: SourceFile): TypeMetadata[] {
  const types: TypeMetadata[] = [];

  const typeAliases = sourceFile.getTypeAliases();

  for (const typeAlias of typeAliases) {
    const name = typeAlias.getName();
    const typeNode = typeAlias.getTypeNode();

    if (!typeNode) {
      continue;
    }

    // Get description from JSDoc
    const jsDocs = typeAlias.getJsDocs();
    let description: string | undefined;
    if (jsDocs.length > 0) {
      description = jsDocs[0].getDescription().trim();
    }

    // Extract type values based on the kind of type node
    const values = extractTypeValues(typeNode);

    if (values.length > 0) {
      types.push({
        name,
        values,
        description,
      });
    }
  }

  return types;
}

/**
 * Extract values from a type node
 *
 * Handles union types (A | B | C), intersection types, and type references.
 *
 * @param typeNode - The type node to extract values from
 * @returns Array of string values
 */
function extractTypeValues(typeNode: unknown): string[] {
  if (!typeNode) {
    return [];
  }

  const node = typeNode as { kind: number; types?: unknown[] };

  // UnionTypeNode represents: "A" | "B" | "C"
  if (node.kind === 184) {
    // SyntaxKind.UnionType
    if (node.types) {
      const values: string[] = [];
      for (const type of node.types) {
        const extracted = extractLiteralValue(type);
        if (extracted) {
          values.push(extracted);
        }
      }
      return values;
    }
  }

  // IntersectionTypeNode represents: A & B & C
  if (node.kind === 183) {
    // SyntaxKind.IntersectionType
    if (node.types) {
      const values: string[] = [];
      for (const type of node.types) {
        const extracted = extractTypeValues(type);
        values.push(...extracted);
      }
      return values;
    }
  }

  // TypeReferenceNode represents: TypeName or TypeName<Args>
  if (node.kind === 175) {
    // SyntaxKind.TypeReference
    // For type references, we might be able to follow the reference
    // For now, return empty as we'd need to resolve the reference
    return [];
  }

  return [];
}

/**
 * Extract literal value from a literal type node
 *
 * @param typeNode - The type node to extract from
 * @returns The literal string value or undefined
 */
function extractLiteralValue(typeNode: unknown): string | undefined {
  if (!typeNode) {
    return undefined;
  }

  const node = typeNode as { kind: number; literal?: { text?: string; getText?: () => string } };

  // LiteralTypeNode represents: "value", 123, true, etc.
  if (node.kind === 211) {
    // SyntaxKind.LiteralType
    const literal = node.literal;
    if (literal) {
      return literal.text || literal.getText?.();
    }
  }

  return undefined;
}

/**
 * Extract variant definitions from CVA (class-variance-authority) calls
 *
 * Looks for cva() function calls and extracts variant options from them.
 *
 * @param sourceFile - The source file to search
 * @returns Map of variant name to available values
 */
export function extractCVAVariants(sourceFile: SourceFile): Map<string, string[]> {
  const variants = new Map<string, string[]>();

  const variableDeclarations = sourceFile.getVariableStatements();

  for (const varDecl of variableDeclarations) {
    const declarations = varDecl.getDeclarations();
    for (const decl of declarations) {
      const initializer = decl.getInitializer();
      if (!initializer) {
        continue;
      }

      // Look for cva() function calls
      const callExpression = initializer.asKindOrThrow(203); // SyntaxKind.CallExpression

      if (!callExpression) {
        continue;
      }

      const expressionText = initializer.getFullText();

      // Check if this is a cva call
      if (expressionText.includes('cva(')) {
        // Extract variants object using regex
        // Use [\s\S] instead of . with s flag for ES5 compatibility
        const variantsMatch = expressionText.match(/variants:[\s\S]*?{([^}]*(?:{[^}]*}[^}]*)*)}/);
        if (variantsMatch) {
          const variantsContent = variantsMatch[1];

          // Extract each variant definition
          // Pattern: variantName: { key1: [...], key2: [...] }
          const variantDefs = variantsContent.matchAll(/(\w+):\s*{([^}]+)}/g);

          for (const match of variantDefs) {
            const variantName = match[1];
            const variantValues = extractValuesFromObject(match[2]);
            if (variantValues.length > 0) {
              variants.set(variantName, variantValues);
            }
          }
        }
      }
    }
  }

  return variants;
}

/**
 * Extract values from a CVA variant object definition
 *
 * @param objectContent - The content of the variant object (e.g., 'sm: [...], md: [...]')
 * @returns Array of value strings
 */
function extractValuesFromObject(objectContent: string): string[] {
  const values: string[] = [];

  // Match key: pattern where key is the variant value
  // Pattern: sm: [ ... ] or sm: 'value'
  const valueMatches = objectContent.matchAll(/(\w+)\s*:/g);

  for (const match of valueMatches) {
    values.push(match[1]);
  }

  return values;
}

/**
 * Check if a string is a union type
 *
 * @param typeString - The type string to check
 * @returns True if the string contains a union type indicator
 */
export function isUnionType(typeString: string): boolean {
  return typeString.includes('|');
}

/**
 * Parse a union type string to extract its values
 *
 * @param typeString - The type string (e.g., "'sm' | 'md' | 'lg'")
 * @returns Array of option values
 */
export function parseUnionType(typeString: string): string[] {
  if (!isUnionType(typeString)) {
    return [];
  }

  // Remove quotes and pipes, split by |
  return typeString
    .split('|')
    .map(s => s.trim().replace(/['"`]/g, ''))
    .filter(Boolean);
}

/**
 * Get all type aliases from a source file
 *
 * @param sourceFile - The source file to search
 * @returns Array of type alias names
 */
export function getTypeAliasNames(sourceFile: SourceFile): string[] {
  const typeAliases = sourceFile.getTypeAliases();
  return typeAliases.map(alias => alias.getName());
}

/**
 * Get type metadata by name
 *
 * @param sourceFile - The source file to search
 * @param typeName - The type name to look for
 * @returns The type metadata if found, undefined otherwise
 */
export function getTypeMetadataByName(
  sourceFile: SourceFile,
  typeName: string
): TypeMetadata | undefined {
  const typeAliases = sourceFile.getTypeAliases();

  for (const typeAlias of typeAliases) {
    if (typeAlias.getName() === typeName) {
      const typeNode = typeAlias.getTypeNode();
      if (!typeNode) {
        return undefined;
      }

      const jsDocs = typeAlias.getJsDocs();
      let description: string | undefined;
      if (jsDocs.length > 0) {
        description = jsDocs[0].getDescription().trim();
      }

      const values = extractTypeValues(typeNode);

      return {
        name: typeName,
        values,
        description,
      };
    }
  }

  return undefined;
}

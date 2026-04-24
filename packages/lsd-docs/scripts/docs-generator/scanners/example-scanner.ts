/**
 * Example Scanner
 *
 * This module discovers example files for components.
 * It scans the examples directory to find available code examples.
 */

import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { directoryExists } from '../utils/file-utils';

/**
 * Represents information about an example discovered during scanning
 */
export interface Example {
  /** The example name from the folder name (e.g., 'multiple', 'single') */
  name: string;
  /** The example title formatted from the name (e.g., 'Multiple', 'Single') */
  title: string;
  /** The category of the example (e.g., 'variant', 'size', 'feature', 'basic') */
  category: ExampleCategory;
  /** The file path to the example page.tsx */
  path: string;
  /** The iframe size for displaying this example (e.g., 'sm', 'md', 'lg') */
  iframeSize?: 'sm' | 'md' | 'lg';
}

/**
 * Categories that examples can belong to
 */
export type ExampleCategory =
  | 'usage'
  | 'variant'
  | 'size'
  | 'feature'
  | 'state'
  | 'layout'
  | 'behavior';

/**
 * Discover examples for a component.
 *
 * Scans the examples directory at `packages/lsd-docs/app/examples/{componentName}/`
 * and finds all subdirectories that contain a page.tsx file. Each subdirectory
 * represents one example.
 *
 * @param componentName - The name of the component to discover examples for (e.g., 'accordion', 'button')
 * @returns Array of Example objects with metadata, or empty array if no examples directory exists
 *
 * @example
 * ```typescript
 * const examples = await discoverExamples('accordion');
 * // Returns:
 * // [
 * //   { name: 'multiple', title: 'Multiple', description: '...', category: 'variant', path: '...' },
 * //   { name: 'single', title: 'Single', description: '...', category: 'variant', path: '...' }
 * // ]
 * ```
 */
export async function discoverExamples(componentName: string): Promise<Example[]> {
  // The script runs from packages/lsd-docs directory, so we use relative path
  const examplesDir = path.resolve(process.cwd(), `app/examples/${componentName}`);

  // Check if examples directory exists
  const dirExists = await directoryExists(examplesDir);
  if (!dirExists) {
    return [];
  }

  try {
    const entries = await fs.readdir(examplesDir, { withFileTypes: true });
    const exampleFolders = entries.filter(entry => entry.isDirectory());

    const examples: Example[] = [];

    for (const folder of exampleFolders) {
      const examplePath = path.join(examplesDir, folder.name);
      const pagePath = path.join(examplePath, 'page.tsx');

      // Check if page.tsx exists in the folder
      const pageExists = await fileExistsInDir(examplePath, 'page.tsx');
      if (!pageExists) {
        continue;
      }

      examples.push({
        name: folder.name,
        title: formatTitle(folder.name),
        category: await categorizeExampleFromFile(pagePath, folder.name),
        path: pagePath,
      });
    }

    // Sort examples by name for consistent ordering
    return examples.sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    // Propagate errors to ensure examples are properly categorized
    throw new Error(`Failed to scan examples for ${componentName}: ${error}`);
  }
}

/**
 * Categorize an example based on its @docSection TSDoc annotation.
 *
 * Reads the example file to extract the @docSection tag. The tag is mandatory.
 * Throws an error if the tag is missing or has an invalid value.
 *
 * @param examplePath - The full path to the example page.tsx file
 * @param name - The example name (folder name) for error messages
 * @returns The category for this example
 * @throws Error if @docSection tag is missing or invalid
 *
 * @example
 * ```typescript
 * // Example file with:
 * // /**
 * //  * @docSection variant
 * //  *\/
 * // export const CODE = `...`;
 *
 * categorizeExampleFromFile('/path/to/example', 'outlined') // 'variant'
 * ```
 */
export async function categorizeExampleFromFile(
  examplePath: string,
  name: string
): Promise<ExampleCategory> {
  try {
    const content = await fs.readFile(examplePath, 'utf-8');

    // Extract @docSection tag using regex
    // Pattern: @docSection value
    const docSectionMatch = content.match(/@docSection\s+(\S+)/);

    if (!docSectionMatch) {
      throw new Error(
        `Missing @docSection tag in example ${name}. ` +
          'Please add a TSDoc comment above the CODE export with @docSection tag. ' +
          'Valid values: usage, variant, size, feature, state, layout, behavior. ' +
          'Example:\n/**\n * @docSection variant\n */\nexport const CODE = `...`;'
      );
    }

    const section = docSectionMatch[1].toLowerCase();

    // Validate that the section is a valid category
    const validCategories: ExampleCategory[] = [
      'usage',
      'variant',
      'size',
      'feature',
      'state',
      'layout',
      'behavior',
    ];

    if (!validCategories.includes(section as ExampleCategory)) {
      throw new Error(
        `Invalid @docSection value "${section}" in example ${name}. ` +
          `Valid values: ${validCategories.join(', ')}.`
      );
    }

    return section as ExampleCategory;
  } catch (error) {
    if (
      (error as Error).message?.includes('Missing @docSection') ||
      (error as Error).message?.includes('Invalid @docSection')
    ) {
      throw error; // Re-throw our own errors
    }
    throw new Error(`Failed to read @docSection from example ${name}: ${error}`);
  }
}

/**
 * Format a title from the example name.
 *
 * Converts kebab-case, snake_case, or camelCase to Title Case:
 * - 'multiple' → 'Multiple'
 * - 'all-variants' → 'All Variants'
 * - 'with-icons' → 'With Icons'
 *
 * @param name - The example name (folder name)
 * @returns Formatted title in Title Case
 *
 * @example
 * ```typescript
 * formatTitle('multiple') // 'Multiple'
 * formatTitle('all-variants') // 'All Variants'
 * formatTitle('with-icons') // 'With Icons'
 * ```
 */
export function formatTitle(name: string): string {
  return name
    .split(/[-_]/)
    .map(word => capitalize(word))
    .join(' ');
}

/**
 * Capitalize a string.
 *
 * @param str - The string to capitalize
 * @returns The string with first letter uppercase
 */
function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Check if a file exists in a directory.
 *
 * @param dirPath - The directory path
 * @param fileName - The file name to check
 * @returns True if the file exists, false otherwise
 */
async function fileExistsInDir(dirPath: string, fileName: string): Promise<boolean> {
  const filePath = path.join(dirPath, fileName);
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

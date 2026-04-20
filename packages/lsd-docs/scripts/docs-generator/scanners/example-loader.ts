/**
 * Example Loader
 *
 * This module loads example code from example page files.
 * It extracts CODE exports and function names from example pages using file system operations.
 */

import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import type { Example } from './example-scanner';
import { discoverExamples } from './example-scanner';

/**
 * Represents a fully loaded example with code
 */
export interface LoadedExample extends Example {
  /** The source code from the CODE constant */
  code: string;
  /** The iframe size for displaying this example (e.g., 'sm', 'md', 'lg') */
  iframeSize?: 'sm' | 'md' | 'lg';
}

/**
 * Load all examples for a component.
 *
 * Discovers all examples for a component and loads their code and metadata.
 * Combines the discovery and loading processes for convenience.
 *
 * @param componentName - The name of the component (e.g., 'accordion', 'button')
 * @returns Array of LoadedExample objects, or empty array if no examples exist
 *
 * @example
 * ```typescript
 * const examples = await loadAllExamples('accordion');
 * // Returns:
 * // [
 * //   {
 * //     name: 'multiple',
 * //     title: 'Multiple',
 * //     description: 'Multiple panels can be expanded simultaneously',
 * //     category: 'variant',
 * //     path: '.../accordion/multiple/page.tsx',
 * //     code: 'import { Accordion, ... }...',
 * //     functionName: 'AccordionMultipleExample'
 * //   },
 * //   {
 * //     name: 'single',
 * //     title: 'Single',
 * //     description: 'Only one panel can be expanded at a time',
 * //     category: 'variant',
 * //     path: '.../accordion/single/page.tsx',
 * //     code: 'import { Accordion, ... }...',
 * //     functionName: 'AccordionSingleExample'
 * //   }
 * // ]
 * ```
 */
export async function loadAllExamples(componentName: string): Promise<LoadedExample[]> {
  try {
    // Discover examples for the component
    const examples = await discoverExamples(componentName);

    // Load code for each example
    const loadedExamples: LoadedExample[] = [];

    for (const example of examples) {
      const loaded = await loadExampleCode(componentName, example.name);
      if (loaded) {
        // Merge the scanner metadata with the loader data
        loadedExamples.push({
          ...loaded,
          title: example.title,
          category: example.category,
          path: example.path,
        });
      }
    }

    return loadedExamples;
  } catch (error) {
    console.warn(`Warning: Failed to load examples for ${componentName}:`, error);
    return [];
  }
}

/**
 * Load example code from an example page.
 *
 * Reads the example page.tsx file and extracts:
 * - The CODE constant containing the example source code
 * - The SIZE constant containing the iframe size (optional)
 *
 * @param componentName - The name of the component (e.g., 'accordion', 'button')
 * @param exampleName - The name of the example (e.g., 'multiple', 'single')
 * @returns LoadedExample object with code, or null if the example doesn't exist
 *
 * @example
 * ```typescript
 * const example = await loadExampleCode('accordion', 'multiple');
 * // Returns:
 * // {
 * //   name: 'multiple',
 * //   title: 'Multiple',
 * //   description: 'Multiple panels can be expanded simultaneously',
 * //   category: 'variant',
 * //   path: '.../accordion/multiple/page.tsx',
 * //   code: 'import { Accordion, ... }...'
 * // }
 * ```
 */
export async function loadExampleCode(
  componentName: string,
  exampleName: string
): Promise<LoadedExample | null> {
  try {
    // Construct the file path to the example page
    // The loader file is at: scripts/docs-generator/scanners/example-loader.ts
    // To get to: app/examples/{componentName}/{exampleName}/page.tsx
    // We need: ../../../app/examples/{componentName}/{exampleName}/page.tsx
    const filePath = path.resolve(
      process.cwd(),
      `app/examples/${componentName}/${exampleName}/page.tsx`
    );

    // Read the file content
    const content = await fs.readFile(filePath, 'utf-8');

    // Extract the CODE constant using regex
    // Pattern: export const CODE = `...`;
    const codeMatch = content.match(/export const CODE = `([\s\S]*?)`;/);
    if (!codeMatch) {
      console.warn(
        `Warning: Example ${componentName}/${exampleName} does not export a CODE constant`
      );
      return null;
    }

    const code = codeMatch[1];

    // Extract the SIZE constant using regex (optional)
    // Pattern: export const SIZE = 'sm' | 'md' | 'lg';
    const sizeMatch = content.match(/export const SIZE = '(sm|md|lg)';/);
    const iframeSize = sizeMatch ? (sizeMatch[1] as 'sm' | 'md' | 'lg') : undefined;

    // Build the example metadata
    return {
      name: exampleName,
      title: capitalize(exampleName),
      category: 'feature' as const, // Will be filled by scanner (using feature as default type)
      path: filePath,
      code,
      iframeSize,
    };
  } catch (error) {
    // Handle missing or invalid examples gracefully
    if ((error as Error).message?.includes('ENOENT')) {
      // Example doesn't exist - this is expected for some components
      return null;
    }
    console.warn(`Warning: Failed to load example ${componentName}/${exampleName}:`, error);
    return null;
  }
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

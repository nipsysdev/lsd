/**
 * Component Discovery Parser
 *
 * This module parses the main.ts file to discover all exported components.
 * It identifies component exports that can be used for documentation generation.
 */

import * as path from 'node:path';
import { readFile } from '../utils/file-utils';

/**
 * Discover all components exported from main.ts
 *
 * @returns Array of component names
 * @throws {Error} If main.ts file cannot be read
 */
export async function discoverAllComponents(): Promise<string[]> {
  try {
    // Determine workspace root - go up from current directory until we find the monorepo root
    let currentDir = process.cwd();

    // If we're in the scripts directory, go up to lsd-docs
    if (currentDir.endsWith('/scripts')) {
      currentDir = path.dirname(currentDir);
    }

    // If we're in lsd-docs, go up to workspace root
    if (currentDir.endsWith('/packages/lsd-docs')) {
      currentDir = path.resolve(currentDir, '../..');
    }

    const mainTsPath = path.resolve(currentDir, 'packages/lsd/src/main.ts');
    const content = await readFile(mainTsPath);

    // Match export statements like: export * from '@/components/ui/accordion'
    const exports = content.match(/export \* from '@\/components\/ui\/([^']+)'/g);

    if (!exports) {
      return [];
    }

    return exports
      .map(exp => {
        const match = exp.match(/ui\/([^']+)'/);
        return match ? match[1] : '';
      })
      .filter(Boolean);
  } catch (error) {
    console.error('Error discovering components:', error);
    return [];
  }
}

/**
 * Resolve the component file path for a given component name
 *
 * @param componentName - The name of the component
 * @returns The resolved path to the component directory
 */
export function resolveComponentPath(componentName: string): string {
  // Get workspace root from current directory
  let currentDir = process.cwd();

  // If we're in the scripts directory, go up to lsd-docs
  if (currentDir.endsWith('/scripts')) {
    currentDir = path.dirname(currentDir);
  }

  // If we're in lsd-docs, go up to workspace root
  if (currentDir.endsWith('/packages/lsd-docs')) {
    currentDir = path.resolve(currentDir, '../..');
  }

  // Resolve from workspace root
  return path.resolve(currentDir, `packages/lsd/src/components/ui/${componentName}`);
}

/**
 * Check if a component exists in the main.ts exports
 *
 * @param componentName - The name of the component to check
 * @param allComponents - Optional array of all component names (will discover if not provided)
 * @returns True if the component exists, false otherwise
 */
export async function componentExists(
  componentName: string,
  allComponents?: string[]
): Promise<boolean> {
  const components = allComponents || (await discoverAllComponents());
  return components.includes(componentName);
}

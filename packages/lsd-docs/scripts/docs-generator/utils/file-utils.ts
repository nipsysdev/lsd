/**
 * File Utilities
 *
 * This module provides helper functions for file reading and writing operations.
 */

import * as fs from 'node:fs/promises';
import * as path from 'node:path';

/**
 * Read a file and return its contents
 */
export async function readFile(filePath: string): Promise<string> {
  return await fs.readFile(path.resolve(filePath), 'utf-8');
}

/**
 * Write content to a file, creating directories if needed
 */
export async function writeFile(filePath: string, content: string): Promise<void> {
  const resolvedPath = path.resolve(filePath);
  const dir = path.dirname(resolvedPath);

  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(resolvedPath, content, 'utf-8');
}

/**
 * Check if a file exists
 */
export async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(path.resolve(filePath));
    return true;
  } catch {
    return false;
  }
}

/**
 * Check if a directory exists
 */
export async function directoryExists(dirPath: string): Promise<boolean> {
  try {
    const stats = await fs.stat(path.resolve(dirPath));
    return stats.isDirectory();
  } catch {
    return false;
  }
}

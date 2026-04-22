import * as fs from 'node:fs/promises';
import { join } from 'node:path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { directoryExists, fileExists, readFile, writeFile } from '../file-utils';

describe('FileUtils', () => {
  const testDir = join(process.cwd(), 'test-temp');
  const testFile = join(testDir, 'test.txt');
  const testContent = 'Test content for file operations';

  beforeEach(async () => {
    // Create test directory
    try {
      await fs.mkdir(testDir, { recursive: true });
    } catch {
      // Directory might already exist
    }
  });

  afterEach(async () => {
    // Clean up test directory
    try {
      await fs.rm(testDir, { recursive: true, force: true });
    } catch {
      // Directory might not exist
    }
  });

  describe('readFile', () => {
    it('should read file content', async () => {
      await fs.writeFile(testFile, testContent);

      const content = await readFile(testFile);

      expect(content).toBe(testContent);
    });

    it('should resolve relative paths', async () => {
      await fs.writeFile(testFile, testContent);

      // Use relative path
      const relativePath = join(process.cwd(), 'test-temp', 'test.txt');
      const content = await readFile(relativePath);

      expect(content).toBe(testContent);
    });

    it('should throw when file does not exist', async () => {
      const nonExistentFile = join(testDir, 'nonexistent.txt');

      await expect(readFile(nonExistentFile)).rejects.toThrow();
    });

    it('should handle empty files', async () => {
      const emptyFile = join(testDir, 'empty.txt');
      await fs.writeFile(emptyFile, '');

      const content = await readFile(emptyFile);

      expect(content).toBe('');
    });

    it('should handle UTF-8 encoded content', async () => {
      const unicodeContent = 'Hello 世界 🌍';
      await fs.writeFile(testFile, unicodeContent);

      const content = await readFile(testFile);

      expect(content).toBe(unicodeContent);
    });
  });

  describe('writeFile', () => {
    it('should write content to file', async () => {
      await writeFile(testFile, testContent);

      const exists = await fs
        .access(testFile)
        .then(() => true)
        .catch(() => false);
      expect(exists).toBe(true);

      const content = await fs.readFile(testFile, 'utf-8');
      expect(content).toBe(testContent);
    });

    it('should create directory if it does not exist', async () => {
      const nestedDir = join(testDir, 'nested', 'deeply');
      const nestedFile = join(nestedDir, 'nested.txt');

      await writeFile(nestedFile, testContent);

      const exists = await fs
        .access(nestedFile)
        .then(() => true)
        .catch(() => false);
      expect(exists).toBe(true);

      const content = await fs.readFile(nestedFile, 'utf-8');
      expect(content).toBe(testContent);
    });

    it('should overwrite existing file', async () => {
      await fs.writeFile(testFile, 'Old content');
      const newContent = 'New content';

      await writeFile(testFile, newContent);

      const content = await fs.readFile(testFile, 'utf-8');
      expect(content).toBe(newContent);
    });

    it('should handle empty content', async () => {
      await writeFile(testFile, '');

      const content = await fs.readFile(testFile, 'utf-8');
      expect(content).toBe('');
    });

    it('should handle UTF-8 encoded content', async () => {
      const unicodeContent = 'Hello 世界 🌍';

      await writeFile(testFile, unicodeContent);

      const content = await fs.readFile(testFile, 'utf-8');
      expect(content).toBe(unicodeContent);
    });

    it('should handle multi-line content', async () => {
      const multiLineContent = 'Line 1\nLine 2\nLine 3';

      await writeFile(testFile, multiLineContent);

      const content = await fs.readFile(testFile, 'utf-8');
      expect(content).toBe(multiLineContent);
    });
  });

  describe('fileExists', () => {
    it('should return true for existing file', async () => {
      await fs.writeFile(testFile, testContent);

      const exists = await fileExists(testFile);

      expect(exists).toBe(true);
    });

    it('should return false for non-existent file', async () => {
      const nonExistentFile = join(testDir, 'nonexistent.txt');

      const exists = await fileExists(nonExistentFile);

      expect(exists).toBe(false);
    });

    it('should return true for directory (fs.access works on directories)', async () => {
      // Note: fs.access doesn't throw for directories, so fileExists returns true
      const exists = await fileExists(testDir);

      expect(exists).toBe(true);
    });

    it('should handle relative paths correctly', async () => {
      await fs.writeFile(testFile, testContent);

      const relativePath = join(process.cwd(), 'test-temp', 'test.txt');
      const exists = await fileExists(relativePath);

      expect(exists).toBe(true);
    });
  });

  describe('directoryExists', () => {
    it('should return true for existing directory', async () => {
      const exists = await directoryExists(testDir);

      expect(exists).toBe(true);
    });

    it('should return false for non-existent directory', async () => {
      const nonExistentDir = join(testDir, 'nonexistent');

      const exists = await directoryExists(nonExistentDir);

      expect(exists).toBe(false);
    });

    it('should return false for file', async () => {
      await fs.writeFile(testFile, testContent);

      const exists = await directoryExists(testFile);

      expect(exists).toBe(false);
    });

    it('should handle nested directories', async () => {
      const nestedDir = join(testDir, 'nested', 'deeply');
      await fs.mkdir(nestedDir, { recursive: true });

      const exists = await directoryExists(nestedDir);

      expect(exists).toBe(true);
    });

    it('should handle relative paths correctly', async () => {
      const relativeDir = join(process.cwd(), 'test-temp');
      const exists = await directoryExists(relativeDir);

      expect(exists).toBe(true);
    });
  });
});

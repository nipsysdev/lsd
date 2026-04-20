/**
 * Example Scanner Tests
 *
 * Tests for discovering example files for components
 */

import * as fs from 'node:fs/promises';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  discoverExamples,
  type Example,
  formatTitle,
} from '../../../scripts/docs-generator/scanners/example-scanner';

// Mock fs and directoryExists
vi.mock('../../../scripts/docs-generator/utils/file-utils', () => ({
  directoryExists: vi.fn(),
}));

import { directoryExists } from '../../../scripts/docs-generator/utils/file-utils';

describe('Example Scanner', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('discoverExamples', () => {
    it('should return empty array when examples directory does not exist', async () => {
      vi.mocked(directoryExists).mockResolvedValue(false);

      const examples = await discoverExamples('accordion');
      expect(examples).toEqual([]);
    });

    it('should return empty array on readdir error', async () => {
      vi.mocked(directoryExists).mockResolvedValue(true);
      vi.spyOn(fs, 'readdir').mockRejectedValue(new Error('Permission denied'));

      const examples = await discoverExamples('accordion');
      expect(examples).toEqual([]);
    });

    it('should discover example folders with page.tsx', async () => {
      vi.mocked(directoryExists).mockResolvedValue(true);
      vi.spyOn(fs, 'readdir').mockResolvedValue([
        { name: 'multiple', isDirectory: () => true },
        { name: 'single', isDirectory: () => true },
      ] as any);
      vi.spyOn(fs, 'access').mockResolvedValue(undefined);

      const examples = await discoverExamples('accordion');
      expect(examples).toHaveLength(2);
      expect(examples[0].name).toBe('multiple');
      expect(examples[1].name).toBe('single');
    });

    it('should skip folders without page.tsx', async () => {
      vi.mocked(directoryExists).mockResolvedValue(true);
      vi.spyOn(fs, 'readdir').mockResolvedValue([
        { name: 'multiple', isDirectory: () => true },
        { name: 'single', isDirectory: () => true },
        { name: 'invalid', isDirectory: () => true },
      ] as any);

      // Mock access to fail for 'invalid' folder
      vi.spyOn(fs, 'access').mockImplementation((filePath: any) => {
        if (filePath.toString().includes('invalid')) {
          return Promise.reject(new Error('ENOENT'));
        }
        return Promise.resolve(undefined);
      });

      const examples = await discoverExamples('accordion');
      expect(examples).toHaveLength(2);
      expect(examples.every((e: Example) => ['multiple', 'single'].includes(e.name))).toBe(true);
    });

    it('should sort examples by name', async () => {
      vi.mocked(directoryExists).mockResolvedValue(true);
      vi.spyOn(fs, 'readdir').mockResolvedValue([
        { name: 'zebra', isDirectory: () => true },
        { name: 'apple', isDirectory: () => true },
        { name: 'middle', isDirectory: () => true },
      ] as any);
      vi.spyOn(fs, 'access').mockResolvedValue(undefined);

      const examples = await discoverExamples('test');
      expect(examples.map((e: Example) => e.name)).toEqual(['apple', 'middle', 'zebra']);
    });

    it('should skip non-directory entries', async () => {
      vi.mocked(directoryExists).mockResolvedValue(true);
      vi.spyOn(fs, 'readdir').mockResolvedValue([
        { name: 'valid', isDirectory: () => true },
        { name: 'file.txt', isDirectory: () => false },
        { name: 'another', isDirectory: () => true },
      ] as any);
      vi.spyOn(fs, 'access').mockResolvedValue(undefined);

      const examples = await discoverExamples('test');
      expect(examples).toHaveLength(2);
      expect(examples.every((e: Example) => ['valid', 'another'].includes(e.name))).toBe(true);
    });

    it('should handle empty examples directory', async () => {
      vi.mocked(directoryExists).mockResolvedValue(true);
      vi.spyOn(fs, 'readdir').mockResolvedValue([]);

      const examples = await discoverExamples('test');
      expect(examples).toEqual([]);
    });

    it('should build correct path for each example', async () => {
      vi.mocked(directoryExists).mockResolvedValue(true);
      vi.spyOn(fs, 'readdir').mockResolvedValue([
        { name: 'example1', isDirectory: () => true },
      ] as any);
      vi.spyOn(fs, 'access').mockResolvedValue(undefined);

      const examples = await discoverExamples('my-component');
      expect(examples[0].path).toContain('my-component');
      expect(examples[0].path).toContain('example1');
      expect(examples[0].path).toContain('page.tsx');
    });
  });

  describe('formatTitle', () => {
    it('should format simple names', () => {
      expect(formatTitle('multiple')).toBe('Multiple');
      expect(formatTitle('single')).toBe('Single');
      expect(formatTitle('basic')).toBe('Basic');
    });

    it('should format kebab-case names', () => {
      expect(formatTitle('all-variants')).toBe('All Variants');
      expect(formatTitle('with-icons')).toBe('With Icons');
      expect(formatTitle('form-controlled')).toBe('Form Controlled');
      expect(formatTitle('custom-theme')).toBe('Custom Theme');
    });

    it('should format snake_case names', () => {
      expect(formatTitle('all_variants')).toBe('All Variants');
      expect(formatTitle('with_icons')).toBe('With Icons');
    });

    it('should format camelCase names', () => {
      expect(formatTitle('allVariants')).toBe('All Variants');
      expect(formatTitle('basicExample')).toBe('Basic Example');
    });

    it('should handle multiple separators', () => {
      expect(formatTitle('all-variants-sizes')).toBe('All Variants Sizes');
      expect(formatTitle('with_custom-icons')).toBe('With Custom Icons');
    });

    it('should handle single word', () => {
      expect(formatTitle('test')).toBe('Test');
      expect(formatTitle('example')).toBe('Example');
    });

    it('should handle empty string', () => {
      expect(formatTitle('')).toBe('');
    });

    it('should handle consecutive separators', () => {
      expect(formatTitle('all--variants')).toBe('All Variants');
      expect(formatTitle('test___multiple')).toBe('Test Multiple');
    });
  });
});

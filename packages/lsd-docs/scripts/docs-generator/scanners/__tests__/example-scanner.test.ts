import * as fs from 'node:fs/promises';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { directoryExists } from '../../utils/file-utils';
import { categorizeExampleFromFile, discoverExamples, formatTitle } from '../example-scanner';

// Mock file-utils
vi.mock('../../utils/file-utils', () => ({
  directoryExists: vi.fn(),
}));

// Mock fs module
vi.mock('node:fs/promises', () => ({
  readdir: vi.fn(),
  readFile: vi.fn(),
  access: vi.fn(),
  mkdir: vi.fn(),
  writeFile: vi.fn(),
}));

describe('Example Scanner', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('formatTitle', () => {
    it('should format single word names', () => {
      expect(formatTitle('basic')).toBe('Basic');
      expect(formatTitle('test')).toBe('Test');
    });

    it('should format kebab-case names', () => {
      expect(formatTitle('basic-example')).toBe('Basic Example');
      expect(formatTitle('with-icons')).toBe('With Icons');
      expect(formatTitle('multiple-words-here')).toBe('Multiple Words Here');
    });

    it('should format snake_case names', () => {
      expect(formatTitle('basic_example')).toBe('Basic Example');
      expect(formatTitle('test_case_two')).toBe('Test Case Two');
    });

    it('should handle mixed separators', () => {
      expect(formatTitle('test_case-name')).toBe('Test Case Name');
    });

    it('should handle empty string', () => {
      expect(formatTitle('')).toBe('');
    });

    it('should capitalize first letter of each word', () => {
      expect(formatTitle('hello-world')).toBe('Hello World');
      // Note: capitalize() only uppercases first letter, doesn't lowercase rest
      expect(formatTitle('THE-COMPONENT')).toBe('THE COMPONENT');
    });

    it('should handle multiple consecutive separators', () => {
      expect(formatTitle('test--case')).toBe('Test  Case');
      expect(formatTitle('test__case')).toBe('Test  Case');
    });

    it('should handle strings with special characters', () => {
      expect(formatTitle('test-123')).toBe('Test 123');
      expect(formatTitle('a-b-c')).toBe('A B C');
    });

    it('should handle single character', () => {
      expect(formatTitle('a')).toBe('A');
    });
  });

  describe('discoverExamples', () => {
    it('should return empty array when examples directory does not exist', async () => {
      vi.mocked(directoryExists).mockResolvedValue(false);

      const result = await discoverExamples('button');

      expect(result).toEqual([]);
      expect(directoryExists).toHaveBeenCalledWith(expect.stringContaining('app/examples/button'));
    });

    it('should discover and return examples from existing directory', async () => {
      vi.mocked(directoryExists).mockResolvedValue(true);
      vi.mocked(fs.readdir).mockResolvedValue([
        {
          name: 'basic',
          isDirectory: () => true,
          isFile: () => false,
        } as any,
        {
          name: 'with-icons',
          isDirectory: () => true,
          isFile: () => false,
        } as any,
      ] as any);

      vi.mocked(fs.access).mockResolvedValue(undefined);

      vi.mocked(fs.readFile).mockResolvedValue(`
        /**
         * @docSection usage
         */
        export const CODE = \`...\`;
      `);

      const result = await discoverExamples('button');

      expect(result).toHaveLength(2);
      expect(result[0]).toMatchObject({
        name: 'basic',
        title: 'Basic',
        category: 'usage',
      });
      expect(result[1]).toMatchObject({
        name: 'with-icons',
        title: 'With Icons',
        category: 'usage',
      });
    });

    it('should filter out folders without page.tsx', async () => {
      vi.mocked(directoryExists).mockResolvedValue(true);
      vi.mocked(fs.readdir).mockResolvedValue([
        {
          name: 'with-page',
          isDirectory: () => true,
          isFile: () => false,
        } as any,
        {
          name: 'without-page',
          isDirectory: () => true,
          isFile: () => false,
        } as any,
      ] as any);

      vi.mocked(fs.access).mockImplementation(async filePath => {
        if (String(filePath).includes('without-page')) {
          throw new Error('File not found');
        }
        return undefined;
      });

      vi.mocked(fs.readFile).mockResolvedValue(`
        /**
         * @docSection variant
         */
        export const CODE = \`...\`;
      `);

      const result = await discoverExamples('button');

      expect(result).toHaveLength(1);
      expect(result[0].name).toBe('with-page');
    });

    it('should sort examples by name alphabetically', async () => {
      vi.mocked(directoryExists).mockResolvedValue(true);
      vi.mocked(fs.readdir).mockResolvedValue([
        {
          name: 'zebra',
          isDirectory: () => true,
          isFile: () => false,
        } as any,
        {
          name: 'apple',
          isDirectory: () => true,
          isFile: () => false,
        } as any,
        {
          name: 'banana',
          isDirectory: () => true,
          isFile: () => false,
        } as any,
      ] as any);

      vi.mocked(fs.access).mockResolvedValue(undefined);

      vi.mocked(fs.readFile).mockResolvedValue(`
        /**
         * @docSection feature
         */
        export const CODE = \`...\`;
      `);

      const result = await discoverExamples('button');

      expect(result).toHaveLength(3);
      expect(result[0].name).toBe('apple');
      expect(result[1].name).toBe('banana');
      expect(result[2].name).toBe('zebra');
    });

    it('should skip non-directory entries', async () => {
      vi.mocked(directoryExists).mockResolvedValue(true);
      vi.mocked(fs.readdir).mockResolvedValue([
        {
          name: 'example',
          isDirectory: () => true,
          isFile: () => false,
        } as any,
        {
          name: 'readme.md',
          isDirectory: () => false,
          isFile: () => true,
        } as any,
        {
          name: '.gitkeep',
          isDirectory: () => false,
          isFile: () => true,
        } as any,
      ] as any);

      vi.mocked(fs.access).mockResolvedValue(undefined);

      vi.mocked(fs.readFile).mockResolvedValue(`
        /**
         * @docSection size
         */
        export const CODE = \`...\`;
      `);

      const result = await discoverExamples('button');

      expect(result).toHaveLength(1);
      expect(result[0].name).toBe('example');
    });

    it('should throw error when scanning fails', async () => {
      vi.mocked(directoryExists).mockResolvedValue(true);
      vi.mocked(fs.readdir).mockRejectedValue(new Error('Permission denied'));

      await expect(discoverExamples('button')).rejects.toThrow(
        'Failed to scan examples for button'
      );
    });

    it('should handle empty examples directory', async () => {
      vi.mocked(directoryExists).mockResolvedValue(true);
      vi.mocked(fs.readdir).mockResolvedValue([] as any);

      const result = await discoverExamples('button');

      expect(result).toEqual([]);
    });
  });

  describe('categorizeExampleFromFile', () => {
    it('should extract valid category from @docSection tag', async () => {
      const content = `
        /**
         * @docSection variant
         */
        export const CODE = \`...\`;
      `;

      vi.mocked(fs.readFile).mockResolvedValue(content);

      const result = await categorizeExampleFromFile('/path/to/example.tsx', 'test');

      expect(result).toBe('variant');
    });

    it('should handle all valid categories', async () => {
      const validCategories: Array<{ tag: string; expected: string }> = [
        { tag: 'usage', expected: 'usage' },
        { tag: 'variant', expected: 'variant' },
        { tag: 'size', expected: 'size' },
        { tag: 'feature', expected: 'feature' },
        { tag: 'state', expected: 'state' },
        { tag: 'layout', expected: 'layout' },
        { tag: 'behavior', expected: 'behavior' },
      ];

      for (const { tag, expected } of validCategories) {
        const content = `
          /**
           * @docSection ${tag}
           */
          export const CODE = \`...\`;
        `;

        vi.mocked(fs.readFile).mockResolvedValue(content);

        const result = await categorizeExampleFromFile('/path/to/example.tsx', 'test');

        expect(result).toBe(expected);
      }
    });

    it('should be case insensitive for category values', async () => {
      const content = `
        /**
         * @docSection Variant
         */
        export const CODE = \`...\`;
      `;

      vi.mocked(fs.readFile).mockResolvedValue(content);

      const result = await categorizeExampleFromFile('/path/to/example.tsx', 'test');

      expect(result).toBe('variant');
    });

    it('should handle @docSection tag with extra whitespace', async () => {
      const content = `
        /**
         * @docSection    variant
         */
        export const CODE = \`...\`;
      `;

      vi.mocked(fs.readFile).mockResolvedValue(content);

      const result = await categorizeExampleFromFile('/path/to/example.tsx', 'test');

      expect(result).toBe('variant');
    });

    it('should throw error when @docSection tag is missing', async () => {
      const content = `
        /**
         * Some regular comment
         */
        export const CODE = \`...\`;
      `;

      vi.mocked(fs.readFile).mockResolvedValue(content);

      await expect(
        categorizeExampleFromFile('/path/to/example.tsx', 'example-name')
      ).rejects.toThrow('Missing @docSection tag in example example-name');
    });

    it('should throw error with helpful message when @docSection is missing', async () => {
      const content = 'export const CODE = `...`;';

      vi.mocked(fs.readFile).mockResolvedValue(content);

      await expect(categorizeExampleFromFile('/path/to/example.tsx', 'my-example')).rejects.toThrow(
        /Missing @docSection tag/
      );
      await expect(categorizeExampleFromFile('/path/to/example.tsx', 'my-example')).rejects.toThrow(
        /Please add a TSDoc comment/
      );
      await expect(categorizeExampleFromFile('/path/to/example.tsx', 'my-example')).rejects.toThrow(
        /Valid values: usage, variant, size, feature, state, layout, behavior/
      );
    });

    it('should throw error when @docSection value is invalid', async () => {
      const content = `
        /**
         * @docSection invalid-category
         */
        export const CODE = \`...\`;
      `;

      vi.mocked(fs.readFile).mockResolvedValue(content);

      await expect(
        categorizeExampleFromFile('/path/to/example.tsx', 'example-name')
      ).rejects.toThrow('Invalid @docSection value "invalid-category" in example example-name');
      await expect(
        categorizeExampleFromFile('/path/to/example.tsx', 'example-name')
      ).rejects.toThrow('Valid values: usage, variant, size, feature, state, layout, behavior');
    });

    it('should re-throw custom errors for missing or invalid tags', async () => {
      const content = 'export const CODE = `...`;';

      vi.mocked(fs.readFile).mockResolvedValue(content);

      const error = await categorizeExampleFromFile('/path/to/example.tsx', 'example').catch(
        e => e
      );

      expect(error.message).toContain('Missing @docSection tag');
    });

    it('should throw error when file read fails', async () => {
      vi.mocked(fs.readFile).mockRejectedValue(new Error('File not found'));

      await expect(
        categorizeExampleFromFile('/path/to/nonexistent.tsx', 'example')
      ).rejects.toThrow('Failed to read @docSection from example example');
    });

    it('should handle file content without comments gracefully', async () => {
      const content = 'export const CODE = `...`;';

      vi.mocked(fs.readFile).mockResolvedValue(content);

      await expect(categorizeExampleFromFile('/path/to/example.tsx', 'example')).rejects.toThrow(
        'Missing @docSection tag'
      );
    });

    it('should extract @docSection from complex file with multiple comments', async () => {
      const content = `
        /**
         * Some other comment
         */
        const helper = () => {};

        /**
         * @docSection feature
         * Some description here
         * @anotherTag value
         */
        export const CODE = \`...\`;
      `;

      vi.mocked(fs.readFile).mockResolvedValue(content);

      const result = await categorizeExampleFromFile('/path/to/example.tsx', 'test');

      expect(result).toBe('feature');
    });

    it('should handle @docSection at the beginning of file', async () => {
      const content = `/**
 * @docSection usage
 */
export const CODE = \`...\`;`;

      vi.mocked(fs.readFile).mockResolvedValue(content);

      const result = await categorizeExampleFromFile('/path/to/example.tsx', 'test');

      expect(result).toBe('usage');
    });

    it('should match first @docSection in file (regex limitation)', async () => {
      const content = `
        const x = "This is @docSection variant in a string";
        /**
         * @docSection behavior
         */
        export const CODE = \`...\`;
      `;

      vi.mocked(fs.readFile).mockResolvedValue(content);

      // Note: The regex matches first occurrence regardless of context
      const result = await categorizeExampleFromFile('/path/to/example.tsx', 'test');

      expect(result).toBe('variant');
    });
  });
});

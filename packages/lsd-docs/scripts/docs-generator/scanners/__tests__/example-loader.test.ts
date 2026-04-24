import * as fs from 'node:fs/promises';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { loadAllExamples, loadExampleCode } from '../example-loader';
import { discoverExamples } from '../example-scanner';

// Mock fs module
vi.mock('node:fs/promises', () => ({
  readFile: vi.fn(),
}));

// Mock example-scanner
vi.mock('../example-scanner', () => ({
  discoverExamples: vi.fn(),
}));

describe('Example Loader', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Mock console.warn to avoid cluttering test output
    vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  describe('loadExampleCode', () => {
    it('should load example code from a valid file', async () => {
      const content =
        'export const CODE = `import { Button } from "@nipsys/lsd";\n\nexport default function Example() {\n  return <Button>Click me</Button>;\n}`;';

      vi.mocked(fs.readFile).mockResolvedValue(content);

      const result = await loadExampleCode('button', 'basic');

      expect(result).not.toBeNull();
      expect(result?.name).toBe('basic');
      expect(result?.title).toBe('Basic');
      expect(result?.code).toContain('import { Button }');
      expect(result?.code).toContain('Click me');
      expect(result?.iframeSize).toBeUndefined();
    });

    it('should load example with SIZE constant', async () => {
      const content = "export const CODE = `<Button>Example</Button>`;\nexport const SIZE = 'lg';";

      vi.mocked(fs.readFile).mockResolvedValue(content);

      const result = await loadExampleCode('button', 'large');

      expect(result).not.toBeNull();
      expect(result?.iframeSize).toBe('lg');
    });

    it('should handle sm size', async () => {
      const content = "export const CODE = `<Button>Small</Button>`;\nexport const SIZE = 'sm';";

      vi.mocked(fs.readFile).mockResolvedValue(content);

      const result = await loadExampleCode('button', 'small');

      expect(result?.iframeSize).toBe('sm');
    });

    it('should handle md size', async () => {
      const content = "export const CODE = `<Button>Medium</Button>`;\nexport const SIZE = 'md';";

      vi.mocked(fs.readFile).mockResolvedValue(content);

      const result = await loadExampleCode('button', 'medium');

      expect(result?.iframeSize).toBe('md');
    });

    it('should return null when CODE constant is missing', async () => {
      const content = 'export const NO_CODE = `...`;';

      vi.mocked(fs.readFile).mockResolvedValue(content);

      const result = await loadExampleCode('button', 'invalid');

      expect(result).toBeNull();
      expect(console.warn).toHaveBeenCalledWith(
        expect.stringContaining('does not export a CODE constant')
      );
    });

    it('should return null when file does not exist (ENOENT)', async () => {
      const error = new Error('File not found');
      (error as any).code = 'ENOENT';
      vi.mocked(fs.readFile).mockRejectedValue(error);

      const result = await loadExampleCode('button', 'nonexistent');

      expect(result).toBeNull();
      // ENOENT errors shouldn't log warnings
    });

    it('should return null when read fails with other error', async () => {
      const error = new Error('Permission denied');
      vi.mocked(fs.readFile).mockRejectedValue(error);

      const result = await loadExampleCode('button', 'error');

      expect(result).toBeNull();
      expect(console.warn).toHaveBeenCalled();
    });

    it('should extract multi-line code correctly', async () => {
      const content =
        'export const CODE = `import { Button, Typography } from "@nipsys/lsd";\n\nexport function Example() {\n  return (\n    <div>\n      <Typography variant="body1">\n        Hello World\n      </Typography>\n      <Button>Click</Button>\n    </div>\n  );\n}`;';

      vi.mocked(fs.readFile).mockResolvedValue(content);

      const result = await loadExampleCode('button', 'multiline');

      expect(result?.code).toContain('import { Button, Typography }');
      expect(result?.code).toContain('Hello World');
      expect(result?.code).toContain('Click');
    });

    it('should handle code with special characters', async () => {
      const content = 'export const CODE = `const a = "string";\nconst b = \'another\';`;';
      vi.mocked(fs.readFile).mockResolvedValue(content);

      const result = await loadExampleCode('test', 'special');

      expect(result?.code).toContain('const a = "string"');
      expect(result?.code).toContain('const b');
    });

    it('should construct correct file path', async () => {
      const content = 'export const CODE = `<Button>Test</Button>`;';
      vi.mocked(fs.readFile).mockResolvedValue(content);

      await loadExampleCode('accordion', 'single');

      expect(fs.readFile).toHaveBeenCalledWith(
        expect.stringContaining('app/examples/accordion/single/page.tsx'),
        'utf-8'
      );
    });

    it('should set default category as feature', async () => {
      const content = 'export const CODE = `<Button>Test</Button>`;';
      vi.mocked(fs.readFile).mockResolvedValue(content);

      const result = await loadExampleCode('button', 'test');

      expect(result?.category).toBe('feature');
    });

    it('should handle empty code content', async () => {
      const content = 'export const CODE = ``;';
      vi.mocked(fs.readFile).mockResolvedValue(content);

      const result = await loadExampleCode('button', 'empty');

      expect(result?.code).toBe('');
    });

    it('should handle code with only whitespace', async () => {
      const content = 'export const CODE = `  \n\n  `;';
      vi.mocked(fs.readFile).mockResolvedValue(content);

      const result = await loadExampleCode('button', 'whitespace');

      expect(result?.code).toBe('  \n\n  ');
    });
  });

  describe('loadAllExamples', () => {
    it('should load all examples successfully', async () => {
      // Mock discoverExamples to return 2 examples
      vi.mocked(discoverExamples).mockResolvedValue([
        {
          name: 'basic',
          title: 'Basic',
          category: 'usage',
          path: '/path/to/basic/page.tsx',
        },
        {
          name: 'advanced',
          title: 'Advanced',
          category: 'feature',
          path: '/path/to/advanced/page.tsx',
        },
      ] as any);

      // Mock loadExampleCode to return loaded examples
      const content1 = 'export const CODE = `<Button>Basic</Button>`;';
      const content2 = 'export const CODE = `<Button>Advanced</Button>`;';

      let callCount = 0;
      vi.mocked(fs.readFile).mockImplementation(() => {
        callCount++;
        if (callCount === 1) {
          return Promise.resolve(content1);
        }
        return Promise.resolve(content2);
      });

      const result = await loadAllExamples('button');

      expect(result).toHaveLength(2);
      expect(result[0]).toMatchObject({
        name: 'basic',
        title: 'Basic',
        category: 'usage',
      });
      expect(result[1]).toMatchObject({
        name: 'advanced',
        title: 'Advanced',
        category: 'feature',
      });
      expect(result[0].code).toContain('Basic');
      expect(result[1].code).toContain('Advanced');
    });

    it('should return empty array when no examples exist', async () => {
      vi.mocked(discoverExamples).mockResolvedValue([]);

      const result = await loadAllExamples('nonexistent');

      expect(result).toEqual([]);
    });

    it('should filter out examples that fail to load', async () => {
      vi.mocked(discoverExamples).mockResolvedValue([
        {
          name: 'valid',
          title: 'Valid',
          category: 'usage',
          path: '/path/to/valid/page.tsx',
        },
        {
          name: 'invalid',
          title: 'Invalid',
          category: 'usage',
          path: '/path/to/invalid/page.tsx',
        },
      ] as any);

      // First call succeeds, second fails
      let callCount = 0;
      vi.mocked(fs.readFile).mockImplementation(() => {
        callCount++;
        if (callCount === 1) {
          return Promise.resolve('export const CODE = `<Button>Valid</Button>`;');
        }
        // Second call throws error (no CODE constant)
        return Promise.resolve('export const INVALID = `...`;');
      });

      const result = await loadAllExamples('button');

      expect(result).toHaveLength(1);
      expect(result[0].name).toBe('valid');
    });

    it('should handle errors and return empty array', async () => {
      vi.mocked(discoverExamples).mockRejectedValue(new Error('Discovery failed'));

      const result = await loadAllExamples('button');

      expect(result).toEqual([]);
      expect(console.warn).toHaveBeenCalledWith(
        'Warning: Failed to load examples for button:',
        expect.any(Error)
      );
    });

    it('should preserve scanner metadata when loading examples', async () => {
      vi.mocked(discoverExamples).mockResolvedValue([
        {
          name: 'example',
          title: 'Custom Title',
          category: 'variant',
          path: '/custom/path.tsx',
        },
      ] as any);

      vi.mocked(fs.readFile).mockResolvedValue('export const CODE = `<Button>Code</Button>`;');

      const result = await loadAllExamples('button');

      expect(result[0]).toMatchObject({
        name: 'example',
        title: 'Custom Title', // From scanner
        category: 'variant', // From scanner
        path: '/custom/path.tsx', // From scanner
        code: expect.stringContaining('Code'), // From loader
      });
    });

    it('should merge SIZE constant from loader', async () => {
      vi.mocked(discoverExamples).mockResolvedValue([
        {
          name: 'large',
          title: 'Large',
          category: 'size',
          path: '/path/to/large/page.tsx',
        },
      ] as any);

      vi.mocked(fs.readFile).mockResolvedValue(
        "export const CODE = `<Button>Large</Button>`;\nexport const SIZE = 'lg';"
      );

      const result = await loadAllExamples('button');

      expect(result[0].iframeSize).toBe('lg');
    });

    it('should handle single example', async () => {
      vi.mocked(discoverExamples).mockResolvedValue([
        {
          name: 'only',
          title: 'Only',
          category: 'usage',
          path: '/path/to/only/page.tsx',
        },
      ] as any);

      vi.mocked(fs.readFile).mockResolvedValue('export const CODE = `<Button>Only</Button>`;');

      const result = await loadAllExamples('button');

      expect(result).toHaveLength(1);
      expect(result[0].name).toBe('only');
    });

    it('should maintain order from discoverExamples', async () => {
      vi.mocked(discoverExamples).mockResolvedValue([
        {
          name: 'z-last',
          title: 'Z Last',
          category: 'usage',
          path: '/path/to/z-last/page.tsx',
        },
        {
          name: 'a-first',
          title: 'A First',
          category: 'usage',
          path: '/path/to/a-first/page.tsx',
        },
      ] as any);

      let callCount = 0;
      vi.mocked(fs.readFile).mockImplementation(() => {
        callCount++;
        return Promise.resolve(`export const CODE = \`<Button>Example ${callCount}</Button>\`;`);
      });

      const result = await loadAllExamples('button');

      expect(result).toHaveLength(2);
      expect(result[0].name).toBe('z-last');
      expect(result[1].name).toBe('a-first');
    });
  });
});

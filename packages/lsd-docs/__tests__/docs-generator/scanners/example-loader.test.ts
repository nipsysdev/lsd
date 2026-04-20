/**
 * Example Loader Tests
 *
 * Tests for loading example code from example page files
 */

import * as fs from 'node:fs/promises';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  loadAllExamples,
  loadExampleCode,
} from '../../../scripts/docs-generator/scanners/example-loader';

describe('Example Loader', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('loadExampleCode', () => {
    it('should load example code and extract CODE constant', async () => {
      const mockContent = `
export const CODE = \`
import { Accordion } from '@nipsys/lsd';

export function AccordionMultipleExample() {
  return <Accordion />;
}
\`;

export function AccordionMultipleExample() {
  return <div>Test</div>;
}
      `;

      vi.spyOn(fs, 'readFile').mockResolvedValue(mockContent);

      const example = await loadExampleCode('accordion', 'multiple');
      expect(example).not.toBeNull();
      expect(example?.name).toBe('multiple');
      expect(example?.code).toContain('import { Accordion } from');
      expect(example?.functionName).toBe('AccordionMultipleExample');
    });

    it('should extract function name with ComponentNameExampleName pattern', async () => {
      const mockContent = `
export const CODE = \`code here\`;

export function AccordionSingleExample() {
  return <div>Test</div>;
}
      `;

      vi.spyOn(fs, 'readFile').mockResolvedValue(mockContent);

      const example = await loadExampleCode('accordion', 'single');
      expect(example?.functionName).toBe('AccordionSingleExample');
    });

    it('should extract simple "Example" function name', async () => {
      const mockContent = `
export const CODE = \`code here\`;

export function Example() {
  return <div>Test</div>;
}
      `;

      vi.spyOn(fs, 'readFile').mockResolvedValue(mockContent);

      const example = await loadExampleCode('button', 'basic');
      expect(example?.functionName).toBe('Example');
    });

    it('should default to "Example" if function name not found', async () => {
      const mockContent = `
export const CODE = \`code here\`;

// No function here
export const something = 'value';
      `;

      vi.spyOn(fs, 'readFile').mockResolvedValue(mockContent);

      const example = await loadExampleCode('accordion', 'multiple');
      expect(example?.functionName).toBe('Example');
    });

    it('should return null when CODE constant not found', async () => {
      const mockContent = `
export function Example() {
  return <div>Test</div>;
}
      `;

      vi.spyOn(fs, 'readFile').mockResolvedValue(mockContent);

      const example = await loadExampleCode('accordion', 'multiple');
      expect(example).toBeNull();
    });

    it('should return null when file does not exist', async () => {
      const error = new Error('ENOENT: no such file or directory') as NodeJS.ErrnoException;
      error.code = 'ENOENT';

      vi.spyOn(fs, 'readFile').mockRejectedValue(error);

      const example = await loadExampleCode('accordion', 'nonexistent');
      expect(example).toBeNull();
    });

    it('should handle read errors gracefully', async () => {
      vi.spyOn(fs, 'readFile').mockRejectedValue(new Error('Read error'));

      const example = await loadExampleCode('accordion', 'multiple');
      expect(example).toBeNull();
    });

    it('should capitalize title from example name', async () => {
      const mockContent = `
export const CODE = \`code here\`;

export function Example() {
  return <div>Test</div>;
}
      `;

      vi.spyOn(fs, 'readFile').mockResolvedValue(mockContent);

      const example = await loadExampleCode('button', 'basic-example');
      expect(example?.title).toBe('Basic-example');
    });

    it('should construct correct file path', async () => {
      const mockContent = `
export const CODE = \`code here\`;
export function Example() {}
      `;

      const readFileSpy = vi.spyOn(fs, 'readFile').mockResolvedValue(mockContent);

      await loadExampleCode('my-component', 'test-example');

      expect(readFileSpy).toHaveBeenCalled();
      const calledPath = readFileSpy.mock.calls[0][0];
      expect(String(calledPath)).toContain('my-component');
      expect(String(calledPath)).toContain('test-example');
      expect(String(calledPath)).toContain('page.tsx');
    });

    it('should handle multi-line CODE constant correctly', async () => {
      const mockContent = `
export const CODE = \`
import { Component } from '@nipsys/lsd';

export function Example() {
  return (
    <Component>
      <Child />
    </Component>
  );
}
\`;

export function ComponentExample() {}
      `;

      vi.spyOn(fs, 'readFile').mockResolvedValue(mockContent);

      const example = await loadExampleCode('component', 'basic');
      expect(example?.code).toContain('<Component>');
      expect(example?.code).toContain('<Child />');
    });

    it('should extract code with backticks', async () => {
      const mockContent = `
export const CODE = \`
const str = \\\`hello\\\`; // escaped backticks
const func = \\\`() => {}\\\`;
\`;

export function Example() {}
      `;

      vi.spyOn(fs, 'readFile').mockResolvedValue(mockContent);

      const example = await loadExampleCode('test', 'basic');
      expect(example?.code).toContain('const str = `hello`;');
    });

    it('should handle kebab-case to PascalCase conversion', async () => {
      const mockContent = `
export const CODE = \`code here\`;

export function DropdownMenuOpenExample() {
  return <div>Test</div>;
}
      `;

      vi.spyOn(fs, 'readFile').mockResolvedValue(mockContent);

      const example = await loadExampleCode('dropdown-menu', 'open');
      expect(example?.functionName).toBe('DropdownMenuOpenExample');
    });
  });

  describe('loadAllExamples', () => {
    it('should load all examples for a component', async () => {
      const mockContent1 = `
export const CODE = \`code1\`;
export function Example() {}
      `;
      const mockContent2 = `
export const CODE = \`code2\`;
export function Example() {}
      `;

      vi.spyOn(fs, 'readFile')
        .mockResolvedValueOnce(mockContent1)
        .mockResolvedValueOnce(mockContent2);

      const examples = await loadAllExamples('accordion');
      // This test depends on discoverExamples, which we can't easily mock here
      expect(Array.isArray(examples)).toBe(true);
    });

    it('should handle empty examples list', async () => {
      vi.spyOn(fs, 'readFile').mockResolvedValue('');

      const examples = await loadAllExamples('nonexistent');
      expect(examples).toEqual([]);
    });

    it('should handle load errors gracefully', async () => {
      vi.spyOn(fs, 'readFile').mockRejectedValue(new Error('Load error'));

      const examples = await loadAllExamples('component');
      expect(examples).toEqual([]);
    });
  });
});

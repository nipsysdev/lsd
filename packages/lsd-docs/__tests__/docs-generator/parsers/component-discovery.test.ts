/**
 * Component Discovery Parser Tests
 *
 * Tests for discovering components from main.ts export statements
 */

import * as path from 'node:path';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  componentExists,
  discoverAllComponents,
  resolveComponentPath,
} from '../../../scripts/docs-generator/parsers/component-discovery';

// Mock file-utils
vi.mock('../../../scripts/docs-generator/utils/file-utils', () => ({
  readFile: vi.fn(),
}));

import { readFile } from '../../../scripts/docs-generator/utils/file-utils';

describe('Component Discovery', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('discoverAllComponents', () => {
    it('should return empty array when no exports found', async () => {
      vi.mocked(readFile).mockResolvedValue(`
// No component exports
export const x = 1;
`);

      const components = await discoverAllComponents();
      expect(components).toEqual([]);
      expect(readFile).toHaveBeenCalled();
    });

    it('should parse component exports from main.ts', async () => {
      vi.mocked(readFile).mockResolvedValue(`
// Component exports
export * from '@/components/ui/accordion';
export * from '@/components/ui/button';
export * from '@/components/ui/input';
`);

      const components = await discoverAllComponents();
      expect(components).toEqual(['accordion', 'button', 'input']);
    });

    it('should handle mixed export patterns', async () => {
      vi.mocked(readFile).mockResolvedValue(`
export * from '@/components/ui/accordion';
export const SOME_CONSTANT = 42;
export * from '@/components/ui/dialog';
`);

      const components = await discoverAllComponents();
      expect(components).toEqual(['accordion', 'dialog']);
    });

    it('should filter out empty component names', async () => {
      vi.mocked(readFile).mockResolvedValue(`
export * from '@/components/ui/accordion';
export * from '@/components/ui/';
export * from '@/components/ui/button';
`);

      const components = await discoverAllComponents();
      expect(components).toEqual(['accordion', 'button']);
    });

    it('should return empty array on file read error', async () => {
      vi.mocked(readFile).mockRejectedValue(new Error('File not found'));

      const components = await discoverAllComponents();
      expect(components).toEqual([]);
    });

    it('should handle comments and whitespace', async () => {
      vi.mocked(readFile).mockResolvedValue(`
// This is a comment
/* Multi-line comment */
export * from '@/components/ui/accordion';
  export * from '@/components/ui/button';
/* Another comment */
export * from '@/components/ui/input';
`);

      const components = await discoverAllComponents();
      expect(components).toEqual(['accordion', 'button', 'input']);
    });

    it('should handle large number of components', async () => {
      const mockExports = Array.from(
        { length: 50 },
        (_, i) => `export * from '@/components/ui/component${i}';`
      ).join('\n');

      vi.mocked(readFile).mockResolvedValue(mockExports);

      const components = await discoverAllComponents();
      expect(components).toHaveLength(50);
      expect(components[0]).toBe('component0');
      expect(components[49]).toBe('component49');
    });
  });

  describe('resolveComponentPath', () => {
    it('should resolve correct path for component', () => {
      const result = resolveComponentPath('accordion');
      expect(result).toContain('accordion');
      expect(result).toContain('packages/lsd/src/components/ui');
    });

    it('should handle kebab-case component names', () => {
      const result = resolveComponentPath('dropdown-menu');
      expect(result).toContain('dropdown-menu');
    });

    it('should return absolute path', () => {
      const result = resolveComponentPath('button');
      expect(path.isAbsolute(result)).toBe(true);
    });
  });

  describe('componentExists', () => {
    it('should return true for existing component', async () => {
      vi.mocked(readFile).mockResolvedValue(`
export * from '@/components/ui/accordion';
export * from '@/components/ui/button';
`);

      const exists = await componentExists('accordion', ['accordion', 'button']);
      expect(exists).toBe(true);
    });

    it('should return false for non-existing component', async () => {
      vi.mocked(readFile).mockResolvedValue(`
export * from '@/components/ui/accordion';
export * from '@/components/ui/button';
`);

      const exists = await componentExists('input', ['accordion', 'button']);
      expect(exists).toBe(false);
    });

    it('should call discoverAllComponents when allComponents not provided', async () => {
      vi.mocked(readFile).mockResolvedValue(`
export * from '@/components/ui/accordion';
export * from '@/components/ui/button';
`);

      await componentExists('accordion');
      expect(readFile).toHaveBeenCalled();
    });

    it('should handle case sensitivity', async () => {
      const exists = await componentExists('Accordion', ['accordion', 'button']);
      expect(exists).toBe(false);
    });

    it('should handle empty components array', async () => {
      const exists = await componentExists('accordion', []);
      expect(exists).toBe(false);
    });
  });
});

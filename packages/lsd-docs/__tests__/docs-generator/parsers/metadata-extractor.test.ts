/**
 * Metadata Extractor Tests
 *
 * Tests for extracting component metadata from source files
 */

import { Project } from 'ts-morph';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
  extractComponentMetadata,
  extractProps,
  extractSizes,
  extractVariants,
  type PropMetadata,
} from '../../../scripts/docs-generator/parsers/metadata-extractor';

// Helper to create mock source files
function createMockSourceFile(content: string) {
  const project = new Project({
    useInMemoryFileSystem: true,
  });

  return project.createSourceFile('mock.tsx', content);
}

describe('Metadata Extractor', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('extractProps', () => {
    it('should extract props from interface', async () => {
      const sourceFile = createMockSourceFile(`
export interface MyProps {
  value: string;
  label: string;
  disabled?: boolean;
}

export function MyComponent(props: MyProps) {
  return <div>{props.value}</div>;
}
      `);

      const extractedProps = await extractProps(sourceFile);
      expect(extractedProps.length).toBeGreaterThan(0);
      expect(extractedProps.some((p: PropMetadata) => p.name === 'value')).toBe(true);
      expect(extractedProps.some((p: PropMetadata) => p.name === 'label')).toBe(true);
    });

    it('should handle optional props', async () => {
      const sourceFile = createMockSourceFile(`
export interface MyProps {
  required: string;
  optional?: string;
}
      `);

      const props = await extractProps(sourceFile);
      const required = props.find((p: PropMetadata) => p.name === 'required');
      const optional = props.find((p: PropMetadata) => p.name === 'optional');
      expect(required?.isRequired).toBe(true);
      expect(optional?.isRequired).toBe(false);
    });

    it('should skip private props', async () => {
      const sourceFile = createMockSourceFile(`
export interface MyProps {
  public: string;
  _private: string;
  #private2: string;
}
      `);

      const props = await extractProps(sourceFile);
      expect(props.some((p: PropMetadata) => p.name === '_private')).toBe(false);
      expect(props.some((p: PropMetadata) => p.name === '#private2')).toBe(false);
      expect(props.some((p: PropMetadata) => p.name === 'public')).toBe(true);
    });

    it('should extract type information', async () => {
      const sourceFile = createMockSourceFile(`
export interface MyProps {
  stringValue: string;
  numberValue: number;
  booleanValue: boolean;
  arrayValue: string[];
}
      `);

      const props = await extractProps(sourceFile);
      const stringProp = props.find((p: PropMetadata) => p.name === 'stringValue');
      const numberProp = props.find((p: PropMetadata) => p.name === 'numberValue');
      const booleanProp = props.find((p: PropMetadata) => p.name === 'booleanValue');

      expect(stringProp?.type).toContain('string');
      expect(numberProp?.type).toContain('number');
      expect(booleanProp?.type).toContain('boolean');
    });

    it('should extract JSDoc descriptions', async () => {
      const sourceFile = createMockSourceFile(`
export interface MyProps {
  /** The value to display */
  value: string;
  /** Whether disabled */
  disabled?: boolean;
}
      `);

      const props = await extractProps(sourceFile);
      const valueProp = props.find((p: PropMetadata) => p.name === 'value');
      const disabledProp = props.find((p: PropMetadata) => p.name === 'disabled');

      expect(valueProp?.description).toContain('value to display');
      expect(disabledProp?.description).toContain('disabled');
    });

    it('should extract union type options', async () => {
      const sourceFile = createMockSourceFile(`
export interface MyProps {
  variant: 'filled' | 'outlined' | 'text';
  size: 'sm' | 'md' | 'lg';
}
      `);

      const props = await extractProps(sourceFile);
      const variantProp = props.find((p: PropMetadata) => p.name === 'variant');
      const sizeProp = props.find((p: PropMetadata) => p.name === 'size');

      expect(variantProp?.options).toEqual(['filled', 'outlined', 'text']);
      expect(sizeProp?.options).toEqual(['sm', 'md', 'lg']);
    });

    it('should handle empty interface', async () => {
      const sourceFile = createMockSourceFile(`
export interface MyProps {}
      `);

      const props = await extractProps(sourceFile);
      expect(props).toEqual([]);
    });

    it('should handle components without interfaces', async () => {
      const sourceFile = createMockSourceFile(`
export function MyComponent() {
  return <div>Test</div>;
}
      `);

      const props = await extractProps(sourceFile);
      expect(Array.isArray(props)).toBe(true);
    });
  });

  describe('extractVariants', () => {
    it('should extract variant names from CVA', async () => {
      const sourceFile = createMockSourceFile(`
export const buttonVariants = cva({
  variants: {
    variant: {
      primary: 'class-primary',
      secondary: 'class-secondary',
    },
    size: {
      sm: 'class-sm',
      md: 'class-md',
    },
  },
});
      `);

      const variants = await extractVariants(sourceFile);
      expect(variants).toContain('variant');
      expect(variants).toContain('size');
    });

    it('should extract single variant', async () => {
      const sourceFile = createMockSourceFile(`
export const variants = cva({
  variants: {
    color: {
      red: 'class-red',
      blue: 'class-blue',
    },
  },
});
      `);

      const variants = await extractVariants(sourceFile);
      expect(variants).toEqual(['color']);
    });

    it('should return empty array for no CVA calls', async () => {
      const sourceFile = createMockSourceFile(`
export const styles = { base: 'base-class' };
      `);

      const variants = await extractVariants(sourceFile);
      expect(variants).toEqual([]);
    });

    it('should return empty array for CVA without variants', async () => {
      const sourceFile = createMockSourceFile(`
export const styles = cva({
  base: 'base-class',
});
      `);

      const variants = await extractVariants(sourceFile);
      expect(variants).toEqual([]);
    });

    it('should extract multiple variants', async () => {
      const sourceFile = createMockSourceFile(`
export const styles = cva({
  variants: {
    variant: { a: 'a' },
    size: { b: 'b' },
    color: { c: 'c' },
    intent: { d: 'd' },
  },
});
      `);

      const variants = await extractVariants(sourceFile);
      expect(variants).toHaveLength(4);
      expect(variants).toContain('variant');
      expect(variants).toContain('size');
      expect(variants).toContain('color');
      expect(variants).toContain('intent');
    });
  });

  describe('extractSizes', () => {
    it('should extract size values from CVA', async () => {
      const sourceFile = createMockSourceFile(`
export const sizes = cva({
  variants: {
    size: {
      sm: ['class-sm'],
      md: ['class-md'],
      lg: ['class-lg'],
    },
  },
});
      `);

      const sizes = await extractSizes(sourceFile);
      expect(sizes).toContain('sm');
      expect(sizes).toContain('md');
      expect(sizes).toContain('lg');
    });

    it('should extract single size', async () => {
      const sourceFile = createMockSourceFile(`
export const sizes = cva({
  variants: {
    size: {
      default: ['class-default'],
    },
  },
});
      `);

      const sizes = await extractSizes(sourceFile);
      expect(sizes).toContain('default');
    });

    it('should return empty array for no size variant', async () => {
      const sourceFile = createMockSourceFile(`
export const styles = cva({
  variants: {
    variant: { a: 'a' },
  },
});
      `);

      const sizes = await extractSizes(sourceFile);
      expect(sizes).toEqual([]);
    });

    it('should return empty array for no CVA calls', async () => {
      const sourceFile = createMockSourceFile(`
export const styles = { };
      `);

      const sizes = await extractSizes(sourceFile);
      expect(sizes).toEqual([]);
    });

    it('should extract multiple size values', async () => {
      const sourceFile = createMockSourceFile(`
export const sizes = cva({
  variants: {
    size: {
      xs: ['class-xs'],
      sm: ['class-sm'],
      md: ['class-md'],
      lg: ['class-lg'],
      xl: ['class-xl'],
    },
  },
});
      `);

      const sizes = await extractSizes(sourceFile);
      expect(sizes).toHaveLength(5);
      expect(sizes).toContain('xs');
      expect(sizes).toContain('sm');
      expect(sizes).toContain('md');
      expect(sizes).toContain('lg');
      expect(sizes).toContain('xl');
    });

    it('should handle size values without array', async () => {
      const sourceFile = createMockSourceFile(`
export const sizes = cva({
  variants: {
    size: {
      sm: 'class-sm',
      md: 'class-md',
    },
  },
});
      `);

      const sizes = await extractSizes(sourceFile);
      // Should still extract size names
      expect(sizes.length).toBeGreaterThan(0);
    });
  });

  describe('extractComponentMetadata', () => {
    it('should extract complete metadata structure', async () => {
      // This is a high-level test that may need mocking of file system
      // For now, we'll test the structure expectations

      const metadata = await extractComponentMetadata('test-component');

      expect(metadata).toHaveProperty('name');
      expect(metadata).toHaveProperty('props');
      expect(metadata).toHaveProperty('variants');
      expect(metadata).toHaveProperty('sizes');
      expect(metadata).toHaveProperty('exports');
      expect(metadata).toHaveProperty('subComponents');
      expect(metadata).toHaveProperty('filePath');
    });

    it('should return arrays for collections', async () => {
      const metadata = await extractComponentMetadata('test-component');

      expect(Array.isArray(metadata.props)).toBe(true);
      expect(Array.isArray(metadata.variants)).toBe(true);
      expect(Array.isArray(metadata.sizes)).toBe(true);
      expect(Array.isArray(metadata.exports)).toBe(true);
      expect(Array.isArray(metadata.subComponents)).toBe(true);
    });

    it('should return string for name', async () => {
      const metadata = await extractComponentMetadata('test-component');

      expect(typeof metadata.name).toBe('string');
    });

    it('should return string for filePath', async () => {
      const metadata = await extractComponentMetadata('test-component');

      expect(typeof metadata.filePath).toBe('string');
    });
  });
});

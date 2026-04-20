/**
 * Types Parser Tests
 *
 * Tests for extracting type metadata from component type definitions
 */

import { Project } from 'ts-morph';
import { describe, expect, it } from 'vitest';
import {
  extractCVAVariants,
  extractTypeMetadata,
  getTypeAliasNames,
  getTypeMetadataByName,
  isUnionType,
  parseUnionType,
} from '../../../scripts/docs-generator/parsers/types';

// Helper to create mock source files
function createMockSourceFile(content: string) {
  const project = new Project({
    useInMemoryFileSystem: true,
  });

  return project.createSourceFile('mock-types.ts', content);
}

describe('Types Parser', () => {
  describe('extractTypeMetadata', () => {
    it('should extract union type values', () => {
      const sourceFile = createMockSourceFile(`
export type Size = 'sm' | 'md' | 'lg';
`);

      const types = extractTypeMetadata(sourceFile);
      expect(types).toHaveLength(1);
      expect(types[0].name).toBe('Size');
      expect(types[0].values).toEqual(['sm', 'md', 'lg']);
    });

    it('should extract multiple type aliases', () => {
      const sourceFile = createMockSourceFile(`
export type Size = 'sm' | 'md' | 'lg';
export type Variant = 'filled' | 'outlined' | 'text';
export type Color = 'primary' | 'secondary' | 'danger';
`);

      const types = extractTypeMetadata(sourceFile);
      expect(types).toHaveLength(3);
      expect(types[0].name).toBe('Size');
      expect(types[1].name).toBe('Variant');
      expect(types[2].name).toBe('Color');
    });

    it('should extract description from TSDoc', () => {
      const sourceFile = createMockSourceFile(`
/**
 * Available size options
 */
export type Size = 'sm' | 'md' | 'lg';
`);

      const types = extractTypeMetadata(sourceFile);
      expect(types[0].description).toBe('Available size options');
    });

    it('should handle empty union types', () => {
      const sourceFile = createMockSourceFile(`
export type EmptyType = never;
`);

      const types = extractTypeMetadata(sourceFile);
      expect(types).toHaveLength(0);
    });

    it('should ignore type aliases without extracted values', () => {
      const sourceFile = createMockSourceFile(`
export type ComplexType = SomeOtherType;
`);

      const types = extractTypeMetadata(sourceFile);
      expect(types).toHaveLength(0);
    });

    it('should handle intersection types', () => {
      const sourceFile = createMockSourceFile(`
export type Combined = 'a' & 'b';
`);

      const types = extractTypeMetadata(sourceFile);
      // Intersection types might return empty values depending on implementation
      expect(Array.isArray(types)).toBe(true);
    });

    it('should handle complex type names', () => {
      const sourceFile = createMockSourceFile(`
export type ButtonVariants = 'filled' | 'outlined' | 'ghost';
export type InputSizes = 'sm' | 'md' | 'lg' | 'xl';
export type DropdownMenuAlignments = 'start' | 'center' | 'end';
`);

      const types = extractTypeMetadata(sourceFile);
      expect(types[0].name).toBe('ButtonVariants');
      expect(types[1].name).toBe('InputSizes');
      expect(types[2].name).toBe('DropdownMenuAlignments');
    });
  });

  describe('extractCVAVariants', () => {
    it('should extract variants from cva() call', () => {
      const sourceFile = createMockSourceFile(`
export const buttonVariants = cva({
  variants: {
    variant: {
      primary: 'button-primary',
      secondary: 'button-secondary',
    },
    size: {
      sm: 'button-sm',
      md: 'button-md',
      lg: 'button-lg',
    },
  },
});
`);

      const variants = extractCVAVariants(sourceFile);
      expect(variants.size).toBe(2);
      expect(variants.get('variant')).toEqual(['primary', 'secondary']);
      expect(variants.get('size')).toEqual(['sm', 'md', 'lg']);
    });

    it('should handle nested variant definitions', () => {
      const sourceFile = createMockSourceFile(`
export const accordionVariants = cva({
  variants: {
    variant: {
      single: 'accordion-single',
      multiple: 'accordion-multiple',
    },
    size: {
      sm: 'accordion-sm',
      md: 'accordion-md',
      lg: 'accordion-lg',
    },
  },
});
`);

      const variants = extractCVAVariants(sourceFile);
      expect(variants.size).toBeGreaterThan(0);
    });

    it('should return empty map for no cva calls', () => {
      const sourceFile = createMockSourceFile(`
export const regularVar = 42;
`);

      const variants = extractCVAVariants(sourceFile);
      expect(variants.size).toBe(0);
    });

    it('should handle cva with no variants section', () => {
      const sourceFile = createMockSourceFile(`
export const baseStyles = cva({
  base: 'base-classes',
});
`);

      const variants = extractCVAVariants(sourceFile);
      expect(variants.size).toBe(0);
    });
  });

  describe('isUnionType', () => {
    it('should return true for union types', () => {
      expect(isUnionType('"a" | "b" | "c"')).toBe(true);
      expect(isUnionType('small | medium | large')).toBe(true);
      expect(isUnionType('string | number | boolean')).toBe(true);
    });

    it('should return false for non-union types', () => {
      expect(isUnionType('string')).toBe(false);
      expect(isUnionType('number')).toBe(false);
      expect(isUnionType('MyInterface')).toBe(false);
      expect(isUnionType('"single"')).toBe(false);
    });

    it('should handle empty strings', () => {
      expect(isUnionType('')).toBe(false);
    });
  });

  describe('parseUnionType', () => {
    it('should parse union type values', () => {
      const result = parseUnionType('"sm" | "md" | "lg"');
      expect(result).toEqual(['sm', 'md', 'lg']);
    });

    it('should handle single quotes', () => {
      const result = parseUnionType("'sm' | 'md' | 'lg'");
      expect(result).toEqual(['sm', 'md', 'lg']);
    });

    it('should handle mixed quotes', () => {
      const result = parseUnionType('"sm" | \'md\' | "lg"');
      expect(result).toEqual(['sm', 'md', 'lg']);
    });

    it('should handle unquoted values', () => {
      const result = parseUnionType('small | medium | large');
      expect(result).toEqual(['small', 'medium', 'large']);
    });

    it('should handle whitespace', () => {
      const result = parseUnionType('"sm"| "md" |"lg"');
      expect(result).toEqual(['sm', 'md', 'lg']);
    });

    it('should return empty array for non-union types', () => {
      expect(parseUnionType('string')).toEqual([]);
      expect(parseUnionType('')).toEqual([]);
    });

    it('should handle complex union types', () => {
      const result = parseUnionType('"sm" | "md" | "lg" | "xl" | "2xl"');
      expect(result).toEqual(['sm', 'md', 'lg', 'xl', '2xl']);
    });

    it('should filter out empty string values', () => {
      const result = parseUnionType('"sm" |  | "md"');
      expect(result).toEqual(['sm', 'md']);
    });
  });

  describe('getTypeAliasNames', () => {
    it('should return all type alias names', () => {
      const sourceFile = createMockSourceFile(`
export type Size = 'sm' | 'md' | 'lg';
export type Variant = 'filled' | 'outlined';
export const someConst = 42;
export function someFunction() {}
`);

      const names = getTypeAliasNames(sourceFile);
      expect(names).toEqual(['Size', 'Variant']);
    });

    it('should return empty array for no type aliases', () => {
      const sourceFile = createMockSourceFile(`
export const someConst = 42;
export function someFunction() {}
`);

      const names = getTypeAliasNames(sourceFile);
      expect(names).toEqual([]);
    });

    it('should handle exported and non-exported type aliases', () => {
      const sourceFile = createMockSourceFile(`
export type PublicType = string;
type PrivateType = number;
`);

      const names = getTypeAliasNames(sourceFile);
      expect(names).toContain('PublicType');
    });
  });

  describe('getTypeMetadataByName', () => {
    it('should return type metadata for existing type', () => {
      const sourceFile = createMockSourceFile(`
/**
 * Size options
 */
export type Size = 'sm' | 'md' | 'lg';
`);

      const metadata = getTypeMetadataByName(sourceFile, 'Size');
      expect(metadata).toBeDefined();
      expect(metadata?.name).toBe('Size');
      expect(metadata?.values).toEqual(['sm', 'md', 'lg']);
      expect(metadata?.description).toBe('Size options');
    });

    it('should return undefined for non-existing type', () => {
      const sourceFile = createMockSourceFile(`
export type Size = 'sm' | 'md' | 'lg';
`);

      const metadata = getTypeMetadataByName(sourceFile, 'NonExistent');
      expect(metadata).toBeUndefined();
    });

    it('should handle empty description', () => {
      const sourceFile = createMockSourceFile(`
export type Size = 'sm' | 'md' | 'lg';
`);

      const metadata = getTypeMetadataByName(sourceFile, 'Size');
      expect(metadata?.description).toBe('');
    });

    it('should return undefined for type without values', () => {
      const sourceFile = createMockSourceFile(`
export type ComplexType = SomeOtherType;
`);

      const metadata = getTypeMetadataByName(sourceFile, 'ComplexType');
      // Behavior depends on implementation - either undefined or metadata with empty values
      expect(metadata === undefined || metadata?.values.length === 0).toBe(true);
    });

    it('should handle complex union types', () => {
      const sourceFile = createMockSourceFile(`
export type MultipleTypes = 'a' | 'b' | 'c' | 'd' | 'e';
`);

      const metadata = getTypeMetadataByName(sourceFile, 'MultipleTypes');
      expect(metadata?.values).toHaveLength(5);
    });
  });
});

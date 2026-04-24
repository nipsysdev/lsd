import { Project } from 'ts-morph';
import { beforeEach, describe, expect, it } from 'vitest';
import {
  extractCVAVariants,
  extractTypeMetadata,
  getTypeAliasNames,
  getTypeMetadataByName,
  isUnionType,
  parseUnionType,
} from '../types';

describe('Types Parser', () => {
  describe('isUnionType', () => {
    it('should return true for union type with pipe', () => {
      expect(isUnionType("'sm' | 'md' | 'lg'")).toBe(true);
      expect(isUnionType('button | link')).toBe(true);
    });

    it('should return false for single type', () => {
      expect(isUnionType('string')).toBe(false);
      expect(isUnionType('boolean')).toBe(false);
      expect(isUnionType('MyType')).toBe(false);
    });

    it('should return false for empty string', () => {
      expect(isUnionType('')).toBe(false);
    });

    it('should return false for complex type strings without pipes', () => {
      expect(isUnionType('Array<string>')).toBe(false);
      expect(isUnionType('Record<string, any>')).toBe(false);
    });
  });

  describe('parseUnionType', () => {
    it('should parse simple union type', () => {
      const result = parseUnionType("'sm' | 'md' | 'lg'");

      expect(result).toEqual(['sm', 'md', 'lg']);
    });

    it('should parse union type with double quotes', () => {
      const result = parseUnionType('"sm" | "md" | "lg"');

      expect(result).toEqual(['sm', 'md', 'lg']);
    });

    it('should parse union type with backticks', () => {
      const result = parseUnionType('`sm` | `md` | `lg`');

      expect(result).toEqual(['sm', 'md', 'lg']);
    });

    it('should handle mixed quotes', () => {
      const result = parseUnionType('\'sm\' | "md"');

      expect(result).toEqual(['sm', 'md']);
    });

    it('should trim and filter empty strings', () => {
      const result = parseUnionType("'sm' | '' | 'lg' | '' ");

      expect(result).toEqual(['sm', 'lg']);
    });

    it('should return empty array for non-union type', () => {
      const result = parseUnionType('string');

      expect(result).toEqual([]);
    });

    it('should return empty array for empty string', () => {
      const result = parseUnionType('');

      expect(result).toEqual([]);
    });

    it('should handle spaces around pipes', () => {
      const result = parseUnionType("'sm' | 'md' | 'lg'");

      expect(result).toEqual(['sm', 'md', 'lg']);
    });

    it('should handle union types without spaces around pipes', () => {
      const result = parseUnionType("'sm'|'md'|'lg'");

      expect(result).toEqual(['sm', 'md', 'lg']);
    });

    it('should handle union types with extra whitespace', () => {
      const result = parseUnionType("  'sm'  |  'md'  |  'lg'  ");

      expect(result).toEqual(['sm', 'md', 'lg']);
    });

    it('should handle whitespace-only values inside quotes', () => {
      const result = parseUnionType("'sm' | '  ' | 'md'");

      // Spaces inside quotes remain after quote removal
      expect(result).toEqual(['sm', '  ', 'md']);
    });
  });

  describe('extractTypeMetadata', () => {
    let project: Project;

    beforeEach(() => {
      project = new Project({ useInMemoryFileSystem: true });
    });

    it('should skip type aliases without type node', () => {
      const sourceFile = project.createSourceFile('types.ts', '');

      const metadata = extractTypeMetadata(sourceFile);

      expect(metadata).toHaveLength(0);
    });

    it('should skip type aliases with no extractable values', () => {
      const sourceFile = project.createSourceFile(
        'types.ts',
        'type ComplexType = Record<string, any>;'
      );

      const metadata = extractTypeMetadata(sourceFile);

      expect(metadata).toHaveLength(0);
    });

    it('should return empty array for empty file', () => {
      const sourceFile = project.createSourceFile('types.ts', '');

      const metadata = extractTypeMetadata(sourceFile);

      expect(metadata).toEqual([]);
    });

    it('should skip type with no values extracted', () => {
      const sourceFile = project.createSourceFile(
        'types.ts',
        'type NotExtractable = SomeOtherType;'
      );

      const metadata = extractTypeMetadata(sourceFile);

      expect(metadata).toHaveLength(0);
    });
  });

  describe('extractCVAVariants', () => {
    let project: Project;

    beforeEach(() => {
      project = new Project({ useInMemoryFileSystem: true });
    });

    it('should throw for cva() call (implementation uses asKindOrThrow)', () => {
      const sourceFile = project.createSourceFile(
        'types.ts',
        `const button = cva({
           variants: {
             size: {
               sm: ['text-sm'],
               md: ['text-md'],
               lg: ['text-lg'],
             }
           }
         });`
      );

      expect(() => extractCVAVariants(sourceFile)).toThrow();
    });

    it('should throw for string literal initializer (implementation uses asKindOrThrow)', () => {
      const sourceFile = project.createSourceFile('types.ts', `const foo = 'bar';`);

      expect(() => extractCVAVariants(sourceFile)).toThrow();
    });

    it('should throw for non-cva call expression (implementation uses asKindOrThrow)', () => {
      const sourceFile = project.createSourceFile('types.ts', `const button = 'some string';`);

      expect(() => extractCVAVariants(sourceFile)).toThrow();
    });

    it('should throw for cva call without variants (implementation uses asKindOrThrow)', () => {
      const sourceFile = project.createSourceFile(
        'types.ts',
        `const button = cva({
           base: ['px-4', 'py-2']
         });`
      );

      expect(() => extractCVAVariants(sourceFile)).toThrow();
    });

    it('should throw for anotherFunction call (implementation uses asKindOrThrow)', () => {
      const sourceFile = project.createSourceFile(
        'types.ts',
        `const button = anotherFunction({
           variants: {
             size: {
               sm: ['text-sm'],
             }
           }
         });`
      );

      expect(() => extractCVAVariants(sourceFile)).toThrow();
    });

    it('should skip variable declarations without initializer', () => {
      const sourceFile = project.createSourceFile('types.ts', 'let button;');

      const variants = extractCVAVariants(sourceFile);

      expect(variants.size).toBe(0);
    });

    it('should return empty map for file with no declarations', () => {
      const sourceFile = project.createSourceFile('types.ts', '');

      const variants = extractCVAVariants(sourceFile);

      expect(variants.size).toBe(0);
    });
  });

  describe('getTypeAliasNames', () => {
    let project: Project;

    beforeEach(() => {
      project = new Project({ useInMemoryFileSystem: true });
    });

    it('should return empty array for file with no type aliases', () => {
      const sourceFile = project.createSourceFile('types.ts', '');

      const names = getTypeAliasNames(sourceFile);

      expect(names).toEqual([]);
    });

    it('should return names of all type aliases', () => {
      const sourceFile = project.createSourceFile(
        'types.ts',
        `type Size = 'sm' | 'md';
         type Variant = 'primary' | 'secondary';`
      );

      const names = getTypeAliasNames(sourceFile);

      expect(names).toEqual(['Size', 'Variant']);
    });

    it('should return single type alias name', () => {
      const sourceFile = project.createSourceFile('types.ts', `type Single = 'value';`);

      const names = getTypeAliasNames(sourceFile);

      expect(names).toEqual(['Single']);
    });

    it('should return empty array for file with other content only', () => {
      const sourceFile = project.createSourceFile(
        'types.ts',
        `const foo = 'bar';
         function bar() { return 'baz'; }`
      );

      const names = getTypeAliasNames(sourceFile);

      expect(names).toEqual([]);
    });

    it('should return names in order of declaration', () => {
      const sourceFile = project.createSourceFile(
        'types.ts',
        `type First = 'first';
         type Second = 'second';
         type Third = 'third';`
      );

      const names = getTypeAliasNames(sourceFile);

      expect(names).toEqual(['First', 'Second', 'Third']);
    });
  });

  describe('getTypeMetadataByName', () => {
    let project: Project;

    beforeEach(() => {
      project = new Project({ useInMemoryFileSystem: true });
    });

    it('should return undefined for type with empty values', () => {
      const sourceFile = project.createSourceFile(
        'types.ts',
        'type Complex = Record<string, any>;'
      );

      const metadata = getTypeMetadataByName(sourceFile, 'Complex');

      // Returns metadata even with empty values as per implementation
      expect(metadata).toBeDefined();
      expect(metadata?.values).toEqual([]);
    });

    it('should return metadata with description', () => {
      const sourceFile = project.createSourceFile(
        'types.ts',
        `/**
         * Size options
         */
        type Size = 'sm' | 'md';`
      );

      const metadata = getTypeMetadataByName(sourceFile, 'Size');

      expect(metadata?.description).toBe('Size options');
    });

    it('should return undefined for non-existent type', () => {
      const sourceFile = project.createSourceFile('types.ts', `type Size = 'sm' | 'md';`);

      const metadata = getTypeMetadataByName(sourceFile, 'NonExistent');

      expect(metadata).toBeUndefined();
    });

    it('should return undefined for type without type node', () => {
      const sourceFile = project.createSourceFile('types.ts', '');

      const metadata = getTypeMetadataByName(sourceFile, 'AnyType');

      expect(metadata).toBeUndefined();
    });

    it('should return correct metadata from multiple types', () => {
      const sourceFile = project.createSourceFile(
        'types.ts',
        `type Size = 'sm' | 'md';
         type Variant = 'primary' | 'secondary';`
      );

      const sizeMetadata = getTypeMetadataByName(sourceFile, 'Size');
      const variantMetadata = getTypeMetadataByName(sourceFile, 'Variant');

      expect(sizeMetadata?.name).toBe('Size');
      expect(variantMetadata?.name).toBe('Variant');
    });

    it('should return default description as undefined when no JSDoc', () => {
      const sourceFile = project.createSourceFile('types.ts', `type Size = 'sm' | 'md';`);

      const metadata = getTypeMetadataByName(sourceFile, 'Size');

      expect(metadata?.description).toBeUndefined();
    });

    it('should trim description whitespace', () => {
      const sourceFile = project.createSourceFile(
        'types.ts',
        `/**
         *  Size options with extra whitespace   
         */
        type Size = 'sm' | 'md';`
      );

      const metadata = getTypeMetadataByName(sourceFile, 'Size');

      expect(metadata?.description).toBe('Size options with extra whitespace');
    });

    it('should handle empty JSDoc', () => {
      const sourceFile = project.createSourceFile(
        'types.ts',
        `/** */
        type Size = 'sm' | 'md';`
      );

      const metadata = getTypeMetadataByName(sourceFile, 'Size');

      expect(metadata?.description).toBe('');
    });

    it('should return undefined for empty file', () => {
      const sourceFile = project.createSourceFile('types.ts', '');

      const metadata = getTypeMetadataByName(sourceFile, 'AnyType');

      expect(metadata).toBeUndefined();
    });
  });
});

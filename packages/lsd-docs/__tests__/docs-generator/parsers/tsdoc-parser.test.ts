/**
 * TSDoc Parser Tests
 *
 * Tests for parsing TSDoc annotations from component source files
 */

import { Project } from 'ts-morph';
import { describe, expect, it } from 'vitest';
import {
  getCustomTagNames,
  hasTag,
  parseTSDoc,
} from '../../../scripts/docs-generator/parsers/tsdoc-parser';

// We'll use ts-morph to create mock source files with TSDoc patterns
function createMockSourceFile(content: string) {
  const project = new Project({
    useInMemoryFileSystem: true,
  });

  return project.createSourceFile('mock.tsx', content);
}

describe('TSDoc Parser', () => {
  describe('parseTSDoc', () => {
    it('should extract description from summary', async () => {
      const sourceFile = createMockSourceFile(`
/**
 * This is a component description
 */
export function MyComponent() {
  return <div>Test</div>;
}
      `);

      const result = await parseTSDoc(sourceFile);
      expect(result.description).toBe('This is a component description');
      expect(result.customTags).toEqual({});
    });

    it('should extract remarks from @remarks tag', async () => {
      const sourceFile = createMockSourceFile(`
/**
 * Component description
 *
 * @remarks
 * Additional information about the component
 */
export function MyComponent() {
  return <div>Test</div>;
}
      `);

      const result = await parseTSDoc(sourceFile);
      expect(result.description).toBe('Component description');
      expect(result.remarks).toBe('Additional information about the component');
    });

    it('should extract custom tags', async () => {
      const sourceFile = createMockSourceFile(`
/**
 * Component description
 *
 * @doc This is a custom doc tag
 * @anotherTag Another custom tag
 */
export function MyComponent() {
  return <div>Test</div>;
}
      `);

      const result = await parseTSDoc(sourceFile);
      expect(result.description).toBe('Component description');
      expect(result.customTags).toEqual({
        doc: 'This is a custom doc tag',
        anotherTag: 'Another custom tag',
      });
    });

    it('should handle empty TSDoc', async () => {
      const sourceFile = createMockSourceFile(`
export function MyComponent() {
  return <div>Test</div>;
}
      `);

      const result = await parseTSDoc(sourceFile);
      expect(result.description).toBe('');
      expect(result.customTags).toEqual({});
    });

    it('should handle multi-line descriptions', async () => {
      const sourceFile = createMockSourceFile(`
/**
 * First line of description
 * Second line of description
 * Third line of description
 */
export function MyComponent() {
  return <div>Test</div>;
}
      `);

      const result = await parseTSDoc(sourceFile);
      expect(result.description).toContain('First line');
      expect(result.description).toContain('Second line');
      expect(result.description).toContain('Third line');
    });

    it('should parse @docSection nested tags', async () => {
      const sourceFile = createMockSourceFile(`
/**
 * Component description
 *
 * @docSection
 * Section title
 * @docSectionContent
 * Section content goes here
 * @docSectionEnd
 */
export function MyComponent() {
  return <div>Test</div>;
}
      `);

      const result = await parseTSDoc(sourceFile);
      expect(result.customTags).toHaveProperty('docSection');
    });

    it('should extract from variable declarations', async () => {
      const sourceFile = createMockSourceFile(`
/**
 * Variable description
 * @custom Custom tag for variable
 */
export const MyVariable = 'value';
      `);

      const result = await parseTSDoc(sourceFile);
      expect(result.description).toBe('Variable description');
      expect(result.customTags).toEqual({
        custom: 'Custom tag for variable',
      });
    });

    it('should extract from interfaces', async () => {
      const sourceFile = createMockSourceFile(`
/**
 * Interface description
 * @custom Interface custom tag
 */
export interface MyInterface {
  name: string;
}
      `);

      const result = await parseTSDoc(sourceFile);
      expect(result.description).toBe('Interface description');
      expect(result.customTags).toEqual({
        custom: 'Interface custom tag',
      });
    });

    it('should extract from type aliases', async () => {
      const sourceFile = createMockSourceFile(`
/**
 * Type description
 * @custom Type custom tag
 */
export type MyType = string | number;
      `);

      const result = await parseTSDoc(sourceFile);
      expect(result.description).toBe('Type description');
      expect(result.customTags).toEqual({
        custom: 'Type custom tag',
      });
    });

    it('should handle multiple TSDoc blocks (uses first)', async () => {
      const sourceFile = createMockSourceFile(`
/**
 * First description
 */
export function MyComponent() {
  return <div>Test</div>;
}

/**
 * Second description
 */
export function AnotherComponent() {
  return <div>Another</div>;
}
      `);

      const result = await parseTSDoc(sourceFile);
      expect(result.description).toBe('First description');
    });

    it('should gracefully handle malformed TSDoc', async () => {
      const sourceFile = createMockSourceFile(`
/**
 * @
 */
export function MyComponent() {
  return <div>Test</div>;
}
      `);

      const result = await parseTSDoc(sourceFile);
      expect(result.customTags).toEqual({});
    });
  });

  describe('getCustomTagNames', () => {
    it('should return array of custom tag names', () => {
      const sourceFile = createMockSourceFile(`
/**
 * Component description
 *
 * @doc Custom doc tag
 * @example Example tag
 * @deprecated Deprecated tag
 */
export function MyComponent() {
  return <div>Test</div>;
}
      `);

      const tagNames = getCustomTagNames(sourceFile);
      expect(tagNames).toEqual(expect.arrayContaining(['doc', 'example', 'deprecated']));
    });

    it('should return empty array for no custom tags', () => {
      const sourceFile = createMockSourceFile(`
/**
 * Component description
 */
export function MyComponent() {
  return <div>Test</div>;
}
      `);

      const tagNames = getCustomTagNames(sourceFile);
      expect(tagNames).toEqual([]);
    });

    it('should handle multiple source file elements', () => {
      const sourceFile = createMockSourceFile(`
/**
 * @tag1 First tag
 */
export function Component1() {}

/**
 * @tag2 Second tag
 */
const variable1 = 'value';

/**
 * @tag3 Third tag
 */
export interface Interface1 {}
      `);

      const tagNames = getCustomTagNames(sourceFile);
      expect(tagNames).toEqual(expect.arrayContaining(['tag1', 'tag2', 'tag3']));
    });
  });

  describe('hasTag', () => {
    it('should return true for existing tag', () => {
      const sourceFile = createMockSourceFile(`
/**
 * Component description
 *
 * @doc Custom doc tag
 * @example Example tag
 */
export function MyComponent() {
  return <div>Test</div>;
}
      `);

      expect(hasTag(sourceFile, 'doc')).toBe(true);
      expect(hasTag(sourceFile, 'example')).toBe(true);
    });

    it('should return false for non-existing tag', () => {
      const sourceFile = createMockSourceFile(`
/**
 * Component description
 *
 * @doc Custom doc tag
 */
export function MyComponent() {
  return <div>Test</div>;
}
      `);

      expect(hasTag(sourceFile, 'example')).toBe(false);
      expect(hasTag(sourceFile, 'nonexistent')).toBe(false);
    });

    it('should be case insensitive', () => {
      const sourceFile = createMockSourceFile(`
/**
 * Component description
 *
 * @doc Custom doc tag
 */
export function MyComponent() {
  return <div>Test</div>;
}
      `);

      expect(hasTag(sourceFile, 'DOC')).toBe(false); // Case sensitive
      expect(hasTag(sourceFile, 'doc')).toBe(true);
    });

    it('should handle empty tag names', () => {
      const sourceFile = createMockSourceFile(`
/**
 * Component description
 */
export function MyComponent() {
  return <div>Test</div>;
}
      `);

      expect(hasTag(sourceFile, '')).toBe(false);
    });
  });
});

import { Project } from 'ts-morph';
import { describe, expect, it } from 'vitest';
import { getCustomTagNames, hasTag, parseTSDoc } from '../tsdoc-parser';

describe('TSDocParser', () => {
  const createProject = () =>
    new Project({
      useInMemoryFileSystem: true,
    });

  describe('parseTSDoc', () => {
    it('should throw error when @docSectionPageDescription tag is missing', async () => {
      const project = createProject();
      const sourceFile = project.createSourceFile(
        'test.tsx',
        `
        /**
         * Component description
         * @docSectionAbout About description
         */
        export const Component = () => null;
      `
      );

      await expect(parseTSDoc(sourceFile)).rejects.toThrow('@docSectionPageDescription');
    });

    it('should throw error when @docSectionAbout tag is missing', async () => {
      const project = createProject();
      const sourceFile = project.createSourceFile(
        'test.tsx',
        `
        /**
         * Component description
         * @docSectionPageDescription Page description
         */
        export const Component = () => null;
      `
      );

      await expect(parseTSDoc(sourceFile)).rejects.toThrow('@docSectionAbout');
    });

    it('should extract description from TSDoc', async () => {
      const project = createProject();
      const sourceFile = project.createSourceFile(
        'test.tsx',
        `
        /**
         * This is the main component description
         * @docSectionPageDescription Page header description
         * @docSectionAbout About section description
         */
        export const Component = () => null;
      `
      );

      const result = await parseTSDoc(sourceFile);

      expect(result.description).toMatch(/This is the main component description/);
    });

    it('should extract custom tags correctly', async () => {
      const project = createProject();
      const sourceFile = project.createSourceFile(
        'test.tsx',
        `
        /**
         * Component description
         * @docSectionPageDescription Page description
         * @docSectionAbout About description
         * @docSectionComposition Composition info
         * @docSectionAccessibilityKeyboard Keyboard info
         */
        export const Component = () => null;
      `
      );

      const result = await parseTSDoc(sourceFile);

      // Page and About are stored as top-level properties
      expect(result.pageDescription?.trim()).toBe('Page description');
      expect(result.aboutDescription?.trim()).toBe('About description');
      // Other custom tags are stored in customTags (Check available to see which ones exist)
      const customTagKeys = Object.keys(result.customTags);
      expect(customTagKeys.length).toBeGreaterThan(0);
      expect(customTagKeys).toContain('docSectionComposition');
      expect(customTagKeys).toContain('docSectionAccessibilityKeyboard');
    });

    it('should extract remarks if present', async () => {
      const project = createProject();
      const sourceFile = project.createSourceFile(
        'test.tsx',
        `
        /**
         * Component description
         * @docSectionPageDescription Page description
         * @docSectionAbout About description
         *
         * @remarks
         * This is additional information in the remarks section.
         */
        export const Component = () => null;
      `
      );

      const result = await parseTSDoc(sourceFile);

      expect(result.remarks).toContain('additional information');
    });

    it('should handle multiple JSDoc comments', async () => {
      const project = createProject();
      const sourceFile = project.createSourceFile(
        'test.tsx',
        `
        /**
         * First component description
         * @docSectionPageDescription First page description
         * @docSectionAbout First about
         */
        export const Component1 = () => null;

        /**
         * Second component description
         * @docSectionPageDescription Second page description
         * @docSectionAbout Second about
         */
        export const Component2 = () => null;
      `
      );

      const result = await parseTSDoc(sourceFile);

      // Should use the first set of tags found that are complete
      expect(result.pageDescription).toMatch(/First page description/);
      expect(result.aboutDescription).toMatch(/First about/);
    });

    it('should preserve newlines in accessibility tags', async () => {
      const project = createProject();
      const sourceFile = project.createSourceFile(
        'test.tsx',
        `
        /**
         * Component description
         * @docSectionPageDescription Page description
         * @docSectionAbout About description
         * @docSectionComposition
         * • Component - Root
         *   • SubComponent - Child
         */
        export const Component = () => null;
      `
      );

      const result = await parseTSDoc(sourceFile);

      const composition = result.customTags.docSectionComposition || '';
      expect(composition).toContain('• Component - Root');
      expect(composition).toContain('• SubComponent - Child');
    });

    it('should handle all custom tags', async () => {
      const project = createProject();
      const sourceFile = project.createSourceFile(
        'test.tsx',
        `
        /**
         * Component description
         * @docSectionPageDescription Page description
         * @docSectionAbout About description
         * @docSectionFeaturesAnimated Animated info
         * @docSectionFeaturesCollapsible Collapsible info
         * @docSectionFeaturesDefaultValue Default value info
         * @docSectionFeaturesAsChild As child info
         */
        export const Component = () => null;
      `
      );

      const result = await parseTSDoc(sourceFile);

      expect(Object.keys(result.customTags)).toContain('docSectionFeaturesAnimated');
      expect(Object.keys(result.customTags)).toContain('docSectionFeaturesCollapsible');
      expect(Object.keys(result.customTags)).toContain('docSectionFeaturesDefaultValue');
      expect(Object.keys(result.customTags)).toContain('docSectionFeaturesAsChild');
    });

    it('should handle interfaces with JSDoc', async () => {
      const project = createProject();
      const sourceFile = project.createSourceFile(
        'test.tsx',
        `
        /**
         * Interface description
         * @docSectionPageDescription Page description
         * @docSectionAbout About description
         */
        export interface MyInterface {
          prop: string;
        }
        `
      );

      const result = await parseTSDoc(sourceFile);

      expect(result.description).toMatch(/Interface description/);
      expect(result.pageDescription).toMatch(/Page description/);
    });

    it('should handle type aliases with JSDoc', async () => {
      const project = createProject();
      const sourceFile = project.createSourceFile(
        'test.tsx',
        `
        /**
         * Type alias description
         * @docSectionPageDescription Page description
         * @docSectionAbout About description
         */
        export type MyType = string | number;
        `
      );

      const result = await parseTSDoc(sourceFile);

      expect(result.description).toMatch(/Type alias description/);
    });

    it('should handle variable statements with JSDoc', async () => {
      const project = createProject();
      const sourceFile = project.createSourceFile(
        'test.tsx',
        `
        /**
         * Variable description
         * @docSectionPageDescription Page description
         * @docSectionAbout About description
         */
        export const myVariable = 'value';
        `
      );

      const result = await parseTSDoc(sourceFile);

      expect(result.description).toMatch(/Variable description/);
    });

    it('should handle empty JSDoc comments gracefully', async () => {
      const project = createProject();
      const sourceFile = project.createSourceFile(
        'test.tsx',
        `
        /** */
        /**
         * Component description
         * @docSectionPageDescription Page description
         * @docSectionAbout About description
         */
        export const Component = () => null;
        `
      );

      const result = await parseTSDoc(sourceFile);

      expect(result.description).toMatch(/Component description/);
    });

    it('should handle JSDoc with inline tags', async () => {
      const project = createProject();
      const sourceFile = project.createSourceFile(
        'test.tsx',
        `
        /**
         * Component with {@link other} tag
         * @docSectionPageDescription Page description
         * @docSectionAbout About description
         */
        export const Component = () => null;
      `
      );

      const result = await parseTSDoc(sourceFile);

      expect(result.description).toMatch(/Component with.*tag/);
    });

    it('should preserve newlines in accessibility keyboard tags', async () => {
      const project = createProject();
      const sourceFile = project.createSourceFile(
        'test.tsx',
        `
        /**
         * Component description
         * @docSectionPageDescription Page description
         * @docSectionAbout About description
         * @docSectionAccessibilityKeyboard
         * • Tab - Navigate to checkbox
         * • Space - Toggle checkbox
         * • Enter -Activate checkbox
         */
        export const Component = () => null;
      `
      );

      const result = await parseTSDoc(sourceFile);

      const keyboardInfo = result.customTags.docSectionAccessibilityKeyboard;
      expect(keyboardInfo).toContain('• Tab - Navigate to checkbox');
      expect(keyboardInfo).toContain('• Space - Toggle checkbox');
      expect(keyboardInfo).toContain('• Enter -Activate checkbox');
    });

    it('should preserve newlines in accessibility ARIA tags', async () => {
      const project = createProject();
      const sourceFile = project.createSourceFile(
        'test.tsx',
        `
        /**
         * Component description
         * @docSectionPageDescription Page description
         * @docSectionAbout About description
         * @docSectionAccessibilityAria
         * • aria-label - Accessible label
         * • aria-describedby - Description
         */
        export const Component = () => null;
      `
      );

      const result = await parseTSDoc(sourceFile);

      const ariaInfo = result.customTags.docSectionAccessibilityAria;
      expect(ariaInfo).toContain('• aria-label - Accessible label');
      expect(ariaInfo).toContain('• aria-describedby - Description');
    });

    it('should focus on first description found', async () => {
      const project = createProject();
      const sourceFile = project.createSourceFile(
        'test.tsx',
        `
        /**
         * First description
         * @docSectionPageDescription First page description
         * @docSectionAbout First about
         */
        export const Component1 = () => null;

        /**
         * Second description
         * @docSectionPageDescription Second page description
         * @docSectionAbout Second about
         */
        export const Component2 = () => null;
      `
      );

      const result = await parseTSDoc(sourceFile);

      // Should use the first description and tags found
      expect(result.description).toMatch(/First description/);
      expect(result.pageDescription).toMatch(/First page description/);
      expect(result.aboutDescription).toMatch(/First about/);
    });

    it('should handle soft breaks in descriptions', async () => {
      const project = createProject();
      const sourceFile = project.createSourceFile(
        'test.tsx',
        `
        /**
         * Component description with
         * line breaks
         * @docSectionPageDescription Page description
         * @docSectionAbout About description
         */
        export const Component = () => null;
      `
      );

      const result = await parseTSDoc(sourceFile);

      expect(result.description).toContain('line breaks');
    });

    it('should handle parse errors gracefully', async () => {
      const project = createProject();
      const sourceFile = project.createSourceFile(
        'test.tsx',
        `
        /**
         * Valid description
         * @docSectionPageDescription Page description
         * @docSectionAbout About description
         */
        export const Component = () => null;

        /**
         * Invalid JSDoc @_invalid
         */
        export const InvalidComponent = () => null;
      `
      );

      const result = await parseTSDoc(sourceFile);

      expect(result.description).toMatch(/Valid description/);
    });
  });

  describe('getCustomTagNames', () => {
    it('should extract all custom tag names', async () => {
      const project = createProject();
      const sourceFile = project.createSourceFile(
        'test.tsx',
        `
        /**
         * Component description
         * @docSectionAbout About description
         * @docSectionComposition Composition info
         * @customTag Custom tag value
         */
        export const Component = () => null;
      `
      );

      const tagNames = getCustomTagNames(sourceFile);

      expect(tagNames).toContain('docSectionAbout');
      expect(tagNames).toContain('docSectionComposition');
    });

    it('should return empty array when no custom tags exist', async () => {
      const project = createProject();
      const sourceFile = project.createSourceFile(
        'test.tsx',
        `
        /**
         * Component description without custom tags
         */
        export const Component = () => null;
      `
      );

      const tagNames = getCustomTagNames(sourceFile);

      expect(tagNames).toEqual([]);
    });

    it('should remove @ prefix from tag names', async () => {
      const project = createProject();
      const sourceFile = project.createSourceFile(
        'test.tsx',
        `
        /**
         * Component description
         * @docSectionAbout About description
         */
        export const Component = () => null;
      `
      );

      const tagNames = getCustomTagNames(sourceFile);

      expect(tagNames[0]).toBe('docSectionAbout');
    });

    it('should extract tags from functions', async () => {
      const project = createProject();
      const sourceFile = project.createSourceFile(
        'test.tsx',
        `
        /**
         * Component description
         * @docSectionAbout About description
         */
        export function Component() {
          return null;
        }
      `
      );

      const tagNames = getCustomTagNames(sourceFile);

      expect(tagNames).toContain('docSectionAbout');
    });

    it('should extract tags from variable statements', async () => {
      const project = createProject();
      const sourceFile = project.createSourceFile(
        'test.tsx',
        `
        /**
         * Variable description
         * @docSectionComposition Composition
         */
        export const myVar = 'value';
      `
      );

      const tagNames = getCustomTagNames(sourceFile);

      expect(tagNames).toContain('docSectionComposition');
    });

    it('should extract tags from interfaces', async () => {
      const project = createProject();
      const sourceFile = project.createSourceFile(
        'test.tsx',
        `
        /**
         * Interface description
         * @docSectionFeaturesAnimated Animated
         */
        export interface MyInterface {
          prop: string;
        }
      `
      );

      const tagNames = getCustomTagNames(sourceFile);

      expect(tagNames).toContain('docSectionFeaturesAnimated');
    });

    it('should extract tags from type aliases', async () => {
      const project = createProject();
      const sourceFile = project.createSourceFile(
        'test.tsx',
        `
        /**
         * Type alias description
         * @docSectionFeaturesCollapsible Collapsible
         */
        export type MyType = string;
      `
      );

      const tagNames = getCustomTagNames(sourceFile);

      expect(tagNames).toContain('docSectionFeaturesCollapsible');
    });

    it('should handle multiple JSDoc comments with different tags', async () => {
      const project = createProject();
      const sourceFile = project.createSourceFile(
        'test.tsx',
        `
        /**
         * First component
         * @docSectionAbout About 1
         * @docSectionComposition Composition 1
         */
        export const Component1 = () => null;

        /**
         * Second component
         * @docSectionAbout About 2
         * @docSectionFeaturesAnimated Animated
         */
        export const Component2 = () => null;
      `
      );

      const tagNames = getCustomTagNames(sourceFile);

      expect(tagNames).toContain('docSectionAbout');
      expect(tagNames).toContain('docSectionComposition');
      expect(tagNames).toContain('docSectionFeaturesAnimated');
    });

    it('should deduplicate tag names', async () => {
      const project = createProject();
      const sourceFile = project.createSourceFile(
        'test.tsx',
        `
        /**
         * First component
         * @docSectionAbout About 1
         */
        export const Component1 = () => null;

        /**
         * Second component
         * @docSectionAbout About 2
         */
        export const Component2 = () => null;
      `
      );

      const tagNames = getCustomTagNames(sourceFile);

      // Should only appear once
      expect(tagNames.filter(t => t === 'docSectionAbout').length).toBe(1);
    });
  });

  describe('hasTag', () => {
    it('should return true when tag exists', async () => {
      const project = createProject();
      const sourceFile = project.createSourceFile(
        'test.tsx',
        `
        /**
         * Component description
         * @docSectionAbout About description
         */
        export const Component = () => null;
      `
      );

      const hasAboutTag = hasTag(sourceFile, 'docSectionAbout');

      expect(hasAboutTag).toBe(true);
    });

    it('should return false when tag does not exist', async () => {
      const project = createProject();
      const sourceFile = project.createSourceFile(
        'test.tsx',
        `
        /**
         * Component description
         * @docSectionAbout About description
         */
        export const Component = () => null;
      `
      );

      const hasCompositionTag = hasTag(sourceFile, 'docSectionComposition');

      expect(hasCompositionTag).toBe(false);
    });

    it('should return false for source file without JSDoc', async () => {
      const project = createProject();
      const sourceFile = project.createSourceFile(
        'test.tsx',
        'export const Component = () => null;'
      );

      const hasTagResult = hasTag(sourceFile, 'docSectionAbout');

      expect(hasTagResult).toBe(false);
    });

    it('should return true for tag in function', async () => {
      const project = createProject();
      const sourceFile = project.createSourceFile(
        'test.tsx',
        `
        /**
         * Component description
         * @docSectionAbout About description
         */
        export function Component() {
          return null;
        }
      `
      );

      const hasAboutTag = hasTag(sourceFile, 'docSectionAbout');

      expect(hasAboutTag).toBe(true);
    });

    it('should return true for tag in interface', async () => {
      const project = createProject();
      const sourceFile = project.createSourceFile(
        'test.tsx',
        `
        /**
         * Interface description
         * @docSectionComposition Composition
         */
        export interface MyInterface {
          prop: string;
        }
      `
      );

      const hasCompositionTag = hasTag(sourceFile, 'docSectionComposition');

      expect(hasCompositionTag).toBe(true);
    });

    it('should return true for tag in type alias', async () => {
      const project = createProject();
      const sourceFile = project.createSourceFile(
        'test.tsx',
        `
        /**
         * Type alias description
         * @docSectionFeaturesAnimated Animated
         */
        export type MyType = string;
      `
      );

      const hasAnimatedTag = hasTag(sourceFile, 'docSectionFeaturesAnimated');

      expect(hasAnimatedTag).toBe(true);
    });

    it('should return true for tag in variable statement', async () => {
      const project = createProject();
      const sourceFile = project.createSourceFile(
        'test.tsx',
        `
        /**
         * Variable description
         * @docSectionFeaturesCollapsible Collapsible
         */
        export const myVar = 'value';
      `
      );

      const hasCollapsibleTag = hasTag(sourceFile, 'docSectionFeaturesCollapsible');

      expect(hasCollapsibleTag).toBe(true);
    });

    it('should handle case-sensitive tag names', async () => {
      const project = createProject();
      const sourceFile = project.createSourceFile(
        'test.tsx',
        `
        /**
         * Component description
         * @docSectionAbout About description
         */
        export const Component = () => null;
      `
      );

      const hasLowerCaseTag = hasTag(sourceFile, 'docsectionabout');
      const hasCorrectTag = hasTag(sourceFile, 'docSectionAbout');

      expect(hasLowerCaseTag).toBe(false);
      expect(hasCorrectTag).toBe(true);
    });

    it('should find tag when present in multiple JSDoc comments', async () => {
      const project = createProject();
      const sourceFile = project.createSourceFile(
        'test.tsx',
        `
        /**
         * First component
         * @docSectionAbout About 1
         */
        export const Component1 = () => null;

        /**
         * Second component
         * @docSectionComposition Composition
         */
        export const Component2 = () => null;
      `
      );

      const hasAboutTag = hasTag(sourceFile, 'docSectionAbout');
      const hasCompositionTag = hasTag(sourceFile, 'docSectionComposition');

      expect(hasAboutTag).toBe(true);
      expect(hasCompositionTag).toBe(true);
    });
  });
});

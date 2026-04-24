/**
 * Tests for sizes.ts generator
 */

import { describe, expect, it } from 'vitest';
import type { ComponentMetadata } from '../../parsers/metadata-extractor';
import type { LoadedExample } from '../../scanners/example-loader';
import { generateSizesSection } from '../sizes';

describe('generateSizesSection', () => {
  const mockMetadata: ComponentMetadata = {
    name: 'accordion',
    props: [],
    variants: [],
    sizes: [],
    exports: [],
    subComponents: [],
    filePath: '/path/to/Accordion.tsx',
    isRadixComponent: false,
  };

  describe('when no size examples exist', () => {
    it('should return empty string when examples array is empty', () => {
      const examples: LoadedExample[] = [];
      const result = generateSizesSection('accordion', examples, mockMetadata);
      expect(result).toBe('');
    });

    it('should return empty string when no examples have category "size"', () => {
      const examples: LoadedExample[] = [
        {
          name: 'basic',
          title: 'Basic',
          category: 'variant',
          path: '/examples/accordion/basic/page.tsx',
          code: 'import { Accordion } ...',
        },
        {
          name: 'single',
          title: 'Single',
          category: 'variant',
          path: '/examples/accordion/single/page.tsx',
          code: 'import { Accordion } ...',
        },
      ];
      const result = generateSizesSection('accordion', examples, mockMetadata);
      expect(result).toBe('');
    });
  });

  describe('when size examples exist', () => {
    const sizeExamples: LoadedExample[] = [
      {
        name: 'small',
        title: 'Small',
        category: 'size',
        path: '/examples/accordion/small/page.tsx',
        code: 'import { Accordion } ...',
        iframeSize: 'sm',
      },
      {
        name: 'medium',
        title: 'Medium',
        category: 'size',
        path: '/examples/accordion/medium/page.tsx',
        code: 'import { Accordion } ...',
        iframeSize: 'md',
      },
      {
        name: 'large',
        title: 'Large',
        category: 'size',
        path: '/examples/accordion/large/page.tsx',
        code: 'import { Accordion } ...',
        iframeSize: 'lg',
      },
    ];

    it('should generate PageSection wrapper with title', () => {
      const result = generateSizesSection('accordion', sizeExamples, mockMetadata);
      expect(result).toContain('<PageSection title="Sizes">');
    });

    it('should include descriptive text about sizes', () => {
      const result = generateSizesSection('accordion', sizeExamples, mockMetadata);
      expect(result).toContain('Component sizes for different contexts and visual hierarchy.');
    });

    it('should generate Card for each size example', () => {
      const result = generateSizesSection('accordion', sizeExamples, mockMetadata);
      expect(result).toContain('<CardTitle>Small</CardTitle>');
      expect(result).toContain('<CardTitle>Medium</CardTitle>');
      expect(result).toContain('<CardTitle>Large</CardTitle>');
    });

    it('should include IframeExample with correct attributes', () => {
      const result = generateSizesSection('accordion', sizeExamples, mockMetadata);
      expect(result).toContain('<IframeExample');
      expect(result).toContain('src="/examples/accordion/small"');
      expect(result).toContain('src="/examples/accordion/medium"');
      expect(result).toContain('src="/examples/accordion/large"');
      expect(result).toContain('title="Small Example"');
      expect(result).toContain('title="Medium Example"');
      expect(result).toContain('title="Large Example"');
    });

    it('should include CodeExample for each size', () => {
      const result = generateSizesSection('accordion', sizeExamples, mockMetadata);
      expect(result).toContain('<CodeExample code={AccordionSmallCODE} />');
      expect(result).toContain('<CodeExample code={AccordionMediumCODE} />');
      expect(result).toContain('<CodeExample code={AccordionLargeCODE} />');
    });

    it('should generate correct ref names', () => {
      const result = generateSizesSection('accordion', sizeExamples, mockMetadata);
      expect(result).toContain('ref={AccordionSmallIframeRef}');
      expect(result).toContain('ref={AccordionMediumIframeRef}');
      expect(result).toContain('ref={AccordionLargeIframeRef}');
    });

    it('should generate correct size constant names', () => {
      const result = generateSizesSection('accordion', sizeExamples, mockMetadata);
      expect(result).toContain('size={AccordionSmallSIZE}');
      expect(result).toContain('size={AccordionMediumSIZE}');
      expect(result).toContain('size={AccordionLargeSIZE}');
    });

    it('should use correct CSS classes', () => {
      const result = generateSizesSection('accordion', sizeExamples, mockMetadata);
      expect(result).toContain('className="mt-(--lsd-spacing-base)"');
    });
  });

  describe('component name variations', () => {
    const sizeExample: LoadedExample = {
      name: 'small',
      title: 'Small',
      category: 'size',
      path: '/examples/accordion/small/page.tsx',
      code: 'import { Accordion } ...',
      iframeSize: 'sm',
    };

    it('should handle kebab-case component names', () => {
      const result = generateSizesSection('my-component', [sizeExample], mockMetadata);
      expect(result).toContain('ref={MyComponentSmallIframeRef}');
      expect(result).toContain('/examples/my-component/small"');
    });

    it('should handle single-word component names', () => {
      const result = generateSizesSection('button', [sizeExample], mockMetadata);
      expect(result).toContain('ref={ButtonSmallIframeRef}');
      expect(result).toContain('size={ButtonSmallSIZE}');
    });

    it('should handle component names with multiple hyphens', () => {
      const result = generateSizesSection('data-table-with-sorting', [sizeExample], mockMetadata);
      expect(result).toContain('ref={DataTableWithSortingSmallIframeRef}');
      expect(result).toContain('size={DataTableWithSortingSmallSIZE}');
    });

    it('should handle component names with underscores', () => {
      const result = generateSizesSection('my_component', [sizeExample], mockMetadata);
      expect(result).toContain('ref={MyComponentSmallIframeRef}');
      expect(result).toContain('size={MyComponentSmallSIZE}');
    });
  });

  describe('size_title variations', () => {
    const createSizeExample = (title: string): LoadedExample => ({
      name: 'example',
      title,
      category: 'size',
      path: '/examples/accordion/example/page.tsx',
      code: 'import { Accordion } ...',
      iframeSize: 'sm',
    });

    it('should handle single-word titles', () => {
      const result = generateSizesSection('accordion', [createSizeExample('Extra')], mockMetadata);
      expect(result).toContain('ref={AccordionExtraIframeRef}');
      expect(result).toContain('<CardTitle>Extra</CardTitle>');
    });

    it('should handle multi-word titles with spaces', () => {
      const result = generateSizesSection(
        'accordion',
        [createSizeExample('Extra Small')],
        mockMetadata
      );
      expect(result).toContain('ref={AccordionExtraSmallIframeRef}');
      expect(result).toContain('<CardTitle>Extra Small</CardTitle>');
    });

    it('should handle titles with multiple spaces', () => {
      const result = generateSizesSection(
        'accordion',
        [createSizeExample('Very  Large  Size')],
        mockMetadata
      );
      expect(result).toContain('ref={AccordionVeryLargeSizeIframeRef}');
      expect(result).toContain('size={AccordionVeryLargeSizeSIZE}');
    });
  });

  describe('error handling', () => {
    it('should throw error when iframeSize is missing', () => {
      const examplesWithoutSize: LoadedExample[] = [
        {
          name: 'small',
          title: 'Small',
          category: 'size',
          path: '/examples/accordion/small/page.tsx',
          code: 'import { Accordion } ...',
          // iframeSize is missing
        },
      ];

      expect(() => {
        generateSizesSection('accordion', examplesWithoutSize, mockMetadata);
      }).toThrow(
        "Example accordion/small must export a SIZE constant (e.g., export const SIZE = 'sm';)"
      );
    });

    it('should throw error with correct component and example name', () => {
      const examplesWithoutSize: LoadedExample[] = [
        {
          name: 'custom',
          title: 'Custom',
          category: 'size',
          path: '/examples/button/custom/page.tsx',
          code: 'import { Button } ...',
        },
      ];

      expect(() => {
        generateSizesSection('button', examplesWithoutSize, mockMetadata);
      }).toThrow('Example button/custom must export a SIZE constant');
    });
  });

  describe('iframe sizes', () => {
    const createExample = (iframeSize: LoadedExample['iframeSize']): LoadedExample => ({
      name: 'example',
      title: 'Example',
      category: 'size',
      path: '/examples/accordion/example/page.tsx',
      code: 'import { Accordion } ...',
      iframeSize,
    });

    it('should handle sm iframe size', () => {
      const result = generateSizesSection('accordion', [createExample('sm')], mockMetadata);
      expect(result).toContain('<IframeExample');
      expect(result).toContain('size={AccordionExampleSIZE}');
    });

    it('should handle md iframe size', () => {
      const result = generateSizesSection('accordion', [createExample('md')], mockMetadata);
      expect(result).toContain('<IframeExample');
      expect(result).toContain('size={AccordionExampleSIZE}');
    });

    it('should handle lg iframe size', () => {
      const result = generateSizesSection('accordion', [createExample('lg')], mockMetadata);
      expect(result).toContain('<IframeExample');
      expect(result).toContain('size={AccordionExampleSIZE}');
    });
  });

  describe('output format', () => {
    it('should generate properly indented output', () => {
      const sizeExamples: LoadedExample[] = [
        {
          name: 'small',
          title: 'Small',
          category: 'size',
          path: '/examples/accordion/small/page.tsx',
          code: 'import { Accordion } ...',
          iframeSize: 'sm',
        },
      ];

      const result = generateSizesSection('accordion', sizeExamples, mockMetadata);

      // Check for proper indentation (8 spaces for PageSection content)
      expect(result).toMatch(/^ {8}<PageSection title="Sizes">/m);
      expect(result).toMatch(/^ {10}<Typography/m);
    });

    it('should join multiple examples with newlines', () => {
      const sizeExamples: LoadedExample[] = [
        {
          name: 'small',
          title: 'Small',
          category: 'size',
          path: '/examples/accordion/small/page.tsx',
          code: 'import { Accordion } ...',
          iframeSize: 'sm',
        },
        {
          name: 'large',
          title: 'Large',
          category: 'size',
          path: '/examples/accordion/large/page.tsx',
          code: 'import { Accordion } ...',
          iframeSize: 'lg',
        },
      ];

      const result = generateSizesSection('accordion', sizeExamples, mockMetadata);

      // Should contain both cards
      expect(result).toContain('<Card className="mt-(--lsd-spacing-base)">');
      expect(result).toContain('<CardTitle>Small</CardTitle>');
      expect(result).toContain('<CardTitle>Large</CardTitle>');

      // Count occurrences of Card to ensure we have both
      const cardMatches = result.match(/<Card className="mt-\(--lsd-spacing-base\)">/g);
      expect(cardMatches).toHaveLength(2);
    });
  });
});

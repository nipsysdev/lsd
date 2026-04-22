/**
 * Tests for variants.ts
 */

import { describe, expect, it } from 'vitest';
import type { ComponentMetadata } from '../../parsers/metadata-extractor';
import type { LoadedExample } from '../../scanners/example-loader';
import { generateVariantsSection } from '../variants';

describe('generateVariantsSection', () => {
  const mockMetadata: ComponentMetadata = {
    name: 'TestComponent',
    props: [],
    variants: [],
    sizes: [],
    exports: [],
    propsExpanded: false,
    hasSizeProp: false,
  } as any;

  const createExample = (
    name: string,
    title: string,
    category: string,
    iframeSize: 'sm' | 'md' | 'lg' | undefined
  ): LoadedExample => ({
    name,
    title,
    category: category as any,
    path: `/path/to/examples/${name}/page.tsx`,
    code: `// code for ${name}`,
    iframeSize,
  });

  describe('when no variant examples exist', () => {
    it('should return empty string', () => {
      const examples: LoadedExample[] = [
        createExample('basic-example', 'Basic Example', 'basic', 'sm'),
      ];

      const result = generateVariantsSection('test-component', examples, mockMetadata);
      expect(result).toBe('');
    });

    it('should return empty string when examples array is empty', () => {
      const examples: LoadedExample[] = [];

      const result = generateVariantsSection('test-component', examples, mockMetadata);
      expect(result).toBe('');
    });

    it('should filter out non-variant categories', () => {
      const examples: LoadedExample[] = [
        createExample('basic', 'Basic', 'basic', 'sm'),
        createExample('usage', 'Usage', 'usage', 'sm'),
        createExample('feature', 'Feature', 'feature', 'sm'),
      ];

      const result = generateVariantsSection('test-component', examples, mockMetadata);
      expect(result).toBe('');
    });
  });

  describe('with single variant example', () => {
    it('should generate section with variant category', () => {
      const examples: LoadedExample[] = [
        createExample('filled', 'Filled Variant', 'variant', 'sm'),
      ];

      const result = generateVariantsSection('button', examples, mockMetadata);

      expect(result).toContain('PageSection title="Variants"');
      expect(result).toContain('Component variants for different visual styles and use cases.');
      expect(result).toContain('Card className="mt-(--lsd-spacing-base)"');
      expect(result).toContain('CardTitle>Filled Variant</CardTitle>');
      expect(result).toContain('IframeExample');
      expect(result).toContain('ref={ButtonFilledVariantIframeRef}');
      expect(result).toContain('size={ButtonFilledVariantSIZE}');
      expect(result).toContain('src="/examples/button/filled"');
      expect(result).toContain('title="Filled Variant Example"');
      expect(result).toContain('CodeExample code={ButtonFilledVariantCODE} />');
    });

    it('should generate section with primary category', () => {
      const examples: LoadedExample[] = [
        createExample('primary-filled', 'Primary Filled', 'primary', 'sm'),
      ];

      const result = generateVariantsSection('button', examples, mockMetadata);

      expect(result).toContain('PageSection title="Variants"');
      expect(result).toContain('Primary Filled');
    });

    it('should generate section with rounded category', () => {
      const examples: LoadedExample[] = [
        createExample('rounded-filled', 'Rounded Filled', 'rounded', 'sm'),
      ];

      const result = generateVariantsSection('button', examples, mockMetadata);

      expect(result).toContain('rounded-filled');
    });

    it('should generate section with ghost category', () => {
      const examples: LoadedExample[] = [
        createExample('ghost-basic', 'Ghost Basic', 'ghost', 'sm'),
      ];

      const result = generateVariantsSection('button', examples, mockMetadata);

      expect(result).toContain('ghost-basic');
    });

    it('should generate section with semantic category', () => {
      const examples: LoadedExample[] = [
        createExample('semantic-danger', 'Semantic Danger', 'semantic', 'sm'),
      ];

      const result = generateVariantsSection('button', examples, mockMetadata);

      expect(result).toContain('semantic-danger');
    });
  });

  describe('with multiple variant examples', () => {
    it('should group examples by category', () => {
      const examples: LoadedExample[] = [
        createExample('filled', 'Filled', 'variant', 'sm'),
        createExample('outlined', 'Outlined', 'variant', 'sm'),
      ];

      const result = generateVariantsSection('button', examples, mockMetadata);

      // Should have both examples in the output
      expect(result).toContain('Filled');
      expect(result).toContain('Outlined');
      expect(result).toContain('src="/examples/button/filled"');
      expect(result).toContain('src="/examples/button/outlined"');
    });

    it('should handle examples from different categories', () => {
      const examples: LoadedExample[] = [
        createExample('filled', 'Filled', 'variant', 'sm'),
        createExample('primary', 'Primary', 'primary', 'sm'),
        createExample('rounded', 'Rounded', 'rounded', 'sm'),
      ];

      const result = generateVariantsSection('button', examples, mockMetadata);

      expect(result).toContain('Filled');
      expect(result).toContain('Primary');
      expect(result).toContain('Rounded');
    });

    it('should handle many examples in same category', () => {
      const examples: LoadedExample[] = [
        createExample('filled', 'Filled', 'variant', 'sm'),
        createExample('outlined', 'Outlined', 'variant', 'sm'),
        createExample('text', 'Text', 'variant', 'sm'),
        createExample('link', 'Link', 'variant', 'sm'),
      ];

      const result = generateVariantsSection('button', examples, mockMetadata);

      expect(result).toContain('Filled');
      expect(result).toContain('Outlined');
      expect(result).toContain('Text');
      expect(result).toContain('Link');
    });
  });

  describe('PascalCase conversion', () => {
    it('should convert kebab-case to PascalCase', () => {
      const examples: LoadedExample[] = [
        createExample('test-example', 'Test Example', 'variant', 'sm'),
      ];

      const result = generateVariantsSection('my-component', examples, mockMetadata);

      expect(result).toContain('MyComponentTestExampleIframeRef');
      expect(result).toContain('MyComponentTestExampleSIZE');
      expect(result).toContain('MyComponentTestExampleCODE');
    });

    it('should handle component name with multiple hyphens', () => {
      const examples: LoadedExample[] = [createExample('example', 'Example', 'variant', 'sm')];

      const result = generateVariantsSection('my-test-component-name', examples, mockMetadata);

      expect(result).toContain('MyTestComponentNameExampleIframeRef');
      expect(result).toContain('src="/examples/my-test-component-name/example"');
    });

    it('should handle component name with underscores', () => {
      const examples: LoadedExample[] = [createExample('example', 'Example', 'variant', 'sm')];

      const result = generateVariantsSection('my_test_component', examples, mockMetadata);

      expect(result).toContain('MyTestComponentExampleIframeRef');
    });
  });

  describe('example title handling', () => {
    it('should handle title with spaces', () => {
      const examples: LoadedExample[] = [
        createExample('filled-variant', 'Filled Variant Button', 'variant', 'sm'),
      ];

      const result = generateVariantsSection('button', examples, mockMetadata);

      expect(result).toContain('Filled Variant Button');
      expect(result).toContain('ButtonFilledVariantButtonIframeRef');
      expect(result).toContain('ButtonFilledVariantButtonSIZE');
      expect(result).toContain('ButtonFilledVariantButtonCODE');
    });

    it('should handle title with multiple spaces', () => {
      const examples: LoadedExample[] = [
        createExample('multi', 'Multiple Words Here', 'variant', 'sm'),
      ];

      const result = generateVariantsSection('component', examples, mockMetadata);

      expect(result).toContain('Multiple Words Here');
      expect(result).toContain('ComponentMultipleWordsHereIframeRef');
    });

    it('should handle single word title', () => {
      const examples: LoadedExample[] = [createExample('simple', 'Simple', 'variant', 'sm')];

      const result = generateVariantsSection('button', examples, mockMetadata);

      expect(result).toContain('Simple');
      expect(result).toContain('ButtonSimpleIframeRef');
    });
  });

  describe('error handling', () => {
    it('should throw error when iframeSize is missing', () => {
      const examples: LoadedExample[] = [
        createExample('incomplete', 'Incomplete Example', 'variant', undefined),
      ];

      expect(() => {
        generateVariantsSection('button', examples, mockMetadata);
      }).toThrow(
        "Example button/incomplete must export a SIZE constant (e.g., export const SIZE = 'sm';)"
      );
    });
  });

  describe('iframe size values', () => {
    it('should handle iframeSize "sm"', () => {
      const examples: LoadedExample[] = [createExample('small', 'Small Example', 'variant', 'sm')];

      const result = generateVariantsSection('button', examples, mockMetadata);

      expect(result).toContain('ButtonSmallExampleSIZE');
    });

    it('should handle iframeSize "md"', () => {
      const examples: LoadedExample[] = [
        createExample('medium', 'Medium Example', 'variant', 'md'),
      ];

      const result = generateVariantsSection('button', examples, mockMetadata);

      expect(result).toContain('ButtonMediumExampleSIZE');
    });

    it('should handle iframeSize "lg"', () => {
      const examples: LoadedExample[] = [createExample('large', 'Large Example', 'variant', 'lg')];

      const result = generateVariantsSection('button', examples, mockMetadata);

      expect(result).toContain('ButtonLargeExampleSIZE');
    });
  });

  describe('metadata parameter', () => {
    it('should ignore metadata parameter (uses underscore prefix)', () => {
      const examples: LoadedExample[] = [createExample('test', 'Test', 'variant', 'sm')];

      const emptyMetadata: ComponentMetadata = {
        name: '',
        props: [],
        variants: [],
        sizes: [],
        exports: [],
        propsExpanded: false,
        hasSizeProp: false,
      } as any;
      const result = generateVariantsSection('button', examples, emptyMetadata);

      expect(result).toContain('Test');
    });
  });

  describe('sectionVariantsTitle parameter handling', () => {
    it('should handle variant category specially in title generation', () => {
      const examples: LoadedExample[] = [createExample('example1', 'Example One', 'variant', 'sm')];

      const result = generateVariantsSection('test', examples, mockMetadata);

      // The sectionVariantsTitle is used internally but not directly in output
      // Verify the function doesn't throw
      expect(result).toContain('Example One');
    });
  });

  describe('all variant categories', () => {
    it('should handle all five variant categories in one call', () => {
      const examples: LoadedExample[] = [
        createExample('v1', 'Variant 1', 'variant', 'sm'),
        createExample('p1', 'Primary 1', 'primary', 'sm'),
        createExample('r1', 'Rounded 1', 'rounded', 'sm'),
        createExample('g1', 'Ghost 1', 'ghost', 'sm'),
        createExample('s1', 'Semantic 1', 'semantic', 'sm'),
      ];

      const result = generateVariantsSection('button', examples, mockMetadata);

      expect(result).toContain('Variant 1');
      expect(result).toContain('Primary 1');
      expect(result).toContain('Rounded 1');
      expect(result).toContain('Ghost 1');
      expect(result).toContain('Semantic 1');
    });
  });

  describe('structure and formatting', () => {
    it('should maintain proper indentation in output', () => {
      const examples: LoadedExample[] = [createExample('test', 'Test Example', 'variant', 'sm')];

      const result = generateVariantsSection('button', examples, mockMetadata);

      // Check for proper indentation
      expect(result).toContain('      <PageSection title="Variants">');
      expect(result).toContain('        <Typography variant="body1">');
      expect(result).toContain('          <Card className="mt-(--lsd-spacing-base)">');
      expect(result).toContain('            <CardHeader>');
      expect(result).toContain('              <CardTitle>Test Example</CardTitle>');
      expect(result).toContain('            </CardHeader>');
      expect(result).toContain('            <CardContent>');
      expect(result).toContain('              <IframeExample');
      expect(result).toContain('              <CodeExample code={ButtonTestExampleCODE} />');
      expect(result).toContain('            </CardContent>');
      expect(result).toContain('          </Card>');
      expect(result).toContain('        </PageSection>');
    });

    it('should include required imports in generated code', () => {
      const examples: LoadedExample[] = [createExample('test', 'Test', 'variant', 'sm')];

      const result = generateVariantsSection('button', examples, mockMetadata);

      expect(result).toContain('PageSection');
      expect(result).toContain('Typography');
      expect(result).toContain('Card');
      expect(result).toContain('CardHeader');
      expect(result).toContain('CardTitle');
      expect(result).toContain('CardContent');
      expect(result).toContain('IframeExample');
      expect(result).toContain('CodeExample');
    });
  });

  describe('edge cases', () => {
    it('should handle component name with single word', () => {
      const examples: LoadedExample[] = [createExample('test', 'Test', 'variant', 'sm')];

      const result = generateVariantsSection('button', examples, mockMetadata);

      expect(result).toContain('ButtonTestIframeRef');
    });

    it('should handle special characters in title', () => {
      const examples: LoadedExample[] = [
        createExample('special', 'Test (Special)', 'variant', 'sm'),
      ];

      const result = generateVariantsSection('button', examples, mockMetadata);

      expect(result).toContain('Test (Special)');
      expect(result).toContain('src="/examples/button/special"');
    });

    it('should handle mixed case component name', () => {
      const examples: LoadedExample[] = [createExample('test', 'Test', 'variant', 'sm')];

      const result = generateVariantsSection('MyButton', examples, mockMetadata);

      expect(result).toContain('MyButtonTestIframeRef');
      expect(result).toContain('src="/examples/MyButton/test"');
    });
  });

  describe('category title generation', () => {
    it('should capitalize category name for title generation', () => {
      const examples: LoadedExample[] = [
        createExample('ex1', 'Ex 1', 'primary', 'sm'),
        createExample('ex2', 'Ex 2', 'rounded', 'sm'),
      ];

      const result = generateVariantsSection('button', examples, mockMetadata);

      // Both should be present with proper capitalization
      expect(result).toContain('Ex 1');
      expect(result).toContain('Ex 2');
    });
  });
});

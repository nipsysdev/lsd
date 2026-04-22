/**
 * Tests for basic-usage.ts
 */

import { describe, expect, it } from 'vitest';
import type { ComponentMetadata } from '../../parsers/metadata-extractor';
import type { LoadedExample } from '../../scanners/example-loader';
import { generateBasicUsageSection } from '../basic-usage';

describe('generateBasicUsageSection', () => {
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

  describe('when no usage examples exist', () => {
    it('should return empty string', () => {
      const examples: LoadedExample[] = [
        createExample('basic', 'Basic', 'basic', 'sm'),
        createExample('feature', 'Feature', 'feature', 'sm'),
      ];

      const result = generateBasicUsageSection('component', examples, mockMetadata);
      expect(result).toBe('');
    });

    it('should return empty string when examples array is empty', () => {
      const examples: LoadedExample[] = [];

      const result = generateBasicUsageSection('component', examples, mockMetadata);
      expect(result).toBe('');
    });

    it('should filter out non-usage categories', () => {
      const examples: LoadedExample[] = [
        createExample('variant1', 'Variant 1', 'variant', 'sm'),
        createExample('variant2', 'Variant 2', 'variant', 'sm'),
        createExample('size1', 'Size 1', 'size', 'sm'),
        createExample('feature1', 'Feature 1', 'feature', 'sm'),
      ];

      const result = generateBasicUsageSection('component', examples, mockMetadata);
      expect(result).toBe('');
    });
  });

  describe('with single usage example', () => {
    it('should generate Usage section with single example', () => {
      const examples: LoadedExample[] = [createExample('default', 'Default', 'usage', 'sm')];

      const result = generateBasicUsageSection('button', examples, mockMetadata);

      expect(result).toContain('PageSection title="Usage"');
      expect(result).toContain('The simplest form of the component with default styling.');
      expect(result).toContain('Card className="mt-(--lsd-spacing-base)"');
      expect(result).toContain('CardTitle>Default</CardTitle>');
      expect(result).toContain('IframeExample');
      expect(result).toContain('ref={ButtonDefaultIframeRef}');
      expect(result).toContain('size={ButtonDefaultSIZE}');
      expect(result).toContain('src="/examples/button/default"');
      expect(result).toContain('title="Default Example"');
      expect(result).toContain('CodeExample code={ButtonDefaultCODE} />');
    });

    it('should handle example with iframeSize "md"', () => {
      const examples: LoadedExample[] = [createExample('medium', 'Medium', 'usage', 'md')];

      const result = generateBasicUsageSection('component', examples, mockMetadata);

      expect(result).toContain('ComponentMediumSIZE');
      expect(result).toContain('Medium</CardTitle>');
    });

    it('should handle example with iframeSize "lg"', () => {
      const examples: LoadedExample[] = [createExample('large', 'Large', 'usage', 'lg')];

      const result = generateBasicUsageSection('component', examples, mockMetadata);

      expect(result).toContain('ComponentLargeSIZE');
      expect(result).toContain('Large</CardTitle>');
    });
  });

  describe('with multiple usage examples', () => {
    it('should generate multiple cards for all usage examples', () => {
      const examples: LoadedExample[] = [
        createExample('default', 'Default', 'usage', 'sm'),
        createExample('controlled', 'Controlled', 'usage', 'sm'),
        createExample('uncontrolled', 'Uncontrolled', 'usage', 'sm'),
      ];

      const result = generateBasicUsageSection('input', examples, mockMetadata);

      expect(result).toContain('PageSection title="Usage"');
      expect(result).toContain('Default</CardTitle>');
      expect(result).toContain('Controlled</CardTitle>');
      expect(result).toContain('Uncontrolled</CardTitle>');
      expect(result).toContain('InputDefaultIframeRef');
      expect(result).toContain('InputControlledIframeRef');
      expect(result).toContain('InputUncontrolledIframeRef');
      expect(result).toContain('src="/examples/input/default"');
      expect(result).toContain('src="/examples/input/controlled"');
      expect(result).toContain('src="/examples/input/uncontrolled"');
    });
  });

  describe('PascalCase conversion', () => {
    it('should convert kebab-case component name to PascalCase', () => {
      const examples: LoadedExample[] = [createExample('simple', 'Simple', 'usage', 'sm')];

      const result = generateBasicUsageSection('my-component', examples, mockMetadata);

      expect(result).toContain('MyComponentSimpleIframeRef');
      expect(result).toContain('MyComponentSimpleSIZE');
      expect(result).toContain('MyComponentSimpleCODE');
    });

    it('should handle component name with multiple hyphens', () => {
      const examples: LoadedExample[] = [createExample('test', 'Test', 'usage', 'sm')];

      const result = generateBasicUsageSection('my-test-component', examples, mockMetadata);

      expect(result).toContain('MyTestComponentTestIframeRef');
      expect(result).toContain('src="/examples/my-test-component/test"');
    });

    it('should handle component name with underscores', () => {
      const examples: LoadedExample[] = [createExample('example', 'Example', 'usage', 'sm')];

      const result = generateBasicUsageSection('my_test_component', examples, mockMetadata);

      expect(result).toContain('MyTestComponentExampleIframeRef');
    });

    it('should handle single word component name', () => {
      const examples: LoadedExample[] = [createExample('basic', 'Basic', 'usage', 'sm')];

      const result = generateBasicUsageSection('button', examples, mockMetadata);

      expect(result).toContain('ButtonBasicIframeRef');
    });
  });

  describe('example title handling', () => {
    it('should handle title with spaces', () => {
      const examples: LoadedExample[] = [
        createExample('example', 'Basic Usage Example', 'usage', 'sm'),
      ];

      const result = generateBasicUsageSection('component', examples, mockMetadata);

      expect(result).toContain('Basic Usage Example</CardTitle>');
      expect(result).toContain('ComponentBasicUsageExampleIframeRef');
      expect(result).toContain('ComponentBasicUsageExampleSIZE');
      expect(result).toContain('ComponentBasicUsageExampleCODE');
    });

    it('should handle title with multiple spaces', () => {
      const examples: LoadedExample[] = [
        createExample('test', 'Multiple Words Here', 'usage', 'sm'),
      ];

      const result = generateBasicUsageSection('component', examples, mockMetadata);

      expect(result).toContain('Multiple Words Here</CardTitle>');
      expect(result).toContain('ComponentMultipleWordsHereIframeRef');
    });

    it('should handle single word title', () => {
      const examples: LoadedExample[] = [createExample('simple', 'Simple', 'usage', 'sm')];

      const result = generateBasicUsageSection('component', examples, mockMetadata);

      expect(result).toContain('Simple</CardTitle>');
      expect(result).toContain('ComponentSimpleIframeRef');
    });

    it('should handle special characters in title', () => {
      const examples: LoadedExample[] = [createExample('special', 'Test (Special)', 'usage', 'sm')];

      const result = generateBasicUsageSection('component', examples, mockMetadata);

      expect(result).toContain('Test (Special)</CardTitle>');
      expect(result).toContain('ComponentTest(Special)IframeRef');
      expect(result).toContain('src="/examples/component/special"');
    });
  });

  describe('error handling', () => {
    it('should throw error when iframeSize is missing', () => {
      const examples: LoadedExample[] = [
        createExample('incomplete', 'Incomplete Example', 'usage', undefined),
      ];

      expect(() => {
        generateBasicUsageSection('component', examples, mockMetadata);
      }).toThrow(
        "Example component/incomplete must export a SIZE constant (e.g., export const SIZE = 'sm';)"
      );
    });

    it('should throw error for first example with missing iframeSize', () => {
      const examples: LoadedExample[] = [
        createExample('good1', 'Good Example 1', 'usage', 'sm'),
        createExample('bad', 'Bad Example', 'usage', undefined),
        createExample('good2', 'Good Example 2', 'usage', 'sm'),
      ];

      expect(() => {
        generateBasicUsageSection('component', examples, mockMetadata);
      }).toThrow(
        "Example component/bad must export a SIZE constant (e.g., export const SIZE = 'sm';)"
      );
    });
  });

  describe('metadata parameter', () => {
    it('should ignore metadata parameter (uses underscore prefix)', () => {
      const examples: LoadedExample[] = [createExample('test', 'Test', 'usage', 'sm')];

      const emptyMetadata: ComponentMetadata = {
        name: '',
        props: [],
        variants: [],
        sizes: [],
        exports: [],
        propsExpanded: false,
        hasSizeProp: false,
      } as any;
      const result = generateBasicUsageSection('button', examples, emptyMetadata);

      expect(result).toContain('Test</CardTitle>');
    });

    it('should work with various metadata configurations', () => {
      const examples: LoadedExample[] = [createExample('example', 'Example', 'usage', 'sm')];

      const metadataWithProps: ComponentMetadata = {
        name: 'TestComponent',
        props: [{ name: 'prop1', type: 'string', isRequired: true }],
        variants: [],
        sizes: [],
        exports: [],
        propsExpanded: true,
        hasSizeProp: false,
      } as any;

      const result = generateBasicUsageSection('button', examples, metadataWithProps);

      expect(result).toContain('Example</CardTitle>');
    });
  });

  describe('structure and formatting', () => {
    it('should maintain proper indentation in output', () => {
      const examples: LoadedExample[] = [createExample('test', 'Test Example', 'usage', 'sm')];

      const result = generateBasicUsageSection('button', examples, mockMetadata);

      // Check for proper indentation
      expect(result).toContain('      <PageSection title="Usage">');
      expect(result).toContain('         <Typography variant="body1">');
      expect(result).toContain(
        '           The simplest form of the component with default styling.'
      );
      expect(result).toContain('          <Card className="mt-(--lsd-spacing-base)">');
      expect(result).toContain('              <CardHeader>');
      expect(result).toContain('                <CardTitle>Test Example</CardTitle>');
      expect(result).toContain('              </CardHeader>');
      expect(result).toContain('              <CardContent>');
      expect(result).toContain('                <IframeExample');
      expect(result).toContain('                <CodeExample code={ButtonTestExampleCODE} />');
      expect(result).toContain('              </CardContent>');
      expect(result).toContain('            </Card>');
      expect(result).toContain('        </PageSection>');
    });

    it('should include required component names in generated code', () => {
      const examples: LoadedExample[] = [createExample('basic', 'Basic', 'usage', 'sm')];

      const result = generateBasicUsageSection('input', examples, mockMetadata);

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

  describe('mixed example scenarios', () => {
    it('should filter usage examples from mixed categories', () => {
      const examples: LoadedExample[] = [
        createExample('variant1', 'Variant 1', 'variant', 'sm'),
        createExample('usage1', 'Usage 1', 'usage', 'sm'),
        createExample('feature1', 'Feature 1', 'feature', 'sm'),
        createExample('usage2', 'Usage 2', 'usage', 'sm'),
        createExample('size1', 'Size 1', 'size', 'sm'),
      ];

      const result = generateBasicUsageSection('component', examples, mockMetadata);

      expect(result).toContain('Usage 1</CardTitle>');
      expect(result).toContain('Usage 2</CardTitle>');
      expect(result).not.toContain('Variant 1');
      expect(result).not.toContain('Feature 1');
      expect(result).not.toContain('Size 1');
      expect(result).toContain('ComponentUsage1IframeRef');
      expect(result).toContain('ComponentUsage2IframeRef');
    });
  });

  describe('example name handling', () => {
    it('should use example name in src path', () => {
      const examples: LoadedExample[] = [
        createExample('my-custom-example', 'My Custom Example', 'usage', 'sm'),
      ];

      const result = generateBasicUsageSection('component', examples, mockMetadata);

      expect(result).toContain('src="/examples/component/my-custom-example"');
    });

    it('should handle example name with underscores', () => {
      const examples: LoadedExample[] = [
        createExample('my_custom_example', 'My Custom Example', 'usage', 'sm'),
      ];

      const result = generateBasicUsageSection('component', examples, mockMetadata);

      expect(result).toContain('src="/examples/component/my_custom_example"');
      expect(result).toContain('ComponentMyCustomExampleIframeRef');
    });
  });

  describe('different iframe sizes', () => {
    it('should handle all three iframe sizes in different examples', () => {
      const examples: LoadedExample[] = [
        createExample('small', 'Small', 'usage', 'sm'),
        createExample('medium', 'Medium', 'usage', 'md'),
        createExample('large', 'Large', 'usage', 'lg'),
      ];

      const result = generateBasicUsageSection('component', examples, mockMetadata);

      expect(result).toContain('ComponentSmallSIZE');
      expect(result).toContain('ComponentMediumSIZE');
      expect(result).toContain('ComponentLargeSIZE');
    });
  });

  describe('component name edge cases', () => {
    it('should handle mixed case component name', () => {
      const examples: LoadedExample[] = [createExample('basic', 'Basic', 'usage', 'sm')];

      const result = generateBasicUsageSection('MyButton', examples, mockMetadata);

      expect(result).toContain('MyButtonBasicIframeRef');
      expect(result).toContain('src="/examples/MyButton/basic"');
    });

    it('should handle component name starting with number', () => {
      const examples: LoadedExample[] = [createExample('test', 'Test', 'usage', 'sm')];

      const result = generateBasicUsageSection('1component', examples, mockMetadata);

      expect(result).toContain('1componentTestIframeRef');
    });
  });

  describe('section title consistency', () => {
    it('should always use "Usage" as section title', () => {
      const examples: LoadedExample[] = [createExample('example', 'Example', 'usage', 'sm')];

      const result = generateBasicUsageSection('component', examples, mockMetadata);

      expect(result).toContain('PageSection title="Usage"');
    });

    it('should have consistent section description', () => {
      const examples: LoadedExample[] = [createExample('example', 'Example', 'usage', 'sm')];

      const result = generateBasicUsageSection('button', examples, mockMetadata);

      expect(result).toContain('The simplest form of the component with default styling.');
    });
  });

  describe('large number of usage examples', () => {
    it('should handle many usage examples', () => {
      const examples: LoadedExample[] = [
        createExample('usage1', 'Usage 1', 'usage', 'sm'),
        createExample('usage2', 'Usage 2', 'usage', 'sm'),
        createExample('usage3', 'Usage 3', 'usage', 'sm'),
        createExample('usage4', 'Usage 4', 'usage', 'sm'),
        createExample('usage5', 'Usage 5', 'usage', 'sm'),
      ];

      const result = generateBasicUsageSection('component', examples, mockMetadata);

      for (let i = 1; i <= 5; i++) {
        expect(result).toContain(`Usage ${i}</CardTitle>`);
        expect(result).toContain(`ComponentUsage${i}IframeRef`);
      }
    });
  });

  describe('combined scenarios', () => {
    it('should handle realistic component with multiple usage examples', () => {
      const examples: LoadedExample[] = [
        createExample('default', 'Default', 'usage', 'sm'),
        createExample('controlled', 'Controlled', 'usage', 'md'),
        createExample('uncontrolled', 'Uncontrolled', 'usage', 'sm'),
        createExample('with-placeholder', 'With Placeholder', 'usage', 'sm'),
      ];

      const result = generateBasicUsageSection('text-field', examples, mockMetadata);

      expect(result).toContain('PageSection title="Usage"');
      expect(result).toContain('Default</CardTitle>');
      expect(result).toContain('Controlled</CardTitle>');
      expect(result).toContain('Uncontrolled</CardTitle>');
      expect(result).toContain('With Placeholder</CardTitle>');
      expect(result).toContain('TextFieldDefaultIframeRef');
      expect(result).toContain('TextFieldControlledIframeRef');
      expect(result).toContain('TextFieldUncontrolledIframeRef');
      expect(result).toContain('TextFieldWithPlaceholderIframeRef');
      expect(result).toContain('src="/examples/text-field/default"');
      expect(result).toContain('src="/examples/text-field/controlled"');
      expect(result).toContain('src="/examples/text-field/uncontrolled"');
      expect(result).toContain('src="/examples/text-field/with-placeholder"');
    });
  });
});

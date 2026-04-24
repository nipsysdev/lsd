/**
 * Tests for features.ts
 */

import { describe, expect, it } from 'vitest';
import type { ComponentMetadata } from '../../parsers/metadata-extractor';
import type { TSDocMetadata } from '../../parsers/tsdoc-parser';
import type { LoadedExample } from '../../scanners/example-loader';
import { generateFeaturesSection } from '../features';

describe('generateFeaturesSection', () => {
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

  const createEmptyTSDocMetadata = (): TSDocMetadata => ({
    description: '',
    customTags: {},
  });

  describe('when no feature examples exist', () => {
    it('should return empty string when all examples are excluded categories', () => {
      const examples: LoadedExample[] = [
        createExample('variant1', 'Variant 1', 'variant', 'sm'),
        createExample('size1', 'Size 1', 'size', 'sm'),
        createExample('usage1', 'Usage 1', 'usage', 'sm'),
        createExample('primary1', 'Primary 1', 'primary', 'sm'),
        createExample('rounded1', 'Rounded 1', 'rounded', 'sm'),
        createExample('ghost1', 'Ghost 1', 'ghost', 'sm'),
        createExample('semantic1', 'Semantic 1', 'semantic', 'sm'),
      ];

      const tsdocMetadata = createEmptyTSDocMetadata();
      const result = generateFeaturesSection('component', examples, mockMetadata, tsdocMetadata);

      expect(result).toBe('');
    });

    it('should return empty string when examples array is empty', () => {
      const examples: LoadedExample[] = [];
      const tsdocMetadata = createEmptyTSDocMetadata();

      const result = generateFeaturesSection('component', examples, mockMetadata, tsdocMetadata);

      expect(result).toBe('');
    });

    it('should filter out only excluded categories', () => {
      const examples: LoadedExample[] = [
        createExample('variant1', 'Variant 1', 'variant', 'sm'),
        createExample('feature1', 'Feature 1', 'feature', 'sm'),
        createExample('size1', 'Size 1', 'size', 'sm'),
        createExample('feature2', 'Feature 2', 'feature', 'sm'),
      ];

      const tsdocMetadata = createEmptyTSDocMetadata();
      const result = generateFeaturesSection('component', examples, mockMetadata, tsdocMetadata);

      // Should include features but not variants or sizes
      expect(result).toContain('Feature 1</CardTitle>');
      expect(result).toContain('Feature 2</CardTitle>');
      expect(result).not.toContain('Variant 1');
      expect(result).not.toContain('Size 1');
    });
  });

  describe('with single feature example', () => {
    it('should generate Features section with single example', () => {
      const examples: LoadedExample[] = [
        createExample('controlled', 'Controlled', 'feature', 'sm'),
      ];

      const tsdocMetadata = createEmptyTSDocMetadata();
      const result = generateFeaturesSection('input', examples, mockMetadata, tsdocMetadata);

      expect(result).toContain('PageSection title="Features"');
      expect(result).toContain('Additional features and capabilities of the component.');
      expect(result).toContain('Card className="mt-(--lsd-spacing-base)"');
      expect(result).toContain('CardTitle>Controlled</CardTitle>');
      expect(result).toContain('IframeExample');
      expect(result).toContain('ref={InputControlledIframeRef}');
      expect(result).toContain('size={InputControlledSIZE}');
      expect(result).toContain('src="/examples/input/controlled"');
      expect(result).toContain('title="Controlled Example"');
      expect(result).toContain('CodeExample code={InputControlledCODE} />');
    });

    it('should handle state category', () => {
      const examples: LoadedExample[] = [
        createExample('error-state', 'Error State', 'state', 'md'),
      ];

      const tsdocMetadata = createEmptyTSDocMetadata();
      const result = generateFeaturesSection('field', examples, mockMetadata, tsdocMetadata);

      expect(result).toContain('Error State</CardTitle>');
      expect(result).toContain('FieldErrorStateIframeRef');
      expect(result).toContain('FieldErrorStateSIZE');
    });

    it('should handle layout category', () => {
      const examples: LoadedExample[] = [
        createExample('horizontal', 'Horizontal Layout', 'layout', 'sm'),
      ];

      const tsdocMetadata = createEmptyTSDocMetadata();
      const result = generateFeaturesSection('form', examples, mockMetadata, tsdocMetadata);

      expect(result).toContain('Horizontal Layout</CardTitle>');
      expect(result).toContain('src="/examples/form/horizontal"');
    });

    it('should handle behavior category', () => {
      const examples: LoadedExample[] = [
        createExample('auto-close', 'Auto Close', 'behavior', 'lg'),
      ];

      const tsdocMetadata = createEmptyTSDocMetadata();
      const result = generateFeaturesSection('alert', examples, mockMetadata, tsdocMetadata);

      expect(result).toContain('Auto Close</CardTitle>');
      expect(result).toContain('AlertAutoCloseSIZE');
    });
  });

  describe('PascalCase conversion', () => {
    it('should convert kebab-case component name to PascalCase', () => {
      const examples: LoadedExample[] = [createExample('feature', 'Feature', 'feature', 'sm')];

      const tsdocMetadata = createEmptyTSDocMetadata();
      const result = generateFeaturesSection('my-component', examples, mockMetadata, tsdocMetadata);

      expect(result).toContain('MyComponentFeatureIframeRef');
      expect(result).toContain('MyComponentFeatureSIZE');
      expect(result).toContain('MyComponentFeatureCODE');
    });

    it('should handle component name with multiple hyphens', () => {
      const examples: LoadedExample[] = [createExample('test', 'Test', 'feature', 'sm')];

      const tsdocMetadata = createEmptyTSDocMetadata();
      const result = generateFeaturesSection(
        'my-test-component',
        examples,
        mockMetadata,
        tsdocMetadata
      );

      expect(result).toContain('MyTestComponentTestIframeRef');
      expect(result).toContain('src="/examples/my-test-component/test"');
    });

    it('should handle component name with underscores', () => {
      const examples: LoadedExample[] = [createExample('example', 'Example', 'feature', 'sm')];

      const tsdocMetadata = createEmptyTSDocMetadata();
      const result = generateFeaturesSection(
        'my_test_component',
        examples,
        mockMetadata,
        tsdocMetadata
      );

      expect(result).toContain('MyTestComponentExampleIframeRef');
    });

    it('should handle single word component name', () => {
      const examples: LoadedExample[] = [createExample('custom', 'Custom', 'feature', 'sm')];

      const tsdocMetadata = createEmptyTSDocMetadata();
      const result = generateFeaturesSection('button', examples, mockMetadata, tsdocMetadata);

      expect(result).toContain('ButtonCustomIframeRef');
    });
  });

  describe('example title handling', () => {
    it('should handle title with spaces', () => {
      const examples: LoadedExample[] = [
        createExample('disabled-state', 'Disabled State', 'feature', 'sm'),
      ];

      const tsdocMetadata = createEmptyTSDocMetadata();
      const result = generateFeaturesSection('component', examples, mockMetadata, tsdocMetadata);

      expect(result).toContain('Disabled State</CardTitle>');
      expect(result).toContain('ComponentDisabledStateIframeRef');
      expect(result).toContain('ComponentDisabledStateSIZE');
      expect(result).toContain('src="/examples/component/disabled-state"');
    });

    it('should handle title with multiple words', () => {
      const examples: LoadedExample[] = [
        createExample('with-icon', 'With Icon And Text', 'feature', 'sm'),
      ];

      const tsdocMetadata = createEmptyTSDocMetadata();
      const result = generateFeaturesSection('button', examples, mockMetadata, tsdocMetadata);

      expect(result).toContain('With Icon And Text</CardTitle>');
      expect(result).toContain('ButtonWithIconAndTextIframeRef');
    });

    it('should handle single word title', () => {
      const examples: LoadedExample[] = [createExample('custom', 'Custom', 'feature', 'sm')];

      const tsdocMetadata = createEmptyTSDocMetadata();
      const result = generateFeaturesSection('component', examples, mockMetadata, tsdocMetadata);

      expect(result).toContain('Custom</CardTitle>');
      expect(result).toContain('ComponentCustomIframeRef');
    });

    it('should handle special characters in title', () => {
      const examples: LoadedExample[] = [
        createExample('special', 'Test (Special)', 'feature', 'sm'),
      ];

      const tsdocMetadata = createEmptyTSDocMetadata();
      const result = generateFeaturesSection('component', examples, mockMetadata, tsdocMetadata);

      expect(result).toContain('Test (Special)</CardTitle>');
      expect(result).toContain('ComponentTest(Special)IframeRef');
      expect(result).toContain('src="/examples/component/special"');
    });
  });

  describe('error handling', () => {
    it('should throw error when iframeSize is missing', () => {
      const examples: LoadedExample[] = [
        createExample('incomplete', 'Incomplete Feature', 'feature', undefined),
      ];

      const tsdocMetadata = createEmptyTSDocMetadata();

      expect(() => {
        generateFeaturesSection('component', examples, mockMetadata, tsdocMetadata);
      }).toThrow(
        "Example component/incomplete must export a SIZE constant (e.g., export const SIZE = 'sm';)"
      );
    });

    it('should throw error for first example with missing iframeSize', () => {
      const examples: LoadedExample[] = [
        createExample('good1', 'Good Feature 1', 'feature', 'sm'),
        createExample('bad', 'Bad Feature', 'feature', undefined),
        createExample('good2', 'Good Feature 2', 'feature', 'sm'),
      ];

      const tsdocMetadata = createEmptyTSDocMetadata();

      expect(() => {
        generateFeaturesSection('component', examples, mockMetadata, tsdocMetadata);
      }).toThrow(
        "Example component/bad must export a SIZE constant (e.g., export const SIZE = 'sm';)"
      );
    });
  });

  describe('TSDoc metadata integration', () => {
    it('should include TSDoc feature description when present', () => {
      const examples: LoadedExample[] = [
        createExample('controlled', 'Controlled', 'feature', 'sm'),
      ];

      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionFeaturesControlled:
            'This feature demonstrates controlled component behavior with external state management.',
        },
      };

      const result = generateFeaturesSection('input', examples, mockMetadata, tsdocMetadata);

      expect(result).toContain(
        'This feature demonstrates controlled component behavior with external state management.'
      );
      expect(result).toContain('Typography variant="body2"');
      expect(result).toContain('className="mt-(--lsd-spacing-smaller) whitespace-pre-line"');
    });

    it('should handle multi-line TSDoc description', () => {
      const examples: LoadedExample[] = [createExample('custom', 'Custom', 'feature', 'sm')];

      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionFeaturesCustom: 'Line 1\nLine 2\nLine 3',
        },
      };

      const result = generateFeaturesSection('button', examples, mockMetadata, tsdocMetadata);

      expect(result).toContain('Line 1');
      expect(result).toContain('Line 2');
      expect(result).toContain('Line 3');
      expect(result).toContain('whitespace-pre-line');
    });

    it('should work with empty TSDoc metadata', () => {
      const examples: LoadedExample[] = [createExample('feature1', 'Feature 1', 'feature', 'sm')];

      const tsdocMetadata = createEmptyTSDocMetadata();
      const result = generateFeaturesSection('component', examples, mockMetadata, tsdocMetadata);

      expect(result).toContain('Feature 1</CardTitle>');
      // Should not have extra Typography element
      expect(result).not.toContain('Typography variant="body2"');
    });

    it('should work with TSDoc metadata missing feature tag', () => {
      const examples: LoadedExample[] = [createExample('feature1', 'Feature 1', 'feature', 'sm')];

      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionFeaturesOther: 'Other feature description',
        },
      };

      const result = generateFeaturesSection('component', examples, mockMetadata, tsdocMetadata);

      expect(result).toContain('Feature 1</CardTitle>');
      // Should not have description for Feature 1
      expect(result).not.toContain('Other feature description');
    });

    it('should handle TSDoc tag naming conventions', () => {
      const examples: LoadedExample[] = [
        createExample('my-feature', 'My Feature', 'feature', 'sm'),
      ];

      // The tag should be docSectionFeaturesMyFeature (kebab to camel)
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionFeaturesMyFeature: 'Description for my feature',
        },
      };

      const result = generateFeaturesSection('component', examples, mockMetadata, tsdocMetadata);

      expect(result).toContain('Description for my feature');
    });

    it('should work with multiple TSDoc feature tags', () => {
      const examples: LoadedExample[] = [
        createExample('feature1', 'Feature 1', 'feature', 'sm'),
        createExample('feature2', 'Feature 2', 'feature', 'sm'),
      ];

      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionFeaturesFeature1: 'Description for feature 1',
          docSectionFeaturesFeature2: 'Description for feature 2',
        },
      };

      const result = generateFeaturesSection('component', examples, mockMetadata, tsdocMetadata);

      expect(result).toContain('Description for feature 1');
      expect(result).toContain('Description for feature 2');
    });
  });

  describe('metadata parameter', () => {
    it('should ignore metadata parameter (uses underscore prefix)', () => {
      const examples: LoadedExample[] = [createExample('test', 'Test', 'feature', 'sm')];

      const emptyMetadata: ComponentMetadata = {
        name: '',
        props: [],
        variants: [],
        sizes: [],
        exports: [],
        propsExpanded: false,
        hasSizeProp: false,
      } as any;

      const tsdocMetadata = createEmptyTSDocMetadata();
      const result = generateFeaturesSection('button', examples, emptyMetadata, tsdocMetadata);

      expect(result).toContain('Test</CardTitle>');
    });
  });

  describe('structure and formatting', () => {
    it('should maintain proper indentation in output', () => {
      const examples: LoadedExample[] = [createExample('test', 'Test Feature', 'feature', 'sm')];

      const tsdocMetadata = createEmptyTSDocMetadata();
      const result = generateFeaturesSection('button', examples, mockMetadata, tsdocMetadata);

      // Check for proper indentation
      expect(result).toContain('      <PageSection title="Features">');
      expect(result).toContain('        <Typography variant="body1">');
      expect(result).toContain('          Additional features and capabilities of the component.');
      expect(result).toContain('          <Card className="mt-(--lsd-spacing-base)">');
      expect(result).toContain('            <CardHeader>');
      expect(result).toContain('              <CardTitle>Test Feature</CardTitle>');
      expect(result).toContain('            </CardHeader>');
      expect(result).toContain('           <CardContent>');
      expect(result).toContain('              <IframeExample');
      expect(result).toContain('              <CodeExample code={ButtonTestFeatureCODE} />');
      expect(result).toContain('            </CardContent>');
      expect(result).toContain('          </Card>');
      expect(result).toContain('        </PageSection>');
    });

    it('should include required component names in generated code', () => {
      const examples: LoadedExample[] = [createExample('custom', 'Custom', 'feature', 'sm')];

      const tsdocMetadata = createEmptyTSDocMetadata();
      const result = generateFeaturesSection('input', examples, mockMetadata, tsdocMetadata);

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
    it('should filter features from mixed categories', () => {
      const examples: LoadedExample[] = [
        createExample('variant1', 'Variant 1', 'variant', 'sm'),
        createExample('feature1', 'Feature 1', 'feature', 'sm'),
        createExample('size1', 'Size 1', 'size', 'sm'),
        createExample('feature2', 'Feature 2', 'feature', 'sm'),
        createExample('usage1', 'Usage 1', 'usage', 'sm'),
        createExample('state1', 'State 1', 'state', 'sm'),
      ];

      const tsdocMetadata = createEmptyTSDocMetadata();
      const result = generateFeaturesSection('component', examples, mockMetadata, tsdocMetadata);

      expect(result).toContain('Feature 1</CardTitle>');
      expect(result).toContain('Feature 2</CardTitle>');
      expect(result).toContain('State 1</CardTitle>');
      expect(result).not.toContain('Variant 1');
      expect(result).not.toContain('Size 1');
      expect(result).not.toContain('Usage 1');
    });
  });

  describe('example name handling', () => {
    it('should use example name in src path', () => {
      const examples: LoadedExample[] = [
        createExample('my-custom-feature', 'My Custom Feature', 'feature', 'sm'),
      ];

      const tsdocMetadata = createEmptyTSDocMetadata();
      const result = generateFeaturesSection('component', examples, mockMetadata, tsdocMetadata);

      expect(result).toContain('src="/examples/component/my-custom-feature"');
    });

    it('should handle example name with underscores', () => {
      const examples: LoadedExample[] = [
        createExample('my_custom_feature', 'My Custom Feature', 'feature', 'sm'),
      ];

      const tsdocMetadata = createEmptyTSDocMetadata();
      const result = generateFeaturesSection('component', examples, mockMetadata, tsdocMetadata);

      expect(result).toContain('src="/examples/component/my_custom_feature"');
    });
  });

  describe('different iframe sizes', () => {
    it('should handle all three iframe sizes in different examples', () => {
      const examples: LoadedExample[] = [
        createExample('small', 'Small', 'feature', 'sm'),
        createExample('medium', 'Medium', 'feature', 'md'),
        createExample('large', 'Large', 'feature', 'lg'),
      ];

      const tsdocMetadata = createEmptyTSDocMetadata();
      const result = generateFeaturesSection('component', examples, mockMetadata, tsdocMetadata);

      expect(result).toContain('ComponentSmallSIZE');
      expect(result).toContain('ComponentMediumSIZE');
      expect(result).toContain('ComponentLargeSIZE');
    });
  });

  describe('all excluded categories', () => {
    it('should exclude all 7 excluded categories', () => {
      const examples: LoadedExample[] = [
        createExample('v', 'Variant', 'variant', 'sm'),
        createExample('s', 'Size', 'size', 'sm'),
        createExample('u', 'Usage', 'usage', 'sm'),
        createExample('p', 'Primary', 'primary', 'sm'),
        createExample('r', 'Rounded', 'rounded', 'sm'),
        createExample('g', 'Ghost', 'ghost', 'sm'),
        createExample('sem', 'Semantic', 'semantic', 'sm'),
        createExample('f', 'Feature', 'feature', 'sm'),
      ];

      const tsdocMetadata = createEmptyTSDocMetadata();
      const result = generateFeaturesSection('component', examples, mockMetadata, tsdocMetadata);

      expect(result).toContain('Feature</CardTitle>');
      expect(result).not.toContain('Variant');
      expect(result).not.toContain('Size');
      expect(result).not.toContain('Usage');
      expect(result).not.toContain('Primary');
      expect(result).not.toContain('Rounded');
      expect(result).not.toContain('Ghost');
      expect(result).not.toContain('Semantic');
    });
  });

  describe('section title consistency', () => {
    it('should always use "Features" as section title', () => {
      const examples: LoadedExample[] = [createExample('example', 'Example', 'feature', 'sm')];

      const tsdocMetadata = createEmptyTSDocMetadata();
      const result = generateFeaturesSection('component', examples, mockMetadata, tsdocMetadata);

      expect(result).toContain('PageSection title="Features"');
    });

    it('should have consistent section description', () => {
      const examples: LoadedExample[] = [createExample('example', 'Example', 'feature', 'sm')];

      const tsdocMetadata = createEmptyTSDocMetadata();
      const result = generateFeaturesSection('button', examples, mockMetadata, tsdocMetadata);

      expect(result).toContain('Additional features and capabilities of the component.');
    });
  });

  describe('large number of feature examples', () => {
    it('should handle many feature examples', () => {
      const examples: LoadedExample[] = [
        createExample('feature1', 'Feature 1', 'feature', 'sm'),
        createExample('feature2', 'Feature 2', 'feature', 'sm'),
        createExample('feature3', 'Feature 3', 'feature', 'sm'),
        createExample('feature4', 'Feature 4', 'feature', 'sm'),
        createExample('feature5', 'Feature 5', 'feature', 'sm'),
      ];

      const tsdocMetadata = createEmptyTSDocMetadata();
      const result = generateFeaturesSection('component', examples, mockMetadata, tsdocMetadata);

      for (let i = 1; i <= 5; i++) {
        expect(result).toContain(`Feature ${i}</CardTitle>`);
        expect(result).toContain(`ComponentFeature${i}IframeRef`);
      }
    });
  });

  describe('realistic scenarios', () => {
    it('should handle realistic component with multiple features', () => {
      const examples: LoadedExample[] = [
        createExample('controlled', 'Controlled', 'feature', 'sm'),
        createExample('disabled', 'Disabled', 'feature', 'sm'),
        createExample('with-error', 'With Error', 'state', 'sm'),
        createExample('loading-state', 'Loading State', 'state', 'md'),
        createExample('custom-styling', 'Custom Styling', 'feature', 'sm'),
      ];

      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionFeaturesControlled: 'Controlled component with external state',
          docSectionFeaturesDisabled: 'Disabled component state',
          docSectionFeaturesWithError: 'Error state with validation message',
          docSectionFeaturesLoadingState: 'Loading state with spinner',
          docSectionFeaturesCustomStyling: 'Custom styling with className prop',
        },
      };

      const result = generateFeaturesSection('text-field', examples, mockMetadata, tsdocMetadata);

      expect(result).toContain('Controlled</CardTitle>');
      expect(result).toContain('Disabled</CardTitle>');
      expect(result).toContain('With Error</CardTitle>');
      expect(result).toContain('Loading State</CardTitle>');
      expect(result).toContain('Custom Styling</CardTitle>');
      expect(result).toContain('Controlled component with external state');
      expect(result).toContain('Disabled component state');
      expect(result).toContain('Error state with validation message');
      expect(result).toContain('Loading state with spinner');
      expect(result).toContain('Custom styling with className prop');
    });
  });
});

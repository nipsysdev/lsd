/**
 * Tests for api-reference.ts
 */

import { describe, expect, it } from 'vitest';
import type { PropMetadata } from '../../parsers/metadata-extractor';
import { generateAPIReferenceSection } from '../api-reference';

describe('generateAPIReferenceSection', () => {
  describe('when props are available', () => {
    it('should generate API Reference section with single prop', () => {
      const props: PropMetadata[] = [
        {
          name: 'label',
          type: 'string',
          description: 'Label for the component',
          isRequired: false,
          defaultValue: '',
        },
      ];

      const result = generateAPIReferenceSection(props, 'button', false);

      expect(result).toContain('<PageSection title="API Reference">');
      expect(result).toContain('<CardTitle>label</CardTitle>');
      expect(result).toContain('<CardDescription>Label for the component</CardDescription>');
      expect(result).toContain('<code>string</code>');
      expect(result).toContain('<strong>Optional</strong>');
      expect(result).toContain('grid grid-cols-1 md:grid-cols-2');
    });

    it('should generate API Reference section with multiple props', () => {
      const props: PropMetadata[] = [
        {
          name: 'label',
          type: 'string',
          description: 'Label text',
          isRequired: false,
          defaultValue: '',
        },
        {
          name: 'variant',
          type: "'primary' | 'secondary'",
          description: 'Visual variant',
          isRequired: false,
          defaultValue: 'primary',
          options: ['primary', 'secondary'],
        },
      ];

      const result = generateAPIReferenceSection(props, 'button', false);

      expect(result).toContain('<CardTitle>label</CardTitle>');
      expect(result).toContain('<CardTitle>variant</CardTitle>');
      expect(result).toContain("{' '}<code>string</code>");
      expect(result).toContain("{' '}<code>'primary' | 'secondary'</code>");
      expect(result).toContain('<strong>Options:</strong> primary, secondary');
      expect(result).toContain('<strong>Default:</strong> primary');
    });

    it('should group props by component name', () => {
      const props: PropMetadata[] = [
        {
          name: 'label',
          type: 'string',
          description: 'Label',
          isRequired: false,
          defaultValue: '',
          componentName: 'Button',
        },
        {
          name: 'icon',
          type: 'ReactNode',
          description: 'Icon element',
          isRequired: false,
          defaultValue: '',
          componentName: 'ButtonIcon',
        },
      ];

      const result = generateAPIReferenceSection(props, 'button', false);

      expect(result).toContain('<Typography variant="h4"');
      expect(result).toContain('>Button</Typography>');
      expect(result).toContain('>ButtonIcon</Typography>');
    });

    it('should handle props without componentName (default to main component)', () => {
      const props: PropMetadata[] = [
        {
          name: 'label',
          type: 'string',
          description: 'Label',
          isRequired: false,
          defaultValue: '',
        },
        {
          name: 'icon',
          type: 'ReactNode',
          description: 'Icon',
          isRequired: false,
          defaultValue: '',
          componentName: 'ButtonIcon',
        },
      ];

      const result = generateAPIReferenceSection(props, 'button', false);

      expect(result).toContain('>Button</Typography>');
      expect(result).toContain('>ButtonIcon</Typography>');
      expect(result).toContain('<CardTitle>label</CardTitle>');
      expect(result).toContain('<CardTitle>icon</CardTitle>');
    });

    it('should include required badge for required props', () => {
      const props: PropMetadata[] = [
        {
          name: 'value',
          type: 'string',
          description: 'Required value',
          isRequired: true,
          defaultValue: '',
        },
      ];

      const result = generateAPIReferenceSection(props, 'input', false);

      expect(result).toContain('<CardTitle>value</CardTitle>');
      expect(result).not.toContain('Optional');
    });

    it('should handle props with options', () => {
      const props: PropMetadata[] = [
        {
          name: 'size',
          type: "'sm' | 'md' | 'lg'",
          description: 'Size variant',
          isRequired: false,
          defaultValue: 'md',
          options: ['sm', 'md', 'lg'],
        },
      ];

      const result = generateAPIReferenceSection(props, 'button', false);

      expect(result).toContain('<strong>Options:</strong> sm, md, lg');
    });

    it('should handle props without description', () => {
      const props: PropMetadata[] = [
        {
          name: 'id',
          type: 'string',
          description: '',
          isRequired: false,
          defaultValue: '',
        },
      ];

      const result = generateAPIReferenceSection(props, 'input', false);

      expect(result).toContain('<CardTitle>id</CardTitle>');
      expect(result).toContain('<CardDescription></CardDescription>');
    });

    it('should handle props with complex types', () => {
      const props: PropMetadata[] = [
        {
          name: 'children',
          type: 'ReactNode',
          description: 'Child elements',
          isRequired: false,
          defaultValue: '',
        },
      ];

      const result = generateAPIReferenceSection(props, 'card', false);

      expect(result).toContain('<code>ReactNode</code>');
    });

    it('should handle props with union types', () => {
      const props: PropMetadata[] = [
        {
          name: 'size',
          type: 'sm | md | lg',
          description: 'Size',
          isRequired: false,
          defaultValue: 'md',
        },
      ];

      const result = generateAPIReferenceSection(props, 'button', false);

      expect(result).toContain('<code>sm | md | lg</code>');
    });

    it('should HTML-encode special characters in prop types', () => {
      const props: PropMetadata[] = [
        {
          name: 'render',
          type: '(props: T) => ReactNode',
          description: 'Render function',
          isRequired: false,
          defaultValue: '',
        },
      ];

      const result = generateAPIReferenceSection(props, 'card', false);

      // Check that HTML entity encoding is happening
      expect(result).toContain('<');
      expect(result).toContain('>');
    });

    it('should HTML-encode angle brackets in types', () => {
      const props: PropMetadata[] = [
        {
          name: 'items',
          type: 'Array<string>',
          description: 'Items array',
          isRequired: false,
          defaultValue: '',
        },
      ];

      const result = generateAPIReferenceSection(props, 'list', false);

      // Check that HTML entity encoding is happening
      expect(result).toContain('Array');
      expect(result).toContain('&lt;string&gt;');
    });

    it('should HTML-encode curly braces in types', () => {
      const props: PropMetadata[] = [
        {
          name: 'data',
          type: '{ [key: string]: any }',
          description: 'Data object',
          isRequired: false,
          defaultValue: '',
        },
      ];

      const result = generateAPIReferenceSection(props, 'component', false);

      expect(result).toContain('&#123; [key: string]: any &#125;');
    });

    it('should handle ampersands in types', () => {
      const props: PropMetadata[] = [
        {
          name: 'color',
          type: 'string & { type: "hex" }',
          description: 'Color type',
          isRequired: false,
          defaultValue: '',
        },
      ];

      const result = generateAPIReferenceSection(props, 'component', false);

      expect(result).toContain('&');
    });

    it('should use LSD spacing variables in output', () => {
      const props: PropMetadata[] = [
        {
          name: 'label',
          type: 'string',
          description: 'Label',
          isRequired: false,
          defaultValue: '',
        },
      ];

      const result = generateAPIReferenceSection(props, 'button', false);

      expect(result).toContain('mt-(--lsd-spacing-large)"');
      expect(result).toContain('mb-(--lsd-spacing-base)"');
      expect(result).toContain('gap-(--lsd-spacing-base)"');
      expect(result).toContain('mb-(--lsd-spacing-smaller)"');
    });

    it('should handle hyphenated component names in grouping', () => {
      const props: PropMetadata[] = [
        {
          name: 'label',
          type: 'string',
          description: 'Label',
          isRequired: false,
          defaultValue: '',
          componentName: 'dropdown-menu',
        },
      ];

      const result = generateAPIReferenceSection(props, 'dropdown-menu', false);

      expect(result).toContain('>DropdownMenu</Typography>');
    });

    it('should handle underscore component names in grouping', () => {
      const props: PropMetadata[] = [
        {
          name: 'label',
          type: 'string',
          description: 'Label',
          isRequired: false,
          defaultValue: '',
          componentName: 'avatar_group',
        },
      ];

      const result = generateAPIReferenceSection(props, 'avatar-group', false);

      expect(result).toContain('>AvatarGroup</Typography>');
    });

    it('should handle props with default value', () => {
      const props: PropMetadata[] = [
        {
          name: 'variant',
          type: "'primary' | 'secondary'",
          description: 'Variant',
          isRequired: false,
          defaultValue: 'primary',
        },
      ];

      const result = generateAPIReferenceSection(props, 'button', false);

      expect(result).toContain('<strong>Default:</strong> primary');
    });

    it('should handle props without default value', () => {
      const props: PropMetadata[] = [
        {
          name: 'children',
          type: 'ReactNode',
          description: 'Children',
          isRequired: false,
          defaultValue: '',
        },
      ];

      const result = generateAPIReferenceSection(props, 'card', false);

      expect(result).not.toContain('<strong>Default:</strong>');
    });

    it('should include all required component names', () => {
      const props: PropMetadata[] = [
        {
          name: 'label',
          type: 'string',
          description: 'Label',
          isRequired: false,
          defaultValue: '',
        },
      ];

      const result = generateAPIReferenceSection(props, 'button', false);

      expect(result).toContain('PageSection');
      expect(result).toContain('Typography');
      expect(result).toContain('Card');
      expect(result).toContain('CardHeader');
      expect(result).toContain('CardTitle');
      expect(result).toContain('CardDescription');
      expect(result).toContain('CardContent');
    });
  });

  describe('when no props are available', () => {
    describe('Radix UI components', () => {
      it('should generate Radix UI fallback for Radix components', () => {
        const props: PropMetadata[] = [];
        const result = generateAPIReferenceSection(props, 'dropdown-menu', true);

        expect(result).toContain('<PageSection title="API Reference">');
        expect(result).toContain('Radix UI Documentation</CardTitle>');
        expect(result).toContain('DropdownMenu wraps Radix UI primitives');
        expect(result).toContain(
          'https://www.radix-ui.com/primitives/docs/components/dropdown-menu'
        );
        expect(result).toContain('View Radix UI DropdownMenu documentation');
        expect(result).toContain('text-primary hover:underline');
      });

      it('should handle single-word Radix component names', () => {
        const props: PropMetadata[] = [];
        const result = generateAPIReferenceSection(props, 'dialog', true);

        expect(result).toContain('Dialog wraps Radix UI primitives');
        expect(result).toContain('https://www.radix-ui.com/primitives/docs/components/dialog');
      });

      it('should handle hyphenated Radix component names', () => {
        const props: PropMetadata[] = [];
        const result = generateAPIReferenceSection(props, 'navigation-menu', true);

        expect(result).toContain('NavigationMenu wraps Radix UI primitives');
        expect(result).toContain(
          'https://www.radix-ui.com/primitives/docs/components/navigation-menu'
        );
      });
    });

    describe('Calendar component (react-day-picker)', () => {
      it('should generate react-day-picker fallback for calendar component', () => {
        const props: PropMetadata[] = [];
        const result = generateAPIReferenceSection(props, 'calendar', false);

        expect(result).toContain('<PageSection title="API Reference">');
        expect(result).toContain('React DayPicker Documentation</CardTitle>');
        expect(result).toContain('Calendar is built on react-day-picker');
        expect(result).toContain('https://daypicker.dev/');
        expect(result).toContain('View React DayPicker documentation');
      });
    });

    describe('Sonner component', () => {
      it('should generate sonner fallback for sonner component', () => {
        const props: PropMetadata[] = [];
        const result = generateAPIReferenceSection(props, 'sonner', false);

        expect(result).toContain('<PageSection title="API Reference">');
        expect(result).toContain('Sonner Documentation</CardTitle>');
        expect(result).toContain('Sonner wraps the sonner library');
        expect(result).toContain('https://sonner.emilkowal.ski/getting-started');
        expect(result).toContain('View Sonner documentation');
      });
    });

    describe('Non-Radix, non-special component', () => {
      it('should return empty string for non-Radix component without props', () => {
        const props: PropMetadata[] = [];
        const result = generateAPIReferenceSection(props, 'my-component', false);

        expect(result).toBe('');
      });

      it('should return empty string for component without special handling', () => {
        const props: PropMetadata[] = [];
        const result = generateAPIReferenceSection(props, 'custom-button', false);

        expect(result).toBe('');
      });
    });

    describe('fallback link structure', () => {
      it('should include proper link attributes in Radix fallback', () => {
        const props: PropMetadata[] = [];
        const result = generateAPIReferenceSection(props, 'accordion', true);

        expect(result).toContain('target="_blank"');
        expect(result).toContain('rel="noopener noreferrer"');
      });
    });
  });

  describe('edge cases and special scenarios', () => {
    it('should handle empty props array', () => {
      const props: PropMetadata[] = [];
      const result = generateAPIReferenceSection(props, 'test', true);

      expect(result).toContain('Radix UI Documentation');
    });

    it('should handle props with very long descriptions', () => {
      const longDesc =
        'This is a very long description that spans multiple sentences to test how the component handling works with extensive text content that provides detailed information about the prop.';

      const props: PropMetadata[] = [
        {
          name: 'label',
          type: 'string',
          description: longDesc,
          isRequired: false,
          defaultValue: '',
        },
      ];

      const result = generateAPIReferenceSection(props, 'button', false);

      expect(result).toContain(longDesc);
    });

    it('should handle props with special characters in description', () => {
      const props: PropMetadata[] = [
        {
          name: 'label',
          type: 'string',
          description: 'Label with <special> characters & symbols',
          isRequired: false,
          defaultValue: '',
        },
      ];

      const result = generateAPIReferenceSection(props, 'button', false);

      expect(result).toContain('Label with <special> characters & symbols');
    });

    it('should handle props with numbers in options', () => {
      const props: PropMetadata[] = [
        {
          name: 'columns',
          type: '1 | 2 | 3 | 4',
          description: 'Number of columns',
          isRequired: false,
          defaultValue: '3',
          options: ['1', '2', '3', '4'],
        },
      ];

      const result = generateAPIReferenceSection(props, 'grid', false);

      expect(result).toContain('<strong>Options:</strong> 1, 2, 3, 4');
    });

    it('should handle props with boolean type', () => {
      const props: PropMetadata[] = [
        {
          name: 'disabled',
          type: 'boolean',
          description: 'Disable the component',
          isRequired: false,
          defaultValue: 'false',
        },
      ];

      const result = generateAPIReferenceSection(props, 'button', false);

      expect(result).toContain('<code>boolean</code>');
      expect(result).toContain('<strong>Default:</strong> false');
    });

    it('should handle props with function type', () => {
      const props: PropMetadata[] = [
        {
          name: 'onClick',
          type: '(event: MouseEvent) => void',
          description: 'Click handler',
          isRequired: false,
          defaultValue: '',
        },
      ];

      const result = generateAPIReferenceSection(props, 'button', false);

      expect(result).toContain('MouseEvent');
      expect(result).toContain(' =&gt; void</code>');
    });

    it('should handle props with object literal type', () => {
      const props: PropMetadata[] = [
        {
          name: 'style',
          type: 'CSSProperties',
          description: 'Custom styles',
          isRequired: false,
          defaultValue: '{}',
        },
      ];

      const result = generateAPIReferenceSection(props, 'button', false);

      expect(result).toContain('<code>CSSProperties</code>');
    });

    it('should handle multiple component groups', () => {
      const props: PropMetadata[] = [
        {
          name: 'label',
          type: 'string',
          description: 'Label',
          isRequired: false,
          defaultValue: '',
          componentName: 'Button',
        },
        {
          name: 'icon',
          type: 'ReactNode',
          description: 'Icon',
          isRequired: false,
          defaultValue: '',
          componentName: 'ButtonIcon',
        },
        {
          name: 'content',
          type: 'ReactNode',
          description: 'Content',
          isRequired: false,
          defaultValue: '',
          componentName: 'CardContent',
        },
      ];

      const result = generateAPIReferenceSection(props, 'button', false);

      expect(result).toContain('>Button</Typography>');
      expect(result).toContain('>ButtonIcon</Typography>');
      expect(result).toContain('>CardContent</Typography>');
    });

    it('should maintain proper indentation in generated output', () => {
      const props: PropMetadata[] = [
        {
          name: 'label',
          type: 'string',
          description: 'Label',
          isRequired: false,
          defaultValue: '',
        },
      ];

      const result = generateAPIReferenceSection(props, 'button', false);

      expect(result).toContain('      <PageSection title="API Reference">');
      expect(result).toContain('        <div className="mt-(--lsd-spacing-large)">');
      expect(result).toContain('          <Typography variant="h4"');
      expect(result).toContain('grid grid-cols-1');
    });

    it('should handle props with complex TypeScript types', () => {
      const props: PropMetadata[] = [
        {
          name: 'children',
          type: 'ReactNode | ((props: { index: number }) => ReactNode)',
          description: 'Complex children',
          isRequired: false,
          defaultValue: '',
        },
      ];

      const result = generateAPIReferenceSection(props, 'list', false);

      expect(result).toContain('&#123; index: number &#125;');
    });
  });

  describe('toPascalCase conversion', () => {
    it('should convert kebab-case to PascalCase', () => {
      const props: PropMetadata[] = [
        {
          name: 'label',
          type: 'string',
          description: 'Label',
          isRequired: false,
          defaultValue: '',
          componentName: 'dropdown-menu',
        },
      ];

      const result = generateAPIReferenceSection(props, 'dropdown-menu', false);

      expect(result).toContain('>DropdownMenu</Typography>');
    });

    it('should convert snake_case to PascalCase', () => {
      const props: PropMetadata[] = [
        {
          name: 'label',
          type: 'string',
          description: 'Label',
          isRequired: false,
          defaultValue: '',
          componentName: 'avatar_group',
        },
      ];

      const result = generateAPIReferenceSection(props, 'avatar-group', false);

      expect(result).toContain('>AvatarGroup</Typography>');
    });

    it('should handle single word names', () => {
      const props: PropMetadata[] = [
        {
          name: 'label',
          type: 'string',
          description: 'Label',
          isRequired: false,
          defaultValue: '',
          componentName: 'button',
        },
      ];

      const result = generateAPIReferenceSection(props, 'button', false);

      expect(result).toContain('>Button</Typography>');
    });

    it('should handle mixed separators', () => {
      const props: PropMetadata[] = [
        {
          name: 'label',
          type: 'string',
          description: 'Label',
          isRequired: false,
          defaultValue: '',
          componentName: 'my_test-component',
        },
      ];

      const result = generateAPIReferenceSection(props, 'my_test-component', false);

      expect(result).toContain('>MyTestComponent</Typography>');
    });

    it('should capitalize first letter of single word', () => {
      const props: PropMetadata[] = [
        {
          name: 'label',
          type: 'string',
          description: 'Label',
          isRequired: false,
          defaultValue: '',
          componentName: 'input',
        },
      ];

      const result = generateAPIReferenceSection(props, 'input', false);

      expect(result).toContain('>Input</Typography>');
    });
  });

  describe('real-world scenarios', () => {
    it('should handle Button component props', () => {
      const props: PropMetadata[] = [
        {
          name: 'variant',
          type: "'filled' | 'outlined' | 'text'",
          description: 'Button variant style',
          isRequired: false,
          defaultValue: 'filled',
          options: ['filled', 'outlined', 'text'],
        },
        {
          name: 'size',
          type: "'sm' | 'md' | 'lg'",
          description: 'Button size',
          isRequired: false,
          defaultValue: 'md',
          options: ['sm', 'md', 'lg'],
        },
        {
          name: 'disabled',
          type: 'boolean',
          description: 'Disable button interaction',
          isRequired: false,
          defaultValue: 'false',
        },
        {
          name: 'children',
          type: 'ReactNode',
          description: 'Button content',
          isRequired: true,
          defaultValue: '',
        },
      ];

      const result = generateAPIReferenceSection(props, 'button', false);

      expect(result).toContain('<CardTitle>variant</CardTitle>');
      expect(result).toContain('<CardTitle>size</CardTitle>');
      expect(result).toContain('<CardTitle>disabled</CardTitle>');
      expect(result).toContain('<CardTitle>children</CardTitle>');
      expect(result).toContain('<strong>Options:</strong> filled, outlined, text');
      expect(result).toContain('<strong>Options:</strong> sm, md, lg');
      expect(result).toContain('<strong>Default:</strong> md');
      expect(result).toContain('<strong>Default:</strong> false');
      expect(result).toContain('children');
    });

    it('should handle Form component with subcomponents', () => {
      const props: PropMetadata[] = [
        {
          name: 'children',
          type: 'ReactNode',
          description: 'Form children',
          isRequired: true,
          defaultValue: '',
          componentName: 'Form',
        },
        {
          name: 'name',
          type: 'string',
          description: 'Field name',
          isRequired: true,
          defaultValue: '',
          componentName: 'FormField',
        },
        {
          name: 'label',
          type: 'string',
          description: 'Field label',
          isRequired: false,
          defaultValue: '',
          componentName: 'FormField',
        },
      ];

      const result = generateAPIReferenceSection(props, 'form', false);

      expect(result).toContain('>Form</Typography>');
      expect(result).toContain('>FormField</Typography>');
      expect(result).toContain('<CardTitle>children</CardTitle>');
      expect(result).toContain('<CardTitle>name</CardTitle>');
      expect(result).toContain('<CardTitle>label</CardTitle>');
    });

    it('should handle Input with ref type', () => {
      const props: PropMetadata[] = [
        {
          name: 'type',
          type: 'string',
          description: 'Input type',
          isRequired: false,
          defaultValue: 'text',
        },
        {
          name: 'value',
          type: 'string | number',
          description: 'Input value',
          isRequired: false,
          defaultValue: '',
        },
        {
          name: 'onChange',
          type: '(event: ChangeEvent<HTMLInputElement>) => void',
          description: 'Change handler',
          isRequired: false,
          defaultValue: '',
        },
      ];

      const result = generateAPIReferenceSection(props, 'input', false);

      expect(result).toContain('<code>string | number</code>');
      expect(result).toContain('ChangeEvent');
      expect(result).toContain('HTMLInputElement');
    });

    it('should handle DropdownMenu as Radix component without props', () => {
      const props: PropMetadata[] = [];
      const result = generateAPIReferenceSection(props, 'dropdown-menu', true);

      expect(result).toContain('DropdownMenu wraps Radix UI primitives');
      expect(result).toContain('https://www.radix-ui.com/primitives/docs/components/dropdown-menu');
    });

    it('should handle Calendar with react-day-picker fallback', () => {
      const props: PropMetadata[] = [];
      const result = generateAPIReferenceSection(props, 'calendar', false);

      expect(result).toContain('Calendar is built on react-day-picker');
      expect(result).toContain('extends all its props');
      expect(result).toContain('https://daypicker.dev/');
    });

    it('should handle Sonner as Sonner component', () => {
      const props: PropMetadata[] = [];
      const result = generateAPIReferenceSection(props, 'sonner', false);

      expect(result).toContain('Sonner wraps the sonner library');
      expect(result).toContain('extends all its props');
      expect(result).toContain('https://sonner.emilkowal.ski/getting-started');
    });
  });
});

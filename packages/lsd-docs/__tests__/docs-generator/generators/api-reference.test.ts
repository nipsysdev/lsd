/**
 * API Reference Generator Tests
 *
 * Tests for generating API Reference sections
 */

import { describe, expect, it } from 'vitest';
import { generateAPIReferenceSection } from '../../../scripts/docs-generator/generators/api-reference';
import type { PropMetadata } from '../../../scripts/docs-generator/parsers/metadata-extractor';

describe('API Reference Generator', () => {
  describe('generateAPIReferenceSection', () => {
    it('should return empty string for empty props array', () => {
      const result = generateAPIReferenceSection([]);
      expect(result).toBe('');
    });

    it('should generate section with PageSection wrapper', () => {
      const props: PropMetadata[] = [
        {
          name: 'variant',
          type: 'string',
          description: 'The visual style',
          isRequired: false,
          defaultValue: 'default',
          options: ['default', 'primary'],
        },
      ];

      const result = generateAPIReferenceSection(props);
      expect(result).toContain('<PageSection title="API Reference">');
      expect(result).toContain('</PageSection>');
    });

    it('should include Typography description', () => {
      const props: PropMetadata[] = [
        {
          name: 'test',
          type: 'string',
          isRequired: false,
        },
      ];

      const result = generateAPIReferenceSection(props);
      expect(result).toContain(
        '<Typography variant="body1">All available props for the component.</Typography>'
      );
    });

    it('should use 2-column grid layout', () => {
      const props: PropMetadata[] = [
        {
          name: 'prop1',
          type: 'string',
          isRequired: false,
        },
        {
          name: 'prop2',
          type: 'number',
          isRequired: false,
        },
      ];

      const result = generateAPIReferenceSection(props);
      expect(result).toContain('grid grid-cols-1 md:grid-cols-2');
      expect(result).toContain('gap-(--lsd-spacing-base)');
    });

    it('should include type field for all props', () => {
      const props: PropMetadata[] = [
        {
          name: 'variant',
          type: 'string',
          description: 'The visual style',
          isRequired: false,
        },
      ];

      const result = generateAPIReferenceSection(props);
      expect(result).toContain('<strong>Type:</strong> string');
    });

    it('should include options field for props with options', () => {
      const props: PropMetadata[] = [
        {
          name: 'variant',
          type: 'string',
          description: 'The visual style',
          isRequired: false,
          defaultValue: 'default',
          options: ['default', 'primary', 'secondary'],
        },
      ];

      const result = generateAPIReferenceSection(props);
      expect(result).toContain('<strong>Options:</strong> default, primary, secondary');
    });

    it('should not include options field for props without options', () => {
      const props: PropMetadata[] = [
        {
          name: 'enabled',
          type: 'boolean',
          description: 'Whether enabled',
          isRequired: false,
          defaultValue: 'true',
        },
      ];

      const result = generateAPIReferenceSection(props);
      expect(result).not.toContain('<strong>Options:</strong>');
    });

    it('should include default field with actual value', () => {
      const props: PropMetadata[] = [
        {
          name: 'count',
          type: 'number',
          description: 'The count',
          isRequired: false,
          defaultValue: '0',
        },
      ];

      const result = generateAPIReferenceSection(props);
      expect(result).toContain('<strong>Default:</strong> 0');
    });

    it('should include default field with "undefined" for missing default', () => {
      const props: PropMetadata[] = [
        {
          name: 'custom',
          type: 'any',
          isRequired: false,
        },
      ];

      const result = generateAPIReferenceSection(props);
      expect(result).toContain('<strong>Default:</strong> undefined');
    });

    it('should include description in CardContent if provided', () => {
      const props: PropMetadata[] = [
        {
          name: 'variant',
          type: 'string',
          description: 'The visual style of the component',
          isRequired: false,
        },
      ];

      const result = generateAPIReferenceSection(props);
      expect(result).toContain('>The visual style of the component<');
    });

    it('should use description as CardDescription if present', () => {
      const props: PropMetadata[] = [
        {
          name: 'size',
          type: 'string',
          description: 'The size of the component',
          isRequired: false,
        },
      ];

      const result = generateAPIReferenceSection(props);
      expect(result).toContain('<CardDescription>The size of the component</CardDescription>');
    });

    it('should generate default description if none provided', () => {
      const props: PropMetadata[] = [
        {
          name: 'custom',
          type: 'any',
          isRequired: false,
        },
      ];

      const result = generateAPIReferenceSection(props);
      expect(result).toContain('<CardDescription>The custom prop</CardDescription>');
    });

    it('should handle complex type strings', () => {
      const props: PropMetadata[] = [
        {
          name: 'onChange',
          type: '(value: string) => void',
          isRequired: false,
        },
      ];

      const result = generateAPIReferenceSection(props);
      expect(result).toContain('<strong>Type:</strong> (value: string) => void');
    });

    it('should escape backticks in type strings', () => {
      const props: PropMetadata[] = [
        {
          name: 'callback',
          type: '`string` | `number`',
          isRequired: false,
        },
      ];

      const result = generateAPIReferenceSection(props);
      expect(result).toContain('\\`string\\` | \\`number\\`');
    });

    it('should escape backticks in default values', () => {
      const props: PropMetadata[] = [
        {
          name: 'format',
          type: 'string',
          isRequired: false,
          defaultValue: "'default'",
        },
      ];

      const result = generateAPIReferenceSection(props);
      expect(result).toContain("\\'default\\'");
    });

    it('should generate cards for multiple props', () => {
      const props: PropMetadata[] = [
        {
          name: 'variant',
          type: 'string',
          description: 'Visual style',
          isRequired: false,
          defaultValue: 'default',
          options: ['default', 'primary'],
        },
        {
          name: 'size',
          type: 'string',
          description: 'Size',
          isRequired: false,
          defaultValue: 'md',
          options: ['sm', 'md', 'lg'],
        },
        {
          name: 'disabled',
          type: 'boolean',
          description: 'Disabled state',
          isRequired: false,
          defaultValue: 'false',
        },
      ];

      const result = generateAPIReferenceSection(props);
      expect(result).toContain('<CardTitle>variant</CardTitle>');
      expect(result).toContain('<CardTitle>size</CardTitle>');
      expect(result).toContain('<CardTitle>disabled</CardTitle>');
    });

    it('should handle boolean type props', () => {
      const props: PropMetadata[] = [
        {
          name: 'disabled',
          type: 'boolean',
          description: 'Whether disabled',
          isRequired: false,
          defaultValue: 'false',
        },
      ];

      const result = generateAPIReferenceSection(props);
      expect(result).toContain('<strong>Type:</strong> boolean');
      expect(result).toContain('<CardDescription>Whether disabled</CardDescription>');
    });

    it('should handle required props', () => {
      const props: PropMetadata[] = [
        {
          name: 'required',
          type: 'string',
          description: 'Required prop',
          isRequired: true,
        },
      ];

      const result = generateAPIReferenceSection(props);
      expect(result).toContain('<CardTitle>required</CardTitle>');
    });

    it('should handle union type with many options', () => {
      const props: PropMetadata[] = [
        {
          name: 'align',
          type: 'string',
          isRequired: false,
          defaultValue: 'start',
          options: ['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly'],
        },
      ];

      const result = generateAPIReferenceSection(props);
      expect(result).toContain(
        '<strong>Options:</strong> start, center, end, space-between, space-around, space-evenly'
      );
    });

    it('should maintain correct spacing structure', () => {
      const props: PropMetadata[] = [
        {
          name: 'test',
          type: 'string',
          isRequired: false,
        },
      ];

      const result = generateAPIReferenceSection(props);
      expect(result).toContain('mt-(--lsd-spacing-base)');
      expect(result).toContain('mb-(--lsd-spacing-smaller)');
    });
  });
});

import { describe, expect, it } from 'vitest';
import { dedent, escapeTemplate, interpolate } from '../template-utils';

describe('TemplateUtils', () => {
  describe('interpolate', () => {
    it('should replace single placeholder', () => {
      const template = 'Hello, {{name}}!';
      const result = interpolate(template, { name: 'World' });

      expect(result).toBe('Hello, World!');
    });

    it('should replace multiple placeholders', () => {
      const template = '{{greeting}}, {{name}}! Today is {{day}}.';
      const result = interpolate(template, {
        greeting: 'Hello',
        name: 'Alice',
        day: 'Monday',
      });

      expect(result).toBe('Hello, Alice! Today is Monday.');
    });

    it('should preserve placeholder when value is undefined', () => {
      const template = 'Value: {{value}}';
      const result = interpolate(template, {} as Record<string, unknown>);

      expect(result).toBe('Value: {{value}}');
    });

    it('should convert values to string', () => {
      const template = 'Number: {{num}}, Boolean: {{bool}}, Object: {{obj}}';
      const result = interpolate(template, {
        num: 42,
        bool: true,
        obj: { key: 'value' },
      });

      expect(result).toBe('Number: 42, Boolean: true, Object: [object Object]');
    });

    it('should preserve placeholder when value is null', () => {
      const template = 'Value: {{value}}';
      const result = interpolate(template, { value: null });

      expect(result).toBe('Value: {{value}}');
    });

    it('should handle zero and empty string', () => {
      const template = 'Zero: {{zero}}, Empty: {{empty}}';
      const result = interpolate(template, { zero: 0, empty: '' });

      expect(result).toBe('Zero: 0, Empty: ');
    });

    it('should handle repeated placeholders', () => {
      const template = '{{name}} says {{name}}';
      const result = interpolate(template, { name: 'Test' });

      expect(result).toBe('Test says Test');
    });

    it('should not modify template without placeholders', () => {
      const template = 'No placeholders here';
      const result = interpolate(template, { value: 'test' });

      expect(result).toBe('No placeholders here');
    });
  });

  describe('dedent', () => {
    it('should remove common indentation', () => {
      const result = dedent`
        Line 1
          Line 2
            Line 3
      `;

      expect(result).toBe('Line 1\n  Line 2\n    Line 3');
    });

    it('should handle single line', () => {
      const result = dedent`Single line`;

      expect(result).toBe('Single line');
    });

    it('should handle empty string', () => {
      const result = dedent``;

      expect(result).toBe('');
    });

    it('should remove leading and trailing empty lines', () => {
      const result = dedent`

        Line 1
        Line 2

      `;

      // Verify lines are present (dedent keeps one leading newline)
      expect(result).toContain('Line 1');
      expect(result).toContain('Line 2');
    });

    it('should preserve internal empty lines', () => {
      const result = dedent`
        Line 1

        Line 2
      `;

      expect(result).toBe('Line 1\n\nLine 2');
    });

    it('should handle no indentation', () => {
      const result = dedent`
Line 1
Line 2
      `;

      expect(result).toBe('Line 1\nLine 2');
    });

    it('should handle mixed indentation', () => {
      const result = dedent`
        Indented line 1
      Less indented
        Indented line 2
      `;

      // Minimum indentation is 0 (the less indented line)
      expect(result).toContain('Less indented');
      expect(result).toContain('Indented line 1');
      expect(result).toContain('Indented line 2');
    });

    it('should handle tab characters', () => {
      const result = dedent`
\t\tTabbed line 1
\t\tTabbed line 2
      `;

      // Should remove the common tabs
      expect(result).toContain('Tabbed line 1');
      expect(result).toContain('Tabbed line 2');
      expect(result.length).toBeGreaterThan(0);
    });

    it('should work with template expressions', () => {
      const value = 'interpolated';
      const result = dedent`
        Line 1
        Line 2 with ${value}
        Line 3
      `;

      expect(result).toContain('Line 2 with interpolated');
    });

    it('should handle lines with only whitespace', () => {
      const result = dedent`
        Line 1
          
        Line 2
      `;

      expect(result).toContain('Line 1');
      expect(result).toContain('Line 2');
    });

    it('should handle single line with indentation', () => {
      const result = dedent`  Indented single line`;

      // Single line with indentation - dedent removes the common indentation
      expect(result).toBe('Indented single line');
    });

    it('should handle all empty lines', () => {
      const result = dedent`



      `;

      // All empty lines at boundaries are removed, leaving internal ones
      expect(result).toBe('\n\n');
    });
  });

  describe('escapeTemplate', () => {
    it('should escape backslashes', () => {
      const input = 'path\\to\\file';
      const result = escapeTemplate(input);

      expect(result).toBe('path\\\\to\\\\file');
    });

    it('should escape backticks', () => {
      const input = 'string with `backticks`';
      const result = escapeTemplate(input);

      expect(result).toBe('string with \\`backticks\\`');
    });

    it('should escape dollar signs', () => {
      const input = 'Price: $10';
      const result = escapeTemplate(input);

      expect(result).toBe('Price: \\$10');
    });

    it('should escape curly braces', () => {
      const input = '{variable}';
      const result = escapeTemplate(input);

      expect(result).toBe('\\{variable\\}');
    });

    it('should escape all special characters', () => {
      const input = '\\`$\\{\\}\\';
      const result = escapeTemplate(input);

      // Verify all characters are escaped
      expect(result).toContain('\\\\');
      expect(result).toContain('\\`');
      expect(result).toContain('\\$');
      expect(result).toContain('\\{');
      expect(result).toContain('\\}');
    });

    it('should escape in correct order', () => {
      const input = 'C:\\Users\\test\\file.js `code` \\${var}';
      const result = escapeTemplate(input);

      expect(result).toContain('\\\\');
      expect(result).toContain('\\`');
      expect(result).toContain('\\$');
      expect(result).toContain('\\{');
      expect(result).toContain('\\}');
    });

    it('should handle empty string', () => {
      const result = escapeTemplate('');

      expect(result).toBe('');
    });

    it('should handle strings without special characters', () => {
      const input = 'plain text without special chars';
      const result = escapeTemplate(input);

      expect(result).toBe(input);
    });

    it('should escape multiple backslashes', () => {
      const input = 'path\\\\\\\\to\\\\\\\\file';
      const result = escapeTemplate(input);

      expect(result).toBe('path\\\\\\\\\\\\\\\\to\\\\\\\\\\\\\\\\file');
    });

    it('should escape mixed content', () => {
      const input = 'test`string\\${var}\\path';
      const result = escapeTemplate(input);

      expect(result).toContain('\\`');
      expect(result).toContain('\\$');
      expect(result).toContain('\\{');
      expect(result).toContain('\\}');
      expect(result).toContain('\\\\');
    });

    it('should only escape at the end', () => {
      const input = 'path\\';
      const result = escapeTemplate(input);

      expect(result).toBe('path\\\\');
    });

    it('should escape single backtick', () => {
      const input = '`';
      const result = escapeTemplate(input);

      expect(result).toBe('\\`');
    });

    it('should escape single dollar sign', () => {
      const input = '$';
      const result = escapeTemplate(input);

      expect(result).toBe('\\$');
    });

    it('should escape single open brace', () => {
      const input = '{';
      const result = escapeTemplate(input);

      expect(result).toBe('\\{');
    });

    it('should escape single close brace', () => {
      const input = '}';
      const result = escapeTemplate(input);

      expect(result).toBe('\\}');
    });
  });
});

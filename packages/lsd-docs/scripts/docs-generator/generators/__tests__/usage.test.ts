import { describe, expect, it } from 'vitest';
import type { TSDocMetadata } from '../../parsers/tsdoc-parser';
import { generateUsageSection } from '../usage';

describe('Usage Generator', () => {
  it('should return empty string when no usage information is available', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Component description',
      customTags: {},
    };

    const result = generateUsageSection(tsdocMetadata);

    expect(result).toBe('');
  });

  it('should generate Usage section with only Single Mode', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Component description',
      customTags: {
        docSectionUsageSingleMode: 'Use type="single" when you want one selection.',
      },
    };

    const result = generateUsageSection(tsdocMetadata);

    expect(result).toContain('PageSection');
    expect(result).toContain('title="Usage"');
    expect(result).toContain('Single Mode');
    expect(result).toContain('Use type="single" when you want one selection');
    expect(result).toContain('Different usage modes provide flexibility for various use cases');
    expect(result).not.toContain('Multiple Mode');
  });

  it('should generate Usage section with only Multiple Mode', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Component description',
      customTags: {
        docSectionUsageMultipleMode: 'Use type="multiple" when users can select many items.',
      },
    };

    const result = generateUsageSection(tsdocMetadata);

    expect(result).toContain('PageSection');
    expect(result).toContain('title="Usage"');
    expect(result).toContain('Multiple Mode');
    expect(result).toContain('Use type="multiple" when users can select many items');
    expect(result).toContain('Different usage modes provide flexibility for various use cases');
    expect(result).not.toContain('Single Mode');
  });

  it('should generate Usage section with both Single and Multiple Mode', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Component description',
      customTags: {
        docSectionUsageSingleMode: 'Use type="single" for single selection.',
        docSectionUsageMultipleMode: 'Use type="multiple" for multiple selections.',
      },
    };

    const result = generateUsageSection(tsdocMetadata);

    expect(result).toContain('PageSection');
    expect(result).toContain('title="Usage"');
    expect(result).toContain('Single Mode');
    expect(result).toContain('Use type="single" for single selection');
    expect(result).toContain('Multiple Mode');
    expect(result).toContain('Use type="multiple" for multiple selections');
    expect(result).toContain('Different usage modes provide flexibility for various use cases');
  });

  it('should trim leading and trailing whitespace from Single Mode info', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Component description',
      customTags: {
        docSectionUsageSingleMode: '  Single mode description with padding  ',
      },
    };

    const result = generateUsageSection(tsdocMetadata);

    expect(result).toContain('Single mode description with padding');
    expect(result).toMatch(/Single mode description with padding[^ ]/);
  });

  it('should trim leading and trailing whitespace from Multiple Mode info', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Component description',
      customTags: {
        docSectionUsageMultipleMode: '  Multiple mode description with padding  ',
      },
    };

    const result = generateUsageSection(tsdocMetadata);

    expect(result).toContain('Multiple mode description with padding');
    expect(result).toMatch(/Multiple mode description with padding[^ ]/);
  });

  it('should normalize multiple spaces to single space in Single Mode', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Component description',
      customTags: {
        docSectionUsageSingleMode: 'Use  type="single"  for  single  selections.',
      },
    };

    const result = generateUsageSection(tsdocMetadata);

    expect(result).toContain('Use type="single" for single selections');
    // Check that spaces within the text content are normalized
    const textMatch = result.match(/type="single" for single selections\./);
    expect(textMatch).toBeTruthy();
  });

  it('should normalize multiple spaces to single space in Multiple Mode', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Component description',
      customTags: {
        docSectionUsageMultipleMode: 'Use  type="multiple"  for  multiple  selections.',
      },
    };

    const result = generateUsageSection(tsdocMetadata);

    expect(result).toContain('Use type="multiple" for multiple selections');
    // Check that spaces within the text content are normalized
    const textMatch = result.match(/type="multiple" for multiple selections\./);
    expect(textMatch).toBeTruthy();
  });

  it('should handle newlines and tabs in Single Mode info', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Component description',
      customTags: {
        docSectionUsageSingleMode: 'Single mode\ntext\twith\tnewlines and tabs.',
      },
    };

    const result = generateUsageSection(tsdocMetadata);

    expect(result).toContain('Single mode');
    expect(result).toContain('text');
    expect(result).toContain('with');
    expect(result).toContain('newlines and tabs');
    expect(result).toContain('whitespace-pre-line');
  });

  it('should handle newlines and tabs in Multiple Mode info', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Component description',
      customTags: {
        docSectionUsageMultipleMode: 'Multiple mode\ntext\twith\tnewlines and tabs.',
      },
    };

    const result = generateUsageSection(tsdocMetadata);

    expect(result).toContain('Multiple mode');
    expect(result).toContain('text');
    expect(result).toContain('with');
    expect(result).toContain('newlines and tabs');
    expect(result).toContain('whitespace-pre-line');
  });

  it('should handle special characters in Single Mode info', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Component description',
      customTags: {
        docSectionUsageSingleMode: 'Use single mode with < > & " \' characters',
      },
    };

    const result = generateUsageSection(tsdocMetadata);

    expect(result).toContain('single mode with');
    expect(result).toContain('characters');
  });

  it('should handle special characters in Multiple Mode info', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Component description',
      customTags: {
        docSectionUsageMultipleMode: 'Use multiple mode with < > & " \' characters',
      },
    };

    const result = generateUsageSection(tsdocMetadata);

    expect(result).toContain('multiple mode with');
    expect(result).toContain('characters');
  });

  it('should handle empty string for Single Mode', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Component description',
      customTags: {
        docSectionUsageSingleMode: '',
        docSectionUsageMultipleMode: 'Multiple mode info',
      },
    };

    const result = generateUsageSection(tsdocMetadata);

    expect(result).toContain('PageSection');
    expect(result).toContain('Multiple Mode');
    expect(result).toContain('Multiple mode info');
    // Empty strings are falsy, so Single Mode should not appear
    expect(result).not.toContain('Single Mode');
  });

  it('should handle empty string for Multiple Mode', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Component description',
      customTags: {
        docSectionUsageSingleMode: 'Single mode info',
        docSectionUsageMultipleMode: '',
      },
    };

    const result = generateUsageSection(tsdocMetadata);

    expect(result).toContain('PageSection');
    expect(result).toContain('Single Mode');
    expect(result).toContain('Single mode info');
    // Empty strings are falsy, so Multiple Mode should not appear
    expect(result).not.toContain('Multiple Mode');
  });

  it('should handle whitespace-only string for Single Mode', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Component description',
      customTags: {
        docSectionUsageSingleMode: '    ',
        docSectionUsageMultipleMode: 'Multiple mode info',
      },
    };

    const result = generateUsageSection(tsdocMetadata);

    expect(result).toContain('Multiple Mode');
    expect(result).toContain('Multiple mode info');
    // Empty single mode content is still shown
    expect(result).toContain('Single Mode');
    expect(result).toContain('whitespace-pre-line');
  });

  it('should handle whitespace-only string for Multiple Mode', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Component description',
      customTags: {
        docSectionUsageSingleMode: 'Single mode info',
        docSectionUsageMultipleMode: '    ',
      },
    };

    const result = generateUsageSection(tsdocMetadata);

    expect(result).toContain('Single Mode');
    expect(result).toContain('Single mode info');
    // Empty multiple mode content is still shown
    expect(result).toContain('Multiple Mode');
    expect(result).toContain('whitespace-pre-line');
  });

  it('should handle very long Single Mode text', () => {
    const longText = `${'Use type="single" '.repeat(100)}end of description`;
    const tsdocMetadata: TSDocMetadata = {
      description: 'Component description',
      customTags: {
        docSectionUsageSingleMode: longText,
      },
    };

    const result = generateUsageSection(tsdocMetadata);

    expect(result).toContain('Use type="single"');
    expect(result).toContain('end of description');
  });

  it('should handle very long Multiple Mode text', () => {
    const longText = `${'Use type="multiple" '.repeat(100)}end of description`;
    const tsdocMetadata: TSDocMetadata = {
      description: 'Component description',
      customTags: {
        docSectionUsageMultipleMode: longText,
      },
    };

    const result = generateUsageSection(tsdocMetadata);

    expect(result).toContain('Use type="multiple"');
    expect(result).toContain('end of description');
  });

  it('should produce correct output format for Single Mode', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Component description',
      customTags: {
        docSectionUsageSingleMode: 'Single mode test',
      },
    };

    const result = generateUsageSection(tsdocMetadata);

    expect(result).toMatch(/\s*<PageSection title="Usage">/);
    expect(result).toContain('<Typography variant="body1">');
    expect(result).toContain('Different usage modes provide flexibility for various use cases');
    expect(result).toContain('</Typography>');
    expect(result).toContain('<Card className="mt-(--lsd-spacing-base)">');
    expect(result).toContain('<CardHeader>');
    expect(result).toContain('<CardTitle>Single Mode</CardTitle>');
    expect(result).toContain('</CardHeader>');
    expect(result).toContain('<CardContent>');
    expect(result).toContain('<Typography variant="body2" className="whitespace-pre-line">');
    expect(result).toContain('Single mode test');
    expect(result).toContain('</Typography>');
    expect(result).toContain('</CardContent>');
    expect(result).toContain('</Card>');
    expect(result).toContain('</PageSection>');
  });

  it('should produce correct output format for Multiple Mode', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Component description',
      customTags: {
        docSectionUsageMultipleMode: 'Multiple mode test',
      },
    };

    const result = generateUsageSection(tsdocMetadata);

    expect(result).toMatch(/\s*<PageSection title="Usage">/);
    expect(result).toContain('<Typography variant="body1">');
    expect(result).toContain('Different usage modes provide flexibility for various use cases');
    expect(result).toContain('</Typography>');
    expect(result).toContain('<Card className="mt-(--lsd-spacing-base)">');
    expect(result).toContain('<CardHeader>');
    expect(result).toContain('<CardTitle>Multiple Mode</CardTitle>');
    expect(result).toContain('</CardHeader>');
    expect(result).toContain('<CardContent>');
    expect(result).toContain('<Typography variant="body2" className="whitespace-pre-line">');
    expect(result).toContain('Multiple mode test');
    expect(result).toContain('</Typography>');
    expect(result).toContain('</CardContent>');
    expect(result).toContain('</Card>');
    expect(result).toContain('</PageSection>');
  });

  it('should maintain order with Single Mode before Multiple Mode', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Component description',
      customTags: {
        docSectionUsageSingleMode: 'Single mode info',
        docSectionUsageMultipleMode: 'Multiple mode info',
      },
    };

    const result = generateUsageSection(tsdocMetadata);

    const singleModeIndex = result.indexOf('Single Mode');
    const multipleModeIndex = result.indexOf('Multiple Mode');

    expect(singleModeIndex).toBeGreaterThan(-1);
    expect(multipleModeIndex).toBeGreaterThan(-1);
    expect(singleModeIndex).toBeLessThan(multipleModeIndex);
  });

  it('should handle numbers in Single Mode info', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Component description',
      customTags: {
        docSectionUsageSingleMode: 'Select 1 item from 5 options with 100% accuracy',
      },
    };

    const result = generateUsageSection(tsdocMetadata);

    expect(result).toContain('Select 1 item from 5 options with 100% accuracy');
  });

  it('should handle numbers in Multiple Mode info', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Component description',
      customTags: {
        docSectionUsageMultipleMode: 'Select up to 10 items from 100 options',
      },
    };

    const result = generateUsageSection(tsdocMetadata);

    expect(result).toContain('Select up to 10 items from 100 options');
  });

  it('should handle Unicode characters in Single Mode info', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Component description',
      customTags: {
        docSectionUsageSingleMode: 'Use for émojis 🎉 and other ñiño characters',
      },
    };

    const result = generateUsageSection(tsdocMetadata);

    expect(result).toContain('émojis');
    expect(result).toContain('🎉');
    expect(result).toContain('ñiño');
  });

  it('should handle Unicode characters in Multiple Mode info', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Component description',
      customTags: {
        docSectionUsageMultipleMode: 'Select multiple émojis 🎉🔥 and characters',
      },
    };

    const result = generateUsageSection(tsdocMetadata);

    expect(result).toContain('émojis');
    expect(result).toContain('🎉🔥');
  });

  it('should handle undefined customTags properties', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Component description',
      customTags: {
        docSectionUsageSingleMode: undefined as any,
        docSectionUsageMultipleMode: undefined as any,
      },
    };

    const result = generateUsageSection(tsdocMetadata);

    expect(result).toBe('');
  });

  it('should handle description with line breaks correctly', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Component description',
      customTags: {
        docSectionUsageSingleMode: 'Line 1\nLine 2\nLine 3',
      },
    };

    const result = generateUsageSection(tsdocMetadata);

    expect(result).toContain('Line 1');
    expect(result).toContain('Line 2');
    expect(result).toContain('Line 3');
    expect(result).toContain('whitespace-pre-line');
  });

  it('should contain proper CSS classes', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Component description',
      customTags: {
        docSectionUsageSingleMode: 'Single mode test',
      },
    };

    const result = generateUsageSection(tsdocMetadata);

    expect(result).toContain('className="mt-(--lsd-spacing-base)"');
    expect(result).toContain('variant="body1"');
    expect(result).toContain('variant="body2"');
    expect(result).toContain('className="whitespace-pre-line"');
  });

  it('should handle mixed whitespace (spaces, tabs, newlines)', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Component description',
      customTags: {
        docSectionUsageSingleMode: '  Text   with\t\tmixed\n\nwhitespace  ',
      },
    };

    const result = generateUsageSection(tsdocMetadata);

    expect(result).toContain('Text');
    expect(result).toContain('with');
    expect(result).toContain('mixed');
    expect(result).toContain('whitespace');
    // Multiple spaces are normalized to single
    expect(result).toContain('Text with');
    expect(result).toContain('with mixed');
  });
});

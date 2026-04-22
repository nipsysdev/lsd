import { describe, expect, it } from 'vitest';
import type { TSDocMetadata } from '../../parsers/tsdoc-parser';
import { generateAboutSection } from '../about';

describe('About Generator', () => {
  it('should generate About section with description', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Main description',
      aboutDescription: 'This is a test component for demonstration purposes.',
      customTags: {},
    };

    const result = generateAboutSection('test', tsdocMetadata);

    expect(result).toContain('PageSection');
    expect(result).toContain('About Test');
    expect(result).toContain('This is a test component for demonstration purposes');
  });

  it('should capitalize component name correctly', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Main description',
      aboutDescription: 'Description here',
      customTags: {},
    };

    const result = generateAboutSection('button', tsdocMetadata);

    expect(result).toContain('About Button');
  });

  it('should handle kebab-case component names', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Main description',
      aboutDescription: 'Description here',
      customTags: {},
    };

    const result = generateAboutSection('dropdown-menu', tsdocMetadata);

    expect(result).toContain('About DropdownMenu');
  });

  it('should handle multi-word component names', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Main description',
      aboutDescription: 'Description here',
      customTags: {},
    };

    const result = generateAboutSection('input-group', tsdocMetadata);

    expect(result).toContain('About InputGroup');
  });

  it('should throw error when aboutDescription is missing', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Main description',
      customTags: {},
    } as TSDocMetadata;

    expect(() => generateAboutSection('test', tsdocMetadata)).toThrow();
  });

  it('should handle single word component names', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Main description',
      aboutDescription: 'Single word component',
      customTags: {},
    };

    const result = generateAboutSection('alert', tsdocMetadata);

    expect(result).toContain('About Alert');
  });

  it('should normalize whitespace in description', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Main description',
      aboutDescription: 'This   has   multiple   spaces',
      customTags: {},
    };

    const result = generateAboutSection('test', tsdocMetadata);

    expect(result).toContain('This has multiple spaces');
  });

  it('should handle special characters in description', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Main description',
      aboutDescription: 'Component with special chars: < > & " \'',
      customTags: {},
    };

    const result = generateAboutSection('test', tsdocMetadata);

    expect(result).toContain('special chars');
  });

  it('should trim leading and trailing whitespace', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Main description',
      aboutDescription: '  Description with leading and trailing spaces  ',
      customTags: {},
    };

    const result = generateAboutSection('test', tsdocMetadata);

    expect(result).toContain('Description with leading and trailing spaces');
    expect(result).not.toMatch(/^\s+Description/);
    expect(result).not.toMatch(/spaces\s+$/m);
  });

  it('should handle newlines and tabs in description', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Main description',
      aboutDescription: 'Text\nwith\nnewlines\tand\ttabs',
      customTags: {},
    };

    const result = generateAboutSection('test', tsdocMetadata);

    expect(result).toContain('Text with newlines and tabs');
    // The template output has newlines, normalizeText removes them
  });

  it('should throw error when description is empty string', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Main description',
      aboutDescription: '',
      customTags: {},
    };

    expect(() => generateAboutSection('test', tsdocMetadata)).toThrow(
      'Component test must have @docSectionAbout custom tag with content.'
    );
  });

  it('should handle underscore in component name', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Main description',
      aboutDescription: 'Description here',
      customTags: {},
    };

    const result = generateAboutSection('some_component', tsdocMetadata);

    expect(result).toContain('About SomeComponent');
  });

  it('should handle mixed hyphens and underscores in component name', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Main description',
      aboutDescription: 'Description here',
      customTags: {},
    };

    const result = generateAboutSection('some-component_name', tsdocMetadata);

    expect(result).toContain('About SomeComponentName');
  });

  it('should handle already capitalized words in component name', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Main description',
      aboutDescription: 'Description here',
      customTags: {},
    };

    const result = generateAboutSection('PDF-Generator', tsdocMetadata);

    expect(result).toContain('About PDFGenerator');
  });

  it('should throw error with specific message when aboutDescription is missing', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Main description',
      customTags: {},
      aboutDescription: undefined,
    };

    expect(() => generateAboutSection('test', tsdocMetadata)).toThrow(
      'Component test must have @docSectionAbout custom tag with content.'
    );
  });

  it('should handle description with only whitespace', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Main description',
      aboutDescription: '    ',
      customTags: {},
    };

    const result = generateAboutSection('test', tsdocMetadata);

    expect(result).toContain('PageSection');
    expect(result).toContain('About Test');
  });

  it('should handle very long component names', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Main description',
      aboutDescription: 'Description here',
      customTags: {},
    };

    const result = generateAboutSection('very-long-component-name-with-many-parts', tsdocMetadata);

    expect(result).toContain('About VeryLongComponentNameWithManyParts');
  });

  it('should handle component name that is just hyphens', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Main description',
      aboutDescription: 'Description here',
      customTags: {},
    };

    const result = generateAboutSection('---', tsdocMetadata);

    expect(result).toContain('About ');
  });

  it('should produce correct output format', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Main description',
      aboutDescription: 'Test description',
      customTags: {},
    };

    const result = generateAboutSection('test-component', tsdocMetadata);

    expect(result).toMatch(/^\s*<PageSection title="About TestComponent">/);
    expect(result).toContain('<Typography variant="body1" className="block">');
    expect(result).toContain('Test description');
    expect(result).toContain('</Typography>');
    expect(result).toContain('</PageSection>');
  });

  it('should handle description with numbers', () => {
    const tsdocMetadata: TSDocMetadata = {
      description: 'Main description',
      aboutDescription: 'Version 1.2.3 with 100% coverage',
      customTags: {},
    };

    const result = generateAboutSection('test', tsdocMetadata);

    expect(result).toContain('Version 1.2.3 with 100% coverage');
  });
});

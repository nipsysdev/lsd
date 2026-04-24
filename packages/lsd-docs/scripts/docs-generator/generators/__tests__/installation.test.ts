import { describe, expect, it } from 'vitest';
import { generateInstallationSection } from '../installation';

describe('Installation Generator', () => {
  it('should generate installation section', () => {
    const result = generateInstallationSection('button');

    expect(result).toContain('PageSection');
    expect(result).toContain('Installation');
  });

  it('should include import statement with correct component name', () => {
    const result = generateInstallationSection('input');

    expect(result).toContain('import { Input } from');
  });

  it('should capitalize component name for import', () => {
    const result = generateInstallationSection('alert');

    expect(result).toContain('import { Alert } from');
  });

  it('should handle kebab-case component names', () => {
    const result = generateInstallationSection('dropdown-menu');

    expect(result).toContain('import { DropdownMenu } from');
  });

  it('should include CodeExample component', () => {
    const result = generateInstallationSection('checkbox');

    expect(result).toContain('<CodeExample');
  });

  it('should set useAccordion to false', () => {
    const result = generateInstallationSection('dialog');

    expect(result).toContain('useAccordion={false}');
  });

  it('should include Card wrapper', () => {
    const result = generateInstallationSection('form');

    expect(result).toContain('<Card');
    expect(result).toContain('</Card>');
  });

  it('should include CardContent', () => {
    const result = generateInstallationSection('accordion');

    expect(result).toContain('<CardContent');
    expect(result).toContain('</CardContent>');
  });

  it('should include default function name in code', () => {
    const result = generateInstallationSection('card');

    expect(result).toContain('export default function MyComponent()');
  });

  it('should include component usage in code', () => {
    const result = generateInstallationSection('badge');

    expect(result).toContain('<Badge />');
  });

  it('should use correct import path', () => {
    const result = generateInstallationSection('progress');

    expect(result).toContain('@nipsys/lsd');
  });

  it('should maintain proper indentation in generated code', () => {
    const result = generateInstallationSection('select');

    expect(result).toContain('export default function MyComponent() {');
    expect(result).toContain('return <Select />');
  });

  it('should use LSD spacing variables', () => {
    const result = generateInstallationSection('switch');

    expect(result).toContain('--lsd-spacing-base');
  });

  it('should handle complex component names', () => {
    const result = generateInstallationSection('input-group');

    expect(result).toContain('InputGroup');
  });

  it('should handle single word component names', () => {
    const result = generateInstallationSection('toast');

    expect(result).toContain('Toast');
  });

  it('should include template literal syntax for code', () => {
    const result = generateInstallationSection('tooltip');

    expect(result).toContain("import { Tooltip } from '@nipsys/lsd'");
    expect(result).toContain('export default function MyComponent()');
    expect(result).toContain('return <Tooltip />');
  });

  it('should include Typography with correct variant', () => {
    const result = generateInstallationSection('calendar');

    expect(result).toContain('<Typography variant="body1">');
    expect(result).toContain('Import the Calendar component from LSD:');
  });

  it('should handle underscore in component name', () => {
    const result = generateInstallationSection('some_component');

    expect(result).toContain('SomeComponent');
    expect(result).toContain('return <SomeComponent />');
  });

  it('should handle mixed hyphens and underscores', () => {
    const result = generateInstallationSection('some-component_name');

    expect(result).toContain('SomeComponentName');
  });

  it('should handle already capitalized words', () => {
    const result = generateInstallationSection('PDF-Generator');

    expect(result).toContain('PDFGenerator');
  });

  it('should handle very long component names', () => {
    const result = generateInstallationSection('very-long-component-name-with-many-parts');

    expect(result).toContain('VeryLongComponentNameWithManyParts');
  });

  it('should handle component name that is just hyphens', () => {
    const result = generateInstallationSection('---');

    expect(result).toContain('default function MyComponent() {');
    // The toPascalCase will just capitalize the first char
  });

  it('should produce correct output structure', () => {
    const result = generateInstallationSection('test-component');

    expect(result).toMatch(/^\s*<PageSection title="Installation">/);
    expect(result).toContain('<Typography variant="body1">');
    expect(result).toContain('<Card className="mt-(--lsd-spacing-base)">');
    expect(result).toContain('<CardContent>');
    expect(result).toContain('<CodeExample');
    expect(result).toContain('useAccordion={false}');
    expect(result).toContain('</CardContent>');
    expect(result).toContain('</Card>');
    expect(result).toContain('</PageSection>');
  });

  it('should handle empty string component name', () => {
    const result = generateInstallationSection('');

    // toPascalCase will work with empty string
    expect(result).toContain('<PageSection title="Installation">');
  });

  it('should consistently use PascalCase throughout', () => {
    const result = generateInstallationSection('alert-dialog');

    // Should use AlertDialog in import, return statement, and Typography
    const matches = result.match(/AlertDialog/g);
    expect(matches).toBeTruthy();
    expect(matches?.length).toBeGreaterThanOrEqual(2);
  });
});

/**
 * Installation Generator Tests
 *
 * Tests for generating Installation sections
 */

import { describe, expect, it } from 'vitest';
import { generateInstallationSection } from '../../../scripts/docs-generator/generators/installation';

describe('Installation Generator', () => {
  describe('generateInstallationSection', () => {
    it('should generate section with PageSection wrapper', () => {
      const result = generateInstallationSection('accordion');
      expect(result).toContain('<PageSection title="Installation">');
      expect(result).toContain('</PageSection>');
    });

    it('should capitalize component name for description', () => {
      const result = generateInstallationSection('accordion');
      expect(result).toContain('Import the Accordion component from LSD:');
    });

    it('should capitalize component name for import', () => {
      const result = generateInstallationSection('button');
      expect(result).toContain('import { Button }');
    });

    it('should capitalize component name for usage', () => {
      const result = generateInstallationSection('input');
      expect(result).toContain('return <Input />');
    });

    it('should use correct import path', () => {
      const result = generateInstallationSection('card');
      expect(result).toContain("from '@nipsys/lsd'");
    });

    it('should include Card wrapper', () => {
      const result = generateInstallationSection('dropdown');
      expect(result).toContain('<Card className="mt-(--lsd-spacing-base)">');
      expect(result).toContain('</Card>');
    });

    it('should include CardContent', () => {
      const result = generateInstallationSection('alert');
      expect(result).toContain('<CardContent>');
      expect(result).toContain('</CardContent>');
    });

    it('should include CodeExample component', () => {
      const result = generateInstallationSection('badge');
      expect(result).toContain('<CodeExample');
      expect(result).toContain('</CodeExample>');
    });

    it('should set useAccordion to false', () => {
      const result = generateInstallationSection('breadcrumb');
      expect(result).toContain('useAccordion={false}');
    });

    it('should include default function name', () => {
      const result = generateInstallationSection('calendar');
      expect(result).toContain('export default function MyComponent()');
    });

    it('should handle kebab-case component names', () => {
      const result = generateInstallationSection('dropdown-menu');
      expect(result).toContain('import { DropdownMenu }');
      expect(result).toContain('return <DropdownMenu />');
    });

    it('should handle single word component names', () => {
      const result = generateInstallationSection('modal');
      expect(result).toContain('import { Modal }');
      expect(result).toContain('return <Modal />');
    });

    it('should handle uppercase component names', () => {
      const result = generateInstallationSection('AVATAR');
      expect(result).toContain('import { AVATAR }');
    });

    it('should maintain proper indentation and structure', () => {
      const result = generateInstallationSection('test');
      expect(result).toContain('          <PageSection title="Installation">');
      expect(result).toContain('          <Card');
      expect(result).toContain('            <CardContent>');
      expect(result).toContain('              <CodeExample');
    });

    it('should include template literal syntax for code', () => {
      const result = generateInstallationSection('progress');
      expect(result).toContain('code={`');
      expect(result).toContain('}`}');
    });

    it('should include proper spacing with LSD variables', () => {
      const result = generateInstallationSection('radio');
      expect(result).toContain('mt-(--lsd-spacing-base)');
    });

    it('should complete the installation section structure', () => {
      const result = generateInstallationSection('switch');

      // Check all required parts
      expect(result).toContain('<PageSection');
      expect(result).toContain('title="Installation"');
      expect(result).toContain('<Typography');
      expect(result).toContain('Import the');
      expect(result).toContain('component from LSD:');
      expect(result).toContain('<Card');
      expect(result).toContain('<CardContent');
      expect(result).toContain('<CodeExample');
      expect(result).toContain('import {');
      expect(result).toContain("from '@nipsys/lsd'");
      expect(result).toContain('export default function MyComponent');
      expect(result).toContain('return <');
      expect(result).toContain('/>');
    });

    it('should handle empty component name', () => {
      const result = generateInstallationSection('');
      expect(result).toContain('import { }');
      expect(result).toContain('return <>');
    });

    it('should handle special characters in component name', () => {
      const result = generateInstallationSection('my-component_v2');
      expect(result).toContain('import { My-component_v2 }');
      expect(result).toContain('return <My-component_v2 />');
    });

    it('should preserve component name casing in import', () => {
      const result = generateInstallationSection('MyComponent');
      expect(result).toContain('import { MyComponent }');
      expect(result).toContain('return <MyComponent />');
    });
  });
});

/**
 * Tests for page-generator.ts
 */

import { describe, expect, it, vi } from 'vitest';
import type { ComponentMetadata } from '../../parsers/metadata-extractor';
import type { TSDocMetadata } from '../../parsers/tsdoc-parser';
import type { LoadedExample } from '../../scanners/example-loader';
import { generatePage, type PageGeneratorConfig } from '../page-generator';

// Mock all the imported generator functions
vi.mock('../about', () => ({
  generateAboutSection: vi.fn(() => '        <!-- About Section -->'),
}));

vi.mock('../installation', () => ({
  generateInstallationSection: vi.fn(() => '        <!-- Installation Section -->'),
}));

vi.mock('../basic-usage', () => ({
  generateBasicUsageSection: vi.fn(() => '        <!-- Basic Usage Section -->'),
}));

vi.mock('../variants', () => ({
  generateVariantsSection: vi.fn(() => '        <!-- Variants Section -->'),
}));

vi.mock('../sizes', () => ({
  generateSizesSection: vi.fn(() => '        <!-- Sizes Section -->'),
}));

vi.mock('../features', () => ({
  generateFeaturesSection: vi.fn(() => '        <!-- Features Section -->'),
}));

vi.mock('../composition', () => ({
  generateCompositionSection: vi.fn(() => '        <!-- Composition Section -->'),
}));

vi.mock('../usage', () => ({
  generateUsageSection: vi.fn(() => '        <!-- Usage Section -->'),
}));

vi.mock('../api-reference', () => ({
  generateAPIReferenceSection: vi.fn(() => '        <!-- API Reference Section -->'),
}));

vi.mock('../accessibility', () => ({
  generateAccessibilitySection: vi.fn(() => '        <!-- Accessibility Section -->'),
}));

describe('page-generator.ts', () => {
  const createMockMetadata = (): ComponentMetadata => ({
    name: 'test-component',
    props: [],
    variants: [],
    sizes: [],
    exports: [],
    subComponents: [],
    filePath: '/test/path',
    isRadixComponent: false,
  });

  const createMockTSDocMetadata = (): TSDocMetadata => ({
    description: 'Test component description',
    pageDescription: 'Test component for page header',
    aboutDescription: 'Test component about text',
    customTags: {},
  });

  const createMockExample = (
    name: string,
    title: string,
    hasIframeSize = false
  ): LoadedExample => ({
    name,
    title,
    category: 'variant',
    path: `/examples/test/${name}/page.tsx`,
    code: '<TestComponent />',
    iframeSize: hasIframeSize ? 'md' : undefined,
  });

  describe('generatePage', () => {
    it('should generate a valid page with minimal configuration', () => {
      const config: PageGeneratorConfig = {
        componentName: 'test',
        metadata: createMockMetadata(),
        examples: [],
        tsdocMetadata: createMockTSDocMetadata(),
      };

      const result = generatePage(config);

      expect(result).toContain("'use client';");
      expect(result).toContain('export default function TestPage()');
      expect(result).toContain('title="Test"');
      expect(result).toContain('description="Test component for page header"');
      expect(result).toContain('<DocsLayout>');
      expect(result).toContain('<PageHeader');
      expect(result).toContain('<PageContent>');
      expect(result).toContain('</PageContent>');
      expect(result).toContain('</DocsLayout>');
      expect(result).toContain('useRef');
      expect(result).toContain('useSendThemeToIframes');
    });

    it('should generate page with navigation', () => {
      const config: PageGeneratorConfig = {
        componentName: 'accordion',
        metadata: createMockMetadata(),
        examples: [],
        tsdocMetadata: createMockTSDocMetadata(),
        navigation: {
          previous: { title: 'Alert', href: '/components/alert' },
          next: { title: 'Alert Dialog', href: '/components/alert-dialog' },
        },
      };

      const result = generatePage(config);

      expect(result).toContain('import { PageNavigation } from');
      expect(result).toContain('<PageNavigation');
      expect(result).toContain('Alert');
      expect(result).toContain("href: '/components/alert'");
      expect(result).toContain("href: '/components/alert-dialog'");
    });

    it('should generate page without navigation when not provided', () => {
      const config: PageGeneratorConfig = {
        componentName: 'test',
        metadata: createMockMetadata(),
        examples: [],
        tsdocMetadata: createMockTSDocMetadata(),
      };

      const result = generatePage(config);

      expect(result).not.toContain('{ PageNavigation }');
      expect(result).not.toContain('<PageNavigation');
    });

    it('should generate page with single example without iframe size', () => {
      const config: PageGeneratorConfig = {
        componentName: 'button',
        metadata: createMockMetadata(),
        examples: [createMockExample('basic', 'Basic Button')],
        tsdocMetadata: createMockTSDocMetadata(),
      };

      const result = generatePage(config);

      expect(result).toContain(
        "import { CODE as ButtonBasicButtonCODE } from '@/examples/button/basic/page';"
      );
      expect(result).not.toContain('SIZE');
      expect(result).toContain(
        'const ButtonBasicButtonIframeRef = useRef<HTMLIFrameElement>(null);'
      );
      expect(result).toContain('useSendThemeToIframes(');
      expect(result).toContain('ButtonBasicButtonIframeRef');
    });

    it('should generate page with single example with iframe size', () => {
      const config: PageGeneratorConfig = {
        componentName: 'dropdown',
        metadata: createMockMetadata(),
        examples: [createMockExample('menu', 'Dropdown Menu', true)],
        tsdocMetadata: createMockTSDocMetadata(),
      };

      const result = generatePage(config);

      expect(result).toContain(
        "import { CODE as DropdownDropdownMenuCODE } from '@/examples/dropdown/menu/page';"
      );
      expect(result).toContain(
        "import { SIZE as DropdownDropdownMenuSIZE } from '@/examples/dropdown/menu/page';"
      );
      expect(result).toContain(
        'const DropdownDropdownMenuIframeRef = useRef<HTMLIFrameElement>(null);'
      );
    });

    it('should generate page with multiple examples', () => {
      const config: PageGeneratorConfig = {
        componentName: 'accordion',
        metadata: createMockMetadata(),
        examples: [
          createMockExample('basic', 'Basic'),
          createMockExample('controlled', 'Controlled'),
          createMockExample('special', 'Special with Characters'),
        ],
        tsdocMetadata: createMockTSDocMetadata(),
      };

      const result = generatePage(config);

      expect(result).toContain(
        "import { CODE as AccordionBasicCODE } from '@/examples/accordion/basic/page';"
      );
      expect(result).toContain(
        "import { CODE as AccordionControlledCODE } from '@/examples/accordion/controlled/page';"
      );
      expect(result).toContain(
        "import { CODE as AccordionSpecialwithCharactersCODE } from '@/examples/accordion/special/page';"
      );

      expect(result).toContain('const AccordionBasicIframeRef = useRef<HTMLIFrameElement>(null);');
      expect(result).toContain(
        'const AccordionControlledIframeRef = useRef<HTMLIFrameElement>(null);'
      );
      expect(result).toContain(
        'const AccordionSpecialwithCharactersIframeRef = useRef<HTMLIFrameElement>(null);'
      );

      expect(result).toContain('useSendThemeToIframes(');
      expect(result).toContain('AccordionBasicIframeRef,');
      expect(result).toContain('AccordionControlledIframeRef,');
      expect(result).toContain('AccordionSpecialwithCharactersIframeRef');
    });

    it('should normalize description whitespace in PageHeader', () => {
      const config: PageGeneratorConfig = {
        componentName: 'test',
        metadata: createMockMetadata(),
        examples: [],
        tsdocMetadata: {
          ...createMockTSDocMetadata(),
          pageDescription: 'Test  component  with   extra    spaces',
        },
      };

      const result = generatePage(config);

      expect(result).toContain('description="Test component with extra spaces"');
    });

    it('should capitalize component name in title', () => {
      const config: PageGeneratorConfig = {
        componentName: 'accordion',
        metadata: createMockMetadata(),
        examples: [],
        tsdocMetadata: createMockTSDocMetadata(),
      };

      const result = generatePage(config);

      expect(result).toContain('title="Accordion"');
    });

    it('should handle multi-word component names', () => {
      const config: PageGeneratorConfig = {
        componentName: 'alert-dialog',
        metadata: createMockMetadata(),
        examples: [],
        tsdocMetadata: createMockTSDocMetadata(),
      };

      const result = generatePage(config);

      expect(result).toContain('title="Alert-dialog"');
      expect(result).toContain('export default function AlertDialogPage()');
    });

    it('should handle component names with underscores', () => {
      const config: PageGeneratorConfig = {
        componentName: 'date_picker',
        metadata: createMockMetadata(),
        examples: [],
        tsdocMetadata: createMockTSDocMetadata(),
      };

      const result = generatePage(config);

      expect(result).toContain('title="Date_picker"');
      expect(result).toContain('export default function DatePickerPage()');
    });

    it('should generate all required imports', () => {
      const config: PageGeneratorConfig = {
        componentName: 'test',
        metadata: createMockMetadata(),
        examples: [],
        tsdocMetadata: createMockTSDocMetadata(),
      };

      const result = generatePage(config);

      expect(result).toContain(
        "import { Card, CardContent, CardDescription, CardHeader, CardTitle, Typography } from '@nipsys/lsd';"
      );
      expect(result).toContain("import { useRef } from 'react';");
      expect(result).toContain("import { CodeExample } from '@/components/docs/CodeExample';");
      expect(result).toContain("import { DocsLayout } from '@/components/docs/DocsLayout';");
      expect(result).toContain("import { IframeExample } from '@/components/docs/IframeExample';");
      expect(result).toContain("import { PageContent } from '@/components/docs/PageContent';");
      expect(result).toContain("import { PageHeader } from '@/components/docs/PageHeader';");
      expect(result).toContain("import { PageSection } from '@/components/docs/PageSection';");
      expect(result).toContain(
        "import { useSendThemeToIframes } from '@/components/docs/useSendIframes';"
      );
    });

    it('should include all generated sections', () => {
      const config: PageGeneratorConfig = {
        componentName: 'test',
        metadata: createMockMetadata(),
        examples: [],
        tsdocMetadata: createMockTSDocMetadata(),
      };

      const result = generatePage(config);

      expect(result).toContain('<!-- About Section -->');
      expect(result).toContain('<!-- Installation Section -->');
      expect(result).toContain('<!-- Basic Usage Section -->');
      expect(result).toContain('<!-- Variants Section -->');
      expect(result).toContain('<!-- Sizes Section -->');
      expect(result).toContain('<!-- Features Section -->');
      expect(result).toContain('<!-- Usage Section -->');
      expect(result).toContain('<!-- Composition Section -->');
      expect(result).toContain('<!-- API Reference Section -->');
      expect(result).toContain('<!-- Accessibility Section -->');
    });

    it('should generate proper useSendThemeToIframes call with single example', () => {
      const config: PageGeneratorConfig = {
        componentName: 'test',
        metadata: createMockMetadata(),
        examples: [createMockExample('basic', 'Basic')],
        tsdocMetadata: createMockTSDocMetadata(),
      };

      const result = generatePage(config);

      expect(result).toContain('useSendThemeToIframes(');
      expect(result).toContain('TestBasicIframeRef');
      expect(result).toContain(');');
    });

    it('should handle example titles with spaces correctly', () => {
      const config: PageGeneratorConfig = {
        componentName: 'test',
        metadata: createMockMetadata(),
        examples: [createMockExample('special', 'Special With Spaces')],
        tsdocMetadata: createMockTSDocMetadata(),
      };

      const result = generatePage(config);

      expect(result).toContain('TestSpecialWithSpacesIframeRef');
      expect(result).toContain('TestSpecialWithSpacesCODE');
    });

    it('should handle example titles with dashes correctly', () => {
      const config: PageGeneratorConfig = {
        componentName: 'test',
        metadata: createMockMetadata(),
        examples: [createMockExample('with-icons', 'With Icons')],
        tsdocMetadata: createMockTSDocMetadata(),
      };

      const result = generatePage(config);

      // Component name should be PascalCase: TestWithIcons
      expect(result).toContain('TestWithIconsCODE');
      expect(result).toContain('TestWithIconsIframeRef');
    });

    it('should normalize multi-line descriptions', () => {
      const config: PageGeneratorConfig = {
        componentName: 'test',
        metadata: createMockMetadata(),
        examples: [],
        tsdocMetadata: {
          description: 'Test component description',
          pageDescription: '  First line  \n  Second line with    extra spaces  ',
          aboutDescription: 'Test component about text',
          customTags: {},
        },
      };

      const result = generatePage(config);

      expect(result).toContain('description="First line Second line with extra spaces"');
    });

    it('should handle navigation with only previous', () => {
      const config: PageGeneratorConfig = {
        componentName: 'accordion',
        metadata: createMockMetadata(),
        examples: [],
        tsdocMetadata: createMockTSDocMetadata(),
        navigation: {
          previous: { title: 'Alert', href: '/components/alert' },
        },
      };

      const result = generatePage(config);

      expect(result).toContain('<PageNavigation');
      expect(result).toContain('Alert');
      expect(result).toContain("href: '/components/alert'");
      expect(result).not.toContain('next:');
    });

    it('should handle navigation with only next', () => {
      const config: PageGeneratorConfig = {
        componentName: 'accordion',
        metadata: createMockMetadata(),
        examples: [],
        tsdocMetadata: createMockTSDocMetadata(),
        navigation: {
          next: { title: 'Alert Dialog', href: '/components/alert-dialog' },
        },
      };

      const result = generatePage(config);

      expect(result).toContain('<PageNavigation');
      expect(result).toContain('Alert Dialog');
      expect(result).toContain("href: '/components/alert-dialog'");
      expect(result).not.toContain('previous:');
    });
  });
});

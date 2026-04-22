/**
 * Page Generator
 *
 * This module generates complete documentation page.tsx files for components.
 * It combines metadata, examples, and TSDoc information into a structured page
 * following the LSD documentation patterns.
 */

import type { ComponentMetadata } from '../parsers/metadata-extractor';
import type { TSDocMetadata } from '../parsers/tsdoc-parser';
import type { LoadedExample } from '../scanners/example-loader';
import { generateAboutSection } from './about';
import { generateAccessibilitySection } from './accessibility';
import { generateAPIReferenceSection } from './api-reference';
import { generateBasicUsageSection } from './basic-usage';
import { generateCompositionSection } from './composition';
import { generateFeaturesSection } from './features';
import { generateInstallationSection } from './installation';
import { generateSizesSection } from './sizes';
import { generateUsageSection } from './usage';
import { generateVariantsSection } from './variants';

/**
 * Configuration for page generation
 */
export interface PageGeneratorConfig {
  /** Component name (e.g., "accordion") */
  componentName: string;
  /** Component metadata including props, variants, etc. */
  metadata: ComponentMetadata;
  /** Loaded examples with code */
  examples: LoadedExample[];
  /** TSDoc metadata including custom tags */
  tsdocMetadata: TSDocMetadata;
  /** Optional navigation info */
  navigation?: {
    previous?: { title: string; href: string };
    next?: { title: string; href: string };
  };
}

/**
 * Generate a complete documentation page.tsx file
 *
 * Creates a well-formatted page following the LSD documentation structure with:
 * - 'use client' directive
 * - Imports for required components
 * - useRef for iframe refs
 * - useSendThemeToIframes hook
 * - PageHeader with title and description
 * - PageSections: About, Installation, Variants, Sizes, Features, API Reference, Accessibility
 * - PageNavigation (if navigation info provided)
 *
 * @param config - Page generation configuration
 * @returns Generated page.tsx content as a string
 *
 * @example
 * ```typescript
 * const page = generatePage({
 *   componentName: 'accordion',
 *   metadata: componentMetadata,
 *   examples: loadedExamples,
 *   tsdocMetadata: tsdocData,
 *   navigation: {
 *     previous: { title: 'Alert', href: '/components/alert' },
 *     next: { title: 'Alert Dialog', href: '/components/alert-dialog' },
 *   },
 * });
 * ```
 */
export function generatePage(config: PageGeneratorConfig): string {
  const { componentName, metadata, examples, tsdocMetadata, navigation } = config;

  // Generate component name in PascalCase
  const componentPascal = toPascalCase(componentName);
  const componentNameCapitalized = componentName.charAt(0).toUpperCase() + componentName.slice(1);

  // Generate imports for examples (both CODE and SIZE)
  const exampleImports = examples
    .map((example, _index) => {
      const titleClean = example.title.replace(/\s+/g, '');
      let imports = `import { CODE as ${componentPascal}${titleClean}CODE } from '@/examples/${componentName}/${example.name}/page';`;
      if (example.iframeSize) {
        imports += `\nimport { SIZE as ${componentPascal}${titleClean}SIZE } from '@/examples/${componentName}/${example.name}/page';`;
      }
      return imports;
    })
    .join('\n');

  // Generate useRef declarations for each example
  const useRefDeclarations = examples
    .map(
      (example, _index) =>
        `  const ${componentPascal}${example.title.replace(/\s+/g, '')}IframeRef = useRef<HTMLIFrameElement>(null);`
    )
    .join('\n');

  // Generate useSendThemeToIframes call with all refs
  const useSendThemeToIframesCall = [
    '  useSendThemeToIframes(',
    ...examples.map(
      (example, index) =>
        `    ${componentPascal}${example.title.replace(/\s+/g, '')}IframeRef${index === examples.length - 1 ? '' : ','}`
    ),
    '  );',
  ].join('\n');

  // Generate section content
  const aboutSection = generateAboutSection(componentName, tsdocMetadata);
  const installationSection = generateInstallationSection(componentName);
  const basicUsageSection = generateBasicUsageSection(componentName, examples, metadata);
  const variantsSection = generateVariantsSection(componentName, examples, metadata);
  const sizesSection = generateSizesSection(componentName, examples, metadata);
  const featuresSection = generateFeaturesSection(componentName, examples, metadata, tsdocMetadata);
  const compositionSection = generateCompositionSection(tsdocMetadata);
  const usageSection = generateUsageSection(tsdocMetadata);
  const apiReferenceSection = generateAPIReferenceSection(
    metadata.props,
    componentName,
    metadata.isRadixComponent
  );
  const accessibilitySection = generateAccessibilitySection(tsdocMetadata);

  // Generate PageNavigation if navigation info is provided
  const pageNavigation = navigation
    ? `
        <PageNavigation${
          navigation.previous
            ? `
          previous={{
            title: '${navigation.previous.title}',
            href: '${navigation.previous.href}',
          }}`
            : ''
        }${
          navigation.next
            ? `
          next={{
            title: '${navigation.next.title}',
            href: '${navigation.next.href}',
          }}`
            : ''
        } />`
    : '';

  // Add CodeBlock import only if composition section exists
  const codeBlockImport = compositionSection
    ? "import { CodeBlock } from '@/components/docs/CodeBlock';\n"
    : '';

  // Build the complete page
  return `'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, Typography } from '@nipsys/lsd';
import { useRef } from 'react';
import { CodeExample } from '@/components/docs/CodeExample';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { IframeExample } from '@/components/docs/IframeExample';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';${pageNavigation ? "\nimport { PageNavigation } from '@/components/docs/PageNavigation';" : ''}
import { PageSection } from '@/components/docs/PageSection';
import { useSendThemeToIframes } from '@/components/docs/useSendIframes';
${codeBlockImport}${exampleImports}

export default function ${componentPascal}Page() {
${useRefDeclarations}

 ${useSendThemeToIframesCall}

  return (
    <DocsLayout>
      <PageHeader
        title="${componentNameCapitalized}"
        description="${tsdocMetadata.pageDescription?.replace(/\s+/g, ' ').trim()}"
      />

      <PageContent>
${aboutSection}

${installationSection}

${basicUsageSection}

${variantsSection}

${sizesSection}

${featuresSection}

${usageSection}

${compositionSection}

${apiReferenceSection}

${accessibilitySection}${pageNavigation}
      </PageContent>
    </DocsLayout>
  );
}
`;
}

/**
 * Convert a kebab-case string to PascalCase
 *
 * @param str - The kebab-case string (e.g., 'accordion', 'with-icons')
 * @returns The PascalCase string (e.g., 'Accordion', 'WithIcons')
 */
function toPascalCase(str: string): string {
  return str
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

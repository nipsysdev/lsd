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
 * Strip component name prefix from description
 *
 * If the first line of description starts with "ComponentName - " or similar,
 * removes the prefix from only the first line. Handles multi-line descriptions.
 * Supports both PascalCase and kebab-case variations.
 *
 * @param description - The TSDoc description (may contain newlines)
 * @param componentNameCapitalized - Capitalized component name to strip
 * @returns Description with component name prefix removed from first line
 */
function stripComponentNamePrefix(description: string, componentNameCapitalized: string): string {
  // Split into lines
  const lines = description.split('\n');
  if (lines.length === 0) {
    return description;
  }

  let firstLine = lines[0].trim();
  let stripped = false;

  // Try PascalCase prefix (e.g., "Calendar - ")
  let prefix = `${componentNameCapitalized} - `;
  if (firstLine.startsWith(prefix)) {
    firstLine = firstLine.slice(prefix.length).trim();
    stripped = true;
  } else {
    // Try PascalCase prefix without space after dash (e.g., "Calendar -")
    prefix = `${componentNameCapitalized} -`;
    if (firstLine.startsWith(prefix)) {
      firstLine = firstLine.slice(prefix.length).trim();
      stripped = true;
    } else {
      // Try kebab-case prefix (e.g., "calendar - ")
      const kebabCase = componentNameCapitalized.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
      prefix = `${kebabCase} - `;
      if (firstLine.startsWith(prefix)) {
        firstLine = firstLine.slice(prefix.length).trim();
        stripped = true;
      } else {
        // Try kebab-case prefix without space after dash
        prefix = `${kebabCase} -`;
        if (firstLine.startsWith(prefix)) {
          firstLine = firstLine.slice(prefix.length).trim();
          stripped = true;
        }
      }
    }
  }

  // Reassemble with the processed first line
  if (stripped) {
    lines[0] = firstLine;
    return lines.join('\n');
  }

  return description;
}

/**
 * Normalize TSDoc description for display
 *
 * Handles multi-line descriptions by:
 * 1. Splitting into lines
 * 2. Stripping component name prefix from first line only
 * 3. Normalizing whitespace in each line
 * 4. Rejoining lines with proper spacing
 *
 * @param description - The TSDoc description (may contain newlines)
 * @param componentName - Component name for prefix stripping
 * @returns Normalized description for display
 */
function _normalizeDescription(description: string, componentName: string): string {
  // Strip prefix from first line
  const stripped = stripComponentNamePrefix(description, componentName);

  // Split into lines, normalize each, then rejoin with spaces
  return stripped
    .split('\n')
    .map(line => line.trim())
    .filter(line => line)
    .map(line => line.replace(/\s+/g, ' '))
    .join(' ')
    .trim();
}

/**
 * Normalize text formatting
 *
 * - Removes double spaces and extra whitespace
 * - Removes trailing spaces
 * @param text - Text to normalize
 * @returns Normalized text
 */
function _normalizeText(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
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

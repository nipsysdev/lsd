/**
 * Basic Usage Section Generator
 *
 * This module generates the Usage section for documentation pages.
 * It displays examples categorized as 'usage' via @docSection tag.
 */

import type { ComponentMetadata } from '../parsers/metadata-extractor';
import type { LoadedExample } from '../scanners/example-loader';

/**
 * Generate the Basic Usage section
 *
 * Creates a section showing the basic/default component usage.
 * Shows examples categorized as 'usage' via @docSection tag.
 *
 * @param componentName - Name of the component (e.g., "input")
 * @param examples - Array of loaded examples
 * @param metadata - Component metadata
 * @returns Generated Basic Usage section as a string, or empty string if no usage examples
 */
export function generateBasicUsageSection(
  componentName: string,
  examples: LoadedExample[],
  _metadata: ComponentMetadata
): string {
  // Filter examples categorized as 'usage'
  const usageExamples = examples.filter(example => example.category === 'usage');

  if (usageExamples.length === 0) {
    return '';
  }

  const componentPascal = toPascalCase(componentName);

  // Generate content for usage examples
  const usageContent = usageExamples
    .map(example => {
      const refName = `${componentPascal}${example.title.replace(/\s+/g, '')}IframeRef`;
      const codeName = `${componentPascal}${example.title.replace(/\s+/g, '')}CODE`;

      if (!example.iframeSize) {
        throw new Error(
          `Example ${componentName}/${example.name} must export a SIZE constant (e.g., export const SIZE = 'sm';)`
        );
      }

      return `          <Card className="mt-(--lsd-spacing-base)">
              <CardHeader>
                <CardTitle>${example.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <IframeExample
                  ref={${refName}}
                  size={${componentPascal}${example.title.replace(/\s+/g, '')}SIZE}
                  src="/examples/${componentName}/${example.name}"
                  title="${example.title} Example"
                />
                <CodeExample code={${codeName}} />
              </CardContent>
            </Card>`;
    })
    .join('\n');

  return `        <PageSection title="Usage">
           <Typography variant="body1">
             The simplest form of the component with default styling.
           </Typography>

${usageContent}
        </PageSection>`;
}

/**
 * Convert a kebab-case string to PascalCase
 */
function toPascalCase(str: string): string {
  return str
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

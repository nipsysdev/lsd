/**
 * Sizes Section Generator
 *
 * This module generates the Sizes section for documentation pages.
 * It organizes size examples and creates Cards with IframeExample
 * and CodeExample components.
 */

import type { ComponentMetadata } from '../parsers/metadata-extractor';
import type { LoadedExample } from '../scanners/example-loader';

/**
 * Generate the Sizes section
 *
 * Creates a section showing different sizes of the component.
 * Filters examples by the 'size' category and creates Cards for each.
 *
 * @param componentName - Name of the component (e.g., "accordion")
 * @param examples - Array of loaded examples
 * @param metadata - Component metadata
 * @returns Generated Sizes section as a string, or empty string if no size examples
 */
export function generateSizesSection(
  componentName: string,
  examples: LoadedExample[],
  _metadata: ComponentMetadata
): string {
  // Filter examples that belong to the size category
  const sizeExamples = examples.filter(example => example.category === 'size');

  if (sizeExamples.length === 0) {
    return '';
  }

  const componentPascal = toPascalCase(componentName);

  // Generate content for size examples
  const sizesContent = sizeExamples
    .map(example => {
      const refName = `${componentPascal}${example.title.replace(/\s+/g, '')}IframeRef`;
      const codeName = `${componentPascal}${example.title.replace(/\s+/g, '')}CODE`;
      const sizeName = `${componentPascal}${example.title.replace(/\s+/g, '')}SIZE`;

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
                 size={${sizeName}}
                 src="/examples/${componentName}/${example.name}"
                 title="${example.title} Example"
               />
               <CodeExample code={${codeName}} />
             </CardContent>
           </Card>`;
    })
    .join('\n');

  return `        <PageSection title="Sizes">
          <Typography variant="body1">
            Component sizes for different contexts and visual hierarchy.
          </Typography>

${sizesContent}
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

/**
 * Variants Section Generator
 *
 * This module generates the Variants section for documentation pages.
 * It organizes examples by variant category and creates Cards with IframeExample
 * and CodeExample components.
 */

import type { ComponentMetadata } from '../parsers/metadata-extractor';
import type { LoadedExample } from '../scanners/example-loader';

/**
 * Generate the Variants section
 *
 * Creates a section showing different variants of the component.
 * Groups examples by their category (e.g., 'variant', 'primary', 'ghost')
 * and creates Cards for each group.
 *
 * @param componentName - Name of the component (e.g., "accordion")
 * @param examples - Array of loaded examples
 * @param metadata - Component metadata
 * @returns Generated Variants section as a string, or empty string if no variant examples
 */
export function generateVariantsSection(
  componentName: string,
  examples: LoadedExample[],
  _metadata: ComponentMetadata
): string {
  // Filter examples that belong to variant categories only (exclude basic examples)
  const variantCategories = ['variant', 'primary', 'rounded', 'ghost', 'semantic'];
  const variantExamples = examples.filter(example => variantCategories.includes(example.category));

  if (variantExamples.length === 0) {
    return '';
  }

  const componentPascal = toPascalCase(componentName);

  // Group examples by their category
  const examplesByCategory = new Map<string, LoadedExample[]>();
  for (const example of variantExamples) {
    const category = example.category;
    if (!examplesByCategory.has(category)) {
      examplesByCategory.set(category, []);
    }
    examplesByCategory.get(category)!.push(example);
  }

  // Generate content for each category
  const categoryContent = Array.from(examplesByCategory.entries())
    .map(([category, categoryExamples]) => {
      const title = category.charAt(0).toUpperCase() + category.slice(1);
      const sectionVariantsTitle = category === 'variant' ? 'Variants' : `${title} Variants`;

      return categoryExamples
        .map(example =>
          generateSingleExampleCard(componentName, componentPascal, example, sectionVariantsTitle)
        )
        .join('\n');
    })
    .join('\n');

  return `        <PageSection title="Variants">
          <Typography variant="body1">
            Component variants for different visual styles and use cases.
          </Typography>

${categoryContent}
        </PageSection>`;
}

/**
 * Generate a Card for a single example
 */
function generateSingleExampleCard(
  componentName: string,
  componentPascal: string,
  example: LoadedExample,
  _sectionVariantsTitle: string
): string {
  const refName = `${componentPascal}${example.title.replace(/\s+/g, '')}IframeRef`;
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
               <CodeExample code={${componentPascal}${example.title.replace(/\s+/g, '')}CODE} />
             </CardContent>
           </Card>`;
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

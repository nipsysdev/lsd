/**
 * Features Section Generator
 *
 * This module generates the Features section for documentation pages.
 * It organizes feature examples and creates Cards with IframeExample
 * and CodeExample components. It also integrates TSDoc feature tags
 * to provide descriptive content for each feature.
 */

import type { ComponentMetadata } from '../parsers/metadata-extractor';
import type { TSDocMetadata } from '../parsers/tsdoc-parser';
import type { LoadedExample } from '../scanners/example-loader';

/**
 * Categories that are handled by other sections (not Features)
 */
const EXCLUDED_CATEGORIES = ['variant', 'size', 'usage', 'primary', 'rounded', 'ghost', 'semantic'];

/**
 * Generate the Features section
 *
 * Creates a section showing additional features and capabilities of the component.
 * Filters out examples that belong to other sections (variants, sizes) and
 * creates Cards for each remaining example. Integrates TSDoc feature tags
 * to provide descriptive content for each feature.
 *
 * @param componentName - Name of the component (e.g., "accordion")
 * @param examples - Array of loaded examples
 * @param metadata - Component metadata
 * @param tsdocMetadata - TSDoc metadata containing custom tags
 * @returns Generated Features section as a string, or empty string if no feature examples
 */
export function generateFeaturesSection(
  componentName: string,
  examples: LoadedExample[],
  _metadata: ComponentMetadata,
  tsdocMetadata: TSDocMetadata
): string {
  // Filter examples that don't belong to excluded categories
  const featureExamples = examples.filter(
    example => !EXCLUDED_CATEGORIES.includes(example.category)
  );

  if (featureExamples.length === 0) {
    return '';
  }

  const componentPascal = toPascalCase(componentName);

  // Generate content for feature examples
  const featuresContent = featureExamples
    .map(example => {
      const refName = `${componentPascal}${example.title.replace(/\s+/g, '')}IframeRef`;
      const codeName = `${componentPascal}${example.title.replace(/\s+/g, '')}CODE`;
      const sizeName = `${componentPascal}${example.title.replace(/\s+/g, '')}SIZE`;

      if (!example.iframeSize) {
        throw new Error(
          `Example ${componentName}/${example.name} must export a SIZE constant (e.g., export const SIZE = 'sm';)`
        );
      }

      // Look up TSDoc feature tag for this example (optional enhancement)
      const convertedName = toCamelCase(example.name);
      const featureTagName = `docSectionFeatures${convertedName.charAt(0).toUpperCase() + convertedName.slice(1)}`;

      // TSDoc feature description is optional (enhancement only)
      const tsdocDescription = tsdocMetadata.customTags[featureTagName];
      let extraContent = '';
      if (tsdocDescription) {
        extraContent += `
              <Typography variant="body2" className="mt-(--lsd-spacing-smaller) whitespace-pre-line">${tsdocDescription}</Typography>`;
      }

      return `          <Card className="mt-(--lsd-spacing-base)">
             <CardHeader>
               <CardTitle>${example.title}</CardTitle>${extraContent}
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

  return `        <PageSection title="Features">
          <Typography variant="body1">
            Additional features and capabilities of the component.
          </Typography>

${featuresContent}
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

/**
 * Convert a kebab-case string to camelCase for TSDoc tag lookup
 *
 * Converts example names (kebab-case) to camelCase format for TSDoc tag lookup.
 * Example: "default-value" -> "defaultValue"
 *
 * @param str - The kebab-case string (e.g., "default-value", "with-icons")
 * @returns The camelCase string (e.g., "defaultValue", "withIcons")
 */
function toCamelCase(str: string): string {
  return str
    .split(/[-_]/)
    .map((word, index) => {
      if (index === 0) {
        // First word stays lowercase
        return word.toLowerCase();
      }
      // Subsequent words start with uppercase
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}

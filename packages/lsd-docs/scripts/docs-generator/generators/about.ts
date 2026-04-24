/**
 * About Section Generator
 *
 * This module generates the About section for documentation pages.
 * It creates a brief introduction about the component.
 */

import type { TSDocMetadata } from '../parsers/tsdoc-parser';

/**
 * Normalize text formatting
 *
 * - Removes extra whitespace
 * - Removes leading/trailing spaces
 * @param text - Text to normalize
 * @returns Normalized text
 */
function normalizeText(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}

/**
 * Convert a kebab-case string to PascalCase
 *
 * @param str - The kebab-case string (e.g., 'alert-dialog')
 * @returns The PascalCase string (e.g., 'AlertDialog')
 */
function toPascalCase(str: string): string {
  return str
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

export function generateAboutSection(componentName: string, tsdocMetadata: TSDocMetadata): string {
  const componentPascal = toPascalCase(componentName);

  // aboutDescription is required (validation in TSDoc parser)
  if (!tsdocMetadata.aboutDescription) {
    throw new Error(
      `Component ${componentName} must have @docSectionAbout custom tag with content.`
    );
  }

  const normalizedDescription = normalizeText(tsdocMetadata.aboutDescription);

  return `        <PageSection title="About ${componentPascal}">
            <Typography variant="body1" className="block">
              ${normalizedDescription}
            </Typography>
          </PageSection>`;
}

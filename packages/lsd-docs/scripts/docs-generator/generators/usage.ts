/**
 * Usage Section Generator
 *
 * This module generates the Usage section for documentation pages.
 * It extracts usage information from TSDoc custom tags and generates
 * subsections for Single Mode and Multiple Mode usage patterns.
 */

import type { TSDocMetadata } from '../parsers/tsdoc-parser';

/**
 * Generate the Usage section
 *
 * Creates a section with usage information extracted from TSDoc tags.
 * Includes subsections for Single Mode and Multiple Mode usage patterns
 * if the corresponding tags are present in the TSDoc metadata.
 *
 * TSDoc tags used:
 * - @docSectionUsageSingleMode: Single mode usage information
 * - @docSectionUsageMultipleMode: Multiple mode usage information
 *
 * @param tsdocMetadata - TSDoc metadata containing custom tags
 * @returns Generated Usage section as a string, or empty string if no usage info
 *
 * @example
 * ```typescript
 * const usage = generateUsageSection({
 *   description: 'Component description',
 *   customTags: {
 *     'docSectionUsageSingleMode': 'Use type="single" when you want...',
 *     'docSectionUsageMultipleMode': 'Use type="multiple" when users...',
 *   }
 * });
 * // Returns PageSection with Single Mode and Multiple Mode subsections
 * ```
 */
export function generateUsageSection(tsdocMetadata: TSDocMetadata): string {
  const singleMode = tsdocMetadata.customTags.docSectionUsageSingleMode;
  const multipleMode = tsdocMetadata.customTags.docSectionUsageMultipleMode;

  // If no usage information is available, return empty string
  if (!singleMode && !multipleMode) {
    return '';
  }

  let sectionContent = '';

  // Add Single Mode subsection if available
  if (singleMode) {
    sectionContent += generateSingleModeSubsection(singleMode);
  }

  // Add Multiple Mode subsection if available
  if (multipleMode) {
    sectionContent += generateMultipleModeSubsection(multipleMode);
  }

  return `        <PageSection title="Usage">
          <Typography variant="body1">
            Different usage modes provide flexibility for various use cases.
          </Typography>

${sectionContent}
        </PageSection>`;
}

/**
 * Generate Single Mode subsection
 *
 * @param singleModeInfo - Single mode usage information from TSDoc
 * @returns Generated subsection as a string
 */
function generateSingleModeSubsection(singleModeInfo: string): string {
  // Trim leading/trailing whitespace and normalize internal spaces
  let trimmedInfo = singleModeInfo.trim();
  // Replace multiple spaces with single space
  trimmedInfo = trimmedInfo.replace(/\s{2,}/g, ' ');
  return `          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Single Mode</CardTitle>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="whitespace-pre-line">
                ${trimmedInfo}
              </Typography>
            </CardContent>
          </Card>
`;
}

/**
 * Generate Multiple Mode subsection
 *
 * @param multipleModeInfo - Multiple mode usage information from TSDoc
 * @returns Generated subsection as a string
 */
function generateMultipleModeSubsection(multipleModeInfo: string): string {
  // Trim leading/trailing whitespace and normalize internal spaces
  let trimmedInfo = multipleModeInfo.trim();
  // Replace multiple spaces with single space
  trimmedInfo = trimmedInfo.replace(/\s{2,}/g, ' ');
  return `          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Multiple Mode</CardTitle>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="whitespace-pre-line">
                ${trimmedInfo}
              </Typography>
            </CardContent>
          </Card>
`;
}

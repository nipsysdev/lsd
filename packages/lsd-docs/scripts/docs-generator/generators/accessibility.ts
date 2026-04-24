/**
 * Accessibility Section Generator
 *
 * This module generates the Accessibility section for documentation pages.
 * It extracts accessibility information from TSDoc custom tags and generates
 * subsections for Keyboard Navigation, ARIA Attributes, and Focus States.
 */

import type { TSDocMetadata } from '../parsers/tsdoc-parser';

/**
 * Generate the Accessibility section
 *
 * Creates a section with accessibility information extracted from TSDoc tags.
 * Includes subsections for Keyboard Navigation, ARIA Attributes, and Focus States
 * if the corresponding tags are present in the TSDoc metadata.
 *
 * TSDoc tags used:
 * - @docSectionAccessibilityKeyboard: Keyboard navigation information
 * - @docSectionAccessibilityAria: ARIA attributes information
 * - @docSectionAccessibilityFocus: Focus states information
 *
 * @param tsdocMetadata - TSDoc metadata containing custom tags
 * @returns Generated Accessibility section as a string, or empty string if no accessibility info
 *
 * @example
 * ```typescript
 * const accessibility = generateAccessibilitySection({
 *   description: 'Component description',
 *   customTags: {
 *     'docSectionAccessibilityKeyboard': 'Tab, Enter, Space navigates component',
 *     'docSectionAccessibilityAria': 'Uses aria-label for labels',
 *   }
 * });
 * // Returns PageSection with Keyboard and ARIA subsections
 * ```
 */
export function generateAccessibilitySection(tsdocMetadata: TSDocMetadata): string {
  const keyboard = tsdocMetadata.customTags.docSectionAccessibilityKeyboard;
  const aria = tsdocMetadata.customTags.docSectionAccessibilityAria;
  const focus = tsdocMetadata.customTags.docSectionAccessibilityFocus;

  // If no accessibility information is available, return empty string
  if (!keyboard && !aria && !focus) {
    return '';
  }

  let sectionContent = '';

  // Add Keyboard Navigation subsection if available
  if (keyboard) {
    sectionContent += generateKeyboardSubsection(keyboard);
  }

  // Add ARIA Attributes subsection if available
  if (aria) {
    sectionContent += generateARIAAttributesSubsection(aria);
  }

  // Add Focus States subsection if available
  if (focus) {
    sectionContent += generateFocusStatesSubsection(focus);
  }

  return `        <PageSection title="Accessibility">
          <Typography variant="body1">
            The component follows accessibility best practices for screen readers and keyboard
            navigation.
          </Typography>

${sectionContent}
        </PageSection>`;
}

/**
 * Generate Keyboard Navigation subsection
 *
 * @param keyboardInfo - Keyboard navigation information from TSDoc
 * @returns Generated subsection as a string
 */
function generateKeyboardSubsection(keyboardInfo: string): string {
  const keyboardItems = parseAccessibilityItems(keyboardInfo);

  const itemsContent = keyboardItems
    .map(
      item => `              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • ${formatAccessibilityItem(item)}
              </Typography>`
    )
    .join('\n');

  return `          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Keyboard shortcuts and navigation</CardDescription>
            </CardHeader>
            <CardContent>
${itemsContent}
            </CardContent>
          </Card>
`;
}

/**
 * Generate ARIA Attributes subsection
 *
 * @param ariaInfo - ARIA attributes information from TSDoc
 * @returns Generated subsection as a string
 */
function generateARIAAttributesSubsection(ariaInfo: string): string {
  const ariaItems = parseAccessibilityItems(ariaInfo);

  const itemsContent = ariaItems
    .map(
      item => `              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • ${formatAccessibilityItem(item)}
              </Typography>`
    )
    .join('\n');

  return `          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>ARIA Attributes</CardTitle>
              <CardDescription>Proper ARIA attributes for screen readers</CardDescription>
            </CardHeader>
            <CardContent>
${itemsContent}
            </CardContent>
          </Card>
`;
}

/**
 * Generate Focus States subsection
 *
 * @param focusInfo - Focus states information from TSDoc
 * @returns Generated subsection as a string
 */
function generateFocusStatesSubsection(focusInfo: string): string {
  const focusItems = parseAccessibilityItems(focusInfo);

  const itemsContent = focusItems
    .map(
      item => `              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • ${formatAccessibilityItem(item)}
              </Typography>`
    )
    .join('\n');

  return `          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Focus States</CardTitle>
              <CardDescription>Visible focus indicators for keyboard users</CardDescription>
            </CardHeader>
            <CardContent>
${itemsContent}
            </CardContent>
          </Card>
`;
}

/**
 * Parse accessibility items from a string
 *
 * Splits the string by newlines and filters out empty lines.
 * Handles both properly separated items and inline items with bullet points.
 *
 * @param content - Content to parse
 * @returns Array of accessibility items
 */
function parseAccessibilityItems(content: string): string[] {
  // First try splitting by newlines
  let items = content
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0);

  // If we only got one item but it contains multiple bullet points, split them
  if (items.length === 1 && items[0]) {
    const item = items[0];
    // Check for bullet points with various spacing patterns
    if (item.includes(' • ') || (item.match(/•/g)?.length ?? 0) > 1) {
      // Split by bullet points, keeping the bullet with each item
      items = item.split(/(•)/).reduce<string[]>((acc, part, index, parts) => {
        if (part === '•') {
          // This is a bullet - the next part should be its content
          const nextPart = parts[index + 1];
          if (nextPart) {
            acc.push(`• ${nextPart.trim()}`);
          }
        } else if (part.trim() && !part.includes('•')) {
          // This is content without a preceding bullet (first item)
          if (acc.length === 0) {
            acc.push(part.startsWith('•') ? part.trim() : `• ${part.trim()}`);
          }
        }
        return acc;
      }, []);
    }
  }

  return items;
}

/**
 * Format an accessibility item
 *
 * Formats the item by converting markdown-like syntax to proper HTML elements
 *
 * @param item - Item to format
 * @returns Formatted item as a string
 */
function formatAccessibilityItem(item: string): string {
  // Convert markdown code notation to React JSX code tags
  // Example: `Tab` -> <code>Tab</code>
  let formatted = item.replace(/`([^`]+)`/g, '<code>$1</code>');
  // Remove leading bullet points if they exist (TSDoc already has them)
  formatted = formatted.replace(/^•\s*/, '');
  return formatted;
}

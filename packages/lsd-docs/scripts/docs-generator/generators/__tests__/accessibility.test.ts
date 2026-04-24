/**
 * Tests for accessibility.ts
 */

import { describe, expect, it } from 'vitest';
import type { TSDocMetadata } from '../../parsers/tsdoc-parser';
import { generateAccessibilitySection } from '../accessibility';

describe('generateAccessibilitySection', () => {
  const _createEmptyTSDocMetadata = (): TSDocMetadata => ({
    description: '',
    customTags: {},
  });

  describe('when no accessibility information is available', () => {
    it('should return empty string when all accessibility tags are missing', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {},
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toBe('');
    });

    it('should return empty string when all accessibility tags are undefined', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityKeyboard: undefined as any,
          docSectionAccessibilityAria: undefined as any,
          docSectionAccessibilityFocus: undefined as any,
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toBe('');
    });

    it('should return empty string when all accessibility tags are empty strings', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityKeyboard: '',
          docSectionAccessibilityAria: '',
          docSectionAccessibilityFocus: '',
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toBe('');
    });
  });

  describe('with Keyboard Navigation section only', () => {
    it('should generate section with single keyboard item', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityKeyboard: 'Tab - Navigate to component',
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toContain('<PageSection title="Accessibility">');
      expect(result).toContain('Keyboard Navigation</CardTitle>');
      expect(result).toContain('Tab - Navigate to component');
      expect(result).not.toContain('ARIA Attributes');
      expect(result).not.toContain('Focus States');
    });

    it('should generate section with multiple keyboard items separated by newlines', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityKeyboard:
            'Tab - Navigate to component\nEnter - Activate component\nSpace - Select option',
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toContain('• Tab - Navigate to component');
      expect(result).toContain('• Enter - Activate component');
      expect(result).toContain('• Space - Select option');
    });

    it('should format keyboard items with markdown code syntax', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityKeyboard: 'Press `Tab` to focus, `Shift+Tab` to navigate back',
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toContain('<code>Tab</code>');
      expect(result).toContain('<code>Shift+Tab</code>');
      expect(result).not.toContain('`Tab`');
      expect(result).not.toContain('`Shift+Tab`');
    });

    it('should handle inline bullet points in keyboard content', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityKeyboard: 'Tab - Item 1 • Enter - Item 2 • Space - Item 3',
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toContain('• Tab - Item 1');
      expect(result).toContain('• Enter - Item 2');
      expect(result).toContain('• Space - Item 3');
    });

    it('should handle mixed content with newlines and bullet points', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityKeyboard: 'Tab - Navigate\nEnter - Activate • Space - Select',
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toContain('• Tab - Navigate');
      expect(result).toContain('• Enter - Activate • Space - Select');
    });
  });

  describe('with ARIA Attributes section only', () => {
    it('should generate section with single ARIA item', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityAria: 'Use aria-label for components without visible labels',
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toContain('<PageSection title="Accessibility">');
      expect(result).toContain('ARIA Attributes</CardTitle>');
      expect(result).toContain('Use aria-label for components without visible labels');
      expect(result).not.toContain('Keyboard Navigation');
      expect(result).not.toContain('Focus States');
    });

    it('should generate section with multiple ARIA items', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityAria:
            'Use `aria-label` for components without visible labels\nUse `aria-describedby` to link to supporting text\nUse `aria-live` for dynamic content',
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toContain('<code>aria-label</code>');
      expect(result).toContain('<code>aria-describedby</code>');
      expect(result).toContain('<code>aria-live</code>');
    });

    it('should format ARIA attributes with code syntax', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityAria:
            'The `aria-selected` attribute indicates the current selection',
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toContain('<code>aria-selected</code>');
      expect(result).not.toContain('`aria-selected`');
    });
  });

  describe('with Focus States section only', () => {
    it('should generate section with single focus state item', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityFocus:
            'Components have visible focus states that follow LSD design system',
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toContain('<PageSection title="Accessibility">');
      expect(result).toContain('Focus States</CardTitle>');
      expect(result).toContain(
        'Components have visible focus states that follow LSD design system'
      );
      expect(result).not.toContain('Keyboard Navigation');
      expect(result).not.toContain('ARIA Attributes');
    });

    it('should generate section with multiple focus state items', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityFocus:
            'Focus indicator follows LSD design system\nFocus ring is visible on all interactive elements\nFocus trap behavior is handled automatically',
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toContain('Focus indicator follows LSD design system');
      expect(result).toContain('Focus ring is visible on all interactive elements');
      expect(result).toContain('Focus trap behavior is handled automatically');
    });

    it('should handle code syntax in focus states', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityFocus: 'Use `:focus-visible` for keyboard-only focus indicators',
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toContain('<code>:focus-visible</code>');
    });
  });

  describe('with all three accessibility sections', () => {
    it('should generate section with keyboard, ARIA, and focus subsections', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityKeyboard: 'Tab - Navigate to component\nEnter - Activate',
          docSectionAccessibilityAria:
            'Use `aria-label` for labels\nUse `aria-describedby` for descriptions',
          docSectionAccessibilityFocus:
            'Components have visible focus states that follow LSD design system',
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toContain('Keyboard Navigation</CardTitle>');
      expect(result).toContain('ARIA Attributes</CardTitle>');
      expect(result).toContain('Focus States</CardTitle>');
    });
  });

  describe('Accessibility item parsing', () => {
    it('should handle items with leading bullet points', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityKeyboard: '• Tab - Navigate\n• Enter - Activate',
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toContain('• Tab - Navigate');
      expect(result).toContain('• Enter - Activate');
    });

    it('should handle items without leading bullet points', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityKeyboard: 'Tab - Navigate\nEnter - Activate',
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toContain('• Tab - Navigate');
      expect(result).toContain('• Enter - Activate');
    });

    it('should handle empty lines between items', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityKeyboard: 'Tab - Navigate\n\nEnter - Activate\n\nSpace - Select',
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toContain('• Tab - Navigate');
      expect(result).toContain('• Enter - Activate');
      expect(result).toContain('• Space - Select');
    });

    it('should trim whitespace from items', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityKeyboard: '  Tab - Navigate  \n  Enter - Activate  ',
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toContain('• Tab - Navigate');
      expect(result).toContain('• Enter - Activate');
    });
  });

  describe('code syntax formatting', () => {
    it('should convert single backtick code to code tags', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityAria: 'Use `aria-label` attribute',
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toContain('<code>aria-label</code>');
      expect(result).not.toContain('`aria-label`');
    });

    it('should convert multiple backticked items', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityKeyboard:
            'Press `Tab` to navigate, `Enter` to activate, `Escape` to close',
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toContain('<code>Tab</code>');
      expect(result).toContain('<code>Enter</code>');
      expect(result).toContain('<code>Escape</code>');
    });

    it('should handle backticked items with hyphens', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityKeyboard: 'Press `Shift+Tab` to navigate backwards',
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toContain('<code>Shift+Tab</code>');
    });

    it('should handle backticked items with colons', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityFocus: 'Use `:focus-visible` for keyboard focus',
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toContain('<code>:focus-visible</code>');
    });

    it('should handle backticked items with underscores', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityAria: 'Use `aria-labelledby` for labels',
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toContain('<code>aria-labelledby</code>');
    });
  });

  describe('section structure and formatting', () => {
    it('should maintain proper indentation in output', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityKeyboard: 'Tab - Navigate',
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toContain('        <PageSection title="Accessibility">');
      expect(result).toContain('          <Typography variant="body1">');
      expect(result).toContain('          <Card className="mt-(--lsd-spacing-base)">');
      expect(result).toContain('            <CardHeader>');
      expect(result).toContain('              <CardTitle>Keyboard Navigation</CardTitle>');
      expect(result).toContain('              <CardDescription>');
      expect(result).toContain('            </CardHeader>');
      expect(result).toContain('            <CardContent>');
      expect(result).toContain('              <Typography variant="body2"');
      expect(result).toContain('            </CardContent>');
      expect(result).toContain('          </Card>');
      expect(result).toContain('        </PageSection>');
    });

    it('should include required component names', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityKeyboard: 'Tab - Navigate',
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toContain('PageSection');
      expect(result).toContain('Typography');
      expect(result).toContain('Card');
      expect(result).toContain('CardHeader');
      expect(result).toContain('CardTitle');
      expect(result).toContain('CardDescription');
      expect(result).toContain('CardContent');
    });

    it('should use LSD spacing variables', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityKeyboard: 'Tab - Navigate',
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toContain('mt-(--lsd-spacing-base)"');
      expect(result).toContain('mb-(--lsd-spacing-smaller)"');
    });
  });

  describe('special cases and edge cases', () => {
    it('should handle very long keyboard items', () => {
      const longItem =
        'Press the Tab key to move focus to the next interactive element in the natural tab order, which is determined by the document structure and the tabindex attribute values of the elements';

      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityKeyboard: longItem,
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toContain(longItem);
    });

    it('should handle special characters in items', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityKeyboard: 'Tab - Navigate (component)\nEnter - Activate [state]',
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toContain('Navigate (component)');
      expect(result).toContain('Activate [state]');
    });

    it('should handle items with numbers', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityKeyboard: '1 - Navigate\n2 - Activate\n3 - Select',
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toContain('• 1 - Navigate');
      expect(result).toContain('• 2 - Activate');
      expect(result).toContain('• 3 - Select');
    });

    it('should handle single inline bullet point', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityKeyboard: '• Tab - Navigate to component',
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toContain('• Tab - Navigate to component');
    });
  });

  describe('mixed accessibility sections', () => {
    it('should handle keyboard and ARIA without focus', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityKeyboard: 'Tab - Navigate',
          docSectionAccessibilityAria: 'Use `aria-label`',
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toContain('Keyboard Navigation</CardTitle>');
      expect(result).toContain('ARIA Attributes</CardTitle>');
      expect(result).not.toContain('Focus States</CardTitle>');
    });

    it('should handle keyboard and focus without ARIA', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityKeyboard: 'Tab - Navigate',
          docSectionAccessibilityFocus: 'Visible focus states',
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toContain('Keyboard Navigation</CardTitle>');
      expect(result).toContain('Focus States</CardTitle>');
      expect(result).not.toContain('ARIA Attributes</CardTitle>');
    });

    it('should handle ARIA and focus without keyboard', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityAria: 'Use `aria-label`',
          docSectionAccessibilityFocus: 'Visible focus states',
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toContain('ARIA Attributes</CardTitle>');
      expect(result).toContain('Focus States</CardTitle>');
      expect(result).not.toContain('Keyboard Navigation</CardTitle>');
    });
  });

  describe('content description texts', () => {
    it('should include correct card descriptions for each section', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityKeyboard: 'Tab - Navigate',
          docSectionAccessibilityAria: 'Use `aria-label`',
          docSectionAccessibilityFocus: 'Visible focus',
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toContain(
        '<CardDescription>Keyboard shortcuts and navigation</CardDescription>'
      );
      expect(result).toContain(
        '<CardDescription>Proper ARIA attributes for screen readers</CardDescription>'
      );
      expect(result).toContain(
        '<CardDescription>Visible focus indicators for keyboard users</CardDescription>'
      );
    });
  });

  describe('multiple bullet point patterns', () => {
    it('should handle mixed bullet point separators', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityKeyboard: 'Tab - Navigate • Enter - Activate • Space - Select',
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toContain('• Tab - Navigate');
      expect(result).toContain('• Enter - Activate');
      expect(result).toContain('• Space - Select');
    });

    it('should handle different bullet spacing', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityKeyboard: 'Tab•Navigate•Enter•Activate',
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toContain('Tab');
      expect(result).toContain('Navigate');
      expect(result).toContain('Enter');
      expect(result).toContain('Activate');
    });
  });

  describe('real-world accessibility scenarios', () => {
    it('should handle keyboard navigation for a dialog component', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityKeyboard:
            'Tab - Navigate through interactive elements\nShift+Tab - Navigate backwards\nEscape - Close the dialog\nEnter - Activate focused element',
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toContain('• Tab - Navigate through interactive elements');
      expect(result).toContain('• Shift+Tab - Navigate backwards');
      expect(result).toContain('• Escape - Close the dialog');
      expect(result).toContain('• Enter - Activate focused element');
    });

    it('should handle ARIA attributes for a form component', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityAria:
            'Use `aria-describedby` to link error messages\nUse `aria-invalid` to indicate validation status\nUse `aria-required` for required fields',
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toContain('<code>aria-describedby</code>');
      expect(result).toContain('<code>aria-invalid</code>');
      expect(result).toContain('<code>aria-required</code>');
    });

    it('should handle focus states for a dropdown component', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityFocus:
            'Focus ring appears on trigger when dropdown is closed\nFirst option receives focus when dropdown opens\nFocus automatically manages keyboard navigation',
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toContain('Focus ring appears on trigger');
      expect(result).toContain('First option receives focus');
      expect(result).toContain('Focus automatically manages');
    });

    it('should handle comprehensive accessibility documentation', () => {
      const tsdocMetadata: TSDocMetadata = {
        description: '',
        customTags: {
          docSectionAccessibilityKeyboard:
            'Tab - Navigate through items\nEnter - Select item\nEscape - Close dropdown\nArrowDown - Move to next item\nArrowUp - Move to previous item',
          docSectionAccessibilityAria:
            'Uses `aria-expanded` to indicate open/closed state\nUses `aria-haspopup="listbox"` for menu association\nUses `aria-labelledby` for descriptive label',
          docSectionAccessibilityFocus:
            'Focus indicator follows LSD design system\nFocus trap keeps focus within dropdown when open\nFocus returns to trigger on close',
        },
      };

      const result = generateAccessibilitySection(tsdocMetadata);

      expect(result).toContain('Keyboard Navigation</CardTitle>');
      expect(result).toContain('ARIA Attributes</CardTitle>');
      expect(result).toContain('Focus States</CardTitle>');
      expect(result).toContain('• Tab - Navigate through items');
      expect(result).toContain('• Enter - Select item');
      expect(result).toContain('• Escape - Close dropdown');
      expect(result).toContain('• ArrowDown - Move to next item');
      expect(result).toContain('• ArrowUp - Move to previous item');
      expect(result).toContain('<code>aria-expanded</code>');
      expect(result).toContain('<code>aria-haspopup="listbox"</code>');
      expect(result).toContain('<code>aria-labelledby</code>');
    });
  });
});

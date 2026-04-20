import { cva, type VariantProps } from 'class-variance-authority';
import type * as React from 'react';
import type { SizeVariant } from '@/lib/types';

/**
 * Props for Accordion component
 *
 * The Accordion controls the behavior and state of the entire accordion widget.
 * It determines how many panels can be open at once and manages which panels are open.
 *
 * @docSectionAccessibilityKeyboard
 * • Tab - Navigate through accordion triggers
 * • Enter or Space - Toggle the currently focused panel
 * • ArrowDown - Move focus to the next trigger when orientation is vertical
 * • ArrowUp - Move focus to the previous trigger when orientation is vertical
 * • ArrowRight - Move focus to the next trigger when orientation is horizontal
 * • ArrowLeft - Move focus to the previous trigger when orientation is horizontal
 * • Home - Move focus to the first trigger
 * • End - Move focus to the last trigger
 * • Shift + Tab - Navigate to the previous focusable element
 *
 * @docSectionAccessibilityAria
 * • role="region" is added to AccordionContent for screen readers
 * • aria-expanded is managed on AccordionTrigger to indicate open/closed state
 * • aria-controls links AccordionTrigger to AccordionContent
 * • aria-level indicates nested accordion depth
 * • aria-hidden properly manages visibility for collapsed panels
 *
 * @docSectionAccessibilityFocus
 * • Focus is automatically managed when panels open/close
 * • Proper focus restoration when closing panels
 * • Focus can be moved between triggers using arrow keys
 * • Focus rings visible on all interactive elements
 */
export interface AccordionProps extends React.ComponentProps<'div'> {
  /**
   * Selection behavior - 'single' allows only one item open, 'multiple' allows multiple
   * - single: Only one panel can be open at a time
   * - multiple: Multiple panels can be open simultaneously
   */
  type: 'single' | 'multiple';
  /**
   * Allow closing all items when type is 'single'
   * When true, users can click an open panel to close it, leaving no panels open
   * When false, at least one panel must remain open at all times
   */
  collapsible?: boolean;
  /**
   * Value of the open item(s) for controlled components
   * For type='single': string (the value of the open item)
   * For type='multiple': string[] (array of open item values)
   */
  value?: string | string[];
  /**
   * Default value of the open item(s) for uncontrolled components
   * For type='single': string (the value of the open item)
   * For type='multiple': string[] (array of open item values)
   */
  defaultValue?: string | string[];
  /**
   * Orientation of the accordion
   * - vertical: Items are stacked vertically (default)
   * - horizontal: Items are arranged horizontally
   */
  orientation?: 'vertical' | 'horizontal';
  /**
   * Disable the accordion
   * When true, all accordion triggers are disabled and cannot be interacted with
   */
  disabled?: boolean;
  /**
   * Callback function called when the active panel changes
   * @param value - The new value of the active panel(s)
   */
  onValueChange?: (value: string | string[]) => void;
}

/**
 * Props for AccordionItem component
 *
 * Represents a single collapsible accordion section containing a trigger and content.
 * Each item has a unique value that identifies it within the accordion.
 *
 * @docSection.accessibility.aria
 * • Proper heading structure for screen readers
 * • Links trigger and content through shared value
 *
 * @docSection.features.value
 * Each AccordionItem requires a unique value prop that identifies the item.
 * This value is used to control which panels are open in the accordion and must
 * be unique within a single accordion instance.
 */
export interface AccordionItemProps extends React.ComponentProps<'div'> {
  /**
   * Unique identifier for the item
   * This value must be unique across all items in the same accordion instance
   */
  value: string;
  /**
   * Disable an individual item
   * When true, only this item's trigger is disabled while other items remain interactive
   */
  disabled?: boolean;
}

export const accordionTriggerVariants = cva(
  [
    // Colors & Backgrounds
    'lsd:text-lsd-text-primary',
    'lsd:bg-lsd-surface',
    // Layout & Positioning
    'lsd:flex',
    'lsd:flex-1',
    'lsd:items-start',
    'lsd:justify-between',
    // Spacing
    'lsd:gap-(--lsd-spacing-base)',
    // Borders, Shapes & Effects
    'lsd:rounded-none',
    // Typography
    'lsd:text-left',
    'lsd:font-medium',
    // Transitions & Animations
    'lsd:transition-all',
    // Interactive States
    'lsd:cursor-pointer',
    'lsd:hover:underline',
    'lsd:outline-none',
    'focus-visible:lsd:ring-lsd-text/50',
    'focus-visible:lsd:ring-[3px]',
    'focus-visible:lsd:border-lsd-border',
    'lsd:disabled:pointer-events-none',
    'lsd:disabled:cursor-not-allowed',
    'lsd:disabled:opacity-34',
    // Pseudo-selectors & ARIA
    '[&[lsd:data-state=open]>svg]:rotate-180',
  ],
  {
    variants: {
      size: {
        sm: [
          // Spacing
          'lsd:py-(--lsd-spacing-smaller)',
          // Typography
          'lsd:text-xs',
        ],
        md: [
          // Spacing
          'lsd:py-(--lsd-spacing-base)',
          // Typography
          'lsd:text-sm',
        ],
        lg: [
          // Spacing
          'lsd:py-(--lsd-spacing-larger)',
          // Typography
          'lsd:text-base',
        ],
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export const accordionContentVariants = cva(
  [
    // Colors & Backgrounds
    'lsd:text-lsd-text-primary',
    'lsd:bg-lsd-surface',
    // Transitions & Animations
    'lsd:data-[state=closed]:animate-accordion-up',
    'lsd:data-[state=open]:animate-accordion-down',
    // Other Utility Classes
    'lsd:overflow-hidden',
  ],
  {
    variants: {
      size: {
        sm: [
          // Typography
          'lsd:text-xs',
        ],
        md: [
          // Typography
          'lsd:text-sm',
        ],
        lg: [
          // Typography
          'lsd:text-base',
        ],
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export type AccordionVariants = VariantProps<typeof accordionTriggerVariants> & {
  size?: SizeVariant;
};

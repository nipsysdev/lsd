import { RadioGroup as RadioGroupPrimitive } from 'radix-ui';
import type * as React from 'react';
import { cn } from '@/lib/utils';

export interface RadioGroupProps extends React.ComponentProps<typeof RadioGroupPrimitive.Root> {}

/**
 * RadioGroup - Set of checkable buttons where only one can be checked at a time.
 *
 * Allows users to select a single option from a list of mutually exclusive choices.
 * Uses Radix UI's radio group primitive for full keyboard navigation and accessibility support.
 *
 * @docSectionPageDescription
 * Set of checkable buttons where only one can be checked at a time.
 *
 * @docSectionAbout
 * A set of checkable buttons—radio buttons—where only one option can be selected at a time. Includes RadioGroupItem for individual radio buttons with built-in styling and focus indicators. The component adheres to the WAI-ARIA Radio Group design pattern and uses roving tabindex to manage focus movement among items.
 *
 * @docSectionComposition
 * • RadioGroup - Main container with grid layout
 * • RadioGroupItem - Individual radio button with indicator
 *
 * @docSectionAccessibilityKeyboard
 * • Tab - Moves focus to the checked radio item or first radio item in the group
 * • Space - Checks the currently focused RadioGroupItem
 * • ArrowDown/ArrowUp - Moves focus and checks next/previous RadioGroupItem
 * • ArrowRight/ArrowLeft - Moves focus and checks next/previous RadioGroupItem
 *
 * @docSectionAccessibilityAria
 * • role="radiogroup" is set on RadioGroup
 * • role="radio" is set on each RadioGroupItem
 * • aria-checked indicates checked/unchecked state
 * • aria-disabled indicates disabled state
 * • Uses roving tabindex for focus management
 *
 * @docSectionAccessibilityFocus
 * Focus moves to the checked radio item or the first radio item when navigating to the group. Arrow keys navigate between items, moving focus and checking the target item. The component uses roving tabindex to ensure only one radio item is in the tab sequence at a time.
 *
 * @exportAs root
 */
function RadioGroup({ className, ...props }: RadioGroupProps) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn('lsd:grid lsd:gap-[var(--lsd-spacing-base)]', className)}
      {...props}
    />
  );
}

export { RadioGroup };

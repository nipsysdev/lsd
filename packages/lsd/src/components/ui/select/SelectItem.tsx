import { CheckIcon } from '@phosphor-icons/react';
import * as SelectPrimitive from '@radix-ui/react-select';
import type * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * SelectItem - Individual selectable option within the dropdown.
 *
 * Displays an option that users can select. Shows a checkmark indicator
 * when selected and supports hover and focus states.
 *
 * @exportAs sub
 */
export function SelectItem({
  /**
   * Additional CSS classes to apply to the item.
   */
  className,
  /**
   * The content to display for this option.
   */
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        // Colors & Backgrounds
        'lsd:focus:bg-lsd-surface',
        'lsd:focus:text-lsd-text-primary',
        // Layout & Positioning
        'lsd:relative',
        'lsd:flex',
        'lsd:w-full',
        // Sizing
        'lsd:text-sm',
        // Spacing
        'lsd:py-(--lsd-spacing-smaller)',
        'lsd:pr-8',
        'lsd:pl-(--lsd-spacing-smaller)',
        'lsd:gap-(--lsd-spacing-smaller)',
        // Borders, Shapes & Effects
        'lsd:outline-hidden',
        'lsd:select-none',
        // Interactive States
        'lsd:cursor-pointer',
        'lsd:hover:underline',
        'lsd:focus:underline',
        'lsd:data-highlighted:underline',
        'lsd:data-disabled:pointer-events-none',
        'lsd:data-disabled:opacity-50',
        // Pseudo-selectors & ARIA - SVG styling
        "lsd:[&_svg:not([class*='text-'])]:text-lsd-icon-primary",
        'lsd:[&_svg]:pointer-events-none',
        'lsd:[&_svg]:shrink-0',
        "lsd:[&_svg:not([class*='size-'])]:size-(--lsd-spacing-base)",
        // Pseudo-selectors & ARIA - Span styling
        'lsd:*:[span]:last:flex',
        'lsd:*:[span]:last:items-center',
        'lsd:*:[span]:last:gap-(--lsd-spacing-smaller)',
        className
      )}
      {...props}
    >
      <span
        className={cn(
          // Layout & Positioning
          'lsd:absolute',
          'lsd:flex',
          // Sizing
          'lsd:size-(--lsd-spacing-base)',
          // Spacing
          'lsd:right-(--lsd-spacing-smaller)',
          // Alignment
          'lsd:items-center',
          'lsd:justify-center'
        )}
      >
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="lsd:size-4 lsd:text-lsd-icon-primary" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

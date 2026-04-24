import * as SelectPrimitive from '@radix-ui/react-select';
import type * as React from 'react';

import { cn } from '@/lib/utils';

/**
 * SelectLabel - Label for a group of related items.
 *
 * Provides context for a group of items. Appears above the items in a
 * SelectGroup and helps users understand the items' purpose.
 *
 * @exportAs sub
 */
export function SelectLabel({
  /**
   * Additional CSS classes to apply to the label.
   */
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn(
        // Typography Font
        'lsd:text-xs',
        // Colors & Backgrounds
        'lsd:text-lsd-text-secondary',
        // Spacing
        'lsd:px-(--lsd-spacing-smaller)',
        'lsd:py-(--lsd-spacing-smaller)',
        className
      )}
      {...props}
    />
  );
}

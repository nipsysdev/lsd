import { CaretUpIcon } from '@phosphor-icons/react';
import * as SelectPrimitive from '@radix-ui/react-select';
import type * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * SelectScrollUpButton - Button for scrolling up in the dropdown.
 *
 * Appears when the dropdown content overflows the viewport. Provides
 * visual affordance for scrolling up through options.
 *
 * @exportAs sub
 */
export function SelectScrollUpButton({
  /**
   * Additional CSS classes to apply to the scroll button.
   */
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        // Colors & Backgrounds
        'lsd:text-lsd-icon-primary',
        // Layout & Positioning
        'lsd:flex',
        // Alignment
        'lsd:items-center',
        'lsd:justify-center',
        // Spacing
        'lsd:py-(--lsd-spacing-smallest)',
        // Interactive States
        'lsd:cursor-default',
        className
      )}
      {...props}
    >
      <CaretUpIcon className="lsd:size-4" weight="duotone" />
    </SelectPrimitive.ScrollUpButton>
  );
}

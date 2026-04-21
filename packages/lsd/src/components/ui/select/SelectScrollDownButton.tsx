import { CaretDownIcon } from '@phosphor-icons/react';
import * as SelectPrimitive from '@radix-ui/react-select';
import type * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * SelectScrollDownButton - Button for scrolling down in the dropdown.
 *
 * Appears when the dropdown content overflows the viewport. Provides
 * visual affordance for scrolling down through options.
 *
 * @exportAs sub
 */
export function SelectScrollDownButton({
  /**
   * Additional CSS classes to apply to the scroll button.
   */
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
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
      <CaretDownIcon className="lsd:size-(--lsd-spacing-base)" weight="duotone" />
    </SelectPrimitive.ScrollDownButton>
  );
}

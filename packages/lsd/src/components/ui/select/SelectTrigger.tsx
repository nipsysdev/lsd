import { CaretDownIcon } from '@phosphor-icons/react';
import * as SelectPrimitive from '@radix-ui/react-select';
import type * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * SelectTrigger - Button that opens and closes the select dropdown.
 *
 * Displays the selected value and triggers the dropdown. Shows a chevron
 * icon to indicate expandable content.
 *
 * @exportAs sub
 */
export function SelectTrigger({
  /**
   * Additional CSS classes to apply to the trigger.
   */
  className,
  /**
   * The size of the trigger button.
   *
   * Controls the height and padding of the trigger.
   */
  size = 'default',
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  /**
   * The size of the trigger button.
   *
   * Controls the height and padding of the trigger.
   */
  size?: 'sm' | 'default';
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        // Colors & Backgrounds
        'lsd:bg-lsd-surface',
        'lsd:text-lsd-text-primary',
        'dark:lsd:bg-lsd-surface/30',
        'dark:lsd:hover:bg-lsd-surface/50',
        // Colors & Backgrounds - Placeholder
        'lsd:data-placeholder:text-lsd-text-secondary',
        // Colors & Backgrounds - Error state
        'aria-invalid:lsd:border-lsd-destructive',
        'aria-invalid:lsd:ring-lsd-destructive/20',
        'dark:aria-invalid:lsd:ring-lsd-destructive/40',
        // Borders
        'lsd:border',
        'lsd:border-lsd-border',
        'focus-visible:lsd:border-lsd-border',
        // Layout & Positioning
        'lsd:flex',
        'lsd:w-fit',
        'lsd:items-center',
        'lsd:justify-between',
        // Sizing
        'lsd:text-sm',
        'lsd:whitespace-nowrap',
        // Sizing - Data attributes
        'lsd:data-[size=default]:h-9',
        'lsd:data-[size=sm]:h-8',
        // Spacing
        'lsd:px-(--lsd-spacing-small)',
        'lsd:py-(--lsd-spacing-smaller)',
        'lsd:gap-(--lsd-spacing-smaller)',
        // Borders, Shapes & Effects
        'lsd:outline-none',
        'lsd:transition-[color,border]',
        // Interactive States
        'lsd:cursor-pointer',
        'lsd:disabled:cursor-not-allowed',
        'lsd:disabled:opacity-50',
        // Pseudo-selectors & ARIA - SVG styling
        "lsd:[&_svg:not([class*='text-'])]:text-lsd-icon-primary",
        'lsd:[&_svg]:pointer-events-none',
        'lsd:[&_svg]:shrink-0',
        "lsd:[&_svg:not([class*='size-'])]:size-(--lsd-spacing-base)",
        // Pseudo-selectors & ARIA - SelectValue styling
        '*:lsd:data-[slot=select-value]:line-clamp-1',
        '*:lsd:data-[slot=select-value]:flex',
        '*:lsd:data-[slot=select-value]:items-center',
        '*:lsd:data-[slot=select-value]:gap-[var(--lsd-spacing-smaller)]',
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <CaretDownIcon className="lsd:size-4 lsd:text-lsd-icon-primary" weight="duotone" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

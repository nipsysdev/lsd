import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import { Command as CommandPrimitive } from 'cmdk';
import type * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * CommandInput - Search input field for command palette.
 *
 * Displays a text input with a search icon for filtering command items.
 *
 * @exportAs sub
 */
export function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div
      data-slot="command-input-wrapper"
      className={cn(
        // Layout & Positioning
        'lsd:flex',
        'lsd:items-center',
        // Sizing
        'lsd:h-9',
        // Spacing
        'lsd:gap-(--lsd-spacing-smaller)',
        'lsd:px-(--lsd-spacing-small)',
        // Borders, Shapes & Effects
        'lsd:border-b',
        'lsd:border-lsd-border'
      )}
    >
      <MagnifyingGlassIcon className="lsd:size-4 lsd:shrink-0 lsd:opacity-50" weight="duotone" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          // Pseudo-selectors & ARIA - Colors (Placeholder)
          'placeholder:lsd-text-lsd-text-secondary',
          // Layout & Positioning
          'lsd:flex',
          // Sizing
          'lsd:h-10',
          'lsd:w-full',
          // Colors & Backgrounds
          'lsd:bg-transparent',
          // Spacing
          'lsd:py-(--lsd-spacing-small)',
          // Typography Size
          'lsd:text-sm',
          // Interactive States - Focus
          'lsd:outline-hidden',
          // Interactive States - Disabled
          'lsd:disabled:cursor-not-allowed',
          'lsd:disabled:opacity-50',
          className
        )}
        {...props}
      />
    </div>
  );
}

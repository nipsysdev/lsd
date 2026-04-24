import { Command as CommandPrimitive } from 'cmdk';
import type * as React from 'react';

import { cn } from '@/lib/utils';

/**
 * CommandItem - Selectable command item with selection state.
 *
 * A selectable item that can be focused and activated by keyboard or click.
 *
 * @exportAs sub
 */
export function CommandItem({
  className,
  onSelect,
  onClick,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  const isClickable = Boolean(onSelect || onClick);

  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        // Pseudo-selectors & ARIA - Colors
        'lsd:data-[selected=true]:bg-lsd-surface',
        'lsd:data-[selected=true]:text-lsd-text-primary',
        "lsd:[&_svg:not([class*='text-'])]:text-lsd-text-primary",
        // Layout & Positioning
        'lsd:relative',
        'lsd:flex',
        'lsd:items-center',
        // Spacing
        'lsd:gap-(--lsd-spacing-smaller)',
        'lsd:px-(--lsd-spacing-smaller)',
        'lsd:py-(--lsd-spacing-smaller)',
        // Typography Size
        'lsd:text-sm',
        // Interactive States - Focus
        'lsd:outline-hidden',
        // Other Utility Classes
        'lsd:select-none',
        // Pseudo-selectors & ARIA - Disabled
        'lsd:data-[disabled=true]:pointer-events-none',
        'lsd:data-[disabled=true]:opacity-50',
        // Pseudo-selectors & ARIA - SVG styling
        'lsd:[&_svg]:pointer-events-none',
        'lsd:[&_svg]:shrink-0',
        "lsd:[&_svg:not([class*='size-'])]:size-4",
        // Other Utility Classes - Cursor
        isClickable ? 'lsd:cursor-pointer' : 'lsd:cursor-default',
        className
      )}
      onSelect={onSelect}
      onClick={onClick}
      {...props}
    />
  );
}

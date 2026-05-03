import { NavigationMenu as NavigationMenuPrimitive } from 'radix-ui';
import type * as React from 'react';
import { cn } from '@/lib/utils';

export interface NavigationMenuLinkProps
  extends React.ComponentProps<typeof NavigationMenuPrimitive.Link> {}

/**
 * NavigationMenuLink - A hyperlink within the navigation menu.
 *
 * Supports styling for active states and icon integration.
 *
 * @exportAs sub
 */
export function NavigationMenuLink({ className, ...props }: NavigationMenuLinkProps) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        // Layout & Positioning
        'lsd:flex',
        'lsd:flex-col',
        // Sizing
        'lsd:h-9',
        'lsd:text-sm',
        // Spacing
        'lsd:gap-(--lsd-spacing-smallest)',
        'lsd:px-(--lsd-spacing-base) lsd:py-(--lsd-spacing-smaller)',
        // Borders, Shapes & Effects
        'lsd:border',
        'lsd:cursor-pointer',
        'lsd:transition-all',
        'lsd:outline-none',
        // Pseudo-selectors & ARIA - SVG styling
        'lsd:hover:underline lsd:focus:underline',
        "lsd:[&_svg:not([class*='size-']):size-4",
        "lsd:[&_svg:not([class*='text-'):text-[var(--lsd-text-secondary)]",
        className
      )}
      {...props}
    />
  );
}

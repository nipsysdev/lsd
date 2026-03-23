import { NavigationMenu as NavigationMenuPrimitive } from 'radix-ui';
import type * as React from 'react';
import { cn } from '@/lib/utils';

export type NavigationMenuLinkProps = React.ComponentProps<typeof NavigationMenuPrimitive.Link>;

/**
 * NavigationMenuLink - A hyperlink within the navigation menu.
 * Supports styling for active states and icon integration.
 */
export function NavigationMenuLink({ className, ...props }: NavigationMenuLinkProps) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "lsd:flex lsd:flex-col lsd:gap-1 lsd:rounded-sm lsd:p-2 lsd:text-[0.875rem] lsd:transition-all lsd:outline-none hover:lsd:bg-[var(--lsd-accent)] hover:lsd:text-[var(--lsd-accent-foreground)] focus:lsd:bg-[var(--lsd-accent)] focus:lsd:text-[var(--lsd-accent-foreground)] focus-visible:lsd:ring-[3px] focus-visible:lsd:ring-ring/50 focus-visible:lsd:outline-1 data-[active=true]:lsd:bg-[var(--lsd-accent)]/50 data-[active=true]:lsd:text-[var(--lsd-accent-foreground)] data-[active=true]:hover:lsd:bg-[var(--lsd-accent)] data-[active=true]:focus:lsd:bg-[var(--lsd-accent)] [&_svg:not([class*='size-'])]:lsd:size-4 [&_svg:not([class*='text-'])]:lsd:text-[var(--lsd-muted-foreground)]",
        className
      )}
      {...props}
    />
  );
}

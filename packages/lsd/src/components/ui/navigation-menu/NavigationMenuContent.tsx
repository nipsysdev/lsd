import { NavigationMenu as NavigationMenuPrimitive } from 'radix-ui';
import type * as React from 'react';
import { cn } from '@/lib/utils';

export interface NavigationMenuContentProps
  extends React.ComponentProps<typeof NavigationMenuPrimitive.Content> {}

/**
 * NavigationMenuContent - The dropdown content that appears when a navigation menu item is triggered.
 *
 * Contains links and content with smooth animations.
 *
 * @exportAs sub
 */
export function NavigationMenuContent({ className, ...props }: NavigationMenuContentProps) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        // Layout & Positioning - Default
        'lsd:top-0',
        'lsd:left-0',
        // Sizing - Default
        'lsd:w-full',
        // Spacing - Default
        'lsd:p-(--lsd-spacing-base)',
        'lsd:pr-(--lsd-spacing-large)',
        // Layout & Positioning - Medium screens
        'md:lsd:absolute',
        // Sizing - Medium screens
        'md:lsd:w-auto',
        // Animations - Motion from end
        'data-[motion=from-end]:slide-in-from-right-52',
        // Animations - Motion from start
        'data-[motion=from-start]:slide-in-from-left-52',
        'data-[motion^=from-]:animate-in',
        'data-[motion^=from-]:fade-in',
        // Animations - Motion to end
        'data-[motion=to-end]:slide-out-to-right-52',
        // Animations - Motion to start
        'data-[motion=to-start]:slide-out-to-left-52',
        'data-[motion^=to-]:animate-out',
        'data-[motion^=to-]:fade-out',
        // Viewport false state - Layout & Positioning
        'group-data-[viewport=false]/navigation-menu:lsd:top-full',
        'group-data-[viewport=false]/navigation-menu:lsd:overflow-hidden',
        // Viewport false state - Borders, Shapes & Effects
        'group-data-[viewport=false]/navigation-menu:lsd:rounded-md',
        'group-data-[viewport=false]/navigation-menu:lsd:border',
        'group-data-[viewport=false]/navigation-menu:lsd:shadow-md',
        // Viewport false state - Spacing
        'group-data-[viewport=false]/navigation-menu:lsd:mt-[1.5rem]',
        // Viewport false state - Colors & Backgrounds
        'group-data-[viewport=false]/navigation-menu:lsd:bg-[var(--lsd-popover)]',
        'group-data-[viewport=false]/navigation-menu:lsd:text-[var(--lsd-popover-foreground)]',
        // Viewport false state - Animations
        'group-data-[viewport=false]/navigation-menu:lsd:duration-200',
        // Viewport false state - Open state animations
        'group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in',
        'group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0',
        'group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95',
        // Viewport false state - Closed state animations
        'group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out',
        'group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0',
        'group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95',
        // Pseudo-selectors & ARIA - Link focus states
        '**:data-[slot=navigation-menu-link]:focus:lsd:ring-0',
        '**:data-[slot=navigation-menu-link]:focus:lsd:outline-none',
        className
      )}
      {...props}
    />
  );
}

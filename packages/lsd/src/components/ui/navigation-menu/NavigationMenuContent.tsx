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
        'lsd:pt-(--lsd-spacing-smallest)',
        // Layout & Positioning - Medium screens
        'lsd:md:absolute',
        // Sizing - Medium screens
        'lsd:md:w-auto',
        // Viewport false state - Layout & Positioning
        'lsd:group-data-[viewport=false]/navigation-menu:top-full',
        'lsd:group-data-[viewport=false]/navigation-menu:overflow-hidden',
        // Viewport false state - Borders, Shapes & Effects
        'lsd:group-data-[viewport=false]/navigation-menu:rounded-md',
        'lsd:group-data-[viewport=false]/navigation-menu:border',
        'lsd:group-data-[viewport=false]/navigation-menu:shadow-md',
        // Viewport false state - Spacing
        'lsd:group-data-[viewport=false]/navigation-menu:mt-6',
        // Viewport false state - Colors & Backgrounds
        'lsd:group-data-[viewport=false]/navigation-menu:bg-lsd-foreground',
        // Viewport false state - Animations
        'lsd:group-data-[viewport=false]/navigation-menu:duration-200',
        // Viewport false state - Open state animations
        'lsd:group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in',
        'lsd:group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0',
        'lsd:group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95',
        // Viewport false state - Closed state animations
        'lsd:group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out',
        'lsd:group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0',
        'lsd:group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95',
        // Pseudo-selectors & ARIA - Link focus states
        'lsd:**:data-[slot=navigation-menu-link]:border-b-0',
        'lsd:**:data-[slot=navigation-menu-link]:focus:ring-0',
        'lsd:**:data-[slot=navigation-menu-link]:focus:outline-none',
        className
      )}
      {...props}
    />
  );
}

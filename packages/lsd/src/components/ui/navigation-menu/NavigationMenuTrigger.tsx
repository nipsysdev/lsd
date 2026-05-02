import { CaretDownIcon } from '@phosphor-icons/react';
import { cva } from 'class-variance-authority';
import { NavigationMenu as NavigationMenuPrimitive } from 'radix-ui';
import type * as React from 'react';
import { cn } from '@/lib/utils';

export interface NavigationMenuTriggerProps
  extends React.ComponentProps<typeof NavigationMenuPrimitive.Trigger> {}

export const navigationMenuTriggerStyle = cva(
  'lsd:group lsd:inline-flex lsd:h-9 lsd:w-max lsd:items-center lsd:justify-center lsd:cursor-pointer lsd:px-(--lsd-spacing-base) lsd:py-(--lsd-spacing-smaller) lsd:border lsd:text-sm lsd:transition-[color,box-shadow] lsd:outline-none disabled:lsd:pointer-events-none disabled:lsd:opacity-50'
);

/**
 * NavigationMenuTrigger - Button that opens/closes the navigation menu content.
 *
 * Displays a chevron icon that rotates when the menu is open.
 *
 * @exportAs sub
 */
export function NavigationMenuTrigger({
  className,
  children,
  ...props
}: NavigationMenuTriggerProps) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), 'lsd:group', className)}
      {...props}
    >
      {children}{' '}
      <CaretDownIcon
        weight="duotone"
        className={cn(
          // Layout & Positioning
          'lsd:relative',
          // Spacing
          'lsd:ml-(--lsd-spacing-smaller)',
          // Sizing
          'lsd:size-3',
          // Borders, Shapes & Effects
          'lsd:transition',
          'lsd:duration-300',
          // Interactive States - Open state
          'lsd:hover:underline lsd:focus:underline'
        )}
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  );
}

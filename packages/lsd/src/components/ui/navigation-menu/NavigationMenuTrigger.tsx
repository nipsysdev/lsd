import { CaretDownIcon } from '@phosphor-icons/react';
import { cva } from 'class-variance-authority';
import { NavigationMenu as NavigationMenuPrimitive } from 'radix-ui';
import type * as React from 'react';
import { cn } from '@/lib/utils';

export interface NavigationMenuTriggerProps
  extends React.ComponentProps<typeof NavigationMenuPrimitive.Trigger> {}

export const navigationMenuTriggerStyle = cva(
  'lsd:group lsd:inline-flex lsd:h-[2.25rem] lsd:w-max lsd:items-center lsd:justify-center lsd:rounded-md lsd:bg-[var(--lsd-background)] lsd:px-4 lsd:py-2 lsd:text-[0.875rem] lsd:font-medium lsd:transition-[color,box-shadow] lsd:outline-none hover:lsd:bg-[var(--lsd-accent)] hover:lsd:text-[var(--lsd-accent-foreground)] focus:lsd:bg-[var(--lsd-accent)] focus:lsd:text-[var(--lsd-accent-foreground)] focus-visible:lsd:ring-[3px] focus-visible:lsd:ring-ring/50 focus-visible:lsd:outline-1 disabled:lsd:pointer-events-none disabled:lsd:opacity-50 data-[state=open]:lsd:bg-[var(--lsd-accent)]/50 data-[state=open]:lsd:text-[var(--lsd-accent-foreground)] data-[state=open]:hover:lsd:bg-[var(--lsd-accent)] data-[state=open]:focus:lsd:bg-[var(--lsd-accent)]'
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
        className={cn(
          // Layout & Positioning
          'lsd:relative',
          // Spacing
          'lsd:ml-(--lsd-spacing-smallest)',
          // Sizing
          'lsd:size-3',
          // Borders, Shapes & Effects
          'lsd:transition',
          'lsd:duration-300',
          // Interactive States - Open state
          'group-data-[state=open]:lsd:rotate-180'
        )}
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  );
}

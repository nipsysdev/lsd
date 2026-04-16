import { CaretRight } from '@phosphor-icons/react';
import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui';
import type * as React from 'react';
import { cn } from '@/lib/utils';

export interface DropdownMenuSubTriggerProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> {
  inset?: boolean;
}

/**
 * DropdownMenuSubTrigger - A menu item that opens a submenu.
 * Shows a chevron icon to indicate it has nested content.
 */
export function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: DropdownMenuSubTriggerProps) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        // Base layout
        'lsd:flex lsd:cursor-default lsd:items-center',
        // Spacing and sizing
        'lsd:gap-(--lsd-spacing-smaller) lsd:rounded-none lsd:px-2 lsd:py-1.5',
        // Text
        'lsd:text-sm lsd:outline-none lsd:select-none',
        // Focus/hover states
        'focus:lsd:bg-[var(--lsd-accent)] focus:lsd:text-[var(--lsd-accent-foreground)]',
        // Inset variant
        'data-[inset]:lsd:pl-8',
        // Open state
        'data-[state=open]:lsd:bg-[var(--lsd-accent)] data-[state=open]:lsd:text-[var(--lsd-accent-foreground)]',
        // Icon styling
        '[&_svg]:lsd:pointer-events-none [&_svg]:lsd:shrink-0 [&_svg:not([class*=size-])]:lsd:size-4 [&_svg:not([class*=text-])]:lsd:text-[var(--lsd-text-secondary)]',
        className
      )}
      {...props}
    >
      {children}
      <CaretRight className="lsd:ml-auto lsd:size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

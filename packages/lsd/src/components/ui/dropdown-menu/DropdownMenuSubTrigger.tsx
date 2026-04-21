import { CaretRightIcon } from '@phosphor-icons/react';
import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui';
import type * as React from 'react';
import { cn } from '@/lib/utils';

export interface DropdownMenuSubTriggerProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> {
  /**
   * Adds extra left padding to align with other inset items.
   */
  inset?: boolean;
}

/**
 * DropdownMenuSubTrigger - Menu item that opens a submenu.
 *
 * @exportAs sub
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
        // Layout & Positioning
        'lsd:flex',
        // Alignment
        'lsd:items-center',
        // Sizing
        'lsd:text-sm',
        // Spacing
        'lsd:gap-(--lsd-spacing-smaller)',
        'lsd:px-2',
        'lsd:py-1.5',
        // Borders, Shapes & Effects
        'lsd:rounded-none',
        'lsd:outline-none',
        'lsd:select-none',
        // Interactive States - Focus/Hover
        'focus:lsd:bg-[var(--lsd-accent)]',
        'focus:lsd:text-[var(--lsd-accent-foreground)]',
        'lsd:hover:underline',
        'lsd:focus:underline',
        // Interactive States - Open state
        'data-[state=open]:lsd:bg-[var(--lsd-accent)]',
        'data-[state=open]:lsd:text-[var(--lsd-accent-foreground)]',
        // Interactive States - Cursor
        'lsd:cursor-pointer',
        // Pseudo-selectors & ARIA - Inset variant
        'data-[inset]:lsd:pl-8',
        // Pseudo-selectors & ARIA - SVG styling
        '[&_svg]:lsd:pointer-events-none',
        '[&_svg]:lsd:shrink-0',
        '[&_svg:not([class*=size-])]:lsd:size-4',
        '[&_svg:not([class*=text-])]:lsd:text-[var(--lsd-text-secondary)]',
        className
      )}
      {...props}
    >
      {children}
      <CaretRightIcon className="lsd:ml-auto lsd:size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

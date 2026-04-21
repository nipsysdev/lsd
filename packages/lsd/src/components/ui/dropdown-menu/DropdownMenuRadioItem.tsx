import { CircleIcon } from '@phosphor-icons/react';
import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui';
import type * as React from 'react';
import { cn } from '@/lib/utils';

export interface DropdownMenuRadioItemProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem> {}

/**
 * DropdownMenuRadioItem - Radio button item for exclusive selection within a group.
 *
 * @exportAs sub
 */
export function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: DropdownMenuRadioItemProps) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        // Layout & Positioning
        'lsd:relative',
        'lsd:flex',
        // Alignment
        'lsd:items-center',
        // Sizing
        'lsd:text-sm',
        // Spacing
        'lsd:py-1.5',
        'lsd:pr-2',
        'lsd:pl-8',
        // Borders, Shapes & Effects
        'lsd:rounded-sm',
        'lsd:outline-none',
        'lsd:select-none',
        // Interactive States - Focus
        'focus:lsd:bg-[var(--lsd-accent)]',
        'focus:lsd:text-[var(--lsd-accent-foreground)]',
        'lsd:hover:underline',
        'lsd:focus:underline',
        // Interactive States - Disabled
        'data-[disabled]:lsd:pointer-events-none',
        'data-[disabled]:lsd:opacity-50',
        // Interactive States - Cursor
        'lsd:cursor-pointer',
        // Pseudo-selectors & ARIA - SVG styling
        '[&_svg]:lsd:pointer-events-none',
        '[&_svg]:lsd:shrink-0',
        '[&_svg:not([class*=size-])]:lsd:size-4',
        className
      )}
      {...props}
    >
      <span
        className={cn(
          // Layout & Positioning
          'lsd:absolute',
          'lsd:flex',
          // Sizing
          'lsd:size-3.5',
          // Spacing
          'lsd:left-2',
          // Alignment
          'lsd:items-center',
          'lsd:justify-center',
          // Interactive States
          'lsd:pointer-events-none'
        )}
      >
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="lsd:size-2.5 lsd:fill-current" weight="duotone" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}

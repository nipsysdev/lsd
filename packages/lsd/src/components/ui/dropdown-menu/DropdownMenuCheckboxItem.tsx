import { CheckIcon } from '@phosphor-icons/react';
import {
  CheckboxItem as DropdownMenuCheckboxItemPrimitive,
  ItemIndicator as DropdownMenuItemIndicatorPrimitive,
} from '@radix-ui/react-dropdown-menu';
import type * as React from 'react';
import { cn } from '@/lib/utils';

export interface DropdownMenuCheckboxItemProps
  extends React.ComponentProps<typeof DropdownMenuCheckboxItemPrimitive> {}

/**
 * DropdownMenuCheckboxItem - Menu item that can be checked/unchecked with checkmark indicator.
 *
 * @exportAs sub
 */
export function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: DropdownMenuCheckboxItemProps) {
  return (
    <DropdownMenuCheckboxItemPrimitive
      data-slot="dropdown-menu-checkbox-item"
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
        'lsd:rounded-none',
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
      checked={checked}
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
        <DropdownMenuItemIndicatorPrimitive>
          <CheckIcon className="lsd:size-4" />
        </DropdownMenuItemIndicatorPrimitive>
      </span>
      {children}
    </DropdownMenuCheckboxItemPrimitive>
  );
}

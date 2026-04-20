import { CheckIcon } from '@phosphor-icons/react';
import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui';
import type * as React from 'react';
import { cn } from '@/lib/utils';

export interface DropdownMenuCheckboxItemProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem> {}

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
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        // Base layout
        'lsd:relative lsd:flex lsd:cursor-default lsd:items-center',
        // Spacing (left padding for checkbox)
        'lsd:rounded-none lsd:py-1.5 lsd:pr-2 lsd:pl-8',
        // Text
        'lsd:text-sm lsd:outline-none lsd:select-none',
        // Focus state
        'focus:lsd:bg-[var(--lsd-accent)] focus:lsd:text-[var(--lsd-accent-foreground)]',
        // Disabled state
        'data-[disabled]:lsd:pointer-events-none data-[disabled]:lsd:opacity-50',
        // Icon styling
        '[&_svg]:lsd:pointer-events-none [&_svg]:lsd:shrink-0 [&_svg:not([class*=size-])]:lsd:size-4',
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="lsd:pointer-events-none lsd:absolute lsd:left-2 lsd:flex lsd:size-3.5 lsd:items-center lsd:justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="lsd:size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

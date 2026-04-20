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
        // Base layout
        'lsd:relative lsd:flex lsd:cursor-default lsd:items-center',
        // Spacing (left padding for radio)
        'lsd:rounded-sm lsd:py-1.5 lsd:pr-2 lsd:pl-8',
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
      {...props}
    >
      <span className="lsd:pointer-events-none lsd:absolute lsd:left-2 lsd:flex lsd:size-3.5 lsd:items-center lsd:justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="lsd:size-2.5 lsd:fill-current" weight="duotone" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}

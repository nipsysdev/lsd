import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui';
import type * as React from 'react';

export type DropdownMenuProps = React.ComponentProps<typeof DropdownMenuPrimitive.Root>;

/**
 * DropdownMenu - A dropdown menu component for displaying a list of actions or options.
 * The menu can be triggered by clicking or hovering, and supports submenus and various item types.
 */
export function DropdownMenu({ ...props }: DropdownMenuProps) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

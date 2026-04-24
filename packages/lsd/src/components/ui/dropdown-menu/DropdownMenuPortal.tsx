import { Portal as DropdownMenuPortalPrimitive } from '@radix-ui/react-dropdown-menu';
import type * as React from 'react';

export interface DropdownMenuPortalProps
  extends React.ComponentProps<typeof DropdownMenuPortalPrimitive> {}

export function DropdownMenuPortal({ ...props }: DropdownMenuPortalProps) {
  return <DropdownMenuPortalPrimitive data-slot="dropdown-menu-portal" {...props} />;
}

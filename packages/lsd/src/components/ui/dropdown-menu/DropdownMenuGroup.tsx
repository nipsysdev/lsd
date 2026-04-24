import { Group as DropdownMenuGroupPrimitive } from '@radix-ui/react-dropdown-menu';
import type * as React from 'react';

export interface DropdownMenuGroupProps
  extends React.ComponentProps<typeof DropdownMenuGroupPrimitive> {}

export function DropdownMenuGroup({ ...props }: DropdownMenuGroupProps) {
  return <DropdownMenuGroupPrimitive data-slot="dropdown-menu-group" {...props} />;
}

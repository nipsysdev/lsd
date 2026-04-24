import { Sub as DropdownMenuSubPrimitive } from '@radix-ui/react-dropdown-menu';
import type * as React from 'react';

export interface DropdownMenuSubProps
  extends React.ComponentProps<typeof DropdownMenuSubPrimitive> {}

export function DropdownMenuSub({ ...props }: DropdownMenuSubProps) {
  return <DropdownMenuSubPrimitive data-slot="dropdown-menu-sub" {...props} />;
}

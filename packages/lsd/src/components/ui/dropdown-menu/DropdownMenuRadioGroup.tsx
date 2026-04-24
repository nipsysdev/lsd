import { RadioGroup as DropdownMenuRadioGroupPrimitive } from '@radix-ui/react-dropdown-menu';
import type * as React from 'react';

export interface DropdownMenuRadioGroupProps
  extends React.ComponentProps<typeof DropdownMenuRadioGroupPrimitive> {}

export function DropdownMenuRadioGroup({ ...props }: DropdownMenuRadioGroupProps) {
  return <DropdownMenuRadioGroupPrimitive data-slot="dropdown-menu-radio-group" {...props} />;
}

import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui';
import type * as React from 'react';

export interface DropdownMenuRadioGroupProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup> {}

/**
 * DropdownMenuRadioGroup - Groups radio button items together.
 *
 * @exportAs sub
 */
export function DropdownMenuRadioGroup({ ...props }: DropdownMenuRadioGroupProps) {
  return <DropdownMenuPrimitive.RadioGroup data-slot="dropdown-menu-radio-group" {...props} />;
}

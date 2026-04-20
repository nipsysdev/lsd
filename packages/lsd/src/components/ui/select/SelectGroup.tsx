import * as SelectPrimitive from '@radix-ui/react-select';
import type * as React from 'react';

/**
 * SelectGroup - Groups related items in the dropdown.
 *
 * Organizes items into logical sections. Can include labels and separators
 * for better organization and readability.
 *
 * @exportAs sub
 */
export function SelectGroup({ ...props }: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

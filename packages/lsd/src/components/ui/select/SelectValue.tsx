import * as SelectPrimitive from '@radix-ui/react-select';
import type * as React from 'react';

/**
 * SelectValue - Displays the selected value or placeholder text.
 *
 * Shows the currently selected option or placeholder when no value is selected.
 * Automatically renders the selected item's text by default.
 *
 * @exportAs sub
 */
export function SelectValue({
  /**
   * Placeholder text to display when no value is selected.
   */
  placeholder,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" placeholder={placeholder} {...props} />;
}

import * as SheetPrimitive from '@radix-ui/react-dialog';
import type * as React from 'react';

/**
 * Button or element that opens the sheet when clicked.
 *
 * @exportAs sub
 */
export function SheetTrigger({ ...props }: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

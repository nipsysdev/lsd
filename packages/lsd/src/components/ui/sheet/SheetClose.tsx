import * as SheetPrimitive from '@radix-ui/react-dialog';
import type * as React from 'react';

/**
 * Button or element that closes the sheet when clicked.
 *
 * @exportAs sub
 */
export function SheetClose({ ...props }: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

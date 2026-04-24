import * as SheetPrimitive from '@radix-ui/react-dialog';
import type * as React from 'react';

/**
 * Portal wrapper for rendering the sheet outside the component tree.
 *
 * @exportAs sub
 */
export function SheetPortal({ ...props }: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

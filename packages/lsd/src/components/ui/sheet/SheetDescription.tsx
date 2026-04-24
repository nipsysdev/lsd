import * as SheetPrimitive from '@radix-ui/react-dialog';
import type * as React from 'react';

import { cn } from '@/lib/utils';

/**
 * Optional accessible description for the sheet content.
 *
 * @exportAs sub
 */
export function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn('lsd:text-sm', className)}
      {...props}
    />
  );
}

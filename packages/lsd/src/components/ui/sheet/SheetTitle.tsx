import * as SheetPrimitive from '@radix-ui/react-dialog';
import type * as React from 'react';

import { cn } from '@/lib/utils';

/**
 * Accessible title for the sheet content.
 *
 * @exportAs sub
 */
export function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn('lsd:text-foreground lsd:font-semibold', className)}
      {...props}
    />
  );
}

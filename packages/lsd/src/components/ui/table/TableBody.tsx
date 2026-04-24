import * as React from 'react';

import { cn } from '@/lib/utils';

/**
 * TableBody - Groups the body content in a table
 *
 * Wraps the row(s) containing table data (TableCell elements).
 * Removes bottom border from the last contained row for clean layout.
 *
 * @exportAs sub
 */
const TableBody = React.forwardRef<HTMLTableSectionElement, React.ComponentProps<'tbody'>>(
  ({ className, ...props }, ref) => {
    return (
      <tbody
        ref={ref}
        data-slot="table-body"
        className={cn('lsd:[&_tr:last-child]:border-0', className)}
        {...props}
      />
    );
  }
);
TableBody.displayName = 'TableBody';

export { TableBody };

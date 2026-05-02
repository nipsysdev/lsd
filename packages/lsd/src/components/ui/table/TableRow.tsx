import * as React from 'react';

import { cn } from '@/lib/utils';

/**
 * TableRow - Contains a single row of table cells
 *
 * Represents a row in the table with bottom border and hover state.
 * Supports selected state via data-[state=selected] attribute.
 *
 * @exportAs sub
 */
const TableRow = React.forwardRef<HTMLTableRowElement, React.ComponentProps<'tr'>>(
  ({ className, ...props }, ref) => {
    return (
      <tr
        ref={ref}
        data-slot="table-row"
        className={cn(
          'lsd:border-b lsd:transition-colors lsd:hover:bg-lsd-foreground/50 lsd:data-[state=selected]:bg-lsd-foreground',
          className
        )}
        {...props}
      />
    );
  }
);
TableRow.displayName = 'TableRow';

export { TableRow };

import * as React from 'react';

import { cn } from '@/lib/utils';

/**
 * TableCell - Contains table data
 *
 * Displays individual data cells with consistent padding.
 * Adjusts padding when containing checkbox elements for alignment.
 *
 * @exportAs sub
 */
const TableCell = React.forwardRef<HTMLTableCellElement, React.ComponentProps<'td'>>(
  ({ className, ...props }, ref) => {
    return (
      <td
        ref={ref}
        data-slot="table-cell"
        className={cn(
          'lsd:p-[var(--lsd-spacing-small)] lsd:align-middle lsd:whitespace-nowrap lsd:[&:has([role=checkbox])]:pr-0 lsd:[&>[role=checkbox]]:translate-y-[2px]',
          className
        )}
        {...props}
      />
    );
  }
);
TableCell.displayName = 'TableCell';

export { TableCell };

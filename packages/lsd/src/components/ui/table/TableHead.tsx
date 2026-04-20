import * as React from 'react';

import { cn } from '@/lib/utils';

/**
 * TableHead - Contains a column or row header
 *
 * Defines column headers with bold text for readability.
 * Adjusts padding when containing checkbox elements for alignment.
 */
const TableHead = React.forwardRef<HTMLTableCellElement, React.ComponentProps<'th'>>(
  ({ className, ...props }, ref) => {
    return (
      <th
        ref={ref}
        data-slot="table-head"
        className={cn(
          'lsd:h-10 lsd:px-(--lsd-spacing-small) lsd:text-left lsd:align-middle lsd:font-bold lsd:whitespace-nowrap lsd:text-lsd-text-primary lsd:[&:has([role=checkbox])]:pr-0 lsd:*:[[role=checkbox]]:translate-y-[2px]',
          className
        )}
        {...props}
      />
    );
  }
);
TableHead.displayName = 'TableHead';

export { TableHead };

import * as React from 'react';

import { cn } from '@/lib/utils';

/**
 * TableHeader - Groups the header content in a table
 *
 * Wraps the row(s) containing column headers (TableHead elements).
 * Adds bottom border to contained rows for visual separation.
 *
 * @exportAs sub
 */
const TableHeader = React.forwardRef<HTMLTableSectionElement, React.ComponentProps<'thead'>>(
  ({ className, ...props }, ref) => {
    return (
      <thead
        ref={ref}
        data-slot="table-header"
        className={cn('lsd:[&_tr]:border-b', className)}
        {...props}
      />
    );
  }
);
TableHeader.displayName = 'TableHeader';

export { TableHeader };

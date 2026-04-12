import * as React from 'react';

import { cn } from '@/lib/utils';

const TableFooter = React.forwardRef<HTMLTableSectionElement, React.ComponentProps<'tfoot'>>(
  ({ className, ...props }, ref) => {
    return (
      <tfoot
        ref={ref}
        data-slot="table-footer"
        className={cn(
          'lsd:border-t lsd:bg-muted/50 lsd:font-medium lsd:[&>tr]:last:border-b-0',
          className
        )}
        {...props}
      />
    );
  }
);
TableFooter.displayName = 'TableFooter';

export { TableFooter };

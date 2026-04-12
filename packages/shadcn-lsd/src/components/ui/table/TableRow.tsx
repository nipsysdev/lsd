import * as React from 'react';

import { cn } from '@/lib/utils';

const TableRow = React.forwardRef<HTMLTableRowElement, React.ComponentProps<'tr'>>(
  ({ className, ...props }, ref) => {
    return (
      <tr
        ref={ref}
        data-slot="table-row"
        className={cn(
          'lsd:border-b lsd:transition-colors lsd:hover:bg-muted/50 lsd:data-[state=selected]:bg-muted',
          className
        )}
        {...props}
      />
    );
  }
);
TableRow.displayName = 'TableRow';

export { TableRow };

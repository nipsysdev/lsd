import * as React from 'react';

import { cn } from '@/lib/utils';

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

import * as React from 'react';

import { cn } from '@/lib/utils';

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

import * as React from 'react';

import { cn } from '@/lib/utils';

const Table = React.forwardRef<HTMLTableElement, React.ComponentProps<'table'>>(
  ({ className, ...props }, ref) => {
    return (
      <div data-slot="table-container" className="lsd:relative lsd:w-full lsd:overflow-x-auto">
        <table
          ref={ref}
          data-slot="table"
          className={cn('lsd:w-full lsd:caption-bottom lsd:text-sm', className)}
          {...props}
        />
      </div>
    );
  }
);
Table.displayName = 'Table';

export { Table };

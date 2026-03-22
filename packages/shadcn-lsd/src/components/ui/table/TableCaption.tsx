import * as React from 'react';

import { cn } from '@/lib/utils';

const TableCaption = React.forwardRef<HTMLTableCaptionElement, React.ComponentProps<'caption'>>(
  ({ className, ...props }, ref) => {
    return (
      <caption
        ref={ref}
        data-slot="table-caption"
        className={cn(
          'lsd:mt-[var(--lsd-spacing-base)] lsd:text-sm lsd:text-lsd-text-secondary',
          className
        )}
        {...props}
      />
    );
  }
);
TableCaption.displayName = 'TableCaption';

export { TableCaption };

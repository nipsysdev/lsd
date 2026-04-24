import * as React from 'react';

import { cn } from '@/lib/utils';

/**
 * CardAction - Optional action area positioned in header grid.
 *
 * Container for action buttons or interactive elements positioned alongside title and description in the CardHeader.
 *
 * @exportAs sub
 */
const CardAction = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="card-action"
        className={cn(
          // Grid
          'lsd:col-start-2',
          'lsd:row-span-2',
          'lsd:row-start-1',
          // Layout & Positioning
          'lsd:self-start',
          'lsd:justify-self-end',
          className
        )}
        {...props}
      />
    );
  }
);
CardAction.displayName = 'CardAction';

export { CardAction };

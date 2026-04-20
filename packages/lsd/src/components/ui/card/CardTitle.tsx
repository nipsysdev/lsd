import * as React from 'react';

import { cn } from '@/lib/utils';

/**
 * CardTitle - Bold heading text for card title.
 *
 * Displays the primary heading within a CardHeader with semibold font weight.
 *
 * @exportAs sub
 */
const CardTitle = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="card-title"
        className={cn(
          // Typography
          'lsd:leading-none',
          'lsd:font-semibold',
          className
        )}
        {...props}
      />
    );
  }
);
CardTitle.displayName = 'CardTitle';

export { CardTitle };

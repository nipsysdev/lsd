import * as React from 'react';

import { cn } from '@/lib/utils';

/**
 * CardContent - Main content area with padding.
 *
 * Container for the primary content within a card with consistent horizontal and vertical padding.
 *
 * @exportAs sub
 */
const CardContent = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="card-content"
        className={cn(
          // Spacing
          'lsd:px-(--lsd-spacing-larger)',
          'lsd:py-(--lsd-spacing-larger)',
          className
        )}
        {...props}
      />
    );
  }
);
CardContent.displayName = 'CardContent';

export { CardContent };

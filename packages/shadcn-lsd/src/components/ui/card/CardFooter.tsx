import * as React from 'react';

import { cn } from '@/lib/utils';

const CardFooter = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="card-footer"
        className={cn(
          // Layout & Positioning
          'lsd:flex',
          'lsd:items-center',
          // Spacing
          'lsd:px-(--lsd-spacing-larger)',
          'lsd:py-(--lsd-spacing-larger)',
          'lsd:pt-(--lsd-spacing-larger)',
          // Borders, Shapes & Effects
          'lsd:border-t',
          'lsd:border-lsd-border',
          className
        )}
        {...props}
      />
    );
  }
);
CardFooter.displayName = 'CardFooter';

export { CardFooter };

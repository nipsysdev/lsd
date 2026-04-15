import * as React from 'react';

import { cn } from '@/lib/utils';

const CardDescription = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="card-description"
        className={cn(
          // Colors & Backgrounds
          'lsd:text-lsd-text-secondary',
          // Typography
          'lsd:text-sm',
          className
        )}
        {...props}
      />
    );
  }
);
CardDescription.displayName = 'CardDescription';

export { CardDescription };

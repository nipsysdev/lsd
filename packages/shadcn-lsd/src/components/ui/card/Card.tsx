import * as React from 'react';

import { cn } from '@/lib/utils';

const Card = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="card"
        className={cn(
          // Colors & Backgrounds
          'lsd:bg-lsd-surface',
          'lsd:text-lsd-text-primary',
          // Layout & Positioning
          'lsd:flex',
          'lsd:flex-col',
          // Borders, Shapes & Effects
          'lsd:border',
          'lsd:border-lsd-border',
          'lsd:shadow-sm',
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = 'Card';

export { Card };

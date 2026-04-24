import * as React from 'react';

import { cn } from '@/lib/utils';

/**
 * CardHeader - Container for card title, description, and optional action button.
 *
 * Wraps the card's heading elements with grid layout and bottom border. Supports optional CardAction for placement alongside title and description.
 *
 * @exportAs sub
 */
const CardHeader = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="card-header"
        className={cn(
          '@container/card-header',
          // Layout & Positioning
          'lsd:grid',
          'lsd:items-start',
          // Grid
          'lsd:auto-rows-min',
          'lsd:grid-rows-[auto_auto]',
          'lsd:has-data-[slot=card-action]:grid-cols-[1fr_auto]',
          // Spacing
          'lsd:gap-(--lsd-spacing-smaller)',
          'lsd:px-(--lsd-spacing-larger)',
          'lsd:py-(--lsd-spacing-larger)',
          'lsd:pb-(--lsd-spacing-larger)',
          // Borders, Shapes & Effects
          'lsd:border-b',
          'lsd:border-lsd-border',
          className
        )}
        {...props}
      />
    );
  }
);
CardHeader.displayName = 'CardHeader';

const CardHeaderWithMemo = React.memo(CardHeader);
CardHeaderWithMemo.displayName = 'CardHeader';

export { CardHeaderWithMemo as CardHeader };

import * as React from 'react';

import { cn } from '@/lib/utils';
import type { FieldProps } from './types';

const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, orientation = 'responsive', ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="field"
        data-orientation={orientation}
        className={cn(
          // Box model
          'lsd:box-border',
          // Layout & Positioning - vertical
          orientation === 'vertical' && ['lsd:flex', 'lsd:flex-col'],
          // Layout & Positioning - horizontal
          orientation === 'horizontal' && ['lsd:flex', 'lsd:flex-row-reverse', 'lsd:items-start'],
          // Spacing - horizontal
          orientation === 'horizontal' && 'lsd:gap-(--lsd-spacing-base)',
          // Layout & Positioning - responsive
          orientation === 'responsive' && [
            'lsd:flex',
            'lsd:flex-col',
            'md:lsd:flex-row-reverse',
            'md:lsd:items-start',
          ],
          // Spacing - responsive
          orientation === 'responsive' && 'md:lsd:gap-(--lsd-spacing-base)',
          className
        )}
        {...props}
      />
    );
  }
);

Field.displayName = 'Field';

export { Field };

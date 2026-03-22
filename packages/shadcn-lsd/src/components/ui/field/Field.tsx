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
          'lsd:box-border',
          orientation === 'vertical' && 'lsd:flex lsd:flex-col',
          orientation === 'horizontal' &&
            'lsd:flex lsd:flex-row-reverse lsd:items-start lsd:gap-(--lsd-spacing-base)',
          orientation === 'responsive' &&
            'lsd:flex lsd:flex-col md:lsd:flex-row-reverse md:lsd:items-start md:lsd:gap-(--lsd-spacing-base)',
          className
        )}
        {...props}
      />
    );
  }
);

Field.displayName = 'Field';

export { Field };

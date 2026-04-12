import * as React from 'react';

import { cn } from '@/lib/utils';
import type { FieldSeparatorProps } from './types';

const FieldSeparator = React.forwardRef<HTMLHRElement, FieldSeparatorProps>(
  ({ className, ...props }, ref) => {
    return (
      <hr
        ref={ref}
        data-slot="field-separator"
        className={cn(
          'lsd:border-0 lsd:border-t lsd:border-lsd-border lsd:my-(--lsd-spacing-base)',
          className
        )}
        {...props}
      />
    );
  }
);

FieldSeparator.displayName = 'FieldSeparator';

export { FieldSeparator };

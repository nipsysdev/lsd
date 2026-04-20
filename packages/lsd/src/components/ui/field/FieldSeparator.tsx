/**
 * FieldSeparator - Visual separator between sections.
 *
 * Horizontal rule with border styling for separating field groups.
 *
 * @exportAs sub
 */
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
          // Borders
          'lsd:border-0',
          'lsd:border-t',
          // Border Colors
          'lsd:border-lsd-border',
          // Spacing
          'lsd:my-(--lsd-spacing-base)',
          className
        )}
        {...props}
      />
    );
  }
);

FieldSeparator.displayName = 'FieldSeparator';

export { FieldSeparator };

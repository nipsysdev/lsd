/**
 * FieldGroup - Layout wrapper stacking multiple Fields.
 *
 * Groups multiple Field components with consistent spacing.
 *
 * @exportAs sub
 */
import * as React from 'react';

import { cn } from '@/lib/utils';
import type { FieldGroupProps } from './types';

const FieldGroup = React.forwardRef<HTMLDivElement, FieldGroupProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="field-group"
        className={cn('lsd:flex lsd:flex-col lsd:gap-(--lsd-spacing-base)', className)}
        {...props}
      />
    );
  }
);

FieldGroup.displayName = 'FieldGroup';

export { FieldGroup };

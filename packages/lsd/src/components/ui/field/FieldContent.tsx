/**
 * FieldContent - Wrapper for control and descriptions in horizontal layout.
 *
 * Groups the form control with descriptions when using horizontal orientation.
 *
 * @exportAs sub
 */
import * as React from 'react';

import { cn } from '@/lib/utils';
import type { FieldContentProps } from './types';

const FieldContent = React.forwardRef<HTMLDivElement, FieldContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} data-slot="field-content" className={cn('lsd:w-full', className)} {...props} />
    );
  }
);

FieldContent.displayName = 'FieldContent';

export { FieldContent };

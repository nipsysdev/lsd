/**
 * FieldLegend - Legend for fieldset.
 *
 * Provides a caption for the fieldset with larger heading styling.
 *
 * @exportAs sub
 */
import * as React from 'react';

import { cn } from '@/lib/utils';
import type { FieldLegendProps } from './types';

const FieldLegend = React.forwardRef<HTMLLegendElement, FieldLegendProps>(
  ({ className, ...props }, ref) => {
    return (
      <legend
        ref={ref}
        data-slot="field-legend"
        className={cn('lsd:text-[1.5rem] lsd:text-lsd-text-primary lsd:font-medium', className)}
        {...props}
      />
    );
  }
);

FieldLegend.displayName = 'FieldLegend';

export { FieldLegend };

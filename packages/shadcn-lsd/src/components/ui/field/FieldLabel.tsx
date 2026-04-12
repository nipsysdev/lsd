import * as React from 'react';

import { cn } from '@/lib/utils';
import type { FieldLabelProps } from './types';

const FieldLabel = React.forwardRef<HTMLLabelElement, FieldLabelProps>(
  ({ className, htmlFor, ...props }, ref) => {
    return (
      <label
        ref={ref}
        data-slot="field-label"
        htmlFor={htmlFor}
        aria-label={!htmlFor ? props.children?.toString() : undefined}
        className={cn(
          'lsd:text-[0.875rem] lsd:font-medium lsd:text-lsd-text-primary lsd:mb-(--lsd-spacing-smaller) lsd:block',
          className
        )}
        {...props}
      />
    );
  }
);

FieldLabel.displayName = 'FieldLabel';

export { FieldLabel };

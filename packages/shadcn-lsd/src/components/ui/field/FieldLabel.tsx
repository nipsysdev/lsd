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
          // Typography Size
          'lsd:text-[0.875rem]',
          // Typography Font
          'lsd:font-medium',
          // Colors & Backgrounds
          'lsd:text-lsd-text-primary',
          // Spacing
          'lsd:mb-(--lsd-spacing-smaller)',
          // Display
          'lsd:block',
          className
        )}
        {...props}
      />
    );
  }
);

FieldLabel.displayName = 'FieldLabel';

export { FieldLabel };

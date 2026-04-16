import * as React from 'react';

import { cn } from '@/lib/utils';
import type { FieldDescriptionProps } from './types';

const FieldDescription = React.forwardRef<HTMLParagraphElement, FieldDescriptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        data-slot="field-description"
        className={cn(
          // Typography Size
          'lsd:text-[0.875rem]',
          // Colors & Backgrounds
          'lsd:text-lsd-text-secondary',
          className
        )}
        {...props}
      />
    );
  }
);

FieldDescription.displayName = 'FieldDescription';

export { FieldDescription };

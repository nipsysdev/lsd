import * as React from 'react';

import { cn } from '@/lib/utils';
import type { FieldTitleProps } from './types';

const FieldTitle = React.forwardRef<HTMLDivElement, FieldTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="field-title"
        className={cn('lsd:text-sm lsd:leading-snug lsd:font-medium', className)}
        {...props}
      />
    );
  }
);

FieldTitle.displayName = 'FieldTitle';

export { FieldTitle };

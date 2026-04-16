import * as React from 'react';

import { cn } from '@/lib/utils';
import type { FieldSetProps } from './types';

const FieldSet = React.forwardRef<HTMLFieldSetElement, FieldSetProps>(
  ({ className, ...props }, ref) => {
    return (
      <fieldset
        ref={ref}
        data-slot="fieldset"
        className={cn('lsd:border-none lsd:p-0', className)}
        {...props}
      />
    );
  }
);

FieldSet.displayName = 'FieldSet';

export { FieldSet };

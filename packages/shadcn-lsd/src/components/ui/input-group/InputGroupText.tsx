import * as React from 'react';

import { cn } from '@/lib/utils';
import type { InputGroupTextProps } from './types';

const InputGroupText = React.forwardRef<HTMLSpanElement, InputGroupTextProps>(
  ({ className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "lsd:flex lsd:items-center lsd:gap-(--lsd-spacing-smaller) lsd:text-sm lsd:text-lsd-text-secondary [&_svg]:lsd:pointer-events-none [&_svg:not([class*='size-'])]:lsd:size-4",
          className
        )}
        {...props}
      />
    );
  }
);

InputGroupText.displayName = 'InputGroupText';

export { InputGroupText };

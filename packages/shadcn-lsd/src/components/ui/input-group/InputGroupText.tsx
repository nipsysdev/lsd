import * as React from 'react';

import { cn } from '@/lib/utils';
import { useInputGroup } from './context';
import type { InputGroupTextProps } from './types';
import { getInputGroupTextSizeClasses } from './utils';

const InputGroupText = React.forwardRef<HTMLSpanElement, InputGroupTextProps>(
  ({ className, ...props }, ref) => {
    const { size } = useInputGroup();

    return (
      <span
        ref={ref}
        className={cn(
          "lsd:flex lsd:items-center lsd:gap-(--lsd-spacing-smaller) lsd:text-lsd-text-secondary [&_svg]:lsd:pointer-events-none [&_svg:not([class*='size-'])]:lsd:size-4",
          getInputGroupTextSizeClasses(size),
          className
        )}
        {...props}
      />
    );
  }
);

InputGroupText.displayName = 'InputGroupText';

export { InputGroupText };

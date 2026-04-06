import * as React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import type { InputGroupTextareaProps } from './types';

const InputGroupTextarea = React.forwardRef<HTMLTextAreaElement, InputGroupTextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <Textarea
        ref={ref}
        data-slot="input-group-control"
        className={cn(
          'lsd:flex-1 lsd:resize-none lsd:rounded-none lsd:border-0 lsd:bg-transparent lsd:py-(--lsd-spacing-base) lsd:shadow-none lsd:focus-visible:ring-0 lsd:bg-transparent',
          className
        )}
        {...props}
      />
    );
  }
);

InputGroupTextarea.displayName = 'InputGroupTextarea';

export { InputGroupTextarea };

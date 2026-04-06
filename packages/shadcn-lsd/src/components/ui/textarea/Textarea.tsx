import * as React from 'react';

import { cn } from '@/lib/utils';

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      data-slot="textarea"
      className={cn(
        'lsd:flex lsd:field-sizing-content lsd:min-h-16 lsd:w-full lsd:rounded-md lsd:border lsd:border-lsd-border lsd:bg-transparent lsd:px-(--lsd-spacing-base) lsd:py-(--lsd-spacing-base) lsd:text-base lsd:shadow-xs lsd:transition-[color,box-shadow] lsd:outline-none lsd:placeholder:text-lsd-text-secondary lsd:disabled:cursor-not-allowed lsd:disabled:opacity-50 lsd:aria-invalid:border-lsd-destructive lsd:aria-invalid:ring-lsd-destructive/20 md:lsd:text-sm lsd:aria-invalid:ring-lsd-destructive/40',
        'focus-visible:lsd:border-lsd-primary focus-visible:lsd:ring-[3px] focus-visible:lsd:ring-lsd-primary/50',
        className
      )}
      {...props}
    />
  );
});

Textarea.displayName = 'Textarea';

export { Textarea };

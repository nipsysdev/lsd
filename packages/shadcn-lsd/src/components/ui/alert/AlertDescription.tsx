'use client';

import type * as React from 'react';
import { cn } from '@/lib/utils';

type AlertDescriptionProps = React.ComponentProps<'p'>;

function AlertDescription({ className, ...props }: AlertDescriptionProps) {
  return (
    <p
      data-slot="alert-description"
      className={cn(
        'lsd:col-start-2 lsd:grid lsd:justify-items-start lsd:gap-1 lsd:text-sm lsd:leading-[1.25rem] lsd:text-lsd-text-secondary [&_p]:lsd:leading-relaxed',
        'data-[variant=destructive]:lsd:text-lsd-destructive-text/90',
        'data-[variant=info]:lsd:text-lsd-info-text/90',
        'data-[variant=success]:lsd:text-lsd-success-text/90',
        'data-[variant=warning]:lsd:text-lsd-warning-text/90',
        className
      )}
      {...props}
    />
  );
}

export { AlertDescription };
export type { AlertDescriptionProps };

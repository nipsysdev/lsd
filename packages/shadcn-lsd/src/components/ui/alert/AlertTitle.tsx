'use client';

import type * as React from 'react';
import { cn } from '@/lib/utils';

type AlertTitleProps = React.ComponentProps<'div'>;

function AlertTitle({ className, ...props }: AlertTitleProps) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        'lsd:col-start-2 lsd:line-clamp-1 lsd:min-h-4 lsd:font-medium lsd:tracking-tight lsd:text-sm lsd:leading-5',
        className
      )}
      {...props}
    />
  );
}

export { AlertTitle };
export type { AlertTitleProps };

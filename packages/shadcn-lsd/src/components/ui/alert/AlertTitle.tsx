'use client';

import type * as React from 'react';
import { cn } from '@/lib/utils';

type AlertTitleProps = React.ComponentProps<'div'>;

function AlertTitle({ className, ...props }: AlertTitleProps) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        // Layout & Positioning
        'lsd:col-start-2',
        // Sizing
        'lsd:min-h-4',
        // Typography
        'lsd:font-medium',
        'lsd:tracking-tight',
        'lsd:text-sm',
        'lsd:leading-5',
        // Other Utility Classes
        'lsd:line-clamp-1',
        className
      )}
      {...props}
    />
  );
}

export { AlertTitle };
export type { AlertTitleProps };

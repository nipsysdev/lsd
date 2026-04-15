import type * as React from 'react';

import { cn } from '@/lib/utils';

export function CommandShortcut({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        // Colors & Backgrounds
        'lsd:text-lsd-text-primary',
        // Spacing
        'lsd:ml-auto',
        // Typography Size
        'lsd:text-xs',
        // Typography
        'lsd:tracking-widest',
        className
      )}
      {...props}
    />
  );
}

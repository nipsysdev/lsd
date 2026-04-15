import { Command as CommandPrimitive } from 'cmdk';
import type * as React from 'react';

import { cn } from '@/lib/utils';

export function Command({ className, ...props }: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        // Layout & Positioning
        'lsd:flex',
        'lsd:flex-col',
        // Sizing
        'lsd:h-full',
        'lsd:w-full',
        // Colors & Backgrounds
        'lsd:bg-lsd-surface',
        'lsd:text-lsd-text-primary',
        // Overflow
        'lsd:overflow-hidden',
        className
      )}
      {...props}
    />
  );
}

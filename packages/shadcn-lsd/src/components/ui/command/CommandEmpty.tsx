import { Command as CommandPrimitive } from 'cmdk';
import type * as React from 'react';

import { cn } from '@/lib/utils';

export function CommandEmpty({ ...props }: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className={cn(
        // Spacing
        'lsd:py-(--lsd-spacing-larger)',
        // Typography Alignment
        'lsd:text-center',
        // Typography Size
        'lsd:text-sm'
      )}
      {...props}
    />
  );
}

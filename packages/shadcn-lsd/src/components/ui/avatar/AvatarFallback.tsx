import { Avatar as AvatarPrimitive } from 'radix-ui';
import type * as React from 'react';

import { cn } from '@/lib/utils';

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        // Layout & Positioning
        'lsd:flex',
        'lsd:items-center',
        'lsd:justify-center',
        // Sizing
        'lsd:size-full',
        // Borders, Shapes & Effects
        'lsd:rounded-full',
        // Colors & Backgrounds
        'lsd:bg-lsd-muted',
        // Typography
        'lsd:text-sm',
        'lsd:text-lsd-text-secondary',
        // Pseudo-selectors & ARIA
        'lsd:group-data-[size=sm]/avatar:text-xs',
        className
      )}
      {...props}
    />
  );
}

export { AvatarFallback };

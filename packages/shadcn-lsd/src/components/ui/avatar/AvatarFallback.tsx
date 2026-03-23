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
        'lsd:flex lsd:size-full lsd:items-center lsd:justify-center lsd:rounded-full lsd:bg-lsd-muted lsd:text-sm lsd:text-lsd-text-secondary group-data-[size=sm]/avatar:lsd:text-xs',
        className
      )}
      {...props}
    />
  );
}

export { AvatarFallback };

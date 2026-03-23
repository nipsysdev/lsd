import { Avatar as AvatarPrimitive } from 'radix-ui';
import type * as React from 'react';

import { cn } from '@/lib/utils';

type AvatarSize = 'default' | 'sm' | 'lg';

interface AvatarProps extends React.ComponentProps<typeof AvatarPrimitive.Root> {
  size?: AvatarSize;
}

function Avatar({ className, size = 'default', children, ...props }: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={cn(
        'group/avatar lsd:relative lsd:flex lsd:size-8 lsd:shrink-0 lsd:overflow-hidden lsd:rounded-full lsd:select-none data-[size=lg]:lsd:size-10 data-[size=sm]:lsd:size-6',
        className
      )}
      {...props}
    >
      {children}
    </AvatarPrimitive.Root>
  );
}

export { Avatar, type AvatarSize };

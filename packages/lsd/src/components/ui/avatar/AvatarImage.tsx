import { Avatar as AvatarPrimitive } from 'radix-ui';
import type * as React from 'react';

import { cn } from '@/lib/utils';

function AvatarImage({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn(
        // Sizing
        'lsd:aspect-square',
        'lsd:size-full',
        className
      )}
      {...props}
    />
  );
}

export { AvatarImage };

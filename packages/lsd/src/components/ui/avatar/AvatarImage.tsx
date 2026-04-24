import { Avatar as AvatarPrimitive } from 'radix-ui';
import type * as React from 'react';

import { cn } from '@/lib/utils';

/**
 * AvatarImage - Displays the avatar image.
 *
 * Renders the image portion of an avatar.
 * Only displays when the image has successfully loaded.
 */
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

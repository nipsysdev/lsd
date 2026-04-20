import type * as React from 'react';

import { cn } from '@/lib/utils';

/**
 * AvatarGroup - Displays group of stacked avatars.
 *
 * Groups multiple avatars with overlapping layout.
 * Commonly used for showing team member lists.
 */
function AvatarGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        'group/avatar-group lsd:flex lsd:-space-x-(--lsd-spacing-smaller) lsd:*:data-[slot=avatar]:ring-2 lsd:*:data-[slot=avatar]:ring-lsd-surface',
        className
      )}
      {...props}
    />
  );
}

export { AvatarGroup };

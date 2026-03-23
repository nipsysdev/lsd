import type * as React from 'react';

import { cn } from '@/lib/utils';

function AvatarGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        'group/avatar-group lsd:flex lsd:-space-x-2 *:data-[slot=avatar]:lsd:ring-2 *:data-[slot=avatar]:lsd:ring-[var(--lsd-surface)]',
        className
      )}
      {...props}
    />
  );
}

export { AvatarGroup };

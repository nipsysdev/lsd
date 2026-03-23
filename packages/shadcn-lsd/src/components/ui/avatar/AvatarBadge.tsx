import type * as React from 'react';

import { cn } from '@/lib/utils';

function AvatarBadge({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        'lsd:absolute lsd:right-0 lsd:bottom-0 lsd:z-10 lsd:inline-flex lsd:items-center lsd:justify-center lsd:rounded-full lsd:bg-lsd-primary lsd:text-lsd-surface lsd:ring-2 lsd:ring-[var(--lsd-surface)] lsd:select-none',
        'group-data-[size=sm]/avatar:lsd:size-2 group-data-[size=sm]/avatar:[&>svg]:lsd:hidden',
        'group-data-[size=default]/avatar:lsd:size-2.5 group-data-[size=default]/avatar:[&>svg]:lsd:size-2',
        'group-data-[size=lg]/avatar:lsd:size-3 group-data-[size=lg]/avatar:[&>svg]:lsd:size-2',
        className
      )}
      {...props}
    />
  );
}

export { AvatarBadge };

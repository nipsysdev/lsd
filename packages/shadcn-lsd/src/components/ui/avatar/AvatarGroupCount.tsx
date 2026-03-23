import type * as React from 'react';

import { cn } from '@/lib/utils';

function AvatarGroupCount({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        'lsd:relative lsd:flex lsd:size-8 lsd:shrink-0 lsd:items-center lsd:justify-center lsd:rounded-full lsd:bg-lsd-muted lsd:text-sm lsd:text-lsd-text-secondary lsd:ring-2 lsd:ring-[var(--lsd-surface)] group-has-data-[size=lg]/avatar-group:lsd:size-10 group-has-data-[size=sm]/avatar-group:lsd:size-6 [&>svg]:lsd:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:lsd:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:lsd:size-3',
        className
      )}
      {...props}
    />
  );
}

export { AvatarGroupCount };

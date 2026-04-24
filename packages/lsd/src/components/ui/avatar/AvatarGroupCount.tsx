import type * as React from 'react';

import { cn } from '@/lib/utils';

/**
 * AvatarGroupCount - Displays count of additional avatars.
 *
 * Shows the number of additional avatars not displayed.
 * Provides visual count for large avatar groups.
 */
function AvatarGroupCount({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        'lsd:relative lsd:flex lsd:size-(--lsd-spacing-large) lsd:shrink-0 lsd:items-center lsd:justify-center lsd:rounded-full lsd:bg-lsd-muted lsd:text-sm lsd:text-lsd-text-secondary lsd:ring-2 lsd:ring-lsd-surface lsd:group-has-data-[size=lg]/avatar-group:size-(--lsd-spacing-larger) lsd:group-has-data-[size=sm]/avatar-group:size-(--lsd-spacing-base) lsd:[&>svg]:size-(--lsd-spacing-base) lsd:group-has-data-[size=lg]/avatar-group:[&>svg]:size-(--lsd-spacing-large) lsd:group-has-data-[size=sm]/avatar-group:[&>svg]:size-(--lsd-spacing-small)',
        className
      )}
      {...props}
    />
  );
}

export { AvatarGroupCount };

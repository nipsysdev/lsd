import type * as React from 'react';

import { cn } from '@/lib/utils';

/**
 * AvatarBadge - Displays status or indicator badge.
 *
 * Small indicator positioned at bottom-right of avatar.
 * Shows status indicators like online state or counts.
 */
function AvatarBadge({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        // Layout & Positioning
        'lsd:absolute',
        'lsd:right-0',
        'lsd:bottom-0',
        'lsd:z-10',
        'lsd:inline-flex',
        'lsd:items-center',
        'lsd:justify-center',
        // Borders, Shapes & Effects
        'lsd:rounded-full',
        // Colors & Backgrounds
        'lsd:bg-lsd-primary',
        'lsd:text-lsd-surface',
        // Ring
        'lsd:ring-2',
        'lsd:ring-lsd-surface',
        // Other Utility Classes
        'lsd:select-none',
        // Pseudo-selectors & ARIA
        'lsd:group-data-[size=sm]/avatar:size-2',
        'lsd:group-data-[size=sm]/avatar:[&>svg]:hidden',
        'lsd:group-data-[size=default]/avatar:size-2.5',
        'lsd:group-data-[size=default]/avatar:[&>svg]:size-2',
        'lsd:group-data-[size=lg]/avatar:size-3',
        'lsd:group-data-[size=lg]/avatar:[&>svg]:size-2',
        className
      )}
      {...props}
    />
  );
}

export { AvatarBadge };

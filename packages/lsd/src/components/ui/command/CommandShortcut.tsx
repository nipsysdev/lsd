import type * as React from 'react';

import { cn } from '@/lib/utils';

/**
 * CommandShortcut - Displays keyboard shortcut text for a command item.
 *
 * Shows a keyboard shortcut label aligned to the right of the item.
 *
 * @exportAs sub
 */
export function CommandShortcut({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        // Colors & Backgrounds
        'lsd:text-lsd-text-primary',
        // Spacing
        'lsd:ml-auto',
        // Typography Size
        'lsd:text-xs',
        // Typography
        'lsd:tracking-widest',
        className
      )}
      {...props}
    />
  );
}

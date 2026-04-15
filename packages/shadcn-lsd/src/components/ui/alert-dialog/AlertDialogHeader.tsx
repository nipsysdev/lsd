import type * as React from 'react';

import { cn } from '@/lib/utils';

function AlertDialogHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn(
        // Layout & Positioning
        'lsd:flex',
        'lsd:flex-col',
        // Spacing
        'lsd:gap-(--lsd-spacing-smaller)',
        // Typography
        'lsd:text-center',
        'lsd:sm:text-left',
        className
      )}
      {...props}
    />
  );
}

export { AlertDialogHeader };

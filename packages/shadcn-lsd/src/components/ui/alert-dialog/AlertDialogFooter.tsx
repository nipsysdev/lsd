import type * as React from 'react';

import { cn } from '@/lib/utils';

function AlertDialogFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        // Layout & Positioning
        'lsd:flex',
        'lsd:flex-col-reverse',
        'lsd:sm:flex-row',
        'lsd:sm:justify-end',
        // Spacing
        'lsd:gap-(--lsd-spacing-smaller)',
        className
      )}
      {...props}
    />
  );
}

export { AlertDialogFooter };

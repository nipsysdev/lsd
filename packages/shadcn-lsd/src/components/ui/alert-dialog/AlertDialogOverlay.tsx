import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import type * as React from 'react';

import { cn } from '@/lib/utils';

function AlertDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(
        // Layout & Positioning
        'lsd:fixed',
        'lsd:inset-0',
        'lsd:z-50',
        // Colors & Backgrounds
        'lsd:bg-black/50',
        // Transitions & Animations
        'lsd:data-[state=open]:animate-in',
        'lsd:data-[state=closed]:animate-out',
        'lsd:data-[state=closed]:fade-out-0',
        'lsd:data-[state=open]:fade-in-0',
        className
      )}
      {...props}
    />
  );
}

export { AlertDialogOverlay };

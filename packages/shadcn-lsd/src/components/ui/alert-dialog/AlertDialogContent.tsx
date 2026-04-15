import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import type * as React from 'react';
import { cn } from '@/lib/utils';
import { AlertDialogOverlay } from './AlertDialogOverlay';
import { AlertDialogPortal } from './AlertDialogPortal';

function AlertDialogContent({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content>) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        className={cn(
          // Colors & Backgrounds
          'lsd:bg-lsd-surface',
          // Layout & Positioning
          'lsd:fixed',
          'lsd:top-[50%]',
          'lsd:left-[50%]',
          'lsd:z-50',
          'lsd:grid',
          // Sizing
          'lsd:w-full',
          'lsd:max-w-[calc(100%-2rem)]',
          'lsd:sm:max-w-lg',
          // Spacing
          'lsd:gap-(--lsd-spacing-base)',
          'lsd:p-(--lsd-spacing-larger)',
          // Borders, Shapes & Effects
          'lsd:border',
          'lsd:border-lsd-border',
          'lsd:shadow-lg',
          // Transitions & Animations
          'lsd:duration-200',
          'lsd:data-[state=open]:animate-in',
          'lsd:data-[state=closed]:animate-out',
          'lsd:data-[state=closed]:fade-out-0',
          'lsd:data-[state=open]:fade-in-0',
          'lsd:data-[state=closed]:zoom-out-95',
          'lsd:data-[state=open]:zoom-in-95',
          // Other Utility Classes
          'lsd:translate-x-[-50%]',
          'lsd:translate-y-[-50%]',
          className
        )}
        {...props}
      />
    </AlertDialogPortal>
  );
}

export { AlertDialogContent };

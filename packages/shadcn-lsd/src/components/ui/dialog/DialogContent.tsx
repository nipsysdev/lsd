import { XIcon } from '@phosphor-icons/react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import type * as React from 'react';
import { cn } from '@/lib/utils';
import { DialogClose } from './DialogClose';
import { DialogOverlay } from './DialogOverlay';
import { DialogPortal } from './DialogPortal';

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean;
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          // Colors & Backgrounds
          'lsd:bg-lsd-surface',
          // Pseudo-selectors & ARIA - Animations
          'lsd:data-[state=open]:animate-in',
          'lsd:data-[state=closed]:animate-out',
          'lsd:data-[state=closed]:fade-out-0',
          'lsd:data-[state=open]:fade-in-0',
          'lsd:data-[state=closed]:zoom-out-95',
          'lsd:data-[state=open]:zoom-in-95',
          // Positioning
          'lsd:fixed',
          'lsd:top-[50%]',
          'lsd:left-[50%]',
          'lsd:z-50',
          // Layout & Positioning
          'lsd:grid',
          // Sizing
          'lsd:w-full',
          'lsd:max-w-[calc(100%-2rem)]',
          'lsd:sm:max-w-lg',
          // Transform
          'lsd:translate-x-[-50%]',
          'lsd:translate-y-[-50%]',
          // Spacing
          'lsd:gap-(--lsd-spacing-base)',
          'lsd:p-(--lsd-spacing-larger)',
          // Borders, Shapes & Effects
          'lsd:border',
          'lsd:border-lsd-border',
          'lsd:shadow-lg',
          // Transitions & Animations
          'lsd:duration-200',
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogClose
            data-slot="dialog-close"
            className={cn(
              // Spacing
              'lsd:p-(--lsd-spacing-smaller)',
              // Pseudo-selectors & ARIA - Focus
              'focus:lsd:outline-hidden',
              // Pseudo-selectors & ARIA - State
              'lsd:data-[state=open]:bg-lsd-surface',
              'lsd:data-[state=open]:text-lsd-text-primary',
              // Positioning
              'lsd:absolute',
              'lsd:top-(--lsd-spacing-base)',
              'lsd:right-(--lsd-spacing-base)',
              // Borders, Shapes & Effects
              'lsd:rounded-xs',
              // Opacity
              'lsd:opacity-70',
              // Transitions & Animations
              'lsd:transition-opacity',
              // Interactive States - Hover
              'lsd:hover:opacity-100',
              // Interactive States - Disabled
              'lsd:disabled:pointer-events-none',
              // Pseudo-selectors & ARIA - SVG styling
              'lsd:[&_svg]:pointer-events-none',
              'lsd:[&_svg]:shrink-0',
              "lsd:[&_svg:not([class*='size-'])]:size-4",
              // Other Utility Classes - Cursor
              'lsd:cursor-pointer'
            )}
          >
            <XIcon weight="duotone" />
            <span className="lsd:sr-only">Close</span>
          </DialogClose>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

export { DialogContent };

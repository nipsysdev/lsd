import * as PopoverPrimitive from '@radix-ui/react-popover';
import type * as React from 'react';

import { cn } from '@/lib/utils';

export interface PopoverContentProps extends React.ComponentProps<typeof PopoverPrimitive.Content> {
  size?: 'sm' | 'md' | 'lg' | 'auto';
}

function PopoverContent({
  className,
  align = 'center',
  sideOffset = 4,
  size = 'md',
  ...props
}: PopoverContentProps) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          // Colors & Backgrounds
          'lsd:bg-lsd-surface',
          'lsd:text-lsd-text-primary',
          // Positioning
          'lsd:z-50',
          // Transform
          'origin-(--radix-popover-content-transform-origin)',
          // Borders, Shapes & Effects
          'lsd:border',
          'lsd:border-lsd-border',
          // Spacing
          'lsd:p-(--lsd-spacing-base)',
          // Borders, Shapes & Effects - shadow
          'lsd:shadow-md',
          // Interactive States - focus
          'lsd:outline-hidden',
          // Sizing
          'lsd:w-(--radix-popper-anchor-width)',
          'lsd:min-w-fit',
          // Pseudo-selectors & ARIA - Animations
          'lsd:data-[state=open]:animate-in',
          'lsd:data-[state=closed]:animate-out',
          'lsd:data-[state=closed]:fade-out-0',
          'lsd:data-[state=open]:fade-in-0',
          'lsd:data-[state=closed]:zoom-out-95',
          'lsd:data-[state=open]:zoom-in-95',
          'lsd:data-[side=bottom]:slide-in-from-top-2',
          'lsd:data-[side=left]:slide-in-from-right-2',
          'lsd:data-[side=right]:slide-in-from-left-2',
          'lsd:data-[side=top]:slide-in-from-bottom-2',
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}

export { PopoverContent };

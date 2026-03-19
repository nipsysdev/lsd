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
  const getWidthClass = () => {
    const md = 'lsd:w-72';

    switch (size) {
      case 'sm':
        return 'lsd:w-32';
      case 'md':
        return md;
      case 'lg':
        return 'lsd:w-96';
      case 'auto':
        return 'lsd:w-auto';
      default:
        return md;
    }
  };

  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'lsd:bg-lsd-surface lsd:text-lsd-text-primary lsd:data-[state=open]:animate-in lsd:data-[state=closed]:animate-out lsd:data-[state=closed]:fade-out-0 lsd:data-[state=open]:fade-in-0 lsd:data-[state=closed]:zoom-out-95 lsd:data-[state=open]:zoom-in-95 lsd:data-[side=bottom]:slide-in-from-top-2 lsd:data-[side=left]:slide-in-from-right-2 lsd:data-[side=right]:slide-in-from-left-2 lsd:data-[side=top]:slide-in-from-bottom-2 lsd:z-50 origin-(--radix-popover-content-transform-origin) lsd:border lsd:border-lsd-border lsd:p-(--lsd-spacing-base) lsd:shadow-md lsd:outline-hidden',
          getWidthClass(),
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}

export { PopoverContent };

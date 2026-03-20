import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import type * as React from 'react';

import { cn } from '@/lib/utils';
import { TooltipPortal } from './TooltipPortal';

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  container,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content> & {
  container?: HTMLElement | null;
}) {
  return (
    <TooltipPortal container={container}>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          'lsd:bg-lsd-surface lsd:text-lsd-text-primary lsd:animate-in lsd:fade-in-0 lsd:zoom-in-95 lsd:data-[state=closed]:animate-out lsd:data-[state=closed]:fade-out-0 lsd:data-[state=closed]:zoom-out-95 lsd:data-[side=bottom]:slide-in-from-top-2 lsd:data-[side=left]:slide-in-from-right-2 lsd:data-[side=right]:slide-in-from-left-2 lsd:data-[side=top]:slide-in-from-bottom-2 lsd:border lsd:border-lsd-border lsd:shadow-sm lsd:z-50 lsd:w-fit origin-(--radix-tooltip-content-transform-origin) lsd:p-(--lsd-spacing-smaller) lsd:text-xs lsd:text-balance',
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="lsd:z-50 lsd:size-2.5" fill="var(--lsd-border)" />
      </TooltipPrimitive.Content>
    </TooltipPortal>
  );
}

export { TooltipContent };

import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import type * as React from 'react';

function TooltipPortal({
  forceMount,
  container,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Portal>) {
  return (
    <TooltipPrimitive.Portal
      forceMount={forceMount}
      container={container as HTMLElement | undefined}
      data-slot="tooltip-portal"
      {...props}
    />
  );
}

export { TooltipPortal };

import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import type * as React from 'react';

/**
 * TooltipProvider - Controls tooltip delay behavior.
 *
 * Wraps tooltips to provide consistent timing for opening and closing.
 * Can be used once at the app root or around specific tooltips.
 *
 * @exportAs sub
 */
function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

export { TooltipProvider };

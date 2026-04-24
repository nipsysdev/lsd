import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import type * as React from 'react';

/**
 * TooltipTrigger - Element that activates the tooltip.
 *
 * Wraps any element to make it a tooltip trigger on hover or focus.
 * Supports keyboard activation and screen reader announcements.
 *
 * @exportAs sub
 */
function TooltipTrigger({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

export { TooltipTrigger };

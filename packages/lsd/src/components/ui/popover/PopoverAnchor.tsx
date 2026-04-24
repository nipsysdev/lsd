import * as PopoverPrimitive from '@radix-ui/react-popover';
import type * as React from 'react';

/**
 * PopoverAnchor - Optional element to position content against.
 *
 * Allows positioning content relative to a custom element instead of the trigger.
 *
 * @exportAs sub
 */
function PopoverAnchor({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
}

export { PopoverAnchor };

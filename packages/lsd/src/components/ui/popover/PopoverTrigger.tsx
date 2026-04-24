import * as PopoverPrimitive from '@radix-ui/react-popover';
import type * as React from 'react';

/**
 * PopoverTrigger - Button or element that opens the popover when activated.
 *
 * Can be used as a child component or with asChild to merge props.
 *
 * @exportAs sub
 */
function PopoverTrigger({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

export { PopoverTrigger };

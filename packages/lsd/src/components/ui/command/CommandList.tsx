import { Command as CommandPrimitive } from 'cmdk';
import type * as React from 'react';

import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

/**
 * CommandList - Scrollable list container for command items.
 *
 * Wraps command items in a scrollable container with proper spacing.
 *
 * @exportAs sub
 */
export function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <ScrollArea className="lsd:max-h-[300px]">
      <CommandPrimitive.List
        data-slot="command-list"
        className={cn(
          // Overflow
          'lsd:scroll-py-(--lsd-spacing-smallest)',
          'lsd:overflow-x-hidden',
          className
        )}
        {...props}
      />
    </ScrollArea>
  );
}

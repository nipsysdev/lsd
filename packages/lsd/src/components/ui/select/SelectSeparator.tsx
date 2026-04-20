import * as SelectPrimitive from '@radix-ui/react-select';
import type * as React from 'react';

import { cn } from '@/lib/utils';

/**
 * SelectSeparator - Visual divider between items or groups.
 *
 * Provides visual separation between items or groups in the dropdown.
 * Helps organize content and improve readability.
 *
 * @exportAs sub
 */
export function SelectSeparator({
  /**
   * Additional CSS classes to apply to the separator.
   */
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn(
        'lsd:bg-lsd-border lsd:pointer-events-none lsd:-mx-(--lsd-spacing-smallest) lsd:my-(--lsd-spacing-smallest) lsd:h-px',
        className
      )}
      {...props}
    />
  );
}

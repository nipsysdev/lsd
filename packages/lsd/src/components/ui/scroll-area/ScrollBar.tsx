import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import type * as React from 'react';

import { cn } from '@/lib/utils';

/**
 * ScrollBar - Orientation-aware scrollbar component
 *
 * Displays draggable scrollbar thumb for navigation along vertical or horizontal axis.
 * Includes visual feedback on hover and interaction.
 *
 * @docSectionPageDescription
 * Orientation-aware scrollbar with drag support
 *
 * @docSectionAbout
 * A sub-component of ScrollArea that displays a draggable scrollbar thumb. Supports both vertical (default) and horizontal orientations. The scrollbar appears on top of content and provides visual feedback during interaction.
 *
 * @exportAs sub
 */
function ScrollBar({
  className,
  orientation = 'vertical',
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        'lsd:flex lsd:touch-none lsd:p-px lsd:transition-colors lsd:select-none',
        orientation === 'vertical' &&
          'lsd:h-full lsd:w-(--lsd-spacing-small) lsd:border-l lsd:border-l-transparent',
        orientation === 'horizontal' &&
          'lsd:h-(--lsd-spacing-small) lsd:flex-col lsd:border-t lsd:border-t-transparent',
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="lsd:bg-lsd-border lsd:relative lsd:flex-1"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
}

export { ScrollBar };

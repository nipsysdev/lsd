import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import type * as React from 'react';

import { cn } from '@/lib/utils';
import { ScrollBar } from './ScrollBar';

/**
 * ScrollArea - Custom styled scrollable container
 *
 * Provides cross-browser custom scrollbars that sit on top of content.
 * Supports both horizontal and vertical orientations with native scrolling behavior.
 *
 * @docSectionPageDescription
 * Custom styled scrollable container with horizontal and vertical scrolling support
 *
 * @docSectionAbout
 * A cross-browser custom scrollbar component that augments native scroll functionality. The scrollbar sits on top of content without taking up layout space, preserving native scrolling behavior and accessibility. Includes sub-components for building complete scrollable layouts.
 *
 * @docSectionComposition
 * • ScrollArea - Main container with custom scrollbar functionality
 *   • ScrollBar - Orientation-aware scrollbar (vertical by default, can be horizontal)
 *     • ScrollAreaPrimitive.ScrollAreaThumb - Draggable thumb component
 *   • ScrollAreaPrimitive.Corner - Corner where both scrollbars meet
 *   • ScrollAreaPrimitive.Viewport - Scrollable content viewport
 *
 * @docSectionAccessibilityKeyboard
 * • Arrow keys - Scroll through content (platform-dependent)
 * • Page Up/Down - Scroll by page (platform-dependent)
 * • Home/End - Scroll to top/bottom (platform-dependent)
 *
 * @docSectionAccessibilityAria
 * No special ARIA attributes required. Component relies on native scroll semantics.
 *
 * @docSectionAccessibilityFocus
 * Standard focus management for scrollable content. Focus follows native browser behavior when navigating with keyboard.
 *
 * @exportAs root
 */
function ScrollArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn('lsd:relative', className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="focus-visible:lsd:ring-lsd-text/50 lsd:size-full lsd:rounded-[inherit] lsd:transition-[color,box-shadow] lsd:outline-none focus-visible:lsd:ring-[3px] focus-visible:lsd:outline-1"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
}

export { ScrollArea };

import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import type * as React from 'react';
import { TooltipContent } from './TooltipContent';
import { TooltipProvider } from './TooltipProvider';
import { TooltipTrigger } from './TooltipTrigger';

/**
 * Tooltip - Displays additional information on hover or focus.
 *
 * A popup that shows contextual information when users hover over or focus on an element.
 * Automatically wrapped with a provider for consistent delay behavior.
 *
 * @docSectionPageDescription
 * Displays additional information on hover or focus.
 *
 * @docSectionAbout
 * A popup component that shows contextual information when users hover over or focus on an element. Automatically wraps with a provider for consistent delay behavior across all tooltips. Supports positioning on all sides with smooth animations.
 *
 * @docSectionComposition
 * • Tooltip - Root component with built-in provider
 * • TooltipProvider - Controls global delay behavior
 * • TooltipTrigger - Element that activates the tooltip
 * • TooltipContent - The popup content container
 *
 * @docSectionAccessibilityKeyboard
 * • Tab - Navigate to the tooltip trigger
 * • Shift + Tab - Navigate to previous element
 *
 * @docSectionAccessibilityAria
 * • role="tooltip" identifies the content as a tooltip
 * • aria-describedby links the trigger to the tooltip
 *
 * @docSectionAccessibilityFocus
 * Tooltip content is not focusable. Focus remains on the trigger element when the tooltip is visible. Screen readers announce tooltip content when the trigger receives focus.
 *
 * @exportAs root
 */
function Tooltip({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

export { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent };

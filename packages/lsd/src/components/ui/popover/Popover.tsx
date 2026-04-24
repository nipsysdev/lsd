import * as PopoverPrimitive from '@radix-ui/react-popover';
import type * as React from 'react';

import { PopoverAnchor } from './PopoverAnchor';
import { PopoverContent } from './PopoverContent';
import { PopoverTrigger } from './PopoverTrigger';

/**
 * Popover - Displays content in a floating overlay positioned relative to a trigger.
 *
 * Container for displaying rich content, actions, or information in a floating overlay
 * that is positioned relative to a trigger element. Supports controlled and uncontrolled states.
 *
 * @docSectionPageDescription
 * Displays rich content in a floating overlay positioned relative to a trigger element.
 *
 * @docSectionAbout
 * Container for displaying rich content, actions, or information in a floating overlay
 * that is positioned relative to a trigger element. Supports controlled and uncontrolled states,
 * with automatic positioning and collision detection for optimal placement.
 *
 * @docSectionComposition
 * • Popover - Root container for managing popover state
 *   • PopoverTrigger - Element that opens the popover when clicked
 *   • PopoverContent - The floating content container
 *   • PopoverAnchor - Optional named element for positioning reference
 *
 * @docSectionAccessibilityKeyboard
 * • Space or Enter - Toggle popover open/closed when trigger is focused
 * • Tab - Move focus within popover content when open
 * • Shift + Tab - Move focus to previous element within popover
 * • Escape - Close popover and return focus to trigger
 *
 * @docSectionAccessibilityAria
 * • role="dialog" is applied to the popover content
 * • Follows Dialog WAI-ARIA design pattern
 *
 * @docSectionAccessibilityFocus
 * • Focus moves to popover content when opened
 * • Focus returns to trigger when popover closes
 * • Outside click and Escape close the popover
 *
 * @exportAs root
 */

function Popover({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

export { Popover, PopoverAnchor, PopoverContent, PopoverTrigger };

import * as SheetPrimitive from '@radix-ui/react-dialog';
import type * as React from 'react';

/**
 * Sheet - A dialog component that slides in from different sides.
 *
 * Displays a sliding panel for additional content or actions that appears over the main interface.
 * Supports positioning from top, bottom, left, or right sides with smooth animations.
 *
 * @docSectionPageDescription
 * Displays a sliding panel with smooth animations and accessibility features.
 *
 * @docSectionAbout
 * A sliding panel component for displaying additional content or actions that appears over the main interface.
 * Supports positioning from top, bottom, left, or right sides with smooth slide-in animations.
 *
 * @docSectionComposition
 * • Sheet - Root container for the sheet component
 *   • SheetTrigger - Button or element that opens the sheet
 *   • SheetPortal - Portal wrapper for rendering outside DOM hierarchy
 *     • SheetOverlay - Backdrop overlay behind the sheet
 *     • SheetContent - Main content container with slide-in animation
 *       • SheetClose - Button or element to close the sheet
 *     • SheetHeader - Container for title and description
 *       • SheetTitle - Accessible title for the sheet
 *       • SheetDescription - Accessible description for the sheet
 *     • SheetFooter - Container for action buttons at the bottom
 *
 * @docSectionAccessibilityKeyboard
 * • Tab - Navigate within the sheet
 * • Shift + Tab - Navigate to previous element
 * • Escape - Close the sheet
 * • Focus is trapped within the sheet when open
 *
 * @docSectionAccessibilityAria
 * • role="dialog" - Identifies the content as a dialog
 * • aria-modal="true" - Indicates modal behavior
 * • aria-labelledby - Links to the sheet title
 * • aria-describedby - Links to the sheet description
 *
 * @docSectionAccessibilityFocus
 * Focus is automatically trapped inside the sheet when it opens and returns to the trigger when closed.
 *
 * @exportAs root
 */
export function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

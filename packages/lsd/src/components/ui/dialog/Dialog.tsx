import * as DialogPrimitive from '@radix-ui/react-dialog';
import type * as React from 'react';

/**
 * Dialog - Modal overlay for focused content display
 *
 * Container that displays content above the page with a backdrop overlay.
 * Used for alerts, confirmations, and focused user interactions.
 *
 * @docSectionAccessibilityKeyboard
 * • Escape - Close the dialog
 * • Tab - Move focus between focusable elements within the dialog
 * • Shift + Tab - Move focus backwards through focusable elements
 *
 * @docSectionAccessibilityAria
 * • role="dialog" is applied to the dialog content
 * • aria-modal="true" indicates modal behavior
 * • aria-labelledby links to the dialog title
 * • aria-describedby links to the dialog description
 * • aria-label can be used for dialogs without visible titles
 *
 * @docSectionAccessibilityFocus
 * • Focus is trapped within the dialog when open
 * • Focus moves to the first focusable element when dialog opens
 * • Focus returns to the trigger when dialog closes
 * • Outside click and Escape close the dialog
 */
function Dialog({ ...props }: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

export { Dialog };

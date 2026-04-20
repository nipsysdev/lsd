import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import type * as React from 'react';

/**
 * AlertDialog - Modal dialog for critical user decisions
 *
 * Interrupts the user's workflow to gather acknowledgment or action on
 * important information. Blocks interaction with the page content when
 * open and requires an explicit response.
 *
 * @docSectionAccessibilityKeyboard
 * • Tab - Navigate through interactive elements in the dialog
 * • Shift + Tab - Navigate to previous interactive element
 * • Escape - Close the dialog
 * • Enter or Space - Activate focused action button
 *
 * @docSectionAccessibilityAria
 * • role="dialog" identifies the component as a dialog
 * • aria-modal="true" indicates dialog blocks interaction
 * • aria-labelledby links to the dialog title
 * • aria-describedby links to the dialog description
 *
 * @docSectionAccessibilityFocus
 * • Focus moves to first interactive button when dialog opens
 * • Focus is trapped within the dialog while open
 * • Focus returns to trigger element when dialog closes
 */

function AlertDialog({ ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Root>) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />;
}

export { AlertDialog };

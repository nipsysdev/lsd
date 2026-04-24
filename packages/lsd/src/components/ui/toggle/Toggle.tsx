import * as TogglePrimitive from '@radix-ui/react-toggle';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { type ToggleVariants, toggleVariants } from './types';

/**
 * Toggle - Button that can be toggled between on and off states.
 *
 * A togglable button that switches between enabled and disabled states.
 * Visual feedback indicates the current state through styling changes.
 *
 * @docSectionPageDescription
 * Button that switches between on and off states with visual feedback.
 *
 * @docSectionAbout
 * A togglable button that switches between enabled and disabled states.
 * Provides visual feedback through styling changes to indicate the current state,
 * making it ideal for settings, filters, and options that can be toggled.
 *
 * @docSectionAccessibilityKeyboard
 * • Tab - Navigate to the toggle
 * • Enter or Space - Toggle state
 *
 * @docSectionAccessibilityAria
 * • aria-pressed is automatically managed based on pressed state
 * • Use aria-label when toggle text is not descriptive
 *
 * @docSectionAccessibilityFocus
 * • Visible focus ring indicates keyboard focus
 * • Keyboard users can see which toggle has focus
 */

export interface ToggleProps
  extends React.ComponentProps<typeof TogglePrimitive.Root>,
    ToggleVariants {}

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <TogglePrimitive.Root
        ref={ref}
        className={cn(toggleVariants({ size }), className)}
        data-slot="toggle"
        {...props}
      />
    );
  }
);
Toggle.displayName = 'Toggle';

export { Toggle };

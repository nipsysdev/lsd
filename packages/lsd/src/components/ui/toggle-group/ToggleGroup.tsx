import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { ToggleGroupContext } from './context';
import type { ToggleGroupProps } from './types';

/**
 * ToggleGroup - Groups togglable buttons together for single or multiple selection
 *
 * Groups togglable buttons in a visually connected way. Supports single selection
 * (radio behavior) or multiple selection (checkbox behavior).
 *
 * @docSectionPageDescription
 * Groups togglable buttons together for single or multiple selection
 *
 * @docSectionAbout
 * Groups togglable buttons in a visually connected way. Supports single selection
 * (radio behavior) or multiple selection (checkbox behavior).
 *
 * @docSectionComposition
 * • ToggleGroup - Main container for grouping toggles
 *   • ToggleGroupItem - Individual toggle button within the group
 *
 * @docSectionAccessibilityKeyboard
 * • Tab - Moves focus to pressed item or first item in group
 * • Enter or Space - Activates/deactivates focused item
 * • ArrowDown/Right - Moves focus to next item
 * • ArrowUp/Left - Moves focus to previous item
 * • Home - Moves focus to first item in group
 * • End - Moves focus to last item in group
 *
 * @docSectionAccessibilityAria
 * • groupLabel prop provides required aria-label for screen readers
 * • role="group" on the ToggleGroup container
 * • aria-pressed on items is automatically managed
 *
 * @docSectionAccessibilityFocus
 * Uses roving tabindex to manage focus movement among items. Focused item receives visible focus indicator.
 *
 * @exportAs root
 */

const ToggleGroup = React.forwardRef<
  React.ComponentRef<typeof ToggleGroupPrimitive.Root>,
  ToggleGroupProps
>(({ className, groupLabel, size, children, ...props }, ref) => {
  return (
    <ToggleGroupPrimitive.Root
      ref={ref}
      data-slot="toggle-group"
      data-size={size}
      aria-label={groupLabel || 'Toggle group'}
      className={cn('group/toggle-group lsd:flex lsd:w-fit lsd:items-center', className)}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ size }}>{children}</ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  );
});
ToggleGroup.displayName = 'ToggleGroup';

export { ToggleGroup };

import { Command as CommandPrimitive } from 'cmdk';
import type * as React from 'react';

import { cn } from '@/lib/utils';

/**
 * Command - Command palette for searching and selecting items
 *
 * Interactive list component with keyboard navigation and filtering. Used for command menus, search interfaces, and quick navigation.
 *
 * @docSectionPageDescription
 * Command palette for searching and selecting items.
 *
 * @docSectionAbout
 * A command palette component for searching and selecting items with keyboard navigation and filtering. Used for command menus, search interfaces, and quick navigation.
 *
 * @docSectionComposition
 * • Command - Main container component
 *   • CommandInput - Search input field with icon
 *   • CommandList - Scrollable list container
 *     • CommandEmpty - Empty state message
 *     • CommandGroup - Groups items with headings
 *       • CommandItem - Selectable command item
 *     • CommandSeparator - Visual divider between groups
 *       • CommandShortcut - Keyboard shortcut display
 * • CommandDialog - Dialog wrapper for command palette
 *
 * @docSectionAccessibilityKeyboard
 * • Arrow Up/Down - Navigate through command items
 * • Enter - Select the currently focused item
 * • Escape - Close the command palette
 * • Tab - Move focus to interactive elements
 *
 * @docSectionAccessibilityAria
 * • role="listbox" is applied by cmdk for the list
 * • role="option" is applied to each command item
 * • aria-selected indicates the currently selected item
 * • aria-invalid indicates validation errors
 *
 * @docSectionAccessibilityFocus
 * • Focus moves through items using arrow keys
 * • Visible focus indicators show current selection
 * • Focus is managed within the command palette
 *
 * @exportAs root
 */
export function Command({ className, ...props }: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        // Layout & Positioning
        'lsd:flex',
        'lsd:flex-col',
        // Sizing
        'lsd:h-full',
        'lsd:w-full',
        // Colors & Backgrounds
        'lsd:bg-lsd-surface',
        'lsd:text-lsd-text-primary',
        // Overflow
        'lsd:overflow-hidden',
        className
      )}
      {...props}
    />
  );
}

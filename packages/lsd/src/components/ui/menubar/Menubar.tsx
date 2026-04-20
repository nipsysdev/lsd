import { Menubar as MenubarPrimitive } from 'radix-ui';
import type * as React from 'react';

import { cn } from '@/lib/utils';
import { menubarVariants } from './types';

/**
 * Menubar - Displays a persistent menu bar with dropdown menus
 *
 * A container for displaying menu items that can be expanded to show additional options.
 * Supports sub-menus, separators, labels, and various item types for complex navigation patterns.
 *
 * @docSectionPageDescription
 * Displays a persistent menu bar with dropdown menus for organizing commands and navigation.
 *
 * @docSectionAbout
 * A container for displaying menu items that can be expanded to show additional options. Supports sub-menus, separators, labels, and various item types including standard items, checkboxes, and radio groups.
 *
 * @docSectionComposition
 * • Menubar - Root container for the menu bar
 *   • MenubarMenu - Individual menu with trigger and content
 *     • MenubarTrigger - Button that opens the menu
 *     • MenubarPortal - Wraps content for portal rendering
 *       • MenubarContent - Dropdown content container
 *         • MenubarGroup - Groups related items
 *           • MenubarLabel - Section label for grouped items
 *           • MenubarSeparator - Visual divider between sections
 *           • MenubarItem - Standard clickable menu item
 *           • MenubarCheckboxItem - Toggle item with checkbox state
 *           • MenubarRadioGroup - Radio button group
 *             • MenubarRadioItem - Radio option
 *         • MenubarSub - Nested submenu
 *           • MenubarSubTrigger - Opens submenu
 *           • MenubarSubContent - Submenu content container
 *
 * @docSectionAccessibilityKeyboard
 * • Tab - Navigate to menubar triggers
 * • Arrow Left/Right - Navigate between menu triggers
 * • Enter, Space, or Arrow Down - Open menu
 * • Arrow Up/Down - Navigate menu items
 * • Enter or Space - Select item
 * • Escape - Close menu
 * • Arrow Right - Open submenu from item
 * • Arrow Left - Return to parent menu
 *
 * @docSectionAccessibilityAria
 * • role="menubar" identifies the container
 * • role="menu" identifies dropdown content
 * • role="menuitem" for standard items
 * • role="menuitemcheckbox" for checkbox items
 * • role="menuitemradio" for radio items
 * • aria-expanded indicates open/closed state
 * • aria-checked indicates checkbox/radio state
 * • aria-orientation="horizontal" on menubar
 *
 * @docSectionAccessibilityFocus
 * Focus moves between triggers with arrow keys. When menu opens, focus moves to first item. Focus is trapped in open menu. Focus returns to trigger when closing.
 *
 * @exportAs root
 */
export interface MenubarProps extends React.ComponentProps<typeof MenubarPrimitive.Root> {}

function Menubar({ className, ...props }: MenubarProps) {
  return (
    <MenubarPrimitive.Root
      data-slot="menubar"
      className={cn(menubarVariants(), className)}
      {...props}
    />
  );
}

export { Menubar };

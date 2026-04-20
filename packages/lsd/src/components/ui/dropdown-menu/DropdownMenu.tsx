import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui';
import type * as React from 'react';

export interface DropdownMenuProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.Root> {}

/**
 * DropdownMenu - Displays a menu of actions or options triggered by a button.
 *
 * A context menu that shows interactive items with full keyboard navigation. Supports submenus, checkboxes, radio items, labels, and separators.
 *
 * @docSectionPageDescription
 * Displays a menu of actions or options triggered by a button.
 *
 * @docSectionAbout
 * A context menu that shows interactive items with full keyboard navigation. Supports submenus, checkboxes, radio items, labels, and separators.
 *
 * @docSectionComposition
 * • DropdownMenu - Root container with portal and content
 *   • DropdownMenuTrigger - Button that opens the menu
 *   • DropdownMenuPortal - Renders content outside DOM flow
 *     • DropdownMenuContent - Container for menu items
 *       • DropdownMenuItem - Selectable item with default/destructive variants
 *       • DropdownMenuCheckboxItem - Item with checkmark indicator
 *       • DropdownMenuRadioGroup - Groups radio items together
 *         • DropdownMenuRadioItem - Radio button for exclusive selection
 *       • DropdownMenuLabel - Non-interactive text label
 *       • DropdownMenuSeparator - Visual divider between sections
 *       • DropdownMenuSub - Submenu container
 *         • DropdownMenuSubTrigger - Item that opens submenu
 *         • DropdownMenuSubContent - Container for submenu items
 *       • DropdownMenuShortcut - Keyboard shortcut display
 *
 * @docSectionAccessibilityKeyboard
 * • Tab - Navigate to the menu trigger
 * • Enter or Space - Open the menu or select focused item
 * • Arrow Up/Down - Navigate between menu items
 * • Arrow Right - Open submenu from trigger
 * • Arrow Left - Close submenu
 * • Escape - Close the menu
 * • Home/End - Jump to first/last menu item
 * • Letter keys - Typeahead to navigate to items
 *
 * @docSectionAccessibilityAria
 * • role="menu" identifies the component as a menu
 * • aria-expanded indicates open/closed state on trigger
 * • aria-controls links trigger to menu content
 * • aria-haspopup="menu" announces menu functionality
 * • aria-activedescendant tracks focused item
 * • aria-orientation="vertical" for vertical menus
 * • aria-disabled marks disabled items
 *
 * @docSectionAccessibilityFocus
 * Focus moves to first menu item when menu opens. Focus returns to trigger when menu closes. Focus is trapped within the menu when open and wraps when navigating past first/last item.
 *
 * @exportAs root
 */
export function DropdownMenu({ ...props }: DropdownMenuProps) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

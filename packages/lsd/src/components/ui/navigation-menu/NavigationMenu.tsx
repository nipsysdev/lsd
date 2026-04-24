import { NavigationMenu as NavigationMenuPrimitive } from 'radix-ui';
import type * as React from 'react';
import { NavigationMenuViewport } from './NavigationMenuViewport';

export interface NavigationMenuProps
  extends React.ComponentProps<typeof NavigationMenuPrimitive.Root> {
  /**
   * Enables viewport mode for mobile/desktop responsive behavior.
   *
   * When true, renders NavigationMenuViewport for dropdown content positioning.
   */
  viewport?: boolean;
}

/**
 * NavigationMenu - Displays a hierarchical list of links with dropdown menus.
 *
 * Provides controlled or uncontrolled navigation with submenus and viewport mode.
 *
 * @docSectionPageDescription
 * Displays a hierarchical list of links with dropdown menus.
 *
 * @docSectionAbout
 * A navigation menu component for displaying hierarchical links with dropdown menus. Supports viewport mode for mobile/desktop responsive behavior and submenus. Includes multiple sub-components for building complete navigation structures with triggers, content, and indicators.
 *
 * @docSectionComposition
 * • NavigationMenu - Root container with viewport option
 * • NavigationMenuList - Horizontal list container for menu items
 *   • NavigationMenuItem - Wrapper for trigger and content
 *     • NavigationMenuTrigger - Button to open/close dropdown content
 *       • CaretDownIcon - Rotating chevron indicator
 *     • NavigationMenuContent - Dropdown content with animations
 *       • NavigationMenuLink - Hyperlink items within content
 * • NavigationMenuLink - Standalone link without dropdown
 * • NavigationMenuIndicator - Visual indicator for active item
 * • NavigationMenuViewport - Content container for viewport mode
 *
 * @docSectionAccessibilityKeyboard
 * • Tab - Navigate to navigation menu items
 * • Left/Right Arrow - Move between menu items
 * • Enter or Space - Open dropdown or activate link
 * • Escape - Close dropdown
 * • Up/Down Arrow - Navigate within dropdown content
 *
 * @docSectionAccessibilityAria
 * • role="navigation" identifies the component as navigation
 * • aria-expanded indicates if dropdown is open (on trigger)
 * • aria-controls links trigger to content
 * • aria-current marks active link
 *
 * @docSectionAccessibilityFocus
 * Focus moves to trigger when dropdown opens. Arrow keys navigate between items. Focus is managed within dropdown content and returns to trigger on close.
 *
 * @exportAs root
 */
export function NavigationMenu({
  className,
  children,
  viewport = false,
  ...props
}: NavigationMenuProps) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={className}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  );
}

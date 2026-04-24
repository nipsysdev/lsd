import * as SelectPrimitive from '@radix-ui/react-select';
import type * as React from 'react';

/**
 * Select - Displays a list of options for users to choose from.
 *
 * Uses a trigger button to show a dropdown with selectable items. Supports
 * keyboard navigation, custom placeholders, and disabled states.
 *
 * @docSectionPageDescription
 * Displays a list of options for users to choose from.
 *
 * @docSectionAbout
 * A dropdown selection component that presents a list of options when triggered. Users can select a single option from the list using mouse or keyboard navigation. The component is built on Radix UI primitives and includes full keyboard accessibility support.
 *
 * @docSectionComposition
 * • Select - Main container and context provider
 *   • SelectTrigger - Button that opens/closes the dropdown
 *     • SelectValue - Displays the selected value or placeholder
 *   • SelectContent - Dropdown container with scrollable list
 *     • SelectScrollUpButton - Scroll button for long lists
 *     • SelectViewport - Scrollable viewport containing items
 *       • SelectGroup - Groups related items
 *         • SelectLabel - Label for item groups
 *         • SelectItem - Individual selectable option
 *       • SelectSeparator - Visual divider between items
 *     • SelectScrollDownButton - Scroll button for long lists
 *
 * @docSectionAccessibilityKeyboard
 * • Tab - Navigate to/from the select component
 * • Enter or Space - Open the select or select the highlighted option
 * • Arrow Up/Down - Navigate between options
 * • Page Up/Page Down - Navigate through options faster
 * • Home/End - Jump to first/last option
 * • Escape - Close the select without making changes
 *
 * @docSectionAccessibilityAria
 * • role="listbox" is applied to SelectContent
 * • role="option" is applied to each SelectItem
 * • aria-expanded indicates open/closed state on trigger
 * • aria-controls links trigger to content
 * • aria-selected indicates the currently selected item
 * • aria-activedescendant identifies the keyboard-focused option
 * • aria-label provides accessible labels when no visible label exists
 * • aria-disabled indicates disabled items
 *
 * @docSectionAccessibilityFocus
 * • Focus moves to the first option when dropdown opens
 * • Focus returns to trigger when option is selected
 * • Focus is trapped in dropdown when open
 * • Keyboard navigation manages highlighted option focus
 * • Clicking outside closes dropdown and returns focus
 *
 * @exportAs root
 */
export function Select({ ...props }: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

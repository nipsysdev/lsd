# LSD Component List

Complete list of all 39 components in @nipsys/lsd organized by category.

## Forms (15 components)
- **Input** - Single-line text input
- **Textarea** - Multi-line text input
- **Checkbox** - Boolean toggle checkbox
- **Switch** - On/off toggle switch
- **RadioGroup** - Radio button group for single selection
- **TextField** - Enhanced input with label integration
- **Form** - Form container with validation (react-hook-form)
- **Field** - Form field with label integration
- **Select** - Dropdown selector
- **Autocomplete** - Searchable autocomplete with cmdk
- **InputGroup** - Input with prefix/suffix add-ons and icons
- **Accordion** - Collapsible content panels
- **Label** - Form label for inputs
- **Button** - Primary action button
- **ToggleGroup** - Group of toggle buttons for multi-selection

## Navigation (6 components)
- **Menubar** - Application menubar
- **NavigationMenu** - Hierarchical navigation menu
- **Tabs** - Tabbed content panels
- **ButtonGroup** - Group of related buttons
- **Toggle** - Toggle button
- **Sidebar** - Application sidebar navigation

## Overlays (5 components)
- **Dialog** - Modal dialog box
- **AlertDialog** - Alert dialog for confirmations
- **Popover** - Floating content popover
- **DropdownMenu** - Dropdown menu with actions
- **Sheet** - Slide-over sheet panel

## Feedback (3 components)
- **Alert** - Alert message with icon
- **Progress** - Progress indicator bar
- **Sonner** - Toast notification system

## Layout (3 components)
- **Card** - Card container with header/content
- **Separator** - Horizontal/vertical separator
- **ScrollArea** - Custom scrollable area

## Data Display (6 components)
- **Table** - Data table with sorting/filtering
- **Badge** - Badge indicator
- **Avatar** - User avatar with fallback
- **Calendar** - Date picker calendar
- **Slider** - Range slider control
- **Command** - Command palette with search

## Typography (1 component)
- **Typography** - Typography component for headings, body text, labels, and UI copy

## Dependency Summary

| Component | External Dependency |
|-----------|-------------------|
| Accordion | @radix-ui/react-accordion |
| AlertDialog | @radix-ui/react-alert-dialog |
| Autocomplete | cmdk |
| Calendar | react-day-picker |
| Checkbox | @radix-ui/react-checkbox |
| Command | cmdk |
| Dialog | @radix-ui/react-dialog |
| DropdownMenu | @radix-ui/react-dropdown-menu |
| Form | react-hook-form |
| Icons | @phosphor-icons/react |
| Label | @radix-ui/react-label |
| Menubar | @radix-ui/react-menubar |
| NavigationMenu | @radix-ui/react-navigation-menu |
| Popover | @radix-ui/react-popover |
| Progress | @radix-ui/react-progress |
| RadioGroup | @radix-ui/react-radio-group |
| ScrollArea | @radix-ui/react-scroll-area |
| Select | @radix-ui/react-select |
| Separator | @radix-ui/react-separator |
| Sheet | @radix-ui/react-dialog (built) |
| Slider | @radix-ui/react-slider |
| Sonner | sonner |
| Switch | @radix-ui/react-switch |
| Tabs | @radix-ui/react-tabs |
| Toggle | @radix-ui/react-toggle |
| ToggleGroup | @radix-ui/react-toggle-group |
| Tooltip | @radix-ui/react-tooltip |

## Usage Notes

- All components support `className` prop for custom styling
- Components using CVA support `variant` and `size` props
- Composite components require importing sub-components
- All components are fully accessible with ARIA attributes
- Forward refs are supported on all components
- Dark mode support via `.dark` class on HTML element
- Accent themes via `data-theme` attribute on HTML element

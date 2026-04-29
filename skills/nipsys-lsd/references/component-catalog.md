# LSD Component Catalog

Quick reference for all 41 components in the @nipsys/lsd library.

## External Dependencies
- **cmdk** - Command component
- **react-day-picker** - Calendar component
- **sonner** - Sonner toast component

---

## Forms & Input (10)
- **Input** - Text input with label, supporting text, error states. Multiple border variants.
- **Textarea** - Multi-line text input with label and validation states.
- **Checkbox** - Checkable input with labeled state.
- **Switch** - Toggle switch for binary states. `[CVA]`
- **RadioGroup** - Single-select radio button group. `[Composite]`
- **Select** - Dropdown select with custom styling. `[Composite]`
- **Autocomplete** - Select with search/filter functionality. `[Composite]`
- **InputGroup** - Input with prepend/append elements. `[CVA] [Composite]`
- **Slider** - Range selector with value indicator.
- **Field** - Complex form field with label, description, error, helper. `[Composite]`

## Buttons & Actions (4)
- **Button** - Interactive button with variants, loading, sizes. `[CVA]`
- **ButtonGroup** - Grouped buttons with separators and text. `[CVA] [Composite]`
- **Toggle** - Pressable toggle button. `[CVA]`
- **ToggleGroup** - Single/multi-select toggle group. `[CVA] [Composite]`

## Navigation (5)
- **Tabs** - Tabbed interface with panels. `[CVA]`
- **Accordion** - Collapsible panels (single/multiple modes).
- **NavigationMenu** - Multi-level navigation with dropdowns. `[CVA]`
- **Menubar** - Horizontal menu bar with nested items. `[CVA]`
- **Sidebar** - Collapsible sidebar with groups and menus. `[CVA] [Composite]`

## Overlays & Modals (6)
- **Dialog** - Modal dialog with header, footer, content. `[Composite]`
- **AlertDialog** - Confirmation dialog for critical actions. `[Composite]`
- **Sheet** - Slide-over panel from edges. `[Composite]`
- **Popover** - Floating content positioned relative to trigger.
- **Tooltip** - Hover information popup.
- **DropdownMenu** - Context menu with actions. `[Composite]`

## Data Display (7)
- **Table** - Structured data table with header/body/caption. `[Composite]`
- **Card** - Content container with header/footer. `[Composite]`
- **Badge** - Status tags with variants, dismissible, dots. `[CVA]`
- **Avatar** - User profile image with fallback. `[Composite]`
- **Progress** - Progress bar with determinate/indeterminate states.
- **Alert** - Contextual messages with semantic variants. `[CVA]`
- **Command** - Command palette with search, groups, keyboard nav. `[Composite]`

## Layout & Structure (5)
- **Separator** - Visual divider line.
- **ScrollArea** - Custom-styled scrollable area.
- **Typography** - Text styles (headings, body, code, captions). `[CVA]`
- **Calendar** - Date picker and calendar display. `[Composite]`
- **Label** - Form field label with sizing. `[CVA]`

## Feedback & Utilities (2)
- **Sonner** - Toast notification system.
- **Form** - Form validation context with react-hook-form.

---

**Legend:**
- `[CVA]` - Uses class-variance-authority for variant styling
- `[Composite]` - Requires sub-components for full functionality
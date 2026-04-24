# LSD CVA Patterns

Complete guide to CVA (class-variance-authority) variant patterns in @nipsys/lsd.

## Concept

17 LSD components use CVA for variant management. These components support `variant` and `size` props to change appearance and behavior without custom CSS.

## CVA Components

1. **Button** - Multiple variants (filled, outlined, rounded variants, destructive, success) with sizes
2. **Badge** - Semantic variants (destructive, success, warning, info, filled, outlined, ghost) with sizes
3. **Toggle** - Single toggle with size variants
4. **ToggleGroup** - Groups toggles with orientation
5. **Switch** - On/off toggle with size variants
6. **Typography** - Text variant system (display, heading, subtitle, body, label) with colors
7. **Tabs** - Tabbed content with size variants and full-width option
8. **Accordion** - Expandable sections with size variants
9. **Sidebar** - Menu button variants (default, outline) with sizes
10. **ButtonGroup** - Group buttons with orientation (horizontal, vertical)
11. **Menubar** - Menu bar with multiple variant types (trigger, item, label, etc.)
12. **Label** - Form labels with variant and size
13. **InputGroupAddon** - Input group addons with alignment
14. **Alert** - Alerts with semantic variants (destructive, success, warning, info)

## Button

### Variants
```tsx
<Button variant="filled">Save</Button>
<Button variant="outlined">Cancel</Button>
<Button variant="filled-rounded">Save</Button>
<Button variant="outlined-rounded">Cancel</Button>
<Button variant="ghost">Close</Button>
<Button variant="ghost-rounded">Close</Button>
<Button variant="link">Learn more</Button>
<Button variant="destructive">Delete</Button>
<Button variant="destructive-rounded">Delete</Button>
<Button variant="success">Confirm</Button>
<Button variant="success-rounded">Confirm</Button>
```

### Sizes
```tsx
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="square-sm">{<PlusIcon />}</Button>
<Button size="square-md">{<PlusIcon />}</Button>
<Button size="square-lg">{<PlusIcon />}</Button>
```

### Examples
```tsx
// Primary action with icon
<Button variant="filled">
  <PlusIcon className="mr-(--lsd-spacing-smaller)" />
  Add Item
</Button>

// Secondary action
<Button variant="outlined">Cancel</Button>

// Outlined rounded
<Button variant="outlined-rounded">
  <ShareIcon weight="duotone" />
  Share
</Button>

// Ghost action in toolbar
<Button variant="ghost">
  <SettingsIcon weight="duotone" />
</Button>

// Destructive action
<Button variant="destructive">
  <TrashIcon className="mr-(--lsd-spacing-smaller)" />
  Delete
</Button>

// Destructive rounded
<Button variant="destructive-rounded">
  <TrashIcon />
</Button>

// Success action
<Button variant="success">
  <CheckIcon className="mr-(--lsd-spacing-smaller)" />
  Confirm
</Button>

// Success rounded
<Button variant="success-rounded">
  <CheckIcon />
</Button>

// Small button
<Button size="sm" variant="filled">Save</Button>

// Large button
<Button size="lg" variant="outlined">Continue</Button>

// Square icon button
<Button size="square-md" variant="filled">
  <PlusIcon />
</Button>
```

## Badge

### Variants
```tsx
<Badge variant="filled">New</Badge>
<Badge variant="outlined">Info</Badge>
<Badge variant="destructive">Critical</Badge>
<Badge variant="success">Complete</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="info">Note</Badge>
<Badge variant="dot">{}</Badge>
```

### Sizes
```tsx
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>
```

### Examples
```tsx
// Filled badge
<Badge variant="filled">New</Badge>

// Outlined badge with icon
<Badge variant="outlined">
  <CheckIcon className="mr-(--lsd-spacing-smallest)" />
  Verified
</Badge>

// Destructive badge
<Badge variant="destructive">Error</Badge>

// Success badge
<Badge variant="success">Complete</Badge>

// Warning badge
<Badge variant="warning">Pending</Badge>

// Info badge
<Badge variant="info">
  <InfoIcon className="mr-(--lsd-spacing-smallest)" />
  Info
</Badge>

// Dot badge
<Badge variant="dot">
  <CheckCircleIcon />
</Badge>

// Small badge
<Badge size="sm" variant="filled">Pro</Badge>

// Large badge
<Badge size="lg" variant="success">Verified</Badge>
```

## Toggle

### Sizes
```tsx
<Toggle size="sm">Small</Toggle>
<Toggle size="md">Medium</Toggle>
<Toggle size="lg">Large</Toggle>
```

### Examples
```tsx
// Default toggle
<Toggle>
  <Typography variant="body1">Toggle option</Typography>
</Toggle>

// With icons
<Toggle value="bold">
  <TextBIcon weight="duotone" />
</Toggle>
<Toggle value="italic">
  <TextIIcon weight="duotone" />
</Toggle>

// Small toggle
<Toggle size="sm">
  <Typography variant="body2">Small toggle</Typography>
</Toggle>

// Large toggle
<Toggle size="lg">
  <Typography variant="body1">Large toggle</Typography>
</Toggle>
```

## ToggleGroup

### Orientation
```tsx
<ToggleGroup orientation="horizontal">...</ToggleGroup>
<ToggleGroup orientation="vertical">...</ToggleGroup>
```

### Types
```tsx
// Single selection (radio-like)
<ToggleGroup type="single" onValueChange={setValue}>
  <Toggle value="option1">Option 1</Toggle>
  <Toggle value="option2">Option 2</Toggle>
</ToggleGroup>

// Multiple selection (checkbox-like)
<ToggleGroup type="multiple" onValueChange={setValues}>
  <Toggle value="option1">Option 1</Toggle>
  <Toggle value="option2">Option 2</Toggle>
</ToggleGroup>
```

### Sizes
```tsx
<ToggleGroup size="sm">...</ToggleGroup>
<ToggleGroup size="md">...</ToggleGroup>
```

### Examples
```tsx
// Single selection
<ToggleGroup type="single" onValueChange={setValue} value={value}>
  <Toggle value="left">
    <AlignLeftIcon weight="duotone" />
  </Toggle>
  <Toggle value="center">
    <AlignCenterIcon weight="duotone" />
  </Toggle>
  <Toggle value="right">
    <AlignRightIcon weight="duotone" />
  </Toggle>
</ToggleGroup>

// Multiple selection
<ToggleGroup type="multiple" onValueChange={setValues} value={values}>
  <Toggle value="bold">
    <Typography variant="body1">Bold</Typography>
  </Toggle>
  <Toggle value="italic">
    <Typography variant="body1">Italic</Typography>
  </Toggle>
  <Toggle value="underline">
    <Typography variant="body1">Underline</Typography>
  </Toggle>
</ToggleGroup>

// Vertical orientation
<ToggleGroup type="single" orientation="vertical">
  <Toggle value="top">Top</Toggle>
  <Toggle value="middle">Middle</Toggle>
  <Toggle value="bottom">Bottom</Toggle>
</ToggleGroup>

// Small size
<ToggleGroup size="sm" type="single">
  <Toggle value="a">A</Toggle>
  <Toggle value="b">B</Toggle>
</ToggleGroup>
```

## Switch

### Size
```tsx
<Switch size="sm" />
<Switch size="md" />
```

### Examples
```tsx
// Default switch with label
<div className="flex items-center gap-(--lsd-spacing-base)">
  <Switch checked={enabled} onChange={setEnabled} />
  <Typography variant="body1">Enable notifications</Typography>
</div>

// Small switch
<div className="flex items-center gap-(--lsd-spacing-base)">
  <Switch size="sm" checked={enabled} onChange={setEnabled} />
  <Typography variant="body2">Small option</Typography>
</div>
```

## Typography

### Variants
```tsx
// Display variants
<Typography variant="display1">Hero Title</Typography>
<Typography variant="display2">Large Title</Typography>
<Typography variant="display3">Medium Title</Typography>
<Typography variant="display4">Small Title</Typography>

// Heading variants
<Typography variant="h1">Page Title</Typography>
<Typography variant="h2">Section Title</Typography>
<Typography variant="h3">Subsection Title</Typography>
<Typography variant="h4">Component Title</Typography>
<Typography variant="h5">Small Title</Typography>
<Typography variant="h6">Micro Title</Typography>

// Subtitle variants
<Typography variant="subtitle1">Primary Subtitle</Typography>
<Typography variant="subtitle2">Secondary Subtitle</Typography>
<Typography variant="subtitle3">Tertiary Subtitle</Typography>
<Typography variant="subtitle4">Quaternary Subtitle</Typography>

// Body variants
<Typography variant="body1">Primary Body</Typography>
<Typography variant="body2">Secondary Body</Typography>
<Typography variant="body3">Tertiary Body</Typography>

// Label variants
<Typography variant="label1">Primary Label</Typography>
<Typography variant="label2">Secondary Label</Typography>
```

### Colors
```tsx
<Typography variant="body1" color="primary">Primary text</Typography>
<Typography variant="body1" color="secondary">Secondary text</Typography>
<Typography variant="body1" color="destructive">Destructive text</Typography>
<Typography variant="body1" color="success">Success text</Typography>
<Typography variant="body1" color="warning">Warning text</Typography>
<Typography variant="body1" color="info">Info text</Typography>
```

### Examples
```tsx
// Display heading
<Typography variant="display1">Welcome to LSD</Typography>

// Page heading
<Typography variant="h1">Documentation</Typography>

// Section heading
<Typography variant="h2">Getting Started</Typography>

// Subtitle
<Typography variant="subtitle1">Learn about LSD components</Typography>

// Body text
<Typography variant="body1">
  LSD is a component library built on Radix UI primitives.
</Typography>

// Secondary body
<Typography variant="body2" color="secondary">
  Additional context information here.
</Typography>

// Label
<Typography variant="label1">Email Address</Typography>

// Destructive text
<Typography variant="body1" color="destructive">
  This action cannot be undone.
</Typography>

// Success text
<Typography variant="body1" color="success">
  Changes saved successfully.
</Typography>
```

## Tabs

### Sizes
```tsx
<Tabs size="sm">...</Tabs>
<Tabs size="md">...</Tabs>
<Tabs size="lg">...</Tabs>
```

### Full Width
```tsx
<Tabs fullWidth>...</Tabs>
```

### Examples
```tsx
// Default tabs
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>

// Small tabs
<Tabs size="sm" defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Small</TabsTrigger>
    <TabsTrigger value="tab2">Tab</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content</TabsContent>
</Tabs>

// Large tabs
<Tabs size="lg" defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Large</TabsTrigger>
    <TabsTrigger value="tab2">Tab</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content</TabsContent>
</Tabs>

// Full width tabs
<Tabs fullWidth defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Full Width</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
</Tabs>

// Tabs with icons
<Tabs defaultValue="info">
  <TabsList>
    <TabsTrigger value="info">
      <InfoIcon className="mr-(--lsd-spacing-smaller)" />
      Info
    </TabsTrigger>
    <TabsTrigger value="settings">
      <SettingsIcon className="mr-(--lsd-spacing-smaller)" />
      Settings
    </TabsTrigger>
  </TabsList>
  <TabsContent value="info">Information content</TabsContent>
  <TabsContent value="settings">Settings content</TabsContent>
</Tabs>
```

## Accordion

### Sizes
```tsx
<Accordion size="sm">...</Accordion>
<Accordion size="md">...</Accordion>
<Accordion size="lg">...</Accordion>
```

### Examples
```tsx
// Default accordion
<Accordion type="single" defaultValue="item1">
  <AccordionItem value="item1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>Content for section 1</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item2">
    <AccordionTrigger>Section 2</AccordionTrigger>
    <AccordionContent>Content for section 2</AccordionContent>
  </AccordionItem>
</Accordion>

// Small accordion
<Accordion type="single" size="sm" defaultValue="item1">
  <AccordionItem value="item1">
    <AccordionTrigger>Small</AccordionTrigger>
    <AccordionContent>Small content</AccordionContent>
  </AccordionItem>
</Accordion>

// Large accordion
<Accordion type="single" size="lg" defaultValue="item1">
  <AccordionItem value="item1">
    <AccordionTrigger>Large</AccordionTrigger>
    <AccordionContent>Large content</AccordionContent>
  </AccordionItem>
</Accordion>

// Multiple items open
<Accordion type="multiple">
  <AccordionItem value="item1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>Content 1</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item2">
    <AccordionTrigger>Section 2</AccordionTrigger>
    <AccordionContent>Content 2</AccordionContent>
  </AccordionItem>
</Accordion>

// Collapsible single mode
<Accordion type="single" collapsible>
  <AccordionItem value="item1">
    <AccordionTrigger>Toggle Me</AccordionTrigger>
    <AccordionContent>Can close all items</AccordionContent>
  </AccordionItem>
</Accordion>
```

## Sidebar

### Menu Button Variants
```tsx
<SidebarMenuButton variant="default">Default</SidebarMenuButton>
<SidebarMenuButton variant="outline">Outline</SidebarMenuButton>
```

### Menu Button Sizes
```tsx
<SidebarMenuButton size="default">Default</SidebarMenuButton>
<SidebarMenuButton size="sm">Small</SidebarMenuButton>
<SidebarMenuButton size="lg">Large</SidebarMenuButton>
```

### Examples
```tsx
// Default menu button
<SidebarMenuButton>
  <HomeIcon weight="duotone" />
  <span>Home</span>
</SidebarMenuButton>

// Active menu button
<SidebarMenuButton isActive>
  <DashboardIcon weight="duotone" />
  <span>Dashboard</span>
</SidebarMenuButton>

// Outline variant
<SidebarMenuButton variant="outline">
  <SettingsIcon weight="duotone" />
  <span>Settings</span>
</SidebarMenuButton>

// Small menu button
<SidebarMenuButton size="sm">
  <UserIcon weight="duotone" />
  <span>Profile</span>
</SidebarMenuButton>

// With tooltip
<SidebarMenuButton tooltip="Shortcuts">
  <CommandIcon weight="duotone" />
  <span>Shortcuts</span>
</SidebarMenuButton>
```

## ButtonGroup

### Orientation
```tsx
<ButtonGroup orientation="horizontal">...</ButtonGroup>
<ButtonGroup orientation="vertical">...</ButtonGroup>
```

### Examples
```tsx
// Horizontal button group
<ButtonGroup>
  <Button variant="filled">Left</Button>
  <Button variant="filled">Middle</Button>
  <Button variant="filled">Right</Button>
</ButtonGroup>

// Vertical button group
<ButtonGroup orientation="vertical">
  <Button variant="outlined">Top</Button>
  <Button variant="outlined">Middle</Button>
  <Button variant="outlined">Bottom</Button>
</ButtonGroup>

// Mixed buttons
<ButtonGroup>
  <Button variant="filled">Save</Button>
  <Button variant="outlined">Cancel</Button>
</ButtonGroup>

// With icons
<ButtonGroup>
  <Button variant="filled" size="square-sm">
    <PlusIcon />
  </Button>
  <Button variant="filled" size="square-sm">
    <MinusIcon />
  </Button>
</ButtonGroup>
```

## Menubar

### Variants
```tsx
<MenubarItem variant="default">Default Item</MenubarItem>
<MenubarItem variant="destructive">Delete</MenubarItem>
```

### Inset
```tsx
<MenubarItem inset>Indented Item</MenubarItem>
<MenubarLabel inset>Indented Label</MenubarLabel>
```

### Examples
```tsx
// Simple menubar
<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New</MenubarItem>
      <MenubarItem>Open</MenubarItem>
      <MenubarSeparator />
      <MenubarItem variant="destructive">Quit</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Undo</MenubarItem>
      <MenubarItem>Redo</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>

// With labels
<Menubar>
  <MenubarMenu>
    <MenubarTrigger>View</MenubarTrigger>
    <MenubarContent>
      <MenubarLabel>Zoom</MenubarLabel>
      <MenubarItem>Zoom In</MenubarItem>
      <MenubarItem>Zoom Out</MenubarItem>
      <MenubarSeparator />
      <MenubarLabel>Display</MenubarLabel>
      <MenubarItem>Full Screen</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>

// Inset items
<Menubar>
  <MenubarMenu>
    <MenubarTrigger>Options</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>General</MenubarItem>
      <MenubarItem inset>Advanced</MenubarItem>
      <MenubarItem inset>Expert</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>

// With submenus
<Menubar>
  <MenubarMenu>
    <MenubarTrigger>Share</MenubarTrigger>
    <MenubarContent>
      <MenubarSeparator />
      <MenubarSub>
        <MenubarSubTrigger>Email</MenubarSubTrigger>
        <MenubarSubContent>
          <MenubarItem>Send as PDF</MenubarItem>
          <MenubarItem>Send as Link</MenubarItem>
        </MenubarSubContent>
      </MenubarSub>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
```

## Label

### Variants
```tsx
<Label variant="default">Email</Label>
<Label variant="secondary">Optional</Label>
```

### Sizes
```tsx
<Label size="sm">Small</Label>
<Label size="md">Medium</Label>
<Label size="lg">Large</Label>
```

### Examples
```tsx
// Default label
<Label>Email Address</Label>

// Secondary label
<Label variant="secondary">Phone (Optional)</Label>

// Small label
<Label size="sm">Code</Label>

// Large label
<Label size="lg">Full Name</Label>

// With disabled field
<Field disabled>
  <Label>Username</Label>
  <Input placeholder="Enter username" disabled />
</Field>
```

## InputGroupAddon

### Alignment
```tsx
<InputGroupAddon align="inline-start">prefix</InputGroupAddon>
<InputGroupAddon align="inline-end">suffix</InputGroupAddon>
```

### Examples
```tsx
// Prefix
<InputGroup>
  <InputGroupAddon align="inline-start">
    <MailIcon />
  </InputGroupAddon>
  <Input placeholder="Email" />
</InputGroup>

// Suffix
<InputGroup>
  <Input placeholder="Search" />
  <InputGroupAddon align="inline-end">
    <SearchIcon />
  </InputGroupAddon>
</InputGroup>

// With text prefix
<InputGroup>
  <InputGroupAddon align="inline-start">https://</InputGroupAddon>
  <Input placeholder="example.com" />
</InputGroup>

// With keyboard shortcut
<InputGroup>
  <Input placeholder="Find" />
  <InputGroupAddon align="inline-end">
    <kbd>⌘K</kbd>
  </InputGroupAddon>
</InputGroup>
```

## Alert

### Variants
```tsx
<Alert variant="destructive">Error</Alert>
<Alert variant="success">Success</Alert>
<Alert variant="warning">Warning</Alert>
<Alert variant="info">Info</Alert>
```

### Examples
```tsx
// Destructive alert
<Alert variant="destructive">
  <AlertDescription>
    This action is destructive and cannot be undone.
  </AlertDescription>
</Alert>

// Success alert
<Alert variant="success">
  <AlertDescription>
    Your changes have been saved successfully.
  </AlertDescription>
</Alert>

// Warning alert
<Alert variant="warning">
  <AlertDescription>
    Your account will expire in 3 days.
  </AlertDescription>
</Alert>

// Info alert
<Alert variant="info">
  <AlertDescription>
    New features are available in the latest update.
  </AlertDescription>
</Alert>
```

## Types

### Using VariantProps

To extend component types with CVA variant props:

```tsx
import type { VariantProps } from 'class-variance-authority';
import { buttonVariants } from '@/components/ui/button/types';

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

// ButtonVariantProps is:
// {
//   variant?: 'filled' | 'outlined' | 'filled-rounded' | ...;
//   size?: 'sm' | 'md' | 'lg' | 'square-sm' | 'square-md' | 'square-lg';
// }
```

### Extending Custom Props

```tsx
import type { VariantProps } from 'class-variance-authority';
import { badgeVariants } from '@/components/ui/badge/types';

interface CustomBadgeProps
  extends VariantProps<typeof badgeVariants> {
  customProp?: string;
  onClick?: () => void;
}

function CustomBadge({
  variant = 'filled',
  size = 'md',
  customProp,
  onClick,
  ...props
}: CustomBadgeProps) {
  return (
    <badge
      className={badgeVariants({ variant, size })}
      onClick={onClick}
      {...props}
    >
      {customProp}
    </badge>
  );
}
```

### Combining with HTML Attributes

```tsx
import type { VariantProps } from 'class-variance-authority';
import { typographyVariants } from '@/components/ui/typography/types';

interface CustomHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
}
```

## CVA Reference Cards

### Button Variants
```
filled              - Primary action, solid background
outlined            - Secondary action, border only
filled-rounded      - Primary action with rounded corners
outlined-rounded    - Secondary action with rounded corners
ghost               - Subtle action, transparent background
ghost-rounded       - Subtle action with rounded corners
link                - Text only, minimal action
destructive         - Danger action, red styling
destructive-rounded - Danger action with rounded corners
success             - Success action, green styling
success-rounded     - Success action with rounded corners
```

### Badge Variants
```
filled       - Solid background color
outlined     - Border only, transparent background
destructive  - Red styling for errors
success      - Green styling for success
warning      - Yellow styling for warnings
info         - Blue styling for information
dot          - Small dot variant
```

### Toggle Sizes
```
sm - 32px height
md - 40px height (default)
lg - 48px height
```

### ToggleGroup Types
```
single   - Radio-like behavior, one selection
multiple - Checkbox-like behavior, multiple selections
```

### ToggleGroup Orientation
```
horizontal - Buttons arranged horizontally (default)
vertical   - Buttons arranged vertically
```

### Typography Variants
```
display1     - 5.5rem, 96px line-height
display2     - 4rem, 72px line-height
display3     - 3.5rem, 64px line-height
display4     - 3rem, 56px line-height
h1           - 2.5rem, 48px line-height (page title)
h2           - 2rem, 40px line-height (section title)
h3           - 1.75rem, 36px line-height
h4           - 1.5rem, 32px line-height
h5           - 1.25rem, 28px line-height
h6           - 1rem, 24px line-height
subtitle1    - 1.125rem, 24px line-height
subtitle2    - 1rem, 24px line-height
subtitle3    - 0.875rem, 20px line-height
subtitle4    - 0.75rem, 16px line-height
body1        - 1rem, 24px line-height (default)
body2        - 0.875rem, 20px line-height
body3        - 0.75rem, 16px line-height
label1       - 0.875rem, 20px line-height
label2       - 0.75rem, 16px line-height
```

### Typography Colors
```
primary      - Primary text color
secondary    - Secondary text color
destructive  - Destructive (red) text color
success      - Success (green) text color
warning      - Warning (yellow) text color
info         - Info (blue) text color
```

### Tabs Sizes
```
sm - 32px height
md - 40px height (default)
lg - 48px height
```

### Accordion Sizes
```
sm - Small text and spacing (xs)
md - Medium text and spacing (sm, default)
lg - Large text and spacing (base)
```

### Sidebar Menu Button Variants
```
default - Hover background accent
outline  - Outline border with shadow
```

### Sidebar Menu Button Sizes
```
default - 32px height, sm text
sm      - 28px height, xs text
lg      - 48px height, sm text
```

### ButtonGroup Orientation
```
horizontal - Buttons arranged horizontally (default)
vertical   - Buttons arranged vertically
```

### MenubarItem Variants
```
default      - Standard styling
destructive  - Red text styling
```

### Menubar Inset
```
true  - Adds left padding (2rem)
false - No padding (default)
```

### Label Variants
```
default   - Primary text color
secondary - Secondary text color
```

### Label Sizes
```
sm - 0.75rem, 16px line-height
md - 0.875rem, 20px line-height (default)
lg - 1rem, 24px line-height
```

### InputGroupAddon Alignment
```
inline-start - Left side (prefix, default)
inline-end   - Right side (suffix)
```

### Alert Variants
```
destructive - Red styling for errors
success     - Green styling for success
warning     - Yellow styling for warnings
info        - Blue styling for information
```

## Common Patterns

### Consistent Button Styling
```tsx
// Primary actions - filled
<Button variant="filled">Save</Button>
<Button variant="filled">Submit</Button>
<Button variant="filled-rounded">Create</Button>

// Secondary actions - outlined
<Button variant="outlined">Cancel</Button>
<Button variant="outlined">Back</Button>
<Button variant="outlined-rounded">Edit</Button>

// Subtle actions - ghost
<Button variant="ghost">Close</Button>
<Button variant="ghost">Dismiss</Button>
<Button variant="ghost-rounded">
  <ShareIcon />
</Button>

// Destructive actions - destructive
<Button variant="destructive">Delete</Button>
<Button variant="destructive">Disable</Button>

// Success actions - success
<Button variant="success">Confirm</Button>
<Button variant="success-rounded">
  <CheckIcon />
</Button>
```

### Badge Hierarchy
```tsx
// Prominent - filled
<Badge variant="filled">New</Badge>
<Badge variant="filled">Pro</Badge>

// Subtle - outlined
<Badge variant="outlined">Info</Badge>

// Status - semantic
<Badge variant="success">Complete</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="info">Note</Badge>
```

### Typography Hierarchy
```tsx
// Page
<Typography variant="display1">Welcome</Typography>
<Typography variant="h1">Documentation</Typography>
<Typography variant="h2">Getting Started</Typography>

// Content
<Typography variant="body1">Main content text</Typography>
<Typography variant="body2" color="secondary">
  Supporting information
</Typography>
<Typography variant="label1">Form field label</Typography>
```

## Important Notes

- **ALWAYS** use built-in `variant` and `size` props instead of custom CSS
- Variants provide consistent styling across components
- Default variants are designed for most use cases
- Use `destructive` variant only for dangerous/irreversible actions
- Use semantic badge/alert variants (success, warning, info) to convey status
- Typography variants follow a clear hierarchy from display to label
- Size options (`sm`, `md`, `lg`) maintain consistent scaling
- CVA components automatically handle focus, hover, and disabled states
- Use `VariantProps<typeof variants>` to type custom component extensions
- Avoid custom `className` overrides - use variants instead

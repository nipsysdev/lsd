---
name: nipsys-lsd
description: Use when implementing UI components with @nipsys/lsd in React 19.2.4+ projects. Covers 38+ components, styling conventions, spacing scale, design system integration, TypeScript types, CVA patterns, and common usage patterns.
---

# LSD React Component Library

**LSD** (@nipsys/lsd) is a comprehensive component library built on Radix UI primitives, providing 38+ accessible, composable UI components for React 19.2.4+ applications. It uses TypeScript, Tailwind CSS v4, and CVA (class-variance-authority) for variant management.

The design system follows a monochromatic aesthetics approach with 5 accent themes (monochrome, teal, nord, terracotta, catppuccin). Components are fully accessible, keyboard-navigable, and include built-in light/dark mode support with theme persistence.

## Project Context

Before implementing, verify:
1. **Check package.json** for `@nipsys/lsd` dependency
2. **Verify Tailwind CSS v4** configuration in project
3. **Check tsconfig.json** for path mappings to resolve `@nipsys/lsd`
4. **Confirm React 19.2.4+** version compatibility

```bash
grep -E '@nipsys/lsd|react|tailwindcss' package.json
```

## When to Use This Skill

Use this skill when:
• Building or editing UI components in React 19.2.4+ projects using @nipsys/lsd
• Implementing forms, navigation, overlays, or feedback components
• Need to follow LSD design system conventions (spacing, colors, typography)
• Working with component composition (Dialog, InputGroup, Tabs, etc.)
• Creating new components that need to match LSD patterns
• Debugging LSD component implementation issues
• Choosing the right component from 38+ options for a given UI need

DO NOT use this skill for:
• General React development without LSD components
• Creating components that don't follow LSD patterns
• Monorepo-specific tasks (docs generator, E2E testing)

## Core Principles

1. **Use existing components first** - Check if an LSD component fits the need before building custom solutions
2. **Compose, don't reinvent** - LSD components are designed to be combined and nested
3. **Use built-in variants before custom styles** - Leverage variant props instead of custom className overrides
4. **Use semantic colors only** - Stick to `text-primary` and `text-destructive` color tokens

## Critical Rules

### Spacing
**Always use LSD spacing variables, NEVER standard Tailwind classes:**
- ✅ `className="mt-(--lsd-spacing-base)"`
- ❌ `className="mt-4"`

See [references/spacing.md](references/spacing.md) for the 7-value scale and usage examples.

### Color Tokens
Use only approved LSD color tokens:
- ✅ `text-primary`, `text-destructive`
- ❌ `text-muted-foreground`, `bg-muted`

See [references/colors.md](references/colors.md) for the complete color token system.

### Typography
Use the Typography component with approved variants:
- `h1`-`h5` - Headings
- `subtitle1`-`subtitle2` - Subtitles
- `body1`-`body2` - Body text
- `label1`-`label2` - Labels

See [references/typography.md](references/typography.md) for usage guidelines.

### Icons
**Always use Phosphor icons from `@phosphor-icons/react`:**
- Use `weight="duotone"` for most icons
- Exceptions: `CheckIcon`, `PlusIcon` use default weight

See [references/icons.md](references/icons.md) for common patterns and examples.

### Component Composition
Use sub-components for composition:
- Dialog → DialogRoot, DialogTrigger, DialogContent, DialogTitle, DialogClose
- InputGroup → InputGroupRoot, InputGroupAddOn, InputGroupAddOnIcon

See [references/composition.md](references/composition.md) for all composition patterns.

### CVA Patterns
10 components use CVA for variants. Use the `variant` and `size` props:
- Button, TextField, Badge, Checkbox, Switch, etc.

See [references/cva-patterns.md](references/cva-patterns.md) for variant details.

## Component Selection Guide

| Need | Use | Example |
|------|-----|---------|
| Buttons, actions | Button | `<Button variant="filled">Save</Button>` |
| Primary/secondary actions | ButtonGroup | `<ButtonGroup><Button>Yes</Button><Button>No</Button></ButtonGroup>` |
| Text input | Input | `<Input placeholder="Enter text" />` |
| Multi-line text | Textarea | `<Textarea rows={4} />` |
| Selector with search | Select | `<Select options={items} />` |
| Custom autocomplete | Autocomplete | `<Autocomplete options={items} completeOnEmpty />` |
| Yes/no toggle | Switch | `<Switch checked={value} onChange={set} />` |
| 2-5 option toggle | ToggleGroup | `<ToggleGroup onValueChange={set}><Toggle value="1" /></ToggleGroup>` |
| Radio buttons | RadioGroup | `<RadioGroup items={items} />` |
| Checkbox | Checkbox | `<Checkbox checked={value} onChange={set} />` |
| Toggle button | Toggle | `<Toggle pressed={value} onPressedChange={set} />` |
| Form validation | Form | `<Form onSubmit={handleSubmit}><Field name="email" /></Form>` |
| Input with prefix/suffix | InputGroup | `<InputGroup><InputGroupAddOn>$</InputGroupAddOn><Input /></InputGroup>` |
| Modal dialog | Dialog | `<Dialog><DialogTrigger>Open</DialogTrigger><DialogContent>...</DialogContent></Dialog>` |
| Alert dialog | AlertDialog | `<AlertDialog><AlertDialogTrigger>Delete</AlertDialogTrigger>...</AlertDialog>` |
| Slide-over sheet | Sheet | `<Sheet><SheetTrigger>Open</SheetTrigger><SheetContent>...</SheetContent></Sheet>` |
| Tooltip | Tooltip | `<Tooltip content="Help"><Button>?</Button></Tooltip>` |
| Dropdown menu | DropdownMenu | `<DropdownMenu><DropdownMenuTrigger>Menu</DropdownMenuTrigger>...</DropdownMenu>` |
| Command palette | Command | `<Command><CommandInput>Search</CommandInput>...</Command>` |
| Tabs | Tabs | `<Tabs value={tab}><TabsList><TabsTrigger value="1" /></TabsList><TabsContent value="1" /></Tabs>` |
| Navigation menu | NavigationMenu | `<NavigationMenu><NavigationMenuList><NavigationMenuItem><NavigationMenuTrigger>Menu</NavigationMenuTrigger>...</NavigationMenuItem></NavigationMenuList></NavigationMenu>` |
| Menu bar | Menubar | `<Menubar><MenubarMenu><MenubarTrigger>File</MenubarTrigger>...</MenubarMenu></Menubar>` |
| Alert message | Alert | `<Alert><InfoIcon /><AlertDescription>Warning</AlertDescription></Alert>` |
| Progress indicator | Progress | `<Progress value={75} />` |
| Toast notifications | Sonner | `<Toaster><Sonner toast={toast} /></Toaster>` |
| Badge | Badge | `<Badge variant="filled">New</Badge>` |
| Card | Card | `<Card><CardHeader><CardTitle>Title</CardTitle></CardHeader><CardContent>...</CardContent></Card>` |
| Avatar | Avatar | `<Avatar><AvatarImage src="..." /><AvatarFallback>JD</AvatarFallback></Avatar>` |
| Table | Table | `<Table><TableHeader><TableRow><TableHead>Name</TableHead></TableRow></TableHeader><TableBody>...</TableBody></Table>` |
| Separator | Separator | `<Separator />` |
| Scroll area | ScrollArea | `<ScrollArea><div className="max-h-64">...</div></ScrollArea>` |
| Calendar | Calendar | `<Calendar mode="single" selected={date} onSelect={setDate} />` |
| Sidebar | Sidebar | `<Sidebar><SidebarHeader><SidebarLogo>...</SidebarLogo></SidebarHeader><SidebarContent><SidebarGroup><SidebarGroupLabel>Menu</SidebarGroupLabel><SidebarMenu><SidebarMenuItem>...</SidebarMenuItem></SidebarMenu></SidebarGroup></SidebarContent></Sidebar>` |
| Slider | Slider | `<Slider defaultValue={[50]} />` |
| Typography | Typography | `<Typography variant="body1">Text</Typography>` |

See [references/component-list.md](references/component-list.md) for complete component catalog with examples.

## Component Architecture Patterns

LSD components use 5 architectural patterns. All patterns use `forwardRef` for ref forwarding, `cn()` for class merging, and `displayName` for debugging.

1. **Radix Primitive Wrapper** (25+ components) - Wraps Radix primitives with LSD styling. Examples: Button, Dialog, Checkbox, Switch, Tooltip.
2. **CVA Pattern** (10 components) - Uses class-variance-authority for variant management with `variant` and `size` props. Examples: Button, Badge, TextField, RadioGroup.
3. **Context Provider** (8 components) - Composite components with shared state via React Context. Examples: Tabs, InputGroup, Form, Dialog, NavigationMenu.
4. **Static Component** (5 components) - Simple presentational components without complex state. Examples: Card, Alert, Avatar, Separator, Badge.
5. **Composite/Custom** (3 components) - Complex components combining multiple patterns or external libraries. Examples: Autocomplete (Radix Popover + cmdk), Calendar (react-day-picker), Sonner (toast system).

See [references/architecture.md](references/architecture.md) for detailed patterns with code examples.

## Import Patterns

```typescript
// Components
import { Button, Card, CardContent, CardTitle, Typography } from '@nipsys/lsd';

// Sub-components
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from '@nipsys/lsd';

// Utilities
import { cn } from '@nipsys/lsd';

// Types
import type { SizeVariant, SquareSize, BorderVariant } from '@nipsys/lsd';

// Icons (external)
import { PlusIcon, ShareIcon, CheckIcon } from '@phosphor-icons/react';
```

## Key LSD-Specific Details

### Spacing Scale
Always use LSD spacing variables instead of Tailwind classes. See [references/spacing.md](references/spacing.md) for the complete 7-value scale.

### Theme System
- **Modes:** `light` (default), `dark` (via `.dark` class)
- **Accents:** `monochrome`, `teal`, `nord`, `terracotta`, `catppuccin` (via `data-theme` attribute)
- **Fonts:** `monospace` (default), `serif`, `sans-serif` (via CSS classes)

### Forward Ref Pattern
Always use `forwardRef` and set `displayName`:
```tsx
const Component = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, ...props }, ref) => (
    <Button ref={ref} className={cn('...', className)} {...props} />
  )
);
Component.displayName = 'ComponentName';
```

### Disabled State Pattern
Check component's `disabled` prop:
```tsx
<Button disabled={isLoading} disabledText="Saving...">
  {isLoading ? '...' : 'Submit'}
</Button>
```

## Workflow

1. **Check installed LSD components** - `grep '@nipsys/lsd' package.json`
2. **Identify required UI element** - What interaction? What state? What accessibility?
3. **Consult Component Selection Guide** - Find component, review variants, check composition needs
4. **Read component documentation** - Check props, defaults, examples, sub-components
5. **Import component correctly** - `import { Component } from '@nipsys/lsd'`
6. **Implement using LSD patterns** - Use built-in variants, LSD spacing, composition, forwardRef
7. **Use LSD spacing and colors** - Replace Tailwind classes with LSD variables, use only `text-primary`/`text-destructive`, apply proper typography
8. **Verify accessibility** - Check keyboard navigation, ARIA attributes, screen reader compatibility

## Common Pitfalls

| ❌ Avoid | ✅ Do Instead |
|---------|---------------|
| Standard Tailwind spacing (`mb-4`, `mt-2`) | LSD spacing variables (`mt-(--lsd-spacing-base)`) |
| Non-LSD colors (`text-muted-foreground`) | LSD colors (`text-primary`, `text-destructive`) |
| Missing sub-components in composition | Import and use all required sub-components |
| Forgetting `displayName` with `forwardRef` | Always add `Component.displayName = 'ComponentName'` |
| Not using `cn()` for class merging | `const className = cn('base-classes', props.className)` |
| Skipping accessibility attributes | Use built-in Radix accessibility, add custom ARIA when needed |
| Testing visual styling in E2E tests | Focus on functional behavior only |
| Creating custom variants | Use CVA `variant` prop or file issue for new variant |

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Spacing variables not applying | Verify Tailwind v4 CSS imports include `@nipsys/lsd/styles/core.css` or `dist/style.css` |
| Theme not syncing in examples | Check `useSendThemeToIframes()` is called in example components |
| Icons not displaying | Ensure `@phosphor-icons/react` is installed and icons imported correctly |
| Composite components not working | Verify all sub-components are imported (e.g., Dialog → DialogTrigger, DialogContent) |
| Colors not matching docs | Use LSD color tokens (`text-primary`, `text-destructive`), not Tailwind equivalents |
| TypeScript errors on props | Check you're importing types: `import type { ButtonProps } from '@nipsys/lsd'` |
| Component not rendering | Ensure `'use client'` directive is present for components using hooks |

## References

- **[references/component-list.md](references/component-list.md)** - All 38+ components organized by category with quick lookup
- **[references/spacing.md](references/spacing.md)** - Complete spacing scale with usage examples and common patterns
- **[references/colors.md](references/colors.md)** - Color token system, semantic colors, and theme integration
- **[references/typography.md](references/typography.md)** - Typography variants, sizing, and responsive behavior
- **[references/icons.md](references/icons.md)** - Phosphor icon patterns, weight rules, and common icons
- **[references/composition.md](references/composition.md)** - Component composition rules and sub-component hierarchies
- **[references/cva-patterns.md](references/cva-patterns.md)** - CVA variant patterns, available variants, and customization
- **[references/architecture.md](references/architecture.md)** - Detailed architecture patterns with code examples
- **[examples/](examples/)** - Common usage patterns and implementation examples

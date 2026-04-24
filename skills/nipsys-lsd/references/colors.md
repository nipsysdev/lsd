# LSD Color Token System

Complete color token system for @nipsys/lsd with semantic meanings and theme integration.

## Concept

LSD uses a controlled color system to maintain design consistency and theme coherence.

## Semantic Colors

### Approved Colors
**ALWAYS use these colors in your components:**

- `text-primary` - Primary text color, foreground content
- `text-destructive` - Destructive actions, errors, warning states

### Forbidden Colors
**NEVER use these colors - they are not part of LSD:**

- `text-muted-foreground` ❌
- `bg-muted` ❌
- `ring-offset-background` ❌
- `accent` ❌
- `accent-foreground` ❌

## Usage Syntax

### Text Colors
```tsx
// Primary text
<Typography className="text-primary">Primary text</Typography>

// Destructive text
<Typography className="text-destructive">Error message</Typography>

// With hover states
<Button className="hover:text-destructive">Delete</Button>
```

### Border Colors
```tsx
// Primary border
<div className="border border-primary">...</div>

// With focus
<Input className="focus:border-primary" />

// With variants
<Button variant="outlined" className="border-primary text-primary">
  Border Button
</Button>
```

### Background Colors
```tsx
// Transparent backgrounds (LSD default)
<Card className="bg-transparent">...</Card>

// Hover states
<Button className="hover:bg-primary/10">Hover</Button>
```

## Theme Integration

### Light Mode (default)
- `text-primary` → Dark gray (`#1a1a1a`)
- `text-destructive` → Red (`#dc2626`)

### Dark Mode (`.dark` class)
- `text-primary` → Light gray (`#e5e5e5`)
- `text-destructive` → Light red (`#f87171`)

### Accent Themes
Accent colors are applied via `data-theme` attribute on HTML element:
- `monochrome` - Black/white
- `teal` - Teal accent
- `nord` - Nord color palette
- `terracotta` - Terracotta accent
- `catppuccin` - Catppuccin palette

## Component Patterns

### Button States
```tsx
// Filled button (primary action)
<Button variant="filled">Save</Button>
// Uses text-primary for text, theme accent for background

// Outlined button (secondary action)
<Button variant="outlined">Cancel</Button>
// Uses border-primary and text-primary

// Ghost button (subtle action)
<Button variant="ghost">Close</Button>
// Uses text-primary with transparent background

// Link button (minimal action)
<Button variant="link">Learn more</Button>
// Uses text-primary with underline

// Destructive button
<Button variant="destructive">Delete</Button>
// Uses text-destructive
```

### Input States
```tsx
// Default input
<Input className="border-primary text-primary" />

// Error state
<Input className="border-destructive text-destructive" />

// Disabled state
<Input className="border-primary text-primary opacity-50" disabled />
```

### Alert States
```tsx
// Info alert (default)
<Alert>
  <InfoIcon className="text-primary" />
  <AlertDescription className="text-primary">
    Information message
  </AlertDescription>
</Alert>

// Error alert
<Alert variant="destructive">
  <WarningIcon className="text-destructive" />
  <AlertDescription className="text-destructive">
    Error message
  </AlertDescription>
</Alert>
```

### Typography Colors
```tsx
// All text uses text-primary by default
<Typography variant="h1" className="text-primary">
  Heading
</Typography>

<Typography variant="body1" className="text-primary">
  Body text
</Typography>

// Destructive messages
<Typography variant="body2" className="text-destructive">
  This field is required
</Typography>
```

### Icon Colors
```tsx
// Icons inherit text color
<PlusIcon className="text-primary" />
<TrashIcon className="text-destructive" />

// Icon with hover
<Button>
  <ShareIcon className="text-primary hover:text-destructive" />
</Button>
```

## Hover and Focus States

### Hover States
```tsx
// Text hover
<Typography className="text-primary hover:text-destructive cursor-pointer">
  Delete
</Typography>

// Background hover
<Button className="hover:bg-primary/10">
  Hover effect
</Button>

// Border hover
<Card className="border-primary hover:border-destructive">
  Hover me
</Card>
```

### Focus States
```tsx
// Focus ring (built into components)
<Input className="focus:ring-2 focus:ring-primary" />

// Focus text
<Button className="focus:text-destructive">
  Focus me
</Button>
```

## Common Patterns

### Success/Error States
```tsx
// Success (uses primary color for neutral success)
<div className="flex items-center gap-(--lsd-spacing-smaller)">
  <CheckIcon className="text-primary" />
  <Typography variant="body1" className="text-primary">
    Saved successfully
  </Typography>
</div>

// Error
<div className="flex items-center gap-(--lsd-spacing-smaller)">
  <ErrorIcon className="text-destructive" />
  <Typography variant="body1" className="text-destructive">
    Something went wrong
</Typography>
</div>
```

### Form Validation
```tsx
// Error message
<Typography variant="label1" className="text-destructive mb-(--lsd-spacing-smaller)">
  This field is required
</Typography>
<Input className="border-destructive text-destructive" />

// Success message
<Typography variant="label1" className="text-primary mb-(--lsd-spacing-smaller)">
  Valid
</Typography>
<Input className="border-primary text-primary" />
```

### Badge Styles
```tsx
// Default badge
<Badge className="text-primary bg-primary/10">Default</Badge>

// Destructive badge
<Badge className="text-destructive bg-destructive/10">Error</Badge>
```

## Color Reference Cards

### Approved Colors
```
text-primary       → Primary text, foreground content
text-destructive   → Destructive actions, errors, warnings
```

### Forbidden Colors
```
text-muted-foreground    ❌ Not part of LSD
bg-muted                 ❌ Not part of LSD
ring-offset-background   ❌ Not part of LSD
accent                   ❌ Not part of LSD
accent-foreground        ❌ Not part of LSD
```

### Theme Behavior
```
Light Mode:
  text-primary      → Dark gray
  text-destructive  → Red

Dark Mode (.dark class):
  text-primary      → Light gray
  text-destructive  → Light red

Accent Themes (data-theme):
  monochrome, teal, nord, terracotta, catppuccin
```

## Important Notes

- **ALWAYS** use `text-primary` for normal content
- **ALWAYS** use `text-destructive` for destructive actions and errors
- **NEVER** use `text-muted-foreground` or `bg-muted` - these don't exist in LSD
- Colors automatically adapt to light/dark mode
- Component variants (`filled`, `outlined`, `ghost`, `link`) handle colors internally
- Icons inherit text color unless explicitly set
- Hover and focus states should use the same color system
- Maintain visual hierarchy with consistent color usage

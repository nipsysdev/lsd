# LSD Spacing System

Complete spacing scale for @nipsys/lsd with usage patterns and examples.

## Concept

**CRITICAL:** Always use LSD spacing variables with `var()`, NEVER standard Tailwind spacing classes.

## The 7-Value Scale

| Variable | Value | Tailwind Equivalent | Use Case |
|----------|-------|---------------------|----------|
| `--lsd-spacing-smallest` | 0.25rem | `4px` / `p-1` / `gap-1` | Tight spacing, icon with text |
| `--lsd-spacing-smaller` | 0.5rem | `8px` / `p-2` / `gap-2` | Default sibling spacing |
| `--lsd-spacing-small` | 0.75rem | `12px` / `p-3` / `gap-3` | Medium gaps |
| `--lsd-spacing-base` | 1rem | `16px` / `p-4` / `gap-4` | Section margins/padding |
| `--lsd-spacing-large` | 1.25rem | `20px` / `p-5` / `gap-5` | Large gaps |
| `--lsd-spacing-larger` | 1.5rem | `24px` / `p-6` / `gap-6` | Section spacing |
| `--lsd-spacing-largest` | 1.75rem | `28px` / `p-7` / `gap-7` | Maximum spacing |

## Usage Syntax

### Margin
```tsx
// Single direction
className="mt-(--lsd-spacing-base)"      // margin-top
className="mb-(--lsd-spacing-smaller)"    // margin-bottom
className="ml-(--lsd-spacing-small)"      // margin-left
className="mr-(--lsd-spacing-base)"       // margin-right

// Multiple directions
className="mx-(--lsd-spacing-base)"       // margin-x (left & right)
className="my-(--lsd-spacing-base)"       // margin-y (top & bottom)
className="m-(--lsd-spacing-large)"       // margin (all directions)
```

### Padding
```tsx
// Single direction
className="pt-(--lsd-spacing-base)"      // padding-top
className="pb-(--lsd-spacing-smaller)"   // padding-bottom
className="pl-(--lsd-spacing-small)"     // padding-left
className="pr-(--lsd-spacing-base)"      // padding-right

// Multiple directions
className="px-(--lsd-spacing-base)"      // padding-x
className="py-(--lsd-spacing-base)"      // padding-y
className="p-(--lsd-spacing-large)"      // padding (all directions)
```

### Gap
```tsx
// Flexbox gap
className="flex gap-(--lsd-spacing-base)"

// Grid gap
className="grid grid-cols-2 gap-(--lsd-spacing-base)"

// Row/column gap
className="grid gap-x-(--lsd-spacing-base) gap-y-(--lsd-spacing-smaller)"
```

## Common Patterns

### Icons with Text
```tsx
// Icon + text in button
<Button>
  <PlusIcon className="mr-(--lsd-spacing-smaller)" />
  Add Item
</Button>

// Icon + text in list item
<div className="flex items-center">
  <CheckIcon className="mr-(--lsd-spacing-smaller)" />
  <Typography variant="body1">Completed</Typography>
</div>
```

### Card Spacing
```tsx
// Card header padding
<CardHeader className="pb-(--lsd-spacing-base)">

// Card content padding
<CardContent className="pt-(--lsd-spacing-base)">
```

### Form Field Spacing
```tsx
// Label + input gap
<div className="flex flex-col gap-(--lsd-spacing-smaller)">
  <Typography variant="label1">Email</Typography>
  <Input type="email" />
</div>

// Form field spacing
<Field name="email" className="mb-(--lsd-spacing-base)" />
```

### Section Spacing
```tsx
// Between sections
<div className="space-y-(--lsd-spacing-larger)">

// Section margins
<section className="my-(--lsd-spacing-largest)">
```

### Button Group Spacing
```tsx
// Buttons with gap
<div className="flex gap-(--lsd-spacing-base)">
  <Button variant="filled">Save</Button>
  <Button variant="outlined">Cancel</Button>
</div>
```

### Table Cell Spacing
```tsx
// Table cell padding
<TableCell className="px-(--lsd-spacing-base) py-(--lsd-spacing-small)">
```

### Dialog Content Spacing
```tsx
// Dialog content padding
<DialogContent className="p-(--lsd-spacing-large)">
```

## Responsive Spacing

Tailwind's responsive prefixes work with LSD variables:

```tsx
// Different spacing on different breakpoints
<div className="mt-(--lsd-spacing-base) md:mt-(--lsd-spacing-larger)">

// Gap responsive
<div className="flex gap-(--lsd-spacing-base) md:gap-(--lsd-spacing-large)">
```

## Negative Spacing

```tsx
// Pull elements closer
<div className="-mt-(--lsd-spacing-base)">
```

## Examples from LSD components

### Alert Component
```tsx
// Icon + text gap
<AlertIcon className="mr-(--lsd-spacing-smaller)" />
```

### Card Component
```tsx
// Header bottom margin
<CardHeader className="pb-(--lsd-spacing-base)">

// Content zero padding
<CardContent className="pt-0">
```

### Badge Component
```tsx
// Icon + badge text
<CheckIcon className="mr-(--lsd-spacing-smallest)" />
```

## Reference Cards

### Spacing Decision Tree
```
Tight spacing (icon + text)  →  --lsd-spacing-smallest (4px)
Default sibling spacing      →  --lsd-spacing-smaller (8px)
Medium gaps                  →  --lsd-spacing-small (12px)
Section margins/padding      →  --lsd-spacing-base (16px)
Large gaps                   →  --lsd-spacing-large (20px)
Section spacing              →  --lsd-spacing-larger (24px)
Maximum spacing              →  --lsd-spacing-largest (28px)
```

### Quick Reference
```
Tightest: --lsd-spacing-smallest (4px)  [icon with text]
Tighter:  --lsd-spacing-smaller (8px)   [default sibling]
Small:    --lsd-spacing-small (12px)    [medium gaps]
Base:     --lsd-spacing-base (16px)     [section padding]
Large:    --lsd-spacing-large (20px)    [large gaps]
Larger:   --lsd-spacing-larger (24px)   [section spacing]
Largest:  --lsd-spacing-largest (28px)  [maximum spacing]
```

## Important Notes

- **ALWAYS** use `var()` syntax in className: `className="mt-(--lsd-spacing-base)"`
- **NEVER** use Tailwind numbers: `className="mt-4"`
- The scale is intentionally small (7 values) to maintain consistency
- Spacing variables are defined in CSS custom properties
- All LSD components use these spacing variables internally
- Use responsive prefixes when needed for different screen sizes

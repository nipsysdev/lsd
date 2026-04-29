# CVA (Class Variance Authority) Variant Patterns - LSD Codebase Reference

## CVA Concept Overview

CVA is a utility for managing component variants in a type-safe, composable way. It allows components to define multiple variant categories (e.g., visual style, size) that combine into className sets without conflicts.

Key benefits:
- Type-safe variant combinations
- Conflict resolution through className merging
- Composable variant definitions
- Default values for each variant category

## Component Reference

### 1. Button
**Variants**: filled, outlined, filled-rounded, outlined-rounded, link, ghost, ghost-rounded, destructive, destructive-rounded, success, success-rounded
**Sizes**: sm, md, lg, square-sm, square-md, square-lg
**Notes**: Most complete variant system; includes semantic (destructive, success), shape variants (rounded), and button-specific (square) sizes

### 2. Badge
**Variants**: filled, outlined, destructive, success, warning, info, dot
**Sizes**: sm, md, lg
**Notes**: Semantic variants aligned with alert types; includes dot variant for indicators

### 3. Toggle
**Sizes**: sm, md, lg
**Pattern**: Uses `data-state="on"` attribute for highlight state instead of variant prop

### 4. Label
**Variants**: default, secondary
**Sizes**: sm, md, lg
**Notes**: Minimal variant set focused on visual weight

### 5. Alert
**Variants**: destructive, success, warning, info
**Pattern**: Semantic-only variants for status communication

### 6. InputGroupAddon
**Variants**: Defined (specific to input grouping context)

### 7. Tabs
**Size**: sm, md, lg
**Features**: fullWidth boolean prop
**Variant Sets**: tabsListVariants, tabsTriggerVariants (nested variant system)

### 8. Accordion
**Size**: sm, md, lg
**Variant Sets**: accordionTriggerVariants, accordionContentVariants (nested variant system)

### 9. SidebarMenuButton
**Variants**: default, outline
**Sizes**: default, sm, lg
**Notes**: Variant set specific to sidebar navigation context

### 10. ButtonGroup
**Variants**: orientation: horizontal, vertical
**Pattern**: orientation-only variant, no visual styling variants

### 11. Typography
**Variants**: display1, display2, display3, display4, h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, subtitle3, subtitle4, body1, body2, body3, label1, label2
**Colors**: primary, secondary, destructive, success, warning, info
**Pattern**: Hierarchical type scale with separate variant for semantic coloring

### 12. Menubar
**Pattern**: Multiple variant types for nested menu structure

### 13. NavigationMenuTrigger
**Pattern**: Uses navigationMenuTriggerStyle helper for variant application

## Example Usage

### Button Component
```tsx
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors",
  {
    variants: {
      variant: {
        filled: "bg-primary text-primary-foreground hover:bg-primary/90",
        outlined: "border border-primary text-primary hover:bg-primary/5",
        ghost: "hover:bg-primary/5 text-primary",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        sm: "h-8 px-3 text-sm rounded-md",
        md: "h-10 px-4 text-base rounded-md",
        lg: "h-12 px-6 text-lg rounded-md",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "md",
    },
  }
);

// Usage
<Button variant="outlined" size="lg">Click me</Button>
```

### Badge Component
```tsx
const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 font-medium",
  {
    variants: {
      variant: {
        filled: "bg-primary text-primary-foreground",
        outlined: "border border-primary text-primary",
        destructive: "bg-destructive text-destructive-foreground",
        success: "bg-success text-success-foreground",
        dot: "flex items-center gap-1.5",
      },
      size: {
        sm: "text-xs px-2",
        md: "text-sm",
        lg: "text-base px-3",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "md",
    },
  }
);

// Usage
<Badge variant="success" size="sm">Active</Badge>
```

### Typography Component
```tsx
const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "text-4xl font-bold tracking-tight",
      h2: "text-3xl font-semibold tracking-tight",
      body1: "text-base leading-normal",
      label1: "text-sm font-medium",
    },
    color: {
      primary: "text-primary",
      secondary: "text-muted-foreground",
      destructive: "text-destructive",
    },
  },
  defaultVariants: {
    variant: "body1",
    color: "primary",
  },
});

// Usage
<Typography variant="h1" color="primary">Heading</Typography>
```

## Common Patterns

### Semantic Variants
Components communicate status through consistent semantic variant naming:
- `destructive`: Error states, dangerous actions
- `success`: Positive feedback, completed actions
- `warning`: Cautionary states
- `info`: Neutral information

### Shape Variants
Button component extends visual variants with shape modifiers:
- `-rounded` suffix: Increased border-radius
- Supports side-by-side use with visual variants (e.g., `filled-rounded`)

### Nested Variant Systems
Complex components expose multiple variant sets:
- Tabs: `tabsListVariants`, `tabsTriggerVariants`
- Accordion: `accordionTriggerVariants`, `accordionContentVariants`

### Size Standardization
Consistent size naming across components:
- `sm`: Small (condensed)
- `md`: Medium (default)
- `lg`: Large (expanded)
- Additional sizes: `square-*` for Button (square buttons)

### Data Attribute Pattern
State changes use data attributes instead of component variants:
- Toggle: `data-state="on"` for active state
- Allows dynamic styling without prop proliferation

### Orientation Variant
ButtonGroup demonstrates orientation as a variant type:
- `horizontal`: Default row layout
- `vertical`: Column layout

## Implementation Guidelines

1. **Define clear variant categories** (visual style, size, orientation)
2. **Use semantic naming** for status-related variants
3. **Provide sensible defaults** via `defaultVariants`
4. **Compose variants** through compound variants if needed
5. **Consider accessibility** in variant choices (color contrast, focus states)

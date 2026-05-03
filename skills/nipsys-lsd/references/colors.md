# LSD Color Tokens Reference

## Overview

LSD uses CSS custom properties (CSS variables) for theming. All colors must use these tokens—never raw hex values.

## Color Categories

| Category | Tokens | Purpose |
|----------|--------|---------|
| **Primary** | `--lsd-primary`, `--lsd-primary-content` | Brand color & contrast text |
| **Text** | `--lsd-text-neutral`, `--lsd-text-secondary` | Body and muted text |
| **Surface/Border** | `--lsd-background`, `--lsd-border` | Backgrounds and separators |
| **Semantic** | `--lsd-destructive`, `--lsd-success`, `--lsd-warning`, `--lsd-info` | Status and actions |

## Token Values

### Primary Colors

| Token | Light | Dark |
|-------|-------|------|
| `--lsd-primary` | #000000 | #ffffff |
| `--lsd-primary-content` | #ffffff | #000000 |

### Text Colors

| Token | Light | Dark |
|-------|-------|------|
| `--lsd-text-neutral` | #000000 | #ffffff |
| `--lsd-text-secondary` | #4a4a4a | #d2d2d2 |

### Surface & Border

| Token | Light | Dark |
|-------|-------|------|
| `--lsd-background` | #ffffff | #0a0a0a |
| `--lsd-foreground` | #f8f8f8 | #191919 |
| `--lsd-border` | #000000 | #ffffff |

### Semantic Colors

| Token | Light | Dark |
|-------|-------|------|
| `--lsd-destructive` | #da0000 | #e5484d |
| `--lsd-success` | #15803d | #22c55e |
| `--lsd-warning` | #b45309 | #d97706 |
| `--lsd-info` | #2563eb | #2563eb |

### Text Semantic Colors

| Token | Light | Dark |
|-------|-------|------|
| `--lsd-text-destructive` | #c92d2d | #f27a7a |
| `--lsd-text-success` | #1c9618 | #30c82a |
| `--lsd-text-warning` | #854d0e | #f59e0b |
| `--lsd-text-info` | #2563eb | #2563eb |

## Usage Examples (JSX)

```tsx
import { cn } from '@/lib/utils';

// Button with token colors
<button className="bg-(--lsd-primary) text-(--lsd-primary-content)">
  Primary Button
</button>

// Text variants
<p className="text-(--lsd-text-neutral)">Primary text</p>
<p className="text-(--lsd-text-secondary)">Secondary text</p>

// Semantic buttons
<button className="bg-(--lsd-destructive)">Delete</button>
<button className="bg-(--lsd-success)">Confirm</button>
<button className="bg-(--lsd-warning)">Wait</button>
<button className="bg-(--lsd-info)">Info</button>

// Card with surface and border
<div className="bg-(--lsd-background) border border-(--lsd-border)">
  Card content
</div>

// With utility helper
<div className={cn('p-(--lsd-spacing-base)', 'bg-(--lsd-background)', 'border-(--lsd-border)')}>
  Responsive card
</div>
```

## Theme Inheritance

Colors automatically switch based on the active theme (light/dark) set on the `html` or `body` element:

```tsx
// Theme provider handles token switching
<ThemeProvider defaultTheme="dark">
  <App />
</ThemeProvider>
```

Tokens are defined in the theme stylesheet and applied globally. No conditional logic needed—use the token name consistently.

## Overriding Tokens

Override specific tokens in your component or global CSS:

```css
/* Component override */
.custom-button {
  --lsd-primary: #6366f1;
}

/* Global override */
:root[data-theme="custom"] {
  --lsd-primary: #6366f1;
  --lsd-primary-content: #ffffff;
}
```

## Critical Rules

1. **NEVER use raw hex colors** in production code
2. **ALWAYS use token variables** for color values
3. **Token naming**: Prefixed with `--lsd-` for consistency
4. **Theme switching**: Automatic via data attributes
5. **Accessibility**: Semantic tokens maintain WCAG contrast ratios

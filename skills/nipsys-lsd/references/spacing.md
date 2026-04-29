## LSD Spacing System

A 7-step scale for consistent spacing across all components.

### Spacing Scale

| Variable Name | CSS Value | Pixels | Use Cases |
|---------------|-----------|--------|-----------|
| `--lsd-spacing-smallest` | 0.25rem | 4px | Tight spacing, icon text gaps |
| `--lsd-spacing-smaller` | 0.5rem | 8px | Small spacing, adjacent elements |
| `--lsd-spacing-small` | 0.75rem | 12px | Compact spacing, card headers |
| `--lsd-spacing-base` | 1rem | 16px | Default spacing, padding |
| `--lsd-spacing-large` | 1.25rem | 20px | Comfortable spacing, sections |
| `--lsd-spacing-larger` | 1.5rem | 24px | Generous spacing, layout gaps |
| `--lsd-spacing-largest` | 1.75rem | 28px | Maximum spacing, major sections |

### Tailwind Integration

Use parentheses syntax to reference LSD variables:

```tsx
// Padding
<p className="p-(--lsd-spacing-base)">
<p className="px-(--lsd-spacing-large) py-(--lsd-spacing-smaller)">

// Margin
<m className="m-(--lsd-spacing-base)">
<m className="mt-(--lsd-spacing-large) mb-(--lsd-spacing-smaller)">

// Gap
<div className="gap-(--lsd-spacing-base)">
<div className="flex gap-(--lsd-spacing-large)">
```

### Common Patterns

```
Component padding:          p-(--lsd-spacing-base)
Section spacing:            gap-(--lsd-spacing-large)
Header padding:             px-(--lsd-spacing-large) py-(--lsd-spacing-smaller)
List item spacing:          py-(--lsd-spacing-smaller)
Critical rule:              ALWAYS use LSD variables, NEVER Tailwind numbers
```

### Critical Rule

**Always use LSD spacing variables. Never use Tailwind arbitrary values (like p-4, gap-8).**

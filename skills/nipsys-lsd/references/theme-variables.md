# LSD Theme Variables Reference

## Theme Mechanism

LSD uses a two-layer theme system combining **color modes** (light/dark) with **accent themes**. Both work simultaneously—elements have both a mode and an accent theme.

## Mode Control

Color modes are controlled via CSS classes on the `<html>` or `<body>` element:

```tsx
// Light mode (default)
<html className="light">

// Dark mode
<html className="dark">

// Toggle between modes
<html className={isDark ? 'dark' : 'light'}>
```

## Accent Theme Control

Accent themes are set via the `data-theme` attribute on any HTML element. Child elements inherit their parent's accent theme.

```tsx
// Set global accent theme
<html data-theme="teal">

// Set section-specific accent theme
<section data-theme="nord">
  <button>Uses nord theme</button>
</section>

// Override for a specific component
<button data-theme="catppuccin">Custom accent</button>
```

## Built-in Accent Themes

| Theme | Style |
|-------|-------|
| `monochrome` | Black/white accent (default) |
| `teal` | Teal-based accent |
| `nord` | Cool blue-gray Nordic palette |
| `terracotta` | Warm earth tones |
| `catppuccin` | Pastel Catppuccin palette |

## CSS Variable Categories

### Structural Variables
- `--radius`: Base border radius (0.625rem / 10px)
- Radius variants: `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl`

### Typography Variables
- `--lsd-font-family`: Active font family (mono/sans-serif/serif)
- Font utility classes: `font-mono`, `font-sans`, `font-serif` (aliases as `font-sans-serif`)

### Color Variables
Full color token list available in [colors.md](./colors.md):
- Primary: `--lsd-primary`, `--lsd-primary-content`
- Text: `--lsd-text-neutral`, `--lsd-text-secondary`
- Background/Border: `--lsd-background`, `--lsd-foreground`, `--lsd-border`
- Semantic: `--lsd-destructive`, `--lsd-success`, `--lsd-warning`, `--lsd-info`

### Spacing Variables
- `--lsd-spacing-smallest` to `--lsd-spacing-largest`: 0.25rem to 1.75rem

## Custom Theme Creation

Create a custom accent theme by defining CSS variables scoped to a specific `data-theme` value:

```css
:root[data-theme="mytheme"] {
  --lsd-primary: #6366f1;
  --lsd-primary-content: #ffffff;
  --lsd-border: #818cf8;
}

[data-theme="mytheme"] .dark {
  --lsd-primary: #818cf8;
  --lsd-primary-content: #000000;
  --lsd-border: #6366f1;
}
```

Then apply it to any element:

```tsx
<div data-theme="mytheme">
  <button className="bg-(--lsd-primary)">
    Custom Theme Button
  </button>
</div>
```

## Theme Inheritance

Themes cascade hierarchically:
- Parent elements set the mode via CSS class
- Parent elements set accent theme via `data-theme`
- Child elements inherit both unless overridden

```tsx
// Parent sets dark mode + teal theme
<section className="dark" data-theme="teal">
  {/* Inherits dark + teal by default */}
  <p>Dark teal text</p>
  
  {/* Keeps dark mode, switches to catppuccin accent */}
  <div data-theme="catppuccin">
    <p>Dark catppuccin text</p>
  </div>
</section>
```

 accents apply at any scope—use broadly for page-level theming or narrowly for component-specific customization.

# Example Creation Guide

Creating example pages for LSD component documentation.

## File Structure

```
app/examples/
└── {component}/              # Lowercase, kebab-case
    └── {variant}/           # Lowercase, kebab-case
        └── page.tsx         # Must be named page.tsx
```

## Required Exports

```tsx
'use client';

import { Component } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendIframes';

// 1. SIZE - iframe height preset
export const SIZE: 'sm' | 'md' | 'lg' | 'xl' = 'md';

// 2. CODE - example source code with @docSection tag
/** @docSection usage */
export const CODE = `import { Component } from '@nipsys/lsd';

export function Example() {
  return <Component />;
}
`;

// 3. Example component (must call useSendThemeToIframes)
function ComponentVariantExample() {
  useSendThemeToIframes();
  return <Component />;
}

// 4. Default export
export default function VariantName() {
  return <ComponentVariantExample />;
}
```

## Valid @docSection Categories

| Category | Purpose |
|----------|---------|
| `usage` | Essential usage examples (basic/default) |
| `variant` | Visual style variants (filled, outlined, ghost, etc.) |
| `size` | Size variants (sm, md, lg, xl) |
| `feature` | Interactive features (with-icons, clearable, controlled) |
| `state` | Component states (disabled, loading, error, checked) |
| `layout` | Layout variations (grouped, nested, multi-column) |
| `behavior` | Interaction patterns (keyboard nav, async behavior) |

## Iframe Size Presets

| Size | Height | Best For |
|------|--------|----------|
| `sm` | 128px | Buttons, badges, icons, toasts |
| `md` | 256px | Inputs, checkboxes, switches, radio groups |
| `lg` | 450px | Cards, forms with multiple fields, tabs |
| `xl` | 600px | Tables, calendars, sheets, dialogs |

## Naming Conventions

**Directory → Title:**
- `basic` → "Basic"
- `with-icons` → "With Icons"
- `filled-variant` → "Filled Variant"

**Component name pattern:**
```tsx
function ComponentVariantExample() {
  // {Component}{Variant}Example
}
```

## Theme Sync Requirement

Every example MUST call `useSendThemeToIframes()`:

```tsx
function ExampleName() {
  useSendThemeToIframes();  // REQUIRED - no arguments
  return <Component />;
}
```

**How it works:**
1. Parent observes DOM for theme/font changes
2. Sends updates via postMessage to iframes
3. Example receives and applies theme changes

## Common Patterns

### Basic Example
```tsx
export const SIZE = 'md';
/** @docSection usage */
export function ButtonBasicExample() {
  useSendThemeToIframes();
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Button>Click me</Button>
    </div>
  );
}
```

### With Icons
```tsx
import { PlusIcon } from '@phosphor-icons/react';
/** @docSection feature */
export function ButtonWithIconsExample() {
  useSendThemeToIframes();
  return <Button><PlusIcon weight="duotone" /> Add</Button>;
}
```

### Controlled Component
```tsx
import { useState } from 'react';
/** @docSection feature */
export function CheckboxControlledExample() {
  useSendThemeToIframes();
  const [checked, setChecked] = useState(false);
  return <Checkbox checked={checked} onCheckedChange={setChecked} />;
}
```

## Best Practices

✅ **DO:**
- Always include `useSendThemeToIframes()`
- Always export `SIZE` constant
- Always include `@docSection` tag
- Use LSD spacing: `gap-(--lsd-spacing-base)`
- Wrap JSX in container div
- Name as `{Component}{Variant}Example`

❌ **DON'T:**
- Use Tailwind classes: `gap-4` (use `gap-(--lsd-spacing-base)`)
- Skip `useSendThemeToIframes()` (theme sync breaks)
- Forget `SIZE` or `CODE` exports
- Use non-LSD colors
- Use loose JSX (always wrap)

## Testing Checklist

- [ ] File at `app/examples/{component}/{variant}/page.tsx`
- [ ] `'use client'` directive
- [ ] Import component from `@nipsys/lsd`
- [ ] Export `SIZE`, `CODE`, default function
- [ ] Call `useSendThemeToIframes()`
- [ ] Use LSD spacing variables
- [ ] Test theme sync works
- [ ] Verify docs generator can parse

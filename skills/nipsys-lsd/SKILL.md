---
name: nipsys-lsd
description: Use with @nipsys/lsd in React 19+ projects for UI component implementation, theming, and design system integration. Triggers on: "lsd component", "lsd design system", "logos design system", "@nipsys/lsd", component library patterns with spacing tokens (--lsd-spacing-*).
metadata:
  version: 1.0.0
  category: frontend
  sources:
    - https://github.com/nipsysdev/lsd
    - https://lsd.nipsys.dev
---

# LSD Component Library (@nipsys/lsd)

LSD is a monochromatic, content-first component library built on Radix UI primitives with 39 components. High contrast, fully accessible, keyboard-navigable.

## Requirements
- **Node.js:** 24+
- **React:** 19+
- **Tailwind CSS:** v4

## Quick Discovery
```bash
# Verify installation
npm list @nipsys/lsd

# View component documentation
# https://lsd.nipsys.dev/components/[component-name]
```

## Critical Rules

### Spacing → [references/spacing.md](references/spacing.md)
Use LSD spacing variables ONLY:
- ✅ `className="mt-(--lsd-spacing-base)"`
- ❌ `className="mt-4"`

### Icons → [references/icons.md](references/icons.md)
All icons MUST use "Icon" suffix:
- ✅ `import { CheckIcon } from '@phosphor-icons/react'`
- ❌ `import { Check } from '@phosphor-icons/react'`

### Styling → [references/colors.md](references/colors.md)
Use semantic color tokens:
- ✅ `var(--lsd-primary)`, `var(--lsd-destructive)`
- ❌ `#0066ff`, `#ff0000` (raw hex values)

### Composition → [references/composition.md](references/composition.md)
Import all required sub-components:
- Dialog → Dialog, DialogTrigger, DialogContent, DialogTitle, DialogClose

## Component Selection Matrix

| Need | Use |
|------|-----|
| Primary action | Button with variant="filled" |
| Destructive action | Button with variant="destructive" |
| Form input | Input or Textarea |
| Form with validation | Field + Field components |
| Single-line text | Input |
| Multi-line text | Textarea |
| Dropdown selection | Select (with sub-components) |
| Yes/no toggle | Switch |
| 2-5 option toggle | ToggleGroup |
| Radio buttons | RadioGroup |
| Checkbox | Checkbox |
| Modal dialog | Dialog (with sub-components) |
| Confirmation dialog | AlertDialog |
| Slide-over panel | Sheet |
| Tooltip | Tooltip |
| Dropdown menu | DropdownMenu (12 sub-components) |
| Command palette | Command (cmdk-based) |
| Tabs | Tabs |
| Navigation menu | NavigationMenu |
| Menu bar | Menubar |
| Alert message | Alert (3 variants) |
| Badge/status | Badge (7 variants) |
| Card | Card (7 sub-components) |
| Avatar | Avatar (6 sub-components) |
| Table | Table (8 sub-components) |
| Progress | Progress (indeterminate mode) |
| Toast notifications | Sonner + Toaster |
| Calendar | Calendar |
| Typography | Typography (18 variants) |
| Sidebar | Sidebar (15+ sub-components) |

## Theme System

### Modes (Light/Dark)
```html
<!-- Light mode (default) -->
<html class="light">

<!-- Dark mode -->
<html class="dark">

<!-- Toggle via JS -->
document.documentElement.classList.toggle('dark');
```

### Accent Themes (5 built-in)
```html
<html data-theme="monochrome">  <!-- default -->
<html data-theme="teal">
<html data-theme="nord">
<html data-theme="terracotta">
<html data-theme="catppuccin">

<!-- Set via JS -->
document.documentElement.setAttribute('data-theme', 'teal');
```

### Custom Theme
Use CSS variables. See [references/theme-variables.md](references/theme-variables.md) for complete variable list.

## Workflow

1. **Check installation** - Verify `@nipsys/lsd` in package.json
2. **Identify need** - Match to component selection matrix
3. **Check composition** - Review sub-components required
4. **Implement** - Use LSD spacing variables, semantic colors
5. **Verify accessibility** - Keyboard navigation works (`Tab`, `Escape`)

## Common Pitfalls

| Mistake | Why Wrong | Correct Approach |
|---------|-----------|------------------|
| `className="mt-4"` | Tailwind numbers not LSD spacing | `className="mt-(--lsd-spacing-base)"` |
| `import { X } from '@phosphor-icons/react'` | Missing Icon suffix | `import { XIcon } from '@phosphor-icons/react'` |
| `style={{ backgroundColor: '#0066ff' }}` | Raw colors, not semantic | `style={{ backgroundColor: 'var(--lsd-surface)' }}` |
| `<Dialog>_dialog content_</Dialog>` | Missing sub-components | `<Dialog><DialogTrigger>Open</DialogTrigger><DialogContent>...</DialogContent></Dialog>` |

## Quality Checklist

Before completing tasks:
- [ ] Using LSD spacing variables (`--lsd-spacing-*`)
- [ ] Icons have "Icon" suffix (`CheckIcon`, not `Check`)
- [ ] Colors use semantic tokens (`--lsd-primary`, `--lsd-destructive`)
- [ ] All composition sub-components imported
- [ ] Accessibility verified (keyboard navigation)
- [ ] Theme tokens used for customization, not raw values

## References

- [Component detailed patterns](references/component-patterns.md)
- [Spacing scale (7 values)](references/spacing.md)
- [Color tokens](references/colors.md)
- [Icon patterns](references/icons.md)
- [Composition rules](references/composition.md)
- [CVA variants](references/cva-patterns.md)
- [Theme variables](references/theme-variables.md)
- [Architecture patterns](references/architecture.md)
- [Component catalog](references/component-catalog.md)

---
name: nipsys-lsd
description: Use when working with @nipsys/lsd in React 19+ projects for UI component implementation, theming, and design system integration. Provides comprehensive guidance for the LSD monochromatic component library including 39 accessible components with semantic styling, spacing tokens (--lsd-spacing-*), keyboard navigation patterns, and proper composition patterns. Ideal for developers building React applications.
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

## Installation

Install the package:
```bash
npm install @nipsys/lsd
```

Add to your CSS:
```css
@import '@nipsys/lsd/styles';
```

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

> **Note:** The `mt-(--lsd-spacing-base)` syntax is Tailwind v4's CSS variable interpolation - it outputs `margin-top: var(--lsd-spacing-base)`.

### Icons → [references/icons.md](references/icons.md)
All icons MUST use "Icon" suffix:
- ✅ `import { CheckIcon } from '@phosphor-icons/react'`
- ❌ `import { Check } from '@phosphor-icons/react'`

### Styling → [references/colors.md](references/colors.md)
Use semantic color tokens:
- ✅ `var(--lsd-primary)`, `var(--lsd-destructive)`
- ✅ `var(--lsd-background)` (primary), `var(--lsd-foreground)` (secondary/overlay)
- ❌ `#0066ff`, `#ff0000` (raw hex values)

### Composition → [references/composition.md](references/composition.md)
Import all required sub-components:
- Dialog → Dialog, DialogTrigger, DialogContent, DialogTitle, DialogClose

## Component Selection Matrix

### Forms & Input
| Need | Use |
|------|-----|
| Form input | Input or Textarea |
| Form with validation | Field + Field components |
| Single-line text | Input |
| Multi-line text | Textarea |
| Dropdown selection | Select (with sub-components) |
| Yes/no toggle | Switch |
| 2-5 option toggle | ToggleGroup |
| Radio buttons | RadioGroup |
| Checkbox | Checkbox |

### Buttons & Actions
| Need | Use |
|------|-----|
| Primary action | Button with variant="filled" |
| Destructive action | Button with variant="destructive" |

### Navigation
| Need | Use |
|------|-----|
| Tabs | Tabs |
| Navigation menu | NavigationMenu |
| Menu bar | Menubar |
| Sidebar | Sidebar (15+ sub-components) |

### Overlays & Dialogs
| Need | Use |
|------|-----|
| Modal dialog | Dialog (with sub-components) |
| Confirmation dialog | AlertDialog |
| Slide-over panel | Sheet |
| Tooltip | Tooltip |
| Dropdown menu | DropdownMenu (12 sub-components) |
| Command palette | Command (cmdk-based) |

### Data Display
| Need | Use |
|------|-----|
| Card | Card (7 sub-components) |
| Avatar | Avatar (6 sub-components) |
| Table | Table (8 sub-components) |
| Badge/status | Badge (7 variants) |
| Calendar | Calendar |
| Typography | Typography (18 variants) |

### Feedback
| Need | Use |
|------|-----|
| Alert message | Alert (3 variants) |
| Progress | Progress (indeterminate mode) |
| Toast notifications | Sonner + Toaster |

## Theme System

### Modes (Light/Dark)
- Light mode (default): `&lt;html class=&quot;light&quot;&gt;`
- Dark mode: `&lt;html class=&quot;dark&quot;&gt;`

### Accent Themes (5 built-in)
- Monochrome (default): `&lt;html data-theme=&quot;monochrome&quot;&gt;`
- Teal: `&lt;html data-theme=&quot;teal&quot;&gt;`
- Nord: `&lt;html data-theme=&quot;nord&quot;&gt;`
- Terracotta: `&lt;html data-theme=&quot;terracotta&quot;&gt;`
- Catppuccin: `&lt;html data-theme=&quot;catppuccin&quot;&gt;`

### Custom Theme
Use CSS variables. See [references/theme-variables.md](references/theme-variables.md) for complete variable list.

## Workflow

1. **Check installation** - Verify `@nipsys/lsd` in package.json
2. **Identify need** - Match to component selection matrix
3. **Check composition** - Review sub-components required
4. **Implement** - Use LSD spacing variables, semantic colors
5. **Verify accessibility** - Keyboard navigation works (`Tab`, `Escape`)

## Quick Start Example

```tsx
// 1. Import the component
import { Button } from '@nipsys/lsd';
import { CheckIcon } from '@phosphor-icons/react';

// 2. Use with proper spacing and semantic styling
export function SubmitButton() {
  return (
    <Button 
      variant="filled" 
      className="mt-(--lsd-spacing-base)"
    >
      <CheckIcon className="mr-(--lsd-spacing-xs)" />
      Submit
    </Button>
  );
}
```

**Key points:**
- Icon component has `Icon` suffix (`CheckIcon`, not `Check`)
- Spacing uses LSD variable with Tailwind v4 syntax
- Variant uses semantic naming (`filled`, `destructive`, `outline`)

## Common Pitfalls

| Mistake | Why Wrong | Correct Approach |
|---------|-----------|------------------|
| `className="mt-4"` | Tailwind numbers not LSD spacing | `className="mt-(--lsd-spacing-base)"` |
| `import { X } from '@phosphor-icons/react'` | Missing Icon suffix | `import { XIcon } from '@phosphor-icons/react'` |
| `style={{ backgroundColor: '#0066ff' }}` | Raw colors, not semantic | `style={{ backgroundColor: 'var(--lsd-background)' }}` |
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

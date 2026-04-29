# Icon Usage Patterns - LSD Components

## Import Pattern

Icons are imported from `@phosphor-icons/react`:
```tsx
import { XIcon, CheckIcon, MagnifyingGlassIcon } from '@phosphor-icons/react'
```

Optional weight/dimension props:
```tsx
<XIcon weight="duotone" size={20} />
```

## Common Icons & Use Cases

| Icon | Component/Use Case |
|------|-------------------|
| `XIcon` | Close buttons: Dialog, Sheet, Autocomplete, Badge |
| `CheckIcon` | Selection indicators: Checkbox, DropdownMenuItem, SelectItem |
| `CircleIcon` | Radio indicators: RadioGroupItem, DropdownMenuRadioItem |
| `MagnifyingGlassIcon` | Search input: CommandInput |
| `CaretRightIcon` | Submenu navigation |
| `CaretDownIcon` | Dropdown triggers, accordions |
| `CaretUpIcon` | Scroll buttons |
| `CircleNotchIcon` | Loading spinners |
| `SidebarSimpleIcon` | Sidebar trigger |

## CRITICAL: Icon Suffix Rule

**ALL icons MUST have "Icon" suffix**

❌ `import { X, Check } from '@phosphor-icons/react'`
✅ `import { XIcon, CheckIcon } from '@phosphor-icons/react'`

This is enforced throughout the LSD codebase. Always verify imports end with "Icon".

## Finding Icons

Browse available icons at: https://phosphoricons.com

All Phosphor Icons are available. Names convert to PascalCase + Icon suffix:
- `magnifying-glass` → `MagnifyingGlassIcon`
- `caret-right` → `CaretRightIcon`
- `sidebar-simple` → `SidebarSimpleIcon`

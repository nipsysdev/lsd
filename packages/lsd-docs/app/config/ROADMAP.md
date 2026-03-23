# shadcn-lsd Component Roadmap

Components in the shadcn-lsd library built with LSD token integration.

## 🔴 High Priority

| Rank | Component | Status | Notes |
|------|-----------|--------|-------|
| 1 | **Form** | ✅ Complete | Full LSD integration with form field components. |
| 2 | **Table** | ✅ Complete | Complete table implementation with themes. |
| 3 | **Toast (Sonner)** | ✅ Complete | Toast notifications via Sonner with LSD tokens. |
| 4 | **Dropdown Menu** | ✅ Complete | Dropdown menu with full LSD token integration and three themes. |
| 5 | **Navigation Menu** | ✅ Complete | Navigation menu with LSD styling. |

## 🟡 Medium Priority

| Rank | Component | Status | Notes |
|------|-----------|--------|-------|
| 6 | **Alert** | ✅ Complete | Full implementation with 13 tests, 3 example pages, documentation complete. Added 2026-03-23. |
| 7 | **Avatar** | ✅ Complete | Full implementation with 22 tests, LSD tokens, 3 sizes (default, sm, lg), AvatarImage, AvatarFallback, AvatarBadge, AvatarGroup, AvatarGroupCount. Added 2026-03-23. |
| 8 | **Calendar / Date Picker** | 📝 Planned | Date selection, range picker (consider Radix primitives) |
| 9 | **Radio Group** | ✅ Complete | Full implementation with 12 tests, documentation with About, Installation, Basic Usage, With Labels, Disabled State, API Reference, Accessibility. 3 example pages: basic, with-labels, disabled. Added 2026-03-23. |
| 10 | **Slider** | 📝 Planned | Range input, value selection |

## 🟢 Low Priority

| Rank | Component | Status | Notes |
|------|-----------|--------|-------|
| 11 | **Tabs** | 📝 Planned | Tabbed navigation, content switching |
| 12 | **Toggle Group** | 📝 Planned | Multi-select button groups, exclusive toggle groups |
| 13 | **Command Menu** | 📝 Planned | Command palette, command search (Nix-Down variant as alternative) |
| 14 | **Sheet / Side Sheet** | 📝 Planned | Sliding panels similar to mobile OS bottom sheets |
| 15 | **Popover** | 📝 Planned | Floating content anchored to trigger element |

## 🎨 Themes

Three themes are supported across components:
- **Light** (default)
- **Dark**
- **Nix-Down** (special blue/gray aesthetic)

All components integrate LSD CSS variables for consistent styling.

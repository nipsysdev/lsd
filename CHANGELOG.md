# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.3] - 2026-05-08

### Features
- **ScrollArea**: Added `onScroll` prop for scroll event handling (enables infinite scroll, scroll position tracking, etc.)
- **ScrollArea**: Exported `ScrollAreaProps` type for TypeScript consumers

### Fixes
- **Tooltip**: Removed unnecessary `TooltipPortal` export (handled internally by `TooltipContent`)

---

## [1.1.2] - 2026-05-07

### Fixes
- **Tooltip**: Added missing `TooltipPortal` export
- **Hooks**: Exported `useIsMobile` hook for mobile detection

---

## [1.1.1] - 2026-05-03

### Features
- **Sidebar**: Added underline styling for active navigation state

### Improvements
- **Sidebar**: Improved path matching to handle URLs with trailing slashes

### Housekeeping
- Added `.playwright-mcp` to gitignore

---

## [1.1.0] - 2026-05-02

### Breaking Changes

**Major Theming System Refactor**

- Removed all shadcn-style theme variables in favor of pure LSD design tokens
  - Removed: `--background`, `--foreground`, `--primary`, `--primary-foreground`, `--secondary`, `--secondary-foreground`, `--accent`, `--accent-foreground`, `--destructive`, `--destructive-foreground`, `--muted`, `--muted-foreground`, `--border`, `--input`, `--ring`
- Renamed design tokens for semantic clarity
  - Double-prefix pattern (e.g., `text-lsd-text-secondary`) standardized to single prefix (e.g., `text-secondary`)
  - Updated all component styling to use new variable naming convention
- Theme structure reorganized to support nested light/dark variants with accent themes
- Custom theme creation now requires using LSD-specific variable names

### Migration

If you have custom themes or override theme variables, you'll need to update them:

1. Replace shadcn-style variables with LSD tokens
2. Update variable names to match the new single-prefix pattern
3. Review custom theme definitions against the new theme structure

### Features

- **Improved Theme System**: Redesigned CSS custom properties for better semantic clarity and consistency
- **Enhanced Theming Architecture**: Better support for nested light/dark variants with accent theme inheritance

### Improvements

- Standardized variable naming conventions across all 40+ components
- Improved theme inheritance and scoping behavior
- Enhanced accessibility with consistent semantic token names
- Better separation of concerns between color modes and accent themes

### Deprecations

- None removed (shadcn-style variables were fully removed, not deprecated)

---

## Previous Versions

### [1.0.0] - Initial Release

- Initial release of LSD component library
- 38+ accessible UI components
- Built on React 19+ with Radix UI
- Support for light/dark modes and 4 accent themes (Teal, Nord, Terracotta, Catppuccin)
- Monochrome color palette with semantic styling
- Comprehensive documentation site
- Full TypeScript support

---

## Version Reference

- **1.1.3** - Current release (ScrollArea onScroll prop, tooltip export cleanup)
- **1.1.2** - Missing exports fix
- **1.1.1** - Sidebar active state underline
- **1.1.0** - Theming refactor
- **1.0.0** - Initial release

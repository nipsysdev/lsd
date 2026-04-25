---
name: nipsys-lsd-contribute
description: Use when contributing to the LSD monorepo. Provides comprehensive workflows for automated documentation generation from TSDoc annotations, writing E2E tests with Playwright using role-based selectors, creating documentation examples with theme synchronization, and managing monorepo-specific development tasks. Ideal for component maintainers, documentation authors, testers, and contributors working with packages/lsd (38+ components) and packages/lsd-docs (Next.js documentation site).
---

# LSD Contribution Guide

Guide for contributing to the LSD monorepo, covering documentation generation, testing, and examples.

## Overview

The LSD monorepo contains:
- **packages/lsd/** - 38+ UI components with Radix UI primitives
- **packages/lsd-docs/** - Next.js documentation site with live examples
- Automated documentation generation from TSDoc annotations
- Playwright E2E tests with role-based selectors

## When to Use This Skill

Use this skill when:
• Generating documentation pages with the automated docs generator
• Creating or updating component TSDoc annotations
• Writing E2E tests for LSD components
• Creating example pages with proper structure and theme sync
• Implementing theme synchronization between doc pages and examples
• Running docs generator CLI for individual or all components

DO NOT use this skill for:
• Regular LSD component usage in external projects (use nipsys-lsd skill)
• General React/Next.js development without LSD
• Content creation unrelated to LSD documentation

## Critical Rules

**Documentation Generation → [references/docs-generator.md](references/docs-generator.md)**
- Run `pnpm run generate [component]` from packages/lsd-docs/
- Components must have @docSectionPageDescription and @docSectionAbout tags
- Examples must have CODE and SIZE exports with @docSection tags
- Verify output at app/components/{component}/page.tsx

**E2E Testing → [references/e2e-testing.md](references/e2e-testing.md)**
- Test example pages (/examples/{component}/{variant}), NOT documentation pages
- Use semantic roles (`role="dialog"`, `role="option"`) not Radix attributes
- Use global keyboard events (`page.keyboard.press()`) not element-specific
- Read component source before writing tests
- Test behavior outcomes, not CSS classes or data attributes

**TSDoc Annotations → [references/tsdoc-annotations.md](references/tsdoc-annotations.md)**
- Required tags: @docSectionPageDescription (1-2 sentences), @docSectionAbout (2-4 sentences)
- Optional tags: @docSectionComposition, Keyboard/ARIA/Focus accessibility tags
- Feature tags match example names: default-value → @docSectionFeaturesDefaultValue
- Use 2-space indentation for composition hierarchy

**Example Creation → [references/example-creation.md](references/example-creation.md)**
- File location: `app/examples/{component}/{variant}/page.tsx`
- Required exports: SIZE ('sm'|'md'|'lg'|'xl'), CODE with @docSection, default function
- Must call `useSendThemeToIframes()` in example component (no arguments)
- Use LSD spacing: `gap-(--lsd-spacing-base)`, not `gap-4`

**Theme Sync → [references/theme-sync.md](references/theme-sync.md)**
- Parent pages: `useSendThemeToIframes(ref1, ref2, ...)` with iframe refs
- Example pages: `useSendThemeToIframes()` with no arguments
- Theme formats: light/dark (.dark class), accent (data-theme), font (font-* classes)
- Handles lazy-loaded iframes via load listeners

## Workflow

### Adding Documentation for a Component

1. **Annotate component** in packages/lsd/src/components/ui/{component}/
   - Add required TSDoc tags: @docSectionPageDescription, @docSectionAbout
   - Add @docSectionComposition if has sub-components
   - Add accessibility tags if needed

2. **Create examples** in packages/lsd-docs/app/examples/{component}/
   - Follow example structure with SIZE, CODE, and useSendThemeToIframes()
   - Use valid @docSection categories: usage, variant, size, feature, state, layout, behavior

3. **Generate documentation:**
   ```bash
   cd packages/lsd-docs
   pnpm run generate [component-name]
   ```

4. **Review output** at packages/lsd-docs/app/components/{component}/page.tsx

5. **Test in browser:** Start dev server, verify page renders and examples sync theme

### Writing E2E Tests

1. **Read component source** to understand DOM structure and patterns
2. **Identify example page** to test (/examples/{component}/{variant})
3. **Use semantic roles** for stable selectors
4. **Test observable behavior** not implementation details
5. **Wait for animations** when testing dialogs/dropdowns

### Running Tests

```bash
# Run all tests
pnpm test

# Run specific test file
pnpm test autocomplete.spec.ts

# Run single test with debugging
pnpm test autocomplete.spec.ts --grep "basic interaction"
```

### Writing E2E Tests

1. **Read component source** to understand DOM structure and patterns
2. **Identify example page** to test (/examples/{component}/{variant})
3. **Use semantic roles** for stable selectors
4. **Test observable behavior** not implementation details
5. **Wait for animations** when testing dialogs/dropdowns

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Docs generator: "Missing @docSection" | Add required tags to component TSDoc |
| Docs generator: "Invalid @docSection category" | Use valid categories: usage, variant, size, feature, state, layout, behavior |
| Example not syncing theme | Missing `useSendThemeToIframes()` call in example |
| E2E test: element not found | Use semantic roles, not Radix data attributes |
| E2E test: dialog not opening | Click readonly input, not search input inside dialog |
| E2E test: focus assertions failing | Add wait for focus to settle (100-200ms) |
| Console: [useSendThemeToIframes] errors | Check iframe refs are passed correctly to parent hook |

## Quick Reference

### Docs Generator Commands
```bash
pnpm run generate button        # Generate single component
pnpm run generate --all         # Generate all components
```

### Valid @docSection Categories
usage, variant, size, feature, state, layout, behavior

### Iframe Sizes
sm (128px), md (256px), lg (450px), xl (600px)

### Keyboard Shortcuts
Tab (focus), ArrowDown (navigate), Enter (select), Escape (close)

## References

- Documentation generator workflow: [references/docs-generator.md](references/docs-generator.md)
- E2E testing with Playwright: [references/e2e-testing.md](references/e2e-testing.md)
- TSDoc annotation system: [references/tsdoc-annotations.md](references/tsdoc-annotations.md)
- Example creation patterns: [references/example-creation.md](references/example-creation.md)
- Theme synchronization: [references/theme-sync.md](references/theme-sync.md)

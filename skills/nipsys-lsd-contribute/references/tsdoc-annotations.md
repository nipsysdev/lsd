# TSDoc Annotation System

Custom TSDoc tags for automated LSD documentation generation.

## Required Tags

### @docSectionPageDescription

**Purpose:** Brief description for page header

**Format:** 1-2 sentences maximum

```typescript
/**
 * @docSectionPageDescription
 * Clickable element with customizable styles and features.
 */
```

### @docSectionAbout

**Purpose:** Detailed description for About section

**Format:** 2-4 sentences, describes purpose and key features

```typescript
/**
 * @docSectionAbout
 * A collapsible navigation panel that displays navigation items. Supports sidebar,
 * floating, and inset variants with offcanvas and icon-only modes.
 */
```

## Optional Tags

### Composition and Accessibility Fields

**@docSectionComposition** - Component tree structure (2-space indentation)
**@docSectionAccessibilityKeyboard** - Keyboard shortcuts (one per line)
**@docSectionAccessibilityAria** - ARIA attributes (one per line)
**@docSectionAccessibilityFocus** - Focus management behavior

### Usage Fields

**@docSectionUsageSingleMode** - Single-mode usage pattern
**@docSectionUsageMultipleMode** - Multiple-mode usage pattern

### Feature Fields

**@docSectionFeaturesAnimated** - Animated component behavior
**@docSectionFeaturesCollapsible** - Collapsible functionality
**@docSectionFeaturesDefaultValue** - Default value usage
**@docSectionFeaturesAsChild** - Compose as child pattern
**@docSectionFeaturesDisabled** - Disabled state handling
**@docSectionFeaturesLoading** - Loading state behavior
**@docSectionFeaturesAsyncOptions** - Async option fetching
**@docSectionFeaturesClientSideFiltering** - Client-side filtering
**@docSectionFeaturesClearable** - Clear functionality
**@docSectionFeaturesControlledUncontrolled** - Controlled vs uncontrolled
**@docSectionFeaturesIconSupport** - Icon integration

## Composition Format

```typescript
/**
 * @docSectionComposition
 * • Component - Description
 *   • SubComponent - Description
 *     • NestedComponent - Description
 */
```

## Accessibility Tags Format

```typescript
/**
 * @docSectionAccessibilityKeyboard
 * • Tab - Navigate to button
 * • Enter - Activate button
 * • Shift + Tab - Navigate backward
 */

/**
 * @docSectionAccessibilityAria
 * • aria-label describes unlabeled components
 * • aria-describedby links to supporting text
 */

/**
 * @docSectionAccessibilityFocus
 * • Focus trapped within dialog
 * • Focus returns to trigger after close
 */
```

## Best Practices

1. **Keep required tags concise** - PageDescription: 1-2 sentences, About: 2-4 sentences
2. **Use consistent formatting** - Bullet points with `•`, 2-space indentation
3. **Describe behavior, not implementation** - "Focus moves to first option" not "Sets focus using useEffect"
4. **Match feature tags to example names** - Example: `default-value` → tag: `@docSectionFeaturesDefaultValue`

## Component Type Guidelines

| Component Type | Required | Recommended |
|----------------|----------|-------------|
| Simple (Button, Checkbox) | PageDescription, About | Keyboard, ARIA, Focus |
| Composite (Tabs, Dialog) | PageDescription, About, Composition | Keyboard, ARIA, Focus |
| Form (Input, Autocomplete) | PageDescription, About | Keyboard, ARIA, Clearable, AsyncOptions |
| Overlay (Dialog, Popover) | PageDescription, About, Composition | Keyboard, ARIA, Focus (trap) |

## Validation

**Throws errors if:**
- Missing @docSectionPageDescription or @docSectionAbout
- Tags exist but have no content
- Sub-components missing @docSectionComposition

**Example errors:**
```
@docSectionPageDescription tag must have content
@docSectionAbout tag must have content
```

## Integration with Docs Generator

1. Tags parsed from component source files
2. Used to generate specific documentation sections
3. Composition → Composition section
4. Keyboard/ARIA/Focus → Accessibility section
5. Usage tags → Usage section (single/multiple mode)
6. Feature tags → matched to example names for descriptive content

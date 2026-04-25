# LSD E2E Testing Guide

Comprehensive guide for writing Playwright tests for LSD components.

## Core Principles

### Test the Right Pages

✅ **Test example pages:** `/examples/{component}/{variant}`  
❌ **NOT documentation pages:** `/components/{component}`

Example pages render components directly. Doc pages use iframes and add complexity.

```typescript
test('basic interaction', async ({ page }) => {
  await page.goto('/examples/autocomplete/basic');  // ✅ Correct
  // NOT await page.goto('/components/autocomplete'); // ❌ Wrong
});
```

### Understand Architecture First

Always read component source before writing tests. This reveals:
- DOM structure (roles, attributes, nesting)
- State management (controlled vs uncontrolled)
- Interaction patterns (events, keyboard shortcuts)
- Dependencies (Radix primitives, third-party libs)

**Example - Autocomplete:**
- Uses Radix Popover + cmdk
- Popover renders as `role="dialog"`
- Display input is `input[readonly]` (display only)
- Search input is inside dialog (separate from display)

## Element Selection Strategies

### Use Semantic Roles First

| Role | Purpose |
|------|---------|
| `role="dialog"` | Dialogs, popovers, dropdowns |
| `role="menu"` | Dropdown menus, command palettes |
| `role="option"` | Select/autocomplete options |
| `role="tab"` / `role="tabpanel"` | Tab navigation |
| `role="slider"` | Range sliders |
| `role="radio"` / `role="checkbox"` | Form controls |
| `role="switch"` | Toggle switches |
| `role="menubar"` | Menu bars |
| `role="menuitem"` | Menu items |

```typescript
// ✅ Good - Stable and accessible
const popover = page.locator('[role="dialog"]');
const options = popover.locator('[role="option"]');

// ❌ Bad - Unstable internal attributes
const popover = page.locator('[data-radix-popover-content]');
```

### Use LSD Data Slots When Needed

For components without semantic roles, use LSD `data-slot` attributes:
```typescript
const trigger = page.locator('[data-slot="accordion-trigger"]');
const content = page.locator('[data-slot="accordion-content"]');
```

### Target Specific Elements

Avoid overly generic selectors:
```typescript
// Too generic - may match sidebar inputs
const input = page.locator('input[readonly]');

// Better - with placeholder filter
const displayInput = page.locator('input[readonly][placeholder="Search languages..."]');
```

## Interactions: Mouse vs Keyboard

### Mouse Interactions

**Click readonly inputs to trigger popovers:**
```typescript
const displayInput = page.locator('input[readonly]');
await displayInput.click();  // Triggers Radix popover

// Then interact with dialog contents
const popover = page.locator('[role="dialog"]');
const searchInput = popover.locator('input[type="text"]');
await searchInput.fill('Type');
```

**Click outside to close:**
```typescript
await page.mouse.click(0, 0);  // Click outside dropdown/dialog
```

### Keyboard Interactions

**Always use global keyboard events:**
```typescript
// ✅ Correct - Global keyboard events
await page.keyboard.press('ArrowDown');
await page.keyboard.press('Enter');
await page.keyboard.press('Escape');
```

### Common Keyboard Shortcuts

| Key | Purpose |
|-----|---------|
| `Tab` | Move focus, close dropdowns |
| `Shift + Tab` | Move to previous element |
| `ArrowDown` | Open dropdown, move to next option |
| `ArrowUp` | Move to previous option |
| `Enter` | Select option, activate button |
| `Space` | Toggle checkbox/radio/switch |
| `Escape` | Close without selection |

## Component-Specific Patterns

### Dialog/Sheet

```typescript
test('opens and closes dialog', async ({ page }) => {
  const trigger = page.locator('button:has-text("Open")');
  const dialog = page.locator('[role="dialog"]');

  await trigger.click();
  await expect(dialog).toBeVisible();

  await page.keyboard.press('Escape');
  await expect(dialog).not.toBeVisible();
});
```

### Tabs

```typescript
test('switch tabs', async ({ page }) => {
  const tabs = page.locator('[role="tab"]');
  const panels = page.locator('[role="tabpanel"]');

  await tabs.nth(1).click();
  await expect(tabs.nth(1)).toHaveAttribute('aria-selected', 'true');
  await expect(panels.nth(1)).toBeVisible();
});
```

### Form Validation

```typescript
test('validation errors', async ({ page }) => {
  const submitButton = page.locator('button[type="submit"]');
  
  await submitButton.click();
  
  const formMessages = page.locator('[data-slot="form-message"]');
  await expect(formMessages).toHaveCount(4);
});
```

## Assertions and State Checks

### Test Observable Behavior

✅ **Test:**
- Visibility changes
- Value updates
- Focus management
- Disabled states

❌ **Don't Test:**
- CSS classes
- Visual styling
- Internal data attributes

```typescript
// ✅ Better - Test behavior outcomes
await expect(displayInput).toHaveValue('TypeScript');
await expect(popover).not.toBeVisible();
```

### ARIA Attributes for State

```typescript
// Expanded/collapsed state
await expect(trigger).toHaveAttribute('aria-expanded', 'true');

// Checked state
await expect(checkbox).toHaveAttribute('aria-checked', 'true');

// Selected state
await expect(tab).toHaveAttribute('aria-selected', 'true');
```

### Wait Strategies

```typescript
// Wait for element visibility
await expect(element).toBeVisible();

// Wait for focus to settle
await page.waitForTimeout(100);

// Wait for animations
await page.waitForTimeout(200);
```

## Common Pitfalls

| ❌ Don't Do | ✅ Do Instead |
|-------------|---------------|
| Test documentation page | Test example pages |
| Use iframe locators | Direct page locators |
| Assert on data-selected attributes | Test behavior outcomes |
| Use element-specific press() | Use page.keyboard.press() |
| Test visual styling | Focus on functional behavior |
| Skip reading component source | Always read source first |

## Testing Workflow

1. Read component source: `packages/lsd/src/components/ui/{component}/`
2. Read example page: `packages/lsd-docs/app/examples/{component}/{variant}/`
3. Write basic test: Start with one simple assertion
4. Run and debug: Fix selectors and interactions
5. Expand coverage: Add more tests as needed
6. Keep tests simple: Remove over-engineering

## Test Structure

```typescript
import { expect, test } from '@playwright/test';

test.describe('Component Name', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/component/variant');
  });

  test('does something', async ({ page }) => {
    // Test code...
  });
});
```

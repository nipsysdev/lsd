import { expect, test } from '@playwright/test';

test.describe('ToggleGroup Behavior', () => {
  test('single mode - only one item pressed at a time', async ({ page }) => {
    await page.goto('/examples/toggle-group/single');

    const toggleGroup = page.locator('[data-slot="toggle-group"]');
    const items = toggleGroup.locator('[data-slot="toggle-group-item"]');

    await expect(items).toHaveCount(3);

    const item2 = items.nth(1);
    await expect(item2).toHaveAttribute('aria-checked', 'true');

    const item1 = items.first();
    await item1.click();
    await expect(item1).toHaveAttribute('aria-checked', 'true');
    await expect(item2).toHaveAttribute('aria-checked', 'false');

    const item3 = items.nth(2);
    await item3.click();
    await expect(item1).toHaveAttribute('aria-checked', 'false');
    await expect(item2).toHaveAttribute('aria-checked', 'false');
    await expect(item3).toHaveAttribute('aria-checked', 'true');
  });

  test('single mode - clicking pressed item keeps it pressed', async ({ page }) => {
    await page.goto('/examples/toggle-group/single');

    const toggleGroup = page.locator('[data-slot="toggle-group"]');
    const items = toggleGroup.locator('[data-slot="toggle-group-item"]');

    const item2 = items.nth(1);
    await expect(item2).toHaveAttribute('aria-checked', 'true');

    await items.first().click();
    await expect(items.first()).toHaveAttribute('aria-checked', 'true');
    await expect(item2).toHaveAttribute('aria-checked', 'false');
  });

  test('multiple mode - multiple items can be pressed', async ({ page }) => {
    await page.goto('/examples/toggle-group/multiple');

    const toggleGroup = page.locator('[data-slot="toggle-group"]');
    const items = toggleGroup.locator('[data-slot="toggle-group-item"]');

    await expect(items).toHaveCount(3);

    await expect(items.first()).toHaveAttribute('aria-pressed', 'true');
    await expect(items.nth(1)).toHaveAttribute('aria-pressed', 'true');
    await expect(items.nth(2)).toHaveAttribute('aria-pressed', 'false');

    const item3 = items.nth(2);
    await item3.click();
    await expect(item3).toHaveAttribute('aria-pressed', 'true');

    await expect(items.first()).toHaveAttribute('aria-pressed', 'true');
    await expect(items.nth(1)).toHaveAttribute('aria-pressed', 'true');
  });

  test('multiple mode - clicking pressed item unpresses it', async ({ page }) => {
    await page.goto('/examples/toggle-group/multiple');

    const toggleGroup = page.locator('[data-slot="toggle-group"]');
    const items = toggleGroup.locator('[data-slot="toggle-group-item"]');

    const item1 = items.first();
    await expect(item1).toHaveAttribute('aria-pressed', 'true');

    await item1.click();
    await expect(item1).toHaveAttribute('aria-pressed', 'false');
  });

  test('multiple mode - can unpress all items', async ({ page }) => {
    await page.goto('/examples/toggle-group/multiple');

    const toggleGroup = page.locator('[data-slot="toggle-group"]');
    const items = toggleGroup.locator('[data-slot="toggle-group-item"]');

    await items.first().click();
    await items.nth(1).click();

    await expect(items.first()).toHaveAttribute('aria-pressed', 'false');
    await expect(items.nth(1)).toHaveAttribute('aria-pressed', 'false');
    await expect(items.nth(2)).toHaveAttribute('aria-pressed', 'false');
  });
});

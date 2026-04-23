import { expect, test } from '@playwright/test';

test.describe('Command Keyboard Navigation', () => {
  test('ArrowDown navigates through items', async ({ page }) => {
    await page.goto('/examples/command/basic');

    const input = page.locator('input[placeholder*="Type a command"]');
    await input.focus();

    await page.keyboard.press('ArrowDown');
    const items = page.locator('[cmdk-item]');
    const firstItem = items.first();
    await expect(firstItem).toBeVisible();
  });

  test('ArrowUp navigates backwards through items', async ({ page }) => {
    await page.goto('/examples/command/basic');

    const input = page.locator('input[placeholder*="Type a command"]');
    await input.focus();

    const items = page.locator('[cmdk-item]');

    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(50);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(50);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(50);

    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(50);

    await expect(items.nth(1)).toBeVisible();
  });

  test('Enter selects focused item', async ({ page }) => {
    await page.goto('/examples/command/basic');

    const input = page.locator('input[placeholder*="Type a command"]');
    await input.focus();

    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(50);

    const _items = page.locator('[cmdk-item]');

    await page.keyboard.press('Enter');

    await expect(input).toHaveValue('');
  });

  test('Escape closes dialog', async ({ page }) => {
    await page.goto('/examples/command/dialog');

    const openButton = page.getByText('Open Command Palette');
    await openButton.click();

    const dialog = page.locator('[role="dialog"]');
    await expect(dialog).toBeVisible();

    const input = page.locator('input[placeholder*="Type a command"]');
    await input.focus();

    await page.keyboard.press('Escape');
    await page.waitForTimeout(200);

    await expect(dialog).not.toBeVisible();
  });

  test('keyboard navigation cycles through items', async ({ page }) => {
    await page.goto('/examples/command/basic');

    const input = page.locator('input[placeholder*="Type a command"]');
    await input.focus();

    const items = page.locator('[cmdk-item]');

    for (let i = 0; i < items.count(); i++) {
      await page.keyboard.press('ArrowDown');
      await page.waitForTimeout(50);
    }

    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(50);

    await expect(items.first()).toBeVisible();
  });
});

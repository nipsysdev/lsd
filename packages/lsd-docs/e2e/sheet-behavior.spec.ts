import { expect, test } from '@playwright/test';

test.describe('Sheet Behavior', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/sheet/basic');
  });

  test('opens sheet via trigger button', async ({ page }) => {
    const trigger = page.locator('button:has-text("Open Sheet")');
    const sheet = page.locator('[role="dialog"]');

    await expect(sheet).not.toBeVisible();
    await trigger.click();
    await expect(sheet).toBeVisible();
  });

  test('closes sheet via Escape key', async ({ page }) => {
    const trigger = page.locator('button:has-text("Open Sheet")');
    const sheet = page.locator('[role="dialog"]');

    await trigger.click();
    await expect(sheet).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(sheet).not.toBeVisible();
  });

  test('closes sheet via X button', async ({ page }) => {
    const trigger = page.locator('button:has-text("Open Sheet")');
    const sheet = page.locator('[role="dialog"]');

    await trigger.click();
    await expect(sheet).toBeVisible();

    const closeButton = sheet.locator('button').last();
    await closeButton.click();
    await expect(sheet).not.toBeVisible();
  });

  test('closes sheet via clicking outside overlay', async ({ page }) => {
    const trigger = page.locator('button:has-text("Open Sheet")');
    const sheet = page.locator('[role="dialog"]');

    await trigger.click();
    await expect(sheet).toBeVisible();

    await page.mouse.click(0, 0);
    await expect(sheet).not.toBeVisible();
  });

  test('focus is trapped inside sheet when open', async ({ page }) => {
    const trigger = page.locator('button:has-text("Open Sheet")');
    const sheet = page.locator('[role="dialog"]');

    await trigger.click();

    const firstFocusable = sheet.locator('button').first();

    const isFocused = await firstFocusable.evaluate(
      (el: HTMLButtonElement) => document.activeElement === el
    );
    expect(isFocused).toBe(true);
  });

  test('focus returns to trigger button after closing', async ({ page }) => {
    const trigger = page.locator('button:has-text("Open Sheet")');
    const sheet = page.locator('[role="dialog"]');

    await trigger.click();

    const isFocusedBefore = await trigger.evaluate(
      (el: HTMLButtonElement) => document.activeElement === el
    );
    expect(isFocusedBefore).toBe(false);

    await expect(sheet).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(sheet).not.toBeVisible();

    await page.waitForTimeout(100);

    const isFocusedAfter = await trigger.evaluate(
      (el: HTMLButtonElement) => document.activeElement === el
    );
    expect(isFocusedAfter).toBe(true);
  });

  test('sheet can be opened and closed multiple times', async ({ page }) => {
    const trigger = page.locator('button:has-text("Open Sheet")');
    const sheet = page.locator('[role="dialog"]');

    for (let i = 0; i < 3; i++) {
      await trigger.click();
      await expect(sheet).toBeVisible();
      await page.keyboard.press('Escape');
      await expect(sheet).not.toBeVisible();
    }
  });
});

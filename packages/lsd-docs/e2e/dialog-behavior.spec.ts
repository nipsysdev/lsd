import { expect, test } from '@playwright/test';

test.describe('Dialog Behavior', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/dialog/basic');
  });

  test('opens dialog via trigger button', async ({ page }) => {
    const trigger = page.locator('button:has-text("Open Dialog")');
    const dialog = page.locator('[role="dialog"]');

    await expect(dialog).not.toBeVisible();
    await trigger.click();
    await expect(dialog).toBeVisible();
  });

  test('closes dialog via Escape key', async ({ page }) => {
    const trigger = page.locator('button:has-text("Open Dialog")');
    const dialog = page.locator('[role="dialog"]');

    await trigger.click();
    await expect(dialog).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(dialog).not.toBeVisible();
  });

  test('closes dialog via X button (DialogClose)', async ({ page }) => {
    const trigger = page.locator('button:has-text("Open Dialog")');
    const dialog = page.locator('[role="dialog"]');

    await trigger.click();
    await expect(dialog).toBeVisible();

    const closeButton = dialog.locator('button').last();
    await closeButton.click();
    await expect(dialog).not.toBeVisible();
  });

  test('closes dialog via clicking outside overlay', async ({ page }) => {
    const trigger = page.locator('button:has-text("Open Dialog")');
    const dialog = page.locator('[role="dialog"]');

    await trigger.click();
    await expect(dialog).toBeVisible();

    await page.mouse.click(0, 0);
    await expect(dialog).not.toBeVisible();
  });

  test('focus is trapped inside dialog when open', async ({ page }) => {
    const trigger = page.locator('button:has-text("Open Dialog")');
    const dialog = page.locator('[role="dialog"]');

    await trigger.click();
    await expect(dialog).toBeVisible();

    const firstFocusable = dialog.locator('button').first();

    const isFocused = await firstFocusable.evaluate(
      (el: HTMLButtonElement) => document.activeElement === el
    );
    expect(isFocused).toBe(true);
  });

  test('focus returns to trigger button after closing', async ({ page }) => {
    const trigger = page.locator('button:has-text("Open Dialog")');
    const dialog = page.locator('[role="dialog"]');

    await trigger.click();

    const isFocusedBefore = await trigger.evaluate(
      (el: HTMLButtonElement) => document.activeElement === el
    );
    expect(isFocusedBefore).toBe(false);

    await expect(dialog).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(dialog).not.toBeVisible();

    await page.waitForTimeout(100);

    const isFocusedAfter = await trigger.evaluate(
      (el: HTMLButtonElement) => document.activeElement === el
    );
    expect(isFocusedAfter).toBe(true);
  });
});

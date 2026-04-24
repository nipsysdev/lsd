import { expect, test } from '@playwright/test';

test.describe('Popover Behavior', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/popover/basic');
  });

  test('opens popover via trigger click', async ({ page }) => {
    const trigger = page.locator('button:has-text("Show Popover")');
    const popover = page.locator('[role="dialog"]');

    await expect(popover).not.toBeVisible();
    await trigger.click();
    await expect(popover).toBeVisible();
  });

  test('closes popover via clicking outside', async ({ page }) => {
    const trigger = page.locator('button:has-text("Show Popover")');
    const popover = page.locator('[role="dialog"]');

    await trigger.click();
    await expect(popover).toBeVisible();

    await page.mouse.click(0, 0);
    await expect(popover).not.toBeVisible();
  });

  test('closes popover via clicking trigger again', async ({ page }) => {
    const trigger = page.locator('button:has-text("Show Popover")');
    const popover = page.locator('[role="dialog"]');

    await trigger.click();
    await expect(popover).toBeVisible();

    await trigger.click();
    await expect(popover).not.toBeVisible();
  });

  test('closes popover via Escape key', async ({ page }) => {
    const trigger = page.locator('button:has-text("Show Popover")');
    const popover = page.locator('[role="dialog"]');

    await trigger.click();
    await expect(popover).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(popover).not.toBeVisible();
  });

  test('popover has correct role="dialog" attribute', async ({ page }) => {
    const trigger = page.locator('button:has-text("Show Popover")');
    await trigger.click();

    const popover = page.locator('[role="dialog"]');
    await expect(popover).toBeVisible();
  });

  test('popover can be opened and closed multiple times', async ({ page }) => {
    const trigger = page.locator('button:has-text("Show Popover")');
    const popover = page.locator('[role="dialog"]');

    for (let i = 0; i < 3; i++) {
      await trigger.click();
      await expect(popover).toBeVisible();
      await trigger.click();
      await expect(popover).not.toBeVisible();
    }
  });
});

test.describe('Popover Controlled State', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/popover/controlled');
  });

  test('controlled popover can be opened and closed repeatedly', async ({ page }) => {
    const trigger = page.locator('button:has-text("Show Popover")');
    const popover = page.locator('[role="dialog"]');

    await expect(popover).not.toBeVisible();

    await trigger.click();
    await expect(popover).toBeVisible();

    await trigger.click();
    await expect(popover).not.toBeVisible();

    await trigger.click();
    await expect(popover).toBeVisible();
  });

  test('controlled popover respects parent state management', async ({ page }) => {
    const trigger = page.locator('button:has-text("Show Popover")');
    const popover = page.locator('[role="dialog"]');

    await trigger.click();
    await expect(popover).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(popover).not.toBeVisible();

    await trigger.click();
    await expect(popover).toBeVisible();
  });
});

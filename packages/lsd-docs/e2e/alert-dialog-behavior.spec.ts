import { expect, test } from '@playwright/test';

test.describe('AlertDialog Behavior', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/alert-dialog/basic');
  });

  test('opens alert dialog via trigger button', async ({ page }) => {
    const trigger = page.locator('button:has-text("Delete Account")');
    const dialog = page.locator('[role="alertdialog"]');

    await expect(dialog).not.toBeVisible();
    await trigger.click();
    await expect(dialog).toBeVisible();
  });

  test('closes alert dialog via Escape key', async ({ page }) => {
    const trigger = page.locator('button:has-text("Delete Account")');
    const dialog = page.locator('[role="alertdialog"]');

    await trigger.click();
    await expect(dialog).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(dialog).not.toBeVisible();
  });

  test('closes alert dialog via Cancel button', async ({ page }) => {
    const trigger = page.locator('button:has-text("Delete Account")');
    const dialog = page.locator('[role="alertdialog"]');

    await trigger.click();
    await expect(dialog).toBeVisible();

    const cancelButton = dialog.locator('button:has-text("Cancel")');
    await cancelButton.click();
    await expect(dialog).not.toBeVisible();
  });

  test('does not close alert dialog when clicking outside overlay', async ({ page }) => {
    const trigger = page.locator('button:has-text("Delete Account")');
    const dialog = page.locator('[role="alertdialog"]');

    await trigger.click();
    await expect(dialog).toBeVisible();

    await page.mouse.click(0, 0);
    await expect(dialog).toBeVisible();
  });

  test('focus is trapped inside alert dialog when open', async ({ page }) => {
    const trigger = page.locator('button:has-text("Delete Account")');
    const dialog = page.locator('[role="alertdialog"]');

    await trigger.click();
    await expect(dialog).toBeVisible();

    const firstFocusable = dialog.locator('button:has-text("Cancel")');

    const isFocused = await firstFocusable.evaluate(
      (el: HTMLButtonElement) => document.activeElement === el
    );
    expect(isFocused).toBe(true);
  });

  test('focus returns to trigger button after closing with Escape', async ({ page }) => {
    const trigger = page.locator('button:has-text("Delete Account")');
    const dialog = page.locator('[role="alertdialog"]');

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

  test('focus returns to trigger button after canceling', async ({ page }) => {
    const trigger = page.locator('button:has-text("Delete Account")');
    const dialog = page.locator('[role="alertdialog"]');

    await trigger.click();
    await expect(dialog).toBeVisible();

    const cancelButton = dialog.locator('button:has-text("Cancel")');
    await cancelButton.click();
    await expect(dialog).not.toBeVisible();

    await page.waitForTimeout(100);

    const isFocusedAfter = await trigger.evaluate(
      (el: HTMLButtonElement) => document.activeElement === el
    );
    expect(isFocusedAfter).toBe(true);
  });

  test('focus returns to trigger after confirming action', async ({ page }) => {
    const trigger = page.locator('button:has-text("Delete Account")');
    const dialog = page.locator('[role="alertdialog"]');

    await trigger.click();
    await expect(dialog).toBeVisible();

    const deleteButton = dialog.locator('button:has-text("Delete")');
    await deleteButton.click();
    await expect(dialog).not.toBeVisible();

    await page.waitForTimeout(100);

    const isFocusedAfter = await trigger.evaluate(
      (el: HTMLButtonElement) => document.activeElement === el
    );
    expect(isFocusedAfter).toBe(true);
  });

  test('can navigate between buttons with Tab key', async ({ page }) => {
    const trigger = page.locator('button:has-text("Delete Account")');
    const dialog = page.locator('[role="alertdialog"]');

    await trigger.click();
    await expect(dialog).toBeVisible();

    const cancelButton = dialog.locator('button:has-text("Cancel")');
    const deleteButton = dialog.locator('button:has-text("Delete")');

    const isCancelFocused = await cancelButton.evaluate(
      (el: HTMLButtonElement) => document.activeElement === el
    );
    expect(isCancelFocused).toBe(true);

    await page.keyboard.press('Tab');

    const isDeleteFocused = await deleteButton.evaluate(
      (el: HTMLButtonElement) => document.activeElement === el
    );
    expect(isDeleteFocused).toBe(true);

    await page.keyboard.press('Tab');

    const isCancelFocusedAgain = await cancelButton.evaluate(
      (el: HTMLButtonElement) => document.activeElement === el
    );
    expect(isCancelFocusedAgain).toBe(true);
  });

  test('can navigate backwards with Shift + Tab', async ({ page }) => {
    const trigger = page.locator('button:has-text("Delete Account")');
    const dialog = page.locator('[role="alertdialog"]');

    await trigger.click();
    await expect(dialog).toBeVisible();

    const cancelButton = dialog.locator('button:has-text("Cancel")');
    const deleteButton = dialog.locator('button:has-text("Delete")');

    await page.keyboard.press('Tab');

    const isDeleteFocused = await deleteButton.evaluate(
      (el: HTMLButtonElement) => document.activeElement === el
    );
    expect(isDeleteFocused).toBe(true);

    await page.keyboard.press('Shift+Tab');

    const isCancelFocused = await cancelButton.evaluate(
      (el: HTMLButtonElement) => document.activeElement === el
    );
    expect(isCancelFocused).toBe(true);
  });

  test('can activate Cancel button with Enter key', async ({ page }) => {
    const trigger = page.locator('button:has-text("Delete Account")');
    const dialog = page.locator('[role="alertdialog"]');

    await trigger.click();
    await expect(dialog).toBeVisible();

    const cancelButton = dialog.locator('button:has-text("Cancel")');

    const isCancelFocused = await cancelButton.evaluate(
      (el: HTMLButtonElement) => document.activeElement === el
    );
    expect(isCancelFocused).toBe(true);

    await page.keyboard.press('Enter');
    await expect(dialog).not.toBeVisible();
  });

  test('can activate Delete button with Enter key', async ({ page }) => {
    const trigger = page.locator('button:has-text("Delete Account")');
    const dialog = page.locator('[role="alertdialog"]');

    await trigger.click();
    await expect(dialog).toBeVisible();

    await page.keyboard.press('Tab');

    const deleteButton = dialog.locator('button:has-text("Delete")');

    const isDeleteFocused = await deleteButton.evaluate(
      (el: HTMLButtonElement) => document.activeElement === el
    );
    expect(isDeleteFocused).toBe(true);

    await page.keyboard.press('Enter');
    await expect(dialog).not.toBeVisible();
  });

  test('cannot interact with page content when dialog is open', async ({ page }) => {
    const trigger = page.locator('button:has-text("Delete Account")');
    const dialog = page.locator('[role="alertdialog"]');

    await trigger.click();
    await expect(dialog).toBeVisible();

    const isTriggerFocused = await trigger.evaluate(
      (el: HTMLButtonElement) => document.activeElement === el
    );
    expect(isTriggerFocused).toBe(false);
  });

  test('dialog title and description are present', async ({ page }) => {
    const trigger = page.locator('button:has-text("Delete Account")');
    const dialog = page.locator('[role="alertdialog"]');

    await trigger.click();
    await expect(dialog).toBeVisible();

    const title = dialog.locator('h2:has-text("Are you sure?")');
    const description = dialog.locator('p:has-text("This action cannot be undone")');

    await expect(title).toBeVisible();
    await expect(description).toBeVisible();
  });

  test('maintains modal focus state after rapid open/close cycles', async ({ page }) => {
    const trigger = page.locator('button:has-text("Delete Account")');
    const dialog = page.locator('[role="alertdialog"]');

    for (let i = 0; i < 3; i++) {
      await trigger.click();
      await expect(dialog).toBeVisible();

      const cancelButton = dialog.locator('button:has-text("Cancel")');
      await cancelButton.click();
      await expect(dialog).not.toBeVisible();
      await page.waitForTimeout(50);
    }

    const isTriggerFocused = await trigger.evaluate(
      (el: HTMLButtonElement) => document.activeElement === el
    );
    expect(isTriggerFocused).toBe(true);
  });
});

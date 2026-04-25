import { expect, test } from '@playwright/test';

test.describe('Autocomplete Keyboard Navigation', () => {
  test('keyboard selection - navigate and select with Enter', async ({ page }) => {
    await page.goto('/examples/autocomplete/basic');

    const displayInput = page.locator('input[readonly]');
    await displayInput.click();

    const popover = page.locator('[role="dialog"]');
    await expect(popover).toBeVisible();

    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

    await expect(popover).not.toBeVisible();
    await expect(displayInput).toHaveValue('TypeScript');
  });

  test('keyboard close without selection using Escape', async ({ page }) => {
    await page.goto('/examples/autocomplete/basic');

    const displayInput = page.locator('input[readonly]');
    await displayInput.click();

    const popover = page.locator('[role="dialog"]');
    await expect(popover).toBeVisible();

    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Escape');

    await expect(popover).not.toBeVisible();
    await expect(displayInput).toHaveValue('');
  });

  test('selecting 5th option by keyboard updates input value', async ({ page }) => {
    await page.goto('/examples/autocomplete/basic');

    const displayInput = page.locator('input[readonly]');
    await displayInput.click();

    const popover = page.locator('[role="dialog"]');
    await expect(popover).toBeVisible();

    for (let i = 0; i < 5; i++) {
      await page.keyboard.press('ArrowDown');
    }

    const options = popover.locator('[role="option"]');
    await expect(options.nth(4)).toHaveText('Rust');
    await page.keyboard.press('Enter');

    await expect(popover).not.toBeVisible();
    await expect(displayInput).toHaveValue('Java');
  });
});

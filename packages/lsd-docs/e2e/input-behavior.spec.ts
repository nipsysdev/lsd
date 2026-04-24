import { expect, test } from '@playwright/test';

test.describe('Input Behavior', () => {
  test('basic typing and focus', async ({ page }) => {
    await page.goto('/examples/input/default');

    const input = page.locator('input[data-slot="input"]');
    await expect(input).toBeVisible();
    await expect(input).toHaveValue('');

    await input.fill('test username');
    await expect(input).toHaveValue('test username');

    await input.focus();
    await expect(input).toBeFocused();
  });

  test('label click focuses input', async ({ page }) => {
    await page.goto('/examples/input/default');

    const label = page.getByText('Username');
    const input = page.locator('input[data-slot="input"]');

    await label.click();
    await expect(input).toBeFocused();
  });

  test('disabled prevents typing', async ({ page }) => {
    await page.goto('/examples/input/disabled');

    const input = page.locator('input[data-slot="input"]');
    await expect(input).toBeDisabled();

    const originalValue = await input.inputValue();

    await input.fill('Should not work');

    await expect(input).toHaveValue(originalValue);
  });

  test('error state displays', async ({ page }) => {
    await page.goto('/examples/input/error');

    const input = page.locator('input[data-slot="input"]');
    const supportingText = page.getByText('Password must be at least 8 characters.');

    await expect(input).toBeVisible();
    await expect(supportingText).toBeVisible();

    await input.fill('short');
    await expect(input).toHaveValue('short');
    await expect(supportingText).toHaveText('Password must be at least 8 characters.');
  });

  test('keyboard navigation', async ({ page }) => {
    await page.goto('/examples/input/default');

    const input = page.locator('input[data-slot="input"]');

    await input.click();
    await expect(input).toBeFocused();

    await page.keyboard.press('Tab');
    await page.waitForTimeout(100);
    await expect(input).not.toBeFocused();
  });
});

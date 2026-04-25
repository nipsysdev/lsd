import { expect, test } from '@playwright/test';

test.describe('Autocomplete Behavior', () => {
  test('basic interaction flow', async ({ page }) => {
    await page.goto('/examples/autocomplete/basic');

    const displayInput = page.locator('input[readonly]');
    await displayInput.click();

    const popover = page.locator('[role="dialog"]');
    await expect(popover).toBeVisible();

    const searchInput = popover.locator('input[type="text"]');
    await searchInput.fill('Type');

    const options = popover.locator('[role="option"]');
    await expect(options).toHaveCount(1);
    await expect(options.first()).toHaveText('TypeScript');

    await options.first().click();
    await expect(popover).not.toBeVisible();
    await expect(displayInput).toHaveValue('TypeScript');
  });

  test('clearable behavior', async ({ page }) => {
    await page.goto('/examples/autocomplete/clearable');

    const displayInput = page.locator('input[readonly][placeholder*="Type to search..."]');
    await displayInput.click();

    const popover = page.locator('[role="dialog"]');
    await expect(popover).toBeVisible();

    const options = popover.locator('[role="option"]');
    await options.first().click();
    await expect(popover).not.toBeVisible();

    await expect(displayInput).toHaveValue('Option 1');

    const clearButton = displayInput.locator('..').locator('button');
    await expect(clearButton).toBeVisible();
    await clearButton.click();
    await expect(displayInput).toHaveValue('');
    await expect(clearButton).not.toBeVisible();
  });

  test('disabled behavior', async ({ page }) => {
    await page.goto('/examples/autocomplete/disabled');

    const displayInput = page.locator('input[readonly][placeholder*="Can\'t select"]');
    await expect(displayInput).toHaveAttribute('disabled');

    const popover = page.locator('[role="dialog"]');
    await expect(popover).not.toBeVisible();

    await page.keyboard.press('ArrowDown');
    await expect(popover).not.toBeVisible();
  });

  test('empty state', async ({ page }) => {
    await page.goto('/examples/autocomplete/basic');

    const displayInput = page.locator('input[readonly]');
    await displayInput.click();

    const popover = page.locator('[role="dialog"]');
    await expect(popover).toBeVisible();

    const searchInput = popover.locator('input[type="text"]');
    await searchInput.fill('xyz123');

    const emptyMessage = popover.getByText('No results found.');
    await expect(emptyMessage).toBeVisible();
    await expect(popover).toBeVisible();
  });

  test('clicking outside closes dropdown without selection', async ({ page }) => {
    await page.goto('/examples/autocomplete/basic');

    const displayInput = page.locator('input[readonly]');
    await displayInput.click();

    const popover = page.locator('[role="dialog"]');
    await expect(popover).toBeVisible();

    await page.mouse.click(10, 10);
    await expect(popover).not.toBeVisible();
    await expect(displayInput).toHaveValue('');
  });

  test('tab navigation closes dropdown', async ({ page }) => {
    await page.goto('/examples/autocomplete/basic');

    const displayInput = page.locator('input[readonly]');
    await displayInput.click();

    const popover = page.locator('[role="dialog"]');
    await expect(popover).toBeVisible();

    await page.keyboard.press('Tab');

    const isFocusedAfter = await displayInput.evaluate(
      (el: HTMLInputElement) => document.activeElement === el
    );
    expect(isFocusedAfter).toBe(false);
    await expect(displayInput).toHaveValue('');
  });

  test('error state styling', async ({ page }) => {
    await page.goto('/examples/autocomplete/error');

    const displayInput = page.locator('input[readonly]');
    await expect(displayInput).toHaveClass(/lsd:text-lsd-destructive/);
  });

  test('label is displayed', async ({ page }) => {
    await page.goto('/examples/autocomplete/clearable');

    const label = page.locator('label');
    await expect(label).toBeVisible();
    await expect(label).toHaveText('Clearable');
  });

  test('icon appears in input', async ({ page }) => {
    await page.goto('/examples/autocomplete/icon');

    const displayInput = page.locator('input[readonly]');
    await displayInput.click();

    const icon = displayInput.locator('xpath=../..').locator('svg');
    await expect(icon).toBeVisible();
  });

  test('multiple selection attempts', async ({ page }) => {
    await page.goto('/examples/autocomplete/basic');

    const displayInput = page.locator('input[readonly]');
    await displayInput.click();

    const popover = page.locator('[role="dialog"]');
    await expect(popover).toBeVisible();

    const options = popover.locator('[role="option"]');
    await options.first().click();
    await expect(popover).not.toBeVisible();
    await expect(displayInput).toHaveValue('JavaScript');

    await displayInput.click();
    await expect(popover).toBeVisible();

    await options.nth(1).click();
    await expect(popover).not.toBeVisible();
    await expect(displayInput).toHaveValue('TypeScript');
  });

  test('arrow key navigation wraps', async ({ page }) => {
    await page.goto('/examples/autocomplete/basic');

    const displayInput = page.locator('input[readonly]');
    await displayInput.click();

    const popover = page.locator('[role="dialog"]');
    await expect(popover).toBeVisible();

    await page.keyboard.press('ArrowDown');

    const options = popover.locator('[role="option"]');
    await expect(options.first()).toBeVisible();

    await page.keyboard.press('ArrowUp');
    await expect(options.last()).toBeVisible();
  });

  test('escape closes without selection', async ({ page }) => {
    await page.goto('/examples/autocomplete/basic');

    const displayInput = page.locator('input[readonly]');
    await displayInput.click();

    const popover = page.locator('[role="dialog"]');
    await expect(popover).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(popover).not.toBeVisible();
    await expect(displayInput).toHaveValue('');
  });
});

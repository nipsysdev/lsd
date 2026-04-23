import { expect, test } from '@playwright/test';

test.describe('Checkbox Behavior', () => {
  test('click to toggle checked', async ({ page }) => {
    await page.goto('/examples/checkbox/basic');

    const checkboxes = page.locator('[data-slot="checkbox"], [role="checkbox"]');
    await expect(checkboxes).toHaveCount(2);

    const firstCheckbox = checkboxes.first();
    await expect(firstCheckbox).toHaveAttribute('aria-checked', 'false');

    await firstCheckbox.click();
    await expect(firstCheckbox).toHaveAttribute('aria-checked', 'true');
  });

  test('click to toggle unchecked', async ({ page }) => {
    await page.goto('/examples/checkbox/basic');

    const checkboxes = page.locator('[data-slot="checkbox"], [role="checkbox"]');
    const secondCheckbox = checkboxes.nth(1);

    await expect(secondCheckbox).toHaveAttribute('aria-checked', 'true');

    await secondCheckbox.click();
    await expect(secondCheckbox).toHaveAttribute('aria-checked', 'false');
  });

  test('controlled mode state updates', async ({ page }) => {
    await page.goto('/examples/checkbox/controlled');

    const checkboxes = page.locator('[data-slot="checkbox"], [role="checkbox"]');
    await expect(checkboxes).toHaveCount(2);

    const firstCheckbox = checkboxes.first();
    const secondCheckbox = checkboxes.nth(1);

    await firstCheckbox.click();
    await expect(firstCheckbox).toHaveAttribute('aria-checked', 'true');

    await secondCheckbox.click();
    await expect(secondCheckbox).toHaveAttribute('aria-checked', 'false');
  });

  test('multiple checkboxes are independent', async ({ page }) => {
    await page.goto('/examples/checkbox/basic');

    const checkboxes = page.locator('[data-slot="checkbox"], [role="checkbox"]');
    const firstCheckbox = checkboxes.first();
    const secondCheckbox = checkboxes.nth(1);

    await expect(firstCheckbox).toHaveAttribute('aria-checked', 'false');
    await expect(secondCheckbox).toHaveAttribute('aria-checked', 'true');

    await firstCheckbox.click();
    await expect(firstCheckbox).toHaveAttribute('aria-checked', 'true');
    await expect(secondCheckbox).toHaveAttribute('aria-checked', 'true');

    await secondCheckbox.click();
    await expect(firstCheckbox).toHaveAttribute('aria-checked', 'true');
    await expect(secondCheckbox).toHaveAttribute('aria-checked', 'false');
  });

  test('keyboard toggle with Space', async ({ page }) => {
    await page.goto('/examples/checkbox/basic');

    const checkboxes = page.locator('[data-slot="checkbox"], [role="checkbox"]');
    const firstCheckbox = checkboxes.first();

    await expect(firstCheckbox).toHaveAttribute('aria-checked', 'false');

    await firstCheckbox.click();
    await page.waitForTimeout(50);
    await expect(firstCheckbox).toHaveAttribute('aria-checked', 'true');

    await page.keyboard.press('Space');
    await page.waitForTimeout(50);
    await expect(firstCheckbox).toHaveAttribute('aria-checked', 'false');
  });

  test('keyboard navigation with Tab', async ({ page }) => {
    await page.goto('/examples/checkbox/basic');

    const checkboxes = page.locator('[data-slot="checkbox"], [role="checkbox"]');
    const firstCheckbox = checkboxes.first();
    const secondCheckbox = checkboxes.nth(1);

    await firstCheckbox.click();
    await page.keyboard.press('Tab');
    await page.waitForTimeout(100);

    const isSecondFocused = await secondCheckbox.evaluate(el => document.activeElement === el);
    expect(isSecondFocused).toBe(true);
  });
});

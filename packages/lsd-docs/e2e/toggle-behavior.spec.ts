import { expect, test } from '@playwright/test';

test.describe('Toggle Behavior', () => {
  test('initial state is unpressed', async ({ page }) => {
    await page.goto('/examples/toggle/basic');

    const toggles = page.locator('button[data-slot="toggle"]');
    await expect(toggles.first()).toHaveAttribute('aria-pressed', 'false');
    await expect(toggles.nth(1)).toHaveAttribute('aria-pressed', 'false');
    await expect(toggles.nth(2)).toHaveAttribute('aria-pressed', 'false');
  });

  test('click toggles pressed state on', async ({ page }) => {
    await page.goto('/examples/toggle/basic');

    const toggle = page.locator('button[data-slot="toggle"]').first();

    await expect(toggle).toHaveAttribute('aria-pressed', 'false');
    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-pressed', 'true');
  });

  test('click toggles pressed state off', async ({ page }) => {
    await page.goto('/examples/toggle/basic');

    const toggle = page.locator('button[data-slot="toggle"]').first();

    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-pressed', 'true');

    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-pressed', 'false');
  });

  test('multiple toggles can be pressed independently', async ({ page }) => {
    await page.goto('/examples/toggle/basic');

    const toggles = page.locator('button[data-slot="toggle"]');
    const firstToggle = toggles.first();
    const secondToggle = toggles.nth(1);
    const thirdToggle = toggles.nth(2);

    await firstToggle.click();
    await expect(firstToggle).toHaveAttribute('aria-pressed', 'true');

    await secondToggle.click();
    await expect(secondToggle).toHaveAttribute('aria-pressed', 'true');

    await thirdToggle.click();
    await expect(thirdToggle).toHaveAttribute('aria-pressed', 'true');
  });

  test('keyboard toggle behavior with Space', async ({ page }) => {
    await page.goto('/examples/toggle/basic');

    const toggle = page.locator('button[data-slot="toggle"]').first();

    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-pressed', 'true');

    await page.keyboard.press('Space');
    await expect(toggle).toHaveAttribute('aria-pressed', 'false');

    await page.keyboard.press('Space');
    await expect(toggle).toHaveAttribute('aria-pressed', 'true');
  });

  test('keyboard toggle behavior with Enter', async ({ page }) => {
    await page.goto('/examples/toggle/basic');

    const toggle = page.locator('button[data-slot="toggle"]').first();

    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-pressed', 'true');

    await page.keyboard.press('Enter');
    await expect(toggle).toHaveAttribute('aria-pressed', 'false');

    await page.keyboard.press('Enter');
    await expect(toggle).toHaveAttribute('aria-pressed', 'true');
  });

  test('keyboard navigation with Tab', async ({ page }) => {
    await page.goto('/examples/toggle/basic');

    const toggles = page.locator('button[data-slot="toggle"]');
    const firstToggle = toggles.first();
    const secondToggle = toggles.nth(1);
    const thirdToggle = toggles.nth(2);

    await firstToggle.click();
    await expect(firstToggle).toBeFocused();

    await page.keyboard.press('Tab');
    await expect(secondToggle).toBeFocused();

    await page.keyboard.press('Tab');
    await expect(thirdToggle).toBeFocused();
  });
});

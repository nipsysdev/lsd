import { expect, test } from '@playwright/test';

test.describe('Switch Behavior', () => {
  test('click to toggle on', async ({ page }) => {
    await page.goto('/examples/switch/basic');

    const switches = page.locator('[data-slot="switch"], [role="switch"]');
    await expect(switches).toHaveCount(4);

    const firstSwitch = switches.first();
    await expect(firstSwitch).toHaveAttribute('aria-checked', 'false');

    await firstSwitch.click();
    await expect(firstSwitch).toHaveAttribute('aria-checked', 'true');
  });

  test('click to toggle off', async ({ page }) => {
    await page.goto('/examples/switch/basic');

    const switches = page.locator('[data-slot="switch"], [role="switch"]');
    const secondSwitch = switches.nth(1);

    await expect(secondSwitch).toHaveAttribute('aria-checked', 'true');

    await secondSwitch.click();
    await expect(secondSwitch).toHaveAttribute('aria-checked', 'false');
  });

  test('disabled prevents toggle', async ({ page }) => {
    await page.goto('/examples/switch/basic');

    const switches = page.locator('[data-slot="switch"], [role="switch"]');
    const thirdSwitch = switches.nth(2);
    const fourthSwitch = switches.nth(3);

    await expect(thirdSwitch).toHaveAttribute('disabled');
    const thirdSwitchOriginalState = await thirdSwitch.getAttribute('aria-checked');

    await expect(fourthSwitch).toHaveAttribute('disabled');
    const fourthSwitchOriginalState = await fourthSwitch.getAttribute('aria-checked');

    await thirdSwitch.click();
    await fourthSwitch.click();

    await expect(thirdSwitch).toHaveAttribute('aria-checked', thirdSwitchOriginalState ?? '');
    await expect(fourthSwitch).toHaveAttribute('aria-checked', fourthSwitchOriginalState ?? '');
  });

  test('controlled mode state updates', async ({ page }) => {
    await page.goto('/examples/switch/controlled');

    const sw = page.locator('[data-slot="switch"], [role="switch"]');
    await expect(sw).toHaveCount(1);

    await expect(page.getByText('Notifications: Disabled')).toBeVisible();

    await sw.click();
    await expect(sw).toHaveAttribute('aria-checked', 'true');
    await expect(page.getByText('Notifications: Enabled')).toBeVisible();

    await sw.click();
    await expect(sw).toHaveAttribute('aria-checked', 'false');
    await expect(page.getByText('Notifications: Disabled')).toBeVisible();
  });

  test('keyboard toggle behavior with Space and Enter', async ({ page }) => {
    await page.goto('/examples/switch/basic');

    const switches = page.locator('[data-slot="switch"], [role="switch"]');
    const firstSwitch = switches.first();

    await expect(firstSwitch).toHaveAttribute('aria-checked', 'false');

    await firstSwitch.click();
    await expect(firstSwitch).toHaveAttribute('aria-checked', 'true');
    await page.waitForTimeout(50);

    await page.keyboard.press('Space');
    await page.waitForTimeout(50);
    await expect(firstSwitch).toHaveAttribute('aria-checked', 'false');

    await page.keyboard.press('Space');
    await page.waitForTimeout(50);
    await expect(firstSwitch).toHaveAttribute('aria-checked', 'true');

    await page.keyboard.press('Enter');
    await page.waitForTimeout(50);
    await expect(firstSwitch).toHaveAttribute('aria-checked', 'false');

    await page.keyboard.press('Enter');
    await page.waitForTimeout(50);
    await expect(firstSwitch).toHaveAttribute('aria-checked', 'true');
  });

  test('keyboard navigation with Tab', async ({ page }) => {
    await page.goto('/examples/switch/basic');

    const switches = page.locator('[data-slot="switch"], [role="switch"]');
    const firstSwitch = switches.first();
    const secondSwitch = switches.nth(1);

    await firstSwitch.click();
    await page.waitForTimeout(100);
    await expect(firstSwitch).toBeFocused();

    await page.keyboard.press('Tab');
    await page.waitForTimeout(100);
    await expect(secondSwitch).toBeFocused();
  });
});

import { expect, test } from '@playwright/test';

test.describe('DropdownMenu Behavior', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/dropdown-menu/basic');
  });

  test('opens menu via trigger button', async ({ page }) => {
    const trigger = page.locator('button:has-text("Open Menu")');
    const menu = page.locator('[role="menu"]');

    await expect(menu).not.toBeVisible();
    await trigger.click();
    await expect(menu).toBeVisible();
  });

  test('closes menu by clicking outside', async ({ page }) => {
    const trigger = page.locator('button:has-text("Open Menu")');
    const menu = page.locator('[role="menu"]');

    await trigger.click();
    await expect(menu).toBeVisible();

    await page.mouse.click(0, 0);
    await expect(menu).not.toBeVisible();
  });

  test('closes menu by selecting an item', async ({ page }) => {
    const trigger = page.locator('button:has-text("Open Menu")');
    const menu = page.locator('[role="menu"]');

    await trigger.click();
    await expect(menu).toBeVisible();

    const profileItem = menu.locator('[role="menuitem"]').filter({ hasText: 'Profile' });
    await profileItem.click();
    await expect(menu).not.toBeVisible();
  });

  test('menu has correct role="menu" attribute', async ({ page }) => {
    const trigger = page.locator('button:has-text("Open Menu")');
    await trigger.click();

    const menu = page.locator('[role="menu"]');
    await expect(menu).toBeVisible();
  });

  test('menu items have correct role="menuitem" attributes', async ({ page }) => {
    const trigger = page.locator('button:has-text("Open Menu")');
    await trigger.click();

    const menuItems = page.locator('[role="menuitem"]');
    await expect(menuItems).toHaveCount(4);
  });

  test('menu can be opened and closed multiple times', async ({ page }) => {
    const trigger = page.locator('button:has-text("Open Menu")');
    const menu = page.locator('[role="menu"]');

    for (let i = 0; i < 3; i++) {
      await trigger.click();
      await expect(menu).toBeVisible();
      await page.mouse.click(0, 0);
      await expect(menu).not.toBeVisible();
    }
  });

  test('renders label and separator correctly', async ({ page }) => {
    const trigger = page.locator('button:has-text("Open Menu")');
    await trigger.click();

    const menu = page.locator('[role="menu"]');
    const label = menu.locator('text=My Account');
    await expect(label).toBeVisible();

    const separator = menu.locator('[role="separator"]');
    await expect(separator).toBeVisible();
  });
});

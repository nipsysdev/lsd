import { expect, test } from '@playwright/test';

test.describe('DropdownMenu Keyboard Navigation', () => {
  test('closes menu with Escape key', async ({ page }) => {
    await page.goto('/examples/dropdown-menu/basic');

    const trigger = page.locator('button:has-text("Open Menu")');
    const menu = page.locator('[role="menu"]');

    await trigger.click();
    await expect(menu).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(menu).not.toBeVisible();
  });

  test('navigates menu items with ArrowDown', async ({ page }) => {
    await page.goto('/examples/dropdown-menu/basic');

    const trigger = page.locator('button:has-text("Open Menu")');
    const menu = page.locator('[role="menu"]');

    await trigger.click();

    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');

    const secondItem = menu.locator('[role="menuitem"]').nth(1);
    const isFocused = await secondItem.evaluate((el: HTMLElement) => document.activeElement === el);
    expect(isFocused).toBe(true);
  });

  test('navigates menu items with ArrowUp', async ({ page }) => {
    await page.goto('/examples/dropdown-menu/basic');

    const trigger = page.locator('button:has-text("Open Menu")');
    const menu = page.locator('[role="menu"]');

    await trigger.click();

    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowUp');

    const firstItem = menu.locator('[role="menuitem"]').first();
    const isFocused = await firstItem.evaluate((el: HTMLElement) => document.activeElement === el);
    expect(isFocused).toBe(true);
  });

  test('selects item with Enter key', async ({ page }) => {
    await page.goto('/examples/dropdown-menu/basic');

    const trigger = page.locator('button:has-text("Open Menu")');
    const menu = page.locator('[role="menu"]');

    await trigger.click();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

    await expect(menu).not.toBeVisible();
  });

  test('selects item with Space key', async ({ page }) => {
    await page.goto('/examples/dropdown-menu/basic');

    const trigger = page.locator('button:has-text("Open Menu")');
    const menu = page.locator('[role="menu"]');

    await trigger.click();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Space');

    await expect(menu).not.toBeVisible();
  });

  test('checkbox item toggles on click', async ({ page }) => {
    await page.goto('/examples/dropdown-menu/checkbox-items');

    const trigger = page.locator('button:has-text("Options")');
    const menu = page.locator('[role="menu"]');

    await trigger.click();
    await expect(menu).toBeVisible();

    const checkboxItem = menu.locator('[role="menuitemcheckbox"]').first();
    await checkboxItem.click();

    await expect(menu).not.toBeVisible();
  });

  test('checkbox item toggles with Space key', async ({ page }) => {
    await page.goto('/examples/dropdown-menu/checkbox-items');

    const trigger = page.locator('button:has-text("Options")');
    const menu = page.locator('[role="menu"]');

    await trigger.click();

    const _checkboxItem = menu.locator('[role="menuitemcheckbox"]').first();

    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Space');

    await expect(menu).not.toBeVisible();
  });

  test('focus wraps from first to last item', async ({ page }) => {
    await page.goto('/examples/dropdown-menu/basic');

    const trigger = page.locator('button:has-text("Open Menu")');
    const menu = page.locator('[role="menu"]');

    await trigger.click();

    await page.keyboard.press('ArrowUp');

    const lastItem = menu.locator('[role="menuitem"]').last();
    const isFocused = await lastItem.evaluate((el: HTMLElement) => document.activeElement === el);
    expect(isFocused).toBe(true);
  });
});

import { expect, test } from '@playwright/test';

test.describe('Menubar Keyboard', () => {
  test('arrow keys navigate between menu triggers', async ({ page }) => {
    await page.goto('/examples/menubar/basic');

    const menubar = page.locator('[role="menubar"]');
    const fileTrigger = menubar.getByText('File');

    await fileTrigger.click();

    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(150);

    const menus = page.locator('[role="menu"]');
    await expect(menus).toHaveCount(1);
  });

  test('enter opens menu and focuses first item', async ({ page }) => {
    await page.goto('/examples/menubar/basic');

    const menubar = page.locator('[role="menubar"]');
    const fileTrigger = menubar.getByText('File');

    await fileTrigger.click();

    const menu = page.locator('[role="menu"]');

    await page.keyboard.press('Enter');
    await page.waitForTimeout(100);

    await expect(menu).toBeVisible();
  });

  test('space opens menu and focuses first item', async ({ page }) => {
    await page.goto('/examples/menubar/basic');

    const menubar = page.locator('[role="menubar"]');
    const fileTrigger = menubar.getByText('File');

    await fileTrigger.click();
    await page.keyboard.press('Escape');

    await fileTrigger.click();
    await page.keyboard.press('Space');
    await page.waitForTimeout(100);

    const menu = page.locator('[role="menu"]');
    await expect(menu).toBeVisible();
  });

  test('arrow down opens menu and focuses first item', async ({ page }) => {
    await page.goto('/examples/menubar/basic');

    const menubar = page.locator('[role="menubar"]');
    const fileTrigger = menubar.getByText('File');

    await fileTrigger.click();

    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(100);

    const menu = page.locator('[role="menu"]');
    await expect(menu).toBeVisible();
  });

  test('arrow up opens menu and focuses last item', async ({ page }) => {
    await page.goto('/examples/menubar/basic');

    const menubar = page.locator('[role="menubar"]');
    const fileTrigger = menubar.getByText('File');

    await fileTrigger.click();

    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(100);

    const menu = page.locator('[role="menu"]');
    await expect(menu).toBeVisible();
  });

  test('arrow keys navigate menu items', async ({ page }) => {
    await page.goto('/examples/menubar/basic');

    const menubar = page.locator('[role="menubar"]');
    const fileTrigger = menubar.getByText('File');

    await fileTrigger.click();

    const menu = page.locator('[role="menu"]').first();

    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(100);

    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(100);

    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(100);

    await expect(menu).toBeVisible();
  });

  test('enter selects menu item and closes menu', async ({ page }) => {
    await page.goto('/examples/menubar/basic');

    const menubar = page.locator('[role="menubar"]');
    const fileTrigger = menubar.getByText('File');
    await fileTrigger.click();

    const menu = page.locator('[role="menu"]').first();
    await expect(menu).toBeVisible();

    const menuItems = menu.locator('[role="menuitem"]');
    await menuItems.nth(0).click();

    await expect(menu).not.toBeVisible();
  });

  test('space selects menu item and closes menu', async ({ page }) => {
    await page.goto('/examples/menubar/basic');

    const menubar = page.locator('[role="menubar"]');
    const fileTrigger = menubar.getByText('File');
    await fileTrigger.click();

    const menu = page.locator('[role="menu"]').first();

    const menuItems = menu.locator('[role="menuitem"]');
    await menuItems.nth(1).click();

    await expect(menu).not.toBeVisible();
  });

  test('escape closes menu and returns focus to trigger', async ({ page }) => {
    await page.goto('/examples/menubar/basic');

    const menubar = page.locator('[role="menubar"]');
    const fileTrigger = menubar.getByText('File');
    await fileTrigger.click();

    const menu = page.locator('[role="menu"]').first();
    await expect(menu).toBeVisible();

    await page.keyboard.press('Escape');
    await page.waitForTimeout(100);

    await expect(menu).not.toBeVisible();
  });

  test('arrow right opens submenu', async ({ page }) => {
    await page.goto('/examples/menubar/submenus');

    const menubar = page.locator('[role="menubar"]');
    const fileTrigger = menubar.getByText('File');
    await fileTrigger.click();

    const fileMenu = page.locator('[role="menu"]').first();
    const shareSubTrigger = fileMenu.getByText('Share');
    await shareSubTrigger.click();

    await page.waitForTimeout(100);

    const submenu = page.locator('[role="menu"]').nth(1);
    await expect(submenu).toBeVisible();
    await expect(submenu.getByText('Email')).toBeVisible();

    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(100);
    await expect(submenu.getByText('Twitter')).toBeVisible();
  });

  test('arrow left closes submenu and returns to parent', async ({ page }) => {
    await page.goto('/examples/menubar/submenus');

    const menubar = page.locator('[role="menubar"]');
    const fileTrigger = menubar.getByText('File');
    await fileTrigger.click();

    const fileMenu = page.locator('[role="menu"]').first();
    const shareSubTrigger = fileMenu.getByText('Share');
    await shareSubTrigger.click();

    await page.waitForTimeout(100);

    const submenu = page.locator('[role="menu"]').nth(1);

    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(100);

    await page.keyboard.press('ArrowLeft');
    await page.waitForTimeout(100);

    await expect(submenu).not.toBeVisible();
    await expect(fileMenu).toBeVisible();
  });

  test('navigating between triggers closes previous menu', async ({ page }) => {
    await page.goto('/examples/menubar/basic');

    const menubar = page.locator('[role="menubar"]');
    const fileTrigger = menubar.getByText('File');
    await fileTrigger.click();

    const fileMenu = page.locator('[role="menu"]').first();
    await expect(fileMenu).toBeVisible();

    const editTrigger = menubar.getByText('Edit');
    await editTrigger.click();

    await page.waitForTimeout(150);

    const menus = page.locator('[role="menu"]');
    await expect(menus).toHaveCount(1);

    const editMenu = page.locator('[role="menu"]').first();
    await expect(editMenu).toBeVisible();
    await expect(editMenu.getByText('Cut')).toBeVisible();
  });
});

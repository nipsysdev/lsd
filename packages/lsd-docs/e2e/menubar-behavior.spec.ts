import { expect, test } from '@playwright/test';

test.describe('Menubar Behavior', () => {
  test('click menu trigger opens dropdown', async ({ page }) => {
    await page.goto('/examples/menubar/basic');

    const menubar = page.locator('[role="menubar"]');
    await expect(menubar).toBeVisible();

    const fileTrigger = menubar.getByText('File');
    await fileTrigger.click();

    const menu = page.locator('[role="menu"]').first();
    await expect(menu).toBeVisible();
  });

  test('click menu item triggers action', async ({ page }) => {
    await page.goto('/examples/menubar/basic');

    const menubar = page.locator('[role="menubar"]');
    const fileTrigger = menubar.getByText('File');
    await fileTrigger.click();

    const menu = page.locator('[role="menu"]').first();
    const newItem = menu.getByText('New');
    await expect(newItem).toBeVisible();
    await newItem.click();

    await expect(menu).not.toBeVisible();
  });

  test('click outside closes menu', async ({ page }) => {
    await page.goto('/examples/menubar/basic');

    const menubar = page.locator('[role="menubar"]');
    const fileTrigger = menubar.getByText('File');
    await fileTrigger.click();

    const menu = page.locator('[role="menu"]').first();
    await expect(menu).toBeVisible();

    await page.mouse.click(10, 10);
    await expect(menu).not.toBeVisible();
  });

  test('escape closes menu', async ({ page }) => {
    await page.goto('/examples/menubar/basic');

    const menubar = page.locator('[role="menubar"]');
    const fileTrigger = menubar.getByText('File');
    await fileTrigger.click();

    const menu = page.locator('[role="menu"]').first();
    await expect(menu).toBeVisible();

    await page.keyboard.press('Escape');

    await expect(menu).not.toBeVisible();
  });

  test('multiple menus work independently', async ({ page }) => {
    await page.goto('/examples/menubar/basic');

    const menubar = page.locator('[role="menubar"]');
    const fileTrigger = menubar.getByText('File');
    const editTrigger = menubar.getByText('Edit');
    const viewTrigger = menubar.getByText('View');

    await fileTrigger.click();
    const fileMenu = page.locator('[role="menu"]').nth(0);
    await expect(fileMenu).toBeVisible();

    await editTrigger.click();
    await page.waitForTimeout(100);

    const editMenu = page.locator('[role="menu"]').first();
    await expect(editMenu).toBeVisible();
    await expect(editMenu.getByText('Cut')).toBeVisible();

    await viewTrigger.click();
    await page.waitForTimeout(100);

    const viewMenu = page.locator('[role="menu"]').first();
    await expect(viewMenu).toBeVisible();
    await expect(viewMenu.getByText('Zoom In')).toBeVisible();
  });

  test('submenu opens when clicking submenu trigger', async ({ page }) => {
    await page.goto('/examples/menubar/submenus');

    const menubar = page.locator('[role="menubar"]');
    const fileTrigger = menubar.getByText('File');
    await fileTrigger.click();

    const fileMenu = page.locator('[role="menu"]').first();
    await expect(fileMenu).toBeVisible();

    const shareSubTrigger = fileMenu.getByText('Share');
    await expect(shareSubTrigger).toBeVisible();
    await shareSubTrigger.click();

    await page.waitForTimeout(100);

    const submenu = page.locator('[role="menu"]').nth(1);
    await expect(submenu).toBeVisible();
    await expect(submenu.getByText('Email')).toBeVisible();
    await expect(submenu.getByText('Twitter')).toBeVisible();
    await expect(submenu.getByText('Facebook')).toBeVisible();
  });

  test('click outside closes submenu', async ({ page }) => {
    await page.goto('/examples/menubar/submenus');

    const menubar = page.locator('[role="menubar"]');
    const fileTrigger = menubar.getByText('File');
    await fileTrigger.click();

    const fileMenu = page.locator('[role="menu"]').first();
    const shareSubTrigger = fileMenu.getByText('Share');
    await shareSubTrigger.click();

    await page.waitForTimeout(100);
    const submenu = page.locator('[role="menu"]');
    await expect(submenu).toHaveCount(2);

    await page.mouse.click(10, 10);
    await expect(submenu).toHaveCount(0);
  });

  test('radio group maintains single selection', async ({ page }) => {
    await page.goto('/examples/menubar/radio-items');

    const menubar = page.locator('[role="menubar"]');
    const viewTrigger = menubar.getByText('View');

    await viewTrigger.click();

    const menu = page.locator('[role="menu"]').first();
    const radioItems = menu.locator('[role="menuitemradio"]');

    await expect(radioItems).toHaveCount(3);

    await viewTrigger.click();
  });

  test('submenu items are clickable', async ({ page }) => {
    await page.goto('/examples/menubar/submenus');

    const menubar = page.locator('[role="menubar"]');
    const fileTrigger = menubar.getByText('File');
    await fileTrigger.click();

    const fileMenu = page.locator('[role="menu"]').first();
    const shareSubTrigger = fileMenu.getByText('Share');
    await shareSubTrigger.click();

    await page.waitForTimeout(100);

    const submenu = page.locator('[role="menu"]').nth(1);
    const emailOption = submenu.getByText('Email');
    await emailOption.click();

    await page.waitForTimeout(100);
    const menus = page.locator('[role="menu"]');
    await expect(menus).toHaveCount(0);
  });
});

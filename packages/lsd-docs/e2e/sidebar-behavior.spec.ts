import { expect, test } from '@playwright/test';

test.describe('Sidebar Behavior', () => {
  test('sidebar is visible by default', async ({ page }) => {
    await page.goto('/examples/sidebar/basic');

    const sidebar = page.locator('[data-slot="sidebar"]').first();
    await expect(sidebar).toBeVisible();

    await expect(sidebar).toHaveAttribute('data-state', 'expanded');
    await expect(sidebar).toHaveAttribute('data-collapsible', '');
  });

  test('sidebar trigger toggles sidebar', async ({ page }) => {
    await page.goto('/examples/sidebar/basic');

    const sidebar = page.locator('[data-slot="sidebar"]').first();
    await expect(sidebar).toBeVisible();
    await expect(sidebar).toHaveAttribute('data-state', 'expanded');

    const trigger = page.locator('[data-sidebar="trigger"]').first();
    await expect(trigger).toBeVisible();
    await trigger.click();

    await page.waitForTimeout(300);
    await expect(sidebar).toHaveAttribute('data-state', 'collapsed');

    await trigger.click();
    await page.waitForTimeout(300);
    await expect(sidebar).toHaveAttribute('data-state', 'expanded');
  });

  test('sidebar rail is visible when collapsed', async ({ page }) => {
    await page.goto('/examples/sidebar/basic');

    const _sidebar = page.locator('[data-slot="sidebar"]');
    const trigger = page.locator('[data-sidebar="trigger"]');

    const rail = page.locator('[data-sidebar="rail"]');
    await expect(rail).toBeVisible();

    await trigger.click();
    await page.waitForTimeout(200);

    await expect(rail).toBeVisible();
    await expect(rail).toBeInViewport();
  });

  test('sidebar rail opens collapsed sidebar', async ({ page }) => {
    await page.goto('/examples/sidebar/basic');

    const sidebar = page.locator('[data-slot="sidebar"]').first();
    const trigger = page.locator('[data-sidebar="trigger"]').first();

    await trigger.click();
    await page.waitForTimeout(300);
    await expect(sidebar).toHaveAttribute('data-state', 'collapsed');

    const rail = page.locator('[data-sidebar="rail"]');
    await rail.click();

    await page.waitForTimeout(300);
    await expect(sidebar).toHaveAttribute('data-state', 'expanded');
  });

  test('sidebar shows content when expanded', async ({ page }) => {
    await page.goto('/examples/sidebar/basic');

    const sidebarHeader = page.locator('[data-sidebar="header"]').filter({ hasText: 'Your App' });
    const sidebarContent = page.locator('[data-sidebar="content"]').first();
    const sidebarFooter = page.locator('[data-sidebar="footer"]').filter({ hasText: 'Profile' });

    await expect(sidebarHeader).toBeVisible();
    await expect(sidebarContent).toBeVisible();
    await expect(sidebarFooter).toBeVisible();

    await expect(page.getByText('Your App')).toBeVisible();
    await expect(page.getByText('Platform')).toBeVisible();
    await expect(page.getByText('Projects', { exact: true })).toBeVisible();
    await expect(page.getByText('Profile')).toBeVisible();
    await expect(page.getByText('Settings')).toBeVisible();
  });

  test('sidebar menu items are clickable', async ({ page }) => {
    await page.goto('/examples/sidebar/basic');

    const homeLink = page.getByRole('link', { name: 'Home' });
    await expect(homeLink).toBeVisible();
    await expect(homeLink).toHaveAttribute('href', '#');

    const dashboardLink = page.getByRole('link', { name: 'Dashboard' });
    await expect(dashboardLink).toBeVisible();
    await expect(dashboardLink).toHaveAttribute('href', '#');

    const settingsLink = page.getByRole('link', { name: 'Settings' });
    await expect(settingsLink).toBeVisible();
    await expect(settingsLink).toHaveAttribute('href', '#');
  });

  test('sidebar has correct data attributes', async ({ page }) => {
    await page.goto('/examples/sidebar/basic');

    const sidebar = page.locator('[data-slot="sidebar"]').first();
    await expect(sidebar).toHaveAttribute('data-state', 'expanded');
    await expect(sidebar).toHaveAttribute('data-collapsible', '');
    await expect(sidebar).toHaveAttribute('data-variant', 'sidebar');
    await expect(sidebar).toHaveAttribute('data-side', 'left');
  });

  test('sidebar trigger has aria-label', async ({ page }) => {
    await page.goto('/examples/sidebar/basic');

    const trigger = page.locator('[data-sidebar="trigger"]').first();
    await expect(trigger).toBeVisible();
    await expect(trigger).toHaveText('Toggle Sidebar');
  });

  test('sidebar rail has aria-label', async ({ page }) => {
    await page.goto('/examples/sidebar/basic');

    const rail = page.locator('[data-sidebar="rail"]');
    await expect(rail).toBeVisible();
    await expect(rail).toHaveAttribute('aria-label', 'Toggle Sidebar');
    await expect(rail).toHaveAttribute('title', 'Toggle Sidebar');
  });

  test('sidebar maintains state after multiple toggles', async ({ page }) => {
    await page.goto('/examples/sidebar/basic');

    const sidebar = page.locator('[data-slot="sidebar"]').first();
    const trigger = page.locator('[data-sidebar="trigger"]').first();

    for (let i = 0; i < 3; i++) {
      await trigger.click();
      await page.waitForTimeout(300);
      await expect(sidebar).toHaveAttribute('data-state', 'collapsed');

      await trigger.click();
      await page.waitForTimeout(300);
      await expect(sidebar).toHaveAttribute('data-state', 'expanded');
    }
  });

  test('sidebar inset content is visible', async ({ page }) => {
    await page.goto('/examples/sidebar/basic');

    const inset = page.locator('[data-slot="sidebar-inset"]').first();
    await expect(inset).toBeVisible();

    await expect(inset.getByRole('heading', { name: 'Dashboard' }).first()).toBeVisible();
  });

  test('sidebar menu buttons are keyboard accessible', async ({ page }) => {
    await page.goto('/examples/sidebar/basic');

    const homeLink = page.getByRole('link', { name: 'Home' });
    await homeLink.focus();
    await expect(homeLink).toBeFocused();

    await page.keyboard.press('Tab');
    await page.waitForTimeout(100);

    const dashboardLink = page.getByRole('link', { name: 'Dashboard' });
    await expect(dashboardLink).toBeFocused();
  });

  test('sidebar header content is visible', async ({ page }) => {
    await page.goto('/examples/sidebar/basic');

    const sidebarHeader = page.locator('[data-sidebar="header"]').filter({ hasText: 'Your App' });
    await expect(sidebarHeader).toBeVisible();

    await expect(page.getByText('Your App')).toBeVisible();
  });

  test('sidebar group labels are visible', async ({ page }) => {
    await page.goto('/examples/sidebar/basic');

    await expect(page.getByText('Platform')).toBeVisible();
    await expect(page.getByText('Projects', { exact: true })).toBeVisible();
  });

  test('sidebar footer content is visible', async ({ page }) => {
    await page.goto('/examples/sidebar/basic');

    const sidebarFooter = page.locator('[data-sidebar="footer"]').filter({ hasText: 'Profile' });
    await expect(sidebarFooter).toBeVisible();

    await expect(sidebarFooter.getByText('Profile')).toBeVisible();
    await expect(sidebarFooter.getByText('Settings')).toBeVisible();
  });

  test('sidebar menu buttons with icons', async ({ page }) => {
    await page.goto('/examples/sidebar/basic');

    const homeLink = page.getByRole('link', { name: 'Home' });
    await expect(homeLink).toBeVisible();

    const houseIcon = homeLink.locator('svg');
    await expect(houseIcon).toBeVisible();

    const dashboardLink = page.getByRole('link', { name: 'Dashboard' });
    const chartIcon = dashboardLink.locator('svg');
    await expect(chartIcon).toBeVisible();
  });
});

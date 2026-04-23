import { expect, test } from '@playwright/test';

test.describe('Tabs Behavior', () => {
  test('click trigger switches tab panel', async ({ page }) => {
    await page.goto('/examples/tabs/basic');

    const tabList = page.locator('[role="tablist"]');
    const triggers = tabList.locator('[role="tab"]');
    await expect(triggers).toHaveCount(3);

    const panels = page.locator('[role="tabpanel"]');
    await expect(panels).toHaveCount(3);

    await expect(triggers.nth(0)).toHaveAttribute('aria-selected', 'true');
    await expect(triggers.nth(1)).toHaveAttribute('aria-selected', 'false');
    await expect(triggers.nth(2)).toHaveAttribute('aria-selected', 'false');

    await expect(panels.nth(0)).toBeVisible();
    await expect(panels.nth(1)).not.toBeVisible();
    await expect(panels.nth(2)).not.toBeVisible();

    await triggers.nth(1).click();

    await expect(triggers.nth(0)).toHaveAttribute('aria-selected', 'false');
    await expect(triggers.nth(1)).toHaveAttribute('aria-selected', 'true');
    await expect(triggers.nth(2)).toHaveAttribute('aria-selected', 'false');

    await expect(panels.nth(0)).not.toBeVisible();
    await expect(panels.nth(1)).toBeVisible();
    await expect(panels.nth(2)).not.toBeVisible();
  });

  test('only one tab panel visible at a time', async ({ page }) => {
    await page.goto('/examples/tabs/basic');

    const tabList = page.locator('[role="tablist"]');
    const triggers = tabList.locator('[role="tab"]');
    const panels = page.locator('[role="tabpanel"]');

    await expect(panels.nth(0)).toBeVisible();
    await expect(panels.nth(1)).not.toBeVisible();
    await expect(panels.nth(2)).not.toBeVisible();

    await triggers.nth(1).click();
    await expect(panels.nth(0)).not.toBeVisible();
    await expect(panels.nth(1)).toBeVisible();
    await expect(panels.nth(2)).not.toBeVisible();

    await triggers.nth(2).click();
    await expect(panels.nth(0)).not.toBeVisible();
    await expect(panels.nth(1)).not.toBeVisible();
    await expect(panels.nth(2)).toBeVisible();
  });

  test('switching through all tabs preserves content', async ({ page }) => {
    await page.goto('/examples/tabs/basic');

    const tabList = page.locator('[role="tablist"]');
    const triggers = tabList.locator('[role="tab"]');
    const panels = page.locator('[role="tabpanel"]');

    await triggers.nth(0).click();
    await expect(panels.nth(0)).toBeVisible();

    await triggers.nth(1).click();
    await expect(panels.nth(1)).toBeVisible();

    await triggers.nth(2).click();
    await expect(panels.nth(2)).toBeVisible();
  });

  test('disabled trigger cannot be selected', async ({ page }) => {
    await page.goto('/examples/tabs/disabled');

    const tabList = page.locator('[role="tablist"]');
    const triggers = tabList.locator('[role="tab"]');
    const panels = page.locator('[role="tabpanel"]');

    await expect(triggers.nth(2)).toHaveAttribute('disabled');

    await expect(triggers.nth(0)).toHaveAttribute('aria-selected', 'true');
    await expect(panels.nth(0)).toBeVisible();

    await triggers.nth(2).click();
    await page.waitForTimeout(50);

    await expect(triggers.nth(0)).toHaveAttribute('aria-selected', 'true');
    await expect(triggers.nth(2)).toHaveAttribute('aria-selected', 'false');
    await expect(panels.nth(0)).toBeVisible();
    await expect(panels.nth(2)).not.toBeVisible();

    await triggers.nth(1).click();
    await page.waitForTimeout(50);

    await expect(triggers.nth(1)).toHaveAttribute('aria-selected', 'true');
    await expect(panels.nth(1)).toBeVisible();
    await expect(panels.nth(2)).not.toBeVisible();
  });

  test('keyboard navigation with arrow keys', async ({ page }) => {
    await page.goto('/examples/tabs/basic');

    const tabList = page.locator('[role="tablist"]');
    const triggers = tabList.locator('[role="tab"]');
    const panels = page.locator('[role="tabpanel"]');

    await triggers.nth(0).click();

    const isFocused1 = await triggers
      .nth(0)
      .evaluate((el: HTMLElement) => document.activeElement === el);
    expect(isFocused1).toBe(true);

    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(100);

    const isFocused2 = await triggers
      .nth(1)
      .evaluate((el: HTMLElement) => document.activeElement === el);
    expect(isFocused2).toBe(true);
    await expect(triggers.nth(1)).toHaveAttribute('aria-selected', 'true');
    await expect(panels.nth(1)).toBeVisible();

    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(100);

    const isFocused3 = await triggers
      .nth(2)
      .evaluate((el: HTMLElement) => document.activeElement === el);
    expect(isFocused3).toBe(true);
    await expect(triggers.nth(2)).toHaveAttribute('aria-selected', 'true');
    await expect(panels.nth(2)).toBeVisible();

    await page.keyboard.press('ArrowLeft');
    await page.waitForTimeout(100);

    const isFocused4 = await triggers
      .nth(1)
      .evaluate((el: HTMLElement) => document.activeElement === el);
    expect(isFocused4).toBe(true);
    await expect(triggers.nth(1)).toHaveAttribute('aria-selected', 'true');
    await expect(panels.nth(1)).toBeVisible();
  });

  test('tab key moves focus from trigger list to content', async ({ page }) => {
    await page.goto('/examples/tabs/basic');

    const tabList = page.locator('[role="tablist"]');
    const triggers = tabList.locator('[role="tab"]');
    const _panels = page.locator('[role="tabpanel"]');

    await triggers.nth(0).click();

    const isFocusedBefore = await triggers
      .nth(0)
      .evaluate((el: HTMLElement) => document.activeElement === el);
    expect(isFocusedBefore).toBe(true);

    await page.keyboard.press('Tab');
    await page.waitForTimeout(100);

    const isFocusedAfter = await triggers
      .nth(0)
      .evaluate((el: HTMLElement) => document.activeElement === el);
    expect(isFocusedAfter).toBe(false);
  });
});

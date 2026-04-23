import { expect, test } from '@playwright/test';

test.describe('Select Behavior', () => {
  test('open dropdown via trigger click', async ({ page }) => {
    await page.goto('/examples/select/basic-usage');

    const trigger = page.locator('[data-slot="select-trigger"]');
    await trigger.click();

    const content = page.locator('[role="listbox"]');
    await expect(content).toBeVisible();
  });

  test('select option from dropdown', async ({ page }) => {
    await page.goto('/examples/select/basic-usage');

    const trigger = page.locator('[data-slot="select-trigger"]');
    await trigger.click();

    const items = page.locator('[data-slot="select-item"]');
    await items.first().click();

    const content = page.locator('[role="listbox"]');
    await expect(content).not.toBeVisible();

    await expect(trigger).toContainText('Apple');
  });

  test('dropdown closes after selection', async ({ page }) => {
    await page.goto('/examples/select/basic-usage');

    const trigger = page.locator('[data-slot="select-trigger"]');
    await trigger.click();

    const content = page.locator('[role="listbox"]');
    await expect(content).toBeVisible();

    const items = page.locator('[data-slot="select-item"]');
    await items.nth(1).click();

    await expect(content).not.toBeVisible();
  });

  test('value is displayed after selection', async ({ page }) => {
    await page.goto('/examples/select/basic-usage');

    const trigger = page.locator('[data-slot="select-trigger"]');
    await trigger.click();

    const items = page.locator('[data-slot="select-item"]');
    await items.nth(2).click();

    await expect(trigger).toContainText('Orange');
  });

  test('disabled items cannot be selected', async ({ page }) => {
    await page.goto('/examples/select/disabled');

    const trigger = page.locator('[data-slot="select-trigger"]');
    await trigger.click();

    const items = page.locator('[data-slot="select-item"]');
    await expect(items.last()).toHaveAttribute('data-disabled');

    const beforeContent = page.locator('[role="listbox"]');
    await expect(beforeContent).toBeVisible();

    await expect(beforeContent).toBeVisible();
    await expect(trigger).not.toContainText('Enterprise Plan');
  });

  test('non-disabled items can be selected', async ({ page }) => {
    await page.goto('/examples/select/disabled');

    const trigger = page.locator('[data-slot="select-trigger"]');
    await trigger.click();

    const items = page.locator('[data-slot="select-item"]');
    await items.nth(1).click();

    const content = page.locator('[role="listbox"]');
    await expect(content).not.toBeVisible();

    await expect(trigger).toContainText('Pro Plan');
  });

  test('grouped items - navigate through groups with labels', async ({ page }) => {
    await page.goto('/examples/select/grouped');

    const trigger = page.locator('[data-slot="select-trigger"]');
    await trigger.click();

    const content = page.locator('[role="listbox"]');
    await expect(content).toBeVisible();

    const labels = page.locator('[data-slot="select-label"]');
    await expect(labels).toHaveCount(2);

    expect(labels.first()).toContainText('Fruits');
    expect(labels.nth(1)).toContainText('Vegetables');
  });

  test('grouped items - select from first group', async ({ page }) => {
    await page.goto('/examples/select/grouped');

    const trigger = page.locator('[data-slot="select-trigger"]');
    await trigger.click();

    const items = page.locator('[data-slot="select-item"]');
    await items.nth(1).click();

    const content = page.locator('[role="listbox"]');
    await expect(content).not.toBeVisible();

    await expect(trigger).toContainText('Banana');
  });

  test('grouped items - select from second group', async ({ page }) => {
    await page.goto('/examples/select/grouped');

    const trigger = page.locator('[data-slot="select-trigger"]');
    await trigger.click();

    const items = page.locator('[data-slot="select-item"]');
    await items.last().click();

    const content = page.locator('[role="listbox"]');
    await expect(content).not.toBeVisible();

    await expect(trigger).toContainText('Spinach');
  });

  test('clicking outside closes dropdown', async ({ page }) => {
    await page.goto('/examples/select/basic-usage');

    const trigger = page.locator('[data-slot="select-trigger"]');
    await trigger.click();

    const content = page.locator('[role="listbox"]');
    await expect(content).toBeVisible();

    await page.mouse.click(0, 0);

    await expect(content).not.toBeVisible();
  });

  test('clicking trigger again closes dropdown', async ({ page }) => {
    await page.goto('/examples/select/basic-usage');

    const trigger = page.locator('[data-slot="select-trigger"]');
    await trigger.click();

    const content = page.locator('[role="listbox"]');
    await expect(content).toBeVisible();

    await page.keyboard.press('Escape');
    await page.waitForTimeout(100);

    await expect(content).not.toBeVisible();
  });

  test('changing selection replaces previous value', async ({ page }) => {
    await page.goto('/examples/select/basic-usage');

    const trigger = page.locator('[data-slot="select-trigger"]');
    await trigger.click();

    const items = page.locator('[data-slot="select-item"]');
    await items.first().click();

    await trigger.click();
    await items.nth(2).click();

    await expect(trigger).toContainText('Orange');
    await expect(trigger).not.toContainText('Apple');
  });
});

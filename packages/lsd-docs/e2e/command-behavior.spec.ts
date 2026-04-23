import { expect, test } from '@playwright/test';

test.describe('Command Behavior', () => {
  test('type text filters items', async ({ page }) => {
    await page.goto('/examples/command/basic');

    const input = page.locator('input[placeholder*="Type a command"]');
    await input.fill('C');

    await expect(input).toHaveValue('C');

    const items = page.locator('[role="option"]');
    await expect(items).toHaveCount(3);

    await expect(items.filter({ hasText: 'Calendar' })).toBeVisible();
    await expect(items.filter({ hasText: 'Calculator' })).toBeVisible();
    await expect(items.filter({ hasText: 'Search Emoji' })).toBeVisible();
  });

  test('click item selects it', async ({ page }) => {
    await page.goto('/examples/command/basic');

    const input = page.locator('input[placeholder*="Type a command"]');
    await input.fill('e');

    const items = page.locator('[role="option"]');
    const searchEmojiItem = items.filter({ hasText: 'Search Emoji' });
    await expect(searchEmojiItem).toBeVisible();

    await searchEmojiItem.click();

    await expect(input).toHaveValue('e');
  });

  test('empty state shows when no matches', async ({ page }) => {
    await page.goto('/examples/command/basic');

    const input = page.locator('input[placeholder*="Type a command"]');
    await input.fill('xyz123');

    const emptyMessage = page.getByText('No results found.');
    await expect(emptyMessage).toBeVisible();

    const items = page.locator('[role="option"]');
    await expect(items).toHaveCount(0);
  });

  test('clearing filter shows all items again', async ({ page }) => {
    await page.goto('/examples/command/basic');

    const input = page.locator('input[placeholder*="Type a command"]');

    await input.fill('xyz123');
    const items = page.locator('[role="option"]');
    await expect(items).toHaveCount(0);

    await input.fill('');
    await expect(items).toHaveCount(3);
  });

  test('filter is case insensitive', async ({ page }) => {
    await page.goto('/examples/command/basic');

    const input = page.locator('input[placeholder*="Type a command"]');
    const items = page.locator('[role="option"]');

    await input.fill('c');
    await expect(input).toHaveValue('c');
    await expect(items).toHaveCount(3);
    await expect(items.filter({ hasText: 'Calendar' })).toBeVisible();
    await expect(items.filter({ hasText: 'Calculator' })).toBeVisible();

    await input.fill('C');
    await expect(input).toHaveValue('C');
    await expect(items).toHaveCount(3);
    await expect(items.filter({ hasText: 'Calendar' })).toBeVisible();
    await expect(items.filter({ hasText: 'Calculator' })).toBeVisible();
  });

  test('partial matches work correctly', async ({ page }) => {
    await page.goto('/examples/command/basic');

    const input = page.locator('input[placeholder*="Type a command"]');

    await input.fill('alc');
    const items = page.locator('[role="option"]');
    await expect(items).toHaveCount(1);
    await expect(items.first()).toContainText('Calculator');
  });
});

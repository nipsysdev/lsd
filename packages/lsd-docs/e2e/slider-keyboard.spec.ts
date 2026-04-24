import { expect, test } from '@playwright/test';

test.describe('Slider Keyboard Navigation', () => {
  test('ArrowRight increases value', async ({ page }) => {
    await page.goto('/examples/slider/basic');
    await page.waitForTimeout(500);

    const thumb = page.locator('[role="slider"]').first();
    await expect(thumb).toBeVisible();
    const valueDisplay = page.getByText(/Current value:/);
    await expect(valueDisplay).toBeVisible();

    const beforeText = await valueDisplay.textContent();
    const beforeValue = Number.parseInt(beforeText!.match(/\d+/)![0], 10);

    await thumb.focus();
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(200);

    const afterText = await valueDisplay.textContent();
    const afterValue = Number.parseInt(afterText!.match(/\d+/)![0], 10);

    expect(afterValue).toBeGreaterThan(beforeValue);
  });

  test('ArrowLeft decreases value', async ({ page }) => {
    await page.goto('/examples/slider/basic');
    await page.waitForTimeout(500);

    const thumb = page.locator('[role="slider"]').first();
    await expect(thumb).toBeVisible();
    const valueDisplay = page.getByText(/Current value:/);
    await expect(valueDisplay).toBeVisible();

    await thumb.focus();
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(200);

    const beforeText = await valueDisplay.textContent();
    const beforeValue = Number.parseInt(beforeText!.match(/\d+/)![0], 10);

    await page.keyboard.press('ArrowLeft');
    await page.waitForTimeout(200);

    const afterText = await valueDisplay.textContent();
    const afterValue = Number.parseInt(afterText!.match(/\d+/)![0], 10);

    expect(afterValue).toBeLessThan(beforeValue);
  });

  test('Home jumps to minimum value', async ({ page }) => {
    await page.goto('/examples/slider/basic');
    await page.waitForTimeout(500);

    const thumb = page.locator('[role="slider"]').first();
    await expect(thumb).toBeVisible();
    const valueDisplay = page.getByText(/Current value:/);
    await expect(valueDisplay).toBeVisible();

    await thumb.focus();
    await page.keyboard.press('Home');
    await page.waitForTimeout(200);

    const afterText = await valueDisplay.textContent();
    const afterValue = Number.parseInt(afterText!.match(/\d+/)![0], 10);

    expect(afterValue).toBe(0);
  });

  test('End jumps to maximum value', async ({ page }) => {
    await page.goto('/examples/slider/basic');
    await page.waitForTimeout(500);

    const thumb = page.locator('[role="slider"]').first();
    await expect(thumb).toBeVisible();
    const valueDisplay = page.getByText(/Current value:/);
    await expect(valueDisplay).toBeVisible();

    await thumb.focus();
    await page.keyboard.press('End');
    await page.waitForTimeout(200);

    const afterText = await valueDisplay.textContent();
    const afterValue = Number.parseInt(afterText!.match(/\d+/)![0], 10);

    expect(afterValue).toBe(100);
  });

  test('PageUp increases value by larger increment', async ({ page }) => {
    await page.goto('/examples/slider/basic');
    await page.waitForTimeout(500);

    const thumb = page.locator('[role="slider"]').first();
    await expect(thumb).toBeVisible();
    const valueDisplay = page.getByText(/Current value:/);
    await expect(valueDisplay).toBeVisible();

    const beforeText = await valueDisplay.textContent();
    const beforeValue = Number.parseInt(beforeText!.match(/\d+/)![0], 10);

    await thumb.focus();
    await page.keyboard.press('PageUp');
    await page.waitForTimeout(200);

    const afterText = await valueDisplay.textContent();
    const afterValue = Number.parseInt(afterText!.match(/\d+/)![0], 10);

    expect(afterValue).toBeGreaterThan(beforeValue);
  });

  test('PageDown decreases value by larger increment', async ({ page }) => {
    await page.goto('/examples/slider/basic');
    await page.waitForTimeout(500);

    const thumb = page.locator('[role="slider"]').first();
    await expect(thumb).toBeVisible();
    const valueDisplay = page.getByText(/Current value:/);
    await expect(valueDisplay).toBeVisible();

    await thumb.focus();
    await page.keyboard.press('PageUp');
    await page.waitForTimeout(200);

    const beforeText = await valueDisplay.textContent();
    const beforeValue = Number.parseInt(beforeText!.match(/\d+/)![0], 10);

    await page.keyboard.press('PageDown');
    await page.waitForTimeout(200);

    const afterText = await valueDisplay.textContent();
    const afterValue = Number.parseInt(afterText!.match(/\d+/)![0], 10);

    expect(afterValue).toBeLessThan(beforeValue);
  });
});

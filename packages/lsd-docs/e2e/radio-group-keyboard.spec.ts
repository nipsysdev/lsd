import { expect, test } from '@playwright/test';

test.describe('RadioGroup Keyboard Navigation', () => {
  test('Arrow keys navigate and select', async ({ page }) => {
    await page.goto('/examples/radio-group/basic');

    const radioItems = page.locator('[data-slot="radio-group-item"], [role="radio"]');

    await radioItems.first().click();
    await expect(radioItems.first()).toHaveAttribute('aria-checked', 'true');
    await page.waitForTimeout(100);

    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Space');
    await page.waitForTimeout(100);
    await expect(radioItems.nth(1)).toHaveAttribute('aria-checked', 'true');

    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Space');
    await page.waitForTimeout(100);
    await expect(radioItems.nth(2)).toHaveAttribute('aria-checked', 'true');

    await page.keyboard.press('ArrowUp');
    await page.keyboard.press('Space');
    await page.waitForTimeout(100);
    await expect(radioItems.nth(1)).toHaveAttribute('aria-checked', 'true');
  });

  test('ArrowRight/Left navigate horizontally', async ({ page }) => {
    await page.goto('/examples/radio-group/basic');

    const radioItems = page.locator('[data-slot="radio-group-item"], [role="radio"]');

    await radioItems.first().click();
    await expect(radioItems.first()).toHaveAttribute('aria-checked', 'true');
    await page.waitForTimeout(100);

    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('Space');
    await page.waitForTimeout(100);
    await expect(radioItems.nth(1)).toHaveAttribute('aria-checked', 'true');

    await page.keyboard.press('ArrowLeft');
    await page.keyboard.press('Space');
    await page.waitForTimeout(100);
    await expect(radioItems.first()).toHaveAttribute('aria-checked', 'true');
  });

  test('Tab moves focus out of group', async ({ page }) => {
    await page.goto('/examples/radio-group/basic');

    const radioItems = page.locator('[data-slot="radio-group-item"], [role="radio"]');

    await radioItems.first().click();
    await page.waitForTimeout(100);

    const isFocusedBefore = await radioItems
      .first()
      .evaluate((el: HTMLElement) => document.activeElement === el);
    expect(isFocusedBefore).toBe(true);

    await page.keyboard.press('Tab');
    await page.waitForTimeout(100);

    const isFocusedAfter = await radioItems
      .first()
      .evaluate((el: HTMLElement) => document.activeElement === el);
    expect(isFocusedAfter).toBe(false);
  });

  test('Shift+Tab moves focus back to group', async ({ page }) => {
    await page.goto('/examples/radio-group/basic');

    const radioItems = page.locator('[data-slot="radio-group-item"], [role="radio"]');
    const lastRadio = radioItems.nth(2);

    await lastRadio.click();
    await page.waitForTimeout(100);

    const isFocusedBefore = await lastRadio.evaluate(
      (el: HTMLElement) => document.activeElement === el
    );
    expect(isFocusedBefore).toBe(true);

    await page.keyboard.press('Tab');
    await page.waitForTimeout(100);

    const isFocusedAfterTab = await lastRadio.evaluate(
      (el: HTMLElement) => document.activeElement === el
    );
    expect(isFocusedAfterTab).toBe(false);

    await page.keyboard.press('Shift+Tab');
    await page.waitForTimeout(100);

    const isFocusedAfterShiftTab = await lastRadio.evaluate(
      (el: HTMLElement) => document.activeElement === el
    );
    expect(isFocusedAfterShiftTab).toBe(true);
  });

  test('Space selects focused radio without moving focus', async ({ page }) => {
    await page.goto('/examples/radio-group/basic');

    const radioItems = page.locator('[data-slot="radio-group-item"], [role="radio"]');
    const firstRadio = radioItems.first();
    const secondRadio = radioItems.nth(1);

    await firstRadio.click();
    await expect(firstRadio).toHaveAttribute('aria-checked', 'true');
    await page.waitForTimeout(100);

    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(100);

    const isFocusedBefore = await secondRadio.evaluate(
      (el: HTMLElement) => document.activeElement === el
    );
    expect(isFocusedBefore).toBe(true);

    await page.keyboard.press('Space');
    await page.waitForTimeout(100);

    const isFocusedAfter = await secondRadio.evaluate(
      (el: HTMLElement) => document.activeElement === el
    );
    expect(isFocusedAfter).toBe(true);
    await expect(secondRadio).toHaveAttribute('aria-checked', 'true');
    await expect(firstRadio).toHaveAttribute('aria-checked', 'false');
  });

  test('focus moves to checked radio on Tab enter', async ({ page }) => {
    await page.goto('/examples/radio-group/basic');

    const radioItems = page.locator('[data-slot="radio-group-item"], [role="radio"]');
    const secondRadio = radioItems.nth(1);

    await secondRadio.click();
    await expect(secondRadio).toHaveAttribute('aria-checked', 'true');
    await page.waitForTimeout(100);

    await page.keyboard.press('Tab');
    await page.waitForTimeout(100);

    await page.keyboard.press('Shift+Tab');
    await page.waitForTimeout(100);

    const isFocused = await secondRadio.evaluate(
      (el: HTMLElement) => document.activeElement === el
    );
    expect(isFocused).toBe(true);
  });
});

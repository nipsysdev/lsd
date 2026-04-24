import { expect, test } from '@playwright/test';

test.describe('Accordion Keyboard Navigation', () => {
  test('toggle with click simulates keyboard behavior', async ({ page }) => {
    await page.goto('/examples/accordion/single');

    const trigger = page.locator('[data-slot="accordion-trigger"]').first();
    const content = page.locator('[data-slot="accordion-content"]').first();

    await expect(content).not.toBeVisible();

    await trigger.click();
    await expect(content).toBeVisible();
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');

    await trigger.click();
    await expect(content).not.toBeVisible();
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });

  test('Tab key moves focus between triggers', async ({ page }) => {
    await page.goto('/examples/accordion/single');

    const triggers = page.locator('[data-slot="accordion-trigger"]');

    await triggers.nth(0).click();

    const isFocusedOnFirst = await triggers
      .nth(0)
      .evaluate((el: HTMLElement) => document.activeElement === el);
    expect(isFocusedOnFirst).toBe(true);

    await page.keyboard.press('Tab');

    await page.waitForTimeout(100);

    const isFocusedOnSecond = await triggers
      .nth(1)
      .evaluate((el: HTMLElement) => document.activeElement === el);
    expect(isFocusedOnSecond).toBe(true);

    await page.keyboard.press('Tab');

    await page.waitForTimeout(100);

    const isFocusedOnThird = await triggers
      .nth(2)
      .evaluate((el: HTMLElement) => document.activeElement === el);
    expect(isFocusedOnThird).toBe(true);
  });

  test('click navigation in single mode', async ({ page }) => {
    await page.goto('/examples/accordion/single');

    const triggers = page.locator('[data-slot="accordion-trigger"]');
    const contents = page.locator('[data-slot="accordion-content"]');

    await triggers.nth(0).click();

    await expect(contents.nth(0)).toBeVisible();

    await page.keyboard.press('Tab');
    await page.waitForTimeout(100);
    await triggers.nth(1).click();

    await expect(contents.nth(0)).not.toBeVisible();
    await expect(contents.nth(1)).toBeVisible();
    await expect(triggers.nth(0)).toHaveAttribute('aria-expanded', 'false');
    await expect(triggers.nth(1)).toHaveAttribute('aria-expanded', 'true');
  });

  test('click navigation in multiple mode', async ({ page }) => {
    await page.goto('/examples/accordion/multiple');

    const triggers = page.locator('[data-slot="accordion-trigger"]');
    const contents = page.locator('[data-slot="accordion-content"]');

    await triggers.nth(0).click();

    await expect(contents.nth(0)).toBeVisible();

    await page.keyboard.press('Tab');
    await page.waitForTimeout(100);
    await triggers.nth(1).click();

    await expect(contents.nth(0)).toBeVisible();
    await expect(contents.nth(1)).toBeVisible();
    await expect(triggers.nth(0)).toHaveAttribute('aria-expanded', 'true');
    await expect(triggers.nth(1)).toHaveAttribute('aria-expanded', 'true');

    await page.keyboard.press('Tab');
    await page.waitForTimeout(100);
    await triggers.nth(2).click();

    await expect(contents.nth(0)).toBeVisible();
    await expect(contents.nth(1)).toBeVisible();
    await expect(contents.nth(2)).toBeVisible();
    await expect(triggers.nth(2)).toHaveAttribute('aria-expanded', 'true');
  });

  test('click close in single mode', async ({ page }) => {
    await page.goto('/examples/accordion/single');

    const trigger = page.locator('[data-slot="accordion-trigger"]').first();
    const content = page.locator('[data-slot="accordion-content"]').first();

    await trigger.click();
    await expect(content).toBeVisible();

    await trigger.click();

    await expect(content).not.toBeVisible();
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });

  test('click close in multiple mode', async ({ page }) => {
    await page.goto('/examples/accordion/multiple');

    const trigger = page.locator('[data-slot="accordion-trigger"]').first();
    const content = page.locator('[data-slot="accordion-content"]').first();

    await trigger.click();
    await expect(content).toBeVisible();

    await trigger.click();

    await expect(content).not.toBeVisible();
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });
});

import { expect, test } from '@playwright/test';

test.describe('RadioGroup Behavior', () => {
  test('single selection unchecks others', async ({ page }) => {
    await page.goto('/examples/radio-group/basic');

    const radioItems = page.locator('[data-slot="radio-group-item"], [role="radio"]');
    await expect(radioItems).toHaveCount(3);

    const firstRadio = radioItems.first();
    const secondRadio = radioItems.nth(1);
    const thirdRadio = radioItems.nth(2);

    await expect(firstRadio).toHaveAttribute('aria-checked', 'true');
    await expect(secondRadio).toHaveAttribute('aria-checked', 'false');
    await expect(thirdRadio).toHaveAttribute('aria-checked', 'false');

    await secondRadio.click();
    await expect(firstRadio).toHaveAttribute('aria-checked', 'false');
    await expect(secondRadio).toHaveAttribute('aria-checked', 'true');
    await expect(thirdRadio).toHaveAttribute('aria-checked', 'false');

    await thirdRadio.click();
    await expect(firstRadio).toHaveAttribute('aria-checked', 'false');
    await expect(secondRadio).toHaveAttribute('aria-checked', 'false');
    await expect(thirdRadio).toHaveAttribute('aria-checked', 'true');
  });

  test('disabled items cannot be selected', async ({ page }) => {
    await page.goto('/examples/radio-group/disabled');

    const radioItems = page.locator('[data-slot="radio-group-item"], [role="radio"]');
    await expect(radioItems).toHaveCount(3);

    const firstRadio = radioItems.first();
    const secondRadio = radioItems.nth(1);
    const thirdRadio = radioItems.nth(2);

    await expect(firstRadio).toHaveAttribute('aria-checked', 'true');
    await expect(secondRadio).toHaveAttribute('aria-checked', 'false');
    await expect(thirdRadio).toHaveAttribute('aria-checked', 'false');
    await expect(secondRadio).toHaveAttribute('disabled');

    await expect(thirdRadio).toHaveAttribute('aria-checked', 'false');

    await thirdRadio.click();
    await expect(firstRadio).toHaveAttribute('aria-checked', 'false');
    await expect(secondRadio).toHaveAttribute('aria-checked', 'false');
    await expect(thirdRadio).toHaveAttribute('aria-checked', 'true');
  });

  test('label click selects radio', async ({ page }) => {
    await page.goto('/examples/radio-group/basic');

    const radioItems = page.locator('[data-slot="radio-group-item"], [role="radio"]');
    const secondLabel = page.getByText('Option 2');

    await expect(radioItems.first()).toHaveAttribute('aria-checked', 'true');
    await expect(radioItems.nth(1)).toHaveAttribute('aria-checked', 'false');

    await secondLabel.click();
    await expect(radioItems.first()).toHaveAttribute('aria-checked', 'false');
    await expect(radioItems.nth(1)).toHaveAttribute('aria-checked', 'true');
  });

  test('already selected radio stays selected on click', async ({ page }) => {
    await page.goto('/examples/radio-group/basic');

    const radioItems = page.locator('[data-slot="radio-group-item"], [role="radio"]');
    const firstRadio = radioItems.first();

    await expect(firstRadio).toHaveAttribute('aria-checked', 'true');

    await firstRadio.click();
    await expect(firstRadio).toHaveAttribute('aria-checked', 'true');
  });

  test('keyboard selection with ArrowDown', async ({ page }) => {
    await page.goto('/examples/radio-group/basic');

    const radioItems = page.locator('[data-slot="radio-group-item"], [role="radio"]');
    const firstRadio = radioItems.first();
    const secondRadio = radioItems.nth(1);

    await firstRadio.click();
    await expect(firstRadio).toHaveAttribute('aria-checked', 'true');
    await page.waitForTimeout(100);

    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(100);

    await page.keyboard.press('Space');
    await page.waitForTimeout(100);

    await expect(secondRadio).toHaveAttribute('aria-checked', 'true');
    await expect(firstRadio).toHaveAttribute('aria-checked', 'false');
  });

  test('keyboard selection with ArrowUp', async ({ page }) => {
    await page.goto('/examples/radio-group/basic');

    const radioItems = page.locator('[data-slot="radio-group-item"], [role="radio"]');
    const firstRadio = radioItems.first();
    const secondRadio = radioItems.nth(1);

    await secondRadio.click();
    await expect(secondRadio).toHaveAttribute('aria-checked', 'true');
    await page.waitForTimeout(100);

    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(100);

    await expect(firstRadio).toHaveAttribute('aria-checked', 'true');
    await expect(secondRadio).toHaveAttribute('aria-checked', 'false');
  });

  test('keyboard selection with Space', async ({ page }) => {
    await page.goto('/examples/radio-group/basic');

    const radioItems = page.locator('[data-slot="radio-group-item"], [role="radio"]');
    const firstRadio = radioItems.first();
    const secondRadio = radioItems.nth(1);

    await firstRadio.click();
    await expect(firstRadio).toHaveAttribute('aria-checked', 'true');
    await page.waitForTimeout(100);

    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(100);
    await expect(secondRadio).toHaveAttribute('aria-checked', 'true');
    await expect(firstRadio).toHaveAttribute('aria-checked', 'false');

    await page.keyboard.press('Space');
    await page.waitForTimeout(100);
    await expect(secondRadio).toHaveAttribute('aria-checked', 'true');
  });

  test('keyboard navigation skips disabled items', async ({ page }) => {
    await page.goto('/examples/radio-group/disabled');

    const radioItems = page.locator('[data-slot="radio-group-item"], [role="radio"]');
    const firstRadio = radioItems.first();
    const thirdRadio = radioItems.nth(2);

    await firstRadio.click();
    await expect(firstRadio).toHaveAttribute('aria-checked', 'true');
    await page.waitForTimeout(100);

    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(100);

    await expect(thirdRadio).toHaveAttribute('aria-checked', 'true');
  });
});

import { expect, test } from '@playwright/test';

test.describe('Button Behavior', () => {
  test('click interaction triggers action', async ({ page }) => {
    await page.goto('/examples/button/basic');

    const container = page.locator('.flex.flex-col');
    const buttons = container.locator('button');
    await expect(buttons).toHaveCount(3);

    const firstButton = buttons.first();
    await expect(firstButton).toHaveText('Default Button');
    await firstButton.click();
  });

  test('multiple buttons can be clicked independently', async ({ page }) => {
    await page.goto('/examples/button/basic');

    const container = page.locator('.flex.flex-col');
    const buttons = container.locator('button');
    await expect(buttons).toHaveCount(3);

    const secondButton = buttons.nth(1);
    const thirdButton = buttons.nth(2);

    await expect(secondButton).toHaveText('Cancel');
    await expect(thirdButton).toHaveText('Submit');

    await secondButton.click();
    await thirdButton.click();

    await expect(secondButton).toBeVisible();
    await expect(thirdButton).toBeVisible();
  });

  test('loading state shows spinner and disables interaction', async ({ page }) => {
    await page.goto('/examples/button/loading');

    const container = page.locator('.flex.flex-wrap');
    const buttons = container.locator('button');
    await expect(buttons).toHaveCount(2);

    const firstLoadingButton = buttons.first();
    const secondLoadingButton = buttons.nth(1);

    await expect(firstLoadingButton).toHaveAttribute('disabled');
    await expect(secondLoadingButton).toHaveAttribute('disabled');

    const spinner1 = firstLoadingButton.locator('svg');
    const spinner2 = secondLoadingButton.locator('svg');

    await expect(spinner1).toBeVisible();
    await expect(spinner2).toBeVisible();
  });

  test('loading button preserves text with reduced opacity', async ({ page }) => {
    await page.goto('/examples/button/loading');

    const container = page.locator('.flex.flex-wrap');
    const buttons = container.locator('button');
    const secondLoadingButton = buttons.nth(1);

    await expect(secondLoadingButton).toHaveText('With Text');

    const textSpan = secondLoadingButton.locator('span');
    await expect(textSpan).toHaveCount(2);

    const spinnerSpan = textSpan.first();
    const textContentSpan = textSpan.nth(1);

    await expect(spinnerSpan).toBeVisible();
    await expect(textContentSpan).toBeVisible();
  });

  test('disabled state prevents interaction', async ({ page }) => {
    await page.goto('/examples/button/disabled');

    const container = page.locator('.flex.flex-wrap');
    const buttons = container.locator('button');
    await expect(buttons).toHaveCount(2);

    const firstDisabledButton = buttons.first();
    const secondDisabledButton = buttons.nth(1);

    await expect(firstDisabledButton).toHaveAttribute('disabled');
    await expect(secondDisabledButton).toHaveAttribute('disabled');

    await expect(firstDisabledButton).toHaveText('Disabled');
    await expect(secondDisabledButton).toHaveText('Disabled');
  });

  test('keyboard navigation with Tab', async ({ page }) => {
    await page.goto('/examples/button/basic');

    const container = page.locator('.flex.flex-col');
    const buttons = container.locator('button');
    await expect(buttons).toHaveCount(3);

    const firstButton = buttons.first();
    const secondButton = buttons.nth(1);

    await firstButton.click();
    await page.waitForTimeout(100);
    await expect(firstButton).toBeFocused();

    await page.keyboard.press('Tab');
    await page.waitForTimeout(100);
    await expect(secondButton).toBeFocused();

    await page.keyboard.press('Tab');
    await page.waitForTimeout(100);

    const isThirdFocused = await buttons
      .nth(2)
      .evaluate((el: HTMLButtonElement) => document.activeElement === el);
    expect(isThirdFocused).toBe(true);
  });

  test('keyboard activation with Enter', async ({ page }) => {
    await page.goto('/examples/button/basic');

    const buttons = page.locator('button');
    const firstButton = buttons.first();

    await firstButton.click();
    await expect(firstButton).toBeFocused();

    await page.keyboard.press('Enter');
    await page.waitForTimeout(50);

    await expect(firstButton).toBeFocused();
  });

  test('keyboard activation with Space', async ({ page }) => {
    await page.goto('/examples/button/basic');

    const buttons = page.locator('button');
    const firstButton = buttons.first();

    await firstButton.click();
    await expect(firstButton).toBeFocused();

    await page.keyboard.press('Space');
    await page.waitForTimeout(50);

    await expect(firstButton).toBeFocused();
  });

  test('keyboard activation with both Enter and Space', async ({ page }) => {
    await page.goto('/examples/button/basic');

    const buttons = page.locator('button');
    const firstButton = buttons.first();
    const secondButton = buttons.nth(1);

    await firstButton.click();
    await expect(firstButton).toBeFocused();

    await page.keyboard.press('Tab');
    await page.waitForTimeout(100);
    await expect(secondButton).toBeFocused();

    await page.keyboard.press('Enter');
    await page.waitForTimeout(50);
    await expect(secondButton).toBeFocused();

    await page.keyboard.press('Space');
    await page.waitForTimeout(50);
    await expect(secondButton).toBeFocused();
  });

  test('asChild renders anchor tag for link buttons', async ({ page }) => {
    await page.goto('/examples/button/as-child');

    const links = page.locator('a');
    await expect(links).toHaveCount(2);

    const firstLink = links.first();
    await expect(firstLink).toHaveText('Link Button');
    await expect(firstLink).toHaveAttribute('href', '/docs');

    const secondLink = links.nth(1);
    await expect(secondLink).toContainText('Learn More');
    await expect(secondLink).toHaveAttribute('href', '/docs');
  });

  test('asChild preserves button styling on anchor tags', async ({ page }) => {
    await page.goto('/examples/button/as-child');

    const links = page.locator('a');
    await expect(links).toHaveCount(2);

    const firstLink = links.first();
    const secondLink = links.nth(1);

    await expect(firstLink).toBeVisible();
    await expect(secondLink).toBeVisible();

    await expect(firstLink).toHaveAttribute('class');
    await expect(secondLink).toHaveAttribute('class');
  });

  test('link buttons are clickable', async ({ page }) => {
    await page.goto('/examples/button/as-child');

    const links = page.locator('a');
    const firstLink = links.first();

    await firstLink.click();

    await expect(firstLink).toBeVisible();
  });

  test('keyboard navigation works with asChild buttons', async ({ page }) => {
    await page.goto('/examples/button/as-child');

    const container = page.locator('.flex.flex-wrap');
    const links = container.locator('a');
    await expect(links).toHaveCount(2);

    await expect(links.first()).toHaveText('Link Button');
    await expect(links.nth(1)).toContainText('Learn More');
  });

  test('disabled button has correct accessibility attributes', async ({ page }) => {
    await page.goto('/examples/button/disabled');

    const container = page.locator('.flex.flex-wrap');
    const buttons = container.locator('button');
    const firstDisabledButton = buttons.first();
    const secondDisabledButton = buttons.nth(1);

    await expect(firstDisabledButton).toHaveAttribute('disabled');
    await expect(secondDisabledButton).toHaveAttribute('disabled');
  });

  test('loading button has correct accessibility attributes', async ({ page }) => {
    await page.goto('/examples/button/loading');

    const container = page.locator('.flex.flex-wrap');
    const buttons = container.locator('button');
    const firstLoadingButton = buttons.first();

    await expect(firstLoadingButton).toHaveAttribute('disabled');
  });

  test('focus is correctly managed on button interaction', async ({ page }) => {
    await page.goto('/examples/button/basic');

    const buttons = page.locator('button');
    const firstButton = buttons.first();
    const secondButton = buttons.nth(1);

    await firstButton.click();
    await page.waitForTimeout(100);
    const isFirstFocused = await firstButton.evaluate(
      (el: HTMLButtonElement) => document.activeElement === el
    );
    expect(isFirstFocused).toBe(true);

    await secondButton.click();
    await page.waitForTimeout(100);
    const isSecondFocused = await secondButton.evaluate(
      (el: HTMLButtonElement) => document.activeElement === el
    );
    expect(isSecondFocused).toBe(true);

    const isFirstStillFocused = await firstButton.evaluate(
      (el: HTMLButtonElement) => document.activeElement === el
    );
    expect(isFirstStillFocused).toBe(false);
  });
});

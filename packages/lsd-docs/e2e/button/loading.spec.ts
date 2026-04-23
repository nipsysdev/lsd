import { expect, test } from '@playwright/test';

test.describe('Button - Loading Example', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/button/loading');
  });

  test('both loading buttons are present', async ({ page }) => {
    const buttonWithoutText = page.getByRole('button', { name: 'Loading' }).first();
    const buttonWithText = page.getByRole('button', { name: 'With Text' });

    await expect(buttonWithoutText).toBeVisible();
    await expect(buttonWithText).toBeVisible();
  });

  test('loading button without text is disabled', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Loading' }).first();

    await expect(button).toBeDisabled();
  });

  test('loading button with text is disabled', async ({ page }) => {
    const button = page.getByRole('button', { name: 'With Text' });

    await expect(button).toBeDisabled();
  });

  test('loading button without text has aria-busy="true"', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Loading' }).first();

    const ariaBusy = await button.getAttribute('aria-busy');

    expect(ariaBusy).toBe('true');
  });

  test('loading button with text has aria-busy="true"', async ({ page }) => {
    const button = page.getByRole('button', { name: 'With Text' });

    const ariaBusy = await button.getAttribute('aria-busy');

    expect(ariaBusy).toBe('true');
  });

  test('loading spinner is present in button without text', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Loading' }).first();

    const spinner = await button.evaluate(el => {
      const svg = el.querySelector('svg');
      return svg !== null;
    });

    expect(spinner).toBe(true);
  });

  test('loading spinner is present in button with text', async ({ page }) => {
    const button = page.getByRole('button', { name: 'With Text' });

    const spinner = await button.evaluate(el => {
      const svg = el.querySelector('svg');
      return svg !== null;
    });

    expect(spinner).toBe(true);
  });

  test('loading spinner is visible', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Loading' }).first();

    const spinnerVisible = await button.evaluate(el => {
      const svg = el.querySelector('svg');
      if (!svg) return false;
      const style = window.getComputedStyle(svg);
      return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
    });

    expect(spinnerVisible).toBe(true);
  });

  test('loading spinner has spin animation', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Loading' }).first();

    const hasSpinAnimation = await button.evaluate(el => {
      const svg = el.querySelector('svg');
      if (!svg) return false;
      const style = window.getComputedStyle(svg);
      return style.animationName.includes('spin') || style.animation !== 'none';
    });

    expect(hasSpinAnimation).toBe(true);
  });

  test('button with text has opacity 0.5 on text span', async ({ page }) => {
    const button = page.getByRole('button', { name: 'With Text' });

    const opacity = await button.evaluate(el => {
      const span = el.querySelector('span:not(:has(svg))');
      if (!span) return null;
      const style = window.getComputedStyle(span);
      return Number.parseFloat(style.opacity);
    });

    expect(opacity).toBe(0.5);
  });

  test('loading button without text cannot be clicked', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Loading' }).first();

    await button.click();
    await expect(button).toBeDisabled();
  });

  test('loading button with text cannot be clicked', async ({ page }) => {
    const button = page.getByRole('button', { name: 'With Text' });

    await button.click();
    await expect(button).toBeDisabled();
  });
});

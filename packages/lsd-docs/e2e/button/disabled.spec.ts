import { expect, test } from '@playwright/test';

test.describe('Button - Disabled Example', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/button/disabled');
  });

  test('both disabled buttons are present', async ({ page }) => {
    const filledButton = page.getByRole('button', { name: 'Disabled' }).first();
    const outlinedButton = page.getByRole('button', { name: 'Disabled' }).last();

    await expect(filledButton).toBeVisible();
    await expect(outlinedButton).toBeVisible();
  });

  test('filled variant button is disabled', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Disabled' }).first();

    await expect(button).toBeDisabled();
  });

  test('outlined variant button is disabled', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Disabled' }).last();

    await expect(button).toBeDisabled();
  });

  test('filled variant button has reduced opacity', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Disabled' }).first();

    const opacity = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.opacity;
    });

    expect(opacity).toBe('0.34');
  });

  test('outlined variant button has reduced opacity', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Disabled' }).last();

    const opacity = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.opacity;
    });

    expect(opacity).toBe('0.34');
  });

  test('filled variant button has cursor-not-allowed', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Disabled' }).first();

    const cursor = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.cursor;
    });

    expect(cursor).toBe('not-allowed');
  });

  test('outlined variant button has cursor-not-allowed', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Disabled' }).last();

    const cursor = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.cursor;
    });

    expect(cursor).toBe('not-allowed');
  });

  test('filled variant button cannot be clicked', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Disabled' }).first();

    await button.click();
    await expect(button).toBeDisabled();
  });

  test('outlined variant button cannot be clicked', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Disabled' }).last();

    await button.click();
    await expect(button).toBeDisabled();
  });

  test('filled variant button has no underline on hover', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Disabled' }).first();

    const textDecoration = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.textDecoration;
    });

    expect(textDecoration).not.toContain('underline');
  });

  test('outlined variant button has no underline on hover', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Disabled' }).last();

    const textDecoration = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.textDecoration;
    });

    expect(textDecoration).not.toContain('underline');
  });
});

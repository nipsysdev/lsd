import { expect, test } from '@playwright/test';

test.describe('Field Behavior', () => {
  test('renders basic field layout', async ({ page }) => {
    await page.goto('/examples/field/basic');

    const fields = page.locator('[data-slot="field"]');
    await expect(fields).toHaveCount(2);

    await expect(fields.nth(0)).toContainText('Name');
    const nameInput = page.locator('input#name');
    await expect(nameInput).toHaveAttribute('placeholder', 'Enter your name');

    await expect(fields.nth(1)).toContainText('Email');
    const emailInput = page.locator('input#email');
    await expect(emailInput).toHaveAttribute('placeholder', 'Enter your email');
  });

  test('label focuses input when clicked', async ({ page }) => {
    await page.goto('/examples/field/basic');

    const nameLabel = page.getByText('Name');
    const nameInput = page.locator('input#name');

    await nameLabel.click();

    const isFocused = await nameInput.evaluate(
      (el: HTMLInputElement) => document.activeElement === el
    );
    expect(isFocused).toBe(true);
  });

  test('displays error messages when errors prop provided', async ({ page }) => {
    await page.goto('/examples/field/error');

    const emailInput = page.locator('input#email');

    await emailInput.fill('a');

    const fieldErrors = page.locator('[data-slot="field-error"][role="alert"]');
    await expect(fieldErrors).toHaveCount(2);

    await expect(fieldErrors.first()).toContainText('symbol');
    await expect(fieldErrors.last()).toHaveText('Static error message example');
  });

  test('shows multiple error messages simultaneously', async ({ page }) => {
    await page.goto('/examples/field/error');

    const emailInput = page.locator('input#email');

    await emailInput.fill('a');
    await emailInput.fill('');

    const fieldErrors = page.locator('[data-slot="field-error"]');
    const validationError = fieldErrors.filter({ hasText: 'required' });
    const staticError = fieldErrors.filter({ hasText: 'Static error message example' });

    await expect(validationError).toHaveCount(1);
    await expect(staticError).toHaveCount(1);
  });

  test('clears error messages when input becomes valid', async ({ page }) => {
    await page.goto('/examples/field/error');

    const emailInput = page.locator('input#email');

    await emailInput.fill('valid@email.com');

    const fieldErrors = page.locator('[data-slot="field-error"]');
    const _staticErrorCount = await fieldErrors.count();

    await expect(fieldErrors).toHaveCount(1);
    await expect(fieldErrors.first()).toHaveText('Static error message example');
  });

  test('maintains static error message independently', async ({ page }) => {
    await page.goto('/examples/field/error');

    const staticError = page
      .locator('[data-slot="field-error"]')
      .filter({ hasText: 'Static error message example' });
    await expect(staticError).toHaveCount(1);
    await expect(staticError).toHaveText('Static error message example');

    const emailInput = page.locator('input#email');
    await emailInput.fill('test@example.com');

    await expect(staticError).toHaveText('Static error message example');
  });

  test('handles complex validation with multiple rules', async ({ page }) => {
    await page.goto('/examples/field/error');

    const emailInput = page.locator('input#email');

    await emailInput.fill('test');

    const fieldError = page.locator('[data-slot="field-error"]').filter({ hasText: /symbol/ });
    await expect(fieldError).toHaveCount(1);
  });

  test('field content layout orientation', async ({ page }) => {
    await page.goto('/examples/field/error');

    const fieldContents = page.locator('[data-slot="field-content"]');
    await expect(fieldContents).toHaveCount(1);
  });
});

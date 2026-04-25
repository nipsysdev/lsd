import { expect, test } from '@playwright/test';

test.describe('Form Behavior', () => {
  test('shows validation errors for empty fields on submit', async ({ page }) => {
    await page.goto('/examples/form/validation');

    const submitButton = page.locator('button[type="submit"]');
    await submitButton.click();

    const formMessages = page.locator('[data-slot="form-message"]');
    await expect(formMessages).toHaveCount(4);

    const usernameInput = page.locator('input[placeholder="johndoe"]');
    const emailInput = page.locator('input[type="email"][placeholder*="john@example.com"]');
    const passwordInput = page.locator('input[type="password"]').nth(0);
    const confirmPasswordInput = page.locator('input[type="password"]').nth(1);

    await expect(usernameInput).toHaveAttribute('aria-invalid', 'true');
    await expect(emailInput).toHaveAttribute('aria-invalid', 'true');
    await expect(passwordInput).toHaveAttribute('aria-invalid', 'true');
    await expect(confirmPasswordInput).toHaveAttribute('aria-invalid', 'true');
  });

  test('shows specific validation errors for invalid data', async ({ page }) => {
    await page.goto('/examples/form/validation');

    const submitButton = page.locator('button[type="submit"]');
    await submitButton.click();

    await page.waitForTimeout(500);

    const usernameInput = page.locator('input[placeholder="johndoe"]');
    const emailInput = page.locator('input[type="email"][placeholder*="john@example.com"]');
    const passwordInput = page.locator('input[type="password"]').nth(0);
    const confirmPasswordInput = page.locator('input[type="password"]').nth(1);

    await usernameInput.fill('ab');
    await emailInput.fill('invalid-email');
    await passwordInput.fill('short');
    await confirmPasswordInput.fill('different');

    await submitButton.click();
    await page.waitForTimeout(500);

    const formMessages = page.locator('[data-slot="form-message"]');
    await expect(formMessages).toHaveCount(4);

    await expect(usernameInput).toHaveAttribute('aria-invalid', 'true');
    await expect(emailInput).toHaveAttribute('aria-invalid', 'true');
  });

  test('clears validation errors when fields are fixed', async ({ page }) => {
    await page.goto('/examples/form/validation');

    const submitButton = page.locator('button[type="submit"]');
    await submitButton.click();

    let formMessages = page.locator('[data-slot="form-message"]');
    await expect(formMessages).toHaveCount(4);

    const usernameInput = page.locator('input[placeholder="johndoe"]');
    await usernameInput.fill('validusername');

    formMessages = page.locator('[data-slot="form-message"]');
    await expect(formMessages).toHaveCount(3);
  });

  test('submits form with valid data', async ({ page }) => {
    await page.goto('/examples/form/validation');

    const usernameInput = page.locator('input[placeholder="johndoe"]');
    const emailInput = page.locator('input[type="email"][placeholder*="john@example.com"]');
    const passwordInput = page.locator('input[type="password"]').nth(0);
    const confirmPasswordInput = page.locator('input[type="password"]').nth(1);

    await usernameInput.fill('validusername');
    await emailInput.fill('test@example.com');
    await passwordInput.fill('password123');
    await confirmPasswordInput.fill('password123');

    const submitButton = page.locator('button[type="submit"]');
    await submitButton.click();

    const formMessages = page.locator('[data-slot="form-message"]');
    await expect(formMessages).toHaveCount(0);
  });

  test('handles mixed valid and invalid fields', async ({ page }) => {
    await page.goto('/examples/form/validation');

    const submitButton = page.locator('button[type="submit"]');
    await submitButton.click();

    await page.waitForTimeout(500);

    const usernameInput = page.locator('input[placeholder="johndoe"]');
    const emailInput = page.locator('input[type="email"][placeholder*="john@example.com"]');

    await usernameInput.fill('validusername');
    await emailInput.fill('invalid');

    await submitButton.click();
    await page.waitForTimeout(500);

    const formMessages = page.locator('[data-slot="form-message"]');
    await expect(formMessages).toHaveCount(3);
  });

  test('validates password matching', async ({ page }) => {
    await page.goto('/examples/form/validation');

    const usernameInput = page.locator('input[placeholder="johndoe"]');
    const emailInput = page.locator('input[type="email"][placeholder*="john@example.com"]');
    const passwordInput = page.locator('input[type="password"]').nth(0);
    const confirmPasswordInput = page.locator('input[type="password"]').nth(1);

    await usernameInput.fill('validusername');
    await emailInput.fill('test@example.com');
    await passwordInput.fill('password123');
    await confirmPasswordInput.fill('different123');

    const submitButton = page.locator('button[type="submit"]');
    await submitButton.click();

    const formMessages = page.locator('[data-slot="form-message"]');
    await expect(formMessages).toHaveCount(1);

    await expect(confirmPasswordInput).toHaveAttribute('aria-invalid', 'true');
  });

  test('validates username length constraints', async ({ page }) => {
    await page.goto('/examples/form/validation');

    const usernameInput = page.locator('input[placeholder="johndoe"]');
    const submitButton = page.locator('button[type="submit"]');

    await usernameInput.fill('a');
    await submitButton.click();

    await expect(usernameInput).toHaveAttribute('aria-invalid', 'true');

    await usernameInput.fill('a'.repeat(25));
    await submitButton.click();

    await expect(usernameInput).toHaveAttribute('aria-invalid', 'true');
  });

  test('validates password minimum length', async ({ page }) => {
    await page.goto('/examples/form/validation');

    const passwordInput = page.locator('input[type="password"]').nth(0);
    const submitButton = page.locator('button[type="submit"]');

    await passwordInput.fill('short');
    await submitButton.click();

    await expect(passwordInput).toHaveAttribute('aria-invalid', 'true');
  });
});

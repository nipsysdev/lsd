import { expect, test } from '@playwright/test';

test.describe('Textarea Behavior', () => {
  test('multi-line typing with Enter', async ({ page }) => {
    await page.goto('/examples/textarea/basic');

    const textareas = page.locator('textarea[data-slot="textarea"]');
    await expect(textareas).toHaveCount(3);

    const firstTextarea = textareas.first();
    await expect(firstTextarea).toBeVisible();
    await expect(firstTextarea).toHaveValue('');

    await firstTextarea.fill('Line 1\nLine 2\nLine 3');
    await expect(firstTextarea).toHaveValue('Line 1\nLine 2\nLine 3');
  });

  test('initial content displays correctly', async ({ page }) => {
    await page.goto('/examples/textarea/basic');

    const textareas = page.locator('textarea[data-slot="textarea"]');
    const secondTextarea = textareas.nth(1);

    const expectedValue =
      'This is some initial text content that appears when the component loads.';
    await expect(secondTextarea).toHaveValue(expectedValue);
  });

  test('disabled prevents editing', async ({ page }) => {
    await page.goto('/examples/textarea/states');

    const textareas = page.locator('textarea[data-slot="textarea"]');
    const disabledTextarea = textareas.nth(1);

    await expect(disabledTextarea).toBeDisabled();

    const originalValue = await disabledTextarea.inputValue();

    await disabledTextarea.fill('Should not work', { force: true });

    await expect(disabledTextarea).toHaveValue(originalValue);
  });

  test('error state with aria-invalid', async ({ page }) => {
    await page.goto('/examples/textarea/states');

    const textareas = page.locator('textarea[data-slot="textarea"]');
    const errorTextarea = textareas.nth(2);

    await expect(errorTextarea).toHaveAttribute('aria-invalid', 'true');

    const expectedValue = 'This textarea has an error state.';
    await expect(errorTextarea).toHaveValue(expectedValue);

    await errorTextarea.fill('New error content');
    await expect(errorTextarea).toHaveValue('New error content');
  });

  test('readonly allows selection but not editing', async ({ page }) => {
    await page.goto('/examples/textarea/states');

    const textareas = page.locator('textarea[data-slot="textarea"]');
    const readonlyTextarea = textareas.nth(3);

    await expect(readonlyTextarea).toHaveAttribute('readonly', '');

    const originalValue = await readonlyTextarea.inputValue();
    await expect(readonlyTextarea).toHaveValue(originalValue);
  });

  test('multiple textareas are independent', async ({ page }) => {
    await page.goto('/examples/textarea/basic');

    const textareas = page.locator('textarea[data-slot="textarea"]');
    const firstTextarea = textareas.first();
    const secondTextarea = textareas.nth(1);

    await firstTextarea.fill('First content');
    await secondTextarea.fill('Second content');

    await expect(firstTextarea).toHaveValue('First content');
    await expect(secondTextarea).toHaveValue('Second content');
  });
});

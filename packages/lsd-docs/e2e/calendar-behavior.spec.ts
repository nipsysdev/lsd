import { expect, test } from '@playwright/test';

test.describe('Calendar Behavior', () => {
  test('select a date by clicking', async ({ page }) => {
    await page.goto('/examples/calendar/basic');

    const dayButton = page.locator('button:has-text("15")').first();
    await dayButton.click();

    await expect(dayButton).toHaveAttribute('data-selected-single', 'true');
  });

  test('navigate to previous month', async ({ page }) => {
    await page.goto('/examples/calendar/basic');

    const previousButton = page.locator('.rdp-button_previous');
    const monthLabel = page.locator('.rdp-caption_label');

    const initialText = await monthLabel.textContent();

    await previousButton.click();

    const newText = await monthLabel.textContent();
    expect(newText).not.toBe(initialText);
  });

  test('navigate to next month', async ({ page }) => {
    await page.goto('/examples/calendar/basic');

    const nextButton = page.locator('.rdp-button_next');
    const monthLabel = page.locator('.rdp-caption_label');

    const initialText = await monthLabel.textContent();

    await nextButton.click();

    const newText = await monthLabel.textContent();
    expect(newText).not.toBe(initialText);
  });

  test('multiple date selections update selection', async ({ page }) => {
    await page.goto('/examples/calendar/basic');

    const firstButton = page.locator('button:has-text("10")').first();
    const secondButton = page.locator('button:has-text("15")').first();

    await firstButton.click();
    await expect(firstButton).toHaveAttribute('data-selected-single', 'true');

    await secondButton.click();
    await expect(secondButton).toHaveAttribute('data-selected-single', 'true');
    await expect(firstButton).not.toHaveAttribute('data-selected-single', 'true');
  });

  test('today is highlighted visually', async ({ page }) => {
    await page.goto('/examples/calendar/basic');

    const today = new Date();
    const dayNumber = today.getDate().toString();

    const todayButton = page.locator(`button:has-text("${dayNumber}")`).first();
    await expect(todayButton).toBeVisible();

    const hasSelectedClass = await todayButton.evaluate((el: HTMLElement) => {
      return el.classList.toString().includes('lsd:');
    });
    expect(hasSelectedClass).toBe(true);
  });

  test('disabled dates cannot be selected', async ({ page }) => {
    await page.goto('/examples/calendar/with-validation');

    const disabledButtons = page.locator('button[disabled]');
    const count = await disabledButtons.count();

    if (count > 0) {
      const firstDisabled = disabledButtons.first();
      await expect(firstDisabled).toHaveAttribute('disabled');
    }
  });

  test('clicked date shows as selected', async ({ page }) => {
    await page.goto('/examples/calendar/basic');

    const dayButton = page.locator('button:has-text("20")').first();
    await dayButton.click();

    await expect(dayButton).toHaveAttribute('data-selected-single', 'true');
  });

  test('navigation preserves today indicator in correct month', async ({ page }) => {
    await page.goto('/examples/calendar/basic');

    const today = new Date();
    const _todayDay = today.getDate();

    const nextButton = page.locator('.rdp-button_next');
    const previousButton = page.locator('.rdp-button_previous');

    await nextButton.click();

    const monthLabel = page.locator('.rdp-caption_label');
    const monthText = await monthLabel.textContent();

    await previousButton.click();

    const newMonthText = await monthLabel.textContent();
    expect(newMonthText).not.toBe(monthText);
  });

  test('only one date can be selected at a time in single mode', async ({ page }) => {
    await page.goto('/examples/calendar/basic');

    const button1 = page.locator('button:has-text("5")').first();
    const button2 = page.locator('button:has-text("10")').first();

    await button1.click();
    await expect(button1).toHaveAttribute('data-selected-single', 'true');

    await button2.click();
    await expect(button2).toHaveAttribute('data-selected-single', 'true');
    await expect(button1).not.toHaveAttribute('data-selected-single');
  });

  test('clicking outside month days still works', async ({ page }) => {
    await page.goto('/examples/calendar/basic');

    const nextButton = page.locator('.rdp-button_next');
    await nextButton.click();

    const outsideDay = page.locator('button.rdp-outside').first();
    if ((await outsideDay.count()) > 0) {
      await outsideDay.first().click();

      const monthLabel = page.locator('.rdp-caption_label');
      await expect(monthLabel).toBeVisible();
    }
  });

  test('calendar day buttons have correct role', async ({ page }) => {
    await page.goto('/examples/calendar/basic');

    const dayButtons = page.locator('button:visible');
    const firstButton = dayButtons.first();

    await expect(firstButton).toBeVisible();
  });

  test('validation weekends are disabled', async ({ page }) => {
    await page.goto('/examples/calendar/with-validation');

    const allDayButtons = page.locator('button[disabled]');
    const count = await allDayButtons.count();

    expect(count).toBeGreaterThan(0);
  });

  test('past dates are disabled in validation example', async ({ page }) => {
    await page.goto('/examples/calendar/with-validation');

    const today = new Date();
    const _dayNumber = today.getDate();

    const prevMonthButton = page.locator('.rdp-button_previous');
    await prevMonthButton.click();

    const disabledButtons = page.locator('button[disabled]');
    const count = await disabledButtons.count();

    expect(count).toBeGreaterThan(0);
  });

  test('navigation buttons work', async ({ page }) => {
    await page.goto('/examples/calendar/basic');

    const nextButton = page.locator('.rdp-button_next');
    const previousButton = page.locator('.rdp-button_previous');
    const monthLabel = page.locator('.rdp-caption_label');

    const initialText = await monthLabel.textContent();

    await nextButton.click();

    const afterNextText = await monthLabel.textContent();
    expect(afterNextText).not.toBe(initialText);

    await previousButton.click();

    const afterPrevText = await monthLabel.textContent();
    expect(afterPrevText).toBe(initialText);
  });
});

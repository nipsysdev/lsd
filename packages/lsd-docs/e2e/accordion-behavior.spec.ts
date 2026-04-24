import { expect, test } from '@playwright/test';

test.describe('Accordion Behavior', () => {
  test('expand and collapse single item', async ({ page }) => {
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

  test('single mode - only one item open at a time', async ({ page }) => {
    await page.goto('/examples/accordion/single');

    const trigger1 = page.locator('[data-slot="accordion-trigger"]').nth(0);
    const trigger2 = page.locator('[data-slot="accordion-trigger"]').nth(1);
    const trigger3 = page.locator('[data-slot="accordion-trigger"]').nth(2);

    const content1 = page.locator('[data-slot="accordion-content"]').nth(0);
    const content2 = page.locator('[data-slot="accordion-content"]').nth(1);
    const content3 = page.locator('[data-slot="accordion-content"]').nth(2);

    await trigger1.click();
    await expect(content1).toBeVisible();
    await expect(trigger1).toHaveAttribute('aria-expanded', 'true');

    await trigger2.click();
    await expect(content1).not.toBeVisible();
    await expect(content2).toBeVisible();
    await expect(trigger1).toHaveAttribute('aria-expanded', 'false');
    await expect(trigger2).toHaveAttribute('aria-expanded', 'true');

    await trigger3.click();
    await expect(content2).not.toBeVisible();
    await expect(content3).toBeVisible();
    await expect(trigger2).toHaveAttribute('aria-expanded', 'false');
    await expect(trigger3).toHaveAttribute('aria-expanded', 'true');
  });

  test('multiple mode - multiple items can be open simultaneously', async ({ page }) => {
    await page.goto('/examples/accordion/multiple');

    const trigger1 = page.locator('[data-slot="accordion-trigger"]').nth(0);
    const trigger2 = page.locator('[data-slot="accordion-trigger"]').nth(1);
    const trigger3 = page.locator('[data-slot="accordion-trigger"]').nth(2);

    const content1 = page.locator('[data-slot="accordion-content"]').nth(0);
    const content2 = page.locator('[data-slot="accordion-content"]').nth(1);
    const content3 = page.locator('[data-slot="accordion-content"]').nth(2);

    await trigger1.click();
    await expect(content1).toBeVisible();
    await expect(trigger1).toHaveAttribute('aria-expanded', 'true');

    await trigger2.click();
    await expect(content1).toBeVisible();
    await expect(content2).toBeVisible();
    await expect(trigger1).toHaveAttribute('aria-expanded', 'true');
    await expect(trigger2).toHaveAttribute('aria-expanded', 'true');

    await trigger3.click();
    await expect(content1).toBeVisible();
    await expect(content2).toBeVisible();
    await expect(content3).toBeVisible();
    await expect(trigger3).toHaveAttribute('aria-expanded', 'true');
  });

  test('collapsible - can close all items in single mode', async ({ page }) => {
    await page.goto('/examples/accordion/single');

    const trigger1 = page.locator('[data-slot="accordion-trigger"]').nth(0);
    const content1 = page.locator('[data-slot="accordion-content"]').nth(0);

    await trigger1.click();
    await expect(content1).toBeVisible();

    await trigger1.click();
    await expect(content1).not.toBeVisible();
    await expect(trigger1).toHaveAttribute('aria-expanded', 'false');
  });

  test('content visible when expanded, hidden when collapsed', async ({ page }) => {
    await page.goto('/examples/accordion/single');

    const triggers = page.locator('[data-slot="accordion-trigger"]');
    const contents = page.locator('[data-slot="accordion-content"]');

    await expect(contents).toHaveCount(3);
    await expect(contents.first()).not.toBeVisible();
    await expect(contents.nth(1)).not.toBeVisible();
    await expect(contents.nth(2)).not.toBeVisible();

    await triggers.first().click();
    await expect(contents.first()).toBeVisible();
    await expect(contents.nth(1)).not.toBeVisible();
    await expect(contents.nth(2)).not.toBeVisible();

    await triggers.nth(1).click();
    await expect(contents.first()).not.toBeVisible();
    await expect(contents.nth(1)).toBeVisible();
    await expect(contents.nth(2)).not.toBeVisible();

    await triggers.nth(2).click();
    await expect(contents.first()).not.toBeVisible();
    await expect(contents.nth(1)).not.toBeVisible();
    await expect(contents.nth(2)).toBeVisible();
  });

  test('toggle all items open in multiple mode', async ({ page }) => {
    await page.goto('/examples/accordion/multiple');

    const triggers = page.locator('[data-slot="accordion-trigger"]');
    const contents = page.locator('[data-slot="accordion-content"]');

    await triggers.nth(0).click();
    await triggers.nth(1).click();
    await triggers.nth(2).click();

    await expect(contents.nth(0)).toBeVisible();
    await expect(contents.nth(1)).toBeVisible();
    await expect(contents.nth(2)).toBeVisible();
    await expect(triggers.nth(0)).toHaveAttribute('aria-expanded', 'true');
    await expect(triggers.nth(1)).toHaveAttribute('aria-expanded', 'true');
    await expect(triggers.nth(2)).toHaveAttribute('aria-expanded', 'true');
  });

  test('close multiple items in multiple mode', async ({ page }) => {
    await page.goto('/examples/accordion/multiple');

    const triggers = page.locator('[data-slot="accordion-trigger"]');
    const contents = page.locator('[data-slot="accordion-content"]');

    await triggers.nth(0).click();
    await triggers.nth(1).click();

    await expect(contents.nth(0)).toBeVisible();
    await expect(contents.nth(1)).toBeVisible();

    await triggers.nth(0).click();
    await expect(contents.nth(0)).not.toBeVisible();
    await expect(contents.nth(1)).toBeVisible();
    await expect(triggers.nth(0)).toHaveAttribute('aria-expanded', 'false');
    await expect(triggers.nth(1)).toHaveAttribute('aria-expanded', 'true');
  });
});

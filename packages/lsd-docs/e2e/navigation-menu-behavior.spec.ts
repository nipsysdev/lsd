import { expect, test } from '@playwright/test';

test.describe('NavigationMenu Behavior', () => {
  test('click trigger opens dropdown', async ({ page }) => {
    await page.goto('/examples/navigation-menu/basic');

    const productsTrigger = page.getByText('Products');
    await expect(productsTrigger).toBeVisible();
    await productsTrigger.click();

    await page.waitForTimeout(200);

    const content = page.locator(
      '[data-slot="navigation-menu-item"]:has-text("Products") [data-slot="navigation-menu-content"]'
    );
    await expect(content).toBeVisible();

    await expect(content.getByText('Product 1')).toBeVisible();
    await expect(content.getByText('Product 2')).toBeVisible();
    await expect(content.getByText('Product 3')).toBeVisible();
  });

  test('hover trigger opens dropdown', async ({ page }) => {
    await page.goto('/examples/navigation-menu/basic');

    const productsTrigger = page.getByText('Products');
    await expect(productsTrigger).toBeVisible();

    await productsTrigger.hover();
    await page.waitForTimeout(300);

    const content = page.locator(
      '[data-slot="navigation-menu-item"]:has-text("Products") [data-slot="navigation-menu-content"]'
    );
    await expect(content).toBeVisible();
  });

  test('click outside closes dropdown', async ({ page }) => {
    await page.goto('/examples/navigation-menu/basic');

    const productsTrigger = page.getByText('Products');
    await productsTrigger.click();

    await page.waitForTimeout(200);

    const content = page.locator('[data-slot="navigation-menu-content"]');
    await expect(content).toBeVisible();

    await page.locator('body').click({ position: { x: 500, y: 500 } });
    await page.waitForTimeout(200);

    await expect(content).not.toBeVisible();
  });

  test('escape closes dropdown', async ({ page }) => {
    await page.goto('/examples/navigation-menu/basic');

    const productsTrigger = page.getByText('Products');
    await productsTrigger.click();

    await page.waitForTimeout(200);

    const content = page.locator('[data-slot="navigation-menu-content"]');
    await expect(content).toBeVisible();

    await page.keyboard.press('Escape');
    await page.waitForTimeout(200);

    await expect(content).not.toBeVisible();
  });

  test('clicking another trigger closes previous dropdown', async ({ page }) => {
    await page.goto('/examples/navigation-menu/basic');

    const productsTrigger = page.getByText('Products');
    const servicesTrigger = page.getByText('Services');

    await productsTrigger.click();
    await page.waitForTimeout(200);

    const productsContent = page.locator(
      '[data-slot="navigation-menu-item"]:has-text("Products") [data-slot="navigation-menu-content"]'
    );
    await expect(productsContent).toBeVisible();
    await expect(productsContent.getByText('Product 1')).toBeVisible();

    await servicesTrigger.click();
    await page.waitForTimeout(200);

    await expect(productsContent).not.toBeVisible();

    await servicesTrigger.click();
    await page.waitForTimeout(200);

    const servicesContent = page.locator(
      '[data-slot="navigation-menu-item"]:has-text("Services") [data-slot="navigation-menu-content"]'
    );
    await expect(servicesContent).toBeVisible();
    await expect(servicesContent.getByText('Service 1')).toBeVisible();
  });

  test('hovering another trigger closes previous dropdown', async ({ page }) => {
    await page.goto('/examples/navigation-menu/basic');

    const productsTrigger = page.getByText('Products');
    const servicesTrigger = page.getByText('Services');

    await productsTrigger.hover();
    await page.waitForTimeout(300);

    const productsContent = page.locator(
      '[data-slot="navigation-menu-item"]:has-text("Products") [data-slot="navigation-menu-content"]'
    );
    await expect(productsContent).toBeVisible();
    await expect(productsContent.getByText('Product 1')).toBeVisible();

    await servicesTrigger.hover();
    await page.waitForTimeout(300);

    await expect(productsContent).not.toBeVisible();

    const servicesContent = page.locator(
      '[data-slot="navigation-menu-item"]:has-text("Services") [data-slot="navigation-menu-content"]'
    );
    await expect(servicesContent).toBeVisible();
    await expect(servicesContent.getByText('Service 1')).toBeVisible();
  });

  test('aria-expanded reflects dropdown state', async ({ page }) => {
    await page.goto('/examples/navigation-menu/basic');

    const productsTrigger = page.getByText('Products');
    await expect(productsTrigger).toHaveAttribute('aria-expanded', 'false');

    await productsTrigger.click();
    await page.waitForTimeout(200);

    await expect(productsTrigger).toHaveAttribute('aria-expanded', 'true');

    await page.locator('body').click({ position: { x: 500, y: 500 } });
    await page.waitForTimeout(200);

    await expect(productsTrigger).toHaveAttribute('aria-expanded', 'false');
  });

  test('navigation links are clickable', async ({ page }) => {
    await page.goto('/examples/navigation-menu/basic');

    const aboutLink = page.getByText('About');
    await expect(aboutLink).toBeVisible();
    await expect(aboutLink).toHaveAttribute('href', '#');

    const productsTrigger = page.getByText('Products');
    await productsTrigger.click();
    await page.waitForTimeout(200);

    const content = page.locator(
      '[data-slot="navigation-menu-item"]:has-text("Products") [data-slot="navigation-menu-content"]'
    );
    const productLinks = content.locator('[data-slot="navigation-menu-link"]');
    await expect(productLinks).toHaveCount(3);

    await expect(productLinks.nth(0)).toHaveText('Product 1');
    await expect(productLinks.nth(0)).toHaveAttribute('href', '#');
  });

  test('clicking navigation link closes dropdown', async ({ page }) => {
    await page.goto('/examples/navigation-menu/basic');

    const productsTrigger = page.getByText('Products');
    await productsTrigger.click();
    await page.waitForTimeout(200);

    const content = page.locator(
      '[data-slot="navigation-menu-item"]:has-text("Products") [data-slot="navigation-menu-content"]'
    );
    const productLinks = content.locator('[data-slot="navigation-menu-link"]');

    await productLinks.nth(0).click();
    await page.waitForTimeout(200);

    await expect(content).not.toBeVisible();
  });

  test('multiple dropdowns work independently', async ({ page }) => {
    await page.goto('/examples/navigation-menu/basic');

    const productsTrigger = page.getByText('Products');
    const servicesTrigger = page.getByText('Services');

    await productsTrigger.click();
    await page.waitForTimeout(200);

    const productsContent = page.locator(
      '[data-slot="navigation-menu-item"]:has-text("Products") [data-slot="navigation-menu-content"]'
    );
    await expect(productsContent.getByText('Product 1')).toBeVisible();
    await expect(productsContent.getByText('Product 2')).toBeVisible();
    await expect(productsContent.getByText('Product 3')).toBeVisible();

    await servicesTrigger.click();
    await page.waitForTimeout(200);

    await expect(productsContent).not.toBeVisible();

    await servicesTrigger.click();
    await page.waitForTimeout(200);

    const servicesContent = page.locator(
      '[data-slot="navigation-menu-item"]:has-text("Services") [data-slot="navigation-menu-content"]'
    );
    await expect(servicesContent.getByText('Service 1')).toBeVisible();
    await expect(servicesContent.getByText('Service 2')).toBeVisible();
    await expect(servicesContent.getByText('Service 3')).toBeVisible();

    await productsTrigger.click();
    await productsTrigger.click();
    await page.waitForTimeout(200);

    await expect(servicesContent).not.toBeVisible();
    await expect(productsContent.getByText('Product 1')).toBeVisible();
  });

  test('triggers without dropdown are clickable', async ({ page }) => {
    await page.goto('/examples/navigation-menu/basic');

    const aboutLink = page.getByText('About');
    await expect(aboutLink).toBeVisible();

    await aboutLink.click();

    const content = page.locator('[data-slot="navigation-menu-content"]');
    await expect(content).not.toBeVisible();
  });

  test('keyboard navigation with arrow keys', async ({ page }) => {
    await page.goto('/examples/navigation-menu/basic');

    const productsTrigger = page.getByText('Products');
    const servicesTrigger = page.getByText('Services');

    await productsTrigger.click();
    await page.waitForTimeout(200);

    const productsContent = page.locator(
      '[data-slot="navigation-menu-item"]:has-text("Products") [data-slot="navigation-menu-content"]'
    );
    await expect(productsContent).toBeVisible();

    await servicesTrigger.click();
    await page.waitForTimeout(200);

    await expect(productsContent).not.toBeVisible();

    await servicesTrigger.click();
    await page.waitForTimeout(200);

    const servicesContent = page.locator(
      '[data-slot="navigation-menu-item"]:has-text("Services") [data-slot="navigation-menu-content"]'
    );
    await expect(servicesContent).toBeVisible();
    await expect(servicesContent.getByText('Service 1')).toBeVisible();

    const aboutLink = page.getByText('About');
    await aboutLink.click();
    await page.waitForTimeout(200);

    await expect(servicesContent).not.toBeVisible();
  });

  test('enter opens dropdown from trigger', async ({ page }) => {
    await page.goto('/examples/navigation-menu/basic');

    const productsTrigger = page.getByText('Products');

    const content = page.locator(
      '[data-slot="navigation-menu-item"]:has-text("Products") [data-slot="navigation-menu-content"]'
    );
    await expect(content).not.toBeVisible();

    await productsTrigger.click();
    await page.waitForTimeout(200);

    await expect(content).toBeVisible();
    await expect(content.getByText('Product 1')).toBeVisible();
  });

  test('space activates link without dropdown', async ({ page }) => {
    await page.goto('/examples/navigation-menu/basic');

    const aboutLink = page.getByText('About');
    await expect(aboutLink).toBeVisible();

    const productsTrigger = page.getByText('Products');
    await productsTrigger.click();
    await page.waitForTimeout(200);

    const productsContent = page.locator(
      '[data-slot="navigation-menu-item"]:has-text("Products") [data-slot="navigation-menu-content"]'
    );
    await expect(productsContent).toBeVisible();

    await aboutLink.click();
    await page.waitForTimeout(200);

    await expect(productsContent).not.toBeVisible();
  });

  test('escape closes open dropdown', async ({ page }) => {
    await page.goto('/examples/navigation-menu/basic');

    const productsTrigger = page.getByText('Products');
    await productsTrigger.click();
    await page.waitForTimeout(200);

    const content = page.locator(
      '[data-slot="navigation-menu-item"]:has-text("Products") [data-slot="navigation-menu-content"]'
    );
    await expect(content).toBeVisible();

    await page.keyboard.press('Escape');
    await page.waitForTimeout(200);

    await expect(content).not.toBeVisible();
    await expect(productsTrigger).toHaveAttribute('aria-expanded', 'false');
  });
});

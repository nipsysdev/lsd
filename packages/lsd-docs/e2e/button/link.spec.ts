import { expect, test } from '@playwright/test';

test.describe('Button - Link Example', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/button/link');
  });

  test('button renders with text', async ({ page }) => {
    await expect(page.getByText('Learn More')).toBeVisible();
  });

  test('button is visible', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Learn More' });
    await expect(button).toBeVisible();
  });

  test('button is enabled', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Learn More' });
    await expect(button).toBeEnabled();
  });

  test('button has flex or inline-flex display', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Learn More' });

    const display = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.display;
    });

    expect(['flex', 'inline-flex']).toContain(display);
  });

  test('button has center align items', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Learn More' });

    const alignItems = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.alignItems;
    });

    expect(alignItems).toBe('center');
  });

  test('button has center justify content', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Learn More' });

    const justifyContent = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.justifyContent;
    });

    expect(justifyContent).toBe('center');
  });

  test('button has cursor-pointer when enabled', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Learn More' });

    const cursor = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.cursor;
    });

    expect(cursor).toBe('pointer');
  });

  test('button has zero border width', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Learn More' });

    const borderWidth = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.borderWidth);
    });

    expect(borderWidth).toBe(0);
  });

  test('button can be clicked', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Learn More' });

    await button.click();
    await expect(button).toBeVisible();
    await expect(button).toBeEnabled();
  });

  test('button has transparent background color', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Learn More' });

    const backgroundColor = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.backgroundColor;
    });

    expect(backgroundColor).toBe('rgba(0, 0, 0, 0)');
  });

  test('button has underline styling', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Learn More' });

    const textDecorationLine = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.textDecorationLine;
    });

    expect(textDecorationLine).toContain('underline');
  });

  test('button has hover underline behavior', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Learn More' });

    await button.hover();

    const textDecorationLine = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.textDecorationLine;
    });

    expect(textDecorationLine).toContain('underline');
  });

  test('button has correct top padding', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Learn More' });

    const paddingTop = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.paddingTop);
    });

    expect(paddingTop).toBe(6.5);
  });

  test('button has correct bottom padding', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Learn More' });

    const paddingBottom = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.paddingBottom);
    });

    expect(paddingBottom).toBe(6.5);
  });

  test('button has correct font size', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Learn More' });

    const fontSize = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.fontSize;
    });

    expect(fontSize).toBe('13px');
  });

  test('button has valid font family', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Learn More' });

    const fontFamily = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.fontFamily;
    });

    expect(['monospace', 'sans-serif', 'serif'].some(f => fontFamily.includes(f))).toBe(true);
  });

  test('button focus state makes button the active element', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Learn More' });

    await button.focus();

    const isFocused = await button.evaluate(el => {
      return document.activeElement === el;
    });

    expect(isFocused).toBe(true);
  });

  test('button focus state has visible outline', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Learn More' });

    await button.focus();

    const outlineWidth = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.outlineWidth;
    });

    expect(outlineWidth).not.toBe('0px');
  });

  test('button uses border box sizing', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Learn More' });

    const boxSizing = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.boxSizing;
    });

    expect(boxSizing).toBe('border-box');
  });

  test('button has static position', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Learn More' });

    const position = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.position;
    });

    expect(position).toBe('static');
  });
});

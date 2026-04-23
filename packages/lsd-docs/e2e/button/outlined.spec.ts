import { expect, test } from '@playwright/test';

test.describe('Button - Outlined Example', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/button/outlined');
  });

  test('button renders with text', async ({ page }) => {
    await expect(page.getByText('Cancel')).toBeVisible();
  });

  test('button is visible', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Cancel' });
    await expect(button).toBeVisible();
  });

  test('button is enabled', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Cancel' });
    await expect(button).toBeEnabled();
  });

  test('button has flex or inline-flex display', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Cancel' });

    const display = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.display;
    });

    expect(['flex', 'inline-flex']).toContain(display);
  });

  test('button has center align items', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Cancel' });

    const alignItems = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.alignItems;
    });

    expect(alignItems).toBe('center');
  });

  test('button has center justify content', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Cancel' });

    const justifyContent = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.justifyContent;
    });

    expect(justifyContent).toBe('center');
  });

  test('button has cursor-pointer when enabled', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Cancel' });

    const cursor = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.cursor;
    });

    expect(cursor).toBe('pointer');
  });

  test('button has correct border width', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Cancel' });

    const borderWidth = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.borderWidth;
    });

    expect(borderWidth).toBe('1px');
  });

  test('button has solid border style', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Cancel' });

    const borderStyle = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.borderStyle;
    });

    expect(borderStyle).toBe('solid');
  });

  test('button can be clicked', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Cancel' });

    await button.click();
    await expect(button).toBeVisible();
    await expect(button).toBeEnabled();
  });

  test('button has transparent background', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Cancel' });

    const backgroundColor = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.backgroundColor;
    });

    expect(backgroundColor).toBe('rgba(0, 0, 0, 0)');
  });

  test('button has correct text color', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Cancel' });

    const textColor = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.color;
    });

    expect(textColor).toBe('rgb(0, 0, 0)');
  });

  test('button has correct top padding', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Cancel' });

    const paddingTop = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.paddingTop);
    });

    expect(paddingTop).toBe(6.5);
  });

  test('button has correct bottom padding', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Cancel' });

    const paddingBottom = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.paddingBottom);
    });

    expect(paddingBottom).toBe(6.5);
  });

  test('button has correct font size', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Cancel' });

    const fontSize = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.fontSize;
    });

    expect(fontSize).toBe('13px');
  });

  test('button has valid font family', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Cancel' });

    const fontFamily = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.fontFamily;
    });

    expect(['monospace', 'sans-serif', 'serif'].some(f => fontFamily.includes(f))).toBe(true);
  });

  test('button border has correct top width', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Cancel' });

    const borderTopWidth = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.borderTopWidth);
    });

    expect(borderTopWidth).toBe(1);
  });

  test('button border has correct right width', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Cancel' });

    const borderRightWidth = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.borderRightWidth);
    });

    expect(borderRightWidth).toBe(1);
  });

  test('button border has correct bottom width', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Cancel' });

    const borderBottomWidth = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.borderBottomWidth);
    });

    expect(borderBottomWidth).toBe(1);
  });

  test('button border has correct left width', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Cancel' });

    const borderLeftWidth = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.borderLeftWidth);
    });

    expect(borderLeftWidth).toBe(1);
  });

  test('button has correct top border color', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Cancel' });

    const borderTopColor = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.borderTopColor;
    });

    expect(borderTopColor).toBe('rgb(0, 0, 0)');
  });

  test('button has correct right border color', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Cancel' });

    const borderRightColor = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.borderRightColor;
    });

    expect(borderRightColor).toBe('rgb(0, 0, 0)');
  });

  test('button has correct bottom border color', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Cancel' });

    const borderBottomColor = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.borderBottomColor;
    });

    expect(borderBottomColor).toBe('rgb(0, 0, 0)');
  });

  test('button has correct left border color', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Cancel' });

    const borderLeftColor = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.borderLeftColor;
    });

    expect(borderLeftColor).toBe('rgb(0, 0, 0)');
  });

  test('button focus state makes button the active element', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Cancel' });

    await button.focus();

    const isFocused = await button.evaluate(el => {
      return document.activeElement === el;
    });

    expect(isFocused).toBe(true);
  });

  test('button focus state has visible outline', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Cancel' });

    await button.focus();

    const outlineWidth = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.outlineWidth;
    });

    expect(outlineWidth).not.toBe('0px');
  });

  test('button uses border box sizing', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Cancel' });

    const boxSizing = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.boxSizing;
    });

    expect(boxSizing).toBe('border-box');
  });

  test('button has static position', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Cancel' });

    const position = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.position;
    });

    expect(position).toBe('static');
  });
});

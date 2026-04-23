import { expect, test } from '@playwright/test';

test.describe('Button - As Child Example', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/button/as-child');
  });

  test('first link renders with text', async ({ page }) => {
    await expect(page.getByText('Link Button')).toBeVisible();
  });

  test('second link renders with text', async ({ page }) => {
    await expect(page.getByText('Learn More')).toBeVisible();
  });

  test('first link is visible', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Link Button' });
    await expect(link).toBeVisible();
  });

  test('second link is visible', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Learn More' });
    await expect(link).toBeVisible();
  });

  test('first link has flex or inline-flex display', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Link Button' });

    const display = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.display;
    });

    expect(['flex', 'inline-flex']).toContain(display);
  });

  test('second link has flex or inline-flex display', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Learn More' });

    const display = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.display;
    });

    expect(['flex', 'inline-flex']).toContain(display);
  });

  test('first link has center align items', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Link Button' });

    const alignItems = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.alignItems;
    });

    expect(alignItems).toBe('center');
  });

  test('second link has center align items', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Learn More' });

    const alignItems = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.alignItems;
    });

    expect(alignItems).toBe('center');
  });

  test('first link has center justify content', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Link Button' });

    const justifyContent = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.justifyContent;
    });

    expect(justifyContent).toBe('center');
  });

  test('second link has center justify content', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Learn More' });

    const justifyContent = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.justifyContent;
    });

    expect(justifyContent).toBe('center');
  });

  test('first link has cursor-pointer', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Link Button' });

    const cursor = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.cursor;
    });

    expect(cursor).toBe('pointer');
  });

  test('second link has cursor-pointer', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Learn More' });

    const cursor = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.cursor;
    });

    expect(cursor).toBe('pointer');
  });

  test('first link has correct border width', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Link Button' });

    const borderWidth = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.borderWidth;
    });

    expect(borderWidth).toBe('1px');
  });

  test('second link has correct border width', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Learn More' });

    const borderWidth = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.borderWidth;
    });

    expect(borderWidth).toBe('1px');
  });

  test('first link has solid border style', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Link Button' });

    const borderStyle = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.borderStyle;
    });

    expect(borderStyle).toBe('solid');
  });

  test('second link has solid border style', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Learn More' });

    const borderStyle = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.borderStyle;
    });

    expect(borderStyle).toBe('solid');
  });

  test('first link can be clicked', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Link Button' });

    await link.click();
    await expect(link).toBeVisible();
  });

  test('second link can be clicked', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Learn More' });

    await link.click();
    await expect(link).toBeVisible();
  });

  test('first link has correct href attribute', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Link Button' });

    const href = await link.getAttribute('href');

    expect(href).toBe('/docs');
  });

  test('second link has correct href attribute', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Learn More' });

    const href = await link.getAttribute('href');

    expect(href).toBe('/docs');
  });

  test('filled variant has correct background color', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Link Button' });

    const backgroundColor = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.backgroundColor;
    });

    expect(backgroundColor).toBe('rgb(0, 0, 0)');
  });

  test('filled variant has correct text color', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Link Button' });

    const textColor = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.color;
    });

    expect(textColor).toBe('rgb(255, 255, 255)');
  });

  test('outlined variant has transparent background color', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Learn More' });

    const backgroundColor = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.backgroundColor;
    });

    expect(backgroundColor).toBe('transparent');
  });

  test('outlined variant has correct text color', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Learn More' });

    const textColor = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.color;
    });

    expect(textColor).toBe('rgb(0, 0, 0)');
  });

  test('first link has correct top padding', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Link Button' });

    const paddingTop = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.paddingTop);
    });

    expect(paddingTop).toBe(6.5);
  });

  test('second link has correct top padding', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Learn More' });

    const paddingTop = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.paddingTop);
    });

    expect(paddingTop).toBe(6.5);
  });

  test('first link has correct bottom padding', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Link Button' });

    const paddingBottom = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.paddingBottom);
    });

    expect(paddingBottom).toBe(6.5);
  });

  test('second link has correct bottom padding', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Learn More' });

    const paddingBottom = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.paddingBottom);
    });

    expect(paddingBottom).toBe(6.5);
  });

  test('first link has correct font size', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Link Button' });

    const fontSize = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.fontSize;
    });

    expect(fontSize).toBe('13px');
  });

  test('second link has correct font size', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Learn More' });

    const fontSize = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.fontSize;
    });

    expect(fontSize).toBe('13px');
  });

  test('first link has valid font family', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Link Button' });

    const fontFamily = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.fontFamily;
    });

    expect(['monospace', 'sans-serif', 'serif'].some(f => fontFamily.includes(f))).toBe(true);
  });

  test('second link has valid font family', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Learn More' });

    const fontFamily = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.fontFamily;
    });

    expect(['monospace', 'sans-serif', 'serif'].some(f => fontFamily.includes(f))).toBe(true);
  });

  test('first link border has correct top width', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Link Button' });

    const borderTopWidth = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.borderTopWidth);
    });

    expect(borderTopWidth).toBe(1);
  });

  test('second link border has correct top width', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Learn More' });

    const borderTopWidth = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.borderTopWidth);
    });

    expect(borderTopWidth).toBe(1);
  });

  test('first link border has correct right width', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Link Button' });

    const borderRightWidth = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.borderRightWidth);
    });

    expect(borderRightWidth).toBe(1);
  });

  test('second link border has correct right width', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Learn More' });

    const borderRightWidth = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.borderRightWidth);
    });

    expect(borderRightWidth).toBe(1);
  });

  test('first link border has correct bottom width', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Link Button' });

    const borderBottomWidth = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.borderBottomWidth);
    });

    expect(borderBottomWidth).toBe(1);
  });

  test('second link border has correct bottom width', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Learn More' });

    const borderBottomWidth = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.borderBottomWidth);
    });

    expect(borderBottomWidth).toBe(1);
  });

  test('first link border has correct left width', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Link Button' });

    const borderLeftWidth = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.borderLeftWidth);
    });

    expect(borderLeftWidth).toBe(1);
  });

  test('second link border has correct left width', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Learn More' });

    const borderLeftWidth = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.borderLeftWidth);
    });

    expect(borderLeftWidth).toBe(1);
  });

  test('first link border has correct top color', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Link Button' });

    const borderTopColor = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.borderTopColor;
    });

    expect(borderTopColor).toBe('rgb(0, 0, 0)');
  });

  test('second link border has correct top color', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Learn More' });

    const borderTopColor = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.borderTopColor;
    });

    expect(borderTopColor).toBe('rgb(0, 0, 0)');
  });

  test('first link border has correct right color', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Link Button' });

    const borderRightColor = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.borderRightColor;
    });

    expect(borderRightColor).toBe('rgb(0, 0, 0)');
  });

  test('second link border has correct right color', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Learn More' });

    const borderRightColor = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.borderRightColor;
    });

    expect(borderRightColor).toBe('rgb(0, 0, 0)');
  });

  test('first link border has correct bottom color', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Link Button' });

    const borderBottomColor = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.borderBottomColor;
    });

    expect(borderBottomColor).toBe('rgb(0, 0, 0)');
  });

  test('second link border has correct bottom color', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Learn More' });

    const borderBottomColor = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.borderBottomColor;
    });

    expect(borderBottomColor).toBe('rgb(0, 0, 0)');
  });

  test('first link border has correct left color', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Link Button' });

    const borderLeftColor = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.borderLeftColor;
    });

    expect(borderLeftColor).toBe('rgb(0, 0, 0)');
  });

  test('second link border has correct left color', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Learn More' });

    const borderLeftColor = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.borderLeftColor;
    });

    expect(borderLeftColor).toBe('rgb(0, 0, 0)');
  });

  test('focus state on first link makes it the active element', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Link Button' });

    await link.focus();

    const isFocused = await link.evaluate(el => {
      return document.activeElement === el;
    });

    expect(isFocused).toBe(true);
  });

  test('focus state on second link makes it the active element', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Learn More' });

    await link.focus();

    const isFocused = await link.evaluate(el => {
      return document.activeElement === el;
    });

    expect(isFocused).toBe(true);
  });

  test('focus state on first link has visible outline', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Link Button' });

    await link.focus();

    const outlineWidth = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.outlineWidth;
    });

    expect(outlineWidth).not.toBe('0px');
  });

  test('focus state on second link has visible outline', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Learn More' });

    await link.focus();

    const outlineWidth = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.outlineWidth;
    });

    expect(outlineWidth).not.toBe('0px');
  });

  test('first link uses border box sizing', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Link Button' });

    const boxSizing = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.boxSizing;
    });

    expect(boxSizing).toBe('border-box');
  });

  test('second link uses border box sizing', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Learn More' });

    const boxSizing = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.boxSizing;
    });

    expect(boxSizing).toBe('border-box');
  });

  test('first link has static position', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Link Button' });

    const position = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.position;
    });

    expect(position).toBe('static');
  });

  test('second link has static position', async ({ page }) => {
    const link = page.getByRole('link', { name: 'Learn More' });

    const position = await link.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.position;
    });

    expect(position).toBe('static');
  });
});

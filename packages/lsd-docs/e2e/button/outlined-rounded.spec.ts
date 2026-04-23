import { expect, test } from '@playwright/test';

test.describe('Button - Outlined Rounded Example', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/button/outlined-rounded');
  });

  test('text button is visible', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Add Item' });
    await expect(button).toBeVisible();
  });

  test('text button is enabled', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Add Item' });
    await expect(button).toBeEnabled();
  });

  test('icon buttons are visible', async ({ page }) => {
    const iconButtons = page.getByRole('button').filter({ hasText: /^$/ });
    const count = await iconButtons.count();
    expect(count).toBe(3);
  });

  test('icon buttons are enabled', async ({ page }) => {
    const iconButtons = page.getByRole('button').filter({ hasText: /^$/ });
    const count = await iconButtons.count();
    expect(count).toBe(3);

    for (let i = 0; i < count; i++) {
      await expect(iconButtons.nth(i)).toBeEnabled();
    }
  });

  test('text button has flex or inline-flex display', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Add Item' });

    const display = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.display;
    });

    expect(['flex', 'inline-flex']).toContain(display);
  });

  test('icon button has flex or inline-flex display', async ({ page }) => {
    const iconButtons = page.getByRole('button').filter({ hasText: /^$/ });
    const button = iconButtons.nth(0);

    const display = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.display;
    });

    expect(['flex', 'inline-flex']).toContain(display);
  });

  test('text button has center align items', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Add Item' });

    const alignItems = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.alignItems;
    });

    expect(alignItems).toBe('center');
  });

  test('icon button has center align items', async ({ page }) => {
    const iconButtons = page.getByRole('button').filter({ hasText: /^$/ });
    const button = iconButtons.nth(0);

    const alignItems = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.alignItems;
    });

    expect(alignItems).toBe('center');
  });

  test('text button has center justify content', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Add Item' });

    const justifyContent = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.justifyContent;
    });

    expect(justifyContent).toBe('center');
  });

  test('icon button has center justify content', async ({ page }) => {
    const iconButtons = page.getByRole('button').filter({ hasText: /^$/ });
    const button = iconButtons.nth(0);

    const justifyContent = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.justifyContent;
    });

    expect(justifyContent).toBe('center');
  });

  test('text button has cursor-pointer when enabled', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Add Item' });

    const cursor = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.cursor;
    });

    expect(cursor).toBe('pointer');
  });

  test('icon button has cursor-pointer when enabled', async ({ page }) => {
    const iconButtons = page.getByRole('button').filter({ hasText: /^$/ });
    const button = iconButtons.nth(0);

    const cursor = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.cursor;
    });

    expect(cursor).toBe('pointer');
  });

  test('text button has correct border width', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Add Item' });

    const borderWidth = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.borderWidth;
    });

    expect(borderWidth).toBe('1px');
  });

  test('icon button has correct border width', async ({ page }) => {
    const iconButtons = page.getByRole('button').filter({ hasText: /^$/ });
    const button = iconButtons.nth(0);

    const borderWidth = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.borderWidth;
    });

    expect(borderWidth).toBe('1px');
  });

  test('text button has solid border style', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Add Item' });

    const borderStyle = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.borderStyle;
    });

    expect(borderStyle).toBe('solid');
  });

  test('icon button has solid border style', async ({ page }) => {
    const iconButtons = page.getByRole('button').filter({ hasText: /^$/ });
    const button = iconButtons.nth(0);

    const borderStyle = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.borderStyle;
    });

    expect(borderStyle).toBe('solid');
  });

  test('text button can be clicked', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Add Item' });

    await button.click();
    await expect(button).toBeVisible();
    await expect(button).toBeEnabled();
  });

  test('icon button can be clicked', async ({ page }) => {
    const iconButtons = page.getByRole('button').filter({ hasText: /^$/ });
    const button = iconButtons.nth(0);

    await button.click();
    await expect(button).toBeVisible();
    await expect(button).toBeEnabled();
  });

  test('text button has transparent background', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Add Item' });

    const backgroundColor = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.backgroundColor;
    });

    expect(backgroundColor).toBe('rgba(0, 0, 0, 0)');
  });

  test('icon button has transparent background', async ({ page }) => {
    const iconButtons = page.getByRole('button').filter({ hasText: /^$/ });
    const button = iconButtons.nth(0);

    const backgroundColor = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.backgroundColor;
    });

    expect(backgroundColor).toBe('rgba(0, 0, 0, 0)');
  });

  test('text button has correct text color', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Add Item' });

    const textColor = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.color;
    });

    expect(textColor).toBe('rgb(0, 0, 0)');
  });

  test('text button has rounded corners', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Add Item' });

    const borderRadius = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.borderRadius);
    });

    expect(borderRadius).toBeGreaterThan(0);
  });

  test('icon button has rounded corners', async ({ page }) => {
    const iconButtons = page.getByRole('button').filter({ hasText: /^$/ });
    const button = iconButtons.nth(0);

    const borderRadius = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.borderRadius);
    });

    expect(borderRadius).toBeGreaterThan(0);
  });

  test('text button has correct top padding', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Add Item' });

    const paddingTop = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.paddingTop);
    });

    expect(paddingTop).toBe(6.5);
  });

  test('icon button has correct top padding', async ({ page }) => {
    const iconButtons = page.getByRole('button').filter({ hasText: /^$/ });
    const button = iconButtons.nth(0);

    const paddingTop = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.paddingTop);
    });

    expect(paddingTop).toBe(6.5);
  });

  test('text button has correct bottom padding', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Add Item' });

    const paddingBottom = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.paddingBottom);
    });

    expect(paddingBottom).toBe(6.5);
  });

  test('icon button has correct bottom padding', async ({ page }) => {
    const iconButtons = page.getByRole('button').filter({ hasText: /^$/ });
    const button = iconButtons.nth(0);

    const paddingBottom = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.paddingBottom);
    });

    expect(paddingBottom).toBe(6.5);
  });

  test('text button has correct font size', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Add Item' });

    const fontSize = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.fontSize;
    });

    expect(fontSize).toBe('13px');
  });

  test('icon button has valid font family', async ({ page }) => {
    const iconButtons = page.getByRole('button').filter({ hasText: /^$/ });
    const button = iconButtons.nth(0);

    const fontFamily = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.fontFamily;
    });

    expect(['monospace', 'sans-serif', 'serif'].some(f => fontFamily.includes(f))).toBe(true);
  });

  test('text button border has correct top width', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Add Item' });

    const borderTopWidth = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.borderTopWidth);
    });

    expect(borderTopWidth).toBe(1);
  });

  test('icon button border has correct top width', async ({ page }) => {
    const iconButtons = page.getByRole('button').filter({ hasText: /^$/ });
    const button = iconButtons.nth(0);

    const borderTopWidth = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.borderTopWidth);
    });

    expect(borderTopWidth).toBe(1);
  });

  test('text button border has correct right width', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Add Item' });

    const borderRightWidth = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.borderRightWidth);
    });

    expect(borderRightWidth).toBe(1);
  });

  test('icon button border has correct right width', async ({ page }) => {
    const iconButtons = page.getByRole('button').filter({ hasText: /^$/ });
    const button = iconButtons.nth(0);

    const borderRightWidth = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.borderRightWidth);
    });

    expect(borderRightWidth).toBe(1);
  });

  test('text button border has correct bottom width', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Add Item' });

    const borderBottomWidth = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.borderBottomWidth);
    });

    expect(borderBottomWidth).toBe(1);
  });

  test('icon button border has correct bottom width', async ({ page }) => {
    const iconButtons = page.getByRole('button').filter({ hasText: /^$/ });
    const button = iconButtons.nth(0);

    const borderBottomWidth = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.borderBottomWidth);
    });

    expect(borderBottomWidth).toBe(1);
  });

  test('text button border has correct left width', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Add Item' });

    const borderLeftWidth = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.borderLeftWidth);
    });

    expect(borderLeftWidth).toBe(1);
  });

  test('icon button border has correct left width', async ({ page }) => {
    const iconButtons = page.getByRole('button').filter({ hasText: /^$/ });
    const button = iconButtons.nth(0);

    const borderLeftWidth = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.borderLeftWidth);
    });

    expect(borderLeftWidth).toBe(1);
  });

  test('text button has correct top border color', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Add Item' });

    const borderTopColor = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.borderTopColor;
    });

    expect(borderTopColor).toBe('rgb(0, 0, 0)');
  });

  test('icon button has correct top border color', async ({ page }) => {
    const iconButtons = page.getByRole('button').filter({ hasText: /^$/ });
    const button = iconButtons.nth(0);

    const borderTopColor = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.borderTopColor;
    });

    expect(borderTopColor).toBe('rgb(0, 0, 0)');
  });

  test('text button has correct right border color', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Add Item' });

    const borderRightColor = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.borderRightColor;
    });

    expect(borderRightColor).toBe('rgb(0, 0, 0)');
  });

  test('icon button has correct right border color', async ({ page }) => {
    const iconButtons = page.getByRole('button').filter({ hasText: /^$/ });
    const button = iconButtons.nth(0);

    const borderRightColor = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.borderRightColor;
    });

    expect(borderRightColor).toBe('rgb(0, 0, 0)');
  });

  test('text button has correct bottom border color', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Add Item' });

    const borderBottomColor = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.borderBottomColor;
    });

    expect(borderBottomColor).toBe('rgb(0, 0, 0)');
  });

  test('icon button has correct bottom border color', async ({ page }) => {
    const iconButtons = page.getByRole('button').filter({ hasText: /^$/ });
    const button = iconButtons.nth(0);

    const borderBottomColor = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.borderBottomColor;
    });

    expect(borderBottomColor).toBe('rgb(0, 0, 0)');
  });

  test('text button has correct left border color', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Add Item' });

    const borderLeftColor = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.borderLeftColor;
    });

    expect(borderLeftColor).toBe('rgb(0, 0, 0)');
  });

  test('icon button has correct left border color', async ({ page }) => {
    const iconButtons = page.getByRole('button').filter({ hasText: /^$/ });
    const button = iconButtons.nth(0);

    const borderLeftColor = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.borderLeftColor;
    });

    expect(borderLeftColor).toBe('rgb(0, 0, 0)');
  });

  test('text button focus state makes button the active element', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Add Item' });

    await button.focus();

    const isFocused = await button.evaluate(el => {
      return document.activeElement === el;
    });

    expect(isFocused).toBe(true);
  });

  test('icon button focus state makes button the active element', async ({ page }) => {
    const iconButtons = page.getByRole('button').filter({ hasText: /^$/ });
    const button = iconButtons.nth(0);

    await button.focus();

    const isFocused = await button.evaluate(el => {
      return document.activeElement === el;
    });

    expect(isFocused).toBe(true);
  });

  test('text button focus state has visible outline', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Add Item' });

    await button.focus();

    const outlineWidth = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.outlineWidth;
    });

    expect(outlineWidth).not.toBe('0px');
  });

  test('icon button focus state has visible outline', async ({ page }) => {
    const iconButtons = page.getByRole('button').filter({ hasText: /^$/ });
    const button = iconButtons.nth(0);

    await button.focus();

    const outlineWidth = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.outlineWidth;
    });

    expect(outlineWidth).not.toBe('0px');
  });

  test('text button uses border box sizing', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Add Item' });

    const boxSizing = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.boxSizing;
    });

    expect(boxSizing).toBe('border-box');
  });

  test('icon button uses border box sizing', async ({ page }) => {
    const iconButtons = page.getByRole('button').filter({ hasText: /^$/ });
    const button = iconButtons.nth(0);

    const boxSizing = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.boxSizing;
    });

    expect(boxSizing).toBe('border-box');
  });

  test('text button has static position', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Add Item' });

    const position = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.position;
    });

    expect(position).toBe('static');
  });

  test('icon button has static position', async ({ page }) => {
    const iconButtons = page.getByRole('button').filter({ hasText: /^$/ });
    const button = iconButtons.nth(0);

    const position = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.position;
    });

    expect(position).toBe('static');
  });
});

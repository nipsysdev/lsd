import { expect, test } from '@playwright/test';

test.describe('Button - Ghost Rounded Example', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/button/ghost-rounded');
  });

  test('text button is visible', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Share' });
    await expect(button).toBeVisible();
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

  test('text button is enabled', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Share' });
    await expect(button).toBeEnabled();
  });

  test('text button has flex or inline-flex display', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Share' });

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
    const button = page.getByRole('button', { name: 'Share' });

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
    const button = page.getByRole('button', { name: 'Share' });

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
    const button = page.getByRole('button', { name: 'Share' });

    const cursor = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.cursor;
    });

    expect(cursor).toBe('pointer');
  });

  test('text button has zero border width', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Share' });

    const borderWidth = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.borderWidth);
    });

    expect(borderWidth).toBe(0);
  });

  test('icon button has zero border width', async ({ page }) => {
    const iconButtons = page.getByRole('button').filter({ hasText: /^$/ });
    const button = iconButtons.nth(0);

    const borderWidth = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.borderWidth);
    });

    expect(borderWidth).toBe(0);
  });

  test('text button has rounded corners', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Share' });

    const borderRadiusTopLeft = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.borderTopLeftRadius);
    });

    expect(borderRadiusTopLeft).toBeGreaterThan(0);
  });

  test('icon button has rounded corners', async ({ page }) => {
    const iconButtons = page.getByRole('button').filter({ hasText: /^$/ });
    const button = iconButtons.nth(0);

    const borderRadius = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.borderTopLeftRadius);
    });

    expect(borderRadius).toBeGreaterThan(0);
  });

  test('icon button has square dimensions', async ({ page }) => {
    const iconButtons = page.getByRole('button').filter({ hasText: /^$/ });
    const button = iconButtons.nth(0);

    const width = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.width);
    });

    const height = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.height);
    });

    expect(width).toBe(height);
  });

  test('text button can be clicked', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Share' });

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

  test('text button has transparent background color', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Share' });

    const backgroundColor = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.backgroundColor;
    });

    expect(backgroundColor).toBe('rgba(0, 0, 0, 0)');
  });

  test('icon button has transparent background color', async ({ page }) => {
    const iconButtons = page.getByRole('button').filter({ hasText: /^$/ });
    const button = iconButtons.nth(0);

    const backgroundColor = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.backgroundColor;
    });

    expect(backgroundColor).toBe('rgba(0, 0, 0, 0)');
  });

  test('text button has correct top padding', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Share' });

    const paddingTop = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.paddingTop);
    });

    expect(paddingTop).toBe(6.5);
  });

  test('text button has correct bottom padding', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Share' });

    const paddingBottom = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.paddingBottom);
    });

    expect(paddingBottom).toBe(6.5);
  });

  test('text button has correct font size', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Share' });

    const fontSize = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.fontSize;
    });

    expect(fontSize).toBe('13px');
  });

  test('text button has valid font family', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Share' });

    const fontFamily = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.fontFamily;
    });

    expect(['monospace', 'sans-serif', 'serif'].some(f => fontFamily.includes(f))).toBe(true);
  });

  test('text button focus state makes button the active element', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Share' });

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
    const button = page.getByRole('button', { name: 'Share' });

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
    const button = page.getByRole('button', { name: 'Share' });

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
    const button = page.getByRole('button', { name: 'Share' });

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

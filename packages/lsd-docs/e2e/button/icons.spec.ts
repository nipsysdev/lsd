import { expect, test } from '@playwright/test';

test.describe('Button - Icons Example', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/button/icons');
  });

  test('all three buttons are present', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Download' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Save Changes' })).toBeVisible();
    await expect(page.getByRole('button', { name: /Learn More/ })).toBeVisible();
  });

  test('all buttons are enabled', async ({ page }) => {
    const downloadButton = page.getByRole('button', { name: 'Download' });
    const saveButton = page.getByRole('button', { name: 'Save Changes' });
    const learnButton = page.getByRole('button', { name: /Learn More/ });

    await expect(downloadButton).toBeEnabled();
    await expect(saveButton).toBeEnabled();
    await expect(learnButton).toBeEnabled();
  });

  test('download button has icon', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Download' });
    const icon = button.locator('svg');
    await expect(icon).toBeVisible();
  });

  test('save changes button has icon', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Save Changes' });
    const icon = button.locator('svg');
    await expect(icon).toBeVisible();
  });

  test('learn more button has icon', async ({ page }) => {
    const button = page.getByRole('button', { name: /Learn More/ });
    const icon = button.locator('svg');
    await expect(icon).toBeVisible();
  });

  test('icons are visible in buttons', async ({ page }) => {
    const buttons = page.getByRole('button');
    const count = await buttons.count();

    for (let i = 0; i < count; i++) {
      const button = buttons.nth(i);
      const icon = button.locator('svg');
      const iconCount = await icon.count();
      expect(iconCount).toBeGreaterThan(0);
    }
  });

  test('download button has flex display', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Download' });

    const display = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.display;
    });

    expect(['flex', 'inline-flex']).toContain(display);
  });

  test('download button has center align items', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Download' });

    const alignItems = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.alignItems;
    });

    expect(alignItems).toBe('center');
  });

  test('download button has center justify content', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Download' });

    const justifyContent = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.justifyContent;
    });

    expect(justifyContent).toBe('center');
  });

  test('download button has cursor-pointer when enabled', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Download' });

    const cursor = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.cursor;
    });

    expect(cursor).toBe('pointer');
  });

  test('download button has correct border width', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Download' });

    const borderWidth = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.borderWidth;
    });

    expect(borderWidth).toBe('1px');
  });

  test('download button has solid border style', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Download' });

    const borderStyle = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.borderStyle;
    });

    expect(borderStyle).toBe('solid');
  });

  test('download button can be clicked', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Download' });

    await button.click();
    await expect(button).toBeVisible();
    await expect(button).toBeEnabled();
  });

  test('save changes button has correct background color', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Save Changes' });

    const backgroundColor = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.backgroundColor;
    });

    expect(backgroundColor).toBe('rgb(0, 128, 0)');
  });

  test('save changes button has correct text color', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Save Changes' });

    const textColor = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.color;
    });

    expect(textColor).toBe('rgb(255, 255, 255)');
  });

  test('download button has correct top padding', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Download' });

    const paddingTop = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.paddingTop);
    });

    expect(paddingTop).toBe(6.5);
  });

  test('download button has correct bottom padding', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Download' });

    const paddingBottom = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.paddingBottom);
    });

    expect(paddingBottom).toBe(6.5);
  });

  test('download button has correct font size', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Download' });

    const fontSize = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.fontSize;
    });

    expect(fontSize).toBe('13px');
  });

  test('download button has valid font family', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Download' });

    const fontFamily = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.fontFamily;
    });

    expect(['monospace', 'sans-serif', 'serif'].some(f => fontFamily.includes(f))).toBe(true);
  });

  test('download button border has correct top width', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Download' });

    const borderTopWidth = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.borderTopWidth);
    });

    expect(borderTopWidth).toBe(1);
  });

  test('download button border has correct right width', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Download' });

    const borderRightWidth = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.borderRightWidth);
    });

    expect(borderRightWidth).toBe(1);
  });

  test('download button border has correct bottom width', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Download' });

    const borderBottomWidth = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.borderBottomWidth);
    });

    expect(borderBottomWidth).toBe(1);
  });

  test('download button border has correct left width', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Download' });

    const borderLeftWidth = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.borderLeftWidth);
    });

    expect(borderLeftWidth).toBe(1);
  });

  test('download button has correct top border color', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Download' });

    const borderTopColor = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.borderTopColor;
    });

    expect(borderTopColor).toBe('rgb(0, 0, 0)');
  });

  test('download button has correct right border color', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Download' });

    const borderRightColor = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.borderRightColor;
    });

    expect(borderRightColor).toBe('rgb(0, 0, 0)');
  });

  test('download button has correct bottom border color', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Download' });

    const borderBottomColor = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.borderBottomColor;
    });

    expect(borderBottomColor).toBe('rgb(0, 0, 0)');
  });

  test('download button has correct left border color', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Download' });

    const borderLeftColor = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.borderLeftColor;
    });

    expect(borderLeftColor).toBe('rgb(0, 0, 0)');
  });

  test('download button has correct background color', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Download' });

    const backgroundColor = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.backgroundColor;
    });

    expect(backgroundColor).toBe('rgb(255, 255, 255)');
  });

  test('download button has correct text color', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Download' });

    const textColor = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.color;
    });

    expect(textColor).toBe('rgb(0, 0, 0)');
  });

  test('first button has icon before text', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Download' });

    const icon = button.locator('svg').first();
    const iconElement = await icon.elementHandle();

    const iconIndex = await button.evaluate((el, iconEl) => {
      return Array.from(el.children).indexOf(iconEl);
    }, iconElement);

    expect(iconIndex).toBe(0);
  });

  test('second button has icon before text', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Save Changes' });

    const icon = button.locator('svg').first();
    const iconElement = await icon.elementHandle();

    const iconIndex = await button.evaluate((el, iconEl) => {
      return Array.from(el.children).indexOf(iconEl);
    }, iconElement);

    expect(iconIndex).toBe(0);
  });

  test('third button has icon after text', async ({ page }) => {
    const button = page.getByRole('button', { name: /Learn More/ });

    const icon = button.locator('svg').first();
    const iconElement = await icon.elementHandle();

    const iconIndex = await button.evaluate((el, iconEl) => {
      return Array.from(el.children).indexOf(iconEl);
    }, iconElement);

    expect(iconIndex).toBeGreaterThan(0);
  });

  test('download button icon has right margin', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Download' });
    const icon = button.locator('svg').first();

    const marginRight = await icon.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.marginRight);
    });

    expect(marginRight).toBeGreaterThan(0);
  });

  test('save changes button icon has right margin', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Save Changes' });
    const icon = button.locator('svg').first();

    const marginRight = await icon.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.marginRight);
    });

    expect(marginRight).toBeGreaterThan(0);
  });

  test('learn more button icon has left margin', async ({ page }) => {
    const button = page.getByRole('button', { name: /Learn More/ });
    const icon = button.locator('svg').first();

    const marginLeft = await icon.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.marginLeft);
    });

    expect(marginLeft).toBeGreaterThan(0);
  });

  test('download button icon has no right margin in other buttons where not expected', async ({
    page,
  }) => {
    const button = page.getByRole('button', { name: /Learn More/ });
    const icon = button.locator('svg').first();

    const marginRight = await icon.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.marginRight);
    });

    expect(marginRight).toBe(0);
  });

  test('learn more button icon has no left margin in other buttons where not expected', async ({
    page,
  }) => {
    const button = page.getByRole('button', { name: 'Download' });
    const icon = button.locator('svg').first();

    const marginLeft = await icon.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.marginLeft);
    });

    expect(marginLeft).toBe(0);
  });

  test('focus state makes download button the active element', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Download' });

    await button.focus();

    const isFocused = await button.evaluate(el => {
      return document.activeElement === el;
    });

    expect(isFocused).toBe(true);
  });

  test('focus state has visible outline', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Download' });

    await button.focus();

    const outlineWidth = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.outlineWidth;
    });

    expect(outlineWidth).not.toBe('0px');
  });

  test('all buttons use border box sizing', async ({ page }) => {
    const buttons = page.getByRole('button');
    const count = await buttons.count();

    for (let i = 0; i < count; i++) {
      const button = buttons.nth(i);

      const boxSizing = await button.evaluate(el => {
        const style = window.getComputedStyle(el);
        return style.boxSizing;
      });

      expect(boxSizing).toBe('border-box');
    }
  });

  test('all buttons are visible', async ({ page }) => {
    const buttons = page.getByRole('button');
    const count = await buttons.count();

    for (let i = 0; i < count; i++) {
      await expect(buttons.nth(i)).toBeVisible();
    }
  });

  test('learn more button is also visible', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Learn More' });
    await expect(button).toBeVisible();
  });
});

import { expect, test } from '@playwright/test';

test.describe('Button - Sizes Example', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/button/sizes');
  });

  test('all size variant buttons are present', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Small' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Medium' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Large' })).toBeVisible();
  });

  test('all size variant buttons are visible', async ({ page }) => {
    const buttons = page.getByRole('button');
    const count = await buttons.count();
    expect(count).toBe(6);
  });

  test('small button has correct top padding', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Small' });

    const paddingTop = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.paddingTop);
    });

    expect(paddingTop).toBe(6.5);
  });

  test('small button has correct bottom padding', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Small' });

    const paddingBottom = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.paddingBottom);
    });

    expect(paddingBottom).toBe(6.5);
  });

  test('small button has correct font size', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Small' });

    const fontSize = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.fontSize;
    });

    expect(fontSize).toBe('11.375px');
  });

  test('medium button has correct top padding', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Medium' });

    const paddingTop = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.paddingTop);
    });

    expect(paddingTop).toBe(6.5);
  });

  test('medium button has correct bottom padding', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Medium' });

    const paddingBottom = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.paddingBottom);
    });

    expect(paddingBottom).toBe(6.5);
  });

  test('medium button has correct font size', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Medium' });

    const fontSize = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.fontSize;
    });

    expect(fontSize).toBe('13px');
  });

  test('large button has correct top padding', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Large' });

    const paddingTop = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.paddingTop);
    });

    expect(paddingTop).toBe(9.75);
  });

  test('large button has correct bottom padding', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Large' });

    const paddingBottom = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.paddingBottom);
    });

    expect(paddingBottom).toBe(9.75);
  });

  test('large button has correct font size', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Large' });

    const fontSize = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.fontSize;
    });

    expect(fontSize).toBe('14.625px');
  });

  test('different sizes have different font sizes', async ({ page }) => {
    const smallButton = page.getByRole('button', { name: 'Small' });
    const mediumButton = page.getByRole('button', { name: 'Medium' });
    const largeButton = page.getByRole('button', { name: 'Large' });

    const smallFontSize = await smallButton.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.fontSize);
    });

    const mediumFontSize = await mediumButton.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.fontSize);
    });

    const largeFontSize = await largeButton.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.fontSize);
    });

    expect(smallFontSize).toBeLessThan(mediumFontSize);
    expect(mediumFontSize).toBeLessThan(largeFontSize);
  });

  test('square button is more compact than regular button', async ({ page }) => {
    const mediumButton = page.getByRole('button', { name: 'Medium' });
    const squareButtons = page.getByRole('button');

    const mediumPadding = await mediumButton.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.paddingTop);
    });

    let squarePadding = Number.POSITIVE_INFINITY;
    const count = await squareButtons.count();

    for (let i = 0; i < count; i++) {
      const button = squareButtons.nth(i);
      const buttonName = await button.textContent();

      if (!buttonName || buttonName.trim() === '') {
        const padding = await button.evaluate(el => {
          const style = window.getComputedStyle(el);
          return Number.parseFloat(style.paddingTop);
        });

        if (padding < squarePadding) {
          squarePadding = padding;
        }
      }
    }

    expect(squarePadding).toBeLessThanOrEqualTo(mediumPadding);
  });

  test('all buttons have flex or inline-flex display', async ({ page }) => {
    const buttons = page.getByRole('button');
    const count = await buttons.count();

    for (let i = 0; i < count; i++) {
      const button = buttons.nth(i);

      const display = await button.evaluate(el => {
        const style = window.getComputedStyle(el);
        return style.display;
      });

      expect(['flex', 'inline-flex']).toContain(display);
    }
  });

  test('all buttons have center align items', async ({ page }) => {
    const buttons = page.getByRole('button');
    const count = await buttons.count();

    for (let i = 0; i < count; i++) {
      const button = buttons.nth(i);

      const alignItems = await button.evaluate(el => {
        const style = window.getComputedStyle(el);
        return style.alignItems;
      });

      expect(alignItems).toBe('center');
    }
  });

  test('all buttons have center or normal justify content', async ({ page }) => {
    const buttons = page.getByRole('button');
    const count = await buttons.count();

    for (let i = 0; i < count; i++) {
      const button = buttons.nth(i);

      const justifyContent = await button.evaluate(el => {
        const style = window.getComputedStyle(el);
        return style.justifyContent;
      });

      expect(['center', 'normal']).toContain(justifyContent);
    }
  });

  test('outlined buttons have 1px border width', async ({ page }) => {
    const outlinedButton = page.getByRole('button', { name: 'Small' });

    const borderWidth = await outlinedButton.evaluate(el => {
      const style = window.getComputedStyle(el);
      return Number.parseFloat(style.borderWidth);
    });

    expect(borderWidth).toBe(1);
  });

  test('all buttons are enabled', async ({ page }) => {
    const buttons = page.getByRole('button');
    const count = await buttons.count();

    for (let i = 0; i < count; i++) {
      await expect(buttons.nth(i)).toBeEnabled();
    }
  });

  test('all buttons are visible', async ({ page }) => {
    const buttons = page.getByRole('button');
    const count = await buttons.count();

    for (let i = 0; i < count; i++) {
      await expect(buttons.nth(i)).toBeVisible();
    }
  });

  test('all buttons have cursor-pointer when enabled', async ({ page }) => {
    const buttons = page.getByRole('button');
    const count = await buttons.count();

    for (let i = 0; i < count; i++) {
      const button = buttons.nth(i);

      const cursor = await button.evaluate(el => {
        const style = window.getComputedStyle(el);
        return style.cursor;
      });

      expect(cursor).toBe('pointer');
    }
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

  test('square buttons contain icons', async ({ page }) => {
    const buttons = page.getByRole('button');
    const count = await buttons.count();
    let hasIcon = false;

    for (let i = 0; i < count; i++) {
      const button = buttons.nth(i);
      const buttonName = await button.textContent();

      if (!buttonName || buttonName.trim() === '') {
        const icon = button.locator('svg');
        const iconExists = await icon.count();
        if (iconExists > 0) {
          hasIcon = true;
        }
      }
    }

    expect(hasIcon).toBe(true);
  });

  test('focus state makes first button the active element', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Small' });

    await button.focus();

    const isFocused = await button.evaluate(el => {
      return document.activeElement === el;
    });

    expect(isFocused).toBe(true);
  });

  test('focus state has visible outline', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Small' });

    await button.focus();

    const outlineWidth = await button.evaluate(el => {
      const style = window.getComputedStyle(el);
      return style.outlineWidth;
    });

    expect(outlineWidth).not.toBe('0px');
  });
});

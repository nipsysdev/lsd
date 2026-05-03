import fs from 'node:fs';
import path from 'node:path';
import { beforeAll, describe, expect, it } from 'vitest';

const THEMES_CSS_PATH = path.resolve(__dirname, 'themes.css');

const EXPECTED_THEMES = ['monochrome', 'teal', 'nord', 'terracotta', 'catppuccin'] as const;

const EXPECTED_CSS_VARIABLES = [
  '--lsd-primary',
  '--lsd-primary-content',
  '--lsd-text-neutral',
  '--lsd-text-secondary',
  '--lsd-background',
  '--lsd-foreground',
  '--lsd-border',
  '--lsd-destructive',
  '--lsd-text-destructive',
  '--lsd-success',
  '--lsd-text-success',
  '--lsd-warning',
  '--lsd-text-warning',
  '--lsd-info',
  '--lsd-text-info',
] as const;

type ThemeName = (typeof EXPECTED_THEMES)[number];

function extractThemeBlock(cssContent: string, theme: ThemeName): string | null {
  const startMarker = `[data-theme="${theme}"]`;
  const startIndex = cssContent.indexOf(startMarker);

  if (startIndex === -1) return null;

  let braceCount = 0;
  let inBlock = false;
  let endIndex = startIndex;

  for (let i = startIndex; i < cssContent.length; i++) {
    if (cssContent[i] === '{') {
      braceCount++;
      inBlock = true;
    } else if (cssContent[i] === '}') {
      braceCount--;
      if (braceCount === 0 && inBlock) {
        endIndex = i + 1;
        break;
      }
    }
  }

  const fullThemeBlock = cssContent.slice(startIndex, endIndex);

  return fullThemeBlock;
}

function extractVariablesFromBlock(block: string, mode: 'light' | 'dark'): Map<string, string> {
  const variables = new Map<string, string>();

  let modeStartIndex = -1;

  if (mode === 'light') {
    const lightRegex = /&,\s*&\.light\s*\{/;
    const match = lightRegex.exec(block);
    if (match) {
      modeStartIndex = match.index + match[0].length;
    }
  } else {
    const darkRegex = /&\.dark[\s,]/;
    const match = darkRegex.exec(block);
    if (match) {
      modeStartIndex = match.index + match[0].length;
    }
  }

  if (modeStartIndex === -1) return variables;

  let braceCount = 1;
  let endIndex = modeStartIndex;

  for (let i = modeStartIndex; i < block.length; i++) {
    if (block[i] === '{') {
      braceCount++;
    } else if (block[i] === '}') {
      braceCount--;
      if (braceCount === 0) {
        endIndex = i;
        break;
      }
    }
  }

  const modeBlock = block.slice(modeStartIndex, endIndex);

  const varRegex = /(--lsd-[a-z-]+):\s*([^;]+);/g;
  let varMatch: RegExpExecArray | null = varRegex.exec(modeBlock);

  while (varMatch !== null) {
    variables.set(varMatch[1], varMatch[2].trim());
    varMatch = varRegex.exec(modeBlock);
  }

  return variables;
}

describe('themes.css', () => {
  let cssContent: string;

  beforeAll(() => {
    cssContent = fs.readFileSync(THEMES_CSS_PATH, 'utf-8');
  });

  describe('file structure', () => {
    it('file exists', () => {
      expect(fs.existsSync(THEMES_CSS_PATH)).toBe(true);
    });

    it('file is not empty', () => {
      expect(cssContent.trim().length).toBeGreaterThan(0);
    });

    it('file contains valid CSS syntax (balanced braces)', () => {
      const openBraces = (cssContent.match(/\{/g) || []).length;
      const closeBraces = (cssContent.match(/\}/g) || []).length;

      expect(openBraces).toBe(closeBraces);
      expect(openBraces).toBeGreaterThan(0);
    });
  });

  describe('theme definitions', () => {
    it('contains all 5 expected themes', () => {
      for (const theme of EXPECTED_THEMES) {
        const themeRegex = new RegExp(`\\[data-theme="${theme}"\\]`);
        expect(cssContent).toMatch(themeRegex);
      }
    });

    it('does not contain unexpected themes', () => {
      const allThemeMatches = cssContent.match(/\[data-theme="[^"]+"\]/g) || [];
      const foundThemes = allThemeMatches.map(match => match.match(/"([^"]+)"/)?.[1]);

      for (const foundTheme of foundThemes) {
        if (foundTheme) {
          expect(EXPECTED_THEMES).toContain(foundTheme as ThemeName);
        }
      }
    });

    it('each theme has both light and dark mode selectors', () => {
      for (const theme of EXPECTED_THEMES) {
        const themeBlock = extractThemeBlock(cssContent, theme);

        expect(themeBlock).not.toBeNull();
        expect(themeBlock).toMatch(/&,\s*&\.light/);
        expect(themeBlock).toContain('&.dark');
      }
    });
  });

  describe('CSS variables', () => {
    it('all themes define all expected variables in light mode', () => {
      for (const theme of EXPECTED_THEMES) {
        const themeBlock = extractThemeBlock(cssContent, theme);

        expect(themeBlock, `Theme ${theme} block should be extractable`).not.toBeNull();

        const lightVars = extractVariablesFromBlock(themeBlock!, 'light');

        for (const variable of EXPECTED_CSS_VARIABLES) {
          expect(lightVars.has(variable), `${theme} light mode should have ${variable}`).toBe(true);
        }
      }
    });

    it('all themes define all expected variables in dark mode', () => {
      for (const theme of EXPECTED_THEMES) {
        const themeBlock = extractThemeBlock(cssContent, theme);

        expect(themeBlock, `Theme ${theme} block should be extractable`).not.toBeNull();

        const darkVars = extractVariablesFromBlock(themeBlock!, 'dark');

        for (const variable of EXPECTED_CSS_VARIABLES) {
          expect(darkVars.has(variable), `${theme} dark mode should have ${variable}`).toBe(true);
        }
      }
    });

    it('light and dark mode have different values for primary color', () => {
      for (const theme of EXPECTED_THEMES) {
        const themeBlock = extractThemeBlock(cssContent, theme);

        expect(themeBlock).not.toBeNull();

        const lightVars = extractVariablesFromBlock(themeBlock!, 'light');
        const darkVars = extractVariablesFromBlock(themeBlock!, 'dark');

        const lightPrimary = lightVars.get('--lsd-primary');
        const darkPrimary = darkVars.get('--lsd-primary');

        expect(lightPrimary).toBeDefined();
        expect(darkPrimary).toBeDefined();
        expect(lightPrimary).not.toBe(darkPrimary);
      }
    });

    it('light and dark mode have different values for background color', () => {
      for (const theme of EXPECTED_THEMES) {
        const themeBlock = extractThemeBlock(cssContent, theme);

        expect(themeBlock).not.toBeNull();

        const lightVars = extractVariablesFromBlock(themeBlock!, 'light');
        const darkVars = extractVariablesFromBlock(themeBlock!, 'dark');

        const lightBackground = lightVars.get('--lsd-background');
        const darkBackground = darkVars.get('--lsd-background');

        expect(lightBackground).toBeDefined();
        expect(darkBackground).toBeDefined();
        expect(lightBackground).not.toBe(darkBackground);
      }
    });

    it('all color values are valid hex colors', () => {
      const hexColorRegex = /^#[0-9a-fA-F]{6}$/;

      for (const theme of EXPECTED_THEMES) {
        const themeBlock = extractThemeBlock(cssContent, theme);

        expect(themeBlock).not.toBeNull();

        const lightVars = extractVariablesFromBlock(themeBlock!, 'light');
        const darkVars = extractVariablesFromBlock(themeBlock!, 'dark');

        for (const variable of EXPECTED_CSS_VARIABLES) {
          const lightValue = lightVars.get(variable);
          const darkValue = darkVars.get(variable);

          expect(lightValue).toMatch(hexColorRegex);
          expect(darkValue).toMatch(hexColorRegex);
        }
      }
    });
  });

  describe('data-theme attribute selectors', () => {
    it('uses data-theme attribute for theme selection', () => {
      for (const theme of EXPECTED_THEMES) {
        expect(cssContent).toContain(`[data-theme="${theme}"]`);
      }
    });

    it('monochrome theme handles missing data-theme attribute', () => {
      expect(cssContent).toContain(':not([data-theme])');
    });
  });

  describe('light/dark class selectors', () => {
    it('light mode is activated with .light class', () => {
      for (const theme of EXPECTED_THEMES) {
        const themeBlock = extractThemeBlock(cssContent, theme);

        expect(themeBlock).not.toBeNull();
        expect(themeBlock).toMatch(/&\.light/);
      }
    });

    it('dark mode is activated with .dark class', () => {
      for (const theme of EXPECTED_THEMES) {
        const themeBlock = extractThemeBlock(cssContent, theme);

        expect(themeBlock).not.toBeNull();
        expect(themeBlock).toContain('&.dark');
      }
    });

    it('default mode (no class) falls back to light mode', () => {
      for (const theme of EXPECTED_THEMES) {
        const themeBlock = extractThemeBlock(cssContent, theme);

        expect(themeBlock).not.toBeNull();

        expect(themeBlock).toMatch(/&,\s*&\.light/);
      }
    });
  });

  describe('theme-specific color values', () => {
    it('each theme has unique primary color in light mode', () => {
      const primaryColors = new Set<string>();

      for (const theme of EXPECTED_THEMES) {
        const themeBlock = extractThemeBlock(cssContent, theme);

        expect(themeBlock).not.toBeNull();

        const lightVars = extractVariablesFromBlock(themeBlock!, 'light');
        const primary = lightVars.get('--lsd-primary');

        expect(primary).toBeDefined();
        primaryColors.add(primary!);
      }

      expect(primaryColors.size).toBe(EXPECTED_THEMES.length);
    });

    it('each theme has unique primary color in dark mode', () => {
      const primaryColors = new Set<string>();

      for (const theme of EXPECTED_THEMES) {
        const themeBlock = extractThemeBlock(cssContent, theme);

        expect(themeBlock).not.toBeNull();

        const darkVars = extractVariablesFromBlock(themeBlock!, 'dark');
        const primary = darkVars.get('--lsd-primary');

        expect(primary).toBeDefined();
        primaryColors.add(primary!);
      }

      expect(primaryColors.size).toBe(EXPECTED_THEMES.length);
    });
  });

  describe('negative cases', () => {
    it('does not use invalid CSS variable names', () => {
      const invalidVarRegex = /--[a-z]*[A-Z][a-z-]*:/;

      expect(cssContent).not.toMatch(invalidVarRegex);
    });

    it('does not have empty variable declarations', () => {
      const emptyVarRegex = /--lsd-[a-z-]+:\s*;/;

      expect(cssContent).not.toMatch(emptyVarRegex);
    });

    it('does not have duplicate theme definitions', () => {
      for (const theme of EXPECTED_THEMES) {
        const themeRegex = new RegExp(`\\[data-theme="${theme}"\\]`, 'g');
        const matches = cssContent.match(themeRegex) || [];

        expect(matches.length).toBe(1);
      }
    });
  });
});

import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

const themesCss = readFileSync(join(__dirname, '../themes.css'), 'utf-8');

interface ThemeVariables {
  light: Record<string, string>;
  dark: Record<string, string>;
}

const EXPECTED_VARIABLES = [
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
];

const SEMANTIC_VARIABLES = [
  '--lsd-destructive',
  '--lsd-text-destructive',
  '--lsd-success',
  '--lsd-text-success',
  '--lsd-warning',
  '--lsd-text-warning',
  '--lsd-info',
  '--lsd-text-info',
];

const TEXT_VARIABLES = ['--lsd-text-neutral', '--lsd-text-secondary'];

const BACKGROUND_VARIABLES = ['--lsd-background', '--lsd-foreground'];

function extractVariables(content: string): Record<string, string> {
  const vars: Record<string, string> = {};
  const varRegex = /--lsd-[\w-]+:\s*([^;]+);/g;
  let match: RegExpExecArray | null = varRegex.exec(content);
  while (match !== null) {
    vars[match[0].split(':')[0].trim()] = match[1].trim();
    match = varRegex.exec(content);
  }
  return vars;
}

function parseThemeVariables(css: string, themeName: string): ThemeVariables {
  const startPattern = `[data-theme="${themeName}"] {`;
  const startIndex = css.indexOf(startPattern);

  if (startIndex === -1) {
    return { light: {}, dark: {} };
  }

  let currentIndex = startIndex + startPattern.length;
  let braceCount = 1;
  let themeContent = '';

  while (currentIndex < css.length && braceCount > 0) {
    const char = css[currentIndex];
    if (char === '{') braceCount++;
    else if (char === '}') braceCount--;

    if (braceCount > 0) {
      themeContent += char;
    }
    currentIndex++;
  }

  const lightVars: Record<string, string> = {};
  const darkVars: Record<string, string> = {};

  const lightMatch = themeContent.match(/&,\s*&\.light\s*\{([^}]+)\}/s);
  const darkMatch = themeContent.match(/&\.dark\s*\{([^}]+)\}/s);

  if (lightMatch) {
    Object.assign(lightVars, extractVariables(lightMatch[1]));
  }

  if (darkMatch) {
    Object.assign(darkVars, extractVariables(darkMatch[1]));
  }

  return { light: lightVars, dark: darkVars };
}

function parseMonochromeTheme(css: string): ThemeVariables {
  const startPattern = `[data-theme="monochrome"]`;
  const endPattern = `[data-theme="teal"]`;

  const startIndex = css.indexOf(startPattern);
  const endIndex = css.indexOf(endPattern);

  if (startIndex === -1) {
    return { light: {}, dark: {} };
  }

  const content = css.slice(startIndex, endIndex !== -1 ? endIndex : css.length);

  const lightVars: Record<string, string> = {};
  const darkVars: Record<string, string> = {};

  const lightMatch = content.match(/&,\s*&\.light\s*\{([^}]+)\}/s);
  const darkMatch = content.match(/&\.dark,\s*\.dark[^}]*\{([^}]+)\}/s);

  if (lightMatch) {
    Object.assign(lightVars, extractVariables(lightMatch[1]));
  }

  if (darkMatch) {
    Object.assign(darkVars, extractVariables(darkMatch[1]));
  }

  return { light: lightVars, dark: darkVars };
}

const THEME_NAMES = ['monochrome', 'teal', 'nord', 'terracotta', 'catppuccin'] as const;

function getThemes(): Record<string, ThemeVariables> {
  return {
    monochrome: parseMonochromeTheme(themesCss),
    teal: parseThemeVariables(themesCss, 'teal'),
    nord: parseThemeVariables(themesCss, 'nord'),
    terracotta: parseThemeVariables(themesCss, 'terracotta'),
    catppuccin: parseThemeVariables(themesCss, 'catppuccin'),
  };
}

describe('theme-variants', () => {
  describe('theme definitions', () => {
    it.each(THEME_NAMES)('should have %s theme defined', themeName => {
      const themeRegex = new RegExp(`\\[data-theme="${themeName}"\\]`);
      expect(themesCss).toMatch(themeRegex);
    });

    it.each(THEME_NAMES)('should have light mode selector for %s theme', themeName => {
      if (themeName === 'monochrome') {
        expect(themesCss).toMatch(/\[data-theme="monochrome"]/);
        expect(themesCss).toMatch(/&\.light/);
      } else {
        const lightRegex = new RegExp(`\\[data-theme="${themeName}"\\][\\s\\S]*?&\\.light`);
        expect(themesCss).toMatch(lightRegex);
      }
    });

    it.each(THEME_NAMES)('should have dark mode selector for %s theme', themeName => {
      if (themeName === 'monochrome') {
        expect(themesCss).toMatch(/&\.dark/);
      } else {
        const darkRegex = new RegExp(`\\[data-theme="${themeName}"\\][\\s\\S]*?&\\.dark`);
        expect(themesCss).toMatch(darkRegex);
      }
    });
  });

  describe('expected CSS custom properties', () => {
    const themes = getThemes();

    it.each(THEME_NAMES)('should have all expected variables in %s light mode', themeName => {
      const vars = themes[themeName].light;
      EXPECTED_VARIABLES.forEach(varName => {
        expect(vars[varName]).toBeDefined();
        expect(vars[varName]).toMatch(/^#[0-9a-fA-F]{6}$/);
      });
    });

    it.each(THEME_NAMES)('should have all expected variables in %s dark mode', themeName => {
      const vars = themes[themeName].dark;
      EXPECTED_VARIABLES.forEach(varName => {
        expect(vars[varName]).toBeDefined();
        expect(vars[varName]).toMatch(/^#[0-9a-fA-F]{6}$/);
      });
    });
  });

  describe('semantic colors', () => {
    const themes = getThemes();

    it.each(THEME_NAMES)('should have semantic colors defined in %s light mode', themeName => {
      const vars = themes[themeName].light;
      SEMANTIC_VARIABLES.forEach(varName => {
        expect(vars[varName]).toBeDefined();
      });
    });

    it.each(THEME_NAMES)('should have semantic colors defined in %s dark mode', themeName => {
      const vars = themes[themeName].dark;
      SEMANTIC_VARIABLES.forEach(varName => {
        expect(vars[varName]).toBeDefined();
      });
    });
  });

  describe('text colors', () => {
    const themes = getThemes();

    it.each(THEME_NAMES)('should have text colors defined in %s light mode', themeName => {
      const vars = themes[themeName].light;
      TEXT_VARIABLES.forEach(varName => {
        expect(vars[varName]).toBeDefined();
      });
    });

    it.each(THEME_NAMES)('should have text colors defined in %s dark mode', themeName => {
      const vars = themes[themeName].dark;
      TEXT_VARIABLES.forEach(varName => {
        expect(vars[varName]).toBeDefined();
      });
    });
  });

  describe('background/foreground variables', () => {
    const themes = getThemes();

    it.each(THEME_NAMES)('should have background/foreground in %s light mode', themeName => {
      const vars = themes[themeName].light;
      BACKGROUND_VARIABLES.forEach(varName => {
        expect(vars[varName]).toBeDefined();
      });
    });

    it.each(THEME_NAMES)('should have background/foreground in %s dark mode', themeName => {
      const vars = themes[themeName].dark;
      BACKGROUND_VARIABLES.forEach(varName => {
        expect(vars[varName]).toBeDefined();
      });
    });
  });

  describe('theme uniqueness', () => {
    const themes = getThemes();

    it('should have different primary colors between themes', () => {
      const primaryColors = THEME_NAMES.map(name => themes[name].light['--lsd-primary']);
      const uniqueColors = new Set(primaryColors);
      expect(uniqueColors.size).toBeGreaterThan(1);
    });

    it('should have different background colors between themes', () => {
      const bgColors = THEME_NAMES.map(name => themes[name].light['--lsd-background']);
      const uniqueColors = new Set(bgColors);
      expect(uniqueColors.size).toBeGreaterThan(1);
    });

    it('should have different primary colors in dark mode between themes', () => {
      const primaryColors = THEME_NAMES.map(name => themes[name].dark['--lsd-primary']);
      const uniqueColors = new Set(primaryColors);
      expect(uniqueColors.size).toBeGreaterThan(1);
    });

    it('should have different text-neutral colors between themes', () => {
      const textColors = THEME_NAMES.map(name => themes[name].light['--lsd-text-neutral']);
      const uniqueColors = new Set(textColors);
      expect(uniqueColors.size).toBeGreaterThan(1);
    });
  });

  describe('light/dark mode differences', () => {
    const themes = getThemes();

    it.each(
      THEME_NAMES
    )('should have different background colors between light/dark in %s', themeName => {
      const lightBg = themes[themeName].light['--lsd-background'];
      const darkBg = themes[themeName].dark['--lsd-background'];
      expect(lightBg).not.toBe(darkBg);
    });

    it.each(
      THEME_NAMES
    )('should have different text-neutral between light/dark in %s', themeName => {
      const lightText = themes[themeName].light['--lsd-text-neutral'];
      const darkText = themes[themeName].dark['--lsd-text-neutral'];
      expect(lightText).not.toBe(darkText);
    });
  });
});

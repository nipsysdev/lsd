import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  ToggleGroup,
  ToggleGroupItem,
} from '@nipsys/lsd';
import { CaretDownIcon, MoonIcon, SunIcon } from '@phosphor-icons/react';
import { useCallback, useEffect, useState } from 'react';
import { type Theme, Themes } from '@/config/themes';

export function ThemeToggle() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const handleModeChange = useCallback((value: string | undefined) => {
    if (!value) return;

    if (value === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('theme-mode', value);
    setMode(value as 'light' | 'dark');
  }, []);

  useEffect(() => {
    const storedMode = localStorage.getItem('theme-mode') as 'light' | 'dark' | null;

    if (storedMode) {
      handleModeChange(storedMode);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      handleModeChange(prefersDark ? 'dark' : 'light');
    }

    document.body.style.visibility = 'visible';
  }, [handleModeChange]);

  return (
    <ToggleGroup
      type="single"
      value={mode}
      onValueChange={handleModeChange}
      aria-label="Theme toggle"
      size="sm"
    >
      <ToggleGroupItem value="light" aria-label="Light theme">
        <SunIcon className="size-4" weight="duotone" />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="Dark theme">
        <MoonIcon className="size-4" weight="duotone" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

export function ThemeAccentToggle() {
  const [theme, setTheme] = useState<Theme>('monochrome');

  const toggleAccentTheme = useCallback((value: string) => {
    for (const t of Themes) {
      if (t !== 'monochrome') {
        document.documentElement.removeAttribute('data-theme');
      }
    }
    if (value !== 'monochrome') {
      document.documentElement.setAttribute('data-theme', value);
    }

    localStorage.setItem('theme-accent', value);
    setTheme(value as Theme);
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme-accent') as Theme | null;

    if (storedTheme && Themes.includes(storedTheme)) {
      toggleAccentTheme(storedTheme);
    }
  }, [toggleAccentTheme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outlined"
          size="sm"
          className="flex items-center justify-between gap-(--lsd-spacing-smaller)"
        >
          Theme
          <CaretDownIcon weight="duotone" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={theme} onValueChange={toggleAccentTheme}>
          {Themes.map(t => (
            <DropdownMenuRadioItem key={t} value={t}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

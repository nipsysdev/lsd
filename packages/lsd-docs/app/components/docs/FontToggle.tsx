import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@nipsys/lsd';
import { CaretDownIcon } from '@phosphor-icons/react';
import { useCallback, useEffect, useState } from 'react';
import { type Font, Fonts } from '@/config/fonts';

export function FontToggle() {
  const [font, setFont] = useState<Font>('monospace');

  const handleFontChange = useCallback((value: string) => {
    document.documentElement.classList.remove('font-serif', 'font-sans', 'font-mono');

    if (value === 'serif') {
      document.documentElement.classList.add('font-serif');
    } else if (value === 'sans-serif') {
      document.documentElement.classList.add('font-sans');
    } else {
      document.documentElement.classList.add('font-mono');
    }

    localStorage.setItem('font-family', value);
    setFont(value as Font);
  }, []);

  useEffect(() => {
    const storedFont = localStorage.getItem('font-family') as Font | null;

    if (storedFont && Fonts.includes(storedFont)) {
      handleFontChange(storedFont);
    }
  }, [handleFontChange]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outlined"
          size="sm"
          className="flex items-center justify-between gap-(--lsd-spacing-smaller)"
        >
          Font
          <CaretDownIcon weight="duotone" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={font} onValueChange={handleFontChange}>
          {Fonts.map(f => (
            <DropdownMenuRadioItem key={f} value={f}>
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

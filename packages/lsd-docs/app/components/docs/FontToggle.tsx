import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@nipsys/shadcn-lsd';
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
    <Select value={font} onValueChange={handleFontChange}>
      <SelectTrigger className="w-[140px]">
        <SelectValue placeholder="Select font" />
      </SelectTrigger>
      <SelectContent>
        {Fonts.map(f => (
          <SelectItem key={f} value={f}>
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

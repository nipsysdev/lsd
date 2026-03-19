'use client';

import { Autocomplete } from '@nipsys/shadcn-lsd';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

export function AutocompleteVariantsExample() {
  useInIframeThemeSync();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-large) p-(--lsd-spacing-larger)">
      <Autocomplete variant="outlined" options={options} placeholder="Outlined" />
      <Autocomplete variant="underlined" options={options} placeholder="Underlined" />
    </div>
  );
}

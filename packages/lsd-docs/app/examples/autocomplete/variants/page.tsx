'use client';

import { Autocomplete } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

export const CODE = `import { Autocomplete } from '@nipsys/lsd';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-large)">
      <Autocomplete variant="outlined" options={options} placeholder="Outlined" />
      <Autocomplete variant="underlined" options={options} placeholder="Underlined" />
    </div>
  )
};`;

export function AutocompleteVariantsExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-large)">
      <Autocomplete variant="outlined" options={options} placeholder="Outlined" />
      <Autocomplete variant="underlined" options={options} placeholder="Underlined" />
    </div>
  );
}

export default function Variants() {
  return <AutocompleteVariantsExample />;
}

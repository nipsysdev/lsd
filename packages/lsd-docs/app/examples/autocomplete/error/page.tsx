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
    <Autocomplete
      label="Error State"
      options={options}
      placeholder="Select an option"
      error
    />
  );
}`;

export function AutocompleteErrorExample() {
  useSendThemeToIframes();

  return (
    <Autocomplete label="Error State" options={options} placeholder="Select an option" error />
  );
}

export default function AutocompleteErrorPage() {
  return <AutocompleteErrorExample />;
}

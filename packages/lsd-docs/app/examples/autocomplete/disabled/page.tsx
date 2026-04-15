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
      label="Disabled"
      options={options}
      placeholder="Can't select"
      disabled
    />
  );
}`;

export function AutocompleteDisabledExample() {
  useSendThemeToIframes();

  return <Autocomplete label="Disabled" options={options} placeholder="Can't select" disabled />;
}

export default function AutocompleteDisabledPage() {
  return <AutocompleteDisabledExample />;
}

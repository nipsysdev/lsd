'use client';

import { Autocomplete } from '@nipsys/shadcn-lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

export const CODE = `import { Autocomplete } from '@nipsys/shadcn-lsd';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

export function Example() {
  return (
    <Autocomplete
      label="Clearable"
      options={options}
      placeholder="Type to search..."
      clearable
    />
  );
}`;

export function AutocompleteClearableExample() {
  useSendThemeToIframes();

  return (
    <Autocomplete label="Clearable" options={options} placeholder="Type to search..." clearable />
  );
}

export default function AutocompleteClearablePage() {
  return <AutocompleteClearableExample />;
}

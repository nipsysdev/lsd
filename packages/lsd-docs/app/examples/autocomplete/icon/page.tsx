'use client';

import { Autocomplete } from '@nipsys/lsd';
import { TextAaIcon } from '@phosphor-icons/react';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

export const CODE = `import { Autocomplete } from '@nipsys/lsd';
import { TextAaIcon } from '@phosphor-icons/react';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

export function Example() {
  return (
    <Autocomplete
      label="With Icon"
      options={options}
      placeholder="Search..."
      icon={<TextAaIcon className="size-6" />}
    />
  );
}`;

export function AutocompleteIconExample() {
  useSendThemeToIframes();

  return (
    <Autocomplete
      label="With Icon"
      options={options}
      placeholder="Search..."
      icon={<TextAaIcon className="size-6" />}
    />
  );
}

export default function AutocompleteIconPage() {
  return <AutocompleteIconExample />;
}

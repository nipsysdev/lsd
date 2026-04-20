'use client';

import { Autocomplete } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'md';

/**
 * @docSection variant
 */
export const CODE = `import { Autocomplete } from '@nipsys/lsd'

export function Example() {
  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
    { value: 'grape', label: 'Grape' },
    { value: 'orange', label: 'Orange' },
    { value: 'pear', label: 'Pear' },
  ];

  return (
    <Autocomplete
      variant="underlined"
      options={options}
      label="Select a fruit"
      placeholder="Search fruits..."
    />
  );
}`;

export function AutocompleteUnderlinedExample() {
  useSendThemeToIframes();

  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
    { value: 'grape', label: 'Grape' },
    { value: 'orange', label: 'Orange' },
    { value: 'pear', label: 'Pear' },
  ];

  return (
    <Autocomplete
      variant="underlined"
      options={options}
      label="Select a fruit"
      placeholder="Search fruits..."
    />
  );
}

export default function Underlined() {
  return <AutocompleteUnderlinedExample />;
}

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
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' },
    { value: 'jp', label: 'Japan' },
    { value: 'au', label: 'Australia' },
  ];

  return (
    <Autocomplete
      variant="outlined"
      options={options}
      label="Select a country"
      placeholder="Search countries..."
    />
  );
}`;

export function AutocompleteOutlinedExample() {
  useSendThemeToIframes();

  const options = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' },
    { value: 'jp', label: 'Japan' },
    { value: 'au', label: 'Australia' },
  ];

  return (
    <Autocomplete
      variant="outlined"
      options={options}
      label="Select a country"
      placeholder="Search countries..."
    />
  );
}

export default function Outlined() {
  return <AutocompleteOutlinedExample />;
}

'use client';

import { Autocomplete } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'md';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

/**
 * @docSection size
 */
export const CODE = `import { Autocomplete } from '@nipsys/lsd';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-large)">
      <Autocomplete size="xs" options={options} placeholder="Extra Small" />
      <Autocomplete size="sm" options={options} placeholder="Small" />
      <Autocomplete size="md" options={options} placeholder="Medium" />
      <Autocomplete size="lg" options={options} placeholder="Large" />
      <Autocomplete size="xl" options={options} placeholder="Extra Large" />
    </div>
  )
};`;

export function AutocompleteSizesExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-large)">
      <Autocomplete size="xs" options={options} placeholder="Extra Small" />
      <Autocomplete size="sm" options={options} placeholder="Small" />
      <Autocomplete size="md" options={options} placeholder="Medium" />
      <Autocomplete size="lg" options={options} placeholder="Large" />
      <Autocomplete size="xl" options={options} placeholder="Extra Large" />
    </div>
  );
}

export default function Sizes() {
  return <AutocompleteSizesExample />;
}

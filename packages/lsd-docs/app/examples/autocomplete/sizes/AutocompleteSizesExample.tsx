'use client';

import { Autocomplete } from '@nipsys/shadcn-lsd';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

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
    <div className="flex flex-col gap-(--lsd-spacing-large) p-(--lsd-spacing-larger)">
      <Autocomplete size="xs" options={options} placeholder="Extra Small" />
      <Autocomplete size="sm" options={options} placeholder="Small" />
      <Autocomplete size="md" options={options} placeholder="Medium" />
      <Autocomplete size="lg" options={options} placeholder="Large" />
      <Autocomplete size="xl" options={options} placeholder="Extra Large" />
    </div>
  )
};`;

export function AutocompleteSizesExample() {
  useInIframeThemeSync();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-large) p-(--lsd-spacing-larger)">
      <Autocomplete size="xs" options={options} placeholder="Extra Small" />
      <Autocomplete size="sm" options={options} placeholder="Small" />
      <Autocomplete size="md" options={options} placeholder="Medium" />
      <Autocomplete size="lg" options={options} placeholder="Large" />
      <Autocomplete size="xl" options={options} placeholder="Extra Large" />
    </div>
  );
}

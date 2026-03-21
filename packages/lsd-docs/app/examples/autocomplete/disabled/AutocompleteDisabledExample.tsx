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
    <div className="p-(--lsd-spacing-larger)">
      <Autocomplete
        label="Disabled"
        options={options}
        placeholder="Can't select"
        disabled
      />
    </div>
  );
}`;

export function AutocompleteDisabledExample() {
  useSendThemeToIframes();

  return (
    <div className="p-(--lsd-spacing-larger)">
      <Autocomplete label="Disabled" options={options} placeholder="Can't select" disabled />
    </div>
  );
}

export default function AutocompleteDisabledPage() {
  return <AutocompleteDisabledExample />;
}

'use client';

import { Autocomplete } from '@nipsys/shadcn-lsd';
import { TextAaIcon } from '@phosphor-icons/react';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

export const CODE = `import { Autocomplete } from '@nipsys/shadcn-lsd';
import { TextAaIcon } from '@phosphor-icons/react';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-large) p-(--lsd-spacing-larger)">
      <Autocomplete label="Select an option" options={options} placeholder="Choose..." />
      <Autocomplete
        label="With Icon"
        options={options}
        placeholder="Search..."
        icon={<TextAaIcon className="size-6" />}
      />
      <Autocomplete label="Clearable" options={options} placeholder="Type to search..." clearable />
      <Autocomplete label="Error State" options={options} placeholder="Select an option" error />
      <Autocomplete label="Disabled" options={options} placeholder="Can't select" disabled />
    </div>
  )
};`;

export function AutocompleteFeaturesExample() {
  useInIframeThemeSync();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-large) p-(--lsd-spacing-larger)">
      <Autocomplete label="Select an option" options={options} placeholder="Choose..." />
      <Autocomplete
        label="With Icon"
        options={options}
        placeholder="Search..."
        icon={<TextAaIcon className="size-6" />}
      />
      <Autocomplete label="Clearable" options={options} placeholder="Type to search..." clearable />
      <Autocomplete label="Error State" options={options} placeholder="Select an option" error />
      <Autocomplete label="Disabled" options={options} placeholder="Can't select" disabled />
    </div>
  );
}

export default function Features() {
  return <AutocompleteFeaturesExample />;
}

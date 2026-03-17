'use client';

import { Autocomplete } from '@nipsys/shadcn-lsd';
import { TextAaIcon } from '@phosphor-icons/react';
import { type ExampleParams, useIframeMessageListener } from '@/components/docs/useIframeSync';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

export function AutocompleteFeaturesExample() {
  useIframeMessageListener('example-params', (params: ExampleParams) => {
    if (params.theme) {
      if (params.theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }

    if (params.accent) {
      if (params.accent === 'monochrome') {
        document.documentElement.removeAttribute('data-theme');
      } else {
        document.documentElement.setAttribute('data-theme', params.accent);
      }
    }

    if (params.font) {
      document.documentElement.classList.remove('font-serif', 'font-sans', 'font-mono');
      if (params.font === 'serif') {
        document.documentElement.classList.add('font-serif');
      } else if (params.font === 'sans-serif') {
        document.documentElement.classList.add('font-sans');
      } else if (params.font === 'monospace') {
        document.documentElement.classList.add('font-mono');
      }
    }
  });

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

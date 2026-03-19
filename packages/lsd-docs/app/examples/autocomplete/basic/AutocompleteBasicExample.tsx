'use client';

import { Autocomplete } from '@nipsys/shadcn-lsd';
import { type ExampleParams, useIframeMessageListener } from '@/components/docs/useIframeSync';

const options = [
  { value: 'js', label: 'JavaScript' },
  { value: 'ts', label: 'TypeScript' },
  { value: 'py', label: 'Python' },
  { value: 'rb', label: 'Ruby' },
  { value: 'go', label: 'Go' },
  { value: 'rs', label: 'Rust' },
  { value: 'java', label: 'Java' },
  { value: 'cs', label: 'C#' },
  { value: 'cpp', label: 'C++' },
  { value: 'swift', label: 'Swift' },
];

export function AutocompleteBasicExample() {
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

  return <Autocomplete options={options} placeholder="Search languages..." />;
}

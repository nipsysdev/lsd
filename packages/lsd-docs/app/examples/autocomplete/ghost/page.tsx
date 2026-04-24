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
    { value: 'javascript', label: 'JavaScript' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'python', label: 'Python' },
    { value: 'rust', label: 'Rust' },
    { value: 'go', label: 'Go' },
    { value: 'swift', label: 'Swift' },
  ];

  return (
    <Autocomplete
      variant="ghost"
      options={options}
      label="Select a programming language"
      placeholder="Search languages..."
    />
  );
}`;

export function AutocompleteGhostExample() {
  useSendThemeToIframes();

  const options = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'python', label: 'Python' },
    { value: 'rust', label: 'Rust' },
    { value: 'go', label: 'Go' },
    { value: 'swift', label: 'Swift' },
  ];

  return (
    <Autocomplete
      variant="ghost"
      options={options}
      label="Select a programming language"
      placeholder="Search languages..."
    />
  );
}

export default function Ghost() {
  return <AutocompleteGhostExample />;
}

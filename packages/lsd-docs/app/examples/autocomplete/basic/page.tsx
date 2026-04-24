'use client';

import { Autocomplete } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'md';

const options = [
  { value: 'js', label: 'JavaScript' },
  { value: 'ts', label: 'TypeScript' },
  { value: 'py', label: 'Python' },
  { value: 'go', label: 'Go' },
  { value: 'rs', label: 'Rust' },
  { value: 'java', label: 'Java' },
];

/**
 * @docSection usage
 */
export const CODE = `import { Autocomplete } from '@nipsys/lsd';

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

export function Example() {
  return <Autocomplete options={options} placeholder="Search languages..." />
};`;

export function AutocompleteBasicExample() {
  useSendThemeToIframes();

  return <Autocomplete options={options} placeholder="Search languages..." />;
}

export default function Basic() {
  return <AutocompleteBasicExample />;
}

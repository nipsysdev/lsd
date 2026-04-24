'use client';

import { Button, ButtonGroup } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'md';

/**
 * @docSection variant
 */
export const CODE = `import { Button, ButtonGroup } from '@nipsys/lsd'

export function Example() {
  return (
    <ButtonGroup groupLabel="Document actions">
      <Button variant="filled">Edit</Button>
      <Button variant="filled">View</Button>
      <Button variant="filled">Delete</Button>
    </ButtonGroup>
  );
}`;

export function ButtonGroupFilledButtonsExample() {
  useSendThemeToIframes();

  return (
    <ButtonGroup groupLabel="Document actions">
      <Button variant="filled">Edit</Button>
      <Button variant="filled">View</Button>
      <Button variant="filled">Delete</Button>
    </ButtonGroup>
  );
}

export default function FilledButtons() {
  return <ButtonGroupFilledButtonsExample />;
}

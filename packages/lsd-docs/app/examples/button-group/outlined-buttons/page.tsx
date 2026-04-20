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
    <ButtonGroup>
      <Button variant="outlined">Week</Button>
      <Button variant="outlined">Month</Button>
      <Button variant="outlined">Year</Button>
    </ButtonGroup>
  );
}`;

export function ButtonGroupOutlinedButtonsExample() {
  useSendThemeToIframes();

  return (
    <ButtonGroup>
      <Button variant="outlined">Week</Button>
      <Button variant="outlined">Month</Button>
      <Button variant="outlined">Year</Button>
    </ButtonGroup>
  );
}

export default function OutlinedButtons() {
  return <ButtonGroupOutlinedButtonsExample />;
}

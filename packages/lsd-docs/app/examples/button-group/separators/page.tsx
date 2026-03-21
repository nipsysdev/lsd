'use client';

import { Button, ButtonGroup, ButtonGroupSeparator } from '@nipsys/shadcn-lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Button, ButtonGroup, ButtonGroupSeparator } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <ButtonGroup>
      <Button>Save</Button>
      <Button>Cancel</Button>
      <ButtonGroupSeparator />
      <Button variant="destructive">Delete</Button>
    </ButtonGroup>
  );
}
`;

export function Example() {
  useSendThemeToIframes();

  return (
    <ButtonGroup>
      <Button>Save</Button>
      <Button>Cancel</Button>
      <ButtonGroupSeparator />
      <Button variant="destructive">Delete</Button>
    </ButtonGroup>
  );
}

export default function SeparatorsPage() {
  return <Example />;
}

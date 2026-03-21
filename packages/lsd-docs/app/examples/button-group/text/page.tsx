'use client';

import { Button, ButtonGroup, ButtonGroupText } from '@nipsys/shadcn-lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Button, ButtonGroup, ButtonGroupText } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <ButtonGroup>
      <Button>Previous</Button>
      <ButtonGroupText>Page 1 of 10</ButtonGroupText>
      <Button>Next</Button>
    </ButtonGroup>
  );
}
`;

export function Example() {
  useSendThemeToIframes();

  return (
    <ButtonGroup>
      <Button>Previous</Button>
      <ButtonGroupText>Page 1 of 10</ButtonGroupText>
      <Button>Next</Button>
    </ButtonGroup>
  );
}

export default function TextPage() {
  return <Example />;
}

'use client';

import { Button } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Button } from '@nipsys/lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Button fullWidth>Full Width Button</Button>
    </div>
  );
}
`;

export function Example() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Button fullWidth>Full Width Button</Button>
    </div>
  );
}

export default function ButtonFullWidthPage() {
  return <Example />;
}

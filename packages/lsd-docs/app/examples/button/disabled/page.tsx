'use client';

import { Button } from '@nipsys/shadcn-lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Button } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Button disabled>Disabled</Button>
      <Button variant="outlined" disabled>Disabled</Button>
    </div>
  );
}
`;

export function Example() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Button disabled>Disabled</Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
    </div>
  );
}

export default function ButtonDisabledPage() {
  return <Example />;
}

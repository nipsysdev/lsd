'use client';

import { Button } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'sm';

/**
 * @docSection feature
 */
export const CODE = `import { Button } from '@nipsys/lsd';

export function Example() {
  return (
    <div className="w-full">
      <Button fullWidth>Full Width Button</Button>
    </div>
  );
}
`;

export function Example() {
  useSendThemeToIframes();

  return (
    <div className="w-full">
      <Button fullWidth>Full Width Button</Button>
    </div>
  );
}

export default function ButtonFullWidthPage() {
  return <Example />;
}

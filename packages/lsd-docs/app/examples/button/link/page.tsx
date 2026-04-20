'use client';

import { Button } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'md';

/**
 * @docSection variant
 */
export const CODE = `import { Button } from '@nipsys/lsd'

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Button variant="link">Learn More</Button>
      <Button variant="link">Read Documentation</Button>
      <Button variant="link">View Source</Button>
    </div>
  );
}`;

export function ButtonLinkExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Button variant="link">Learn More</Button>
      <Button variant="link">Read Documentation</Button>
      <Button variant="link">View Source</Button>
    </div>
  );
}

export default function Link() {
  return <ButtonLinkExample />;
}

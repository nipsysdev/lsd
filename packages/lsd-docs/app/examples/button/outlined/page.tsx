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
      <Button variant="outlined">Cancel</Button>
      <Button variant="outlined">Learn More</Button>
      <Button variant="outlined">View Details</Button>
    </div>
  );
}`;

export function ButtonOutlinedExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Button variant="outlined">Cancel</Button>
      <Button variant="outlined">Learn More</Button>
      <Button variant="outlined">View Details</Button>
    </div>
  );
}

export default function Outlined() {
  return <ButtonOutlinedExample />;
}

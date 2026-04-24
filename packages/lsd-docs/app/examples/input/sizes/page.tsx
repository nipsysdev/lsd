'use client';

import { Input } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'lg';

/**
 * @docSection size
 */
export const CODE = `import { Input } from '@nipsys/lsd';

export const SIZE = 'lg';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Input size="xs" label="Extra Small" placeholder="xs input" />
      <Input size="sm" label="Small" placeholder="sm input" />
      <Input size="md" label="Medium" placeholder="md input" />
      <Input size="lg" label="Large" placeholder="lg input" />
      <Input size="xl" label="Extra Large" placeholder="xl input" />
    </div>
  );
}`;

export function InputSizesExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Input size="xs" label="Extra Small" placeholder="xs input" />
      <Input size="sm" label="Small" placeholder="sm input" />
      <Input size="md" label="Medium" placeholder="md input" />
      <Input size="lg" label="Large" placeholder="lg input" />
      <Input size="xl" label="Extra Large" placeholder="xl input" />
    </div>
  );
}

export default function Sizes() {
  return <InputSizesExample />;
}

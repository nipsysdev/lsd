'use client';

import { Progress, Typography } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

/**
 * @docSection size
 */
export const CODE = `import { Progress, Typography } from '@nipsys/lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Sizes</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base)">
        <Progress value={33} size="sm" showLabel labelPosition="top" />
        <Progress value={66} size="md" showLabel labelPosition="top" />
        <Progress value={100} size="lg" showLabel labelPosition="top" />
      </div>
    </div>
  );
}`;

export const SIZE = 'md';

export function ProgressSizesExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Sizes</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base)">
        <Progress value={33} size="sm" showLabel labelPosition="top" />
        <Progress value={66} size="md" showLabel labelPosition="top" />
        <Progress value={100} size="lg" showLabel labelPosition="top" />
      </div>
    </div>
  );
}

export default function ProgressSizesPage() {
  return <ProgressSizesExample />;
}

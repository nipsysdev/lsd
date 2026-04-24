'use client';

import { Progress, Typography } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

/**
 * @docSection variant
 */
export const CODE = `import { Progress, Typography } from '@nipsys/lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Color Variants</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base)">
        <Progress value={25} variant="default" showLabel labelPosition="top" />
        <Progress value={50} variant="success" showLabel labelPosition="top" />
        <Progress value={75} variant="warning" showLabel labelPosition="top" />
        <Progress value={100} variant="destructive" showLabel labelPosition="top" />
      </div>
    </div>
  );
}`;

export const SIZE = 'md';

export function ProgressColorsExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Color Variants</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base)">
        <Progress value={25} variant="default" showLabel labelPosition="top" />
        <Progress value={50} variant="success" showLabel labelPosition="top" />
        <Progress value={75} variant="warning" showLabel labelPosition="top" />
        <Progress value={100} variant="destructive" showLabel labelPosition="top" />
      </div>
    </div>
  );
}

export default function ProgressColorsPage() {
  return <ProgressColorsExample />;
}

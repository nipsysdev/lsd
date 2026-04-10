'use client';
import { Slider, Typography } from '@nipsys/shadcn-lsd';
import * as React from 'react';
import { useState } from 'react';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import * as React from 'react';
import { useState } from 'react';
import { Slider, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  const [value, setValue] = useState([50]);

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="body2">Disabled Volume</Typography>
      <Slider value={value} onValueChange={setValue} max={100} step={1} disabled className="w-80" />
      <Typography variant="label1" className="text-secondary">
        This slider is disabled and cannot be interacted with.
      </Typography>
    </div>
  );
}`;

export function SliderDisabledExample() {
  useSendThemeToIframes();
  const [value, setValue] = useState([50]);

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="body2">Disabled Volume</Typography>
      <Slider value={value} onValueChange={setValue} max={100} step={1} disabled className="w-80" />
      <Typography variant="label1" className="text-secondary">
        This slider is disabled and cannot be interacted with.
      </Typography>
    </div>
  );
}

export default function Page() {
  return <SliderDisabledExample />;
}

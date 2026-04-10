'use client';

import { Slider, Typography } from '@nipsys/shadcn-lsd';
import * as React from 'react';
import { useState } from 'react';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import * as React from 'react';
import { useState } from 'react';
import { Slider, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  const [value, setValue] = useState([25, 50, 75]);

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="body2">Budget Allocation</Typography>
      <Slider value={value} onValueChange={setValue} max={100} step={1} className="w-80" />
      <div className="flex justify--between">
        <Typography variant="label1" className="text-secondary">
          Low: {value[0]}
        </Typography>
        <Typography variant="label1" className="text-secondary">
          Medium: {value[1]}
        </Typography>
        <Typography variant="label1" className="text-secondary">
          High: {value[2]}
        </Typography>
      </div>
    </div>
  );
}`;

export function SliderMultipleExample() {
  useSendThemeToIframes();
  const [value, setValue] = useState([25, 50, 75]);

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="body2">Budget Allocation</Typography>
      <Slider value={value} onValueChange={setValue} max={100} step={1} className="w-80" />
      <div className="flex justify-between">
        <Typography variant="label1" className="text-secondary">
          Low: {value[0]}
        </Typography>
        <Typography variant="label1" className="text-secondary">
          Medium: {value[1]}
        </Typography>
        <Typography variant="label1" className="text-secondary">
          High: {value[2]}
        </Typography>
      </div>
    </div>
  );
}

export default function Page() {
  return <SliderMultipleExample />;
}

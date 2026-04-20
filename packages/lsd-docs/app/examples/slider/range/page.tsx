'use client';

import { Slider, Typography } from '@nipsys/lsd';
import { useState } from 'react';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'md';

/**
 * @docSection feature
 */
export const CODE = `import * as React from 'react';
import { useState } from 'react';
import { Slider, Typography } from '@nipsys/lsd';

export function Example() {
  const [value, setValue] = useState([33, 66]);

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="body2">Price Range</Typography>
      <Slider value={value} onValueChange={setValue} max={100} step={1} className="w-80" />
      <div className="flex justify-between">
        <Typography variant="label1" className="text-secondary">
          Min: {value[0]}
        </Typography>
        <Typography variant="label1" className="text-secondary">
          Max: {value[1]}
        </Typography>
      </div>
    </div>
  );
}`;

export function SliderRangeExample() {
  useSendThemeToIframes();
  const [value, setValue] = useState([33, 66]);

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="body2">Price Range</Typography>
      <Slider value={value} onValueChange={setValue} max={100} step={1} className="w-80" />
      <div className="flex gap-x-(--lsd-spacing-base)">
        <Typography variant="label1" className="text-secondary">
          Min: {value[0]}
        </Typography>
        <Typography variant="label1" className="text-secondary">
          Max: {value[1]}
        </Typography>
      </div>
    </div>
  );
}

export default function Page() {
  return <SliderRangeExample />;
}

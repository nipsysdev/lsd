'use client';

import { Slider, Typography } from '@nipsys/lsd';
import { useState } from 'react';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'md';

/**
 * @docSection usage
 */
export const CODE = `import * as React from 'react';
import { useState } from 'react';
import { Slider, Typography } from '@nipsys/lsd';

export function Example() {
  const [value, setValue] = useState([50]);

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="body2">Volume</Typography>
      <Slider value={value} onValueChange={setValue} max={100} step={1} aria-label="Volume" className="w-80" />
      <Typography variant="label1" className="text-secondary">
        Current value: {value[0]}
      </Typography>
    </div>
  );
}`;

export function SliderBasicExample() {
  useSendThemeToIframes();
  const [value, setValue] = useState([50]);

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="body2">Volume</Typography>
      <Slider
        value={value}
        onValueChange={setValue}
        max={100}
        step={1}
        aria-label="Volume"
        className="w-80"
      />
      <Typography variant="label1" className="text-secondary">
        Current value: {value[0]}
      </Typography>
    </div>
  );
}

export default function Page() {
  return <SliderBasicExample />;
}

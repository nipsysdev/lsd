'use client';

import { Slider, Typography } from '@nipsys/lsd';
import { useState } from 'react';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'md';

/**
 * @docSection size
 */
export const CODE = `import * as React from 'react';
import { useState } from 'react';
import { Slider, Typography } from '@nipsys/lsd';

export function Example() {
  const [smValue, setSmValue] = useState([50]);
  const [mdValue, setMdValue] = useState([50]);
  const [lgValue, setLgValue] = useState([50]);

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) w-80">
      <div className="flex flex-col gap-(--lsd-spacing-smaller)">
        <Typography variant="body2">Small Slider</Typography>
        <Slider value={smValue} onValueChange={setSmValue} max={100} step={1} size="sm" />
        <Typography variant="label1" className="text-secondary">
          Size: sm - Compact slider for tight spaces
        </Typography>
      </div>

      <div className="flex flex-col gap-(--lsd-spacing-smaller)">
        <Typography variant="body2">Medium Slider</Typography>
        <Slider value={mdValue} onValueChange={setMdValue} max={100} step={1} size="md" />
        <Typography variant="label1" className="text-secondary">
          Size: md - Default size for most use cases
        </Typography>
      </div>

      <div className="flex flex-col gap-(--lsd-spacing-smaller)">
        <Typography variant="body2">Large Slider</Typography>
        <Slider value={lgValue} onValueChange={setLgValue} max={100} step={1} size="lg" />
        <Typography variant="label1" className="text-secondary">
          Size: lg - Larger slider for better accessibility
        </Typography>
      </div>
    </div>
  );
}`;

export function SliderSizesExample() {
  useSendThemeToIframes();
  const [smValue, setSmValue] = useState([50]);
  const [mdValue, setMdValue] = useState([50]);
  const [lgValue, setLgValue] = useState([50]);

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) w-80">
      <div className="flex flex-col gap-(--lsd-spacing-smaller)">
        <Typography variant="body2">Small Slider</Typography>
        <Slider value={smValue} onValueChange={setSmValue} max={100} step={1} size="sm" />
        <Typography variant="label1" className="text-secondary">
          Size: sm
        </Typography>
      </div>

      <div className="flex flex-col gap-(--lsd-spacing-smaller)">
        <Typography variant="body2">Medium Slider</Typography>
        <Slider value={mdValue} onValueChange={setMdValue} max={100} step={1} size="md" />
        <Typography variant="label1" className="text-secondary">
          Size: md
        </Typography>
      </div>

      <div className="flex flex-col gap-(--lsd-spacing-smaller)">
        <Typography variant="body2">Large Slider</Typography>
        <Slider value={lgValue} onValueChange={setLgValue} max={100} step={1} size="lg" />
        <Typography variant="label1" className="text-secondary">
          Size: lg
        </Typography>
      </div>
    </div>
  );
}

export default function Page() {
  return <SliderSizesExample />;
}

'use client';

import { Label, RadioGroup, RadioGroupItem, Typography } from '@nipsys/shadcn-lsd';
import { useState } from 'react';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `
import { RadioGroup, RadioGroupItem, Label, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  const [value, setValue] = useState('small');

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Select size</Typography>
      <RadioGroup value={value} onValueChange={setValue}>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="small" id="r1" />
          <Label htmlFor="r1">Small</Label>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="medium" id="r2" />
          <Label htmlFor="r2">Medium</Label>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="large" id="r3" />
          <Label htmlFor="r3">Large</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
`;

export function RadioGroupWithLabelsExample() {
  useSendThemeToIframes();
  const [value, setValue] = useState('small');

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Select size</Typography>
      <RadioGroup value={value} onValueChange={setValue}>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="small" id="r1" />
          <Label htmlFor="r1">Small</Label>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="medium" id="r2" />
          <Label htmlFor="r2">Medium</Label>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="large" id="r3" />
          <Label htmlFor="r3">Large</Label>
        </div>
      </RadioGroup>
    </div>
  );
}

export default function RadioGroupWithLabelsPage() {
  return <RadioGroupWithLabelsExample />;
}

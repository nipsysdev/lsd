'use client';

import { Label, RadioGroup, RadioGroupItem, Typography } from '@nipsys/shadcn-lsd';
import { useState } from 'react';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `
import { RadioGroup, RadioGroupItem, Label, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  const [value, setValue] = useState('enabled');

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Select payment method</Typography>
      <RadioGroup value={value} onValueChange={setValue}>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="enabled" id="r1" />
          <Label htmlFor="r1">Credit Card</Label>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="disabled" id="r2" disabled />
          <Label htmlFor="r2">PayPal (unavailable)</Label>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="cash" id="r3" />
          <Label htmlFor="r3">Cash on Delivery</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
`;

export function RadioGroupDisabledExample() {
  useSendThemeToIframes();
  const [value, setValue] = useState('enabled');

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Select payment method</Typography>
      <RadioGroup value={value} onValueChange={setValue}>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="enabled" id="r1" />
          <Label htmlFor="r1">Credit Card</Label>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="disabled" id="r2" disabled />
          <Label htmlFor="r2">PayPal (unavailable)</Label>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="cash" id="r3" />
          <Label htmlFor="r3">Cash on Delivery</Label>
        </div>
      </RadioGroup>
    </div>
  );
}

export default function RadioGroupDisabledPage() {
  return <RadioGroupDisabledExample />;
}

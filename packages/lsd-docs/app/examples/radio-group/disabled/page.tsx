'use client';

import { RadioGroup, RadioGroupItem, Typography } from '@nipsys/shadcn-lsd';
import { useState } from 'react';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `
import { RadioGroup, RadioGroupItem, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  const [value, setValue] = useState('enabled');

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Select payment method</Typography>
      <RadioGroup value={value} onValueChange={setValue}>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="enabled" />
          <Typography variant="body1">Credit Card</Typography>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="disabled" disabled />
          <Typography variant="body1" className="lsd:text-lsd-text-tertiary">
            PayPal (unavailable)
          </Typography>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="cash" />
          <Typography variant="body1">Cash on Delivery</Typography>
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
          <RadioGroupItem value="enabled" />
          <Typography variant="body1">Credit Card</Typography>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="disabled" disabled />
          <Typography variant="body1" className="lsd:text-lsd-text-tertiary">
            PayPal (unavailable)
          </Typography>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="cash" />
          <Typography variant="body1">Cash on Delivery</Typography>
        </div>
      </RadioGroup>
    </div>
  );
}

export default function RadioGroupDisabledPage() {
  return <RadioGroupDisabledExample />;
}

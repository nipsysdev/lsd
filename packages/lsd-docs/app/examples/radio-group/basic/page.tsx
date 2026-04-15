'use client';

import { Label, RadioGroup, RadioGroupItem, Typography } from '@nipsys/lsd';
import { useState } from 'react';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `
import { RadioGroup, RadioGroupItem, Label, Typography } from '@nipsys/lsd';

export function Example() {
  const [value, setValue] = useState('option1');

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Choose an option</Typography>
      <RadioGroup value={value} onValueChange={setValue}>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="option1" id="r1" />
          <Label htmlFor="r1">Option 1</Label>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="option2" id="r2" />
          <Label htmlFor="r2">Option 2</Label>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="option3" id="r3" />
          <Label htmlFor="r3">Option 3</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
`;

export function RadioGroupBasicExample() {
  useSendThemeToIframes();
  const [value, setValue] = useState('option1');

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Choose an option</Typography>
      <RadioGroup value={value} onValueChange={setValue}>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="option1" id="r1" />
          <Label htmlFor="r1">Option 1</Label>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="option2" id="r2" />
          <Label htmlFor="r2">Option 2</Label>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="option3" id="r3" />
          <Label htmlFor="r3">Option 3</Label>
        </div>
      </RadioGroup>
    </div>
  );
}

export default function RadioGroupBasicPage() {
  return <RadioGroupBasicExample />;
}

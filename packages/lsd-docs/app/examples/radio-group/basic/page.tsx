'use client';

import { RadioGroup, RadioGroupItem, Typography } from '@nipsys/shadcn-lsd';
import { useState } from 'react';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `
import { RadioGroup, RadioGroupItem, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  const [value, setValue] = useState('option1');

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Choose an option</Typography>
      <RadioGroup value={value} onValueChange={setValue}>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="option1" />
          <Typography variant="body1">Option 1</Typography>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="option2" />
          <Typography variant="body1">Option 2</Typography>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="option3" />
          <Typography variant="body1">Option 3</Typography>
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
          <RadioGroupItem value="option1" />
          <Typography variant="body1">Option 1</Typography>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="option2" />
          <Typography variant="body1">Option 2</Typography>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="option3" />
          <Typography variant="body1">Option 3</Typography>
        </div>
      </RadioGroup>
    </div>
  );
}

export default function RadioGroupBasicPage() {
  return <RadioGroupBasicExample />;
}

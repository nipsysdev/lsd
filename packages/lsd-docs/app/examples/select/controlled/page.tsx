'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Typography,
} from '@nipsys/shadcn-lsd';
import { useState } from 'react';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Typography } from '@nipsys/shadcn-lsd';
import { useState } from 'react';

export function Example() {
  const [value, setValue] = useState('option2');

  return (
    <div>
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectContent>
      </Select>
      <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
        Selected: {value === 'option1' ? 'Option 1' : value === 'option2' ? 'Option 2' : 'Option 3'}
      </Typography>
    </div>
  );
}`;

export function SelectControlledExample() {
  useSendThemeToIframes();
  const [value, setValue] = useState('option2');

  return (
    <div>
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectContent>
      </Select>
      <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
        Selected: {value === 'option1' ? 'Option 1' : value === 'option2' ? 'Option 2' : 'Option 3'}
      </Typography>
    </div>
  );
}

export default function Controlled() {
  return <SelectControlledExample />;
}

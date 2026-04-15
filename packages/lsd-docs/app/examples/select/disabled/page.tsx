'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@nipsys/lsd';

export function Example() {
  return (
    <div>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a plan" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="free">Free Plan</SelectItem>
          <SelectItem value="pro">Pro Plan</SelectItem>
          <SelectItem value="enterprise" disabled>
            Enterprise Plan (Sold Out)
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}`;

export function SelectDisabledExample() {
  useSendThemeToIframes();

  return (
    <div>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a plan" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="free">Free Plan</SelectItem>
          <SelectItem value="pro">Pro Plan</SelectItem>
          <SelectItem value="enterprise" disabled>
            Enterprise Plan (Sold Out)
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default function Disabled() {
  return <SelectDisabledExample />;
}

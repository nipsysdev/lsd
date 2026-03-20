'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@nipsys/shadcn-lsd';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="p-(--lsd-spacing-larger)">
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
  useInIframeThemeSync();

  return (
    <div className="p-(--lsd-spacing-larger)">
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

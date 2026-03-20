'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@nipsys/shadcn-lsd';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="p-(--lsd-spacing-larger)">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
          <SelectItem value="grape">Grape</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}`;

export function SelectBasicExample() {
  useInIframeThemeSync();

  return (
    <div className="p-(--lsd-spacing-larger)">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
          <SelectItem value="grape">Grape</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default function Basic() {
  return <SelectBasicExample />;
}

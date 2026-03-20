'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@nipsys/shadcn-lsd';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex items-center justify-center p-(--lsd-spacing-larger)">
      <Select defaultValue="apple">
        <SelectTrigger className="w-full max-w-xs">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">🍎 Apple</SelectItem>
          <SelectItem value="banana">🍌 Banana</SelectItem>
          <SelectItem value="orange">🍊 Orange</SelectItem>
          <SelectItem value="grape">🍇 Grape</SelectItem>
          <SelectItem value="strawberry">🍓 Strawberry</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}`;

export function SelectBasicExample() {
  useInIframeThemeSync();

  return (
    <div className="flex items-center justify-center p-(--lsd-spacing-larger)">
      <Select defaultValue="apple">
        <SelectTrigger className="w-full max-w-xs">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">🍎 Apple</SelectItem>
          <SelectItem value="banana">🍌 Banana</SelectItem>
          <SelectItem value="orange">🍊 Orange</SelectItem>
          <SelectItem value="grape">🍇 Grape</SelectItem>
          <SelectItem value="strawberry">🍓 Strawberry</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

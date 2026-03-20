'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@nipsys/shadcn-lsd';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import { Select, SelectContent, SelectItem, SelectSeparator, SelectTrigger, SelectValue } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="p-(--lsd-spacing-larger)">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a priority" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="high">High Priority</SelectItem>
          <SelectItem value="medium">Medium Priority</SelectItem>
          <SelectSeparator />
          <SelectItem value="low">Low Priority</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}`;

export function SelectWithSeparatorExample() {
  useInIframeThemeSync();

  return (
    <div className="p-(--lsd-spacing-larger)">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a priority" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="high">High Priority</SelectItem>
          <SelectItem value="medium">Medium Priority</SelectItem>
          <SelectSeparator />
          <SelectItem value="low">Low Priority</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default function WithSeparator() {
  return <SelectWithSeparatorExample />;
}

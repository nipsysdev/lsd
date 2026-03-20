'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@nipsys/shadcn-lsd';
import {
  AvocadoIcon,
  CarrotIcon,
  CherriesIcon,
  OrangeIcon,
  PepperIcon,
} from '@phosphor-icons/react';
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
    <Select defaultValue="avocado">
      <SelectTrigger>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="avocado">
          <AvocadoIcon weight="duotone" className="inline" /> Avocado
        </SelectItem>
        <SelectItem value="cherries">
          <CherriesIcon weight="duotone" className="inline" /> Cherries
        </SelectItem>
        <SelectItem value="orange">
          <OrangeIcon weight="duotone" className="inline" /> Orange
        </SelectItem>
        <SelectItem value="grape">
          <CarrotIcon weight="duotone" className="inline" /> Carrot
        </SelectItem>
        <SelectItem value="strawberry">
          <PepperIcon weight="duotone" className="inline" /> Pepper
        </SelectItem>
      </SelectContent>
    </Select>
  );
}

'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@nipsys/shadcn-lsd';
import { useState } from 'react';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@nipsys/shadcn-lsd';
import { useState } from 'react';

export function Example() {
  const [value, setValue] = useState('option2');

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a priority" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="high">🔴 High Priority</SelectItem>
          <SelectItem value="medium">🟡 Medium Priority</SelectItem>
          <SelectItem value="low">🟢 Low Priority</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a plan" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Individual</SelectLabel>
            <SelectItem value="free">Free Plan</SelectItem>
            <SelectItem value="pro">Pro Plan</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Business</SelectLabel>
            <SelectItem value="team">Team Plan</SelectItem>
            <SelectItem value="enterprise" disabled>
              Enterprise (Sold Out)
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select value={value} onValueChange={setValue}>
        <SelectTrigger>
          <SelectValue placeholder="Controlled select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectContent>
      </Select>
      <p className="text-sm text-gray-500">Selected: {value}</p>
    </div>
  );
}`;

export function SelectVariantsExample() {
  useSendThemeToIframes();
  const [value, setValue] = useState('option2');

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a priority" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="high">🔴 High Priority</SelectItem>
          <SelectItem value="medium">🟡 Medium Priority</SelectItem>
          <SelectItem value="low">🟢 Low Priority</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a plan" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Individual</SelectLabel>
            <SelectItem value="free">Free Plan</SelectItem>
            <SelectItem value="pro">Pro Plan</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Business</SelectLabel>
            <SelectItem value="team">Team Plan</SelectItem>
            <SelectItem value="enterprise" disabled>
              Enterprise (Sold Out)
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select value={value} onValueChange={setValue}>
        <SelectTrigger>
          <SelectValue placeholder="Controlled select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectContent>
      </Select>
      <p className="text-sm text-gray-500">Selected: {value}</p>
    </div>
  );
}

export default function Variants() {
  return <SelectVariantsExample />;
}

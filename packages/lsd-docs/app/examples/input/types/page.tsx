'use client';

import { Input } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Input } from '@nipsys/lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Input type="text" label="Text" placeholder="Text input" />
      <Input type="email" label="Email" placeholder="you@example.com" />
      <Input type="password" label="Password" placeholder="••••••••" />
      <Input type="number" label="Number" placeholder="123" />
      <Input type="date" label="Date" />
    </div>
  );
}`;

export function InputTypesExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Input type="text" label="Text" placeholder="Text input" />
      <Input type="email" label="Email" placeholder="you@example.com" />
      <Input type="password" label="Password" placeholder="••••••••" />
      <Input type="number" label="Number" placeholder="123" />
      <Input type="date" label="Date" />
    </div>
  );
}

export default function Types() {
  return <InputTypesExample />;
}

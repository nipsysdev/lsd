'use client';

import { Input } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Input } from '@nipsys/lsd';

export function Example() {
  return (
    <Input
      label="Password"
      type="password"
      placeholder="Enter password"
      error
      supportingText="Password must be at least 8 characters."
    />
  );
}`;

export function InputErrorExample() {
  useSendThemeToIframes();

  return (
    <Input
      label="Password"
      type="password"
      placeholder="Enter password"
      error
      supportingText="Password must be at least 8 characters."
    />
  );
}

export default function ErrorPage() {
  return <InputErrorExample />;
}

'use client';

import { Toggle } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Toggle } from '@nipsys/lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Toggle aria-label="Toggle bold">B</Toggle>
        <Toggle aria-label="Toggle italic">I</Toggle>
        <Toggle aria-label="Toggle underline">U</Toggle>
      </div>
    </div>
  );
}`;

export function ToggleExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Toggle aria-label="Toggle bold">B</Toggle>
        <Toggle aria-label="Toggle italic">I</Toggle>
        <Toggle aria-label="Toggle underline">U</Toggle>
      </div>
    </div>
  );
}

export default function TogglePage() {
  return <ToggleExample />;
}

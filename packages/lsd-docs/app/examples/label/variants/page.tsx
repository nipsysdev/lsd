'use client';

import { Checkbox, Label } from '@nipsys/shadcn-lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Checkbox, Label } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-large)">
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Checkbox id="default-checkbox" />
        <Label variant="default" htmlFor="default-checkbox">
          Default Label
        </Label>
      </div>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Checkbox id="secondary-checkbox" defaultChecked />
        <Label variant="secondary" htmlFor="secondary-checkbox">
          Secondary Label
        </Label>
      </div>
    </div>
  )
};`;

export function LabelVariantsExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-large)">
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Checkbox id="default-checkbox" />
        <Label variant="default" htmlFor="default-checkbox">
          Default Label
        </Label>
      </div>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Checkbox id="secondary-checkbox" defaultChecked />
        <Label variant="secondary" htmlFor="secondary-checkbox">
          Secondary Label
        </Label>
      </div>
    </div>
  );
}

export default function Variants() {
  return <LabelVariantsExample />;
}

'use client';

import { Checkbox, Label } from '@nipsys/shadcn-lsd';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import { Checkbox, Label } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-large) p-(--lsd-spacing-larger)">
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
  useInIframeThemeSync();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-large) p-(--lsd-spacing-larger)">
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

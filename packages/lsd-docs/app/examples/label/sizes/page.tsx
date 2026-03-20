'use client';

import { Checkbox, Label } from '@nipsys/shadcn-lsd';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import { Checkbox, Label } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-large) p-(--lsd-spacing-larger)">
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Checkbox id="small-checkbox" />
        <Label size="sm" htmlFor="small-checkbox">
          Small Label
        </Label>
      </div>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Checkbox id="medium-checkbox" defaultChecked />
        <Label size="md" htmlFor="medium-checkbox">
          Medium Label
        </Label>
      </div>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Checkbox id="large-checkbox" />
        <Label size="lg" htmlFor="large-checkbox">
          Large Label
        </Label>
      </div>
    </div>
  )
};`;

export function LabelSizesExample() {
  useInIframeThemeSync();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-large) p-(--lsd-spacing-larger)">
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Checkbox id="small-checkbox" />
        <Label size="sm" htmlFor="small-checkbox">
          Small Label
        </Label>
      </div>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Checkbox id="medium-checkbox" defaultChecked />
        <Label size="md" htmlFor="medium-checkbox">
          Medium Label
        </Label>
      </div>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Checkbox id="large-checkbox" />
        <Label size="lg" htmlFor="large-checkbox">
          Large Label
        </Label>
      </div>
    </div>
  );
}

export default function Sizes() {
  return <LabelSizesExample />;
}

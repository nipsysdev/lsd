'use client';

import { Checkbox, Label } from '@nipsys/shadcn-lsd';
import { type ExampleParams, useIframeMessageListener } from '@/components/docs/useIframeSync';

export function LabelVariantsExample() {
  useIframeMessageListener('example-params', (params: ExampleParams) => {
    if (params.theme) {
      if (params.theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }

    if (params.accent) {
      if (params.accent === 'monochrome') {
        document.documentElement.removeAttribute('data-theme');
      } else {
        document.documentElement.setAttribute('data-theme', params.accent);
      }
    }

    if (params.font) {
      document.documentElement.classList.remove('font-serif', 'font-sans', 'font-mono');
      if (params.font === 'serif') {
        document.documentElement.classList.add('font-serif');
      } else if (params.font === 'sans-serif') {
        document.documentElement.classList.add('font-sans');
      } else if (params.font === 'monospace') {
        document.documentElement.classList.add('font-mono');
      }
    }
  });

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

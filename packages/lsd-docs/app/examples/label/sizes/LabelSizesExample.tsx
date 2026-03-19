'use client';

import { Checkbox, Label } from '@nipsys/shadcn-lsd';
import { type ExampleParams, useIframeMessageListener } from '@/components/docs/useIframeSync';

export function LabelSizesExample() {
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

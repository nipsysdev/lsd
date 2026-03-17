'use client';

import { Label } from '@nipsys/shadcn-lsd';
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
      <div>
        <Label size="sm" htmlFor="small-input">
          Small Label
        </Label>
        <input
          id="small-input"
          type="text"
          placeholder="Small size"
          className="mt-(--lsd-spacing-smaller) w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        />
      </div>
      <div>
        <Label size="md" htmlFor="medium-input">
          Medium Label
        </Label>
        <input
          id="medium-input"
          type="text"
          placeholder="Medium size"
          className="mt-(--lsd-spacing-smaller) w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        />
      </div>
      <div>
        <Label size="lg" htmlFor="large-input">
          Large Label
        </Label>
        <input
          id="large-input"
          type="text"
          placeholder="Large size"
          className="mt-(--lsd-spacing-smaller) w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        />
      </div>
    </div>
  );
}

'use client';

import { Checkbox, Label } from '@nipsys/shadcn-lsd';
import { type ExampleParams, useIframeMessageListener } from '@/components/docs/useIframeSync';

export function LabelBasicExample() {
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
    <div className="w-full max-w-sm space-y-(--lsd-spacing-base)">
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Checkbox id="newsletter" defaultChecked />
        <Label htmlFor="newsletter">Subscribe to newsletter</Label>
      </div>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Checkbox id="updates" />
        <Label htmlFor="updates">Receive product updates</Label>
      </div>
    </div>
  );
}

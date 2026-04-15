'use client';

import { Checkbox, Label, Typography } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Checkbox, Label, Typography } from '@nipsys/lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">With Labels</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base)">
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <Checkbox id="terms" />
          <Label htmlFor="terms">I agree to the terms and conditions</Label>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <Checkbox id="newsletter" defaultChecked />
          <Label htmlFor="newsletter">Subscribe to newsletter</Label>
        </div>
      </div>
    </div>
  );
}`;

export function CheckboxWithLabelExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">With Labels</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base)">
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <Checkbox id="terms" />
          <Label htmlFor="terms">I agree to the terms and conditions</Label>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <Checkbox id="newsletter" defaultChecked />
          <Label htmlFor="newsletter">Subscribe to newsletter</Label>
        </div>
      </div>
    </div>
  );
}

export default function CheckboxWithLabelPage() {
  return <CheckboxWithLabelExample />;
}

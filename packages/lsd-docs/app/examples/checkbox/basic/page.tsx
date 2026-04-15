'use client';

import { Checkbox, Typography } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Checkbox, Typography } from '@nipsys/lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Basic States</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base)">
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <Checkbox />
          <Typography variant="body1">Unchecked</Typography>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <Checkbox defaultChecked />
          <Typography variant="body1">Checked</Typography>
        </div>
      </div>
    </div>
  );
}`;

export function CheckboxBasicExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Basic States</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base)">
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <Checkbox />
          <Typography variant="body1">Unchecked</Typography>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <Checkbox defaultChecked />
          <Typography variant="body1">Checked</Typography>
        </div>
      </div>
    </div>
  );
}

export default function CheckboxBasicPage() {
  return <CheckboxBasicExample />;
}

'use client';

import { Switch, Typography } from '@nipsys/shadcn-lsd';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import { Switch, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Switch defaultChecked={false} />
        <Typography variant="body2">Unchecked</Typography>
      </div>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Switch defaultChecked={true} />
        <Typography variant="body2">Checked</Typography>
      </div>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Switch disabled />
        <Typography variant="body2">Disabled Unchecked</Typography>
      </div>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Switch disabled defaultChecked={true} />
        <Typography variant="body2">Disabled Checked</Typography>
      </div>
    </div>
  );
}`;

export function SwitchBasicExample() {
  useInIframeThemeSync();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Switch defaultChecked={false} />
        <Typography variant="body2">Unchecked</Typography>
      </div>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Switch defaultChecked={true} />
        <Typography variant="body2">Checked</Typography>
      </div>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Switch disabled />
        <Typography variant="body2">Disabled Unchecked</Typography>
      </div>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Switch disabled defaultChecked={true} />
        <Typography variant="body2">Disabled Checked</Typography>
      </div>
    </div>
  );
}

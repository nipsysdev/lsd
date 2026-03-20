'use client';

import { Switch, Typography } from '@nipsys/shadcn-lsd';
import { useState } from 'react';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import { Switch, Typography } from '@nipsys/shadcn-lsd';
import { useState } from 'react';

export function Example() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-center gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Switch checked={checked} onCheckedChange={setChecked} />
      <Typography variant="body2">
        Notifications: {checked ? 'Enabled' : 'Disabled'}
      </Typography>
    </div>
  );
}`;

export function SwitchControlledExample() {
  useInIframeThemeSync();
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-center gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Switch checked={checked} onCheckedChange={setChecked} />
      <Typography variant="body2">Notifications: {checked ? 'Enabled' : 'Disabled'}</Typography>
    </div>
  );
}

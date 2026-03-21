'use client';

import { Switch, Typography } from '@nipsys/shadcn-lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Switch, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Switch size="sm" />
        <Typography variant="body2">Small</Typography>
      </div>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Switch size="md" />
        <Typography variant="body2">Medium</Typography>
      </div>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Switch size="lg" />
        <Typography variant="body2">Large</Typography>
      </div>
    </div>
  );
}
`;

export function Example() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Switch size="sm" />
        <Typography variant="body2">Small</Typography>
      </div>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Switch size="md" />
        <Typography variant="body2">Medium</Typography>
      </div>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Switch size="lg" />
        <Typography variant="body2">Large</Typography>
      </div>
    </div>
  );
}

export default function SwitchSizesPage() {
  return <Example />;
}

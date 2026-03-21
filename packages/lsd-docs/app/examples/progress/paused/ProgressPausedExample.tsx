'use client';

import { Button, Progress, Typography } from '@nipsys/shadcn-lsd';
import { useState } from 'react';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Button, Progress, Typography } from '@nipsys/shadcn-lsd';
import { useState } from 'react';

export function Example() {
  const [paused, setPaused] = useState(false);

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Typography variant="label1">Paused Indeterminate</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base)">
        <Progress indeterminate paused={paused} />
        <div>
          <Button variant="outlined" size="sm" onClick={() => setPaused(!paused)}>
            {paused ? 'Resume' : 'Pause'}
          </Button>
        </div>
      </div>
    </div>
  );
}`;

export function ProgressPausedExample() {
  useSendThemeToIframes();
  const [paused, setPaused] = useState(false);

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Typography variant="label1">Paused Indeterminate</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base)">
        <Progress indeterminate paused={paused} />
        <div>
          <Button variant="outlined" size="sm" onClick={() => setPaused(!paused)}>
            {paused ? 'Resume' : 'Pause'}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function ProgressPausedPage() {
  return <ProgressPausedExample />;
}

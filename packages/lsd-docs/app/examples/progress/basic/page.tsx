'use client';

import { Button, Progress, Typography } from '@nipsys/shadcn-lsd';
import { useState } from 'react';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Button, Progress, Typography } from '@nipsys/shadcn-lsd';
import { useState } from 'react';

export function Example() {
  const [progress, setProgress] = useState(50);

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Uncontrolled Progress</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
        <Progress value={25} showLabel labelPosition="top" />
        <Progress value={50} showLabel labelPosition="top" />
        <Progress value={75} showLabel labelPosition="top" />
      </div>

      <Typography variant="label1">Controlled Progress</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
        <Progress value={progress} showLabel labelPosition="top" />
        <div className="flex justify-between">
          <Button
            variant="outlined"
            size="sm"
            onClick={() => setProgress(Math.max(0, progress - 10))}
          >
            Decrease
          </Button>
          <Button variant="outlined" size="sm" onClick={() => setProgress(0)}>
            Reset
          </Button>
          <Button
            variant="outlined"
            size="sm"
            onClick={() => setProgress(Math.min(100, progress + 10))}
          >
            Increase
          </Button>
        </div>
      </div>
    </div>
  );
}`;

export function ProgressBasicExample() {
  useSendThemeToIframes();
  const [progress, setProgress] = useState(50);

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Uncontrolled Progress</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
        <Progress value={25} showLabel labelPosition="top" />
        <Progress value={50} showLabel labelPosition="top" />
        <Progress value={75} showLabel labelPosition="top" />
      </div>

      <Typography variant="label1">Controlled Progress</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
        <Progress value={progress} showLabel labelPosition="top" />
        <div className="flex justify-between">
          <Button
            variant="outlined"
            size="sm"
            onClick={() => setProgress(Math.max(0, progress - 10))}
          >
            Decrease
          </Button>
          <Button variant="outlined" size="sm" onClick={() => setProgress(0)}>
            Reset
          </Button>
          <Button
            variant="outlined"
            size="sm"
            onClick={() => setProgress(Math.min(100, progress + 10))}
          >
            Increase
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function Basic() {
  return <ProgressBasicExample />;
}

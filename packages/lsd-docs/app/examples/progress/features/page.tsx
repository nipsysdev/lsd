'use client';

import { Button, Progress, Typography } from '@nipsys/shadcn-lsd';
import { useState } from 'react';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Button, Progress, Typography } from '@nipsys/shadcn-lsd';
import { useState } from 'react';

export function Example() {
  const [paused, setPaused] = useState(false);

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Indeterminate Progress</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
        <Progress indeterminate />
        <Progress indeterminate speed="slow" />
        <Progress indeterminate speed="fast" />
      </div>

      <Typography variant="label1">Paused Indeterminate</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
        <Progress indeterminate paused={paused} />
        <div>
          <Button variant="outlined" size="sm" onClick={() => setPaused(!paused)}>
            {paused ? 'Resume' : 'Pause'}
          </Button>
        </div>
      </div>

      <Typography variant="label1">Color Variants</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
        <Progress value={25} variant="default" showLabel labelPosition="top" />
        <Progress value={50} variant="success" showLabel labelPosition="top" />
        <Progress value={75} variant="warning" showLabel labelPosition="top" />
        <Progress value={100} variant="destructive" showLabel labelPosition="top" />
      </div>

      <Typography variant="label1">Sizes</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
        <Progress value={33} size="sm" showLabel labelPosition="top" />
        <Progress value={66} size="md" showLabel labelPosition="top" />
        <Progress value={100} size="lg" showLabel labelPosition="top" />
      </div>
    </div>
  );
}`;

export function ProgressFeaturesExample() {
  useSendThemeToIframes();
  const [paused, setPaused] = useState(false);

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Indeterminate Progress</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
        <Progress indeterminate />
        <Progress indeterminate speed="slow" />
        <Progress indeterminate speed="fast" />
      </div>

      <Typography variant="label1">Paused Indeterminate</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
        <Progress indeterminate paused={paused} />
        <div>
          <Button variant="outlined" size="sm" onClick={() => setPaused(!paused)}>
            {paused ? 'Resume' : 'Pause'}
          </Button>
        </div>
      </div>

      <Typography variant="label1">Color Variants</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
        <Progress value={25} variant="default" showLabel labelPosition="top" />
        <Progress value={50} variant="success" showLabel labelPosition="top" />
        <Progress value={75} variant="warning" showLabel labelPosition="top" />
        <Progress value={100} variant="destructive" showLabel labelPosition="top" />
      </div>

      <Typography variant="label1">Sizes</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
        <Progress value={33} size="sm" showLabel labelPosition="top" />
        <Progress value={66} size="md" showLabel labelPosition="top" />
        <Progress value={100} size="lg" showLabel labelPosition="top" />
      </div>
    </div>
  );
}

export default function Features() {
  return <ProgressFeaturesExample />;
}

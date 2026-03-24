'use client';

import { Slider } from '@nipsys/shadcn-lsd';
import * as React from 'react';

export default function Page() {
  const [value, setValue] = React.useState([33]);

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-md space-y-6">
        <div className="lsd:bg-lsd-base-surface lsd:rounded-lg lsd:p-6">
          <div className="lsd:text-[0.875rem] lsd:leading-[1.5rem] lsd:font-medium lsd:text-lsd-text-primary lsd:mb-4 lsd:block">
            Brightness
          </div>
          <Slider value={value} onValueChange={setValue} max={100} step={1} />
          <p className="lsd:text-[0.75rem] lsd:leading-[1.25rem] lsd:text-lsd-text-secondary lsd:mt-2">
            Current value: {value[0]}%
          </p>
        </div>
      </div>
    </div>
  );
}

export const CODE = `\`use client\`;

import * as React from 'react';
import { Slider } from 'https://cdn.jsdelivr.net/npm/@nipsys/shadcn-lsd@latest/+esm';

export default function Page() {
  const [value, setValue] = React.useState([33]);

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-md space-y-6">
        <div className="lsd:bg-lsd-base-surface lsd:rounded-lg lsd:p-6">
          <div className="lsd:text-[0.875rem] lsd:leading-[1.5rem] lsd:font-medium lsd:text-lsd-text-primary lsd:mb-4 lsd:block">
            Brightness
          </div>
          <Slider
            value={value}
            onValueChange={setValue}
            max={100}
            step={1}
          />
          <p className="lsd:text-[0.75rem] lsd:leading-[1.25rem] lsd:text-lsd-text-secondary lsd:mt-2">
            Current value: {value[0]}%
          </p>
        </div>
      </div>
    </div>
  );
}
`;

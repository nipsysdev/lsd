'use client';

import { Slider } from '@nipsys/shadcn-lsd';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-md space-y-6">
        <div className="lsd:bg-lsd-base-surface lsd:rounded-lg lsd:p-6">
          <div className="lsd:text-[0.875rem] lsd:leading-[1.5rem] lsd:font-medium lsd:text-lsd-text-primary lsd:mb-4 lsd:block">
            Budget Allocation
          </div>
          <Slider defaultValue={[25, 50, 75]} max={100} step={1} />
          <div className="lsd:flex lsd:justify-between lsd:mt-2">
            <span className="lsd:text-[0.75rem] lsd:leading-[1.25rem] lsd:text-lsd-text-secondary">
              Low: 25
            </span>
            <span className="lsd:text-[0.75rem] lsd:leading-[1.25rem] lsd:text-lsd-text-secondary">
              Medium: 50
            </span>
            <span className="lsd:text-[0.75rem] lsd:leading-[1.25rem] lsd:text-lsd-text-secondary">
              High: 75
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export const CODE = `\`use client\';

import { Slider } from 'https://cdn.jsdelivr.net/npm/@nipsys/shadcn-lsd@latest/+esm';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-md space-y-6">
        <div className="lsd:bg-lsd-base-surface lsd:rounded-lg lsd:p-6">
          <div className="lsd:text-[0.875rem] lsd:leading-[1.5rem] lsd:font-medium lsd:text-lsd-text-primary lsd:mb-4 lsd:block">
            Budget Allocation
          </div>
          <Slider defaultValue={[25, 50, 75]} max={100} step={1} />
          <div className="lsd:flex lsd:justify-between lsd:mt-2">
            <span className="lsd:text-[0.75rem] lsd:leading-[1.25rem] lsd:text-lsd-text-secondary">
              Low: 25
            </span>
            <span className="lsd:text-[0.75rem] lsd:leading-[1.25rem] lsd:text-lsd-text-secondary">
              Medium: 50
            </span>
            <span className="lsd:text-[0.75rem] lsd:leading-[1.25rem] lsd:text-lsd-text-secondary">
              High: 75
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
`;

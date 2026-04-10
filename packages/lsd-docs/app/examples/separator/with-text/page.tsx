'use client';

import { Typography } from '@nipsys/shadcn-lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Separator, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Separator with Text</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base)">
        <Typography variant="body1">Some content above the separator</Typography>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-(--lsd-surface) px-(--lsd-spacing-base)">
              <Typography variant="label2">Or</Typography>
            </span>
          </div>
        </div>
        <Typography variant="body1">Some content below the separator</Typography>
      </div>
    </div>
  );
}
`;

export function Example() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Separator with Text</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base)">
        <Typography variant="body1">Some content above the separator</Typography>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-(--lsd-surface) px-(--lsd-spacing-base)">
              <Typography variant="label2">Or</Typography>
            </span>
          </div>
        </div>
        <Typography variant="body1">Some content below the separator</Typography>
      </div>
    </div>
  );
}

export default function WithTextPage() {
  return <Example />;
}

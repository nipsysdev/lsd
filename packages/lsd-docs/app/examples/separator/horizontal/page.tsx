'use client';

import { Separator, Typography } from '@nipsys/shadcn-lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Separator, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Horizontal Separator</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base)">
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <Typography variant="body1">Section 1</Typography>
        </div>
        <Separator />
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <Typography variant="body1">Section 2</Typography>
        </div>
      </div>
    </div>
  );
}
`;

export function Example() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Horizontal Separator</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base)">
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <Typography variant="body1">Section 1</Typography>
        </div>
        <Separator />
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <Typography variant="body1">Section 2</Typography>
        </div>
      </div>
    </div>
  );
}

export default function HorizontalPage() {
  return <Example />;
}

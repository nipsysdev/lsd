'use client';

import { Separator, Typography } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'md' as const;

/**
 * @docSection variant
 */
export const CODE = `import { Separator, Typography } from '@nipsys/lsd';

export function Example() {
  return (
    <div className="flex items-center gap-(--lsd-spacing-base)">
      <div className="flex flex-col items-center gap-(--lsd-spacing-smaller)">
        <Typography variant="body2">Item 1</Typography>
      </div>
      <Separator orientation="vertical" className="h-(--lsd-spacing-5x)" />
      <div className="flex flex-col items-center gap-(--lsd-spacing-smaller)">
        <Typography variant="body2">Item 2</Typography>
      </div>
      <Separator orientation="vertical" className="h-(--lsd-spacing-5x)" />
      <div className="flex flex-col items-center gap-(--lsd-spacing-smaller)">
        <Typography variant="body2">Item 3</Typography>
      </div>
    </div>
  );
}
`;

export function Example() {
  useSendThemeToIframes();

  return (
    <div className="flex items-center gap-(--lsd-spacing-base)">
      <div className="flex flex-col items-center gap-(--lsd-spacing-smaller)">
        <Typography variant="body2">Item 1</Typography>
      </div>
      <Separator orientation="vertical" className="h-(--lsd-spacing-5x)" />
      <div className="flex flex-col items-center gap-(--lsd-spacing-smaller)">
        <Typography variant="body2">Item 2</Typography>
      </div>
      <Separator orientation="vertical" className="h-(--lsd-spacing-5x)" />
      <div className="flex flex-col items-center gap-(--lsd-spacing-smaller)">
        <Typography variant="body2">Item 3</Typography>
      </div>
    </div>
  );
}

export default function VerticalPage() {
  return <Example />;
}

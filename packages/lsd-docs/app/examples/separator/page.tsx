'use client';

import { Separator, Typography } from '@nipsys/shadcn-lsd';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import { Separator, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Typography variant="label1">Horizontal Separator</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base)">
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <div className="size-(--lsd-spacing-2x) rounded-full bg-(--lsd-color-primary)"></div>
          <Typography variant="body1">Section 1</Typography>
        </div>
        <Separator />
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <div className="size-(--lsd-spacing-2x) rounded-full bg-(--lsd-color-accent)"></div>
          <Typography variant="body1">Section 2</Typography>
        </div>
      </div>

      <Typography variant="label1">Vertical Separator</Typography>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <div className="flex flex-col items-center gap-(--lsd-spacing-smaller)">
          <div className="size-(--lsd-spacing-2x) rounded-full bg-(--lsd-color-primary)"></div>
          <Typography variant="body2">Item 1</Typography>
        </div>
        <Separator orientation="vertical" className="h-(--lsd-spacing-5x)" />
        <div className="flex flex-col items-center gap-(--lsd-spacing-smaller)">
          <div className="size-(--lsd-spacing-2x) rounded-full bg-(--lsd-color-accent)"></div>
          <Typography variant="body2">Item 2</Typography>
        </div>
        <Separator orientation="vertical" className="h-(--lsd-spacing-5x)" />
        <div className="flex flex-col items-center gap-(--lsd-spacing-smaller)">
          <div className="size-(--lsd-spacing-2x) rounded-full bg-(--lsd-color-destructive)"></div>
          <Typography variant="body2">Item 3</Typography>
        </div>
      </div>

      <Typography variant="label1">Separator with Text</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base)">
        <Typography variant="body1">Some content above the separator</Typography>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-(--lsd-color-background) px-(--lsd-spacing-base)">
              <Typography variant="label2">Or</Typography>
            </span>
          </div>
        </div>
        <Typography variant="body1">Some content below the separator</Typography>
      </div>
    </div>
  );
}`;

export function SeparatorExample() {
  useInIframeThemeSync();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Typography variant="label1">Horizontal Separator</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base)">
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <div className="size-(--lsd-spacing-2x) rounded-full bg-(--lsd-color-primary)" />
          <Typography variant="body1">Section 1</Typography>
        </div>
        <Separator />
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <div className="size-(--lsd-spacing-2x) rounded-full bg-(--lsd-color-accent)" />
          <Typography variant="body1">Section 2</Typography>
        </div>
      </div>

      <Typography variant="label1">Vertical Separator</Typography>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <div className="flex flex-col items-center gap-(--lsd-spacing-smaller)">
          <div className="size-(--lsd-spacing-2x) rounded-full bg-(--lsd-color-primary)" />
          <Typography variant="body2">Item 1</Typography>
        </div>
        <Separator orientation="vertical" className="h-(--lsd-spacing-5x)" />
        <div className="flex flex-col items-center gap-(--lsd-spacing-smaller)">
          <div className="size-(--lsd-spacing-2x) rounded-full bg-(--lsd-color-accent)" />
          <Typography variant="body2">Item 2</Typography>
        </div>
        <Separator orientation="vertical" className="h-(--lsd-spacing-5x)" />
        <div className="flex flex-col items-center gap-(--lsd-spacing-smaller)">
          <div className="size-(--lsd-spacing-2x) rounded-full bg-(--lsd-color-destructive)" />
          <Typography variant="body2">Item 3</Typography>
        </div>
      </div>

      <Typography variant="label1">Separator with Text</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base)">
        <Typography variant="body1">Some content above the separator</Typography>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-(--lsd-color-background) px-(--lsd-spacing-base)">
              <Typography variant="label2">Or</Typography>
            </span>
          </div>
        </div>
        <Typography variant="body1">Some content below the separator</Typography>
      </div>
    </div>
  );
}

export default function SeparatorPage() {
  return <SeparatorExample />;
}

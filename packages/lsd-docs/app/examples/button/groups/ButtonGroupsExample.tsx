'use client';

import { Button, ButtonGroup, ButtonGroupText } from '@nipsys/shadcn-lsd';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import { Button, ButtonGroup, ButtonGroupText } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <div className="mb-2">
        <ButtonGroup>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </div>
      <div className="mb-2">
        <ButtonGroup orientation="vertical">
          <Button>Top</Button>
          <Button>Middle</Button>
          <Button>Bottom</Button>
        </ButtonGroup>
      </div>
      <div className="mb-2">
        <ButtonGroup>
          <Button>Previous</Button>
          <ButtonGroupText>Page 1 of 10</ButtonGroupText>
          <Button>Next</Button>
        </ButtonGroup>
      </div>
      <div>
        <ButtonGroup>
          <Button variant="filled">Primary</Button>
          <Button variant="outlined">Secondary</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}`;

export function ButtonGroupsExample() {
  useInIframeThemeSync();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <div className="mb-2">
        <ButtonGroup>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </div>
      <div className="mb-2">
        <ButtonGroup orientation="vertical">
          <Button>Top</Button>
          <Button>Middle</Button>
          <Button>Bottom</Button>
        </ButtonGroup>
      </div>
      <div className="mb-2">
        <ButtonGroup>
          <Button>Previous</Button>
          <ButtonGroupText>Page 1 of 10</ButtonGroupText>
          <Button>Next</Button>
        </ButtonGroup>
      </div>
      <div>
        <ButtonGroup>
          <Button variant="filled">Primary</Button>
          <Button variant="outlined">Secondary</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

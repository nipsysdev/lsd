'use client';

import { Button, ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from '@nipsys/shadcn-lsd';

export const CODE = `import {
  Button,
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <>
      <ButtonGroup>
        <Button>Save</Button>
        <Button>Cancel</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button variant="filled">Previous</Button>
        <ButtonGroupText>Page 1 of 10</ButtonGroupText>
        <Button variant="filled">Next</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button>Save</Button>
        <Button>Cancel</Button>
        <ButtonGroupSeparator />
        <Button variant="destructive">Delete</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button variant="filled">Primary</Button>
        <Button variant="outlined">Secondary</Button>
      </ButtonGroup>
    </>
  );
}`;

export function ButtonGroupExample() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <ButtonGroup>
        <Button>Save</Button>
        <Button>Cancel</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button variant="filled">Previous</Button>
        <ButtonGroupText>Page 1 of 10</ButtonGroupText>
        <Button variant="filled">Next</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button>Save</Button>
        <Button>Cancel</Button>
        <ButtonGroupSeparator />
        <Button variant="destructive">Delete</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button variant="filled">Primary</Button>
        <Button variant="outlined">Secondary</Button>
      </ButtonGroup>
    </div>
  );
}

export default function ButtonGroupPage() {
  return <ButtonGroupExample />;
}

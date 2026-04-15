'use client';

import { Button, ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from '@nipsys/lsd';

export const CODE = `import {
  Button,
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from '@nipsys/lsd';

export function Example() {
  return (
    <>
      <ButtonGroup>
        <Button>Save</Button>
        <Button>Cancel</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button>Previous</Button>
        <ButtonGroupText>Page 1 of 10</ButtonGroupText>
        <Button>Next</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button>Save</Button>
        <Button>Cancel</Button>
        <ButtonGroupSeparator />
        <Button variant="destructive">Delete</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button>Primary</Button>
        <Button variant="outlined">Secondary</Button>
      </ButtonGroup>
    </>
  );
}`;

export function ButtonGroupExample() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <ButtonGroup>
        <Button>Save</Button>
        <Button>Cancel</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button>Previous</Button>
        <ButtonGroupText>Page 1 of 10</ButtonGroupText>
        <Button>Next</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button>Save</Button>
        <Button>Cancel</Button>
        <ButtonGroupSeparator />
        <Button variant="destructive">Delete</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button>Primary</Button>
        <Button variant="outlined">Secondary</Button>
      </ButtonGroup>
    </div>
  );
}

export default function ButtonGroupPage() {
  return <ButtonGroupExample />;
}

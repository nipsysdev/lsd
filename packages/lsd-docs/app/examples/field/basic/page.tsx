'use client';

import { Field, FieldGroup, FieldLabel, Input, Typography } from '@nipsys/shadcn-lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Field, FieldGroup, FieldLabel, Input, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <FieldGroup>
      <Typography variant="label1" className="mb-(--lsd-spacing-base)">
        Profile Information
      </Typography>
      <Field>
        <FieldLabel htmlFor="name">Name</FieldLabel>
        <Input id="name" placeholder="Enter your name" />
      </Field>
      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input id="email" type="email" placeholder="Enter your email" />
      </Field>
    </FieldGroup>
  );
}`;

export function FieldBasicExample() {
  useSendThemeToIframes();

  return (
    <FieldGroup>
      <Typography variant="label1" className="mb-(--lsd-spacing-base)">
        Profile Information
      </Typography>
      <Field>
        <FieldLabel htmlFor="name">Name</FieldLabel>
        <Input id="name" placeholder="Enter your name" />
      </Field>
      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input id="email" type="email" placeholder="Enter your email" />
      </Field>
    </FieldGroup>
  );
}

export default function FieldBasicPage() {
  return <FieldBasicExample />;
}

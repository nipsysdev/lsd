'use client';

import { Checkbox, Field, FieldGroup, FieldLabel, Typography } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Checkbox, Field, FieldGroup, FieldLabel, Typography } from '@nipsys/lsd';

export function Example() {
  return (
    <FieldGroup>
      <Typography variant="label1" className="mb-(--lsd-spacing-base)">
        Email Notifications
      </Typography>
      <Field orientation="horizontal">
        <Checkbox id="newsletter" defaultChecked />
        <FieldLabel htmlFor="newsletter">Newsletter</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="marketing" />
        <FieldLabel htmlFor="marketing">Marketing emails</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="updates" defaultChecked />
        <FieldLabel htmlFor="updates">Product updates</FieldLabel>
      </Field>
    </FieldGroup>
  );
}`;

export function FieldHorizontalExample() {
  useSendThemeToIframes();

  return (
    <FieldGroup>
      <Typography variant="label1" className="mb-(--lsd-spacing-base)">
        Email Notifications
      </Typography>
      <Field orientation="horizontal">
        <Checkbox id="newsletter" defaultChecked />
        <FieldLabel htmlFor="newsletter">Newsletter</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="marketing" />
        <FieldLabel htmlFor="marketing">Marketing emails</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="updates" defaultChecked />
        <FieldLabel htmlFor="updates">Product updates</FieldLabel>
      </Field>
    </FieldGroup>
  );
}

export default function FieldHorizontalPage() {
  return <FieldHorizontalExample />;
}

'use client';

import { Field, FieldDescription, FieldLabel, FieldLegend, FieldSet, Input } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'lg';

/**
 * @docSection feature
 */
export const CODE = `import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
  Input,
} from '@nipsys/lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-largest)">
      <FieldSet>
        <FieldLegend>Payment Method</FieldLegend>
        <div className="flex flex-col gap-y-(--lsd-spacing-base)">
          <FieldDescription>
            Choose your preferred payment method for this transaction
          </FieldDescription>
          <Field>
            <FieldLabel htmlFor="card-number">Card Number</FieldLabel>
            <Input id="card-number" placeholder="1234 5678 9012 3456" />
          </Field>
          <Field>
            <FieldLabel htmlFor="expiry">Expiry Date</FieldLabel>
            <Input id="expiry" placeholder="MM/YY" />
          </Field>
        </div>
      </FieldSet>

      <FieldSet>
        <FieldLegend>Billing Address</FieldLegend>
        <div className="flex flex-col gap-y-(--lsd-spacing-base)">
          <FieldDescription>
            Enter the address where you receive your billing statements
          </FieldDescription>
          <Field>
            <FieldLabel htmlFor="address">Street Address</FieldLabel>
            <Input id="address" placeholder="123 Main Street" />
          </Field>
          <Field>
            <FieldLabel htmlFor="city">City</FieldLabel>
            <Input id="city" placeholder="New York" />
          </Field>
        </div>
      </FieldSet>
    </div>
  );
}`;

export function FieldLegendDescriptionExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-largest)">
      <FieldSet>
        <FieldLegend>Payment Method</FieldLegend>
        <div className="flex flex-col gap-y-(--lsd-spacing-base)">
          <FieldDescription>
            Choose your preferred payment method for this transaction
          </FieldDescription>
          <Field>
            <FieldLabel htmlFor="card-number">Card Number</FieldLabel>
            <Input id="card-number" placeholder="1234 5678 9012 3456" />
          </Field>
          <Field>
            <FieldLabel htmlFor="expiry">Expiry Date</FieldLabel>
            <Input id="expiry" placeholder="MM/YY" />
          </Field>
        </div>
      </FieldSet>

      <FieldSet>
        <FieldLegend>Billing Address</FieldLegend>
        <div className="flex flex-col gap-y-(--lsd-spacing-base)">
          <FieldDescription>
            Enter the address where you receive your billing statements
          </FieldDescription>
          <Field>
            <FieldLabel htmlFor="address">Street Address</FieldLabel>
            <Input id="address" placeholder="123 Main Street" />
          </Field>
          <Field>
            <FieldLabel htmlFor="city">City</FieldLabel>
            <Input id="city" placeholder="New York" />
          </Field>
        </div>
      </FieldSet>
    </div>
  );
}

export default function FieldLegendDescriptionPage() {
  return <FieldLegendDescriptionExample />;
}

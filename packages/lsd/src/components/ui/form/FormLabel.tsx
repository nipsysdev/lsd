'use client';

import type { Label as LabelPrimitive } from 'radix-ui';
import type * as React from 'react';
import { Label } from '@/components/ui/label/Label';
import { cn } from '@/lib/utils';
import { useFormField } from './useFormField';

/**
 * FormLabel - Label for the form field.
 *
 * Displays the field label with automatic error state styling from form validation.
 *
 * @exportAs sub
 */
function FormLabel({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>) {
  const { error, formItemId } = useFormField();

  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={cn(error ? 'lsd:text-lsd-destructive-text' : '', className)}
      htmlFor={formItemId}
      {...props}
    />
  );
}

export { FormLabel };

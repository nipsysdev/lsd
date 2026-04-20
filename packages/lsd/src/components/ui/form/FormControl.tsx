'use client';

import { Slot } from 'radix-ui';
import type * as React from 'react';
import { useFormField } from './useFormField';

/**
 * FormControl - Wrapper for the actual input component.
 *
 * Wraps input components with proper accessibility attributes and error state handling.
 *
 * @exportAs sub
 */
function FormControl({ ...props }: React.ComponentProps<typeof Slot.Root>) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  return (
    <Slot.Root
      data-slot="form-control"
      id={formItemId}
      aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      {...props}
    />
  );
}

export { FormControl };

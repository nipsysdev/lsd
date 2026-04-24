'use client';

import type * as React from 'react';
import { cn } from '@/lib/utils';
import { useFormField } from './useFormField';

export interface FormDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

/**
 * FormDescription - Additional helper text for the field.
 *
 * Displays contextual information or instructions below the form input.
 *
 * @exportAs sub
 */
function FormDescription({ className, ...props }: FormDescriptionProps) {
  const { formDescriptionId } = useFormField();

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cn('lsd:text-sm lsd:leading-[1.25rem] lsd:text-lsd-text-secondary', className)}
      {...props}
    />
  );
}

export { FormDescription };

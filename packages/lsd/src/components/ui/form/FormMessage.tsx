'use client';

import type * as React from 'react';
import { cn } from '@/lib/utils';
import { useFormField } from './useFormField';

export interface FormMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {}

/**
 * FormMessage - Validation error message display.
 *
 * Displays validation error messages or custom content, automatically showing errors from form validation.
 *
 * @exportAs sub
 */
function FormMessage({ className, ...props }: FormMessageProps) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? '') : props.children;

  if (!body) {
    return null;
  }

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={cn(
        // Typography Size
        'lsd:text-sm',
        // Typography Line Height
        'lsd:leading-[1.25rem]',
        // Colors & Backgrounds
        'lsd:text-lsd-destructive-text',
        className
      )}
      {...props}
    >
      {body}
    </p>
  );
}

export { FormMessage };

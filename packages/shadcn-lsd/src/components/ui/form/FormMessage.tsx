'use client';

import type * as React from 'react';
import { cn } from '@/lib/utils';
import { useFormField } from './useFormField';

type FormMessageProps = React.ComponentProps<'p'>;

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
      className={cn('lsd:text-sm lsd:leading-[1.25rem] lsd:text-lsd-destructive-text', className)}
      {...props}
    >
      {body}
    </p>
  );
}

export { FormMessage };

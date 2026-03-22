'use client';

import type * as React from 'react';
import { Typography } from '../typography/Typography';
import { useFormField } from './useFormField';

type FormMessageProps = React.ComponentProps<typeof Typography>;

function FormMessage({ className, ...props }: FormMessageProps) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? '') : props.children;

  if (!body) {
    return null;
  }

  return (
    <Typography
      variant="body2"
      color="destructive"
      data-slot="form-message"
      id={formMessageId}
      className={className}
      {...props}
    >
      {body}
    </Typography>
  );
}

export { FormMessage };

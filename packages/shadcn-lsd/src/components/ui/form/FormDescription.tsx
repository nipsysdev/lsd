'use client';

import type * as React from 'react';
import { Typography } from '../typography/Typography';
import { useFormField } from './useFormField';

type FormDescriptionProps = React.ComponentProps<typeof Typography>;

function FormDescription({ className, ...props }: FormDescriptionProps) {
  const { formDescriptionId } = useFormField();

  return (
    <Typography
      variant="body2"
      color="secondary"
      data-slot="form-description"
      id={formDescriptionId}
      className={className}
      {...props}
    />
  );
}

export { FormDescription };

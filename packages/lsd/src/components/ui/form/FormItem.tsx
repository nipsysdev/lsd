'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue);

/**
 * FormItem - Container for individual form fields.
 *
 * Provides unique IDs for form field components and applies consistent spacing.
 *
 * @exportAs sub
 */
function FormItem({ className, ...props }: React.ComponentProps<'div'>) {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        data-slot="form-item"
        className={cn(
          // Layout & Positioning
          'lsd:grid',
          // Spacing
          'lsd:gap-(--lsd-spacing-base)',
          className
        )}
        {...props}
      />
    </FormItemContext.Provider>
  );
}

export { FormItem, FormItemContext };
export type { FormItemContextValue };

'use client';

import * as React from 'react';
import type { ControllerProps, FieldPath, FieldValues } from 'react-hook-form';
import { Controller } from 'react-hook-form';

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue);

/**
 * FormField - Connects form fields to the form state.
 *
 * Wraps React Hook Form's Controller to bind form fields to the form context and validation.
 *
 * @exportAs sub
 */
const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

export type { FormFieldContextValue };
export { FormField, FormFieldContext };

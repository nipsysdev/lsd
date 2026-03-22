export type FieldOrientation = 'vertical' | 'horizontal' | 'responsive';

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: FieldOrientation;
}

export interface FieldGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface FieldSetProps extends React.HTMLAttributes<HTMLFieldSetElement> {
  disabled?: boolean;
}

export interface FieldLegendProps extends React.HTMLAttributes<HTMLLegendElement> {}

export interface FieldDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export interface FieldLabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  htmlFor?: string;
}

export interface FieldContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface FieldSeparatorProps extends React.HTMLAttributes<HTMLHRElement> {}

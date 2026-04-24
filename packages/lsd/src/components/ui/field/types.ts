export type FieldOrientation = 'vertical' | 'horizontal' | 'responsive';

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Layout orientation for the field elements.
   */
  orientation?: FieldOrientation;
}

export interface FieldGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Additional CSS class names.
   */
  className?: string;
}

export interface FieldSetProps extends React.HTMLAttributes<HTMLFieldSetElement> {
  /**
   * Disables all form controls within the fieldset.
   */
  disabled?: boolean;
}

export interface FieldLegendProps extends React.HTMLAttributes<HTMLLegendElement> {
  /**
   * Additional CSS class names.
   */
  className?: string;
}

export interface FieldDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /**
   * Additional CSS class names.
   */
  className?: string;
}

export interface FieldLabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  /**
   * ID of the form control this label is associated with.
   */
  htmlFor?: string;
}

export interface FieldContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Additional CSS class names.
   */
  className?: string;
}

export interface FieldSeparatorProps extends React.HTMLAttributes<HTMLHRElement> {
  /**
   * Additional CSS class names.
   */
  className?: string;
}

export interface ErrorItem {
  /**
   * Error message string.
   */
  message?: string;
  [key: string]: unknown;
}

export interface FieldErrorProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Custom error message content to display.
   */
  children?: React.ReactNode;
  /**
   * Array of error messages or error objects to display.
   */
  errors?: Array<string | ErrorItem | null | undefined>;
}

export interface FieldTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Additional CSS class names.
   */
  className?: string;
}

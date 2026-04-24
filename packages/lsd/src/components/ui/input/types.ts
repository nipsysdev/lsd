import type { BorderVariant, SizeVariant } from '@/lib/types';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Border visual style variant.
   */
  variant?: BorderVariant;

  /**
   * Input size variant.
   */
  size?: SizeVariant;

  /**
   * Label displayed above the input.
   */
  label?: React.ReactNode;

  /**
   * Supporting text or error message displayed below the input.
   */
  supportingText?: React.ReactNode;

  /**
   * Error state styling with red border.
   */
  error?: boolean;
}

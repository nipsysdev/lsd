import type * as ProgressPrimitive from '@radix-ui/react-progress';

export interface ProgressProps extends React.ComponentProps<typeof ProgressPrimitive.Root> {
  /**
   * Completion percentage.
   *
   * Number between 0 and 100 representing progress.
   */
  value?: number;

  /**
   * Enables indeterminate loading state.
   *
   * Shows animated bar when true, uses value when false.
   */
  indeterminate?: boolean;

  /**
   * Indeterminate animation speed.
   *
   * Controls how fast the indeterminate bar animates.
   */
  speed?: 'slow' | 'normal' | 'fast';

  /**
   * Visual color variant.
   *
   * Semantic colors indicating different progress states.
   */
  variant?: 'default' | 'success' | 'warning' | 'destructive';

  /**
   * Displays percentage label.
   *
   * Shows current value as percentage text when true.
   */
  showLabel?: boolean;

  /**
   * Label position relative to bar.
   *
   * Controls where the percentage text appears.
   */
  labelPosition?: 'top' | 'bottom';

  /**
   * Pauses indeterminate animation.
   *
   * Freezes animation when true, only affects indeterminate state.
   */
  paused?: boolean;

  /**
   * Bar height.
   *
   * Controls the visual size of the progress bar.
   */
  size?: 'sm' | 'md' | 'lg';
}

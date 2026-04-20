import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as React from 'react';

import { cn } from '@/lib/utils';
import type { ProgressProps } from './types';

/**
 * Progress - Displays completion progress of a task
 *
 * Visual progress indicator showing task completion as a filled bar.
 * Supports determinate (percentage) and indeterminate (loading) states with color variants.
 *
 * @docSectionPageDescription
 * Displays completion progress of a task with visual indicator.
 *
 * @docSectionAbout
 * A visual progress indicator showing task completion as a filled bar. Supports determinate states with percentage values and indeterminate states for unknown duration. Includes optional labels and multiple color variants for different states.
 *
 * @docSectionAccessibilityKeyboard
 * Progress is a non-interactive element and does not support keyboard navigation.
 *
 * @docSectionAccessibilityAria
 * role="progressbar" is automatically applied to indicate progress
 * aria-valuenow is automatically set to current value when determinate
 * aria-valuemin is automatically set to 0
 * aria-valuemax is automatically set to 100
 *
 * @docSectionAccessibilityFocus
 * Progress indicators are not focusable as they are non-interactive display elements.
 */
const Progress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, ProgressProps>(
  (
    {
      className,
      value,
      indeterminate,
      speed = 'normal',
      variant = 'default',
      showLabel = false,
      labelPosition = 'top',
      paused = false,
      size = 'md',
      ...props
    },
    ref
  ) => {
    // Color variant mapping
    const variantClasses = {
      default: 'lsd:bg-lsd-primary',
      success: 'lsd:bg-lsd-success',
      warning: 'lsd:bg-lsd-warning',
      destructive: 'lsd:bg-lsd-destructive',
    };

    // Size mapping
    const sizeClasses = {
      sm: 'lsd:h-[var(--lsd-spacing-smaller)]',
      md: 'lsd:h-[var(--lsd-spacing-small)]',
      lg: 'lsd:h-[var(--lsd-spacing-base)]',
    };

    // Animation classes for indeterminate state
    const indeterminateAnimationClasses = indeterminate
      ? cn(
          'lsd:w-1/3',
          'lsd:animate-indeterminate-progress',
          speed === 'slow' && 'lsd:animate-indeterminate-progress-slow',
          speed === 'fast' && 'lsd:animate-indeterminate-progress-fast'
        )
      : 'lsd:w-full';

    const animationStyle = indeterminate
      ? { animationPlayState: paused ? 'paused' : 'running' }
      : undefined;

    // Label text is always percentage
    const labelText = showLabel ? `${value ?? 0}%` : null;

    return (
      <div className="lsd:w-full">
        {showLabel && labelText && labelPosition === 'top' && (
          <div className="lsd:mb-(--lsd-spacing-smallest) lsd:text-sm lsd:font-medium lsd:text-lsd-text-primary lsd:text-center">
            {labelText}
          </div>
        )}
        <ProgressPrimitive.Root
          ref={ref}
          data-slot="progress"
          className={cn(
            'lsd:relative lsd:w-full lsd:overflow-hidden lsd:rounded-none lsd:bg-lsd-surface lsd:border lsd:border-lsd-border',
            sizeClasses[size],
            className
          )}
          {...props}
        >
          <ProgressPrimitive.Indicator
            data-slot="progress-indicator"
            className={cn(
              'lsd:h-full lsd:flex-1',
              !indeterminate && 'lsd:transition-all',
              variantClasses[variant],
              indeterminateAnimationClasses
            )}
            style={
              indeterminate ? animationStyle : { transform: `translateX(-${100 - (value || 0)}%)` }
            }
          />
        </ProgressPrimitive.Root>
        {showLabel && labelText && labelPosition === 'bottom' && (
          <div className="lsd:mt-(--lsd-spacing-smallest) lsd:text-sm lsd:font-medium lsd:text-lsd-text-primary lsd:text-center">
            {labelText}
          </div>
        )}
      </div>
    );
  }
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };

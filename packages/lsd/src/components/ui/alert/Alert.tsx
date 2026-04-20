'use client';

import { cva } from 'class-variance-authority';
import type * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * Alert - Displays contextual information with visual emphasis.
 *
 * Static alert component for communicating messages with different visual
 * semantics. Supports multiple semantic variants for information types.
 *
 * @exportAs root
 *
 * @docSectionPageDescription
 * Displays contextual information with visual emphasis and semantic styling.
 *
 * @docSectionAbout
 * A static alert component for communicating important messages with different visual semantics. Supports multiple variants (default, destructive, info, success, warning) for different types of information.
 *
 * @docSectionComposition
 * • Alert - Main container with border and semantic styling
 *   • AlertTitle - Optional heading with medium font weight
 *   • AlertDescription - Optional descriptive paragraph
 *
 * @docSectionAccessibilityKeyboard
 * • Not keyboard interactive (static content)
 *
 * @docSectionAccessibilityAria
 * • role="alert" identifies the alert to assistive technologies
 * • Visual content should be textually described for screen readers
 *
 * @docSectionAccessibilityFocus
 * • Not focusable by design as it provides static information
 */

const alertVariants = cva(
  'lsd:relative lsd:grid lsd:w-full lsd:h-fit lsd:grid-cols-[0_1fr] lsd:items-start lsd:gap-y-(--lsd-spacing-smaller) lsd:border lsd:px-(--lsd-spacing-base) lsd:py-(--lsd-spacing-small) lsd:text-sm has-[>svg]:lsd:grid-cols-[calc(var(--lsd-spacing-base)*4)_1fr] has-[>svg]:lsd:gap-x-(--lsd-spacing-small) [&>svg]:lsd:size-4 [&>svg]:lsd:translate-y-0.5 [&>svg]:lsd:text-current',
  {
    variants: {
      variant: {
        default: 'lsd:bg-lsd-surface lsd:text-lsd-text-primary lsd:border-lsd-border',
        destructive:
          'lsd:bg-lsd-surface lsd:text-lsd-destructive-text lsd:border-lsd-destructive [&>svg]:lsd:text-current data-[variant=destructive]>*:data-[slot=alert-description]:lsd:text-lsd-destructive-text',
        info: 'lsd:bg-lsd-surface lsd:text-lsd-info-text lsd:border-lsd-info [&>svg]:lsd:text-current data-[variant=info]>*:data-[slot=alert-description]:lsd:text-lsd-info-text',
        success:
          'lsd:bg-lsd-surface lsd:text-lsd-success-text lsd:border-lsd-success [&>svg]:lsd:text-current data-[variant=success]>*:data-[slot=alert-description]:lsd:text-lsd-success-text',
        warning:
          'lsd:bg-lsd-surface lsd:text-lsd-warning-text lsd:border-lsd-warning [&>svg]:lsd:text-current data-[variant=warning]>*:data-[slot=alert-description]:lsd:text-lsd-warning-text',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

/**
 * Alert display configuration.
 */
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Visual style for the alert.
   */
  variant?: 'default' | 'destructive' | 'info' | 'success' | 'warning';
}

function Alert({ className, variant, ...props }: AlertProps) {
  return (
    <div
      data-slot="alert"
      data-variant={variant}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Alert, alertVariants };
export type { AlertProps };

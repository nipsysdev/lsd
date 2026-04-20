'use client';

import type * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * AlertDescription - Optional descriptive text for alert content.
 *
 * Displays the alert description with secondary text color and proper spacing.
 *
 * @exportAs sub
 */

export interface AlertDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

function AlertDescription({ className, ...props }: AlertDescriptionProps) {
  return (
    <p
      data-slot="alert-description"
      className={cn(
        // Layout & Positioning
        'lsd:grid',
        'lsd:justify-items-start',
        'lsd:col-start-2',
        // Spacing
        'lsd:gap-(--lsd-spacing-smallest)',
        // Typography
        'lsd:text-sm',
        'lsd:leading-5',
        // Colors & Backgrounds
        'lsd:text-lsd-text-secondary',
        // Pseudo-selectors & ARIA
        '[&_p]:lsd:leading-relaxed',
        // Colors & Backgrounds (variants)
        'data-[variant=destructive]:lsd:text-lsd-destructive-text/90',
        'data-[variant=info]:lsd:text-lsd-info-text/90',
        'data-[variant=success]:lsd:text-lsd-success-text/90',
        'data-[variant=warning]:lsd:text-lsd-warning-text/90',
        className
      )}
      {...props}
    />
  );
}

export { AlertDescription };

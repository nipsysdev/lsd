'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import type * as React from 'react';
import { cn } from '@/lib/utils';

const alertVariants = cva(
  'lsd:relative lsd:grid lsd:w-full lsd:grid-cols-[0_1fr] lsd:items-start lsd:gap-y-0.5 lsd:border lsd:px-(--lsd-spacing-base) lsd:py-(--lsd-spacing-small) lsd:text-sm has-[>svg]:lsd:grid-cols-[calc(var(--lsd-spacing-base)*4)_1fr] has-[>svg]:lsd:gap-x-(--lsd-spacing-small) [&>svg]:lsd:size-4 [&>svg]:lsd:translate-y-0.5 [&>svg]:lsd:text-current',
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

type AlertProps = React.ComponentProps<'div'> & VariantProps<typeof alertVariants>;

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

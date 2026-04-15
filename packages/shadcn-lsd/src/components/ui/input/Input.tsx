import * as React from 'react';

import { cn } from '@/lib/utils';
import type { InputProps } from './types';
import { getLabelSizeClasses, getTextSizeClasses, getVerticalPaddingClasses } from './utils';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant = 'underlined',
      size = 'md',
      label,
      supportingText,
      error,
      id,
      type,
      disabled,
      ...props
    },
    ref
  ) => {
    const inputId = React.useId();
    const finalId = id || inputId;

    return (
      <div
        className={cn(
          // Layout & Positioning
          'lsd:flex',
          'lsd:flex-col',
          // Box model
          'lsd:box-border',
          className
        )}
      >
        {label && (
          <label
            htmlFor={finalId}
            className={cn(
              // Typography Font
              'lsd:font-medium',
              // Dynamic size classes
              getLabelSizeClasses(size),
              // Interactive States - Disabled
              disabled && 'lsd:text-lsd-text-secondary'
            )}
          >
            {label}
          </label>
        )}
        <div
          className={cn(
            // Layout & Positioning
            'lsd:flex',
            'lsd:items-center',
            'lsd:justify-between',
            // Borders - outlined variant
            variant === 'outlined' && ['lsd:border', 'lsd:border-lsd-border'],
            // Borders - other variants
            variant !== 'ghost' &&
              variant !== 'outlined' && [
                'lsd:border',
                'lsd:border-transparent',
                'lsd:border-b-lsd-border',
              ],
            // Border Colors - error state
            error && !disabled && 'lsd:border-lsd-destructive',
            // Interactive States - Disabled
            disabled && ['lsd:opacity-34', 'lsd:cursor-not-allowed']
          )}
        >
          <input
            ref={ref}
            type={type}
            id={finalId}
            disabled={disabled}
            data-slot="input"
            className={cn(
              // Pseudo-selectors & ARIA - File colors
              'file:lsd:text-lsd-text-primary',
              // Pseudo-selectors & ARIA - Placeholder colors
              'placeholder:lsd:text-lsd-text-primary',
              'placeholder:lsd:opacity-30',
              // Pseudo-selectors & ARIA - Selection colors
              'selection:lsd:bg-lsd-primary',
              'selection:lsd:text-lsd-surface',
              // Borders
              'lsd:border-none',
              // Interactive States - Focus
              'lsd:outline-none',
              'focus-visible:lsd:outline-none',
              // Colors & Backgrounds
              'lsd:bg-transparent',
              'lsd:text-lsd-text-primary',
              // Sizing
              'lsd:w-full',
              'lsd:h-full',
              // Pseudo-selectors & ARIA - File styling
              'file:lsd:inline-flex',
              'file:lsd:h-7',
              'file:lsd:border-0',
              'file:lsd:bg-transparent',
              'file:lsd:font-medium',
              // Interactive States - Disabled
              'lsd:disabled:pointer-events-none',
              'lsd:disabled:cursor-not-allowed',
              'lsd:disabled:opacity-34',
              // Spacing
              'lsd:px-(--lsd-spacing-base)',
              // Dynamic size classes
              getTextSizeClasses(size),
              getVerticalPaddingClasses(size)
            )}
            {...props}
          />
        </div>
        {supportingText && (
          <div
            className={cn(
              // Spacing
              'lsd:pt-(--lsd-spacing-smaller)',
              // Sizing
              'lsd:w-fit'
            )}
          >
            <p
              className={cn(
                'lsd:text-sm',
                size === 'lg' ? 'lsd:text-base' : 'lsd:text-sm',
                error && !disabled && 'lsd:text-lsd-destructive',
                disabled && 'lsd:text-lsd-text-secondary'
              )}
            >
              {supportingText}
            </p>
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };

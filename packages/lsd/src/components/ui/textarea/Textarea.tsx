import * as React from 'react';

import { cn } from '@/lib/utils';

/**
 * Textarea - Multi-line text input for longer form content
 *
 * Styled textarea component with built-in focus states, error indicators,
 * and disabled styling. Supports all standard HTML textarea attributes.
 *
 * @docSectionPageDescription
 * Multi-line text input for collecting longer form content.
 *
 * @docSectionAbout
 * A styled textarea component for multi-line text input. Includes built-in focus states, error indicators (via aria-invalid), and disabled styling. Supports all standard HTML textarea attributes for flexibility.
 *
 * @docSectionAccessibilityKeyboard
 * • Tab - Navigate to/from the textarea
 *
 * @docSectionAccessibilityAria
 * • aria-invalid indicates error state to assistive technologies
 * • Use aria-label or aria-labelledby when no visible label exists
 *
 * @docSectionAccessibilityFocus
 * Follows standard HTML textarea focus behavior. Focus indicators use the LSD design system's focus ring styling for visibility.
 */
const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      data-slot="textarea"
      className={cn(
        // Layout & Positioning
        'lsd:flex',
        // Sizing
        'lsd:min-h-16',
        'lsd:w-full',
        // Sizing - field
        'lsd:field-sizing-content',
        // Borders, Shapes & Effects
        'lsd:rounded-none',
        'lsd:border',
        'lsd:border-lsd-border',
        'lsd:shadow-xs',
        // Colors & Backgrounds
        'lsd:bg-transparent',
        // Spacing
        'lsd:px-(--lsd-spacing-base)',
        'lsd:py-(--lsd-spacing-base)',
        // Typography Size
        'lsd:text-base',
        'md:lsd:text-sm',
        // Transitions & Animations
        'lsd:transition-[color,box-shadow]',
        // Interactive States - Focus
        'lsd:outline-none',
        'focus-visible:lsd:border-lsd-primary',
        'focus-visible:lsd:ring-[3px]',
        'focus-visible:lsd:ring-lsd-primary/50',
        // Pseudo-selectors & ARIA - placeholder
        'lsd:placeholder:text-lsd-text-secondary',
        // Interactive States - Disabled
        'lsd:disabled:cursor-not-allowed',
        'lsd:disabled:opacity-50',
        // Pseudo-selectors & ARIA - invalid state
        'lsd:aria-invalid:border-lsd-destructive',
        'lsd:aria-invalid:ring-lsd-destructive/20',
        'lsd:aria-invalid:ring-lsd-destructive/40',
        className
      )}
      {...props}
    />
  );
});

Textarea.displayName = 'Textarea';

export { Textarea };

import * as React from 'react';

import { cn } from '@/lib/utils';
import type { FieldProps } from './types';

/**
 * Field - Container for organizing form fields with labels and descriptions.
 *
 * A wrapper that provides consistent spacing and orientation for form field elements.
 * Supports vertical, horizontal, and responsive layouts.
 *
 * @docSectionPageDescription
 * Container for organizing form fields with labels and descriptions.
 *
 * @docSectionAbout
 * A wrapper that provides consistent spacing and orientation for form field elements. Supports vertical, horizontal, and responsive layouts for organizing labels, inputs, and helper text.
 *
 * @docSectionComposition
 * • Field - Main container for field elements
 *   • FieldLabel - Label element associated with input
 *   • FieldDescription - Helper text description
 *   • FieldContent - Wrapper for control and descriptions in horizontal layout
 *   • FieldError - Error message display
 * • FieldSet - Semantic fieldset for grouping related fields
 *   • FieldLegend - Legend for fieldset
 * • FieldGroup - Layout wrapper stacking multiple Fields
 * • FieldTitle - Title for field groups
 * • FieldSeparator - Visual separator between sections
 *
 * @docSectionAccessibilityKeyboard
 * • Tab - Navigate through form fields
 * • Shift + Tab - Navigate to previous form field
 *
 * @docSectionAccessibilityAria
 * • role="group" is added to Field for grouping related controls
 * • aria-label is set on FieldLabel when htmlFor is not provided
 * • role="alert" is used on FieldError for error announcements
 *
 * @docSectionAccessibilityFocus
 * Field components follow standard HTML form semantics. Focus moves through form controls in document order. FieldSet and FieldLegend keep related controls grouped for keyboard navigation.
 *
 * @exportAs root
 */
const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, orientation = 'responsive', ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="field"
        data-orientation={orientation}
        className={cn(
          // Box model
          'lsd:box-border',
          // Layout & Positioning - vertical
          orientation === 'vertical' && ['lsd:flex', 'lsd:flex-col'],
          // Layout & Positioning - horizontal
          orientation === 'horizontal' && ['lsd:flex', 'lsd:flex-row-reverse', 'lsd:items-start'],
          // Spacing - horizontal
          orientation === 'horizontal' && 'lsd:gap-(--lsd-spacing-base)',
          // Layout & Positioning - responsive
          orientation === 'responsive' && [
            'lsd:flex',
            'lsd:flex-col',
            'md:lsd:flex-row-reverse',
            'md:lsd:items-start',
          ],
          // Spacing - responsive
          orientation === 'responsive' && 'md:lsd:gap-(--lsd-spacing-base)',
          className
        )}
        {...props}
      />
    );
  }
);

Field.displayName = 'Field';

export { Field };

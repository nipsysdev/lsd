import * as LabelPrimitive from '@radix-ui/react-label';
import type * as React from 'react';

import { cn } from '@/lib/utils';
import { type LabelVariants, labelVariants } from './types';

/**
 * Label - Accessible label for form controls
 *
 * Renders a text label that provides clear identification for form inputs and controls. Supports default and secondary visual variants with three size options.
 *
 * @docSectionPageDescription
 * Accessible label for form controls with variants and sizes
 *
 * @docSectionAbout
 * Text label component that provides clear identification for form inputs and controls. Built on Radix UI's Label primitive with support for default and secondary variants and three size options. Automatically handles accessibility by associating with controls through htmlFor or nested relationships.
 *
 * @docSectionAccessibilityAria
 * • Uses native label element semantics for proper screen reader support
 * • htmlFor attribute creates explicit association with form controls
 * • Wrapping controls creates implicit association
 *
 * @docSectionAccessibilityFocus
 * Labels do not receive focus but clicking or tapping them moves focus to their associated control. Screen readers announce label text when the associated control receives focus.
 */

export interface LabelProps
  extends React.ComponentProps<typeof LabelPrimitive.Root>,
    LabelVariants {}

function Label({ className, variant, size, ...props }: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(labelVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Label };

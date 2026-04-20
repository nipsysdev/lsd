/**
 * InputGroupText - Text element for displaying labels or icons within input groups.
 *
 * Styled span that displays text with appropriate sizing and spacing within the input group context.
 *
 * @exportAs sub
 */
import * as React from 'react';

import { cn } from '@/lib/utils';
import { useInputGroup } from './context';
import type { InputGroupTextProps } from './types';
import { getInputGroupTextSizeClasses } from './utils';

const InputGroupText = React.forwardRef<HTMLSpanElement, InputGroupTextProps>(
  ({ className, ...props }, ref) => {
    const { size } = useInputGroup();

    return (
      <span
        ref={ref}
        className={cn(
          // Layout & Positioning
          'lsd:flex',
          'lsd:items-center',
          // Spacing
          'lsd:gap-(--lsd-spacing-smaller)',
          // Colors & Backgrounds
          'lsd:text-lsd-text-secondary',
          // Pseudo-selectors & ARIA - SVG styling
          '[&_svg]:lsd:pointer-events-none',
          "[&_svg:not([class*='size-'])]:lsd:size-4",
          // Dynamic text size classes
          getInputGroupTextSizeClasses(size),
          className
        )}
        {...props}
      />
    );
  }
);

InputGroupText.displayName = 'InputGroupText';

export { InputGroupText };

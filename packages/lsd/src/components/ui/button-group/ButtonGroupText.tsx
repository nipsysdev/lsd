import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';

import { cn } from '@/lib/utils';
import type { ButtonGroupTextProps } from './types';

/**
 * ButtonGroupText - Displays descriptive text or labels within button groups
 *
 * Text container styled to match button group aesthetics. Supports rendering as a div or merging with a child element using asChild.
 *
 * @docSectionPageDescription
 * Text container that displays labels or descriptions within button groups.
 *
 * @docSectionAbout
 * Displays descriptive text or labels within a button group. Styled to match button group aesthetics and supports rendering as a div or merging with a child element.
 *
 * @docSectionAccessibilityAria
 * • Use aria-label if text describes group purpose
 * • No specific role needed for descriptive text
 *
 * @docSectionAccessibilityFocus
 * Non-interactive text element. Focus passes through to surrounding interactive elements.
 *
 * @exportAs sub
 */

const ButtonGroupText = React.forwardRef<HTMLDivElement, ButtonGroupTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';

    return (
      <Comp
        ref={ref}
        className={cn(
          "lsd:bg-secondary lsd:flex lsd:items-center lsd:gap-(--lsd-spacing-smaller) lsd:rounded-md lsd:border lsd:px-(--lsd-spacing-base) lsd:text-sm lsd:font-medium lsd:shadow-xs lsd:[&_svg]:pointer-events-none lsd:[&_svg:not([class*='size-'])]:size-4 lsd:disabled:cursor-not-allowed",
          className
        )}
        {...props}
      />
    );
  }
);
ButtonGroupText.displayName = 'ButtonGroupText';

export { ButtonGroupText };

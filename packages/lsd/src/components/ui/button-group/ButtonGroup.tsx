import * as React from 'react';

import { cn } from '@/lib/utils';
import type { ButtonGroupProps } from './types';
import { buttonGroupVariants } from './types';

/**
 * ButtonGroup - Groups related buttons with connected borders and consistent spacing
 *
 * Container for visually grouping related buttons with connected borders. Supports horizontal and vertical orientation.
 *
 * @docSectionPageDescription
 * Groups related buttons with connected borders and consistent spacing.
 *
 * @docSectionAbout
 * Container for visually grouping related buttons with connected borders and consistent spacing. Supports horizontal and vertical orientation layouts.
 *
 * @docSectionComposition
 * • ButtonGroup - Main container for grouping buttons
 *   • ButtonGroupText - Displays descriptive text or labels within the group
 *   • ButtonGroupSeparator - Visual separator between buttons or groups
 *
 * @docSectionAccessibilityKeyboard
 * • Tab - Navigate through buttons in the group
 * • Arrow keys - Navigate through buttons when arranged
 *
 * @docSectionAccessibilityAria
 * • Uses <fieldset> element with <legend> for semantic grouping
 * • groupLabel prop provides required accessible name for screen readers
 *
 * @docSectionAccessibilityFocus
 * Focus moves through buttons sequentially. Focused button receives visible focus indicator.
 *
 * @exportAs root
 */

const ButtonGroup = React.forwardRef<HTMLFieldSetElement, ButtonGroupProps>(
  ({ className, orientation, groupLabel, children, ...props }, ref) => {
    return (
      <fieldset
        ref={ref}
        data-slot="button-group"
        data-orientation={orientation}
        className={cn(buttonGroupVariants({ orientation }), className)}
        {...props}
      >
        {groupLabel && <legend className="lsd:sr-only">{groupLabel}</legend>}
        {children}
      </fieldset>
    );
  }
);
ButtonGroup.displayName = 'ButtonGroup';

export { ButtonGroup };

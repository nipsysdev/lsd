import * as React from 'react';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

/**
 * ButtonGroupSeparator - Visual separator between buttons or button groups
 *
 * Creates a visual separator between buttons within a ButtonGroup. Adapts orientation based on group layout (horizontal or vertical).
 *
 * @docSectionPageDescription
 * Visual divider that separates buttons within a button group.
 *
 * @docSectionAbout
 * Creates a visual separator between buttons or button groups within a ButtonGroup. Automatically adapts orientation based on the button group layout (horizontal or vertical).
 *
 * @docSectionAccessibilityAria
 * • Not interactive - no specific ARIA attributes required
 *
 * @docSectionAccessibilityFocus
 * Visual separator that is not focusable. Focus passes through to interactive elements.
 *
 * @exportAs sub
 */

const ButtonGroupSeparator = React.forwardRef<
  React.ComponentRef<typeof Separator>,
  React.ComponentProps<typeof Separator>
>(({ className, orientation = 'vertical', ...props }, ref) => {
  return (
    <Separator
      ref={ref}
      data-slot="button-group-separator"
      orientation={orientation}
      className={cn(
        // Colors & Backgrounds
        'lsd:bg-border',
        // Layout & Positioning
        'lsd:relative',
        'lsd:self-stretch',
        // Spacing
        'lsd:m-0!',
        // Pseudo-selectors & ARIA
        'lsd:data-[orientation=vertical]:h-auto',
        className
      )}
      {...props}
    />
  );
});
ButtonGroupSeparator.displayName = 'ButtonGroupSeparator';

export { ButtonGroupSeparator };

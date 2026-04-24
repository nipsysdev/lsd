import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as React from 'react';

import { cn } from '@/lib/utils';

/**
 * Separator - Visual divider for separating content
 *
 * A thin line that visually separates content into groups. Supports horizontal
 * and vertical orientations with optional semantic meaning.
 *
 * @docSectionPageDescription
 * A visual divider that separates content into groups.
 *
 * @docSectionAbout
 * A thin, decorative line that visually separates content into distinct groups.
 * The component supports both horizontal and vertical orientations. When not decorative,
 * it provides semantic meaning through the separator role for assistive technologies.
 *
 * @docSectionAccessibilityAria
 * • role="separator" is added when decorative is false
 * • When decorative is true, the element is removed from accessibility tree
 *
 * @docSectionAccessibilityFocus
 * Separators are non-interactive and have no focus states. They are purely
 * visual elements that do not capture keyboard focus or mouse events.
 */
const Separator = React.forwardRef<
  React.ComponentRef<typeof SeparatorPrimitive.Root>,
  React.ComponentProps<typeof SeparatorPrimitive.Root>
>(({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => {
  return (
    <SeparatorPrimitive.Root
      ref={ref}
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'lsd:bg-border lsd:shrink-0 lsd:data-[orientation=horizontal]:h-px lsd:data-[orientation=horizontal]:w-full lsd:data-[orientation=vertical]:h-full lsd:data-[orientation=vertical]:w-px',
        className
      )}
      {...props}
    />
  );
});
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };

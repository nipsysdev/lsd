import * as React from 'react';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

const ButtonGroupSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
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

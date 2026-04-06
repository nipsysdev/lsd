import * as React from 'react';

import { cn } from '@/lib/utils';
import type { InputGroupProps } from './types';

const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  ({ className, ...props }, ref) => {
    return (
      // biome-ignore lint/a11y/useSemanticElements: Following shadcn pattern
      <div
        ref={ref}
        data-slot="input-group"
        role="group"
        className={cn(
          'lsd:group/input-group lsd:relative lsd:flex lsd:w-full lsd:items-center lsd:rounded-md lsd:border lsd:border-lsd-border lsd:shadow-xs lsd:transition-[color,box-shadow] lsd:outline-none lsd:bg-lsd-surface',
          'lsd:h-9 lsd:min-w-0 has-[>textarea]:lsd:h-auto',

          // Variants based on alignment.
          'has-[>[data-align=inline-start]]:[&>input]:lsd:pl-(--lsd-spacing-smaller)',
          'has-[>[data-align=inline-end]]:[&>input]:lsd:pr-(--lsd-spacing-smaller)',
          'has-[>[data-align=block-start]]:lsd:h-auto has-[>[data-align=block-start]]:lsd:flex-col has-[>[data-align=block-start]]:[&>input]:lsd:pb-(--lsd-spacing-base)',
          'has-[>[data-align=block-end]]:lsd:h-auto has-[>[data-align=block-end]]:lsd:flex-col has-[>[data-align=block-end]]:[&>input]:lsd:pt-(--lsd-spacing-base)',

          // Focus state.
          'has-[[data-slot=input-group-control]:focus-visible]:lsd:border-lsd-primary has-[[data-slot=input-group-control]:focus-visible]:lsd:ring-[3px] has-[[data-slot=input-group-control]:focus-visible]:lsd:ring-lsd-primary/50',

          // Error state.
          'has-[[data-slot][aria-invalid=true]]:lsd:border-lsd-destructive has-[[data-slot][aria-invalid=true]]:lsd:ring-lsd-destructive/20 has-[[data-slot][aria-invalid=true]]:lsd:ring-lsd-destructive/40',

          className
        )}
        {...props}
      />
    );
  }
);

InputGroup.displayName = 'InputGroup';

export { InputGroup };

import { CheckIcon } from '@phosphor-icons/react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import type * as React from 'react';
import { cn } from '@/lib/utils';

function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        // Colors & Backgrounds
        'lsd:border-lsd-border',
        'dark:lsd:bg-lsd-surface/30',
        'lsd:data-[state=checked]:bg-lsd-primary',
        'lsd:data-[state=checked]:text-lsd-surface',
        'lsd:data-[state=checked]:border-lsd-primary',
        // Sizing
        'lsd:size-(--lsd-spacing-large)',
        // Layout & Positioning
        'lsd:shrink-0',
        'peer',
        // Borders, Shapes & Effects
        'lsd:border',
        'lsd:shadow-xs',
        // Transitions & Animations
        'lsd:transition-shadow',
        // Interactive States
        'lsd:cursor-pointer',
        'focus-visible:lsd:border-lsd-border',
        'focus-visible:lsd:ring-lsd-text/50',
        'focus-visible:lsd:ring-[3px]',
        'lsd:outline-none',
        'lsd:disabled:cursor-not-allowed',
        'lsd:disabled:opacity-50',
        'aria-invalid:lsd:ring-lsd-destructive/20',
        'dark:aria-invalid:lsd:ring-lsd-destructive/40',
        'aria-invalid:lsd:border-lsd-destructive',
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className={cn(
          // Layout & Positioning
          'lsd:flex',
          'lsd:items-center',
          'lsd:justify-center',
          // Colors & Backgrounds
          'lsd:text-current',
          // Transitions & Animations
          'lsd:transition-none'
        )}
      >
        <CheckIcon className="lsd:size-(--lsd-spacing-base)" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };

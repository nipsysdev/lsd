/**
 * InputGroupAddon - Container for buttons, text, or other elements within an input group.
 *
 * Displayed alongside input fields with appropriate styling and alignment, optionally clickable to focus the input.
 *
 * @exportAs sub
 */
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { useInputGroup } from './context';
import { getInputGroupPaddingClasses, getInputGroupTextSizeClasses } from './utils';

const inputGroupAddonVariants = cva(
  "lsd:flex lsd:h-auto lsd:cursor-text lsd:items-center lsd:justify-center lsd:gap-(--lsd-spacing-smaller) lsd:font-medium lsd:text-lsd-text-secondary lsd:select-none group-data-[disabled=true]/input-group:lsd:opacity-50 [&>kbd]:lsd:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:lsd:size-4",
  {
    variants: {
      align: {
        'inline-start':
          'lsd:order-first lsd:pl-(--lsd-spacing-base) has-[>button]:lsd:ml-[-0.45rem] has-[>kbd]:lsd:ml-[-0.35rem]',
        'inline-end':
          'lsd:order-last lsd:pr-(--lsd-spacing-base) has-[>button]:lsd:mr-[-0.45rem] has-[>kbd]:lsd:mr-[-0.35rem]',
      },
    },
    defaultVariants: {
      align: 'inline-start',
    },
  }
);

interface InputGroupAddonProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof inputGroupAddonVariants> {}

const InputGroupAddon = React.forwardRef<HTMLDivElement, InputGroupAddonProps>(
  ({ className, align = 'inline-start', ...props }, ref) => {
    const { size } = useInputGroup();

    return (
      // biome-ignore lint/a11y/useKeyWithClickEvents: Following shadcn pattern
      // biome-ignore lint/a11y/useSemanticElements: Following shadcn pattern
      <div
        ref={ref}
        role="group"
        data-slot="input-group-addon"
        data-align={align}
        className={cn(
          inputGroupAddonVariants({ align }),
          getInputGroupPaddingClasses(size),
          getInputGroupTextSizeClasses(size),
          className
        )}
        onClick={e => {
          if ((e.target as HTMLElement).closest('button')) {
            return;
          }
          e.currentTarget.parentElement?.querySelector('input')?.focus();
        }}
        {...props}
      />
    );
  }
);

InputGroupAddon.displayName = 'InputGroupAddon';

export { InputGroupAddon, inputGroupAddonVariants };

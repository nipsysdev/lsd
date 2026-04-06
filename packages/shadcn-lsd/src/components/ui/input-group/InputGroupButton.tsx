import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const inputGroupButtonVariants = cva(
  'lsd:flex lsd:items-center lsd:gap-(--lsd-spacing-smaller) lsd:text-sm lsd:shadow-none',
  {
    variants: {
      size: {
        xs: "lsd:h-6 lsd:gap-(--lsd-spacing-smallest) lsd:rounded-[calc(var(--radius)-5px)] lsd:px-(--lsd-spacing-smaller) has-[>svg]:lsd:px-(--lsd-spacing-smaller) [&>svg:not([class*='size-'])]:lsd:size-3.5",
        sm: 'lsd:h-8 lsd:gap-(--lsd-spacing-smaller) lsd:rounded-md lsd:px-(--lsd-spacing-smaller) has-[>svg]:lsd:px-(--lsd-spacing-smaller)',
        'icon-xs': 'lsd:size-6 lsd:rounded-[calc(var(--radius)-5px)] lsd:p-0 has-[>svg]:lsd:p-0',
        'icon-sm': 'lsd:size-8 lsd:p-0 has-[>svg]:lsd:p-0',
      },
    },
    defaultVariants: {
      size: 'xs',
    },
  }
);

interface InputGroupButtonProps
  extends Omit<React.ComponentProps<typeof Button>, 'size'>,
    VariantProps<typeof inputGroupButtonVariants> {}

const InputGroupButton = React.forwardRef<HTMLButtonElement, InputGroupButtonProps>(
  ({ className, type = 'button', variant = 'ghost', size = 'xs', ...props }, ref) => {
    return (
      <Button
        ref={ref}
        type={type}
        data-size={size}
        variant={variant}
        className={cn(inputGroupButtonVariants({ size }), className)}
        {...props}
      />
    );
  }
);

InputGroupButton.displayName = 'InputGroupButton';

export { InputGroupButton, inputGroupButtonVariants };

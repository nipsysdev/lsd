import { CircleIcon } from 'lucide-react';
import { RadioGroup as RadioGroupPrimitive } from 'radix-ui';
import type * as React from 'react';
import { cn } from '@/lib/utils';

export type RadioGroupProps = React.ComponentProps<typeof RadioGroupPrimitive.Root>;

function RadioGroup({ className, ...props }: RadioGroupProps) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn('lsd:grid lsd:gap-[var(--lsd-spacing-base)]', className)}
      {...props}
    />
  );
}

export { RadioGroup };

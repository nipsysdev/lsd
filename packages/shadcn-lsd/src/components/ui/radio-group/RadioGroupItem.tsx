import { CircleIcon } from '@phosphor-icons/react';
import { RadioGroup as RadioGroupPrimitive } from 'radix-ui';
import type * as React from 'react';
import { cn } from '@/lib/utils';

export type RadioGroupItemProps = React.ComponentProps<typeof RadioGroupPrimitive.Item>;

function RadioGroupItem({ className, ...props }: RadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        'lsd:aspect-square lsd:size-4 lsd:shrink-0 lsd:rounded-full lsd:border lsd:border-lsd-border lsd:text-lsd-primary lsd:shadow-xs lsd:transition-[color,box-shadow] lsd:outline-none focus-visible:lsd:border-lsd-ring focus-visible:lsd:ring-[3px] focus-visible:lsd:ring-lsd-ring/50 lsd:disabled:cursor-not-allowed lsd:disabled:opacity-50 aria-invalid:lsd:border-lsd-destructive aria-invalid:lsd:ring-lsd-destructive/20 dark:lsd:bg-lsd-input/30 dark:aria-invalid:lsd:ring-lsd-destructive/40',
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="lsd:relative lsd:flex lsd:items-center lsd:justify-center"
      >
        <CircleIcon weight="fill" className="lsd:size-4/5 lsd:fill-lsd-primary" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroupItem };

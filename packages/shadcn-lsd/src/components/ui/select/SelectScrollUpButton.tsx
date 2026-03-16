import { CaretUpIcon } from '@phosphor-icons/react';
import * as SelectPrimitive from '@radix-ui/react-select';
import type * as React from 'react';
import { cn } from '@/lib/utils';

export function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        'lsd:flex lsd:cursor-default lsd:items-center lsd:justify-center lsd:py-(--lsd-spacing-smallest) lsd:text-lsd-icon-primary',
        className
      )}
      {...props}
    >
      <CaretUpIcon className="lsd:size-4" weight="duotone" />
    </SelectPrimitive.ScrollUpButton>
  );
}

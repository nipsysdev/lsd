/**
 * InputGroupInput - Input field styled for use within an input group.
 *
 * Provides a ghost-style input with transparent background that fills the available space in the group.
 *
 * @exportAs sub
 */
import * as React from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useInputGroup } from './context';
import type { InputGroupInputProps } from './types';

const InputGroupInput = React.forwardRef<HTMLInputElement, InputGroupInputProps>(
  ({ className, ...props }, ref) => {
    const { size } = useInputGroup();

    return (
      <Input
        ref={ref}
        data-slot="input-group-control"
        variant="ghost"
        size={size}
        className={cn(
          // Layout & Positioning
          'lsd:flex-1',
          // Borders, Shapes & Effects
          'lsd:rounded-none',
          'lsd:border-0',
          'lsd:shadow-none',
          // Interactive States - Focus
          'lsd:focus-visible:ring-0',
          // Colors & Backgrounds
          'lsd:bg-transparent',
          className
        )}
        {...props}
      />
    );
  }
);

InputGroupInput.displayName = 'InputGroupInput';

export { InputGroupInput };

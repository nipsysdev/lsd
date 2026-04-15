import * as React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useInputGroup } from './context';
import type { InputGroupButtonProps, InputGroupButtonSize, InputGroupButtonVariant } from './types';
import { getInputGroupButtonSize, getInputGroupIconSize } from './utils';

const getButtonSize = (
  size: InputGroupButtonSize,
  variant: InputGroupButtonVariant
): 'sm' | 'md' | 'lg' | 'square-sm' | 'square-md' | 'square-lg' => {
  return variant === 'icon' ? `square-${size}` : size;
};

const InputGroupButton = React.forwardRef<HTMLButtonElement, InputGroupButtonProps>(
  ({ className, type = 'button', variant = 'text', size, ...props }, ref) => {
    const { size: inputGroupSize } = useInputGroup();

    // If size is explicitly provided, use it; otherwise derive from InputGroup size
    const finalSize =
      size ||
      (variant === 'icon'
        ? getInputGroupIconSize(inputGroupSize)
        : getInputGroupButtonSize(inputGroupSize));

    return (
      <Button
        ref={ref}
        type={type}
        size={getButtonSize(finalSize as InputGroupButtonSize, variant)}
        variant={variant === 'text' ? 'ghost' : 'ghost-rounded'}
        className={cn(
          // Sizing - height
          'lsd:h-full!',
          // Spacing
          'lsd:p-0!'
        )}
        {...props}
      />
    );
  }
);

InputGroupButton.displayName = 'InputGroupButton';

export { InputGroupButton };

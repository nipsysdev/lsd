import type * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import type { VariantProps } from 'class-variance-authority';
import type { toggleVariants } from '@/components/ui/toggle';

export type ToggleGroupVariants = Omit<VariantProps<typeof toggleVariants>, 'size'>;

export type ToggleGroupBaseProps = ToggleGroupVariants & {
  groupLabel?: string;
  size?: 'sm' | 'md';
};

export type ToggleGroupSingleProps = ToggleGroupBaseProps & {
  type: 'single';
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
};

export type ToggleGroupMultipleProps = ToggleGroupBaseProps & {
  type: 'multiple';
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
};

export type ToggleGroupProps = (ToggleGroupSingleProps | ToggleGroupMultipleProps) &
  Omit<
    React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>,
    keyof ToggleGroupBaseProps | 'type' | 'value' | 'defaultValue' | 'onValueChange'
  >;

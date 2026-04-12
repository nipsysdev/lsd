import { cva, type VariantProps } from 'class-variance-authority';
import type { SizeVariant, SquareSize } from '@/lib/types';

export type ButtonVariant =
  | 'filled'
  | 'outlined'
  | 'filled-rounded'
  | 'outlined-rounded'
  | 'link'
  | 'ghost'
  | 'ghost-rounded'
  | 'destructive'
  | 'destructive-rounded'
  | 'success'
  | 'success-rounded';

export const buttonVariants = cva(
  'lsd:inline-flex lsd:items-center lsd:justify-center lsd:border lsd:transition-colors lsd:cursor-pointer',
  {
    variants: {
      variant: {
        filled: 'lsd:bg-primary lsd:text-primary-foreground',
        outlined: 'lsd:bg-transparent lsd:text-foreground',
        'filled-rounded': 'lsd:bg-primary lsd:text-primary-foreground lsd:rounded-full',
        'outlined-rounded': 'lsd:bg-transparent lsd:text-foreground lsd:rounded-full',
        link: 'lsd:bg-transparent lsd:border-0 lsd:text-foreground lsd:underline',
        ghost:
          'lsd:bg-transparent lsd:text-foreground lsd:border-0 lsd:hover:bg-accent lsd:hover:text-accent-foreground',
        'ghost-rounded':
          'lsd:bg-transparent lsd:text-foreground lsd:border-0 lsd:rounded-full lsd:hover:bg-accent lsd:hover:text-accent-foreground',
        destructive:
          'lsd:bg-lsd-destructive lsd:text-white lsd:border-lsd-destructive lsd:hover:bg-lsd-destructive/90',
        'destructive-rounded':
          'lsd:bg-lsd-destructive lsd:text-white lsd:border-lsd-destructive lsd:rounded-full lsd:hover:bg-lsd-destructive/90',
        success:
          'lsd:bg-lsd-success lsd:text-white lsd:border-lsd-success lsd:hover:bg-lsd-success/90',
        'success-rounded':
          'lsd:bg-lsd-success lsd:text-white lsd:border-lsd-success lsd:rounded-full lsd:hover:bg-lsd-success/90',
      },
      size: {
        sm: 'lsd:h-8 lsd:px-[var(--lsd-spacing-small)] lsd:py-[var(--lsd-spacing-smaller)] lsd:text-sm',
        md: 'lsd:h-10 lsd:px-[var(--lsd-spacing-larger)] lsd:py-[var(--lsd-spacing-smaller)] lsd:text-base',
        lg: 'lsd:h-12 lsd:px-8 lsd:py-[var(--lsd-spacing-small)] lsd:text-lg',
        'square-sm': 'lsd:w-8 lsd:h-8',
        'square-md': 'lsd:w-10 lsd:h-10',
        'square-lg': 'lsd:w-12 lsd:h-12',
      },
    },
    defaultVariants: {
      variant: 'filled',
      size: 'md',
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants> & {
  variant?: ButtonVariant;
  size?: SizeVariant | SquareSize;
};

import { cva, type VariantProps } from 'class-variance-authority';
import type { SizeVariant } from '@/lib/types';

export const accordionTriggerVariants = cva(
  [
    // Colors & Backgrounds
    'lsd:text-lsd-text-primary',
    'lsd:bg-lsd-surface',
    // Layout & Positioning
    'lsd:flex',
    'lsd:flex-1',
    'lsd:items-start',
    'lsd:justify-between',
    // Spacing
    'lsd:gap-(--lsd-spacing-base)',
    // Borders, Shapes & Effects
    'lsd:rounded-none',
    // Typography
    'lsd:text-left',
    'lsd:font-medium',
    // Transitions & Animations
    'lsd:transition-all',
    // Interactive States
    'lsd:cursor-pointer',
    'lsd:hover:underline',
    'lsd:outline-none',
    'focus-visible:lsd:ring-lsd-text/50',
    'focus-visible:lsd:ring-[3px]',
    'focus-visible:lsd:border-lsd-border',
    'lsd:disabled:pointer-events-none',
    'lsd:disabled:cursor-not-allowed',
    'lsd:disabled:opacity-34',
    // Pseudo-selectors & ARIA
    '[&[lsd:data-state=open]>svg]:rotate-180',
  ],
  {
    variants: {
      size: {
        sm: [
          // Spacing
          'lsd:py-(--lsd-spacing-smaller)',
          // Typography
          'lsd:text-xs',
        ],
        md: [
          // Spacing
          'lsd:py-(--lsd-spacing-base)',
          // Typography
          'lsd:text-sm',
        ],
        lg: [
          // Spacing
          'lsd:py-(--lsd-spacing-larger)',
          // Typography
          'lsd:text-base',
        ],
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export const accordionContentVariants = cva(
  [
    // Colors & Backgrounds
    'lsd:text-lsd-text-primary',
    'lsd:bg-lsd-surface',
    // Transitions & Animations
    'lsd:data-[state=closed]:animate-accordion-up',
    'lsd:data-[state=open]:animate-accordion-down',
    // Other Utility Classes
    'lsd:overflow-hidden',
  ],
  {
    variants: {
      size: {
        sm: [
          // Typography
          'lsd:text-xs',
        ],
        md: [
          // Typography
          'lsd:text-sm',
        ],
        lg: [
          // Typography
          'lsd:text-base',
        ],
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export type AccordionVariants = VariantProps<typeof accordionTriggerVariants> & {
  size?: SizeVariant;
};

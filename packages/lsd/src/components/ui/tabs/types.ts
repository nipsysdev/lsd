import type * as TabsPrimitive from '@radix-ui/react-tabs';
import { cva, type VariantProps } from 'class-variance-authority';

export const tabsVariants = cva('', {
  variants: {
    size: {
      sm: '',
      md: '',
      lg: '',
    },
    fullWidth: {
      true: '',
      false: '',
    },
  },
  defaultVariants: {
    size: 'md',
    fullWidth: false,
  },
});

export const tabsListVariants = cva('lsd:bg-lsd-surface lsd:border-b lsd:flex lsd:flex-row', {
  variants: {
    size: {
      sm: 'lsd:h-8',
      md: 'lsd:h-10',
      lg: 'lsd:h-12',
    },
    fullWidth: {
      true: 'lsd:w-full',
      false: 'lsd:w-fit',
    },
  },
  defaultVariants: {
    size: 'md',
    fullWidth: false,
  },
});

export const tabsTriggerVariants = cva(
  'lsd:text-lsd-text-primary lsd:cursor-pointer lsd:border lsd:border-transparent lsd:border-b-0 lsd:hover:underline lsd:data-[state=active]:border-lsd-border lsd:data-[state=active]:bg-lsd-surface lsd:data-[state=active]:font-medium lsd:disabled:opacity-34 lsd:disabled:pointer-events-none lsd:flex lsd:items-center lsd:justify-center lsd:whitespace-nowrap lsd:transition-colors',
  {
    variants: {
      size: {
        sm: 'lsd:px-[var(--lsd-spacing-small)] lsd:py-[var(--lsd-spacing-smaller)] lsd:text-sm lsd:gap-x-(--lsd-spacing-smallest) lsd:[&>svg]:size-4',
        md: 'lsd:px-[var(--lsd-spacing-base)] lsd:py-[var(--lsd-spacing-smaller)] lsd:text-base lsd:gap-x-(--lsd-spacing-smaller) lsd:[&>svg]:size-6',
        lg: 'lsd:px-[var(--lsd-spacing-large)] lsd:py-[var(--lsd-spacing-small)] lsd:text-lg lsd:gap-x-(--lsd-spacing-smaller) lsd:[&>svg]:size-6',
      },
      fullWidth: {
        true: 'lsd:flex-1',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      fullWidth: false,
    },
  }
);

export type TabsVariants = VariantProps<typeof tabsVariants>;
export type TabsListVariants = VariantProps<typeof tabsListVariants>;
export type TabsTriggerVariants = VariantProps<typeof tabsTriggerVariants>;

export interface TabsProps extends React.ComponentProps<typeof TabsPrimitive.Root>, TabsVariants {
  /**
   * Adds border styling to tab content panels.
   *
   * When true, content panels display with border styling.
   */
  bordered?: boolean;
  /**
   * Size of tabs and their contents.
   *
   * Controls the spacing and text size for tabs and content panels.
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Whether tabs and content span full width.
   *
   * When true, tabs and content stretch to fill available width.
   */
  fullWidth?: boolean;
}

export interface TabsListProps
  extends React.ComponentProps<typeof TabsPrimitive.List>,
    Omit<TabsListVariants, 'size'> {
  /**
   * Whether list spans full width.
   *
   * Overrides the fullWidth prop from the Tabs context.
   */
  fullWidth?: boolean;
}

export interface TabsTriggerProps
  extends React.ComponentProps<typeof TabsPrimitive.Trigger>,
    Omit<TabsTriggerVariants, 'size'> {
  /**
   * Whether trigger spans full width.
   *
   * Overrides the fullWidth prop from the Tabs context.
   */
  fullWidth?: boolean;
}

import { CaretDownIcon } from '@phosphor-icons/react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import type * as React from 'react';
import { getAccordionIconSize } from '@/lib/size-utils';
import { cn } from '@/lib/utils';
import { type AccordionVariants, accordionTriggerVariants } from './types';

/**
 * AccordionTrigger - Clickable header that expands and collapses accordion content
 *
 * The AccordionTrigger is the interactive element that users click to expand or collapse
 * the associated AccordionContent. It contains the header text and a chevron icon that
 * rotates when the panel is open. The trigger can be styled with different sizes and can
 * contain custom content or elements.
 *
 * @docSection.accessibility.keyboard
 * • Enter or Space - Toggle the accordion panel
 * • ArrowDown - Move focus to next trigger
 * • ArrowUp - Move focus to previous trigger
 * • Home - Move focus to first trigger
 * • End - Move focus to last trigger
 *
 * @docSection.accessibility.aria
 * • aria-expanded indicates whether the panel is open or closed
 * • aria-controls links the trigger to its content panel
 * • Proper heading structure for screen readers
 *
 * @docSection.accessibility.focus
 * • Visible focus ring on trigger when focused
 * • Focus moves to trigger when associated panel opens
 * • Proper focus management during keyboard navigation
 *
 * @docSection.features.icon
 * Includes a CaretDownIcon that rotates 180 degrees when the panel is open.
 * The icon is purely decorative with aria-hidden="true" since the expanded/collapsed
 * state is communicated through aria-expanded.
 *
 * @docSection.features.sizes
 * Supports three sizes: sm (small), md (medium, default), and lg (large).
 * Size affects padding and typography for the trigger content.
 */
export interface AccordionTriggerProps
  extends React.ComponentProps<typeof AccordionPrimitive.Trigger>,
    AccordionVariants {
  /**
   * The size of the accordion trigger.
   *
   * Controls the padding and typography scaling. Use smaller sizes for compact
   * content and larger sizes when more emphasis is needed on the headers.
   */
  size?: 'sm' | 'md' | 'lg';
}

function AccordionTrigger({ className, children, size = 'md', ...props }: AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header className="lsd:flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(accordionTriggerVariants({ size }), className)}
        {...props}
      >
        {children}
        <CaretDownIcon
          className={cn(
            // Transitions & Animations
            'lsd:transition-transform',
            'lsd:duration-200',
            // Colors & Backgrounds
            'lsd:text-lsd-icon-primary',
            // Layout & Positioning
            'lsd:shrink-0',
            // Spacing
            'lsd:translate-y-0.5',
            // Interactive States
            'lsd:pointer-events-none',
            getAccordionIconSize(size)
          )}
          weight="duotone"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export { AccordionTrigger };

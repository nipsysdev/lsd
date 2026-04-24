import * as AccordionPrimitive from '@radix-ui/react-accordion';
import type * as React from 'react';
import { getAccordionPaddingBottom } from '@/lib/size-utils';
import { cn } from '@/lib/utils';
import { type AccordionVariants, accordionContentVariants } from './types';

/**
 * AccordionContent - Collapsible content panel that shows/hides with animation
 *
 * The AccordionContent contains the expandable content associated with each
 * AccordionTrigger. It animates smoothly when expanding and collapsing using
 * slide-up and slide-down animations. Content is properly hidden from screen
 * readers when collapsed.
 *
 * @docSection.accessibility.aria
 * • role="region" identifies the content as a standalone section
 * • aria-labelledby links the content to its trigger
 * • Properly hidden from accessibility tree when collapsed
 *
 * @docSection.accessibility.focus
 * • Focus management integrated with trigger behavior
 * • Content remains accessible via screen readers when open
 *
 * @docSection.features.animated
 * Smooth slide-up and slide-down animations when panels open and close.
 * Uses CSS data attributes (data-state="open" and data-state="closed") for
 * animation control.
 *
 * @docSection.features.sizes
 * Supports three sizes: sm (small), md (medium, default), and lg (large).
 * Size affects typography scaling and bottom padding for the content.
 */
export interface AccordionContentProps
  extends React.ComponentProps<typeof AccordionPrimitive.Content>,
    AccordionVariants {
  /**
   * The size of the accordion content.
   *
   * Controls the typography scaling and bottom padding. Content size should match
   * the trigger size for consistent visual hierarchy.
   */
  size?: 'sm' | 'md' | 'lg';
}

function AccordionContent({ className, children, size = 'md', ...props }: AccordionContentProps) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn(accordionContentVariants({ size }))}
      {...props}
    >
      <div className={cn('lsd:pt-0', getAccordionPaddingBottom(size), className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { AccordionContent };

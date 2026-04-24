import * as AccordionPrimitive from '@radix-ui/react-accordion';

import { cn } from '@/lib/utils';
import type { AccordionItemProps } from './types';

/**
 * AccordionItem - Represents a single collapsible accordion section
 *
 * The AccordionItem is a container that wraps an AccordionTrigger and its associated
 * AccordionContent. Each item has a unique value prop that identifies it and is used
 * to control which panel is open. Items are separated by borders for clear visual
 * separation.
 *
 * @docSection.accessibility.aria
 * • Proper heading structure for screen readers
 * • Links trigger and content through shared value
 *
 * @docSection.features.value
 * Each AccordionItem requires a unique value prop that identifies the item.
 * This value is used to control which panels are open in the accordion and must
 * be unique within a single accordion instance.
 */
function AccordionItem({ className, ...props }: AccordionItemProps) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        // Borders, Shapes & Effects
        'lsd:border-b',
        // Colors & Backgrounds
        'lsd:border-lsd-border',
        className
      )}
      {...props}
    />
  );
}

export { AccordionItem };

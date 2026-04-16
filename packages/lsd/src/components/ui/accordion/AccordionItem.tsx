import * as AccordionPrimitive from '@radix-ui/react-accordion';
import type * as React from 'react';

import { cn } from '@/lib/utils';

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
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

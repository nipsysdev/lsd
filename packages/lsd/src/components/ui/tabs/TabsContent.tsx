import * as TabsPrimitive from '@radix-ui/react-tabs';
import type * as React from 'react';

import { cn } from '@/lib/utils';
import { useTabsContext } from './Tabs';

/**
 * TabsContent - Panel containing content for a specific tab
 *
 * Displays the content associated with a tab trigger. Only one content panel
 * is visible at a time. Inherits border styling from the Tabs context.
 *
 * @exportAs sub
 */
function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  const { bordered } = useTabsContext();

  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(
        'lsd:outline-none lsd:px-(--lsd-spacing-larger) lsd:py-(--lsd-spacing-larger)',
        bordered && 'lsd:border',
        className
      )}
      {...props}
    />
  );
}

export { TabsContent };

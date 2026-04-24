import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@/lib/utils';
import { useTabsContext } from './Tabs';
import type { TabsTriggerProps } from './types';
import { tabsTriggerVariants } from './types';

/**
 * TabsTrigger - Interactive button that activates a content panel
 *
 * Displays as a tab that users can click to show its associated content panel.
 * Inherited size and fullWidth props can be overridden locally.
 *
 * @exportAs sub
 */
function TabsTrigger({ className, fullWidth, ...props }: TabsTriggerProps) {
  const { size, fullWidth: contextFullWidth } = useTabsContext();

  const resolvedFullWidth = fullWidth ?? contextFullWidth;

  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(tabsTriggerVariants({ size, fullWidth: resolvedFullWidth }), className)}
      {...props}
    />
  );
}

export { TabsTrigger };

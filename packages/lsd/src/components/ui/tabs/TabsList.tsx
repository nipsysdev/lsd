import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@/lib/utils';
import { useTabsContext } from './Tabs';
import type { TabsListProps } from './types';
import { tabsListVariants } from './types';

/**
 * TabsList - Container for tab triggers
 *
 * Displays the interactive tab triggers in a row or column. Inherited size
 * and fullWidth props can be overridden locally.
 *
 * @exportAs sub
 */
function TabsList({ className, fullWidth, ...props }: TabsListProps) {
  const { size, fullWidth: contextFullWidth, bordered } = useTabsContext();

  const resolvedFullWidth = fullWidth ?? contextFullWidth;

  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        tabsListVariants({ size, fullWidth: resolvedFullWidth }),
        bordered && 'lsd:border-b-0',
        className
      )}
      {...props}
    />
  );
}

export { TabsList };

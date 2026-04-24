import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as React from 'react';

import { cn } from '@/lib/utils';
import type { TabsProps } from './types';
import { tabsVariants } from './types';

interface TabsContextValue {
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  bordered?: boolean;
}

const TabsContext = React.createContext<TabsContextValue | undefined>(undefined);

/**
 * Tabs - Displays content in separate panels that users can switch between
 *
 * A set of layered sections of content displayed one at a time. Users can navigate
 * between tabs using triggers, with one panel visible at any given time.
 *
 * @docSectionPageDescription
 * Displays content in separate panels that users can switch between
 *
 * @docSectionAbout
 * A set of layered sections of content displayed one at a time. Users navigate
 * between panels using interactive triggers, with one panel visible at any time.
 * Supports different sizes and full-width layout options.
 *
 * @docSectionComposition
 * • Tabs - Root container that manages tab state and context
 *   • TabsList - Container for tab triggers with bottom border
 *     • TabsTrigger - Interactive button that activates its content panel
 *   • TabsContent - Panel containing content for each tab
 *
 * @docSectionAccessibilityKeyboard
 * • Tab - Navigate to tabs component or move focus to active content
 * • ArrowLeft/ArrowRight - Move focus to previous/next trigger (horizontal)
 * • ArrowUp/ArrowDown - Move focus to previous/next trigger (vertical)
 * • Home - Move focus to first trigger
 * • End - Move focus to last trigger
 *
 * @docSectionAccessibilityAria
 * • role="tablist" is added to TabsList
 * • role="tab" is added to each TabsTrigger
 * • role="tabpanel" is added to each TabsContent
 * • aria-selected indicates active state on triggers
 * • aria-controls links triggers to their content panels
 * • aria-labelledby links content panels to their triggers
 *
 * @docSectionAccessibilityFocus
 * Focus moves between triggers using arrow keys in the list orientation.
 * ArrowLeft/Right for horizontal orientation, ArrowUp/Down for vertical.
 * Home/End jump to first/last trigger. When a trigger is focused, Tab moves
 * to the active content panel.
 *
 * @exportAs root
 */
function Tabs({ className, size, fullWidth, bordered, ...props }: TabsProps) {
  return (
    <TabsContext.Provider value={{ size: size ?? 'md', fullWidth: fullWidth ?? false, bordered }}>
      <TabsPrimitive.Root
        data-slot="tabs"
        className={cn(tabsVariants({ size, fullWidth }), className)}
        {...props}
      />
    </TabsContext.Provider>
  );
}

function useTabsContext() {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within a Tabs component');
  }
  return context;
}

export { Tabs, useTabsContext };

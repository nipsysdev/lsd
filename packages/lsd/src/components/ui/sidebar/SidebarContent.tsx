import { SidebarSimpleIcon } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { useSidebar } from './SidebarContext';
import type {
  SidebarContentProps,
  SidebarFooterProps,
  SidebarHeaderProps,
  SidebarInputProps,
  SidebarInsetProps,
  SidebarRailProps,
  SidebarSeparatorProps,
  SidebarTriggerProps,
} from './types';

/**
 * SidebarContent - Scrollable main content area of the sidebar.
 *
 * Container for the main scrollable content within the sidebar layout.
 *
 * @exportAs sub
 */
export function SidebarContent({ className, ...props }: SidebarContentProps) {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cn(
        'lsd:flex lsd:min-h-0 lsd:flex-1 lsd:flex-col lsd:gap-(--lsd-spacing-smaller) lsd:overflow-auto lsd:group-data-[collapsible=icon]:overflow-hidden',
        className
      )}
      {...props}
    />
  );
}

/**
 * SidebarHeader - Header section of the sidebar.
 *
 * Container for sidebar branding, logo, and top-level navigation.
 *
 * @exportAs sub
 */
export function SidebarHeader({ className, ...props }: SidebarHeaderProps) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn(
        'lsd:flex lsd:flex-col lsd:gap-(--lsd-spacing-smaller) lsd:p-(--lsd-spacing-smaller)',
        className
      )}
      {...props}
    />
  );
}

/**
 * SidebarFooter - Footer section of the sidebar.
 *
 * Container for bottom navigation items and user actions.
 *
 * @exportAs sub
 */
export function SidebarFooter({ className, ...props }: SidebarFooterProps) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn(
        'lsd:flex lsd:flex-col lsd:gap-(--lsd-spacing-smaller) lsd:p-(--lsd-spacing-smaller)',
        className
      )}
      {...props}
    />
  );
}

/**
 * SidebarSeparator - Visual separator within the sidebar.
 *
 * Separator component that divides sections in the sidebar.
 *
 * @exportAs sub
 */
export function SidebarSeparator({ className, ...props }: SidebarSeparatorProps) {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn('lsd:bg-sidebar-border lsd:mx-(--lsd-spacing-smaller) lsd:w-auto', className)}
      {...props}
    />
  );
}

/**
 * SidebarInput - Input field within the sidebar.
 *
 * Search or filter input for sidebar content.
 *
 * @exportAs sub
 */
export function SidebarInput({ className, ...props }: SidebarInputProps) {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn('lsd:bg-background lsd:h-8 lsd:w-full lsd:shadow-none', className)}
      {...props}
    />
  );
}

/**
 * SidebarInset - Main content area that adjusts for sidebar.
 *
 * Container for page content that adjusts layout based on sidebar state.
 *
 * @exportAs sub
 */
export function SidebarInset({ className, ...props }: SidebarInsetProps) {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn(
        'lsd:bg-background lsd:relative lsd:flex lsd:w-full lsd:flex-1 lsd:flex-col',
        'lsd:md:peer-data-[variant=inset]:m-(--lsd-spacing-smaller) lsd:md:peer-data-[variant=inset]:ml-0 lsd:md:peer-data-[variant=inset]:rounded-xl lsd:md:peer-data-[variant=inset]:shadow-sm lsd:md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-(--lsd-spacing-smaller)',
        className
      )}
      {...props}
    />
  );
}

/**
 * SidebarTrigger - Button to toggle sidebar visibility.
 *
 * Triggers sidebar open/close action with icon toggle.
 *
 * @exportAs sub
 */
export function SidebarTrigger({ className, onClick, ...props }: SidebarTriggerProps) {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="square-sm"
      className={className}
      onClick={event => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <SidebarSimpleIcon className="lsd:size-4/5" weight="duotone" />
      <span className="lsd:sr-only">Toggle Sidebar</span>
    </Button>
  );
}

/**
 * SidebarRail - Toggle button rail for collapsed sidebar.
 *
 * Clickable rail along sidebar edge that toggles sidebar visibility when collapsed.
 *
 * @exportAs sub
 */
export function SidebarRail({ className, ...props }: SidebarRailProps) {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      data-sidebar="rail"
      data-slot="sidebar-rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        'hover:after:bg-sidebar-border lsd:absolute lsd:inset-y-0 lsd:z-20 lsd:hidden lsd:w-(--lsd-spacing-base) lsd:-translate-x-1/2 lsd:transition-all lsd:ease-linear lsd:group-data-[side=left]:-right-(--lsd-spacing-base) lsd:group-data-[side=right]:left-0 after:lsd:absolute after:lsd:inset-y-0 after:lsd:left-1/2 after:lsd:w-[2px] lsd:sm:flex',
        'lsd:in-data-[side=left]:cursor-w-resize lsd:in-data-[side=right]:cursor-e-resize',
        'lsd:[[data-side=left][data-state=collapsed]_&]:cursor-e-resize lsd:[[data-side=right][data-state=collapsed]_&]:cursor-w-resize',
        'hover:group-data-[collapsible=offcanvas]:bg-sidebar lsd:group-data-[collapsible=offcanvas]:translate-x-0 lsd:group-data-[collapsible=offcanvas]:after:left-full',
        'lsd:[[data-side=left][data-collapsible=offcanvas]_&]:-right-(--lsd-spacing-smaller)',
        'lsd:[[data-side=right][data-collapsible=offcanvas]_&]:-left-(--lsd-spacing-smaller)',
        className
      )}
      {...props}
    />
  );
}

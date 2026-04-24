import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { useSidebar } from './SidebarContext';
import {
  type SidebarMenuActionProps,
  type SidebarMenuBadgeProps,
  type SidebarMenuButtonProps,
  type SidebarMenuButtonVariants,
  type SidebarMenuItemProps,
  type SidebarMenuProps,
  type SidebarMenuSkeletonProps,
  type SidebarMenuSubButtonProps,
  type SidebarMenuSubItemProps,
  type SidebarMenuSubProps,
  sidebarMenuButtonVariants,
} from './types';

/**
 * SidebarMenu - Container for sidebar menu items.
 *
 * Ordered list of menu items displayed in the sidebar.
 *
 * @exportAs sub
 */
export function SidebarMenu({ className, ...props }: SidebarMenuProps) {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cn(
        'lsd:flex lsd:w-full lsd:min-w-0 lsd:flex-col lsd:gap-(--lsd-spacing-smallest)',
        className
      )}
      {...props}
    />
  );
}

/**
 * SidebarMenuItem - Individual menu item wrapper.
 *
 * Container for a single menu item with optional button, action, badge, and submenu.
 *
 * @exportAs sub
 */
export function SidebarMenuItem({ className, ...props }: SidebarMenuItemProps) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn('lsd:group/menu-item lsd:relative', className)}
      {...props}
    />
  );
}

/**
 * SidebarMenuButton - Interactive button for menu items.
 *
 * Button that displays icon and text with optional tooltip and active state styling.
 *
 * @exportAs sub
 */
export function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = 'default',
  size = 'default',
  tooltip,
  className,
  ...props
}: SidebarMenuButtonProps & SidebarMenuButtonVariants) {
  const Comp = asChild ? Slot : 'button';
  const { isMobile, state } = useSidebar();

  const button = (
    <Comp
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  );

  if (!tooltip) {
    return button;
  }

  if (typeof tooltip === 'string') {
    tooltip = {
      children: tooltip,
    };
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== 'collapsed' || isMobile}
        {...tooltip}
      />
    </Tooltip>
  );
}

/**
 * SidebarMenuAction - Action button within menu item.
 *
 * Button that performs item-specific actions, automatically hidden when sidebar is collapsed to icon-only mode.
 *
 * @exportAs sub
 */
export function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}: SidebarMenuActionProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="sidebar-menu-action"
      data-sidebar="menu-action"
      className={cn(
        'lsd:text-sidebar-foreground ring-sidebar-ring lsd:hover:bg-sidebar-accent lsd:hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground lsd:absolute lsd:top-(--lsd-spacing-smaller) lsd:right-(--lsd-spacing-smallest) lsd:flex lsd:aspect-square lsd:w-(--lsd-spacing-large) lsd:items-center lsd:justify-center lsd:rounded-md lsd:p-0 lsd:outline-hidden lsd:transition-transform lsd:focus-visible:ring-2 lsd:[&>svg]:size-(--lsd-spacing-base) lsd:[&>svg]:shrink-0',
        // Increases the hit area of the button on mobile.
        'after:lsd:absolute after:lsd:-inset-[var(--lsd-spacing-smaller)] md:after:lsd:hidden',
        'lsd:peer-data-[size=sm]/menu-button:top-(--lsd-spacing-smallest)',
        'lsd:peer-data-[size=default]/menu-button:top-(--lsd-spacing-smaller)',
        'lsd:peer-data-[size=lg]/menu-button:top-(--lsd-spacing-small)',
        'lsd:group-data-[collapsible=icon]:hidden',
        showOnHover &&
          'peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:lsd:opacity-100 group-hover/menu-item:lsd:opacity-100 lsd:data-[state=open]:opacity-100 lsd:md:opacity-0',
        className
      )}
      {...props}
    />
  );
}

/**
 * SidebarMenuBadge - Badge displayed on menu item.
 *
 * Displays status indicator or additional information, automatically hidden when sidebar is collapsed to icon-only mode.
 *
 * @exportAs sub
 */
export function SidebarMenuBadge({ className, ...props }: SidebarMenuBadgeProps) {
  return (
    <div
      data-slot="sidebar-menu-badge"
      data-sidebar="menu-badge"
      className={cn(
        'lsd:text-sidebar-foreground lsd:pointer-events-none lsd:absolute lsd:right-(--lsd-spacing-smallest) lsd:flex lsd:h-(--lsd-spacing-large) lsd:min-w-(--lsd-spacing-large) lsd:items-center lsd:justify-center lsd:rounded-md lsd:px-(--lsd-spacing-smallest) lsd:text-xs lsd:font-medium lsd:tabular-nums lsd:select-none',
        'peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground',
        'lsd:peer-data-[size=sm]/menu-button:top-(--lsd-spacing-smallest)',
        'lsd:peer-data-[size=default]/menu-button:top-(--lsd-spacing-smaller)',
        'lsd:peer-data-[size=lg]/menu-button:top-(--lsd-spacing-small)',
        'lsd:group-data-[collapsible=icon]:hidden',
        className
      )}
      {...props}
    />
  );
}

/**
 * SidebarMenuSkeleton - Loading skeleton for menu items.
 *
 * Displays placeholder content while menu items are loading, with optional icon placeholder.
 *
 * @exportAs sub
 */
export function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: SidebarMenuSkeletonProps) {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);

  return (
    <div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cn(
        'lsd:flex lsd:h-8 lsd:items-center lsd:gap-(--lsd-spacing-smaller) lsd:rounded-md lsd:px-(--lsd-spacing-smaller)',
        className
      )}
      {...props}
    >
      {showIcon && (
        <div
          className="lsd:size-(--lsd-spacing-base) lsd:rounded-md lsd:bg-sidebar-accent"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <div
        className="lsd:h-(--lsd-spacing-base) lsd:flex-1 lsd:rounded-md lsd:bg-sidebar-accent"
        data-sidebar="menu-skeleton-text"
        style={
          {
            '--skeleton-width': width,
          } as React.CSSProperties
        }
      />
    </div>
  );
}

/**
 * SidebarMenuSub - Submenu container with nested items.
 *
 * Ordered list of nested menu items within a parent menu item, hidden when sidebar is collapsed to icon-only mode.
 *
 * @exportAs sub
 */
export function SidebarMenuSub({ className, ...props }: SidebarMenuSubProps) {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cn(
        'border-sidebar-border lsd:mx-(--lsd-spacing-base) lsd:flex lsd:min-w-0 lsd:translate-x-px lsd:flex-col lsd:gap-(--lsd-spacing-smallest) lsd:border-l lsd:px-(--lsd-spacing-small) lsd:py-(--lsd-spacing-smallest)',
        'lsd:group-data-[collapsible=icon]:hidden',
        className
      )}
      {...props}
    />
  );
}

/**
 * SidebarMenuSubItem - Submenu item wrapper.
 *
 * Container for a single submenu item with nested button or link.
 *
 * @exportAs sub
 */
export function SidebarMenuSubItem({ className, ...props }: SidebarMenuSubItemProps) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn('lsd:group/menu-sub-item lsd:relative', className)}
      {...props}
    />
  );
}

/**
 * SidebarMenuSubButton - Submenu link or button.
 *
 * Link or button within a submenu item with optional size and active state styling.
 *
 * @exportAs sub
 */
export function SidebarMenuSubButton({
  asChild = false,
  size = 'md',
  isActive = false,
  className,
  ...props
}: SidebarMenuSubButtonProps) {
  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      data-slot="sidebar-menu-sub-button"
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        'lsd:text-sidebar-foreground ring-sidebar-ring lsd:hover:bg-sidebar-accent lsd:hover:text-sidebar-accent-foreground lsd:active:bg-sidebar-accent lsd:active:text-sidebar-accent-foreground lsd:[&>svg]:text-sidebar-accent-foreground lsd:flex lsd:h-(--lsd-spacing-largest) lsd:min-w-0 lsd:-translate-x-px lsd:items-center lsd:gap-(--lsd-spacing-smaller) lsd:overflow-hidden lsd:rounded-md lsd:px-(--lsd-spacing-smaller) lsd:outline-hidden lsd:focus-visible:ring-2 lsd:disabled:pointer-events-none lsd:disabled:opacity-50 aria-lsd:disabled:pointer-events-none aria-lsd:disabled:opacity-50 lsd:data-[active=true]:bg-sidebar-accent lsd:data-[active=true]:text-sidebar-accent-foreground lsd:hover:underline lsd:focus:underline',
        size === 'sm' && 'lsd:text-xs',
        size === 'md' && 'lsd:text-sm',
        'lsd:group-data-[collapsible=icon]:hidden',
        className
      )}
      {...props}
    />
  );
}

import { cva, type VariantProps } from 'class-variance-authority';
import type * as React from 'react';
import type { Button } from '@/components/ui/button';
import type { Input } from '@/components/ui/input';
import type { Separator } from '@/components/ui/separator';
import type { TooltipContent } from '@/components/ui/tooltip';

// Constants
export const SIDEBAR_WIDTH = '16rem';
export const SIDEBAR_WIDTH_MOBILE = '18rem';
export const SIDEBAR_WIDTH_ICON = '3rem';
export const SIDEBAR_KEYBOARD_SHORTCUT = 'b';

// Types
export type SidebarContextProps = {
  state: 'expanded' | 'collapsed';
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

export interface SidebarProps extends React.ComponentProps<'div'> {
  /**
   * Side of the screen where the sidebar appears.
   *
   * Determines whether sidebar is positioned on left or right side.
   */
  side?: 'left' | 'right';
  /**
   * Visual variant of the sidebar.
   *
   * Controls appearance: sidebar (default edge), floating (with border and shadow), or inset (with inset margins).
   */
  variant?: 'sidebar' | 'floating' | 'inset';
  /**
   * Collapsible behavior of the sidebar.
   *
   * Controls how sidebar collapses: offcanvas (slides out), icon (shows only icons), or none (no collapse).
   */
  collapsible?: 'offcanvas' | 'icon' | 'none';
}

export interface SidebarProviderProps extends React.ComponentProps<'div'> {
  /**
   * Initial open state of the sidebar.
   *
   * Sets whether sidebar starts open or closed.
   */
  defaultOpen?: boolean;
  /**
   * Controlled open state of the sidebar.
   *
   * Controls sidebar open state when used as controlled component.
   */
  open?: boolean;
  /**
   * Callback when sidebar open state changes.
   *
   * Called when user toggles sidebar visibility.
   */
  onOpenChange?: (open: boolean) => void;
}

export interface SidebarMenuButtonProps extends React.ComponentProps<'button'> {
  /**
   * Render as child component instead of button.
   *
   * When true, merges props with the single child element.
   */
  asChild?: boolean;
  /**
   * Marks the menu button as active.
   *
   * Applies active styling to indicate current page or selection.
   */
  isActive?: boolean;
  /**
   * Tooltip to display on hover when sidebar is collapsed.
   *
   * Content shown in tooltip or props to pass to TooltipContent.
   */
  tooltip?: string | React.ComponentProps<typeof TooltipContent>;
}

export interface SidebarGroupLabelProps extends React.ComponentProps<'div'> {
  /**
   * Render as child component instead of div.
   *
   * When true, merges props with the single child element.
   */
  asChild?: boolean;
}

export interface SidebarGroupActionProps extends React.ComponentProps<'button'> {
  /**
   * Render as child component instead of button.
   *
   * When true, merges props with the single child element.
   */
  asChild?: boolean;
}

export interface SidebarMenuActionProps extends React.ComponentProps<'button'> {
  /**
   * Render as child component instead of button.
   *
   * When true, merges props with the single child element.
   */
  asChild?: boolean;
  /**
   * Only show action button on hover.
   *
   * When true, action is hidden by default and visible on hover/focus.
   */
  showOnHover?: boolean;
}

export interface SidebarMenuSubButtonProps extends React.ComponentProps<'a'> {
  /**
   * Render as child component instead of link.
   *
   * When true, merges props with the single child element.
   */
  asChild?: boolean;
  /**
   * Size of the submenu button.
   *
   * Controls height and text size.
   */
  size?: 'sm' | 'md';
  /**
   * Marks the submenu button as active.
   *
   * Applies active styling to indicate current page or selection.
   */
  isActive?: boolean;
}

export interface SidebarMenuSkeletonProps extends React.ComponentProps<'div'> {
  /**
   * Show icon placeholder in skeleton.
   *
   * When true, includes an icon placeholder alongside the text skeleton.
   */
  showIcon?: boolean;
}

export interface SidebarTriggerProps extends React.ComponentProps<typeof Button> {}

export interface SidebarRailProps extends React.ComponentProps<'button'> {}

export interface SidebarInsetProps extends React.ComponentProps<'main'> {}

export interface SidebarInputProps extends React.ComponentProps<typeof Input> {}

export interface SidebarHeaderProps extends React.ComponentProps<'div'> {}

export interface SidebarFooterProps extends React.ComponentProps<'div'> {}

export interface SidebarSeparatorProps extends React.ComponentProps<typeof Separator> {}

export interface SidebarContentProps extends React.ComponentProps<'div'> {}

export interface SidebarGroupProps extends React.ComponentProps<'div'> {}

export interface SidebarGroupContentProps extends React.ComponentProps<'div'> {}

export interface SidebarMenuProps extends React.ComponentProps<'ul'> {}

export interface SidebarMenuItemProps extends React.ComponentProps<'li'> {}

export interface SidebarMenuSubProps extends React.ComponentProps<'ul'> {}

export interface SidebarMenuSubItemProps extends React.ComponentProps<'li'> {}

export interface SidebarMenuBadgeProps extends React.ComponentProps<'div'> {}

// Variants
export const sidebarMenuButtonVariants = cva(
  'peer/menu-button lsd:flex lsd:w-full lsd:items-center lsd:gap-(--lsd-spacing-smaller) lsd:overflow-hidden lsd:rounded-md lsd:p-(--lsd-spacing-smaller) lsd:text-left lsd:text-sm lsd:outline-hidden ring-sidebar-ring lsd:transition-[width,height,padding] lsd:hover:bg-sidebar-accent lsd:hover:text-sidebar-accent-foreground lsd:focus-visible:ring-2 lsd:active:bg-sidebar-accent lsd:active:text-sidebar-accent-foreground lsd:disabled:pointer-events-none lsd:disabled:opacity-50 lsd:group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-lsd:disabled:pointer-events-none aria-lsd:disabled:opacity-50 lsd:data-[active=true]:bg-sidebar-accent lsd:data-[active=true]:font-medium lsd:data-[active=true]:text-sidebar-accent-foreground lsd:data-[state=open]:hover:bg-sidebar-accent lsd:data-[state=open]:hover:text-sidebar-accent-foreground lsd:group-data-[collapsible=icon]:size-8! lsd:group-data-[collapsible=icon]:p-(--lsd-spacing-smaller)! lsd:[&>span:last-child]:truncate lsd:[&>svg]:size-(--lsd-spacing-base) lsd:[&>svg]:shrink-0 lsd:hover:underline lsd:focus:underline',
  {
    variants: {
      variant: {
        default: 'lsd:hover:bg-sidebar-accent lsd:hover:text-sidebar-accent-foreground',
        outline:
          'lsd:bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] lsd:hover:bg-sidebar-accent lsd:hover:text-sidebar-accent-foreground lsd:hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]',
      },
      size: {
        default: 'lsd:h-8 lsd:text-sm',
        sm: 'lsd:h-(--lsd-spacing-largest) lsd:text-xs',
        lg: 'lsd:h-12 lsd:text-sm lsd:group-data-[collapsible=icon]:p-0!',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export type SidebarMenuButtonVariants = VariantProps<typeof sidebarMenuButtonVariants>;

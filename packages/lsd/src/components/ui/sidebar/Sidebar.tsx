import type * as React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useSidebar } from './SidebarContext';
import { SIDEBAR_WIDTH_MOBILE, type SidebarProps } from './types';

/**
 * Sidebar - Collapsible navigation panel for app navigation
 *
 * Displays navigation items in a collapsible panel on the left or right side of the screen.
 * Supports multiple variants (sidebar, floating, inset) and collapsible modes (offcanvas, icon, none) with mobile responsiveness using a sheet overlay.
 *
 * @docSectionPageDescription
 * Collapsible navigation panel with multiple variants and mobile support.
 *
 * @docSectionAbout
 * A collapsible navigation panel that displays navigation items on the left or right side of the screen. Supports sidebar, floating, and inset variants with offcanvas, icon-only, and no-collapse modes. On mobile, displays as a sheet overlay. Includes multiple sub-components for building complete sidebar layouts with headers, content, groups, menus, and footers.
 *
 * @docSectionComposition
 * • Sidebar - Main container with responsive behavior and collapsible modes
 *   • SidebarHeader - Header section for branding and navigation
 *     • SidebarMenu - Container for menu items
 *       • SidebarMenuItem - Individual menu item wrapper
 *         • SidebarMenuButton - Button with icon, text, and optional tooltip
 *         • SidebarMenuAction - Action button within menu item (hidden when icon-only)
 *         • SidebarMenuBadge - Badge displayed on menu item (hidden when icon-only)
 *         • SidebarMenuSub - Submenu container with nested items
 *           • SidebarMenuSubItem - Submenu item wrapper
 *             • SidebarMenuSubButton - Submenu link/button
 *   • SidebarContent - Scrollable main content area
 *     • SidebarGroup - Logical group of related menu items
 *       • SidebarGroupLabel - Group label (hidden when icon-only)
 *       • SidebarGroupAction - Action button for group (hidden when icon-only)
 *       • SidebarGroupContent - Content container for menu items
 *   • SidebarSeparator - Visual separator between sections
 *   • SidebarInput - Search or filter input field
 *   • SidebarFooter - Footer section with additional navigation
 *   • SidebarRail - Toggle button rail (visible on desktop when sidebar collapsed)
 * • SidebarInset - Main content area that adjusts for sidebar presence
 * • SidebarTrigger - Button to toggle sidebar visibility
 * • SidebarProvider - Context provider for sidebar state management
 * • SidebarMenuSkeleton - Loading skeleton for menu items
 *
 * @docSectionAccessibilityKeyboard
 * • Tab - Navigate through sidebar menu buttons
 * • Arrow Up/Down - Move focus to previous/next menu button
 * • B - Toggle sidebar (keyboard shortcut)
 * • Escape - Close sidebar on mobile
 *
 * @docSectionAccessibilityAria
 * • aria-label="Toggle Sidebar" on trigger and rail components
 * • data-sidebar attributes identify component structure for styling and accessibility
 * • role="navigation" implied through semantic structure
 *
 * @docSectionAccessibilityFocus
 * Focus follows keyboard navigation through menu buttons in document order. Sidebar is hidden from focus when collapsed to icon-only mode (menu items remain visible). On mobile, focus moves to sheet when opened and trap is maintained until closed.
 *
 * @exportAs root
 */
export function Sidebar({
  side = 'left',
  variant = 'sidebar',
  collapsible = 'offcanvas',
  className,
  children,
  ...props
}: SidebarProps) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  if (collapsible === 'none') {
    return (
      <div
        data-slot="sidebar"
        className={cn(
          'lsd:bg-sidebar lsd:text-sidebar-foreground lsd:flex lsd:h-full lsd:w-(--sidebar-width) lsd:flex-col',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-slot="sidebar"
          data-mobile="true"
          className="lsd:bg-sidebar lsd:text-sidebar-foreground lsd:w-(--sidebar-width) lsd:p-0 lsd:[&>button]:hidden"
          style={
            {
              '--sidebar-width': SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <SheetHeader className="lsd:sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className="lsd:flex lsd:h-full lsd:w-full lsd:flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div
      className="lsd:group lsd:peer lsd:text-sidebar-foreground lsd:hidden lsd:md:block"
      data-state={state}
      data-collapsible={state === 'collapsed' ? collapsible : ''}
      data-variant={variant}
      data-side={side}
      data-slot="sidebar"
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        data-slot="sidebar-gap"
        className={cn(
          'lsd:relative lsd:w-(--sidebar-width) lsd:bg-transparent lsd:transition-[width] lsd:duration-200 lsd:ease-linear',
          'lsd:group-data-[collapsible=offcanvas]:w-0',
          'lsd:group-data-[side=right]:rotate-180',
          variant === 'floating' || variant === 'inset'
            ? 'lsd:group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]'
            : 'lsd:group-data-[collapsible=icon]:w-(--sidebar-width-icon)'
        )}
      />
      <div
        data-slot="sidebar-container"
        className={cn(
          'lsd:fixed lsd:inset-y-0 lsd:z-10 lsd:hidden lsd:h-svh lsd:w-(--sidebar-width) lsd:transition-[left,right,width] lsd:duration-200 lsd:ease-linear lsd:md:flex',
          side === 'left'
            ? 'lsd:left-0 lsd:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
            : 'lsd:right-0 lsd:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
          // Adjust the padding for floating and inset variants.
          variant === 'floating' || variant === 'inset'
            ? 'lsd:p-(--lsd-spacing-smaller) lsd:group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]'
            : 'lsd:group-data-[collapsible=icon]:w-(--sidebar-width-icon) lsd:group-data-[side=left]:border-r lsd:group-data-[side=right]:border-l',
          className
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          className="lsd:bg-sidebar lsd:group-data-[variant=floating]:border-sidebar-border lsd:flex lsd:h-full lsd:w-full lsd:flex-col lsd:group-data-[variant=floating]:rounded-lg lsd:group-data-[variant=floating]:border lsd:group-data-[variant=floating]:shadow-sm"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

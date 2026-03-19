'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Typography,
} from '@nipsys/shadcn-lsd';
import { useRef } from 'react';
import { CodeExample } from '@/components/docs/CodeExample';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import { useIframeThemeSync } from '@/components/docs/useIframeThemeSync';

export default function SidebarPage() {
  const basicIframeRef = useRef<HTMLIFrameElement>(null);

  useIframeThemeSync(basicIframeRef);

  return (
    <DocsLayout>
      <PageHeader
        title="Sidebar"
        description="A composable, themeable and customizable sidebar component for navigation and content organization."
      />

      <PageContent>
        <PageSection title="About Sidebar">
          <Typography variant="body1" className="block">
            The Sidebar component provides a flexible navigation structure that can be customized
            with different variants, collapsible states, and content organization. It's designed to
            work seamlessly with the LSD design system and supports responsive layouts.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Sidebar components from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                code={`import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from '@nipsys/shadcn-lsd'`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Structure">
          <Typography variant="body1" className="mb-(--lsd-spacing-base)">
            A Sidebar component is composed of the following parts:
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>SidebarProvider</strong> - Handles collapsible state
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>Sidebar</strong> - The sidebar container
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>SidebarHeader</strong> - Sticky header at the top of the sidebar
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>SidebarContent</strong> - Scrollable content area
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>SidebarGroup</strong> - Section within the sidebar
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>SidebarGroupLabel</strong> - Label for a group
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>SidebarGroupContent</strong> - Content within a group
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>SidebarMenu</strong> - Menu container
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>SidebarMenuItem</strong> - Individual menu item
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>SidebarMenuButton</strong> - Button for menu items
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>SidebarMenuBadge</strong> - Badge for menu items
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>SidebarMenuSub</strong> - Submenu container
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>SidebarMenuSubItem</strong> - Submenu item
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>SidebarMenuSubButton</strong> - Submenu button
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>SidebarFooter</strong> - Sticky footer at the bottom of the sidebar
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>SidebarInset</strong> - Wrapper for main content when using inset variant
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>SidebarRail</strong> - Rail for toggling the sidebar
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>SidebarTrigger</strong> - Trigger button for the sidebar
          </Typography>
        </PageSection>

        <PageSection title="Usage">
          <Typography variant="body1">
            Basic usage of the Sidebar component with collapsible functionality.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Demo</CardTitle>
              <CardDescription>
                A sidebar that collapses to icons on larger screens, demonstrating the full sidebar
                structure with header, content groups, and footer.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <div className="aspect-video w-full overflow-hidden border">
                  <iframe
                    ref={basicIframeRef}
                    src="/examples/sidebar/basic"
                    className="size-full"
                    title="Sidebar Example"
                  />
                </div>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample
                      code={`'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
  Typography,
} from '@nipsys/shadcn-lsd';
import {
  AtomIcon,
  CalendarIcon,
  ChartLineIcon,
  FileIcon,
  FolderIcon,
  GearIcon,
  HouseIcon,
  StarIcon,
  TargetIcon,
  UserIcon,
} from '@phosphor-icons/react';
import Link from 'next/link';

export function SidebarBasicExample() {
  return (
    <SidebarProvider defaultOpen={true}>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <Link href="#">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <AtomIcon className="size-4" weight="duotone" />
                  </div>
                  <div className="flex flex-col gap-(--lsd-spacing-smaller) leading-none">
                    <span className="font-semibold">Your App</span>
                    <span className="text-xs">v1.0.0</span>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="#">
                      <HouseIcon weight="duotone" />
                      <span>Home</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="#">
                      <ChartLineIcon weight="duotone" />
                      <span>Dashboard</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="#">
                      <FolderIcon weight="duotone" />
                      <span>All Projects</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="#">
                      <StarIcon weight="duotone" />
                      <span>Favorites</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="#">
                      <TargetIcon weight="duotone" />
                      <span>Tags</span>
                    </Link>
                  </SidebarMenuButton>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <Link href="#">Design</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <Link href="#">Development</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <Link href="#">Marketing</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="#">
                  <UserIcon weight="duotone" />
                  <span>Profile</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="#">
                  <GearIcon weight="duotone" />
                  <span>Settings</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>

        <SidebarRail />
      </Sidebar>

      <SidebarInset>
        <main className="p-(--lsd-spacing-larger)">
          <div className="flex items-center gap-(--lsd-spacing-large)">
            <SidebarTrigger />
            <Typography variant="h3">Dashboard</Typography>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}`}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1" className="mb-(--lsd-spacing-base)">
            Sidebar component props and configuration options.
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>SidebarProvider</CardTitle>
                <CardDescription>
                  Provides the sidebar context to the Sidebar component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps&lt;&apos;div&apos;&gt;
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>defaultOpen:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>open:</strong> boolean (controlled)
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>onOpenChange:</strong> (open: boolean) =&gt; void
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> defaultOpen = true
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sidebar</CardTitle>
                <CardDescription>The main sidebar container</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps&lt;&apos;div&apos;&gt;
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>side:</strong> &apos;left&apos; | &apos;right&apos;
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>variant:</strong> &apos;sidebar&apos; | &apos;floating&apos; |
                  &apos;inset&apos;
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>collapsible:</strong> &apos;offcanvas&apos; | &apos;icon&apos; |
                  &apos;none&apos;
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> side=&apos;left&apos;, variant=&apos;sidebar&apos;,
                  collapsible=&apos;offcanvas&apos;
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>useSidebar</CardTitle>
                <CardDescription>Hook to control the sidebar</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Returns:</strong> SidebarContextProps
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>state:</strong> &apos;expanded&apos; | &apos;collapsed&apos;
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>open:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>setOpen:</strong> (open: boolean) =&gt; void
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>isMobile:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>toggleSidebar:</strong> () =&gt; void
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SidebarMenuButton</CardTitle>
                <CardDescription>Button for menu items</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps&lt;&apos;button&apos;&gt;
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>asChild:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>isActive:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>size:</strong> &apos;default&apos; | &apos;sm&apos; | &apos;lg&apos;
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> size=&apos;default&apos;
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Collapsible Options">
          <Typography variant="body1" className="mb-(--lsd-spacing-base)">
            The Sidebar component supports three collapsible modes:
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>offcanvas</CardTitle>
                <CardDescription>
                  A collapsible sidebar that slides in from the left or right
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2">
                  The sidebar slides in from the side when triggered, overlaying content.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>icon</CardTitle>
                <CardDescription>A sidebar that collapses to icons</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2">
                  The sidebar collapses to show only icons, maintaining navigation visibility.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>none</CardTitle>
                <CardDescription>A non-collapsible sidebar</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2">
                  The sidebar is always visible and cannot be collapsed.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1">
            The Sidebar component follows accessibility best practices.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Sidebar is fully keyboard accessible</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Tab</strong> - Navigate to the sidebar
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Shift + Tab</strong> - Navigate to previous element
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Cmd/Ctrl + B</strong> - Toggle sidebar (desktop)
              </Typography>
              <Typography variant="body2" className="block">
                • <strong>Enter/Space</strong> - Activate menu items
              </Typography>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>ARIA Attributes</CardTitle>
              <CardDescription>Proper ARIA attributes for screen readers</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Use <code>aria-label</code> for components without visible labels
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Use <code>aria-current</code> to indicate the active menu item
              </Typography>
              <Typography variant="body2" className="block">
                • Use <code>role="navigation"</code> for semantic meaning
              </Typography>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Focus States</CardTitle>
              <CardDescription>Visible focus indicators for keyboard users</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2">
                Components have visible focus states that follow the LSD design system's focus
                indicators, ensuring keyboard users can always see which element has focus.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>

        <PageNavigation
          previous={{ title: 'Menubar', href: '/components/menubar' }}
          next={{ title: 'Sonner', href: '/components/sonner' }}
        />
      </PageContent>
    </DocsLayout>
  );
}

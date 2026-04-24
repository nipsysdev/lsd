'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, Typography } from '@nipsys/lsd';
import { useRef } from 'react';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { CodeExample } from '@/components/docs/CodeExample';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { IframeExample } from '@/components/docs/IframeExample';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import { useSendThemeToIframes } from '@/components/docs/useSendIframes';
import { CODE as SidebarBasicCODE, SIZE as SidebarBasicSIZE } from '@/examples/sidebar/basic/page';

export default function SidebarPage() {
  const SidebarBasicIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(SidebarBasicIframeRef);

  return (
    <DocsLayout>
      <PageHeader
        title="Sidebar"
        description="Collapsible navigation panel with multiple variants and mobile support."
      />

      <PageContent>
        <PageSection title="About Sidebar">
          <Typography variant="body1" className="block">
            A collapsible navigation panel that displays navigation items on the left or right side
            of the screen. Supports sidebar, floating, and inset variants with offcanvas, icon-only,
            and no-collapse modes. On mobile, displays as a sheet overlay. Includes multiple
            sub-components for building complete sidebar layouts with headers, content, groups,
            menus, and footers.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Sidebar component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { Sidebar } from '@nipsys/lsd'

export default function MyComponent() {
  return <Sidebar />
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Usage">
          <Typography variant="body1">
            The simplest form of the component with default styling.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Basic</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={SidebarBasicIframeRef}
                size={SidebarBasicSIZE}
                src="/examples/sidebar/basic"
                title="Basic Example"
              />
              <CodeExample code={SidebarBasicCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Composition">
          <Card className="mt-(--lsd-spacing-base)">
            <CardContent className="pt-(--lsd-spacing-base)">
              <CodeBlock>
                {[
                  'Sidebar',
                  '├── SidebarHeader',
                  '│   └── SidebarMenu',
                  '├── SidebarContent',
                  '│   └── SidebarGroup',
                  '├── SidebarSeparator',
                  '├── SidebarInput',
                  '├── SidebarFooter',
                  '├── SidebarRail',
                  '├── SidebarInset',
                  '├── SidebarTrigger',
                  '├── SidebarProvider',
                  '└── SidebarMenuSkeleton',
                ]}
              </CodeBlock>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <div className="mt-(--lsd-spacing-large)">
            <Typography variant="h4" className="mb-(--lsd-spacing-base)">
              Sidebar
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base)">
              <Card>
                <CardHeader>
                  <CardTitle>side</CardTitle>
                  <CardDescription>
                    Side of the screen where the sidebar appears. Determines whether sidebar is
                    positioned on left or right side.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>"left" | "right"</code>
                  </Typography>
                  <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Options:</strong> left, right
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>variant</CardTitle>
                  <CardDescription>
                    Visual variant of the sidebar. Controls appearance: sidebar (default edge),
                    floating (with border and shadow), or inset (with inset margins).
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>"sidebar" | "floating" | "inset"</code>
                  </Typography>
                  <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Options:</strong> sidebar, floating, inset
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>collapsible</CardTitle>
                  <CardDescription>
                    Collapsible behavior of the sidebar. Controls how sidebar collapses: offcanvas
                    (slides out), icon (shows only icons), or none (no collapse).
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>"offcanvas" | "icon" | "none"</code>
                  </Typography>
                  <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Options:</strong> offcanvas, icon, none
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-(--lsd-spacing-large)">
            <Typography variant="h4" className="mb-(--lsd-spacing-base)">
              SidebarProvider
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base)">
              <Card>
                <CardHeader>
                  <CardTitle>defaultOpen</CardTitle>
                  <CardDescription>
                    Initial open state of the sidebar. Sets whether sidebar starts open or closed.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>boolean</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>open</CardTitle>
                  <CardDescription>
                    Controlled open state of the sidebar. Controls sidebar open state when used as
                    controlled component.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>boolean</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>onOpenChange</CardTitle>
                  <CardDescription>
                    Callback when sidebar open state changes. Called when user toggles sidebar
                    visibility.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>(open: boolean) =&gt; void</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-(--lsd-spacing-large)">
            <Typography variant="h4" className="mb-(--lsd-spacing-base)">
              SidebarMenuButton
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base)">
              <Card>
                <CardHeader>
                  <CardTitle>asChild</CardTitle>
                  <CardDescription>
                    Render as child component instead of button. When true, merges props with the
                    single child element.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>boolean</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>isActive</CardTitle>
                  <CardDescription>
                    Marks the menu button as active. Applies active styling to indicate current page
                    or selection.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>boolean</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>tooltip</CardTitle>
                  <CardDescription>
                    Tooltip to display on hover when sidebar is collapsed. Content shown in tooltip
                    or props to pass to TooltipContent.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong>{' '}
                    <code>
                      string | (TooltipContentProps &amp; React.RefAttributes&lt;HTMLDivElement&gt;
                      &amp; &#123; container?: HTMLElement; &#125;)
                    </code>
                  </Typography>
                  <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Options:</strong> string
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-(--lsd-spacing-large)">
            <Typography variant="h4" className="mb-(--lsd-spacing-base)">
              SidebarGroupLabel
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base)">
              <Card>
                <CardHeader>
                  <CardTitle>asChild</CardTitle>
                  <CardDescription>
                    Render as child component instead of div. When true, merges props with the
                    single child element.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>boolean</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-(--lsd-spacing-large)">
            <Typography variant="h4" className="mb-(--lsd-spacing-base)">
              SidebarGroupAction
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base)">
              <Card>
                <CardHeader>
                  <CardTitle>asChild</CardTitle>
                  <CardDescription>
                    Render as child component instead of button. When true, merges props with the
                    single child element.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>boolean</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-(--lsd-spacing-large)">
            <Typography variant="h4" className="mb-(--lsd-spacing-base)">
              SidebarMenuAction
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base)">
              <Card>
                <CardHeader>
                  <CardTitle>asChild</CardTitle>
                  <CardDescription>
                    Render as child component instead of button. When true, merges props with the
                    single child element.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>boolean</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>showOnHover</CardTitle>
                  <CardDescription>
                    Only show action button on hover. When true, action is hidden by default and
                    visible on hover/focus.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>boolean</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-(--lsd-spacing-large)">
            <Typography variant="h4" className="mb-(--lsd-spacing-base)">
              SidebarMenuSubButton
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base)">
              <Card>
                <CardHeader>
                  <CardTitle>asChild</CardTitle>
                  <CardDescription>
                    Render as child component instead of link. When true, merges props with the
                    single child element.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>boolean</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>size</CardTitle>
                  <CardDescription>
                    Size of the submenu button. Controls height and text size.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>"sm" | "md"</code>
                  </Typography>
                  <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Options:</strong> sm, md
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>isActive</CardTitle>
                  <CardDescription>
                    Marks the submenu button as active. Applies active styling to indicate current
                    page or selection.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>boolean</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-(--lsd-spacing-large)">
            <Typography variant="h4" className="mb-(--lsd-spacing-base)">
              SidebarMenuSkeleton
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base)">
              <Card>
                <CardHeader>
                  <CardTitle>showIcon</CardTitle>
                  <CardDescription>
                    Show icon placeholder in skeleton. When true, includes an icon placeholder
                    alongside the text skeleton.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>boolean</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1">
            The component follows accessibility best practices for screen readers and keyboard
            navigation.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Keyboard shortcuts and navigation</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Tab - Navigate through sidebar menu buttons
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Arrow Up/Down - Move focus to previous/next menu button
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • B - Toggle sidebar (keyboard shortcut)
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Escape - Close sidebar on mobile
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
                • aria-label="Toggle Sidebar" on trigger and rail components
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • data-sidebar attributes identify component structure for styling and accessibility
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • role="navigation" implied through semantic structure
              </Typography>
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Focus States</CardTitle>
              <CardDescription>Visible focus indicators for keyboard users</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Focus follows keyboard navigation through menu buttons in document order. Sidebar
                is hidden from focus when collapsed to icon-only mode (menu items remain visible).
                On mobile, focus moves to sheet when opened and trap is maintained until closed.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
        <PageNavigation
          previous={{
            title: 'Menubar',
            href: '/components/menubar',
          }}
          next={{
            title: 'Tabs',
            href: '/components/tabs',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}

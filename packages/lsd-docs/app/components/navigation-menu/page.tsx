'use client';

import {
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
import { IframeExample } from '@/components/docs/IframeExample';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import { useSendThemeToIframes } from '@/components/docs/useSendIframes';
import { CODE as BasicCode } from '@/examples/navigation-menu/basic/page';
import { CODE as PositioningCode } from '@/examples/navigation-menu/positioning-collapsible/page';

export default function NavigationMenuPage() {
  const navigationMenuBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const navigationMenuPositioningIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(navigationMenuBasicIframeRef, navigationMenuPositioningIframeRef);
  return (
    <DocsLayout>
      <PageHeader
        title="Navigation Menu"
        description="A navigation menu displays a list of links that are organized hierarchically, supporting nested menus and various positioning modes."
      />

      <PageContent>
        <PageSection title="About Navigation Menu">
          <Typography variant="body1">
            The Navigation Menu component is built on Radix UI and follows accessibility patterns.
            It provides a rich set of features including:
          </Typography>

          <ul className="list-disc list-inside space-y-(--lsd-spacing-smaller) mt-(--lsd-spacing-base)">
            <Typography variant="body2" as="li">
              Viewport mode for mobile/desktop responsive behavior
            </Typography>
            <Typography variant="body2" as="li">
              Nested menu support with unlimited nesting
            </Typography>
            <Typography variant="body2" as="li">
              Keyboard navigation (arrow keys, Tab, Enter, Escape)
            </Typography>
            <Typography variant="body2" as="li">
              Active state indicators
            </Typography>
            <Typography variant="body2" as="li">
              Custom positioning and animations
            </Typography>
            <Typography variant="body2" as="li">
              Trigger-style configuration
            </Typography>
            <Typography variant="body2" as="li">
              Icon integration support
            </Typography>
          </ul>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">
            The Navigation Menu component is included in @nipsys/shadcn-lsd. No additional
            installation steps are required.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { NavigationMenu } from '@nipsys/shadcn-lsd'`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Basic Usage">
          <Typography variant="body1">Here's a simple navigation menu with basic items:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Basic Navigation Menu</CardTitle>
              <CardDescription>
                A simple navigation menu with trigger and link items
              </CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={navigationMenuBasicIframeRef}
                size="sm"
                src="/examples/navigation-menu/basic"
                title="Basic"
              />
              <CodeExample code={BasicCode} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Positioning with Collapsible">
          <Typography variant="body1">Configure positioning and collapsible behavior:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Viewport Modes</CardTitle>
              <CardDescription>
                Toggle between viewport mode (for responsive behavior) and non-viewport mode
              </CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={navigationMenuPositioningIframeRef}
                size="sm"
                src="/examples/navigation-menu/positioning-collapsible"
                title="Positioning with Collapsible"
              />
              <CodeExample code={PositioningCode} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1">
            All available components and props for the Navigation Menu.
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>NavigationMenu</CardTitle>
                <CardDescription>
                  The root component that manages the navigation menu state
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> Component
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> viewport (boolean)
                </Typography>
                <Typography variant="body2" className="block">
                  Whether to render the viewport. Default is false (recommended for better
                  positioning control).
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>NavigationMenuList</CardTitle>
                <CardDescription>
                  Container for navigation menu items arranged in a horizontal list
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  <strong>Type:</strong> Component
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>NavigationMenuItem</CardTitle>
                <CardDescription>
                  A single navigation menu item that contains a trigger and optional content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  <strong>Type:</strong> Component
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>NavigationMenuTrigger</CardTitle>
                <CardDescription>
                  Button that opens/closes the navigation menu content. Displays a chevron icon.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  <strong>Type:</strong> Component
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>NavigationMenuContent</CardTitle>
                <CardDescription>
                  The dropdown content that appears when a navigation menu item is triggered
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  <strong>Type:</strong> Component
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>NavigationMenuViewport</CardTitle>
                <CardDescription>
                  The viewport that contains navigation menu content in viewport mode
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  <strong>Type:</strong> Component
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>NavigationMenuLink</CardTitle>
                <CardDescription>
                  A hyperlink within the navigation menu with styling for active states
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  <strong>Type:</strong> Component
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>NavigationMenuIndicator</CardTitle>
                <CardDescription>
                  Visual indicator showing the active navigation menu item as a small triangle
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  <strong>Type:</strong> Component
                </Typography>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>navigationMenuTriggerStyle</CardTitle>
                <CardDescription>
                  Utility function that generates the trigger style classes for custom styling
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  <strong>Type:</strong> Function
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Returns CSS classes to apply to custom trigger elements
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1">
            The Navigation Menu component follows WAI-ARIA patterns and is fully accessible:
          </Typography>

          <ul className="list-disc list-inside space-y-(--lsd-spacing-smaller) mt-(--lsd-spacing-base)">
            <Typography variant="body2" as="li">
              Full keyboard navigation support
            </Typography>
            <Typography variant="body2" as="li">
              Proper ARIA attributes
            </Typography>
            <Typography variant="body2" as="li">
              Focus management
            </Typography>
            <Typography variant="body2" as="li">
              Screen reader friendly
            </Typography>
            <Typography variant="body2" as="li">
              High contrast support
            </Typography>
          </ul>
        </PageSection>
      </PageContent>

      <PageNavigation
        previous={{
          title: 'Dropdown Menu',
          href: '/components/dropdown-menu',
        }}
        next={{
          title: 'Menubar',
          href: '/components/menubar',
        }}
      />
    </DocsLayout>
  );
}

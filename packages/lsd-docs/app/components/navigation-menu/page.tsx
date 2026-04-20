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
import {
  CODE as NavigationMenuBasicCODE,
  SIZE as NavigationMenuBasicSIZE,
} from '@/examples/navigation-menu/basic/page';
import {
  CODE as NavigationMenuPositioningCollapsibleCODE,
  SIZE as NavigationMenuPositioningCollapsibleSIZE,
} from '@/examples/navigation-menu/positioning-collapsible/page';

export default function NavigationMenuPage() {
  const NavigationMenuBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const NavigationMenuPositioningCollapsibleIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(
    NavigationMenuBasicIframeRef,
    NavigationMenuPositioningCollapsibleIframeRef
  );

  return (
    <DocsLayout>
      <PageHeader
        title="Navigation-menu"
        description="Displays a hierarchical list of links with dropdown menus."
      />

      <PageContent>
        <PageSection title="About NavigationMenu">
          <Typography variant="body1" className="block">
            A navigation menu component for displaying hierarchical links with dropdown menus.
            Supports viewport mode for mobile/desktop responsive behavior and submenus. Includes
            multiple sub-components for building complete navigation structures with triggers,
            content, and indicators.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the NavigationMenu component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { NavigationMenu } from '@nipsys/lsd'

export default function MyComponent() {
  return <NavigationMenu />
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
                ref={NavigationMenuBasicIframeRef}
                size={NavigationMenuBasicSIZE}
                src="/examples/navigation-menu/basic"
                title="Basic Example"
              />
              <CodeExample code={NavigationMenuBasicCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Additional features and capabilities of the component.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Positioning Collapsible</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={NavigationMenuPositioningCollapsibleIframeRef}
                size={NavigationMenuPositioningCollapsibleSIZE}
                src="/examples/navigation-menu/positioning-collapsible"
                title="Positioning Collapsible Example"
              />
              <CodeExample code={NavigationMenuPositioningCollapsibleCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Composition">
          <Card className="mt-(--lsd-spacing-base)">
            <CardContent className="pt-(--lsd-spacing-base)">
              <CodeBlock>
                {[
                  'NavigationMenu',
                  '├── NavigationMenuList',
                  '│   └── NavigationMenuItem',
                  '│   │   ├── NavigationMenuTrigger',
                  '│       └── NavigationMenuContent',
                  '├── NavigationMenuLink',
                  '├── NavigationMenuIndicator',
                  '└── NavigationMenuViewport',
                ]}
              </CodeBlock>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <div className="mt-(--lsd-spacing-large)">
            <Typography variant="h4" className="mb-(--lsd-spacing-base)">
              NavigationMenu
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base)">
              <Card>
                <CardHeader>
                  <CardTitle>viewport</CardTitle>
                  <CardDescription>
                    Enables viewport mode for mobile/desktop responsive behavior. When true, renders
                    NavigationMenuViewport for dropdown content positioning.
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
                • Tab - Navigate to navigation menu items
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Left/Right Arrow - Move between menu items
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Enter or Space - Open dropdown or activate link
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Escape - Close dropdown
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Up/Down Arrow - Navigate within dropdown content
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
                • role="navigation" identifies the component as navigation
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-expanded indicates if dropdown is open (on trigger)
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-controls links trigger to content
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-current marks active link
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
                • Focus moves to trigger when dropdown opens. Arrow keys navigate between items.
                Focus is managed within dropdown content and returns to trigger on close.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
        <PageNavigation
          previous={{
            title: 'Dropdown-menu',
            href: '/components/dropdown-menu',
          }}
          next={{
            title: 'Menubar',
            href: '/components/menubar',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}

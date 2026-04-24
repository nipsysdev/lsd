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
import { CODE as TabsBasicCODE, SIZE as TabsBasicSIZE } from '@/examples/tabs/basic/page';
import { CODE as TabsBorderedCODE, SIZE as TabsBorderedSIZE } from '@/examples/tabs/bordered/page';
import {
  CODE as TabsControlledCODE,
  SIZE as TabsControlledSIZE,
} from '@/examples/tabs/controlled/page';
import { CODE as TabsDisabledCODE, SIZE as TabsDisabledSIZE } from '@/examples/tabs/disabled/page';
import {
  CODE as TabsFullWidthCODE,
  SIZE as TabsFullWidthSIZE,
} from '@/examples/tabs/full-width/page';
import { CODE as TabsSizesCODE, SIZE as TabsSizesSIZE } from '@/examples/tabs/sizes/page';
import {
  CODE as TabsWithIconsCODE,
  SIZE as TabsWithIconsSIZE,
} from '@/examples/tabs/with-icons/page';

export default function TabsPage() {
  const TabsBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const TabsBorderedIframeRef = useRef<HTMLIFrameElement>(null);
  const TabsControlledIframeRef = useRef<HTMLIFrameElement>(null);
  const TabsDisabledIframeRef = useRef<HTMLIFrameElement>(null);
  const TabsFullWidthIframeRef = useRef<HTMLIFrameElement>(null);
  const TabsSizesIframeRef = useRef<HTMLIFrameElement>(null);
  const TabsWithIconsIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(
    TabsBasicIframeRef,
    TabsBorderedIframeRef,
    TabsControlledIframeRef,
    TabsDisabledIframeRef,
    TabsFullWidthIframeRef,
    TabsSizesIframeRef,
    TabsWithIconsIframeRef
  );

  return (
    <DocsLayout>
      <PageHeader
        title="Tabs"
        description="Displays content in separate panels that users can switch between"
      />

      <PageContent>
        <PageSection title="About Tabs">
          <Typography variant="body1" className="block">
            A set of layered sections of content displayed one at a time. Users navigate between
            panels using interactive triggers, with one panel visible at any time. Supports
            different sizes and full-width layout options.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Tabs component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { Tabs } from '@nipsys/lsd'

export default function MyComponent() {
  return <Tabs />
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
                ref={TabsBasicIframeRef}
                size={TabsBasicSIZE}
                src="/examples/tabs/basic"
                title="Basic Example"
              />
              <CodeExample code={TabsBasicCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Sizes">
          <Typography variant="body1">
            Component sizes for different contexts and visual hierarchy.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Sizes</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={TabsSizesIframeRef}
                size={TabsSizesSIZE}
                src="/examples/tabs/sizes"
                title="Sizes Example"
              />
              <CodeExample code={TabsSizesCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Additional features and capabilities of the component.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Bordered</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={TabsBorderedIframeRef}
                size={TabsBorderedSIZE}
                src="/examples/tabs/bordered"
                title="Bordered Example"
              />
              <CodeExample code={TabsBorderedCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Controlled</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={TabsControlledIframeRef}
                size={TabsControlledSIZE}
                src="/examples/tabs/controlled"
                title="Controlled Example"
              />
              <CodeExample code={TabsControlledCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Disabled</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={TabsDisabledIframeRef}
                size={TabsDisabledSIZE}
                src="/examples/tabs/disabled"
                title="Disabled Example"
              />
              <CodeExample code={TabsDisabledCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Full Width</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={TabsFullWidthIframeRef}
                size={TabsFullWidthSIZE}
                src="/examples/tabs/full-width"
                title="Full Width Example"
              />
              <CodeExample code={TabsFullWidthCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>With Icons</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={TabsWithIconsIframeRef}
                size={TabsWithIconsSIZE}
                src="/examples/tabs/with-icons"
                title="With Icons Example"
              />
              <CodeExample code={TabsWithIconsCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Composition">
          <Card className="mt-(--lsd-spacing-base)">
            <CardContent className="pt-(--lsd-spacing-base)">
              <CodeBlock>
                {['Tabs', '├── TabsList', '│   └── TabsTrigger', '└── TabsContent']}
              </CodeBlock>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <div className="mt-(--lsd-spacing-large)">
            <Typography variant="h4" className="mb-(--lsd-spacing-base)">
              Tabs
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base)">
              <Card>
                <CardHeader>
                  <CardTitle>bordered</CardTitle>
                  <CardDescription>
                    Adds border styling to tab content panels. When true, content panels display
                    with border styling.
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
                    Size of tabs and their contents. Controls the spacing and text size for tabs and
                    content panels.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>"sm" | "md" | "lg"</code>
                  </Typography>
                  <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Options:</strong> sm, md, lg
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>fullWidth</CardTitle>
                  <CardDescription>
                    Whether tabs and content span full width. When true, tabs and content stretch to
                    fill available width.
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
              TabsList
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base)">
              <Card>
                <CardHeader>
                  <CardTitle>fullWidth</CardTitle>
                  <CardDescription>
                    Whether list spans full width. Overrides the fullWidth prop from the Tabs
                    context.
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
              TabsTrigger
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base)">
              <Card>
                <CardHeader>
                  <CardTitle>fullWidth</CardTitle>
                  <CardDescription>
                    Whether trigger spans full width. Overrides the fullWidth prop from the Tabs
                    context.
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
                • Tab - Navigate to tabs component or move focus to active content
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • ArrowLeft/ArrowRight - Move focus to previous/next trigger (horizontal)
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • ArrowUp/ArrowDown - Move focus to previous/next trigger (vertical)
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Home - Move focus to first trigger
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • End - Move focus to last trigger
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
                • role="tablist" is added to TabsList
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • role="tab" is added to each TabsTrigger
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • role="tabpanel" is added to each TabsContent
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-selected indicates active state on triggers
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-controls links triggers to their content panels
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-labelledby links content panels to their triggers
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
                • Focus moves between triggers using arrow keys in the list orientation.
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • ArrowLeft/Right for horizontal orientation, ArrowUp/Down for vertical.
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Home/End jump to first/last trigger. When a trigger is focused, Tab moves
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • to the active content panel.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
        <PageNavigation
          previous={{
            title: 'Sidebar',
            href: '/components/sidebar',
          }}
          next={{
            title: 'Alert',
            href: '/components/alert',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}

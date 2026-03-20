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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Typography,
} from '@nipsys/shadcn-lsd';
import { ChartLineUpIcon, GearIcon, HouseIcon } from '@phosphor-icons/react';
import { useRef } from 'react';
import { CodeExample } from '@/components/docs/CodeExample';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { IframeExample } from '@/components/docs/IframeExample';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import { useIframeThemeSync } from '@/components/docs/useIframeThemeSync';
import { CODE as TABS_BASIC_CODE } from '@/examples/tabs/basic/TabsBasicExample';
import { CODE as TABS_CONTROLLED_CODE } from '@/examples/tabs/controlled/TabsControlledExample';

export default function TabsPage() {
  const tabsBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const tabsControlledIframeRef = useRef<HTMLIFrameElement>(null);

  useIframeThemeSync(tabsBasicIframeRef, tabsControlledIframeRef);

  return (
    <DocsLayout>
      <PageHeader
        title="Tabs"
        description="Organized content switcher with multiple sizes and layout options"
      />

      <PageContent>
        <PageSection title="About Tabs">
          <Typography variant="body1" className="block">
            Tabs are a set of layered sections of content, known as tab panels, that display one
            panel at a time. They help organize content into separate views while keeping all
            content accessible within the same context.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Tabs components from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                code={`import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@nipsys/shadcn-lsd'

export default function MyComponent() {
  return (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content 1</TabsContent>
      <TabsContent value="tab2">Content 2</TabsContent>
    </Tabs>
  )
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Sizes">
          <Typography variant="body1">
            Tabs come in three sizes to fit different contexts and layouts.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>All Sizes</CardTitle>
              <CardDescription>From small to large</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
                <Tabs defaultValue="tab1" size="sm">
                  <TabsList>
                    <TabsTrigger value="tab1">Small</TabsTrigger>
                    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1">
                    <Typography variant="body1" className="block">
                      Small tab content
                    </Typography>
                  </TabsContent>
                  <TabsContent value="tab2">
                    <Typography variant="body1" className="block">
                      Small tab content 2
                    </Typography>
                  </TabsContent>
                  <TabsContent value="tab3">
                    <Typography variant="body1" className="block">
                      Small tab content 3
                    </Typography>
                  </TabsContent>
                </Tabs>

                <Tabs defaultValue="tab1" size="md">
                  <TabsList>
                    <TabsTrigger value="tab1">Medium</TabsTrigger>
                    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1">
                    <Typography variant="body1" className="block">
                      Medium tab content
                    </Typography>
                  </TabsContent>
                  <TabsContent value="tab2">
                    <Typography variant="body1" className="block">
                      Medium tab content 2
                    </Typography>
                  </TabsContent>
                  <TabsContent value="tab3">
                    <Typography variant="body1" className="block">
                      Medium tab content 3
                    </Typography>
                  </TabsContent>
                </Tabs>

                <Tabs defaultValue="tab1" size="lg">
                  <TabsList>
                    <TabsTrigger value="tab1">Large</TabsTrigger>
                    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1">
                    <Typography variant="body1" className="block">
                      Large tab content
                    </Typography>
                  </TabsContent>
                  <TabsContent value="tab2">
                    <Typography variant="body1" className="block">
                      Large tab content 2
                    </Typography>
                  </TabsContent>
                  <TabsContent value="tab3">
                    <Typography variant="body1" className="block">
                      Large tab content 3
                    </Typography>
                  </TabsContent>
                </Tabs>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample
                      code={`<Tabs defaultValue="tab1" size="sm">
  <TabsList>
    <TabsTrigger value="tab1">Small</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Small tab content</TabsContent>
  <TabsContent value="tab2">Small tab content 2</TabsContent>
  <TabsContent value="tab3">Small tab content 3</TabsContent>
</Tabs>

<Tabs defaultValue="tab1" size="md">
  <TabsList>
    <TabsTrigger value="tab1">Medium</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Medium tab content</TabsContent>
  <TabsContent value="tab2">Medium tab content 2</TabsContent>
  <TabsContent value="tab3">Medium tab content 3</TabsContent>
</Tabs>

<Tabs defaultValue="tab1" size="lg">
  <TabsList>
    <TabsTrigger value="tab1">Large</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Large tab content</TabsContent>
  <TabsContent value="tab2">Large tab content 2</TabsContent>
  <TabsContent value="tab3">Large tab content 3</TabsContent>
</Tabs>`}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Additional features like full width, bordered content, icons, disabled states, and
            controlled components.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Basic Usage</CardTitle>
              <CardDescription>Simple uncontrolled tabs with default value</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={tabsBasicIframeRef}
                size="sm"
                src="/examples/tabs/basic"
                title="Tabs Basic Example"
              />
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={TABS_BASIC_CODE} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Controlled Component</CardTitle>
              <CardDescription>Control the active tab with state</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={tabsControlledIframeRef}
                size="sm"
                src="/examples/tabs/controlled"
                title="Tabs Controlled Example"
              />
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={TABS_CONTROLLED_CODE} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Full Width</CardTitle>
              <CardDescription>Tabs that span the full width of their container</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <Tabs defaultValue="tab1" fullWidth>
                  <TabsList>
                    <TabsTrigger value="tab1">Overview</TabsTrigger>
                    <TabsTrigger value="tab2">Details</TabsTrigger>
                    <TabsTrigger value="tab3">Reviews</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1">
                    <Typography variant="body1" className="block">
                      Overview content goes here
                    </Typography>
                  </TabsContent>
                  <TabsContent value="tab2">
                    <Typography variant="body1" className="block">
                      Details content goes here
                    </Typography>
                  </TabsContent>
                  <TabsContent value="tab3">
                    <Typography variant="body1" className="block">
                      Reviews content goes here
                    </Typography>
                  </TabsContent>
                </Tabs>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample
                      code={`<Tabs defaultValue="tab1" fullWidth>
  <TabsList>
    <TabsTrigger value="tab1">Overview</TabsTrigger>
    <TabsTrigger value="tab2">Details</TabsTrigger>
    <TabsTrigger value="tab3">Reviews</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Overview content goes here</TabsContent>
  <TabsContent value="tab2">Details content goes here</TabsContent>
  <TabsContent value="tab3">Reviews content goes here</TabsContent>
</Tabs>`}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Bordered Content</CardTitle>
              <CardDescription>Add borders around tab content areas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <Tabs defaultValue="tab1" bordered>
                  <TabsList>
                    <TabsTrigger value="tab1">Profile</TabsTrigger>
                    <TabsTrigger value="tab2">Billing</TabsTrigger>
                    <TabsTrigger value="tab3">Notifications</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1">
                    <Typography variant="body1" className="block">
                      Profile information with border
                    </Typography>
                  </TabsContent>
                  <TabsContent value="tab2">
                    <Typography variant="body1" className="block">
                      Billing information with border
                    </Typography>
                  </TabsContent>
                  <TabsContent value="tab3">
                    <Typography variant="body1" className="block">
                      Notification settings with border
                    </Typography>
                  </TabsContent>
                </Tabs>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample
                      code={`<Tabs defaultValue="tab1" bordered>
  <TabsList>
    <TabsTrigger value="tab1">Profile</TabsTrigger>
    <TabsTrigger value="tab2">Billing</TabsTrigger>
    <TabsTrigger value="tab3">Notifications</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Profile information with border</TabsContent>
  <TabsContent value="tab2">Billing information with border</TabsContent>
  <TabsContent value="tab3">Notification settings with border</TabsContent>
</Tabs>`}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>With Icons</CardTitle>
              <CardDescription>Add icons to tab triggers for visual context</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
                <Tabs defaultValue="home" size="sm">
                  <TabsList>
                    <TabsTrigger value="home">
                      <HouseIcon weight="duotone" />
                      Home
                    </TabsTrigger>
                    <TabsTrigger value="analytics">
                      <ChartLineUpIcon weight="duotone" />
                      Analytics
                    </TabsTrigger>
                    <TabsTrigger value="settings">
                      <GearIcon weight="duotone" />
                      Settings
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="home">
                    <Typography variant="body1" className="block">
                      Home page content
                    </Typography>
                  </TabsContent>
                  <TabsContent value="analytics">
                    <Typography variant="body1" className="block">
                      Analytics dashboard content
                    </Typography>
                  </TabsContent>
                  <TabsContent value="settings">
                    <Typography variant="body1" className="block">
                      Settings configuration content
                    </Typography>
                  </TabsContent>
                </Tabs>

                <Tabs defaultValue="home" size="md">
                  <TabsList>
                    <TabsTrigger value="home">
                      <HouseIcon weight="duotone" />
                      Home
                    </TabsTrigger>
                    <TabsTrigger value="analytics">
                      <ChartLineUpIcon weight="duotone" />
                      Analytics
                    </TabsTrigger>
                    <TabsTrigger value="settings">
                      <GearIcon weight="duotone" />
                      Settings
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="home">
                    <Typography variant="body1" className="block">
                      Home page content
                    </Typography>
                  </TabsContent>
                  <TabsContent value="analytics">
                    <Typography variant="body1" className="block">
                      Analytics dashboard content
                    </Typography>
                  </TabsContent>
                  <TabsContent value="settings">
                    <Typography variant="body1" className="block">
                      Settings configuration content
                    </Typography>
                  </TabsContent>
                </Tabs>

                <Tabs defaultValue="home" size="lg">
                  <TabsList>
                    <TabsTrigger value="home">
                      <HouseIcon weight="duotone" />
                      Home
                    </TabsTrigger>
                    <TabsTrigger value="analytics">
                      <ChartLineUpIcon weight="duotone" />
                      Analytics
                    </TabsTrigger>
                    <TabsTrigger value="settings">
                      <GearIcon weight="duotone" />
                      Settings
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="home">
                    <Typography variant="body1" className="block">
                      Home page content
                    </Typography>
                  </TabsContent>
                  <TabsContent value="analytics">
                    <Typography variant="body1" className="block">
                      Analytics dashboard content
                    </Typography>
                  </TabsContent>
                  <TabsContent value="settings">
                    <Typography variant="body1" className="block">
                      Settings configuration content
                    </Typography>
                  </TabsContent>
                </Tabs>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample
                      code={`<Tabs defaultValue="home" size="sm">
  <TabsList>
    <TabsTrigger value="home">
      <HouseIcon weight="duotone" />
      Home
    </TabsTrigger>
    <TabsTrigger value="analytics">
      <ChartLineUpIcon weight="duotone" />
      Analytics
    </TabsTrigger>
    <TabsTrigger value="settings">
      <GearIcon weight="duotone" />
      Settings
    </TabsTrigger>
  </TabsList>
  <TabsContent value="home">Home page content</TabsContent>
  <TabsContent value="analytics">Analytics dashboard content</TabsContent>
  <TabsContent value="settings">Settings configuration content</TabsContent>
</Tabs>

<Tabs defaultValue="home" size="md">
  <TabsList>
    <TabsTrigger value="home">
      <HouseIcon weight="duotone" />
      Home
    </TabsTrigger>
    <TabsTrigger value="analytics">
      <ChartLineUpIcon weight="duotone" />
      Analytics
    </TabsTrigger>
    <TabsTrigger value="settings">
      <GearIcon weight="duotone" />
      Settings
    </TabsTrigger>
  </TabsList>
  <TabsContent value="home">Home page content</TabsContent>
  <TabsContent value="analytics">Analytics dashboard content</TabsContent>
  <TabsContent value="settings">Settings configuration content</TabsContent>
</Tabs>

<Tabs defaultValue="home" size="lg">
  <TabsList>
    <TabsTrigger value="home">
      <HouseIcon weight="duotone" />
      Home
    </TabsTrigger>
    <TabsTrigger value="analytics">
      <ChartLineUpIcon weight="duotone" />
      Analytics
    </TabsTrigger>
    <TabsTrigger value="settings">
      <GearIcon weight="duotone" />
      Settings
    </TabsTrigger>
  </TabsList>
  <TabsContent value="home">Home page content</TabsContent>
  <TabsContent value="analytics">Analytics dashboard content</TabsContent>
  <TabsContent value="settings">Settings configuration content</TabsContent>
</Tabs>`}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Disabled Tabs</CardTitle>
              <CardDescription>Disable individual tab triggers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <Tabs defaultValue="tab1">
                  <TabsList>
                    <TabsTrigger value="tab1">Active Tab</TabsTrigger>
                    <TabsTrigger value="tab2">Another Tab</TabsTrigger>
                    <TabsTrigger value="tab3" disabled>
                      Disabled Tab
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1">
                    <Typography variant="body1" className="block">
                      Active tab content
                    </Typography>
                  </TabsContent>
                  <TabsContent value="tab2">
                    <Typography variant="body1" className="block">
                      Another tab content
                    </Typography>
                  </TabsContent>
                  <TabsContent value="tab3">
                    <Typography variant="body1" className="block">
                      Disabled tab content
                    </Typography>
                  </TabsContent>
                </Tabs>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample
                      code={`<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Active Tab</TabsTrigger>
    <TabsTrigger value="tab2">Another Tab</TabsTrigger>
    <TabsTrigger value="tab3" disabled>
      Disabled Tab
    </TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Active tab content</TabsContent>
  <TabsContent value="tab2">Another tab content</TabsContent>
  <TabsContent value="tab3">Disabled tab content</TabsContent>
</Tabs>`}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1">All available props for the Tabs components.</Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>defaultValue</CardTitle>
                <CardDescription>The initial active tab value</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> string
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  The value of the tab that should be active when the component first renders
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>value</CardTitle>
                <CardDescription>The currently active tab value (controlled)</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> string
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Use with onValueChange for controlled components
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>onValueChange</CardTitle>
                <CardDescription>Callback when the active tab changes</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> (value: string) =&gt; void
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Called when a tab is clicked or activated
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>size</CardTitle>
                <CardDescription>The size of the tabs</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> 'sm' | 'md' | 'lg'
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> sm, md, lg
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> md
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>fullWidth</CardTitle>
                <CardDescription>Make tabs span full width of container</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  When true, tab triggers will expand to fill available space
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>bordered</CardTitle>
                <CardDescription>Add borders around tab content areas</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Adds visual separation between tab list and content
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>className</CardTitle>
                <CardDescription>Additional CSS classes to apply</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  <strong>Type:</strong> string
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Merges with existing tabs classes
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>...props</CardTitle>
                <CardDescription>Standard Radix UI Tabs props</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  <strong>Type:</strong>{' '}
                  <code>React.ComponentProps&lt;typeof TabsPrimitive.Root&gt;</code>
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  All standard Radix UI Tabs Root props are supported
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>TabsTrigger value</CardTitle>
                <CardDescription>The unique identifier for the tab trigger</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> string
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Must match the value of the corresponding TabsContent
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>TabsTrigger disabled</CardTitle>
                <CardDescription>Disable the tab trigger</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Prevents the tab from being activated
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>TabsContent value</CardTitle>
                <CardDescription>The unique identifier for the tab content</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> string
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Must match the value of the corresponding TabsTrigger
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>TabsList className</CardTitle>
                <CardDescription>Additional CSS classes for the list</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  <strong>Type:</strong> string
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Merges with existing list classes
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1">
            The Tabs component follows accessibility best practices.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Tabs are fully keyboard accessible</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Tab</strong> - Navigate to the tabs list
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Arrow Left / Right</strong> - Navigate between tab triggers
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Home</strong> - Navigate to the first tab trigger
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>End</strong> - Navigate to the last tab trigger
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Enter / Space</strong> - Activate the focused tab trigger
              </Typography>
              <Typography variant="body2" className="block">
                • <strong>Shift + Tab</strong> - Navigate to previous focusable element
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
                • Tab triggers have <code>role="tab"</code> and are properly labeled
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Tab content has <code>role="tabpanel"</code> and is associated with its trigger
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Active tab is indicated with <code>aria-selected="true"</code>
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Disabled tabs have <code>aria-disabled="true"</code>
              </Typography>
              <Typography variant="body2" className="block">
                • Use <code>aria-label</code> for tabs without visible text labels
              </Typography>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Focus States</CardTitle>
              <CardDescription>Visible focus indicators for keyboard users</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block">
                Tabs have visible focus states that follow the LSD design system's focus indicators,
                ensuring keyboard users can always see which element has focus.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
      </PageContent>

      <PageNavigation
        previous={{
          title: 'Sidebar',
          href: '/components/sidebar',
        }}
        next={{
          title: 'Alert Dialog',
          href: '/components/alert-dialog',
        }}
      />
    </DocsLayout>
  );
}

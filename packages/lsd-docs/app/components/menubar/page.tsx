// First 95 lines of menubar page.tsx (keep) + new footer

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
} from '@nipsys/shadcn-lsd';
import { useRef } from 'react';
import { CodeExample } from '@/components/docs/CodeExample';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { IframeExample } from '@/components/docs/IframeExample';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';
import { CODE as DestructiveCode } from '@/examples/menubar/destructive/page';
import { CODE as InsetCode } from '@/examples/menubar/inset/page';
import { CODE as LabelsCode } from '@/examples/menubar/labels-separators/page';
import { CODE as MENUBAR_CODE } from '@/examples/menubar/page';
import { CODE as ShortcutsCode } from '@/examples/menubar/shortcuts/page';
import { CODE as SubmenusCode } from '@/examples/menubar/submenus/page';

export default function MenubarPage() {
  const menubarIframeRef = useRef<HTMLIFrameElement>(null);
  const submenusIframeRef = useRef<HTMLIFrameElement>(null);
  const destructiveIframeRef = useRef<HTMLIFrameElement>(null);
  const labelsIframeRef = useRef<HTMLIFrameElement>(null);
  const insetIframeRef = useRef<HTMLIFrameElement>(null);
  const shortcutsIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes();

  return (
    <DocsLayout>
      <PageHeader
        title="Menubar"
        description="Dropdown menu bar component with keyboard navigation and submenu support"
      />

      <PageContent>
        <PageSection title="About Menubar">
          <p className="block">
            Menubars are horizontal navigation menus that display dropdown menus when triggered.
            They provide a familiar pattern for organizing commands and actions in applications.
          </p>
        </PageSection>

        <PageSection title="Installation">
          <p>Import the Menubar components from LSD:</p>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                code={`import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from '@nipsys/shadcn-lsd'

export default function MyComponent() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New</MenubarItem>
          <MenubarItem>Open</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <p>
            Comprehensive features including submenus, destructive items, labels, separators, and
            keyboard navigation.
          </p>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Basic Menubar</CardTitle>
              <CardDescription>Simple menubar with dropdown menus</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={menubarIframeRef}
                size="md"
                src="/examples/menubar"
                title="Menubar Example"
              />
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={MENUBAR_CODE} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Submenus</CardTitle>
              <CardDescription>Nested menus for hierarchical organization</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={submenusIframeRef}
                size="md"
                src="/examples/menubar/submenus"
                title="Submenus Example"
              />
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={SubmenusCode} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Destructive Items</CardTitle>
              <CardDescription>Dangerous actions with destructive styling</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={destructiveIframeRef}
                size="md"
                src="/examples/menubar/destructive"
                title="Destructive Items Example"
              />
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={DestructiveCode} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Labels and Separators</CardTitle>
              <CardDescription>Organize items with labels and visual separators</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={labelsIframeRef}
                size="md"
                src="/examples/menubar/labels-separators"
                title="Labels and Separators Example"
              />
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={LabelsCode} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Inset Items</CardTitle>
              <CardDescription>Items with inset padding for visual hierarchy</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={insetIframeRef}
                size="md"
                src="/examples/menubar/inset"
                title="Inset Items Example"
              />
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={InsetCode} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Shortcuts</CardTitle>
              <CardDescription>Display keyboard shortcuts for quick access</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={shortcutsIframeRef}
                size="md"
                src="/examples/menubar/shortcuts"
                title="Keyboard Shortcuts Example"
              />
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={ShortcutsCode} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <p>All available props for the Menubar components.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>Menubar</CardTitle>
                <CardDescription>Root menubar container component</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentType
                </p>
                <p className="mt-(--lsd-spacing-smaller)">Container for all menubar menus</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>MenubarMenu</CardTitle>
                <CardDescription>Individual menu item in the menubar</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentType
                </p>
                <p className="mt-(--lsd-spacing-smaller)">Wraps a trigger and its content</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>MenubarTrigger</CardTitle>
                <CardDescription>Button that opens the menu</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentType
                </p>
                <p className="mt-(--lsd-spacing-smaller)">Click to open the dropdown menu</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>MenubarContent</CardTitle>
                <CardDescription>Dropdown menu content container</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentType
                </p>
                <p className="mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> align (start, center, end)
                </p>
                <p className="mb-(--lsd-spacing-smaller)">
                  <strong>Default:</strong> start
                </p>
                <p className="mt-(--lsd-spacing-smaller)">Contains all menu items</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>MenubarItem</CardTitle>
                <CardDescription>Individual menu item</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentType
                </p>
                <p className="mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> variant (default, destructive)
                </p>
                <p className="mb-(--lsd-spacing-smaller)">
                  <strong>Default:</strong> default
                </p>
                <p className="mt-(--lsd-spacing-smaller)">Clickable action item</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>MenubarLabel</CardTitle>
                <CardDescription>Non-interactive label text</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentType
                </p>
                <p className="mt-(--lsd-spacing-smaller)">Used to group related items</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>MenubarSeparator</CardTitle>
                <CardDescription>Visual separator line</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentType
                </p>
                <p className="mt-(--lsd-spacing-smaller)">Divides menu items visually</p>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <p>The Menubar component follows accessibility best practices.</p>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Full keyboard support for all interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="block mb-(--lsd-spacing-smaller)">
                • <strong>Tab</strong> - Navigate to the menubar
              </p>
              <p className="block mb-(--lsd-spacing-smaller)">
                • <strong>Arrow Keys</strong> - Navigate between menu items
              </p>
              <p className="block mb-(--lsd-spacing-smaller)">
                • <strong>Enter / Space</strong> - Select menu item
              </p>
              <p className="block mb-(--lsd-spacing-smaller)">
                • <strong>Escape</strong> - Close menu
              </p>
              <p className="block">
                • <strong>Shift + Tab</strong> - Navigate to previous focusable element
              </p>
            </CardContent>
          </Card>
        </PageSection>

        <PageNavigation
          previous={{
            title: 'Navigation Menu',
            href: '/components/navigation-menu',
          }}
          next={{
            title: 'Sidebar',
            href: '/components/sidebar',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}

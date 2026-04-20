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
import { CODE as MenubarBasicCODE, SIZE as MenubarBasicSIZE } from '@/examples/menubar/basic/page';
import {
  CODE as MenubarCheckboxItemsCODE,
  SIZE as MenubarCheckboxItemsSIZE,
} from '@/examples/menubar/checkbox-items/page';
import {
  CODE as MenubarDestructiveCODE,
  SIZE as MenubarDestructiveSIZE,
} from '@/examples/menubar/destructive/page';
import { CODE as MenubarInsetCODE, SIZE as MenubarInsetSIZE } from '@/examples/menubar/inset/page';
import {
  CODE as MenubarLabelsSeparatorsCODE,
  SIZE as MenubarLabelsSeparatorsSIZE,
} from '@/examples/menubar/labels-separators/page';
import {
  CODE as MenubarRadioItemsCODE,
  SIZE as MenubarRadioItemsSIZE,
} from '@/examples/menubar/radio-items/page';
import {
  CODE as MenubarShortcutsCODE,
  SIZE as MenubarShortcutsSIZE,
} from '@/examples/menubar/shortcuts/page';
import {
  CODE as MenubarSubmenusCODE,
  SIZE as MenubarSubmenusSIZE,
} from '@/examples/menubar/submenus/page';

export default function MenubarPage() {
  const MenubarBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const MenubarCheckboxItemsIframeRef = useRef<HTMLIFrameElement>(null);
  const MenubarDestructiveIframeRef = useRef<HTMLIFrameElement>(null);
  const MenubarInsetIframeRef = useRef<HTMLIFrameElement>(null);
  const MenubarLabelsSeparatorsIframeRef = useRef<HTMLIFrameElement>(null);
  const MenubarRadioItemsIframeRef = useRef<HTMLIFrameElement>(null);
  const MenubarShortcutsIframeRef = useRef<HTMLIFrameElement>(null);
  const MenubarSubmenusIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(
    MenubarBasicIframeRef,
    MenubarCheckboxItemsIframeRef,
    MenubarDestructiveIframeRef,
    MenubarInsetIframeRef,
    MenubarLabelsSeparatorsIframeRef,
    MenubarRadioItemsIframeRef,
    MenubarShortcutsIframeRef,
    MenubarSubmenusIframeRef
  );

  return (
    <DocsLayout>
      <PageHeader
        title="Menubar"
        description="Displays a persistent menu bar with dropdown menus for organizing commands and navigation."
      />

      <PageContent>
        <PageSection title="About Menubar">
          <Typography variant="body1" className="block">
            A container for displaying menu items that can be expanded to show additional options.
            Supports sub-menus, separators, labels, and various item types including standard items,
            checkboxes, and radio groups.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Menubar component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { Menubar } from '@nipsys/lsd'

export default function MyComponent() {
  return <Menubar />
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
                ref={MenubarBasicIframeRef}
                size={MenubarBasicSIZE}
                src="/examples/menubar/basic"
                title="Basic Example"
              />
              <CodeExample code={MenubarBasicCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Variants">
          <Typography variant="body1">
            Component variants for different visual styles and use cases.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Destructive</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={MenubarDestructiveIframeRef}
                size={MenubarDestructiveSIZE}
                src="/examples/menubar/destructive"
                title="Destructive Example"
              />
              <CodeExample code={MenubarDestructiveCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Additional features and capabilities of the component.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Checkbox Items</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={MenubarCheckboxItemsIframeRef}
                size={MenubarCheckboxItemsSIZE}
                src="/examples/menubar/checkbox-items"
                title="Checkbox Items Example"
              />
              <CodeExample code={MenubarCheckboxItemsCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Inset</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={MenubarInsetIframeRef}
                size={MenubarInsetSIZE}
                src="/examples/menubar/inset"
                title="Inset Example"
              />
              <CodeExample code={MenubarInsetCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Labels Separators</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={MenubarLabelsSeparatorsIframeRef}
                size={MenubarLabelsSeparatorsSIZE}
                src="/examples/menubar/labels-separators"
                title="Labels Separators Example"
              />
              <CodeExample code={MenubarLabelsSeparatorsCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Radio Items</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={MenubarRadioItemsIframeRef}
                size={MenubarRadioItemsSIZE}
                src="/examples/menubar/radio-items"
                title="Radio Items Example"
              />
              <CodeExample code={MenubarRadioItemsCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Shortcuts</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={MenubarShortcutsIframeRef}
                size={MenubarShortcutsSIZE}
                src="/examples/menubar/shortcuts"
                title="Shortcuts Example"
              />
              <CodeExample code={MenubarShortcutsCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Submenus</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={MenubarSubmenusIframeRef}
                size={MenubarSubmenusSIZE}
                src="/examples/menubar/submenus"
                title="Submenus Example"
              />
              <CodeExample code={MenubarSubmenusCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Composition">
          <Card className="mt-(--lsd-spacing-base)">
            <CardContent className="pt-(--lsd-spacing-base)">
              <CodeBlock>
                {['Menubar', '└── MenubarMenu', '    ├── MenubarTrigger', '    └── MenubarPortal']}
              </CodeBlock>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <div className="flex flex-col gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>Radix UI Documentation</CardTitle>
                <CardDescription>Menubar wraps Radix UI primitives</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://www.radix-ui.com/primitives/docs/components/menubar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View Radix UI Menubar documentation →
                </a>
              </CardContent>
            </Card>
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
                • Tab - Navigate to menubar triggers
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Arrow Left/Right - Navigate between menu triggers
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Enter, Space, or Arrow Down - Open menu
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Arrow Up/Down - Navigate menu items
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Enter or Space - Select item
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Escape - Close menu
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Arrow Right - Open submenu from item
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Arrow Left - Return to parent menu
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
                • role="menubar" identifies the container
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • role="menu" identifies dropdown content
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • role="menuitem" for standard items
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • role="menuitemcheckbox" for checkbox items
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • role="menuitemradio" for radio items
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-expanded indicates open/closed state
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-checked indicates checkbox/radio state
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-orientation="horizontal" on menubar
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
                • Focus moves between triggers with arrow keys. When menu opens, focus moves to
                first item. Focus is trapped in open menu. Focus returns to trigger when closing.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
        <PageNavigation
          previous={{
            title: 'Navigation-menu',
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

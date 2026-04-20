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
  CODE as DropdownMenuBasicCODE,
  SIZE as DropdownMenuBasicSIZE,
} from '@/examples/dropdown-menu/basic/page';
import {
  CODE as DropdownMenuCheckboxItemsCODE,
  SIZE as DropdownMenuCheckboxItemsSIZE,
} from '@/examples/dropdown-menu/checkbox-items/page';
import {
  CODE as DropdownMenuRadioItemsCODE,
  SIZE as DropdownMenuRadioItemsSIZE,
} from '@/examples/dropdown-menu/radio-items/page';
import {
  CODE as DropdownMenuShortcutsCODE,
  SIZE as DropdownMenuShortcutsSIZE,
} from '@/examples/dropdown-menu/shortcuts/page';
import {
  CODE as DropdownMenuSubmenusCODE,
  SIZE as DropdownMenuSubmenusSIZE,
} from '@/examples/dropdown-menu/submenus/page';

export default function DropdownMenuPage() {
  const DropdownMenuBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const DropdownMenuCheckboxItemsIframeRef = useRef<HTMLIFrameElement>(null);
  const DropdownMenuRadioItemsIframeRef = useRef<HTMLIFrameElement>(null);
  const DropdownMenuShortcutsIframeRef = useRef<HTMLIFrameElement>(null);
  const DropdownMenuSubmenusIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(
    DropdownMenuBasicIframeRef,
    DropdownMenuCheckboxItemsIframeRef,
    DropdownMenuRadioItemsIframeRef,
    DropdownMenuShortcutsIframeRef,
    DropdownMenuSubmenusIframeRef
  );

  return (
    <DocsLayout>
      <PageHeader
        title="Dropdown-menu"
        description="Displays a menu of actions or options triggered by a button."
      />

      <PageContent>
        <PageSection title="About DropdownMenu">
          <Typography variant="body1" className="block">
            A context menu that shows interactive items with full keyboard navigation. Supports
            submenus, checkboxes, radio items, labels, and separators.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the DropdownMenu component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { DropdownMenu } from '@nipsys/lsd'

export default function MyComponent() {
  return <DropdownMenu />
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
                ref={DropdownMenuBasicIframeRef}
                size={DropdownMenuBasicSIZE}
                src="/examples/dropdown-menu/basic"
                title="Basic Example"
              />
              <CodeExample code={DropdownMenuBasicCODE} />
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
                ref={DropdownMenuCheckboxItemsIframeRef}
                size={DropdownMenuCheckboxItemsSIZE}
                src="/examples/dropdown-menu/checkbox-items"
                title="Checkbox Items Example"
              />
              <CodeExample code={DropdownMenuCheckboxItemsCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Radio Items</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={DropdownMenuRadioItemsIframeRef}
                size={DropdownMenuRadioItemsSIZE}
                src="/examples/dropdown-menu/radio-items"
                title="Radio Items Example"
              />
              <CodeExample code={DropdownMenuRadioItemsCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Shortcuts</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={DropdownMenuShortcutsIframeRef}
                size={DropdownMenuShortcutsSIZE}
                src="/examples/dropdown-menu/shortcuts"
                title="Shortcuts Example"
              />
              <CodeExample code={DropdownMenuShortcutsCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Submenus</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={DropdownMenuSubmenusIframeRef}
                size={DropdownMenuSubmenusSIZE}
                src="/examples/dropdown-menu/submenus"
                title="Submenus Example"
              />
              <CodeExample code={DropdownMenuSubmenusCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Composition">
          <Card className="mt-(--lsd-spacing-base)">
            <CardContent className="pt-(--lsd-spacing-base)">
              <CodeBlock>
                {[
                  'DropdownMenu',
                  '├── DropdownMenuTrigger',
                  '└── DropdownMenuPortal',
                  '    └── DropdownMenuContent',
                ]}
              </CodeBlock>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <div className="flex flex-col gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>Radix UI Documentation</CardTitle>
                <CardDescription>DropdownMenu wraps Radix UI primitives</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://www.radix-ui.com/primitives/docs/components/dropdown-menu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View Radix UI DropdownMenu documentation →
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
                • Tab - Navigate to the menu trigger
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Enter or Space - Open the menu or select focused item
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Arrow Up/Down - Navigate between menu items
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Arrow Right - Open submenu from trigger
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Arrow Left - Close submenu
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Escape - Close the menu
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Home/End - Jump to first/last menu item
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Letter keys - Typeahead to navigate to items
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
                • role="menu" identifies the component as a menu
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-expanded indicates open/closed state on trigger
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-controls links trigger to menu content
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-haspopup="menu" announces menu functionality
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-activedescendant tracks focused item
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-orientation="vertical" for vertical menus
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-disabled marks disabled items
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
                • Focus moves to first menu item when menu opens. Focus returns to trigger when menu
                closes. Focus is trapped within the menu when open and wraps when navigating past
                first/last item.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
        <PageNavigation
          previous={{
            title: 'Command',
            href: '/components/command',
          }}
          next={{
            title: 'Navigation-menu',
            href: '/components/navigation-menu',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}

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
import { CODE as CommandBasicCODE, SIZE as CommandBasicSIZE } from '@/examples/command/basic/page';
import {
  CODE as CommandDialogCODE,
  SIZE as CommandDialogSIZE,
} from '@/examples/command/dialog/page';
import {
  CODE as CommandGroupsCODE,
  SIZE as CommandGroupsSIZE,
} from '@/examples/command/groups/page';
import {
  CODE as CommandShortcutsCODE,
  SIZE as CommandShortcutsSIZE,
} from '@/examples/command/shortcuts/page';

export default function CommandPage() {
  const CommandBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const CommandDialogIframeRef = useRef<HTMLIFrameElement>(null);
  const CommandGroupsIframeRef = useRef<HTMLIFrameElement>(null);
  const CommandShortcutsIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(
    CommandBasicIframeRef,
    CommandDialogIframeRef,
    CommandGroupsIframeRef,
    CommandShortcutsIframeRef
  );

  return (
    <DocsLayout>
      <PageHeader
        title="Command"
        description="Command palette for searching and selecting items."
      />

      <PageContent>
        <PageSection title="About Command">
          <Typography variant="body1" className="block">
            A command palette component for searching and selecting items with keyboard navigation
            and filtering. Used for command menus, search interfaces, and quick navigation.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Command component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { Command } from '@nipsys/lsd'

export default function MyComponent() {
  return <Command />
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
                ref={CommandBasicIframeRef}
                size={CommandBasicSIZE}
                src="/examples/command/basic"
                title="Basic Example"
              />
              <CodeExample code={CommandBasicCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Additional features and capabilities of the component.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Dialog</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={CommandDialogIframeRef}
                size={CommandDialogSIZE}
                src="/examples/command/dialog"
                title="Dialog Example"
              />
              <CodeExample code={CommandDialogCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Groups</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={CommandGroupsIframeRef}
                size={CommandGroupsSIZE}
                src="/examples/command/groups"
                title="Groups Example"
              />
              <CodeExample code={CommandGroupsCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Shortcuts</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={CommandShortcutsIframeRef}
                size={CommandShortcutsSIZE}
                src="/examples/command/shortcuts"
                title="Shortcuts Example"
              />
              <CodeExample code={CommandShortcutsCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Composition">
          <Card className="mt-(--lsd-spacing-base)">
            <CardContent className="pt-(--lsd-spacing-base)">
              <CodeBlock>
                {[
                  'Command',
                  '├── CommandInput',
                  '├── CommandList',
                  '│   ├── CommandEmpty',
                  '│   ├── CommandGroup',
                  '│   └── CommandSeparator',
                  '└── CommandDialog',
                ]}
              </CodeBlock>
            </CardContent>
          </Card>
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
                • Arrow Up/Down - Navigate through command items
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Enter - Select the currently focused item
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Escape - Close the command palette
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Tab - Move focus to interactive elements
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
                • role="listbox" is applied by cmdk for the list
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • role="option" is applied to each command item
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-selected indicates the currently selected item
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-invalid indicates validation errors
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
                • Focus moves through items using arrow keys
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Visible focus indicators show current selection
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Focus is managed within the command palette
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
        <PageNavigation
          previous={{
            title: 'Textarea',
            href: '/components/textarea',
          }}
          next={{
            title: 'Dropdown-menu',
            href: '/components/dropdown-menu',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}

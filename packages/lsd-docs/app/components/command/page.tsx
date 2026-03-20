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
import { IframeExample } from '@/components/docs/IframeExample';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import { useIframeThemeSync } from '@/components/docs/useIframeThemeSync';
import { CODE as CommandBasicExampleCODE } from '@/examples/command/basic/CommandBasicExample';
import { CODE as CommandDialogExampleCODE } from '@/examples/command/dialog/CommandDialogExample';
import { CODE as CommandGroupsExampleCODE } from '@/examples/command/groups/CommandGroupsExample';
import { CODE as CommandShortcutsExampleCODE } from '@/examples/command/shortcuts/CommandShortcutsExample';

export default function CommandPage() {
  const commandBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const commandGroupsIframeRef = useRef<HTMLIFrameElement>(null);
  const commandShortcutsIframeRef = useRef<HTMLIFrameElement>(null);
  const commandDialogIframeRef = useRef<HTMLIFrameElement>(null);

  useIframeThemeSync(
    commandBasicIframeRef,
    commandGroupsIframeRef,
    commandShortcutsIframeRef,
    commandDialogIframeRef
  );

  return (
    <DocsLayout>
      <PageHeader
        title="Command"
        description="A command palette component for quick navigation and action execution with keyboard support."
      />

      <PageContent>
        <PageSection title="About Command">
          <Typography variant="body1" className="block">
            The Command component provides a powerful command palette interface that enables users
            to quickly search, navigate, and execute actions using keyboard shortcuts. It supports
            grouping, filtering, keyboard navigation, and can be displayed inline or in a dialog.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Command components from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                code={`import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@nipsys/shadcn-lsd'`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Structure">
          <Typography variant="body1" className="mb-(--lsd-spacing-base)">
            A Command component is composed of the following parts:
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>Command</strong> - The main command palette container
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>CommandDialog</strong> - Dialog wrapper for the command palette
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>CommandInput</strong> - Search input field
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>CommandList</strong> - Scrollable list container
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>CommandGroup</strong> - Group of related items
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>CommandItem</strong> - Individual command item
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>CommandEmpty</strong> - Empty state when no results found
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>CommandSeparator</strong> - Visual separator between groups
          </Typography>
          <Typography variant="body2" className="block">
            • <strong>CommandShortcut</strong> - Keyboard shortcut display
          </Typography>
        </PageSection>

        <PageSection title="Usage">
          <Typography variant="body1">
            Basic usage of the Command component with search and selection.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Demo</CardTitle>
              <CardDescription>
                A simple command palette with search functionality and selectable items.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <IframeExample
                  ref={commandBasicIframeRef}
                  size="md"
                  src="/examples/command/basic"
                  title="Command Basic Example"
                />
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={CommandBasicExampleCODE} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Groups">
          <Typography variant="body1">
            Organize commands into logical groups with headings and separators.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Grouped Commands</CardTitle>
              <CardDescription>
                Commands organized into groups with headings and visual separators.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <IframeExample
                  ref={commandGroupsIframeRef}
                  size="md"
                  src="/examples/command/groups"
                  title="Command Groups Example"
                />
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={CommandGroupsExampleCODE} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Shortcuts">
          <Typography variant="body1">
            Display keyboard shortcuts alongside commands for quick reference.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>With Shortcuts</CardTitle>
              <CardDescription>
                Commands with keyboard shortcuts displayed on the right side.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <IframeExample
                  ref={commandShortcutsIframeRef}
                  size="md"
                  src="/examples/command/shortcuts"
                  title="Command Shortcuts Example"
                />
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={CommandShortcutsExampleCODE} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Dialog">
          <Typography variant="body1">
            Display the command palette in a dialog overlay for a modal experience.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Command Dialog</CardTitle>
              <CardDescription>
                A command palette displayed in a dialog with overlay and backdrop.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <IframeExample
                  ref={commandDialogIframeRef}
                  size="md"
                  src="/examples/command/dialog"
                  title="Command Dialog Example"
                />
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample code={CommandDialogExampleCODE} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1" className="mb-(--lsd-spacing-base)">
            Command component props and configuration options.
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>Command</CardTitle>
                <CardDescription>The main command palette container</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> Full height and width, flex column layout
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CommandDialog</CardTitle>
                <CardDescription>Dialog wrapper for the command palette</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps &{' '}
                  {'{ title?: string; description?: string; showCloseButton?: boolean }'}
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>title:</strong> string (default: "Command Palette")
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>description:</strong> string (default: "Search for a command to run...")
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>showCloseButton:</strong> boolean (default: true)
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>open:</strong> boolean (controlled)
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CommandInput</CardTitle>
                <CardDescription>Search input field</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>placeholder:</strong> string
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> Includes search icon
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CommandList</CardTitle>
                <CardDescription>Scrollable list container</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> Max height 300px, scrollable
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CommandGroup</CardTitle>
                <CardDescription>Group of related items</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>heading:</strong> string
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> Styled heading with padding
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CommandItem</CardTitle>
                <CardDescription>Individual command item</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>disabled:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>value:</strong> string
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> Selectable with keyboard navigation
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CommandEmpty</CardTitle>
                <CardDescription>Empty state when no results found</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> Centered text with padding
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CommandSeparator</CardTitle>
                <CardDescription>Visual separator between groups</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> Horizontal line with border color
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CommandShortcut</CardTitle>
                <CardDescription>Keyboard shortcut display</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> Right-aligned, small text, tracking-wide
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1">
            The Command component follows WAI-ARIA patterns for command palettes and is fully
            accessible via keyboard.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Full keyboard support for command palette</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Tab</strong> - Navigate to the command input
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Arrow Down / Arrow Up</strong> - Navigate through command items
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Enter</strong> - Select the highlighted command
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Escape</strong> - Close the command dialog
              </Typography>
              <Typography variant="body2" className="block">
                • <strong>Home / End</strong> - Jump to first or last item
              </Typography>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>ARIA Attributes</CardTitle>
              <CardDescription>Proper ARIA support for screen readers</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Use <code>aria-label</code> for command inputs without visible labels
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Use <code>aria-describedby</code> to link to supporting text
              </Typography>
              <Typography variant="body2" className="block">
                • Use <code>aria-disabled</code> for disabled command items
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
                Components have visible focus states that follow the LSD design system's focus
                indicators, ensuring keyboard users can always see which element has focus.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>

        <PageNavigation
          previous={{ title: 'Switch', href: '/components/switch' }}
          next={{ title: 'Menubar', href: '/components/menubar' }}
        />
      </PageContent>
    </DocsLayout>
  );
}

'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, Typography } from '@nipsys/lsd';
import { useRef } from 'react';
import { CodeExample } from '@/components/docs/CodeExample';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { IframeExample } from '@/components/docs/IframeExample';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import { useSendThemeToIframes } from '@/components/docs/useSendIframes';
import { CODE as BasicCode } from '@/examples/dropdown-menu/basic/page';
import { CODE as CheckboxCode } from '@/examples/dropdown-menu/checkbox-items/page';
import { CODE as RadioCode } from '@/examples/dropdown-menu/radio-items/page';
import { CODE as ShortcutsCode } from '@/examples/dropdown-menu/shortcuts/page';
import { CODE as SubmenusCode } from '@/examples/dropdown-menu/submenus/page';

export default function DropdownMenuPage() {
  const dropdownBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const dropdownShortcutsIframeRef = useRef<HTMLIFrameElement>(null);
  const dropdownSubmenusIframeRef = useRef<HTMLIFrameElement>(null);
  const dropdownCheckboxIframeRef = useRef<HTMLIFrameElement>(null);
  const dropdownRadioIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(
    dropdownBasicIframeRef,
    dropdownShortcutsIframeRef,
    dropdownSubmenusIframeRef,
    dropdownCheckboxIframeRef,
    dropdownRadioIframeRef
  );
  return (
    <DocsLayout>
      <PageHeader
        title="Dropdown Menu"
        description="A dropdown menu displays a list of actions or options in a persistent menu that appears when triggered."
      />

      <PageContent>
        <PageSection title="About Dropdown Menu">
          <Typography variant="body1" className="block">
            The Dropdown Menu component is built on Radix UI and follows accessibility patterns. It
            provides a rich set of features including keyboard navigation, submenu support, checkbox
            items, radio group items, shortcuts display, inset option for aligned labels, and
            destructive variant for dangerous actions.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">
            The Dropdown Menu component is included in @nipsys/lsd. No additional installation steps
            are required.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  Button,
} from '@nipsys/lsd';`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Usage">
          <Typography variant="body1">Here's a simple dropdown menu with basic items:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Basic</CardTitle>
              <CardDescription>Simple dropdown menu with basic items</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={dropdownBasicIframeRef}
                size="md"
                src="/examples/dropdown-menu/basic"
                title="Basic Dropdown Menu"
              />
              <CodeExample code={BasicCode} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Shortcuts">
          <Typography variant="body1">Display keyboard shortcuts for menu items:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>With Shortcuts</CardTitle>
              <CardDescription>Menu items with keyboard shortcut hints</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={dropdownShortcutsIframeRef}
                size="md"
                src="/examples/dropdown-menu/shortcuts"
                title="Dropdown Menu with Shortcuts"
              />
              <CodeExample code={ShortcutsCode} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Submenus">
          <Typography variant="body1">
            Create nested dropdown menus for hierarchical actions:
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Nested Menus</CardTitle>
              <CardDescription>Dropdown menu with submenus</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={dropdownSubmenusIframeRef}
                size="md"
                src="/examples/dropdown-menu/submenus"
                title="Dropdown Menu with Submenus"
              />
              <CodeExample code={SubmenusCode} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Checkbox Items">
          <Typography variant="body1">Use checkbox items for boolean toggles:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Checkbox Items</CardTitle>
              <CardDescription>Menu items with checkboxes for multi-select</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={dropdownCheckboxIframeRef}
                size="md"
                src="/examples/dropdown-menu/checkbox-items"
                title="Dropdown Menu with Checkbox Items"
              />
              <CodeExample code={CheckboxCode} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Radio Group Items">
          <Typography variant="body1">Use radio group items for exclusive selection:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Radio Items</CardTitle>
              <CardDescription>Menu items with radio buttons for single-select</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={dropdownRadioIframeRef}
                size="md"
                src="/examples/dropdown-menu/radio-items"
                title="Dropdown Menu with Radio Items"
              />
              <CodeExample code={RadioCode} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1">
            All available components and props for the Dropdown Menu.
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>DropdownMenu</CardTitle>
                <CardDescription>The root dropdown menu component</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Extends:</strong> DropdownMenuPrimitive.Root from
                  @radix-ui/react-dropdown-menu
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>DropdownMenuTrigger</CardTitle>
                <CardDescription>The button that opens the dropdown menu</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Extends:</strong> DropdownMenuPrimitive.Trigger
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>DropdownMenuContent</CardTitle>
                <CardDescription>The container for dropdown menu items</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> DropdownMenuContentProps
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> sideOffset
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> sideOffset: 4
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>DropdownMenuItem</CardTitle>
                <CardDescription>A selectable item in the dropdown menu</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> DropdownMenuItemProps
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> inset, variant
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Default:</strong> inset: false, variant: 'default'
                </Typography>
                <Typography variant="body2" className="block">
                  variant options: default, destructive
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>DropdownMenuCheckboxItem</CardTitle>
                <CardDescription>A dropdown menu item with checkbox</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  Shows a checkmark when checked. Extends DropdownMenuPrimitive.CheckboxItem.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>DropdownMenuGroup</CardTitle>
                <CardDescription>Groups menu items together</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  Groups menu items together without adding visual separators.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>DropdownMenuRadioGroup</CardTitle>
                <CardDescription>Groups radio button items together</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  Groups radio button items together for exclusive selection.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>DropdownMenuRadioItem</CardTitle>
                <CardDescription>A radio button item for exclusive selection</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  A radio button item for exclusive selection within a DropdownMenuRadioGroup.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>DropdownMenuLabel</CardTitle>
                <CardDescription>A non-interactive label for organizing content</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> DropdownMenuLabelProps
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Options:</strong> inset
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>DropdownMenuSeparator</CardTitle>
                <CardDescription>A visual divider between sections</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  A visual divider between dropdown menu sections.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>DropdownMenuShortcut</CardTitle>
                <CardDescription>Displays keyboard shortcuts</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  Displays keyboard shortcuts for menu items. Aligned to the right.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>DropdownMenuSub</CardTitle>
                <CardDescription>A submenu container</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  A submenu container for nested dropdown menus.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>DropdownMenuSubTrigger</CardTitle>
                <CardDescription>A menu item that opens a submenu</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> DropdownMenuSubTriggerProps
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Options:</strong> inset
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>DropdownMenuSubContent</CardTitle>
                <CardDescription>The container for submenu items</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  The container for submenu items. Similar to DropdownMenuContent but without
                  portal.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1">
            The Dropdown Menu component follows the WAI-ARIA combobox pattern and is keyboard
            accessible by default:
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>ArrowDown</strong> / <strong>ArrowUp</strong> - Navigate items
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>ArrowRight</strong> - Open submenu
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>ArrowLeft</strong> - Close submenu
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Enter</strong> / <strong>Space</strong> - Activate item
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Escape</strong> - Close menu
              </Typography>
              <Typography variant="body2" className="block">
                • <strong>Tab</strong> - Move focus to next element
              </Typography>
            </CardContent>
          </Card>
        </PageSection>

        <PageNavigation
          previous={{ title: 'Command', href: '/components/command' }}
          next={{ title: 'Navigation Menu', href: '/components/navigation-menu' }}
        />
      </PageContent>
    </DocsLayout>
  );
}

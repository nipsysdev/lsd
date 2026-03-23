'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@nipsys/shadcn-lsd';
import { CodeExample } from '@/components/docs/CodeExample';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { IframeExample } from '@/components/docs/IframeExample';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import { CODE as BasicCode } from '@/examples/dropdown-menu/basic/page';
import { CODE as CheckboxCode } from '@/examples/dropdown-menu/checkbox-items/page';
import { CODE as RadioCode } from '@/examples/dropdown-menu/radio-items/page';
import { CODE as ShortcutsCode } from '@/examples/dropdown-menu/shortcuts/page';
import { CODE as SubmenusCode } from '@/examples/dropdown-menu/submenus/page';

export default function DropdownMenuPage() {
  return (
    <DocsLayout>
      <PageHeader
        title="Dropdown Menu"
        description="A dropdown menu displays a list of actions or options in a persistent menu that appears when triggered."
      />

      <PageContent>
        <PageSection title="About Dropdown Menu">
          <div className="space-y-4">
            <p className="lsd:text-lsd-text-secondary">
              The Dropdown Menu component is built on Radix UI and follows accessibility patterns.
              It provides a rich set of features including:
            </p>
            <ul className="list-disc list-inside space-y-2 lsd:text-lsd-text-secondary">
              <li>Keyboard navigation (arrow keys, Tab, Enter, Escape)</li>
              <li>Submenu support with unlimited nesting</li>
              <li>Checkbox items for boolean selections</li>
              <li>Radio group items for exclusive selection</li>
              <li>Shortcuts display for keyboard commands</li>
              <li>Inset option for aligned labels</li>
              <li>Destructive variant for dangerous actions</li>
            </ul>
          </div>
        </PageSection>

        <PageSection title="Installation">
          <p className="lsd:text-lsd-text-secondary">
            The Dropdown Menu component is included in @nipsys/shadcn-lsd. No additional
            installation steps are required.
          </p>
        </PageSection>

        <PageSection title="Basic Usage">
          <p className="mb-4 lsd:text-lsd-text-secondary">
            Here's a simple dropdown menu with basic items:
          </p>
          <IframeExample size="md" src="/examples/dropdown-menu/basic" title="Basic" />
          <Accordion type="single" collapsible>
            <AccordionItem value="code">
              <AccordionTrigger>View code</AccordionTrigger>
              <AccordionContent>
                <CodeExample code={BasicCode} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </PageSection>

        <PageSection title="Shortcuts">
          <p className="mb-4 lsd:text-lsd-text-secondary">
            Display keyboard shortcuts for menu items:
          </p>
          <IframeExample size="md" src="/examples/dropdown-menu/shortcuts" title="Shortcuts" />
          <Accordion type="single" collapsible>
            <AccordionItem value="code">
              <AccordionTrigger>View code</AccordionTrigger>
              <AccordionContent>
                <CodeExample code={ShortcutsCode} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </PageSection>

        <PageSection title="Submenus">
          <p className="mb-4 lsd:text-lsd-text-secondary">
            Create nested dropdown menus for hierarchical actions:
          </p>
          <IframeExample size="md" src="/examples/dropdown-menu/submenus" title="Submenus" />
          <Accordion type="single" collapsible>
            <AccordionItem value="code">
              <AccordionTrigger>View code</AccordionTrigger>
              <AccordionContent>
                <CodeExample code={SubmenusCode} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </PageSection>

        <PageSection title="Checkbox Items">
          <p className="mb-4 lsd:text-lsd-text-secondary">
            Use checkbox items for boolean toggles:
          </p>
          <IframeExample
            size="md"
            src="/examples/dropdown-menu/checkbox-items"
            title="Checkbox Items"
          />
          <Accordion type="single" collapsible>
            <AccordionItem value="code">
              <AccordionTrigger>View code</AccordionTrigger>
              <AccordionContent>
                <CodeExample code={CheckboxCode} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </PageSection>

        <PageSection title="Radio Group Items">
          <p className="mb-4 lsd:text-lsd-text-secondary">
            Use radio group items for exclusive selection:
          </p>
          <IframeExample size="md" src="/examples/dropdown-menu/radio-items" title="Radio Items" />
          <Accordion type="single" collapsible>
            <AccordionItem value="code">
              <AccordionTrigger>View code</AccordionTrigger>
              <AccordionContent>
                <CodeExample code={RadioCode} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </PageSection>

        <PageSection title="API Reference">
          <div className="space-y-6">
            <div>
              <h3 className="lsd:text-xl lsd:font-medium mb-2">DropdownMenu</h3>
              <p className="mb-2 lsd:text-lsd-text-secondary">The root dropdown menu component.</p>
              <p className="text-sm lsd:text-lsd-text-secondary">
                Extends DropdownMenuPrimitive.Root from @radix-ui/react-dropdown-menu.
              </p>
            </div>

            <div>
              <h3 className="lsd:text-xl lsd:font-medium mb-2">DropdownMenuTrigger</h3>
              <p className="mb-2 lsd:text-lsd-text-secondary">
                The button or element that opens the dropdown menu.
              </p>
              <p className="text-sm lsd:text-lsd-text-secondary">
                Extends DropdownMenuPrimitive.Trigger.
              </p>
            </div>

            <div>
              <h3 className="lsd:text-xl lsd:font-medium mb-2">DropdownMenuContent</h3>
              <p className="mb-2 lsd:text-lsd-text-secondary">
                The container for dropdown menu items. Handles positioning and animations.
              </p>
              <table className="w-full text-left lsd:border-collapse">
                <thead>
                  <tr className="lsd:border-b lsd:border-[var(--lsd-border)]">
                    <th className="lsd:py-2 lsd:px-3">Prop</th>
                    <th className="lsd:py-2 lsd:px-3">Type</th>
                    <th className="lsd:py-2 lsd:px-3">Default</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="lsd:border-b lsd:border-[var(--lsd-border)]">
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">sideOffset</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">number</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">4</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="lsd:text-xl lsd:font-medium mb-2">DropdownMenuItem</h3>
              <p className="mb-2 lsd:text-lsd-text-secondary">
                A selectable item in the dropdown menu.
              </p>
              <table className="w-full text-left lsd:border-collapse">
                <thead>
                  <tr className="lsd:border-b lsd:border-[var(--lsd-border)]">
                    <th className="lsd:py-2 lsd:px-3">Prop</th>
                    <th className="lsd:py-2 lsd:px-3">Type</th>
                    <th className="lsd:py-2 lsd:px-3">Default</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="lsd:border-b lsd:border-[var(--lsd-border)]">
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">inset</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">boolean</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">false</td>
                  </tr>
                  <tr className="lsd:border-b lsd:border-[var(--lsd-border)]">
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">variant</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">default | destructive</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">default</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="lsd:text-xl lsd:font-medium mb-2">DropdownMenuCheckboxItem</h3>
              <p className="lsd:text-lsd-text-secondary">
                A dropdown menu item with checkbox indicating selection state. Shows a checkmark
                when checked.
              </p>
            </div>

            <div>
              <h3 className="lsd:text-xl lsd:font-medium mb-2">DropdownMenuGroup</h3>
              <p className="lsd:text-lsd-text-secondary">
                Groups menu items together without adding visual separators.
              </p>
            </div>

            <div>
              <h3 className="lsd:text-xl lsd:font-medium mb-2">DropdownMenuRadioGroup</h3>
              <p className="lsd:text-lsd-text-secondary">
                Groups radio button items together for exclusive selection.
              </p>
            </div>

            <div>
              <h3 className="lsd:text-xl lsd:font-medium mb-2">DropdownMenuRadioItem</h3>
              <p className="lsd:text-lsd-text-secondary">
                A radio button item for exclusive selection within a DropdownMenuRadioGroup.
              </p>
            </div>

            <div>
              <h3 className="lsd:text-xl lsd:font-medium mb-2">DropdownMenuLabel</h3>
              <p className="mb-2 lsd:text-lsd-text-secondary">
                A non-interactive label for organizing dropdown menu content.
              </p>
              <table className="w-full text-left lsd:border-collapse">
                <thead>
                  <tr className="lsd:border-b lsd:border-[var(--lsd-border)]">
                    <th className="lsd:py-2 lsd:px-3">Prop</th>
                    <th className="lsd:py-2 lsd:px-3">Type</th>
                    <th className="lsd:py-2 lsd:px-3">Default</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="lsd:border-b lsd:border-[var(--lsd-border)]">
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">inset</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">boolean</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">false</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="lsd:text-xl lsd:font-medium mb-2">DropdownMenuSeparator</h3>
              <p className="lsd:text-lsd-text-secondary">
                A visual divider between dropdown menu sections.
              </p>
            </div>

            <div>
              <h3 className="lsd:text-xl lsd:font-medium mb-2">DropdownMenuShortcut</h3>
              <p className="lsd:text-lsd-text-secondary">
                Displays keyboard shortcuts for menu items. Aligned to the right.
              </p>
            </div>

            <div>
              <h3 className="lsd:text-xl lsd:font-medium mb-2">DropdownMenuSub</h3>
              <p className="lsd:text-lsd-text-secondary">
                A submenu container for nested dropdown menus.
              </p>
            </div>

            <div>
              <h3 className="lsd:text-xl lsd:font-medium mb-2">DropdownMenuSubTrigger</h3>
              <p className="mb-2 lsd:text-lsd-text-secondary">A menu item that opens a submenu.</p>
              <table className="w-full text-left lsd:border-collapse">
                <thead>
                  <tr className="lsd:border-b lsd:border-[var(--lsd-border)]">
                    <th className="lsd:py-2 lsd:px-3">Prop</th>
                    <th className="lsd:py-2 lsd:px-3">Type</th>
                    <th className="lsd:py-2 lsd:px-3">Default</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="lsd:border-b lsd:border-[var(--lsd-border)]">
                    <td className="lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm">inset</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">boolean</td>
                    <td className="lsd:py-2 lsd:px-3 lsd:text-sm">false</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="lsd:text-xl lsd:font-medium mb-2">DropdownMenuSubContent</h3>
              <p className="lsd:text-lsd-text-secondary">
                The container for submenu items. Similar to DropdownMenuContent but without portal.
              </p>
            </div>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <div className="space-y-4">
            <p className="mb-4 lsd:text-lsd-text-secondary">
              The Dropdown Menu component follows the WAI-ARIA combobox pattern and is keyboard
              accessible by default:
            </p>
            <ul className="list-disc list-inside space-y-2 lsd:text-lsd-text-secondary">
              <li>
                <kbd className="lsd:px-2 lsd:py-1 lsd:bg-[var(--lsd-surface)] lsd:border lsd:border-[var(--lsd-border)] lsd:rounded lsd:text-sm">
                  ArrowDown
                </kbd>{' '}
                /{' '}
                <kbd className="lsd:px-2 lsd:py-1 lsd:bg-[var(--lsd-surface)] lsd:border lsd:border-[var(--lsd-border)] lsd:rounded lsd:text-sm">
                  ArrowUp
                </kbd>{' '}
                - Navigate items
              </li>
              <li>
                <kbd className="lsd:px-2 lsd:py-1 lsd:bg-[var(--lsd-surface)] lsd:border lsd:border-[var(--lsd-border)] lsd:rounded lsd:text-sm">
                  ArrowRight
                </kbd>{' '}
                - Open submenu
              </li>
              <li>
                <kbd className="lsd:px-2 lsd:py-1 lsd:bg-[var(--lsd-surface)] lsd:border lsd:border-[var(--lsd-border)] lsd:rounded lsd:text-sm">
                  ArrowLeft
                </kbd>{' '}
                - Close submenu
              </li>
              <li>
                <kbd className="lsd:px-2 lsd:py-1 lsd:bg-[var(--lsd-surface)] lsd:border lsd:border-[var(--lsd-border)] lsd:rounded lsd:text-sm">
                  Enter
                </kbd>{' '}
                /{' '}
                <kbd className="lsd:px-2 lsd:py-1 lsd:bg-[var(--lsd-surface)] lsd:border lsd:border-[var(--lsd-border)] lsd:rounded lsd:text-sm">
                  Space
                </kbd>{' '}
                - Activate item
              </li>
              <li>
                <kbd className="lsd:px-2 lsd:py-1 lsd:bg-[var(--lsd-surface)] lsd:border lsd:border-[var(--lsd-border)] lsd:rounded lsd:text-sm">
                  Escape
                </kbd>{' '}
                - Close menu
              </li>
              <li>
                <kbd className="lsd:px-2 lsd:py-1 lsd:bg-[var(--lsd-surface)] lsd:border lsd:border-[var(--lsd-border)] lsd:rounded lsd:text-sm">
                  Tab
                </kbd>{' '}
                - Move focus to next element
              </li>
            </ul>
          </div>
        </PageSection>

        <PageNavigation
          previous={{ title: 'Command', href: '/components/command' }}
          next={{ title: 'Menubar', href: '/components/menubar' }}
        />
      </PageContent>
    </DocsLayout>
  );
}

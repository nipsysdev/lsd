'use client';

import { DocsLayout } from '@/components/docs/DocsLayout';
import { IframeExample } from '@/components/docs/IframeExample';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import { CODE as BasicCode } from '@/examples/navigation-menu/basic/page';
import { CODE as PositioningCode } from '@/examples/navigation-menu/positioning-collapsible/page';

export default function NavigationMenuPage() {
  return (
    <DocsLayout>
      <PageHeader
        title="Navigation Menu"
        description="A navigation menu displays a list of links that are organized hierarchically, supporting nested menus and various positioning modes."
      />

      <PageContent>
        <PageSection title="About Navigation Menu">
          <div className="space-y-4">
            <p className="lsd:text-lsd-text-secondary">
              The Navigation Menu component is built on Radix UI and follows accessibility patterns.
              It provides a rich set of features including:
            </p>
            <ul className="list-disc list-inside space-y-2 lsd:text-lsd-text-secondary">
              <li>Viewport mode for mobile/desktop responsive behavior</li>
              <li>Nested menu support with unlimited nesting</li>
              <li>Keyboard navigation (arrow keys, Tab, Enter, Escape)</li>
              <li>Active state indicators</li>
              <li>Custom positioning and animations</li>
              <li>Trigger-style configuration</li>
              <li>Icon integration support</li>
            </ul>
          </div>
        </PageSection>

        <PageSection title="Installation">
          <p className="lsd:text-lsd-text-secondary">
            The Navigation Menu component is included in @nipsys/shadcn-lsd. No additional
            installation steps are required.
          </p>
        </PageSection>

        <PageSection title="Basic Usage">
          <p className="mb-4 lsd:text-lsd-text-secondary">
            Here&apos;s a simple navigation menu with basic items:
          </p>
          <IframeExample
            title="Basic"
            code={BasicCode}
            examplePath="/examples/navigation-menu/basic"
          />
        </PageSection>

        <PageSection title="Positioning with Collapsible">
          <p className="mb-4 lsd:text-lsd-text-secondary">
            Configure positioning and collapsible behavior:
          </p>
          <IframeExample
            title="Positioning with Collapsible"
            code={PositioningCode}
            examplePath="/examples/navigation-menu/positioning-collapsible"
          />
        </PageSection>

        <PageSection title="API Reference">
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 lsd:text-xl lsd:font-semibold">NavigationMenu</h3>
              <p className="mb-2 lsd:text-lsd-text-secondary">
                The root component that manages the navigation menu state.
              </p>
              <div className="mb-4">
                <p className="font-mono text-sm">
                  <code className="rounded bg-muted px-2 py-1">viewport?: boolean</code>
                </p>
                <p className="mt-1 text-sm lsd:text-lsd-text-secondary">
                  Whether to render the viewport. Default is true.
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-2 lsd:text-xl lsd:font-semibold">NavigationMenuList</h3>
              <p className="lsd:text-lsd-text-secondary">
                Container for navigation menu items arranged in a horizontal list.
              </p>
            </div>

            <div>
              <h3 className="mb-2 lsd:text-xl lsd:font-semibold">NavigationMenuItem</h3>
              <p className="lsd:text-lsd-text-secondary">
                A single navigation menu item that contains a trigger and optional content.
              </p>
            </div>

            <div>
              <h3 className="mb-2 lsd:text-xl lsd:font-semibold">NavigationMenuTrigger</h3>
              <p className="lsd:text-lsd-text-secondary">
                Button that opens/closes the navigation menu content. Displays a chevron icon.
              </p>
            </div>

            <div>
              <h3 className="mb-2 lsd:text-xl lsd:font-semibold">NavigationMenuContent</h3>
              <p className="lsd:text-lsd-text-secondary">
                The dropdown content that appears when a navigation menu item is triggered.
              </p>
            </div>

            <div>
              <h3 className="mb-2 lsd:text-xl lsd:font-semibold">NavigationMenuViewport</h3>
              <p className="lsd:text-lsd-text-secondary">
                The viewport that contains navigation menu content in viewport mode.
              </p>
            </div>

            <div>
              <h3 className="mb-2 lsd:text-xl lsd:font-semibold">NavigationMenuLink</h3>
              <p className="lsd:text-lsd-text-secondary">
                A hyperlink within the navigation menu with styling for active states.
              </p>
            </div>

            <div>
              <h3 className="mb-2 lsd:text-xl lsd:font-semibold">NavigationMenuIndicator</h3>
              <p className="lsd:text-lsd-text-secondary">
                Visual indicator showing the active navigation menu item as a small triangle.
              </p>
            </div>

            <div>
              <h3 className="mb-2 lsd:text-xl lsd:font-semibold">navigationMenuTriggerStyle</h3>
              <p className="lsd:text-lsd-text-secondary">
                Utility function that generates the trigger style classes for custom styling.
              </p>
            </div>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <div className="space-y-4">
            <p className="lsd:text-lsd-text-secondary">
              The Navigation Menu component follows WAI-ARIA patterns and is fully accessible:
            </p>
            <ul className="list-disc list-inside space-y-2 lsd:text-lsd-text-secondary">
              <li>Full keyboard navigation support</li>
              <li>Proper ARIA attributes</li>
              <li>Focus management</li>
              <li>Screen reader friendly</li>
              <li>High contrast support</li>
            </ul>
          </div>
        </PageSection>
      </PageContent>

      <PageNavigation
        prev={{
          title: 'Dropdown Menu',
          href: '/components/dropdown-menu',
        }}
        next={{
          title: 'Menubar',
          href: '/components/menubar',
        }}
      />
    </DocsLayout>
  );
}

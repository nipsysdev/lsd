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
import {
  CODE as AutocompleteBasicCODE,
  SIZE as AutocompleteBasicSIZE,
} from '@/examples/autocomplete/basic/page';
import {
  CODE as AutocompleteClearableCODE,
  SIZE as AutocompleteClearableSIZE,
} from '@/examples/autocomplete/clearable/page';
import {
  CODE as AutocompleteDisabledCODE,
  SIZE as AutocompleteDisabledSIZE,
} from '@/examples/autocomplete/disabled/page';
import {
  CODE as AutocompleteErrorCODE,
  SIZE as AutocompleteErrorSIZE,
} from '@/examples/autocomplete/error/page';
import {
  CODE as AutocompleteGhostCODE,
  SIZE as AutocompleteGhostSIZE,
} from '@/examples/autocomplete/ghost/page';
import {
  CODE as AutocompleteIconCODE,
  SIZE as AutocompleteIconSIZE,
} from '@/examples/autocomplete/icon/page';
import {
  CODE as AutocompleteOutlinedCODE,
  SIZE as AutocompleteOutlinedSIZE,
} from '@/examples/autocomplete/outlined/page';
import {
  CODE as AutocompleteSizesCODE,
  SIZE as AutocompleteSizesSIZE,
} from '@/examples/autocomplete/sizes/page';
import {
  CODE as AutocompleteUnderlinedCODE,
  SIZE as AutocompleteUnderlinedSIZE,
} from '@/examples/autocomplete/underlined/page';

export default function AutocompletePage() {
  const AutocompleteBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const AutocompleteClearableIframeRef = useRef<HTMLIFrameElement>(null);
  const AutocompleteDisabledIframeRef = useRef<HTMLIFrameElement>(null);
  const AutocompleteErrorIframeRef = useRef<HTMLIFrameElement>(null);
  const AutocompleteGhostIframeRef = useRef<HTMLIFrameElement>(null);
  const AutocompleteIconIframeRef = useRef<HTMLIFrameElement>(null);
  const AutocompleteOutlinedIframeRef = useRef<HTMLIFrameElement>(null);
  const AutocompleteSizesIframeRef = useRef<HTMLIFrameElement>(null);
  const AutocompleteUnderlinedIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(
    AutocompleteBasicIframeRef,
    AutocompleteClearableIframeRef,
    AutocompleteDisabledIframeRef,
    AutocompleteErrorIframeRef,
    AutocompleteGhostIframeRef,
    AutocompleteIconIframeRef,
    AutocompleteOutlinedIframeRef,
    AutocompleteSizesIframeRef,
    AutocompleteUnderlinedIframeRef
  );

  return (
    <DocsLayout>
      <PageHeader
        title="Autocomplete"
        description="Text input with searchable dropdown suggestions"
      />

      <PageContent>
        <PageSection title="About Autocomplete">
          <Typography variant="body1" className="block">
            A text input component that displays filtered options or fetched results in a dropdown.
            Supports static local options with client-side filtering, and remote server-side
            fetching with debouncing. Can operate in controlled or uncontrolled modes.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Autocomplete component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { Autocomplete } from '@nipsys/lsd'

export default function MyComponent() {
  return <Autocomplete />
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
                ref={AutocompleteBasicIframeRef}
                size={AutocompleteBasicSIZE}
                src="/examples/autocomplete/basic"
                title="Basic Example"
              />
              <CodeExample code={AutocompleteBasicCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Variants">
          <Typography variant="body1">
            Component variants for different visual styles and use cases.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Ghost</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={AutocompleteGhostIframeRef}
                size={AutocompleteGhostSIZE}
                src="/examples/autocomplete/ghost"
                title="Ghost Example"
              />
              <CodeExample code={AutocompleteGhostCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Outlined</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={AutocompleteOutlinedIframeRef}
                size={AutocompleteOutlinedSIZE}
                src="/examples/autocomplete/outlined"
                title="Outlined Example"
              />
              <CodeExample code={AutocompleteOutlinedCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Underlined</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={AutocompleteUnderlinedIframeRef}
                size={AutocompleteUnderlinedSIZE}
                src="/examples/autocomplete/underlined"
                title="Underlined Example"
              />
              <CodeExample code={AutocompleteUnderlinedCODE} />
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
                ref={AutocompleteSizesIframeRef}
                size={AutocompleteSizesSIZE}
                src="/examples/autocomplete/sizes"
                title="Sizes Example"
              />
              <CodeExample code={AutocompleteSizesCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <Typography variant="body1">
            Additional features and capabilities of the component.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Clearable</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={AutocompleteClearableIframeRef}
                size={AutocompleteClearableSIZE}
                src="/examples/autocomplete/clearable"
                title="Clearable Example"
              />
              <CodeExample code={AutocompleteClearableCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Disabled</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={AutocompleteDisabledIframeRef}
                size={AutocompleteDisabledSIZE}
                src="/examples/autocomplete/disabled"
                title="Disabled Example"
              />
              <CodeExample code={AutocompleteDisabledCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Error</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={AutocompleteErrorIframeRef}
                size={AutocompleteErrorSIZE}
                src="/examples/autocomplete/error"
                title="Error Example"
              />
              <CodeExample code={AutocompleteErrorCODE} />
            </CardContent>
          </Card>
          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Icon</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={AutocompleteIconIframeRef}
                size={AutocompleteIconSIZE}
                src="/examples/autocomplete/icon"
                title="Icon Example"
              />
              <CodeExample code={AutocompleteIconCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <div className="mt-(--lsd-spacing-large)">
            <Typography variant="h4" className="mb-(--lsd-spacing-base)">
              Autocomplete
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base)">
              <Card>
                <CardHeader>
                  <CardTitle>options</CardTitle>
                  <CardDescription>Array of options for client-side filtering.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>AutocompleteOption[]</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>onOptionsFetch</CardTitle>
                  <CardDescription>
                    Fetches options asynchronously based on search text.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong>{' '}
                    <code>(searchText: string) =&gt; Promise&lt;AutocompleteOption[]&gt;</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>placeholder</CardTitle>
                  <CardDescription>
                    Placeholder text displayed when no value is selected.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>string</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>emptyText</CardTitle>
                  <CardDescription>
                    Text displayed when no options match the search.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>string</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>loadingText</CardTitle>
                  <CardDescription>Text displayed while options are being fetched.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>string</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>className</CardTitle>
                  <CardDescription>Optional className for custom styling.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>string</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>onValueChange</CardTitle>
                  <CardDescription>Callback fired when the selected value changes.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>(value: string) =&gt; void</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>onClear</CardTitle>
                  <CardDescription>
                    Callback fired when the clear button is clicked.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>() =&gt; void</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>disabled</CardTitle>
                  <CardDescription>Disables the autocomplete input.</CardDescription>
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
                  <CardTitle>label</CardTitle>
                  <CardDescription>Label shown above the input field.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>string</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>size</CardTitle>
                  <CardDescription>Size of the autocomplete component.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>SizeVariant</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>icon</CardTitle>
                  <CardDescription>Icon element displayed at the end of the input.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>React.ReactNode</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>error</CardTitle>
                  <CardDescription>Displays the input in error state.</CardDescription>
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
                  <CardTitle>variant</CardTitle>
                  <CardDescription>Visual style variant for the input border.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>BorderVariant</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>clearable</CardTitle>
                  <CardDescription>Shows a clear button when a value is selected.</CardDescription>
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
                  <CardTitle>value</CardTitle>
                  <CardDescription>
                    Currently selected value string for controlled mode.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                    <strong>Type:</strong> <code>string</code>
                  </Typography>
                  <Typography variant="label1" className="block mt-(--lsd-spacing-smaller)">
                    <strong>Optional</strong>
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>isLoading</CardTitle>
                  <CardDescription>
                    External loading state override for async fetching.
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
                • Tab - Navigate to the autocomplete input
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • ArrowDown - Open dropdown and move to first option
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • ArrowUp - Move to previous option in dropdown
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Enter - Select the highlighted option
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Escape - Close dropdown without selecting
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
                • role="combobox" is managed by Radix Popover
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-expanded indicates dropdown open state
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-controls links input to dropdown content
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • aria-activedescendant identifies selected option
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
                • Focus managed by Radix Popover component. First option receives focus when
                dropdown opens. Focus returns to input when option selected or dropdown closes.
                Clicking outside closes dropdown and returns focus to input.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>
        <PageNavigation
          next={{
            title: 'Button',
            href: '/components/button',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}

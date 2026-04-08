'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@nipsys/shadcn-lsd';
import { useRef } from 'react';
import { CodeExample } from '@/components/docs/CodeExample';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { IframeExample } from '@/components/docs/IframeExample';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import { useSendThemeToIframes } from '@/components/docs/useSendIframes';
import { CODE as ButtonAsChildCODE } from '@/examples/button/as-child/page';
import { CODE as ButtonDisabledCODE } from '@/examples/button/disabled/page';
import { CODE as ButtonFullWidthCODE } from '@/examples/button/full-width/page';
import { CODE as ButtonIconsCODE } from '@/examples/button/icons/page';
import { CODE as ButtonLoadingCODE } from '@/examples/button/loading/page';
import { CODE as ButtonSizesCODE } from '@/examples/button/sizes/page';
import { CODE as ButtonVariantsCODE } from '@/examples/button/variants/page';

export default function ButtonPage() {
  const _buttonBasicIframeRef = useRef<HTMLIFrameElement>(null);
  const buttonVariantsIframeRef = useRef<HTMLIFrameElement>(null);
  const buttonSizesIframeRef = useRef<HTMLIFrameElement>(null);
  const buttonIconsIframeRef = useRef<HTMLIFrameElement>(null);
  const buttonLoadingIframeRef = useRef<HTMLIFrameElement>(null);
  const _buttonGroupsIframeRef = useRef<HTMLIFrameElement>(null);
  const buttonFullWidthIframeRef = useRef<HTMLIFrameElement>(null);
  const buttonDisabledIframeRef = useRef<HTMLIFrameElement>(null);
  const buttonAsChildIframeRef = useRef<HTMLIFrameElement>(null);

  useSendThemeToIframes(
    buttonVariantsIframeRef,
    buttonSizesIframeRef,
    buttonIconsIframeRef,
    buttonLoadingIframeRef,
    buttonFullWidthIframeRef,
    buttonDisabledIframeRef,
    buttonAsChildIframeRef
  );

  return (
    <DocsLayout>
      <PageHeader
        title="Button"
        description="Interactive button component with multiple variants and sizes for different use cases"
      />

      <PageContent>
        <PageSection title="About Button">
          <p className="block">
            Buttons are interactive elements that trigger actions or navigate users to different
            locations. They are the primary way users interact with your application.
          </p>
        </PageSection>

        <PageSection title="Installation">
          <p>Import the Button component from LSD:</p>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`import { Button } from '@nipsys/shadcn-lsd';

export default function MyComponent() {
  return <Button>Click me</Button>
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Variants">
          <p>
            Button variants organized by category: primary, rounded, ghost, and semantic variants.
          </p>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>All Variants</CardTitle>
              <CardDescription>Button variants organized by category</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={buttonVariantsIframeRef}
                size="md"
                src="/examples/button/variants"
                title="Button Variants Example"
              />
              <CodeExample code={ButtonVariantsCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Sizes">
          <p>Button sizes for different contexts and hierarchy.</p>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Button Sizes</CardTitle>
              <CardDescription>Available button sizes</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={buttonSizesIframeRef}
                size="md"
                src="/examples/button/sizes"
                title="Button Sizes Example"
              />
              <CodeExample code={ButtonSizesCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Features">
          <p>
            Advanced features including icons, loading states, full width, disabled state, and
            links.
          </p>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>With Icons</CardTitle>
              <CardDescription>Buttons with icons for better context</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={buttonIconsIframeRef}
                size="md"
                src="/examples/button/icons"
                title="Button Icons Example"
              />
              <CodeExample code={ButtonIconsCODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Loading State</CardTitle>
              <CardDescription>Button in loading state</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={buttonLoadingIframeRef}
                size="md"
                src="/examples/button/loading"
                title="Loading State Example"
              />
              <CodeExample code={ButtonLoadingCODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Full Width</CardTitle>
              <CardDescription>Button that spans the full width of its container</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={buttonFullWidthIframeRef}
                size="md"
                src="/examples/button/full-width"
                title="Full Width Button"
              />
              <CodeExample code={ButtonFullWidthCODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Disabled State</CardTitle>
              <CardDescription>Disabled button with reduced opacity</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={buttonDisabledIframeRef}
                size="md"
                src="/examples/button/disabled"
                title="Disabled State"
              />
              <CodeExample code={ButtonDisabledCODE} />
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>asChild (Link Button)</CardTitle>
              <CardDescription>Render button as a link using Radix Slot</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeExample
                ref={buttonAsChildIframeRef}
                size="md"
                src="/examples/button/as-child"
                title="Link Button"
              />
              <CodeExample code={ButtonAsChildCODE} />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <p>All available props for the Button component.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>variant</CardTitle>
                <CardDescription>The visual style of the button</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="block mb-2">
                  <strong>Type:</strong> ButtonVariant
                </p>
                <p className="block mb-2">
                  <strong>Options:</strong> filled, outlined, filled-rounded, outlined-rounded,
                  link, ghost, ghost-rounded, destructive, destructive-rounded, success,
                  success-rounded
                </p>
                <p className="block">
                  <strong>Default:</strong> filled
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>size</CardTitle>
                <CardDescription>The size of the button</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="block mb-2">
                  <strong>Type:</strong> 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
                </p>
                <p className="block">
                  <strong>Default:</strong> 'md'
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>fullWidth</CardTitle>
                <CardDescription>Whether the button spans full container width</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="block mb-2">
                  <strong>Type:</strong> boolean
                </p>
                <p className="block">
                  <strong>Default:</strong> false
                </p>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageNavigation
          previous={{
            title: 'Autocomplete',
            href: '/components/autocomplete',
          }}
          next={{
            title: 'Button Group',
            href: '/components/button-group',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}

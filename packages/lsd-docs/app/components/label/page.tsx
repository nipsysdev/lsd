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
import { useEffect, useRef, useState } from 'react';
import { CodeExample } from '@/components/docs/CodeExample';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import { type ExampleParams, sendToIframe } from '@/components/docs/useIframeSync';

export default function LabelPage() {
  const basicIframeRef = useRef<HTMLIFrameElement>(null);
  const variantsIframeRef = useRef<HTMLIFrameElement>(null);
  const sizesIframeRef = useRef<HTMLIFrameElement>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [accent, setAccent] = useState<string>('monochrome');
  const [font, setFont] = useState<string>('monospace');

  // Track theme changes
  useEffect(() => {
    const updateTheme = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'dark' : 'light');
    };

    // Initial check
    updateTheme();

    // Listen for theme changes
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  // Track accent theme changes
  useEffect(() => {
    const updateAccent = () => {
      const accent = document.documentElement.getAttribute('data-theme');
      setAccent(accent || 'monochrome');
    };

    // Initial check
    updateAccent();

    // Listen for accent changes
    const observer = new MutationObserver(updateAccent);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  // Track font changes
  useEffect(() => {
    const updateFont = () => {
      if (document.documentElement.classList.contains('font-serif')) {
        setFont('serif');
      } else if (document.documentElement.classList.contains('font-sans')) {
        setFont('sans-serif');
      } else if (document.documentElement.classList.contains('font-mono')) {
        setFont('monospace');
      }
    };

    // Initial check
    updateFont();

    // Listen for font changes
    const observer = new MutationObserver(updateFont);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  // Send params to iframes when theme, accent, or font changes
  useEffect(() => {
    const params: ExampleParams = {
      theme,
      accent,
      font,
    };
    sendToIframe(basicIframeRef.current, 'example-params', params);
    sendToIframe(variantsIframeRef.current, 'example-params', params);
    sendToIframe(sizesIframeRef.current, 'example-params', params);
  }, [theme, accent, font]);

  // Send initial params when iframes load
  useEffect(() => {
    const iframes = [basicIframeRef.current, variantsIframeRef.current, sizesIframeRef.current];

    iframes.forEach(iframe => {
      if (!iframe) return;

      const handleLoad = () => {
        const params: ExampleParams = {
          theme,
          accent,
          font,
        };
        sendToIframe(iframe, 'example-params', params);
      };

      iframe.addEventListener('load', handleLoad);
    });
  }, [theme, accent, font]);

  return (
    <DocsLayout>
      <PageHeader
        title="Label"
        description="A form label component that provides context and accessibility for form inputs."
      />

      <PageContent>
        <PageSection title="About Label">
          <Typography variant="body1" className="block">
            The Label component provides accessible labeling for form inputs and other interactive
            elements. It automatically associates with form controls using the <code>htmlFor</code>{' '}
            attribute, ensuring screen readers can properly describe the relationship between labels
            and their associated controls.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Label component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                code={`import { Label } from '@nipsys/shadcn-lsd'

export default function MyComponent() {
  return (
    <div>
      <Label htmlFor="email">Email</Label>
      <input id="email" type="email" />
    </div>
  )
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Usage">
          <Typography variant="body1">
            Basic usage of the Label component with form inputs.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Demo</CardTitle>
              <CardDescription>
                A simple form with labels for email and password fields.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <div className="aspect-video w-full overflow-hidden">
                  <iframe
                    ref={basicIframeRef}
                    src="/examples/label/basic"
                    className="size-full"
                    title="Label Basic Example"
                  />
                </div>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample
                      code={`'use client';

import { Label } from '@nipsys/shadcn-lsd';
import { type ExampleParams, useIframeMessageListener } from '@/components/docs/useIframeSync';

export function LabelBasicExample() {
  useIframeMessageListener('example-params', (params: ExampleParams) => {
    if (params.theme) {
      if (params.theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }

    if (params.accent) {
      if (params.accent === 'monochrome') {
        document.documentElement.removeAttribute('data-theme');
      } else {
        document.documentElement.setAttribute('data-theme', params.accent);
      }
    }

    if (params.font) {
      document.documentElement.classList.remove('font-serif', 'font-sans', 'font-mono');
      if (params.font === 'serif') {
        document.documentElement.classList.add('font-serif');
      } else if (params.font === 'sans-serif') {
        document.documentElement.classList.add('font-sans');
      } else if (params.font === 'monospace') {
        document.documentElement.classList.add('font-mono');
      }
    }
  });

  return (
    <div className="w-full max-w-sm space-y-(--lsd-spacing-base)">
        <div>
          <Label htmlFor="email">Email</Label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="mt-(--lsd-spacing-smaller) w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            className="mt-(--lsd-spacing-smaller) w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          />
        </div>
      </div>
  );
}`}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Variants">
          <Typography variant="body1">
            Labels come in two visual variants for different design contexts.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Label Variants</CardTitle>
              <CardDescription>Default and secondary label styles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <div className="aspect-video w-full overflow-hidden">
                  <iframe
                    ref={variantsIframeRef}
                    src="/examples/label/variants"
                    className="size-full"
                    title="Label Variants Example"
                  />
                </div>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample
                      code={`'use client';

import { Label } from '@nipsys/shadcn-lsd';
import { type ExampleParams, useIframeMessageListener } from '@/components/docs/useIframeSync';

export function LabelVariantsExample() {
  useIframeMessageListener('example-params', (params: ExampleParams) => {
    if (params.theme) {
      if (params.theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }

    if (params.accent) {
      if (params.accent === 'monochrome') {
        document.documentElement.removeAttribute('data-theme');
      } else {
        document.documentElement.setAttribute('data-theme', params.accent);
      }
    }

    if (params.font) {
      document.documentElement.classList.remove('font-serif', 'font-sans', 'font-mono');
      if (params.font === 'serif') {
        document.documentElement.classList.add('font-serif');
      } else if (params.font === 'sans-serif') {
        document.documentElement.classList.add('font-sans');
      } else if (params.font === 'monospace') {
        document.documentElement.classList.add('font-mono');
      }
    }
  });

  return (
    <div className="flex flex-col gap-(--lsd-spacing-large) p-(--lsd-spacing-larger)">
      <div>
        <Label variant="default" htmlFor="default-input">
          Default Label
        </Label>
        <input
          id="default-input"
          type="text"
          placeholder="Default variant"
          className="mt-(--lsd-spacing-smaller) w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        />
      </div>
      <div>
        <Label variant="secondary" htmlFor="secondary-input">
          Secondary Label
        </Label>
        <input
          id="secondary-input"
          type="text"
          placeholder="Secondary variant"
          className="mt-(--lsd-spacing-smaller) w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        />
      </div>
    </div>
  );
}`}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Sizes">
          <Typography variant="body1">
            Labels come in three sizes to fit different contexts and visual hierarchies.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>All Sizes</CardTitle>
              <CardDescription>Small, medium, and large label sizes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <div className="aspect-video w-full overflow-hidden">
                  <iframe
                    ref={sizesIframeRef}
                    src="/examples/label/sizes"
                    className="size-full"
                    title="Label Sizes Example"
                  />
                </div>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample
                      code={`'use client';

import { Label } from '@nipsys/shadcn-lsd';
import { type ExampleParams, useIframeMessageListener } from '@/components/docs/useIframeSync';

export function LabelSizesExample() {
  useIframeMessageListener('example-params', (params: ExampleParams) => {
    if (params.theme) {
      if (params.theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }

    if (params.accent) {
      if (params.accent === 'monochrome') {
        document.documentElement.removeAttribute('data-theme');
      } else {
        document.documentElement.setAttribute('data-theme', params.accent);
      }
    }

    if (params.font) {
      document.documentElement.classList.remove('font-serif', 'font-sans', 'font-mono');
      if (params.font === 'serif') {
        document.documentElement.classList.add('font-serif');
      } else if (params.font === 'sans-serif') {
        document.documentElement.classList.add('font-sans');
      } else if (params.font === 'monospace') {
        document.documentElement.classList.add('font-mono');
      }
    }
  });

  return (
    <div className="flex flex-col gap-(--lsd-spacing-large) p-(--lsd-spacing-larger)">
      <div>
        <Label size="sm" htmlFor="small-input">
          Small Label
        </Label>
        <input
          id="small-input"
          type="text"
          placeholder="Small size"
          className="mt-(--lsd-spacing-smaller) w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        />
      </div>
      <div>
        <Label size="md" htmlFor="medium-input">
          Medium Label
        </Label>
        <input
          id="medium-input"
          type="text"
          placeholder="Medium size"
          className="mt-(--lsd-spacing-smaller) w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        />
      </div>
      <div>
        <Label size="lg" htmlFor="large-input">
          Large Label
        </Label>
        <input
          id="large-input"
          type="text"
          placeholder="Large size"
          className="mt-(--lsd-spacing-smaller) w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        />
      </div>
    </div>
  );
}`}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="API Reference">
          <Typography variant="body1">All available props for the Label component.</Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>variant</CardTitle>
                <CardDescription>The visual style of the label</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> LabelVariant
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> default, secondary
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> default
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>size</CardTitle>
                <CardDescription>The size of the label</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> SizeVariant
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> sm, md, lg
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> md
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>htmlFor</CardTitle>
                <CardDescription>Associates label with form element</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> string
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  ID of the form element this label is associated with
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>className</CardTitle>
                <CardDescription>Additional CSS classes to apply</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  <strong>Type:</strong> string
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Merges with existing label classes
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>...props</CardTitle>
                <CardDescription>Standard HTML label attributes</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  <strong>Type:</strong> <code>{`React.ComponentProps<'label'>`}</code>
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  All standard HTML label attributes are supported
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1">
            The Label component follows accessibility best practices for screen readers and keyboard
            navigation.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Labels are fully keyboard accessible</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Tab</strong> - Navigate to the associated form element
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Shift + Tab</strong> - Navigate to previous element
              </Typography>
              <Typography variant="body2" className="block">
                Clicking on a label automatically focuses its associated form element
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
                • Labels are automatically associated with inputs using <code>htmlFor</code>
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Screen readers announce the label text when focusing the associated input
              </Typography>
              <Typography variant="body2" className="block">
                • Use <code>aria-label</code> or <code>aria-labelledby</code> for complex labeling
                scenarios
              </Typography>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Focus States</CardTitle>
              <CardDescription>Visual feedback for keyboard users</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block">
                Labels have visible focus states that follow the LSD design system's focus
                indicators, ensuring keyboard users can always see which element has focus.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>

        <PageNavigation
          previous={{ title: 'Input', href: '/components/input' }}
          next={{ title: 'Menubar', href: '/components/menubar' }}
        />
      </PageContent>
    </DocsLayout>
  );
}

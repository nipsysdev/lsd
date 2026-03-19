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

export default function CardPage() {
  const basicIframeRef = useRef<HTMLIFrameElement>(null);
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
  }, [theme, accent, font]);

  // Send initial params when iframes load
  useEffect(() => {
    const iframe = basicIframeRef.current;
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
    return () => {
      iframe.removeEventListener('load', handleLoad);
    };
  }, [theme, accent, font]);

  return (
    <DocsLayout>
      <PageHeader
        title="Card"
        description="A flexible container component for grouping related content and actions together."
      />

      <PageContent>
        <PageSection title="About Card">
          <Typography variant="body1" className="block">
            The Card component provides a structured container for organizing related content and
            actions. It's designed to be flexible and composable, allowing you to create various
            layouts with headers, content areas, footers, and action buttons. Cards are ideal for
            displaying information, forms, or any grouped content that needs visual separation.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Card components from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                code={`import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@nipsys/shadcn-lsd'`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Structure">
          <Typography variant="body1" className="mb-(--lsd-spacing-base)">
            A Card component is composed of the following parts:
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>Card</strong> - The root container
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>CardHeader</strong> - Container for title and description
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>CardTitle</strong> - The card title
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>CardDescription</strong> - The card description
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>CardAction</strong> - Container for action buttons in the header
          </Typography>
          <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
            • <strong>CardContent</strong> - The main content area
          </Typography>
          <Typography variant="body2" className="block">
            • <strong>CardFooter</strong> - Container for footer actions
          </Typography>
        </PageSection>

        <PageSection title="Usage">
          <Typography variant="body1">
            Basic usage of the Card component with header, content, and footer.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Demo</CardTitle>
              <CardDescription>
                A card with title, description, content, action button, and footer.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <div className="aspect-video w-full overflow-hidden">
                  <iframe
                    ref={basicIframeRef}
                    src="/examples/card/basic"
                    className="size-full"
                    title="Card Basic Example"
                  />
                </div>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample
                      code={`import {
  Button,
  ButtonGroup,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nipsys/shadcn-lsd';

export function MyComponent() {
  return (
    <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>
            This is a card component with header, content, and footer sections.
          </CardDescription>
          <CardAction>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="square-sm" aria-label="More options">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <title>More options</title>
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="19" cy="12" r="1" />
                    <circle cx="5" cy="12" r="1" />
                  </svg>
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" size="sm" className="p-0">
                <ButtonGroup orientation="vertical">
                  <Button variant="outlined" size="sm" className="justify-start">
                    Edit
                  </Button>
                  <Button variant="outlined" size="sm" className="justify-start">
                    Duplicate
                  </Button>
                  <Button variant="outlined" size="sm" className="justify-start text-destructive">
                    Delete
                  </Button>
                </ButtonGroup>
              </PopoverContent>
            </Popover>
          </CardAction>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            Cards are used to group related content and actions together. They provide a clean,
            organized way to display information and can include headers, content areas, and footers.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outlined" className="w-full">
            Learn More
          </Button>
        </CardFooter>
      </Card>
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
          <Typography variant="body1" className="mb-(--lsd-spacing-base)">
            Card component props and configuration options.
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>Card</CardTitle>
                <CardDescription>The root container</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps&lt;&apos;div&apos;&gt;
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> flex, flex-col, border, shadow-sm
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Accepts all standard div props. Uses LSD design system classes for background,
                  text, border, and shadow.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CardHeader</CardTitle>
                <CardDescription>Container for title and description</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps&lt;&apos;div&apos;&gt;
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> grid, gap-smaller, px-larger, py-larger, border-b
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Provides a container with appropriate spacing for the title and description.
                  Automatically adjusts layout when CardAction is present.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CardTitle</CardTitle>
                <CardDescription>The card title</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps&lt;&apos;div&apos;&gt;
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> leading-none, font-semibold
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Renders a div element with appropriate styling for the card title.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CardDescription</CardTitle>
                <CardDescription>The card description</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps&lt;&apos;div&apos;&gt;
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> text-sm, text-secondary
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Renders a div element with appropriate styling for the card description.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CardAction</CardTitle>
                <CardDescription>Container for action buttons in the header</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps&lt;&apos;div&apos;&gt;
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> col-start-2, row-span-2, self-start, justify-self-end
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Positions action buttons in the top-right corner of the card header. Works with
                  the grid layout of CardHeader.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CardContent</CardTitle>
                <CardDescription>The main content area</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps&lt;&apos;div&apos;&gt;
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> px-larger, py-larger
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Provides a container with appropriate padding for the main content.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CardFooter</CardTitle>
                <CardDescription>Container for footer actions</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ComponentProps&lt;&apos;div&apos;&gt;
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> flex, items-center, px-larger, py-larger, border-t
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Provides a container with appropriate spacing and layout for footer actions.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1" className="mb-(--lsd-spacing-base)">
            The Card component follows accessibility best practices and is fully accessible to
            keyboard and screen reader users.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Keyboard shortcuts for card interaction</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Tab</strong> - Navigate to interactive elements within the card
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Shift + Tab</strong> - Navigate to previous element
              </Typography>
              <Typography variant="body2" className="block">
                • <strong>Enter</strong> - Trigger the focused action button
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
                • Use <code>aria-label</code> for icon-only buttons within cards
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Use <code>aria-describedby</code> to link to supporting text
              </Typography>
              <Typography variant="body2" className="block">
                • Ensure all interactive elements have accessible names
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
                Interactive elements within cards have visible focus states that follow the LSD
                design system's focus indicators, ensuring keyboard users can always see which
                element has focus.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>

        <PageNavigation
          previous={{ title: 'Button Group', href: '/components/button-group' }}
          next={{ title: 'Checkbox', href: '/components/checkbox' }}
        />
      </PageContent>
    </DocsLayout>
  );
}

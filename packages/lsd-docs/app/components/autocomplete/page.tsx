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

export default function AutocompletePage() {
  const basicIframeRef = useRef<HTMLIFrameElement>(null);
  const variantsIframeRef = useRef<HTMLIFrameElement>(null);
  const sizesIframeRef = useRef<HTMLIFrameElement>(null);
  const featuresIframeRef = useRef<HTMLIFrameElement>(null);
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
    sendToIframe(featuresIframeRef.current, 'example-params', params);
  }, [theme, accent, font]);

  // Send initial params when iframes load
  useEffect(() => {
    const iframes = [
      basicIframeRef.current,
      variantsIframeRef.current,
      sizesIframeRef.current,
      featuresIframeRef.current,
    ];

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
        title="Autocomplete"
        description="A text input with a dropdown list of suggestions that filters as you type."
      />

      <PageContent>
        <PageSection title="About Autocomplete">
          <Typography variant="body1" className="block">
            The Autocomplete component provides a text input with a dropdown list of suggestions
            that filters as you type. It supports both static options and asynchronous fetching,
            making it ideal for search fields, form inputs, and any scenario where users need to
            select from a list of options.
          </Typography>
        </PageSection>

        <PageSection title="Installation">
          <Typography variant="body1">Import the Autocomplete component from LSD:</Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                code={`import { Autocomplete } from '@nipsys/shadcn-lsd'

export default function MyComponent() {
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ]

  return <Autocomplete options={options} placeholder="Search..." />
}`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Usage">
          <Typography variant="body1">
            Basic usage of the Autocomplete component with static options.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Demo</CardTitle>
              <CardDescription>
                A simple autocomplete with a list of programming languages.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <div className="aspect-video w-full overflow-hidden border">
                  <iframe
                    ref={basicIframeRef}
                    src="/examples/autocomplete/basic"
                    className="size-full"
                    title="Autocomplete Basic Example"
                  />
                </div>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample
                      code={`'use client';

import { Autocomplete } from '@nipsys/shadcn-lsd';
import { type ExampleParams, useIframeMessageListener } from '@/components/docs/useIframeSync';

const options = [
  { value: 'js', label: 'JavaScript' },
  { value: 'ts', label: 'TypeScript' },
  { value: 'py', label: 'Python' },
  { value: 'rb', label: 'Ruby' },
  { value: 'go', label: 'Go' },
  { value: 'rs', label: 'Rust' },
  { value: 'java', label: 'Java' },
  { value: 'cs', label: 'C#' },
  { value: 'cpp', label: 'C++' },
  { value: 'swift', label: 'Swift' },
];

export function AutocompleteBasicExample() {
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
    <div className="flex items-center justify-center p-(--lsd-spacing-larger)">
      <Autocomplete options={options} placeholder="Search languages..." />
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
            Autocomplete comes in two visual variants for different design contexts.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Border Variants</CardTitle>
              <CardDescription>Choose between outlined and underlined styles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <div className="aspect-video w-full overflow-hidden border">
                  <iframe
                    ref={variantsIframeRef}
                    src="/examples/autocomplete/variants"
                    className="size-full"
                    title="Autocomplete Variants Example"
                  />
                </div>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample
                      code={`'use client';

import { Autocomplete } from '@nipsys/shadcn-lsd';
import { type ExampleParams, useIframeMessageListener } from '@/components/docs/useIframeSync';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

export function AutocompleteVariantsExample() {
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
      <Autocomplete variant="outlined" options={options} placeholder="Outlined" />
      <Autocomplete variant="underlined" options={options} placeholder="Underlined" />
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
            Autocomplete comes in five sizes to fit different contexts and layouts.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>All Sizes</CardTitle>
              <CardDescription>From extra small to extra large</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <div className="aspect-video w-full overflow-hidden border">
                  <iframe
                    ref={sizesIframeRef}
                    src="/examples/autocomplete/sizes"
                    className="size-full"
                    title="Autocomplete Sizes Example"
                  />
                </div>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample
                      code={`'use client';

import { Autocomplete } from '@nipsys/shadcn-lsd';
import { type ExampleParams, useIframeMessageListener } from '@/components/docs/useIframeSync';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

export function AutocompleteSizesExample() {
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
      <Autocomplete size="xs" options={options} placeholder="Extra Small" />
      <Autocomplete size="sm" options={options} placeholder="Small" />
      <Autocomplete size="md" options={options} placeholder="Medium" />
      <Autocomplete size="lg" options={options} placeholder="Large" />
      <Autocomplete size="xl" options={options} placeholder="Extra Large" />
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

        <PageSection title="Features">
          <Typography variant="body1">
            Additional features like labels, icons, clearable inputs, error states, and async
            fetching.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>With Label</CardTitle>
              <CardDescription>Add a label to provide context for the autocomplete</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-(--lsd-spacing-base)">
                <div className="aspect-video w-full overflow-hidden border">
                  <iframe
                    ref={featuresIframeRef}
                    src="/examples/autocomplete/features"
                    className="size-full"
                    title="Autocomplete Features Example"
                  />
                </div>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="code">
                  <AccordionTrigger>View code</AccordionTrigger>
                  <AccordionContent>
                    <CodeExample
                      code={`'use client';

import { Autocomplete } from '@nipsys/shadcn-lsd';
import { type ExampleParams, useIframeMessageListener } from '@/components/docs/useIframeSync';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

export function AutocompleteFeaturesExample() {
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
      <Autocomplete label="Select an option" options={options} placeholder="Choose..." />
      <Autocomplete
        label="With Icon"
        options={options}
        placeholder="Search..."
        icon={<span>🔍</span>}
      />
      <Autocomplete
        label="Clearable"
        options={options}
        placeholder="Type to search..."
        clearable
      />
      <Autocomplete
        label="Error State"
        options={options}
        placeholder="Select an option"
        error
      />
      <Autocomplete
        label="Disabled"
        options={options}
        placeholder="Can't select"
        disabled
      />
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
          <Typography variant="body1">
            All available props for the Autocomplete component.
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>options</CardTitle>
                <CardDescription>Array of options to display in the dropdown</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> AutocompleteOption[]
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Each option must have a value and label property
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>onOptionsFetch</CardTitle>
                <CardDescription>
                  Async function to fetch options based on search text
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> (searchText: string) =&gt;
                  Promise&lt;AutocompleteOption[]&gt;
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  When provided, options are fetched asynchronously instead of using static options
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>placeholder</CardTitle>
                <CardDescription>Placeholder text displayed in the input</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> string
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> 'Search...'
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>emptyText</CardTitle>
                <CardDescription>Text displayed when no options match the search</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> string
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> 'No results found.'
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>loadingText</CardTitle>
                <CardDescription>Text displayed while fetching options</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> string
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> 'Loading...'
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>label</CardTitle>
                <CardDescription>Label text displayed above the input</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ReactNode
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Optional label for the autocomplete field
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>size</CardTitle>
                <CardDescription>The size of the autocomplete</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> AutocompleteSize
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> xs, sm, md, lg, xl
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> md
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>variant</CardTitle>
                <CardDescription>The visual style of the autocomplete border</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> AutocompleteVariant
                </Typography>
                <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Options:</strong> outlined, underlined
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> outlined
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>icon</CardTitle>
                <CardDescription>Icon displayed inside the input</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> React.ReactNode
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Optional icon to display inside the input
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>clearable</CardTitle>
                <CardDescription>Show a clear button when a value is selected</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  When true, displays an X button to clear the selected value
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>error</CardTitle>
                <CardDescription>Show error state styling</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Changes border color to destructive and adds strikethrough to text
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>disabled</CardTitle>
                <CardDescription>Disable the autocomplete</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> false
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Prevents user interaction and shows disabled styling
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>value</CardTitle>
                <CardDescription>Controlled value of the autocomplete</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> string
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  When provided, the component becomes controlled
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>onValueChange</CardTitle>
                <CardDescription>Callback when a value is selected</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> (value: string) =&gt; void
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Called when an option is selected from the dropdown
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>onClear</CardTitle>
                <CardDescription>Callback when the clear button is clicked</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> () =&gt; void
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  Called when the clear button is clicked (requires clearable)
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>isLoading</CardTitle>
                <CardDescription>External loading state</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                  <strong>Type:</strong> boolean
                </Typography>
                <Typography variant="label1" className="block">
                  <strong>Default:</strong> undefined
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  When provided, overrides the internal loading state
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
                  Merges with existing autocomplete classes
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>...props</CardTitle>
                <CardDescription>Standard HTML input attributes</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="block">
                  <strong>Type:</strong>{' '}
                  <code>React.InputHTMLAttributes&lt;HTMLInputElement&gt;</code>
                </Typography>
                <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
                  All standard HTML input attributes are supported
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Accessibility">
          <Typography variant="body1">
            The Autocomplete component follows accessibility best practices.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Autocomplete is fully keyboard accessible</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Tab</strong> - Navigate to the autocomplete
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Shift + Tab</strong> - Navigate to previous focusable element
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Enter</strong> - Select the highlighted option
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Escape</strong> - Close the dropdown
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • <strong>Arrow Up/Down</strong> - Navigate through options
              </Typography>
              <Typography variant="body2" className="block">
                • <strong>Home/End</strong> - Jump to first/last option
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
                • Labels are automatically associated with inputs using <code>htmlFor</code>
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Use <code>aria-invalid</code> when autocomplete has errors (automatically handled
                with error prop)
              </Typography>
              <Typography variant="body2" className="block mb-(--lsd-spacing-smaller)">
                • Use <code>aria-label</code> for autocompletes without visible labels
              </Typography>
              <Typography variant="body2" className="block">
                • Dropdown options have proper ARIA roles and states
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
                Autocomplete has visible focus states that follow the LSD design system's focus
                indicators, ensuring keyboard users can always see which element has focus.
              </Typography>
            </CardContent>
          </Card>
        </PageSection>

        <PageNavigation
          previous={{
            title: 'Installation',
            href: '/components/installation',
          }}
          next={{
            title: 'Button',
            href: '/components/button',
          }}
        />
      </PageContent>
    </DocsLayout>
  );
}

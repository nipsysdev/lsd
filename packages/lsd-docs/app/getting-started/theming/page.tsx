'use client';

import {
  Card,
  CardContent,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Typography,
} from '@nipsys/lsd';
import { CodeExample } from '@/components/docs/CodeExample';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import { Themes } from '@/config/themes';
import { ThemeDemoCard } from '../../components/ThemeDemoCard';

export default function ThemingPage() {
  return (
    <DocsLayout>
      <PageHeader
        title="Theming"
        description="Adapt the presentation to your purpose, learn how to use and create themes."
      />

      <PageContent>
        <PageSection title="Built-in Themes">
          <Typography variant="body1" className="block mb-(--lsd-spacing-small)">
            @nipsys/lsd comes with a few built-in themes, each with light and dark variants.
          </Typography>

          <Typography variant="body1">
            Each theme maintains the core LSD principle: high contrast, clear hierarchy, and
            content‑first presentation. Choose what works for your audience — the philosophy remains
            consistent.
          </Typography>

          <div className="flex flex-col gap-(--lsd-spacing-large) mt-(--lsd-spacing-base)">
            <Tabs defaultValue={Themes[0]} className="mt-(--lsd-spacing-base)" fullWidth bordered>
              <TabsList>
                {Themes.map(theme => (
                  <TabsTrigger value={theme} key={theme} className="cap">
                    {theme}
                  </TabsTrigger>
                ))}
              </TabsList>
              {Themes.map(theme => (
                <TabsContent value={theme} key={theme}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base)">
                    <div className="flex flex-col gap-y-(--lsd-spacing-smaller)">
                      <Typography variant="subtitle2">Light mode</Typography>
                      <ThemeDemoCard themeMode="light" themeAccent={theme} />
                    </div>

                    <div className="flex flex-col gap-y-(--lsd-spacing-smaller)">
                      <Typography variant="subtitle2">Dark mode</Typography>
                      <ThemeDemoCard themeMode="dark" themeAccent={theme} />
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </PageSection>

        <PageSection title="Theme Control">
          <div className="flex flex-col gap-y-(--lsd-spacing-base)">
            <Typography variant="body1" className="block">
              Use the `dark` and `light` classes to have the element and its children displayed in
              light or dark mode.
              <br />
              Note: Light mode is used by default, thus using the `light` class is optional.
            </Typography>
            <Typography variant="body1" className="block">
              Themes are set using the `data-theme` attribute.
            </Typography>
          </div>

          <PageSection title="Setting Theme & Mode in HTML" isChild>
            <Typography variant="body1">
              You can set the theme and mode directly in your HTML by adding classes and attributes
              to any element:
            </Typography>

            <Card className="mt-(--lsd-spacing-base)">
              <CardContent>
                <CodeExample
                  useAccordion={false}
                  code={`<!-- Dark mode with teal theme -->
<html class="dark" data-theme="teal">
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>`}
                />
              </CardContent>
            </Card>

            <Typography variant="body1" className="block mt-(--lsd-spacing-base)">
              Those attributes can be applied to any element in your application. Enabling mixing
              modes and themes together.
            </Typography>

            <Card className="mt-(--lsd-spacing-base)">
              <CardContent>
                <CodeExample
                  useAccordion={false}
                  code={`<!-- Parent element with dark mode and teal theme -->
<div class="dark" data-theme="teal">
  <!-- Child elements inherit the parent's theme -->
  <p>This text uses dark mode with teal theme</p>

  <!-- Override to light mode with nord theme -->
  <div class="light" data-theme="nord">
    <p>This text uses light mode with nord theme</p>
  </div>

  <!-- Override mode only, keep parent's theme -->
  <div class="light">
    <p>This text uses light mode with teal theme</p>
  </div>
</div>`}
                />
              </CardContent>
            </Card>
          </PageSection>

          <PageSection title="Setting Theme & Mode Dynamically with JavaScript" isChild>
            <Typography variant="body1">
              You can dynamically switch themes and modes using JavaScript by manipulating an
              element's class list and attributes:
            </Typography>

            <Card className="mt-(--lsd-spacing-base)">
              <CardContent>
                <CodeExample
                  useAccordion={false}
                  code={`// Toggle between light and dark mode
document.documentElement.classList.toggle('dark');

// Set specific mode
document.documentElement.classList.add('dark');    // Enable dark mode
document.documentElement.classList.remove('dark'); // Enable light mode

// Set accent theme
document.documentElement.setAttribute('data-theme', 'teal');
document.documentElement.setAttribute('data-theme', 'nord');
document.documentElement.removeAttribute('data-theme'); // Reset to monochrome

// Override theme on a specific element
const card = document.querySelector('.card');
card.classList.add('dark');
card.setAttribute('data-theme', 'nord');`}
                />
              </CardContent>
            </Card>
          </PageSection>
        </PageSection>

        <PageSection title="Creating a custom theme">
          <Typography variant="body1" className="mt-(--lsd-spacing-base)">
            LSD uses CSS variables for theming. You can customise these variables to create your own
            theme. Here's an example based on the built-in Nord theme:
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                useAccordion={false}
                code={`/* Light mode */
[data-theme="nord"] {
  --lsd-primary: #3b6898;
  --lsd-primary-content: #e6e8eb;
  --lsd-text-neutral: #2e3440;
  --lsd-text-secondary: #4c566a;
  --lsd-background: #e6e8eb;
  --lsd-foreground: #eceff4;
  --lsd-border: #8e98aa;
  --lsd-destructive: #a3434d;
  --lsd-text-destructive: #8c3841;
  --lsd-success: #4a7040;
  --lsd-text-success: #3c5f33;
  --lsd-warning: #a16207;
  --lsd-text-warning: #7c5a12;
  --lsd-info: #2a6d86;
  --lsd-text-info: #215a6f;
}

/* Dark mode */
[data-theme="nord"] {
  &.dark,
  .dark:not([data-theme]) {
    --lsd-primary: #88c0d0;
    --lsd-primary-content: #26313d;
    --lsd-text-neutral: #eceff4;
    --lsd-text-secondary: #8690a4;
    --lsd-background: #26313d;
    --lsd-foreground: #2e3440;
    --lsd-border: #4c566a;
    --lsd-destructive: #bf616a;
    --lsd-text-destructive: #d4878e;
    --lsd-success: #a3be8c;
    --lsd-text-success: #b8ccaa;
    --lsd-warning: #d08770;
    --lsd-text-warning: #ebcb8b;
    --lsd-info: #81a1c1;
    --lsd-text-info: #9bb5cf;
  }
}`}
              />
            </CardContent>
          </Card>
        </PageSection>
      </PageContent>

      <PageNavigation
        previous={{
          title: 'Installation',
          href: '/getting-started/installation',
        }}
        next={{
          title: 'Colors',
          href: '/design-tokens/colors',
        }}
      />
    </DocsLayout>
  );
}

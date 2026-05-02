'use client';

import { Card, CardContent, Typography } from '@nipsys/lsd';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';
import { ColorValue } from './ColorValue';

export default function ColorsPage() {
  return (
    <DocsLayout>
      <PageHeader
        title="Colours"
        description="Explore the colour palette used throughout LSD components."
      />

      <PageContent>
        <PageSection title="About the Colour Palette">
          <Typography variant="body1" className="block">
            Colours are tools for signalling, not branding. LSD's palette is chosen for maximum
            contrast and accessibility across all conditions.
          </Typography>

          <Typography variant="body1" className="mt-(--lsd-spacing-base)">
            High contrast isn't a design choice — it's a commitment to inclusivity.
          </Typography>
        </PageSection>

        <PageSection title="Primary Colours">
          <Typography variant="body1" className="block">
            Primary marks essential actions and focal points — where the user needs to look to move
            forward.
          </Typography>

          <div className="inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card className="min-w-fit max-w-[250px]">
              <CardContent className="pt-(--lsd-spacing-large)">
                <div
                  className="h-24 mb-(--lsd-spacing-base)"
                  style={{ backgroundColor: 'var(--lsd-primary)' }}
                />
                <Typography variant="h5" className="mb-(--lsd-spacing-smallest)">
                  Primary
                </Typography>
                <Typography variant="label1" className="text-nowrap">
                  --lsd-primary: <ColorValue variable="--lsd-primary" />
                </Typography>
              </CardContent>
            </Card>

            <Card className="min-w-fit max-w-[250px]">
              <CardContent className="pt-(--lsd-spacing-large)">
                <div
                  className="h-24 mb-(--lsd-spacing-base)"
                  style={{ backgroundColor: 'var(--lsd-primary-content)' }}
                />
                <Typography variant="h5" className="mb-(--lsd-spacing-smallest)">
                  Primary Content
                </Typography>
                <Typography variant="label1" className="text-nowrap">
                  --lsd-primary-content: <ColorValue variable="--lsd-primary-content" />
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Text Colours">
          <Typography variant="body1" className="block">
            Text colours for primary content and supporting information, optimized for readability.
          </Typography>

          <div className="inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card className="min-w-fit max-w-[250px]">
              <CardContent className="pt-(--lsd-spacing-large)">
                <div
                  className="h-24 mb-(--lsd-spacing-base)"
                  style={{ backgroundColor: 'var(--lsd-text-neutral)' }}
                />
                <Typography variant="h5" className="mb-(--lsd-spacing-smallest)">
                  Text Primary
                </Typography>
                <Typography variant="label1" className="text-nowrap">
                  --lsd-text-neutral: <ColorValue variable="--lsd-text-neutral" />
                </Typography>
              </CardContent>
            </Card>

            <Card className="min-w-fit max-w-[250px]">
              <CardContent className="pt-(--lsd-spacing-large)">
                <div
                  className="h-24 mb-(--lsd-spacing-base)"
                  style={{ backgroundColor: 'var(--lsd-text-secondary)' }}
                />
                <Typography variant="h5" className="mb-(--lsd-spacing-smallest)">
                  Text Secondary
                </Typography>
                <Typography variant="label1" className="text-nowrap">
                  --lsd-text-secondary: <ColorValue variable="--lsd-text-secondary" />
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Surface & Border Colours">
          <Typography variant="body1" className="block">
            Surface and border colours define structure and hierarchy across the interface.
          </Typography>

          <div className="inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card className="min-w-fit max-w-[250px]">
              <CardContent className="pt-(--lsd-spacing-large)">
                <div
                  className="h-24 mb-(--lsd-spacing-base) border"
                  style={{ backgroundColor: 'var(--lsd-background)' }}
                />
                <Typography variant="h5" className="mb-(--lsd-spacing-smallest)">
                  Surface
                </Typography>
                <Typography variant="label1" className="text-nowrap">
                  --lsd-background: <ColorValue variable="--lsd-background" />
                </Typography>
              </CardContent>
            </Card>

            <Card className="min-w-fit max-w-[250px]">
              <CardContent className="pt-(--lsd-spacing-large)">
                <div
                  className="h-24 mb-(--lsd-spacing-base) border"
                  style={{ backgroundColor: 'var(--lsd-foreground)' }}
                />
                <Typography variant="h5" className="mb-(--lsd-spacing-smallest)">
                  Surface Secondary
                </Typography>
                <Typography variant="label1" className="text-nowrap">
                  --lsd-foreground: <ColorValue variable="--lsd-foreground" />
                </Typography>
              </CardContent>
            </Card>

            <Card className="min-w-fit max-w-[250px]">
              <CardContent className="pt-(--lsd-spacing-large)">
                <div
                  className="h-24 mb-(--lsd-spacing-base)"
                  style={{ backgroundColor: 'var(--lsd-border)' }}
                />
                <Typography variant="h5" className="mb-(--lsd-spacing-smallest)">
                  Border
                </Typography>
                <Typography variant="label1" className="text-nowrap">
                  --lsd-border: <ColorValue variable="--lsd-border" />
                </Typography>
              </CardContent>
            </Card>
          </div>

          <Typography variant="body1" className="mt-(--lsd-spacing-base)">
            <strong>Surface</strong> is the primary background colour for the canvas or main content
            area. <strong>Surface Secondary</strong> is used for elevated elements like cards,
            modals, and overlays that appear above the primary surface.
          </Typography>
        </PageSection>

        <PageSection title="Icon Colours">
          <Typography variant="body1" className="block">
            Icon colours maintain visual consistency across all interactive and decorative elements.
          </Typography>

          <div className="inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)" />
        </PageSection>

        <PageSection title="Semantic Colours">
          <Typography variant="body1" className="block">
            Semantic colours communicate state — success, warning, destructive actions, and
            information.
          </Typography>

          <div className="inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card className="min-w-fit max-w-[250px]">
              <CardContent className="pt-(--lsd-spacing-large)">
                <div
                  className="h-24 mb-(--lsd-spacing-base)"
                  style={{ backgroundColor: 'var(--lsd-success)' }}
                />
                <Typography variant="h5" className="mb-(--lsd-spacing-smallest)">
                  Success
                </Typography>
                <Typography variant="label1" className="text-nowrap">
                  --lsd-success: <ColorValue variable="--lsd-success" />
                </Typography>
              </CardContent>
            </Card>

            <Card className="min-w-fit max-w-[250px]">
              <CardContent className="pt-(--lsd-spacing-large)">
                <div
                  className="h-24 mb-(--lsd-spacing-base)"
                  style={{ backgroundColor: 'var(--lsd-destructive)' }}
                />
                <Typography variant="h5" className="mb-(--lsd-spacing-smallest)">
                  Destructive
                </Typography>
                <Typography variant="label1" className="text-nowrap">
                  --lsd-destructive: <ColorValue variable="--lsd-destructive" />
                </Typography>
              </CardContent>
            </Card>

            <Card className="min-w-fit max-w-[250px]">
              <CardContent className="pt-(--lsd-spacing-large)">
                <div
                  className="h-24 mb-(--lsd-spacing-base)"
                  style={{ backgroundColor: 'var(--lsd-warning)' }}
                />
                <Typography variant="h5" className="mb-(--lsd-spacing-smallest)">
                  Warning
                </Typography>
                <Typography variant="label1" className="text-nowrap">
                  --lsd-warning: <ColorValue variable="--lsd-warning" />
                </Typography>
              </CardContent>
            </Card>

            <Card className="min-w-fit max-w-[250px]">
              <CardContent className="pt-(--lsd-spacing-large)">
                <div
                  className="h-24 mb-(--lsd-spacing-base)"
                  style={{ backgroundColor: 'var(--lsd-info)' }}
                />
                <Typography variant="h5" className="mb-(--lsd-spacing-smallest)">
                  Info
                </Typography>
                <Typography variant="label1" className="text-nowrap">
                  --lsd-info: <ColorValue variable="--lsd-info" />
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Semantic Text Colours">
          <Typography variant="body1" className="block">
            Text colours for semantic states.
          </Typography>

          <div className="inline-grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card className="min-w-fit max-w-[250px]">
              <CardContent className="pt-(--lsd-spacing-large)">
                <div
                  className="h-24 mb-(--lsd-spacing-base)"
                  style={{ backgroundColor: 'var(--lsd-text-success)' }}
                />
                <Typography variant="h5" className="mb-(--lsd-spacing-smallest)">
                  Success Text
                </Typography>
                <Typography variant="label1" className="text-nowrap">
                  --lsd-text-success: <ColorValue variable="--lsd-text-success" />
                </Typography>
              </CardContent>
            </Card>

            <Card className="min-w-fit max-w-[250px]">
              <CardContent className="pt-(--lsd-spacing-large)">
                <div
                  className="h-24 mb-(--lsd-spacing-base)"
                  style={{ backgroundColor: 'var(--lsd-text-destructive)' }}
                />
                <Typography variant="h5" className="mb-(--lsd-spacing-smallest)">
                  Destructive Text
                </Typography>
                <Typography variant="label1" className="text-nowrap">
                  --lsd-text-destructive: <ColorValue variable="--lsd-text-destructive" />
                </Typography>
              </CardContent>
            </Card>

            <Card className="min-w-fit max-w-[250px]">
              <CardContent className="pt-(--lsd-spacing-large)">
                <div
                  className="h-24 mb-(--lsd-spacing-base)"
                  style={{ backgroundColor: 'var(--lsd-text-warning)' }}
                />
                <Typography variant="h5" className="mb-(--lsd-spacing-smallest)">
                  Warning Text
                </Typography>
                <Typography variant="label1" className="text-nowrap">
                  --lsd-text-warning: <ColorValue variable="--lsd-text-warning" />
                </Typography>
              </CardContent>
            </Card>

            <Card className="min-w-fit max-w-[250px]">
              <CardContent className="pt-(--lsd-spacing-large)">
                <div
                  className="h-24 mb-(--lsd-spacing-base)"
                  style={{ backgroundColor: 'var(--lsd-text-info)' }}
                />
                <Typography variant="h5" className="mb-(--lsd-spacing-smallest)">
                  Info Text
                </Typography>
                <Typography variant="label1" className="text-nowrap">
                  --lsd-text-info: <ColorValue variable="--lsd-text-info" />
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>
      </PageContent>

      <PageNavigation
        previous={{
          title: 'Theming',
          href: '/getting-started/theming',
        }}
        next={{
          title: 'Typography',
          href: '/design-tokens/typography',
        }}
      />
    </DocsLayout>
  );
}

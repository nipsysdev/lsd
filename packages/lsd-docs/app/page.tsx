'use client';

import {
  Button,
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
  Separator,
  ToggleGroup,
  ToggleGroupItem,
  Typography,
} from '@nipsys/shadcn-lsd';
import Link from 'next/link';
import { useState } from 'react';
import SocialUIPreview from './previews/social-ui';
import SystemUIPreview from './previews/system-ui';
import WorkUIPreview from './previews/work-ui';

type Preview = 'work' | 'social' | 'system';

export default function Home() {
  const [activePreview, setActivePreview] = useState<Preview>('work');

  const preview = () => {
    switch (activePreview) {
      case 'work':
        return <WorkUIPreview />;
      case 'social':
        return <SocialUIPreview />;
      case 'system':
        return <SystemUIPreview />;
    }
  };

  return (
    <div className="container mx-auto px-(--lsd-spacing-small) py-(--lsd-spacing-larger) mt-(--lsd-spacing-larger) max-w-5xl">
      <div className="flex flex-col gap-(--lsd-spacing-largest)">
        <Typography variant="h1">@nipsys/lsd</Typography>

        <Typography variant="h3">Substance over Spectacle.</Typography>

        <Typography variant="h5">
          The Logos Design System. Built on top of Radix UI and shadcn/ui.
          <br />
          Light and dark modes, themable, fully extensible.
        </Typography>

        <div className="flex gap-(--lsd-spacing-base)">
          <Button asChild>
            <Link href="/getting-started/installation">Get Started</Link>
          </Button>
          <Button asChild variant="outlined">
            <Link href="/components/button">Explore Components</Link>
          </Button>
        </div>
      </div>

      <Separator className="my-15" />

      <Typography variant="h5" className="font-bold mb-(--lsd-spacing-smaller)">
        🙶Conventional design has lost its way: chrome over content, spectacle over substance. LSD
        exists because design should serve the mission — never distract from it. We build for
        clarity, accessibility, and resilience. The message matters more than the medium.🙷
      </Typography>
      <div>
        <Button asChild variant="ghost" className="p-0! h-fit!">
          <Link href="https://logos.co" target="_blank" rel="noopener noreferrer">
            — Learn more about the philosophy at logos.co
          </Link>
        </Button>
      </div>

      <Card className="mt-15">
        <CardHeader>
          <CardTitle>
            <Typography variant="h5">Preview</Typography>
          </CardTitle>
          <CardAction>
            <ToggleGroup
              type="single"
              defaultValue="work"
              onValueChange={value => setActivePreview(value as Preview)}
            >
              <ToggleGroupItem value="work">Work UI</ToggleGroupItem>
              <ToggleGroupItem value="social">Social UI</ToggleGroupItem>
              <ToggleGroupItem value="system">System UI</ToggleGroupItem>
            </ToggleGroup>
          </CardAction>
        </CardHeader>
        <CardContent>{preview()}</CardContent>
      </Card>

      <Separator className="my-10" />

      <Typography variant="h5">Lineage</Typography>
    </div>
  );
}

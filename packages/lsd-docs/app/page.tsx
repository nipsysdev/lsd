'use client';

import { Button, Separator, Typography } from '@nipsys/shadcn-lsd';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-(--lsd-spacing-small) py-(--lsd-spacing-larger) mt-(--lsd-spacing-larger) max-w-5xl">
      <div className="flex flex-col items-center text-center pb-(--lsd-spacing-largest)">
        <Typography variant="h1" className="mb-(--lsd-spacing-largest)">
          @nipsys/lsd
        </Typography>

        <Typography variant="h5" className="mb-(--lsd-spacing-largest) max-w-2xl">
          Components built for clarity, accessibility, and real‑world use.
        </Typography>

        <div className="flex gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
          <Button asChild>
            <Link href="/getting-started/installation">Start Building</Link>
          </Button>
          <Button asChild variant="outlined">
            <Link href="/components/button">Explore Components</Link>
          </Button>
        </div>
      </div>

      <Separator className="my-(--lsd-spacing-largest)" />

      <div className="pt-(--lsd-spacing-largest) flex flex-col gap-(--lsd-spacing-largest)">
        <Typography variant="h4" className="mb-(--lsd-spacing-small)">
          An implementation of the Logos Design System
        </Typography>

        <Typography variant="body1">
          <blockquote className="border-l-2 pl-6 italic">
            Conventional design has lost its way: chrome over content, spectacle over substance.
            <br />
            LSD exists because design should serve the mission — never distract from it. We build
            for clarity, accessibility, and resilience. The message matters more than the medium.
          </blockquote>
        </Typography>

        <Typography variant="body1">
          <code>@nipsys/lsd</code> is the RadixUI/shadcn implementation of the Logos Design System
          as defined by the original Logos Brand Guidelines.
        </Typography>

        <Typography variant="body1">
          This implementation follows these principles:
          <ul>
            <li>- Functional design that prioritises content</li>
            <li>- Accessibility and usability over decoration</li>
          </ul>
        </Typography>

        <Typography variant="body1">
          It is open-source, permissive, and designed for anyone building tools meant to be
          alternatives to captured systems.
        </Typography>

        <div className="text-right">
          <Button asChild variant="link" className="text-right">
            <Link href="https://logos.co" target="_blank" rel="noopener noreferrer">
              Learn more about the philosophy behind LSD at logos.co
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

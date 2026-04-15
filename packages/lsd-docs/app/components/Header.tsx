'use client';

import { Button, SidebarTrigger } from '@nipsys/lsd';
import { GithubLogoIcon, MagnifyingGlassIcon } from '@phosphor-icons/react';
import Link from 'next/link';
import { FontToggle } from './docs/FontToggle';
import { Search } from './docs/Search';
import { ThemeAccentToggle, ThemeToggle } from './docs/ThemeToggle';

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`w-full border-b ${className || ''}`}>
      <div className="flex items-center justify-between py-(--lsd-spacing-small) px-(--lsd-spacing-base)">
        <div className="flex items-center gap-(--lsd-spacing-base)">
          <SidebarTrigger />
        </div>

        <div className="flex items-center gap-(--lsd-spacing-larger)">
          <Button
            variant="outlined"
            size="sm"
            className="hidden! md:flex! gap-(--lsd-spacing-smaller) min-w-60 justify-start!"
            onClick={() =>
              document.dispatchEvent(
                new KeyboardEvent('keydown', {
                  key: 'k',
                  metaKey: true,
                  ctrlKey: true,
                })
              )
            }
          >
            <MagnifyingGlassIcon weight="duotone" />
            <span className="mr-(--lsd-spacing-largest)">Search...</span>
          </Button>

          <ThemeToggle />
          <ThemeAccentToggle />
          <FontToggle />
          <Button variant="link" size="sm" asChild>
            <Link
              href="https://github.com/nipsysdev/shadcn-lsd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubLogoIcon weight="duotone" className="mr-(--lsd-spacing-smaller) size-5" />
              <span>Source</span>
            </Link>
          </Button>
        </div>
      </div>
      <Search />
    </header>
  );
}

'use client';

import { Button, SidebarTrigger } from '@nipsys/shadcn-lsd';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';
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

        <div className="flex items-center gap-(--lsd-spacing-large)">
          <Button
            variant="outlined"
            size="sm"
            className="flex gap-(--lsd-spacing-smaller) mr-(--lsd-spacing-largest) "
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
            <span className="mr-(--lsd-spacing-largest)">Search documentation...</span>
          </Button>

          <ThemeToggle />
          <ThemeAccentToggle />
          <FontToggle />
        </div>
      </div>
      <Search />
    </header>
  );
}

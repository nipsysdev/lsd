'use client';

import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from '@nipsys/shadcn-lsd';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <Command>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandItem><span>Calendar</span></CommandItem>
        <CommandItem><span>Search Emoji</span></CommandItem>
        <CommandItem><span>Calculator</span></CommandItem>
      </CommandList>
    </Command>
  )
};`;

export function CommandBasicExample() {
  useInIframeThemeSync();

  return (
    <div className="p-(--lsd-spacing-larger)">
      <Command className="lsd:rounded-lg lsd:border lsd:border-lsd-border lsd:shadow-md">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandItem>
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <span>Calculator</span>
          </CommandItem>
        </CommandList>
      </Command>
    </div>
  );
}

export default function Basic() {
  return <CommandBasicExample />;
}

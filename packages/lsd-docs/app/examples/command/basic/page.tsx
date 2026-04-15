'use client';

import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from '@nipsys/lsd';

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
  useSendThemeToIframes();

  return (
    <Command className="lsd:border lsd:border-lsd-border">
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
  );
}

export default function Basic() {
  return <CommandBasicExample />;
}

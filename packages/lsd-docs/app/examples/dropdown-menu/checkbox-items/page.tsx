'use client';

import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@nipsys/shadcn-lsd';
import { useState } from 'react';

export const CODE = `\`\`\`tsx
import { useState } from 'react';
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  Button,
} from '@nipsys/shadcn-lsd';

export function DropdownMenuCheckboxItems() {
  const [showBookmarks, setShowBookmarks] = useState(true);
  const [showUrls, setShowUrls] = useState(false);
  const [askPrivate, setAskPrivate] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outlined">Options</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showBookmarks}
          onCheckedChange={setShowBookmarks}
        >
          Show Bookmarks Sidebar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showUrls}
          onCheckedChange={setShowUrls}
        >
          Show URLs in Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Privacy</DropdownMenuLabel>
        <DropdownMenuCheckboxItem
          checked={askPrivate}
          onCheckedChange={setAskPrivate}
        >
          Ask Before Private Browsing
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
\`\`\`
`;

export default function Page() {
  const [showBookmarks, setShowBookmarks] = useState(true);
  const [showUrls, setShowUrls] = useState(false);
  const [askPrivate, setAskPrivate] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outlined">Options</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={showBookmarks} onCheckedChange={setShowBookmarks}>
          Show Bookmarks Sidebar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={showUrls} onCheckedChange={setShowUrls}>
          Show URLs in Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Privacy</DropdownMenuLabel>
        <DropdownMenuCheckboxItem checked={askPrivate} onCheckedChange={setAskPrivate}>
          Ask Before Private Browsing
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

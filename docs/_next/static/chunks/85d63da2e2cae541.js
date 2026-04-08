(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,85102,e=>{"use strict";var o=e.i(98134);e.i(26940);var n=e.i(59038),r=e.i(34002),t=e.i(59578),s=e.i(30257),a=e.i(70671),d=e.i(39524),u=e.i(10501),h=e.i(75201);let c=`\`\`\`tsx
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
`;function i(){let[e,c]=(0,h.useState)(!0),[i,p]=(0,h.useState)(!1),[w,k]=(0,h.useState)(!1);return(0,o.jsxs)(r.DropdownMenu,{children:[(0,o.jsx)(u.DropdownMenuTrigger,{asChild:!0,children:(0,o.jsx)(n.Button,{variant:"outlined",children:"Options"})}),(0,o.jsxs)(s.DropdownMenuContent,{children:[(0,o.jsx)(a.DropdownMenuLabel,{children:"Appearance"}),(0,o.jsx)(d.DropdownMenuSeparator,{}),(0,o.jsx)(t.DropdownMenuCheckboxItem,{checked:e,onCheckedChange:c,children:"Show Bookmarks Sidebar"}),(0,o.jsx)(t.DropdownMenuCheckboxItem,{checked:i,onCheckedChange:p,children:"Show URLs in Bar"}),(0,o.jsx)(d.DropdownMenuSeparator,{}),(0,o.jsx)(a.DropdownMenuLabel,{children:"Privacy"}),(0,o.jsx)(t.DropdownMenuCheckboxItem,{checked:w,onCheckedChange:k,children:"Ask Before Private Browsing"})]})]})}e.s(["CODE",0,c,"default",()=>i])}]);
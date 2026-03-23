(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,42836,e=>{"use strict";var o=e.i(88102);e.s(["Button",()=>o.B])},59684,e=>{"use strict";var o=e.i(2582);e.i(82419);var n=e.i(42836),r=e.i(29960),t=e.i(97419),s=e.i(35165),a=e.i(42687),d=e.i(57811),u=e.i(36416),i=e.i(86900);let c=`\`\`\`tsx
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
`;function h(){let[e,c]=(0,i.useState)(!0),[h,p]=(0,i.useState)(!1),[w,k]=(0,i.useState)(!1);return(0,o.jsxs)(r.DropdownMenu,{children:[(0,o.jsx)(u.DropdownMenuTrigger,{asChild:!0,children:(0,o.jsx)(n.Button,{variant:"outlined",children:"Options"})}),(0,o.jsxs)(s.DropdownMenuContent,{children:[(0,o.jsx)(a.DropdownMenuLabel,{children:"Appearance"}),(0,o.jsx)(d.DropdownMenuSeparator,{}),(0,o.jsx)(t.DropdownMenuCheckboxItem,{checked:e,onCheckedChange:c,children:"Show Bookmarks Sidebar"}),(0,o.jsx)(t.DropdownMenuCheckboxItem,{checked:h,onCheckedChange:p,children:"Show URLs in Bar"}),(0,o.jsx)(d.DropdownMenuSeparator,{}),(0,o.jsx)(a.DropdownMenuLabel,{children:"Privacy"}),(0,o.jsx)(t.DropdownMenuCheckboxItem,{checked:w,onCheckedChange:k,children:"Ask Before Private Browsing"})]})]})}e.s(["CODE",0,c,"default",()=>h])}]);
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,28514,o=>{"use strict";var n=o.i(98134);o.i(26940);var e=o.i(59038),t=o.i(34002),r=o.i(30257),i=o.i(70671),d=o.i(69600),u=o.i(20945),a=o.i(39524),p=o.i(10501),s=o.i(75201);let l=`
\`\`\`tsx
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  Button,
} from '@nipsys/shadcn-lsd';

export function DropdownMenuRadioItems() {
  const [position, setPosition] = useState('bottom');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outlined">
          Position: {position}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
\`\`\`
`;function D(){let[o,l]=(0,s.useState)("bottom");return(0,n.jsxs)(t.DropdownMenu,{children:[(0,n.jsx)(p.DropdownMenuTrigger,{asChild:!0,children:(0,n.jsxs)(e.Button,{variant:"outlined",children:["Position: ",o]})}),(0,n.jsxs)(r.DropdownMenuContent,{children:[(0,n.jsx)(i.DropdownMenuLabel,{children:"Panel Position"}),(0,n.jsx)(a.DropdownMenuSeparator,{}),(0,n.jsxs)(d.DropdownMenuRadioGroup,{value:o,onValueChange:l,children:[(0,n.jsx)(u.DropdownMenuRadioItem,{value:"top",children:"Top"}),(0,n.jsx)(u.DropdownMenuRadioItem,{value:"bottom",children:"Bottom"}),(0,n.jsx)(u.DropdownMenuRadioItem,{value:"right",children:"Right"})]})]})]})}o.s(["CODE",0,l,"default",()=>D])}]);
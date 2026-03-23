(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,42836,o=>{"use strict";var n=o.i(88102);o.s(["Button",()=>n.B])},90366,o=>{"use strict";var n=o.i(2582);o.i(82419);var e=o.i(42836),t=o.i(29960),r=o.i(35165),i=o.i(42687),u=o.i(58817),d=o.i(38054),a=o.i(57811),p=o.i(36416),s=o.i(86900);let l=`
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
`;function D(){let[o,l]=(0,s.useState)("bottom");return(0,n.jsxs)(t.DropdownMenu,{children:[(0,n.jsx)(p.DropdownMenuTrigger,{asChild:!0,children:(0,n.jsxs)(e.Button,{variant:"outlined",children:["Position: ",o]})}),(0,n.jsxs)(r.DropdownMenuContent,{children:[(0,n.jsx)(i.DropdownMenuLabel,{children:"Panel Position"}),(0,n.jsx)(a.DropdownMenuSeparator,{}),(0,n.jsxs)(u.DropdownMenuRadioGroup,{value:o,onValueChange:l,children:[(0,n.jsx)(d.DropdownMenuRadioItem,{value:"top",children:"Top"}),(0,n.jsx)(d.DropdownMenuRadioItem,{value:"bottom",children:"Bottom"}),(0,n.jsx)(d.DropdownMenuRadioItem,{value:"right",children:"Right"})]})]})]})}o.s(["CODE",0,l,"default",()=>D])}]);
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,42836,o=>{"use strict";var n=o.i(88102);o.s(["Button",()=>n.B])},70878,o=>{"use strict";var n=o.i(2582);o.i(82419);var e=o.i(42836),r=o.i(29960),t=o.i(35165),u=o.i(32783),d=o.i(57811),p=o.i(59988),w=o.i(36416);let M=`
\`\`\`tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  Button,
} from '@nipsys/shadcn-lsd';

export function DropdownMenuShortcuts() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outlined">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          New Tab
          <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          New Window
          <DropdownMenuShortcut>⌘+N</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Close
          <DropdownMenuShortcut>⌘+W</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Zoom In
          <DropdownMenuShortcut>⌘++</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Zoom Out
          <DropdownMenuShortcut>⌘+-</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
\`\`\`
`;function D(){return(0,n.jsxs)(r.DropdownMenu,{children:[(0,n.jsx)(w.DropdownMenuTrigger,{asChild:!0,children:(0,n.jsx)(e.Button,{variant:"outlined",children:"Open Menu"})}),(0,n.jsxs)(t.DropdownMenuContent,{children:[(0,n.jsxs)(u.DropdownMenuItem,{children:["New Tab",(0,n.jsx)(p.DropdownMenuShortcut,{children:"⌘+T"})]}),(0,n.jsxs)(u.DropdownMenuItem,{children:["New Window",(0,n.jsx)(p.DropdownMenuShortcut,{children:"⌘+N"})]}),(0,n.jsxs)(u.DropdownMenuItem,{children:["Close",(0,n.jsx)(p.DropdownMenuShortcut,{children:"⌘+W"})]}),(0,n.jsx)(d.DropdownMenuSeparator,{}),(0,n.jsxs)(u.DropdownMenuItem,{children:["Zoom In",(0,n.jsx)(p.DropdownMenuShortcut,{children:"⌘++"})]}),(0,n.jsxs)(u.DropdownMenuItem,{children:["Zoom Out",(0,n.jsx)(p.DropdownMenuShortcut,{children:"⌘+-"})]})]})]})}o.s(["CODE",0,M,"default",()=>D])}]);
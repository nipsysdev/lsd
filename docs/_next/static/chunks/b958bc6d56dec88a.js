(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,94939,o=>{"use strict";var n=o.i(98134);o.i(26940);var e=o.i(59038),r=o.i(34002),t=o.i(30257),u=o.i(93235),d=o.i(39524),p=o.i(3669),w=o.i(10501);let M=`
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
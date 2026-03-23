(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,42836,n=>{"use strict";var o=n.i(88102);n.s(["Button",()=>o.B])},72288,n=>{"use strict";var o=n.i(2582);n.i(82419);var e=n.i(42836),r=n.i(29960),u=n.i(35165),t=n.i(32783),d=n.i(42687),p=n.i(57811),M=n.i(62623),i=n.i(39456),D=n.i(20785),w=n.i(36416);let s=`\`\`\`tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  Button,
} from '@nipsys/shadcn-lsd';

export function DropdownMenuSubmenus() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outlined">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Team</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Members</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>More</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Advanced</DropdownMenuItem>
                <DropdownMenuItem>Integrations</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
\`\`\`
`;function l(){return(0,o.jsxs)(r.DropdownMenu,{children:[(0,o.jsx)(w.DropdownMenuTrigger,{asChild:!0,children:(0,o.jsx)(e.Button,{variant:"outlined",children:"Open Menu"})}),(0,o.jsxs)(u.DropdownMenuContent,{children:[(0,o.jsx)(d.DropdownMenuLabel,{children:"My Account"}),(0,o.jsx)(p.DropdownMenuSeparator,{}),(0,o.jsx)(t.DropdownMenuItem,{children:"Profile"}),(0,o.jsx)(t.DropdownMenuItem,{children:"Billing"}),(0,o.jsxs)(M.DropdownMenuSub,{children:[(0,o.jsx)(D.DropdownMenuSubTrigger,{children:"Team"}),(0,o.jsxs)(i.DropdownMenuSubContent,{children:[(0,o.jsx)(t.DropdownMenuItem,{children:"Members"}),(0,o.jsx)(t.DropdownMenuItem,{children:"Settings"}),(0,o.jsxs)(M.DropdownMenuSub,{children:[(0,o.jsx)(D.DropdownMenuSubTrigger,{children:"More"}),(0,o.jsxs)(i.DropdownMenuSubContent,{children:[(0,o.jsx)(t.DropdownMenuItem,{children:"Advanced"}),(0,o.jsx)(t.DropdownMenuItem,{children:"Integrations"})]})]})]})]}),(0,o.jsx)(p.DropdownMenuSeparator,{}),(0,o.jsx)(t.DropdownMenuItem,{variant:"destructive",children:"Log out"})]})]})}n.s(["CODE",0,s,"default",()=>l])}]);
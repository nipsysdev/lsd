(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,11745,n=>{"use strict";var o=n.i(98134);n.i(26940);var e=n.i(59038),r=n.i(34002),u=n.i(30257),d=n.i(93235),t=n.i(70671),p=n.i(39524),M=n.i(99460),i=n.i(48057),D=n.i(69298),w=n.i(10501);let s=`\`\`\`tsx
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
`;function l(){return(0,o.jsxs)(r.DropdownMenu,{children:[(0,o.jsx)(w.DropdownMenuTrigger,{asChild:!0,children:(0,o.jsx)(e.Button,{variant:"outlined",children:"Open Menu"})}),(0,o.jsxs)(u.DropdownMenuContent,{children:[(0,o.jsx)(t.DropdownMenuLabel,{children:"My Account"}),(0,o.jsx)(p.DropdownMenuSeparator,{}),(0,o.jsx)(d.DropdownMenuItem,{children:"Profile"}),(0,o.jsx)(d.DropdownMenuItem,{children:"Billing"}),(0,o.jsxs)(M.DropdownMenuSub,{children:[(0,o.jsx)(D.DropdownMenuSubTrigger,{children:"Team"}),(0,o.jsxs)(i.DropdownMenuSubContent,{children:[(0,o.jsx)(d.DropdownMenuItem,{children:"Members"}),(0,o.jsx)(d.DropdownMenuItem,{children:"Settings"}),(0,o.jsxs)(M.DropdownMenuSub,{children:[(0,o.jsx)(D.DropdownMenuSubTrigger,{children:"More"}),(0,o.jsxs)(i.DropdownMenuSubContent,{children:[(0,o.jsx)(d.DropdownMenuItem,{children:"Advanced"}),(0,o.jsx)(d.DropdownMenuItem,{children:"Integrations"})]})]})]})]}),(0,o.jsx)(p.DropdownMenuSeparator,{}),(0,o.jsx)(d.DropdownMenuItem,{variant:"destructive",children:"Log out"})]})]})}n.s(["CODE",0,s,"default",()=>l])}]);
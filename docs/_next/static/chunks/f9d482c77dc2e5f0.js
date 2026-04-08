(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,44649,n=>{"use strict";var o=n.i(98134);n.i(26940);var e=n.i(59038),r=n.i(34002),t=n.i(30257),u=n.i(93235),d=n.i(70671),i=n.i(39524),p=n.i(10501);let M=`
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  Button,
} from '@nipsys/shadcn-lsd';

export function DropdownMenuBasic() {
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
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem variant="destructive">Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
`;function D(){return(0,o.jsxs)(r.DropdownMenu,{children:[(0,o.jsx)(p.DropdownMenuTrigger,{asChild:!0,children:(0,o.jsx)(e.Button,{variant:"outlined",children:"Open Menu"})}),(0,o.jsxs)(t.DropdownMenuContent,{children:[(0,o.jsx)(d.DropdownMenuLabel,{children:"My Account"}),(0,o.jsx)(i.DropdownMenuSeparator,{}),(0,o.jsx)(u.DropdownMenuItem,{children:"Profile"}),(0,o.jsx)(u.DropdownMenuItem,{children:"Billing"}),(0,o.jsx)(u.DropdownMenuItem,{children:"Team"}),(0,o.jsx)(u.DropdownMenuItem,{variant:"destructive",children:"Log out"})]})]})}n.s(["CODE",0,M,"default",()=>D])}]);
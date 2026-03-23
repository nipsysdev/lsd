(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,62420,i=>{"use strict";var n=i.i(2582);i.i(82419);var e=i.i(10747),a=i.i(78648),t=i.i(84964),o=i.i(33891),u=i.i(63177),r=i.i(92420);let g=`
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  Button,
} from '@nipsys/shadcn-lsd';

export function NavigationMenuBasic() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="#">Product 1</NavigationMenuLink>
            <NavigationMenuLink href="#">Product 2</NavigationMenuLink>
            <NavigationMenuLink href="#">Product 3</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/about">About</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="#">Service 1</NavigationMenuLink>
            <NavigationMenuLink href="#">Service 2</NavigationMenuLink>
            <NavigationMenuLink href="#">Service 3</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
`;function v(){return(0,n.jsx)(e.NavigationMenu,{children:(0,n.jsxs)(u.NavigationMenuList,{children:[(0,n.jsxs)(t.NavigationMenuItem,{children:[(0,n.jsx)(r.NavigationMenuTrigger,{children:"Products"}),(0,n.jsxs)(a.NavigationMenuContent,{children:[(0,n.jsx)(o.NavigationMenuLink,{href:"#",children:"Product 1"}),(0,n.jsx)(o.NavigationMenuLink,{href:"#",children:"Product 2"}),(0,n.jsx)(o.NavigationMenuLink,{href:"#",children:"Product 3"})]})]}),(0,n.jsx)(t.NavigationMenuItem,{children:(0,n.jsx)(o.NavigationMenuLink,{href:"/about",children:"About"})}),(0,n.jsxs)(t.NavigationMenuItem,{children:[(0,n.jsx)(r.NavigationMenuTrigger,{children:"Services"}),(0,n.jsxs)(a.NavigationMenuContent,{children:[(0,n.jsx)(o.NavigationMenuLink,{href:"#",children:"Service 1"}),(0,n.jsx)(o.NavigationMenuLink,{href:"#",children:"Service 2"}),(0,n.jsx)(o.NavigationMenuLink,{href:"#",children:"Service 3"})]})]})]})})}i.s(["CODE",0,g,"default",()=>v])}]);
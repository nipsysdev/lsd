(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,12546,i=>{"use strict";var n=i.i(2582);i.i(82419);var e=i.i(10747),a=i.i(78648),t=i.i(84964),o=i.i(33891),g=i.i(63177),u=i.i(92420);let v=`
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuViewport,
  Button,
} from '@nipsys/shadcn-lsd';

export function NavigationMenuPositioning() {
  return (
    <div className="flex gap-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Viewport Mode</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="#">Link 1</NavigationMenuLink>
              <NavigationMenuLink href="#">Link 2</NavigationMenuLink>
              <NavigationMenuLink href="#">Link 3</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Non-Viewport Mode</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="#">Link 1</NavigationMenuLink>
              <NavigationMenuLink href="#">Link 2</NavigationMenuLink>
              <NavigationMenuLink href="#">Link 3</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
`;function r(){return(0,n.jsxs)("div",{className:"flex gap-4",children:[(0,n.jsx)(e.NavigationMenu,{children:(0,n.jsx)(g.NavigationMenuList,{children:(0,n.jsxs)(t.NavigationMenuItem,{children:[(0,n.jsx)(u.NavigationMenuTrigger,{children:"Viewport Mode"}),(0,n.jsxs)(a.NavigationMenuContent,{children:[(0,n.jsx)(o.NavigationMenuLink,{href:"#",children:"Link 1"}),(0,n.jsx)(o.NavigationMenuLink,{href:"#",children:"Link 2"}),(0,n.jsx)(o.NavigationMenuLink,{href:"#",children:"Link 3"})]})]})})}),(0,n.jsx)(e.NavigationMenu,{viewport:!1,children:(0,n.jsx)(g.NavigationMenuList,{children:(0,n.jsxs)(t.NavigationMenuItem,{children:[(0,n.jsx)(u.NavigationMenuTrigger,{children:"Non-Viewport Mode"}),(0,n.jsxs)(a.NavigationMenuContent,{children:[(0,n.jsx)(o.NavigationMenuLink,{href:"#",children:"Link 1"}),(0,n.jsx)(o.NavigationMenuLink,{href:"#",children:"Link 2"}),(0,n.jsx)(o.NavigationMenuLink,{href:"#",children:"Link 3"})]})]})})})]})}i.s(["CODE",0,v,"default",()=>r])}]);
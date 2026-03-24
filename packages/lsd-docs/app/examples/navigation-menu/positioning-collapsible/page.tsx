'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@nipsys/shadcn-lsd';

export const CODE = `
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
`;

export default function Page() {
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

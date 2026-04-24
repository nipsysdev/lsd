'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'sm';

/**
 * @docSection usage
 */
export const CODE = `
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@nipsys/lsd';

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
          <NavigationMenuLink href="#">About</NavigationMenuLink>
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
`;

export default function Page() {
  useSendThemeToIframes();

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
          <NavigationMenuLink href="#">About</NavigationMenuLink>
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

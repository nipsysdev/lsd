'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@nipsys/shadcn-lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex gap-(--lsd-spacing-base)">
      {/* Default: Non-Viewport Mode (recommended) */}
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Default Mode</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="#">Link 1</NavigationMenuLink>
              <NavigationMenuLink href="#">Link 2</NavigationMenuLink>
              <NavigationMenuLink href="#">Link 3</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Viewport Mode - requires explicit viewport={true} */}
      <NavigationMenu viewport={true}>
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
    </div>
  );
}`;

function Example() {
  useSendThemeToIframes();

  return (
    <div className="flex gap-(--lsd-spacing-base)">
      {/* Default: Non-Viewport Mode (recommended) */}
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Default Mode</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="#">Link 1</NavigationMenuLink>
              <NavigationMenuLink href="#">Link 2</NavigationMenuLink>
              <NavigationMenuLink href="#">Link 3</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Viewport Mode - requires explicit viewport={true} */}
      <NavigationMenu viewport={true}>
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
    </div>
  );
}

export default function Page() {
  return <Example />;
}

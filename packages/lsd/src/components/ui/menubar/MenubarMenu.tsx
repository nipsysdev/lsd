import { Menubar as MenubarPrimitive } from 'radix-ui';
import type * as React from 'react';

/**
 * Container for a menu with trigger and content.
 *
 * @exportAs sub
 */
function MenubarMenu({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />;
}

export { MenubarMenu };

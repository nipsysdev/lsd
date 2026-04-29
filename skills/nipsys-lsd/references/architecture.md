# Component Architecture Patterns (LSD)

## 1. Radix Primitive Wrapper
Wraps Radix primitives with LSD styling, handles `asChild` composition via `Slot`.

```tsx
import * as Primitive from '@radix-ui/react-checkbox'
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'

export const Checkbox = forwardRef<
  ElementRef<typeof Primitive.Root>,
  ComponentPropsWithoutRef<typeof Primitive.Root> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => (
  <Primitive.Root ref={ref} className={cn(/* base */, className)} {...props} />
))
Checkbox.displayName = Primitive.Root.displayName
```

## 2. CVA Pattern
Uses `class-variance-authority` for variants/sizes. Consistent `size`, `variant` props.

```tsx
import { cva } from 'class-variance-authority'
import { type SizeVariant, type SquareSize } from '@/lib/types'

const { base, variants } = cva('base-classes', {
  variants: {
    size: { sm: 's-sm', md: 's-md', lg: 's-lg' },
    variant: { default: 'v-default', destructive: 'v-destructive' },
  },
  defaultVariants: { size: 'md', variant: 'default' },
})

export const Button = forwardRef<..., SizeVariant props>(({ size, variant, className, ... }, ref) => (
  <button ref={ref} className={base({ size, variant, className })} />
))
```

## Components: Button, Badge, Toggle, Label, Alert, InputGroupAddon, Tabs, Accordion, SidebarMenuButton, ButtonGroup, Typography, Menubar (13 total)

## 3. Context Provider
Composite components with shared state. Provider + child components consuming context.

```tsx
const TabsContext = createContext<TabsContextValue | null>(null)

const Tabs = forwardRef<..., TabsProps>(({ defaultValue, onValueChange, children, ... }, ref) => (
  <TabsContext.Provider value={{ value, onValueChange }}>
    <Primitive.Root value={value} onValueChange={onValueChange}>{children}</Primitive.Root>
  </TabsContext.Provider>
))

export const TabsList = /* uses TabsContext */
export const TabsTrigger = /* uses TabsContext */
export const TabsContent = /* uses TabsContext */
```

## Components: Tabs, InputGroup, Field, Dialog, NavigationMenu, Sidebar

## 4. Static Component
Simple presentational components, minimal props, often text/icon displays.

```tsx
export const Separator = forwardRef<..., SeparatorProps>(({ className, orientation = 'horizontal', decorative, ... }, ref) => (
  <Primitive.Root ref={ref} decorative={decorative} orientation={orientation} className={cn(...)} />
))
```

## 5. Composite/Custom
Complex components combining multiple patterns or external libraries.

```tsx
// Autocomplete: cmdk + dialog + CVA variants
export const Autocomplete = ({ options, filterFn, ... }) => {
  const [open, setOpen] = useState(false)
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <Command>
        <CommandInput />
        <PopoverContent>
          <CommandList><CommandGroup>{options.map(...)}</CommandGroup></CommandList>
        </PopoverContent>
      </Command>
    </Popover>
  )
}
```

## Components: Autocomplete (cmdk), Calendar (react-day-picker), Sonner (toast system)

## Common Implementation Patterns

**Ref Forwarding**
```tsx
import { forwardRef } from 'react'
export const Component = forwardRef<HTMLButtonElement, ComponentProps>((props, ref) => ( ... ))
```

**Class Merging** - `cn()` NOT exported from LSD, implement locally:
```tsx
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))
```

**Display Name** - Required for debugging with React DevTools
```tsx
Component.displayName = 'Component'
```

**asChild Prop** - Enables Radix Slot pattern for custom composition
```tsx
export const Button = ({ asChild = false, ... }) => asChild ? <Slot>{child}</Slot> : <button />
```

**data-slot Attributes** - Styling hooks for parent/child relationships
```tsx
<div data-slot="trigger" />
<div data-slot="content" />
```

**Consistent Prop Naming**
- `size` - dimension variants (sm, md, lg)
- `variant` - visual intent (default, destructive, outline)
- `disabled` - interaction disabled
- `loading` - loading state
- `error` - error state

## Type Definitions and Utilities

```tsx
// @/lib/types
export type SizeVariant = 'sm' | 'md' | 'lg'
export type SquareSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type BorderVariant = 'none' | 'light' | 'default' | 'medium'
```

## Exported Utilities from LSD

 LSD exports minimal utilities. Most are internal primitives.
- Radix primitives re-exported as-is
- No `cn()` export - implement with `clsx` + `tailwind-merge`
- Type utilities are internal to the package

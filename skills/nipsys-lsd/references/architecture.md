# LSD Component Architecture Patterns

Detailed guide to the 5 architectural patterns used in @nipsys/lsd components with code examples.

## The 5 Architectural Patterns

1. **Radix Primitive Wrapper Pattern** (25+ components)
2. **CVA Pattern** (10 components)
3. **Context Provider Pattern** (8 components)
4. **Static Component Pattern** (5 components)
5. **Composite/Custom Pattern** (3 components)

---

## Pattern 1: Radix Primitive Wrapper Pattern

### Concept
Wraps Radix UI primitives with LSD styling, uses React.forwardRef, exports displayName. This is the most common pattern.

### Characteristics
- Wraps a Radix primitive
- Uses `forwardRef` for ref forwarding
- Applies `cn()` utility for class merging
- Always sets `displayName`
- Minimal logic, just styling and prop forwarding

### Code Example
```tsx
import * as React from 'react';
import { Separator as SeparatorPrimitive } from '@radix-ui/react-separator';
import { cn } from '@/lib/utils';

export interface SeparatorProps extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive> {}

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive>,
  SeparatorProps
>(({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => (
  <SeparatorPrimitive
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn(
      'shrink-0 bg-border',
      orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
      className
    )}
    {...props}
  />
)
Separator.displayName = 'Separator';

export { Separator };
```

### Real-World Examples from LSD

**Button Component**
```tsx
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size = 'md', variant = 'filled', ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ size, variant }), className)}
      {...props}
    />
  )
)
Button.displayName = 'Button';
```

**Checkbox Component**
```tsx
const Checkbox = React.forwardRef<
  HTMLButtonElement,
  CheckboxProps
>(({ className, variant = 'default', size = 'md', ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(checkboxVariants({ size, variant }), className)}
    {...props}
  >
    <CheckboxPrimitive.Indicator>
      <CheckIcon />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = 'Checkbox';
```

**Switch Component**
```tsx
const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ className, variant = 'default', ...props }, ref) => (
    <SwitchPrimitive.Root
      ref={ref}
      className={cn(switchVariants({ variant }), className)}
      {...props}
    >
      <SwitchPrimitive.Thumb />
    </SwitchPrimitive.Root>
  )
)
Switch.displayName = 'Switch';
```

**Toggle Component**
```tsx
const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({ className, pressed, pressedChange, ...props }, ref) => (
    <TogglePrimitive.Root
      ref={ref}
      pressed={pressed}
      onPressedChange={pressedChange}
      className={cn(toggleVariants(), className)}
      {...props}
    />
  )
)
Toggle.displayName = 'Toggle';
```

**Slider Component**
```tsx
const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, orientation = 'horizontal', ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    orientation={orientation}
    className={cn('relative flex', orientation === 'horizontal' ? 'w-full' : 'h-full', className)}
    {...props}
  >
    <SliderPrimitive.Track className="bg-primary/20 flex-1 h-1">
      <SliderPrimitive.Range className="bg-primary h-full rounded" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-4 w-4 rounded bg-primary" />
  </SliderPrimitive.Root>
))
Slider.displayName = 'Slider';
```

### When to Use
- When you need to style a Radix primitive
- When you need accessibility features built-in
- When you need keyboard navigation
- When component behavior is standard

---

## Pattern 2: CVA Pattern

### Concept
Uses class-variance-authority (CVA) for variant management with `variant` and `size` props. Provides multiple pre-defined variants for different visual styles.

### Characteristics
- Uses CVA for variant definitions
- Supports `variant` and `size` props
- Defines `baseClasses` for shared styles
- `defaultVariants` for fallback values
- Often combines with Radix primitives

### Code Example
```tsx
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const componentVariants = cva('base-classes', {
  variants: {
    variant: {
      default: 'default-classes',
      destructive: 'destructive-classes',
    },
    size: {
      sm: 'small-classes',
      md: 'medium-classes',
      lg: 'large-classes',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

function Component({ variant, size, className, ...props }: Props) {
  return (
    <div className={cn(componentVariants({ variant, size }), className)} {...props} />
  );
}
```

### Real-World Examples from LSD

**Badge Variants**
```tsx
const badgeVariants = cva(
  'inline-flex items-center justify-center rounded px-2.5 py-0.5 text-xs font-semibold',
  {
    variants: {
      variant: {
        default: 'bg-primary/10 text-primary',
        outlined: 'border border-primary text-primary bg-transparent',
        ghost: 'bg-transparent text-primary',
        destructive: 'bg-destructive/10 text-destructive',
      },
      size: {
        sm: 'text-[10px] px-2 py-0',
        md: 'text-xs px-2.5 py-0.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export function Badge({ variant, size, className, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant, size }), className)} {...props} />;
}
```

**Button Variants**
```tsx
const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        filled: 'bg-primary text-primary-foreground hover:bg-primary/90',
        outlined: 'border border-primary bg-transparent text-primary hover:bg-primary/10',
        ghost: 'bg-transparent text-primary hover:bg-primary/10',
        link: 'text-primary underline-offset-4 hover:underline',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      },
      size: {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-4',
        lg: 'h-11 px-8',
      },
    },
    defaultVariants: {
      variant: 'filled',
      size: 'md',
    },
  }
);
```

**TextField Variants**
```tsx
const textFieldVariants = cva(
  'flex flex-col',
  {
    variants: {
      variant: {
        default: '',
        outlined: '',
        underlined: '',
      },
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);
```

### When to Use
- When component needs multiple visual variants
- When component needs different sizes
- When combining variant patterns with other patterns
- When styling needs to be consistent across variants

---

## Pattern 3: Context Provider Pattern

### Concept
Composite components with shared state via React Context. Provides hierarchical structure where child components access parent state.

### Characteristics
- Creates React Context for state sharing
- Root component provides context value
- Child components consume context
- Often combines with Radix primitives
- Enables complex component hierarchies

### Code Example
```tsx
import * as React from 'react';

const Context = React.createContext<ContextValue | undefined>(undefined);

function Root({ children, ...props }: RootProps) {
  const [value, setValue] = React.useState(defaultValue);

  return (
    <Context.Provider value={{ value, setValue, ...props }}>
      <Primitive {...props}>{children}</Primitive>
    </Context.Provider>
  );
}

function Child() {
  const context = React.useContext(Context);
  if (!context) throw new Error('Child must be used within Root');
  const { value, setValue } = context;
  // Use context values
}
```

### Real-World Examples from LSD

**Tabs Component**
```tsx
const TabsContext = React.createContext<TabsContextValue | undefined>(
  undefined
);

function Tabs({ value, onValueChange, children, ...props }: TabsProps) {
  return (
    <TabsContext.Provider value={{ value, onValueChange }}>
      <TabsPrimitive {...props}>{children}</TabsPrimitive>
    </TabsContext.Provider>
  );
}

function TabsTrigger({ value: triggerValue, children, ...props }: TabsTriggerProps) {
  const context = React.useContext(TabsContext);
  const { value, onValueChange } = context!;

  return (
    <TabsPrimitive.Trigger
      value={triggerValue}
      onClick={() => onValueChange?.(triggerValue)}
      className={value === triggerValue ? 'active-classes' : 'inactive-classes'}
      {...props}
    >
      {children}
    </TabsPrimitive.Trigger>
  );
}
```

**InputGroup Component**
```tsx
const InputGroupContext = React.createContext<InputGroupContextValue | undefined>(
  undefined
);

function InputGroup({ children, ...props }: InputGroupProps) {
  return (
    <InputGroupContext.Provider value={props}>
      <div className={cn('flex items-center', props.className)} {...props}>
        {children}
      </div>
    </InputGroupContext.Provider>
  );
}

function InputGroupAddOn({ children, className }: InputGroupAddOnProps) {
  const context = React.useContext(InputGroupContext);
  return (
    <div className={cn('relative flex items-center', className)}>
      {children}
    </div>
  );
}

function InputGroupAddOnIcon({ children }: InputGroupAddOnIconProps) {
  return (
    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
      {children}
    </div>
  );
}
```

**Dialog Component Pattern** (Simplified)
```tsx
import * as DialogPrimitive from '@radix-ui/react-dialog';

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50" />
    <DialogPrimitive.Content
      ref={ref}
      className={cn('fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2', className)}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
))
DialogContent.displayName = 'DialogContent';
```

### When to Use
- When components need shared state
- When building composable hierarchies
- When parent-child communication is needed
- When complex component structure is required

---

## Pattern 4: Static Component Pattern

### Concept
Simple presentational components without complex logic or state. Often wraps HTML elements with consistent styling.

### Characteristics
- Simple functional components
- No complex state management
- Extends native HTML element props
- Uses `cn()` for class merging
- Often wraps single HTML element

### Code Example
```tsx
import * as React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border bg-card text-card-foreground shadow-sm',
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: CardProps) {
  return (
    <div
      className={cn('flex flex-col space-y-1.5 p-6', className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: CardProps) {
  return (
    <div className={cn('p-6 pt-0', className)} {...props} />
  );
}
```

### Real-World Examples from LSD

**Alert Component**
```tsx
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'destructive';
}

function Alert({ className, variant = 'default', ...props }: AlertProps) {
  return (
    <div
      role="alert"
      className={cn(
        'relative w-full rounded-lg border p-4',
        variant === 'default' && 'bg-white border-gray-200',
        variant === 'destructive' && 'bg-red-50 border-red-200',
        className
      )}
      {...props}
    />
  );
}
```

**Avatar Component**
```tsx
export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {}

function Avatar({ className, ...props }: AvatarProps) {
  return <div className={cn('relative shrink-0', className)} {...props} />;
}

function AvatarImage({ className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      className={cn('aspect-square h-full w-full rounded-full', className)}
      {...props}
    />
  );
}

function AvatarFallback({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex h-full w-full items-center justify-center rounded-full bg-muted',
        className
      )}
      {...props}
    />
  );
}
```

**Avatar Internal State (Hybrid)**
```tsx
const Avatar = React.forwardRef<
  HTMLDivElement,
  AvatarProps
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex shrink-0 overflow-hidden rounded-full',
      className
    )}
    {...props}
  />
))
Avatar.displayName = 'AvatarPrimitive.Root';

const AvatarImage = React.forwardRef<
  HTMLImageElement,
  AvatarImageProps
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('aspect-square h-full w-full', className)}
    {...props}
  />
))
AvatarImage.displayName = 'AvatarPrimitive.Image';

const AvatarFallback = React.forwardRef<
  HTMLDivElement,
  AvatarFallbackProps
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-muted',
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = 'AvatarPrimitive.Fallback';
```

### When to Use
- For simple presentational components
- When wrapping HTML elements with styling
- When no complex state is needed
- For card, alert, avatar-like components

---

## Pattern 5: Composite/Custom Pattern

### Concept
Complex components combining multiple patterns or external libraries. Custom implementations that don't fit into standard patterns.

### Characteristics
- Combines multiple patterns
- Integrates external libraries
- Complex state management
- Custom implementations
- Often integrates non-Radix dependencies

### Real-World Examples from LSD

**Autocomplete Component** (Radix Popover + cmdk)
```tsx
import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { Command } from 'cmdk';

function Autocomplete({ options, value, onChange, ...props }: AutocompleteProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      <PopoverPrimitive.Trigger asChild>
        <Button variant="outlined" className="w-full justify-start">
          {value?.label || 'Select...'}
        </Button>
      </PopoverPrimitive.Trigger>
      <PopoverPrimitive.Content>
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.label}
                  onSelect={() => {
                    onChange(option);
                    setOpen(false);
                  }}
                >
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Root>
  );
}
```

**Calendar Component** (react-day-picker integration)
```tsx
import * as React from 'react';
import { DayPicker } from 'react-day-picker';

function Calendar({
  mode = 'single',
  selected,
  onSelect,
  className,
  classNames,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      mode={mode}
      selected={selected}
      onSelect={onSelect}
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        nav: 'space-x-1 flex items-center',
        ...classNames,
      }}
      {...props}
    />
  );
}
```

**Sonner Component** (sonner toast library)
```tsx
import * as React from 'react';
import { toast as sonnerToast } from 'sonner';

function Toaster() {
  return (
    <div className="fixed bottom-0 right-0 z-50 flex flex-col gap-2 p-4">
      {/* Toast container */}
    </div>
  );
}

function Toast({ toast, onDismiss }: ToastProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 rounded-lg border p-4 shadow-lg animate-in slide-in-from-right',
        toast.variant === 'destructive' && 'border-destructive bg-destructive/10'
      )}
    >
      {/* Toast content */}
    </div>
  );
}
```

**Sheet Component** (Built on Radix Dialog)
```tsx
const Sheet = Dialog;
const SheetTrigger = DialogTrigger;
const SheetContent = React.forwardRef<
  React.ElementRef<typeof DialogContent>,
  SheetContentProps
>(({ side = 'right', className, children, ...props }, ref) => (
  <DialogContent
    ref={ref}
    className={cn(
      'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out duration-500',
      side === 'right' && 'inset-y-0 right-0 h-full w-[300px] sm:w-[400px]',
      className
    )}
    {...props}
  >
    {children}
  </DialogContent>
))
SheetContent.displayName = 'SheetContent';
```

### When to Use
- When integrating external libraries (cmdk, react-day-picker, sonner)
- When building complex composite components
- When custom implementation is required
- When multiple patterns need to be combined

---

## Pattern Selection Guide

| Use Case | Pattern | Example |
|----------|---------|---------|
| Style Radix primitive | Pattern 1 | Separator, Switch, Toggle |
| Multiple variants/sizes | Pattern 2 | Button, Badge, Checkbox |
| Shared state in hierarchy | Pattern 3 | Tabs, InputGroup, Dialog |
| Simple presentational | Pattern 4 | Alert, Card, Avatar |
| Complex/custom integration | Pattern 5 | Autocomplete, Calendar, Sonner |

## Important Notes

- **Most components use Pattern 1** (Radix Primitive Wrapper)
- **CVA often combines with Pattern 1** (Button Checkbox uses both)
- **Pattern 3 is essential for composition** (Tabs, Dialog, Select)
- **Pattern 4 is for simple UI elements** (Card, Alert, Avatar)
- **Pattern 5 handles complex integrations** (Autocomplete, Calendar)
- All patterns use `forwardRef` when needed
- All patterns use `cn()` for class merging
- All patterns set `displayName` for debugging

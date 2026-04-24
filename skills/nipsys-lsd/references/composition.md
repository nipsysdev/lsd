# LSD Component Composition

Complete guide to component composition patterns and sub-component usage in @nipsys/lsd.

## Concept

Many LSD components are composable, meaning they consist of a root component and sub-components that work together. Always import and use all required sub-components for proper functionality and accessibility.

## Composite Components

### Dialog

**Structure:** DialogRoot, DialogTrigger, DialogContent, DialogTitle, DialogClose

```tsx
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogClose } from '@nipsys/lsd';

function Example() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>
          <Typography variant="h4">Dialog Title</Typography>
        </DialogTitle>
        <DialogDescription>
          <Typography variant="body2">Dialog description goes here.</Typography>
        </DialogDescription>
        <div className="mt-(--lsd-spacing-base)">
          <Button>Continue</Button>
          <DialogClose>
            <Button variant="outlined">Cancel</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
```

**Required sub-components:**
- ❌ **You MUST import:** Dialog, DialogTrigger, DialogContent, DialogTitle, DialogClose

### AlertDialog

**Structure:** AlertDialogRoot, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel

```tsx
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from '@nipsys/lsd';

function Example() {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button variant="destructive">Delete</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>
          <Typography variant="h4">Are you sure?</Typography>
        </AlertDialogTitle>
        <AlertDialogDescription>
          <Typography variant="body2">
            This action cannot be undone.
          </Typography>
        </AlertDialogDescription>
        <div className="flex gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
          <AlertDialogCancel>
            <Button variant="outlined">Cancel</Button>
          </AlertDialogCancel>
          <AlertDialogAction>
            <Button variant="destructive">Delete</Button>
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
```

**Required sub-components:**
- ❌ **You MUST import:** AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel

### Sheet

**Structure:** SheetRoot, SheetTrigger, SheetContent, SheetTitle, SheetClose, SheetHeader

```tsx
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetClose,
  SheetHeader,
} from '@nipsys/lsd';

function Example() {
  return (
    <Sheet>
      <SheetTrigger>
        <Button>Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Typography variant="h4">Sheet Title</Typography>
          </SheetTitle>
        </SheetHeader>
        <SheetDescription>
          <Typography variant="body2">Sheet content goes here.</Typography>
        </SheetDescription>
        <SheetClose>
          <Button variant="outlined">Close</Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
```

**Required sub-components:**
- ❌ **You MUST import:** Sheet, SheetTrigger, SheetContent, SheetTitle, SheetClose, SheetHeader

### DropdownMenu

**Structure:** DropdownMenuRoot, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@nipsys/lsd';

function Example() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button>Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <Typography variant="label1">Actions</Typography>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Typography variant="body1">Edit</Typography>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Typography variant="body1">Delete</Typography>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

**Required sub-components:**
- ❌ **You MUST import:** DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem

### Popover

**Structure:** PopoverRoot, PopoverTrigger, PopoverContent

```tsx
import { Popover, PopoverTrigger, PopoverContent } from '@nipsys/lsd';

function Example() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>Trigger</Button>
      </PopoverTrigger>
      <PopoverContent>
        <Typography variant="body2">Popover content</Typography>
      </PopoverContent>
    </Popover>
  );
}
```

**Required sub-components:**
- ❌ **You MUST import:** Popover, PopoverTrigger, PopoverContent

### Tabs

**Structure:** TabsRoot, TabsList, TabsTrigger, TabsContent

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@nipsys/lsd';

function Example() {
  const [value, setValue] = React.useState('tab1');

  return (
    <Tabs value={value} onValueChange={setValue}>
      <TabsList>
        <TabsTrigger value="tab1">
          <Typography variant="body1">Tab 1</Typography>
        </TabsTrigger>
        <TabsTrigger value="tab2">
          <Typography variant="body1">Tab 2</Typography>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <Typography variant="body1">Content 1</Typography>
      </TabsContent>
      <TabsContent value="tab2">
        <Typography variant="body1">Content 2</Typography>
      </TabsContent>
    </Tabs>
  );
}
```

**Required sub-components:**
- ❌ **You MUST import:** Tabs, TabsList, TabsTrigger, TabsContent

### InputGroup

**Structure:** InputGroupRoot, InputGroupAddOn, InputGroupAddOnIcon

```tsx
import { InputGroup, InputGroupAddOn, InputGroupAddOnIcon } from '@nipsys/lsd';

function Example() {
  return (
    <InputGroup>
      <InputGroupAddOn>
        <InputGroupAddOnIcon>
          <SearchIcon weight="duotone" />
        </InputGroupAddOnIcon>
      </InputGroupAddOn>
      <Input placeholder="Search..." />
      <InputGroupAddOn>USD</InputGroupAddOn>
    </InputGroup>
  );
}
```

**Required sub-components:**
- ❌ **You MUST import:** InputGroup, InputGroupAddOn, InputGroupAddOnIcon

### Select

**Structure:** SelectRoot, SelectTrigger, SelectValue, SelectContent, SelectItem

```tsx
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@nipsys/lsd';

function Example() {
  return (
    <Select defaultValue="option1">
      <SelectTrigger>
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">
          <Typography variant="body1">Option 1</Typography>
        </SelectItem>
        <SelectItem value="option2">
          <Typography variant="body1">Option 2</Typography>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
```

**Required sub-components:**
- ❌ **You MUST import:** Select, SelectTrigger, SelectValue, SelectContent, SelectItem

### Command

**Structure:** CommandRoot, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator

```tsx
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from '@nipsys/lsd';

function Example() {
  return (
    <Command>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Typography variant="body1">Calendar</Typography>
          </CommandItem>
          <CommandItem>
            <Typography variant="body1">Settings</Typography>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
```

**Required sub-components:**
- ❌ **You MUST import:** Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem

### NavigationMenu

**Structure:** NavigationMenuRoot, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink

```tsx
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@nipsys/lsd';

function Example() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Typography variant="body1">Menu</Typography>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="/item1">
              <Typography variant="body1">Item 1</Typography>
            </NavigationMenuLink>
            <NavigationMenuLink href="/item2">
              <Typography variant="body1">Item 2</Typography>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
```

**Required sub-components:**
- ❌ **You MUST import:** NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger

### Menubar

**Structure:** MenubarRoot, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator

```tsx
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
} from '@nipsys/lsd';

function Example() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <Typography variant="body1">File</Typography>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Typography variant="body1">New</Typography>
          </MenubarItem>
          <MenubarItem>
            <Typography variant="body1">Open</Typography>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <Typography variant="body1">Quit</Typography>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
```

**Required sub-components:**
- ❌ **You MUST import:** Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem

### Form

**Structure:** FormRoot, FormField, FormItem, FormLabel, FormControl, FormMessage

```tsx
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage
} from '@nipsys/lsd';

function Example() {
  const form = useForm();

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              <Typography variant="label1">Email</Typography>
            </FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </Form>
  );
}
```

**Required sub-components:**
- ❌ **You MUST import:** Form, FormField, FormItem, FormLabel, FormControl, FormMessage

### Sidebar

**Structure:** SidebarRoot, SidebarHeader, SidebarLogo, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton

```tsx
import {
  Sidebar,
  SidebarHeader,
  SidebarLogo,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@nipsys/lsd';

function Example() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarLogo>
          <Typography variant="h4">Logo</Typography>
        </SidebarLogo>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <Typography variant="label1">Menu</Typography>
          </SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <DashboardIcon weight="duotone" />
                <Typography variant="body1">Dashboard</Typography>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
```

**Required sub-components:**
- ❌ **You MUST import:** Sidebar, SidebarHeader, SidebarLogo, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton

## Simple Components (No Composition)

These components work standalone and don't require sub-components:

- Button, ButtonGroup
- Input, Textarea
- Checkbox, Switch, RadioGroup, Toggle, ToggleGroup
- Card, Alert, Badge, Avatar
- Progress, Slider
- Typography, Separator, ScrollArea
- Sonner, Tooltip

## Common Pitfalls

| ❌ Wrong | ✅ Right |
|----------|----------|
| Using only root component | Import ALL required sub-components |
| `import { Dialog } from '@nipsys/lsd'` | `import { Dialog, DialogTrigger, DialogContent, DialogTitle } from '@nipsys/lsd'` |
| Forgetting DialogTitle | Always include DialogTitle for accessibility |
| Mixing components incorrectly | Follow the defined pattern for each component |
| Using Dialog for confirmations | Use AlertDialog for destructive actions |

## Important Notes

- **ALWAYS** import all sub-components for composite components
- Sub-components provide accessibility features (ARIA, keyboard navigation)
- Missing sub-components may break functionality and accessibility
- Composite components use React Context internally for state sharing
- Each composite component has a specific structure - follow the pattern
- Use the example patterns above as templates

# Component Composition Patterns

## Pattern Overview

LSD uses compound component composition where parent components manage state and behavior, while sub-components render UI and interact with the parent context. This enables flexible layouts without prop drilling.

## Major Composition Trees

### Dialog (11 sub-components)
```
Dialog
├── DialogTrigger (opens dialog)
├── DialogPortal (portal container)
├── DialogOverlay (backdrop)
├── DialogContent (main container)
│   ├── DialogHeader
│   │   ├── DialogTitle
│   │   └── DialogDescription
│   ├── DialogFooter
│   └── DialogClose
```

### AlertDialog (12 sub-components)
Same hierarchy as Dialog, prefixed with AlertDialog:
- AlertDialog, AlertDialogTrigger, AlertDialogPortal, AlertDialogOverlay
- AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription
- AlertDialogFooter, AlertDialogAction, AlertDialogCancel

### Sheet (11 sub-components)
Same hierarchy as Dialog, prefixed with Sheet:
- Sheet, SheetTrigger, SheetPortal, SheetOverlay, SheetContent
- SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose

### DropdownMenu (16 sub-components)
```
DropdownMenu
├── DropdownMenuTrigger
├── DropdownMenuPortal
└── DropdownMenuContent
    ├── DropdownMenuLabel
    ├── DropdownMenuGroup
    │   └── DropdownMenuItem / DropdownMenuCheckboxItem / DropdownMenuRadioItem
    ├── DropdownMenuRadioGroup
    │   └── DropdownMenuRadioItem
    ├── DropdownMenuSeparator
    ├── DropdownMenuShortcut
    └── DropdownMenuSub
        ├── DropdownMenuSubTrigger
        └── DropdownMenuSubContent
```

### Sidebar (22 sub-components)
```
Sidebar (main container)
├── SidebarProvider (context)
├── SidebarContent (scrollable area)
│   ├── SidebarHeader
│   ├── SidebarGroup
│   │   ├── SidebarGroupLabel
│   │   ├── SidebarGroupAction
│   │   └── SidebarGroupContent
│   │       └── SidebarMenu
│   │           ├── SidebarMenuItem
│   │           │   ├── SidebarMenuButton
│   │           │   ├── SidebarMenuAction
│   │           │   ├── SidebarMenuBadge
│   │           │   ├── SidebarMenuSub
│   │           │   │   ├── SidebarMenuSubItem
│   │           │   │   └── SidebarMenuSubButton
│   │           └── SidebarMenuSkeleton
│   ├── SidebarSeparator
│   ├── SidebarInput
│   └── SidebarFooter
├── SidebarInset (main content area)
├── SidebarTrigger (toggle button)
└── SidebarRail (collapsed toggle)
```

### Field (10 sub-components)
Field, FieldTitle, FieldLabel, FieldLegend, FieldContent, FieldSet, FieldGroup, FieldSeparator, FieldDescription, FieldError

### Select (10 sub-components)
Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem, SelectSeparator, SelectScrollUpButton, SelectScrollDownButton

### Card (7 sub-components)
Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction

### Avatar (6 sub-components)
Avatar, AvatarImage, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarBadge

### Table (8 sub-components)
Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption

### Command (9 sub-components)
Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator, CommandShortcut

### NavigationMenu (8 sub-components)
NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink, NavigationMenuViewport, NavigationMenuIndicator

### Menubar (16 sub-components)
Menubar, MenubarMenu, MenubarTrigger, MenubarPortal, MenubarContent, MenubarGroup, MenubarLabel, MenubarItem, MenubarCheckboxItem, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarSub, MenubarSubTrigger, MenubarSubContent MenubarShortcut

## Example Implementations

### Basic Dialog
```tsx
<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogPortal>
    <DialogOverlay />
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Title</DialogTitle>
        <DialogDescription>Description text</DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose>Cancel</DialogClose>
      </DialogFooter>
    </DialogContent>
  </DialogPortal>
</Dialog>
```

### Sidebar with Navigation
```tsx
<SidebarProvider>
  <Sidebar>
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton isActive>Home</SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Projects</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Icon /> Project A
                <SidebarMenuBadge>3</SidebarMenuBadge>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
  <SidebarInset>Main content</SidebarInset>
</SidebarProvider>
```

### Nested Dropdown Menu
```tsx
<DropdownMenu>
  <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
  <DropdownMenuPortal>
    <DropdownMenuContent>
      <DropdownMenuItem>Item 1</DropdownMenuItem>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>Submenu</DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          <DropdownMenuItem>Sub item 1</DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuSub>
    </DropdownMenuContent>
  </DropdownMenuPortal>
</DropdownMenu>
```

## Common Pitfalls

**Missing Sub-components:**
- Forgetting DialogHeader/DialogFooter breaks semantic structure
- Missing DropdownMenuPortal causes z-index issues
- SidebarGroup without SidebarGroupContent won't render menu items

**Incorrect Nesting:**
- DropdownMenuSub must be within DropdownMenuContent, not at root level
- NavigationMenuContent requires NavigationMenuTrigger as sibling
- SidebarMenuSubItem requires SidebarMenuSub container

**Provider Context:**
- Sidebar requires SidebarProvider at app root
- Dialog/Sheet manage open state internally, don't need external context

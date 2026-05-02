# LSD Component Usage Patterns

## Forms & Input Component Patterns

### Input
```tsx
import { Input } from '@nipsys/lsd'

<Input label="Email" placeholder="name@example.com" />
<Input variant="outlined" size="lg" label="Username" error supportingText="Error message" />
// variants: underlined (default), outlined, ghost | sizes: sm, md (default), lg
```

### Textarea
```tsx
import { Textarea } from '@nipsys/lsd'

<Textarea placeholder="Enter your message" rows={4} />
<Textarea aria-invalid defaultValue="Invalid content" />
```

### Checkbox
```tsx
import { Checkbox } from '@nipsys/lsd'

<Checkbox checked={isChecked} onCheckedChange={setChecked}>Accept terms</Checkbox>
<Checkbox defaultChecked indeterminate />
```

### Switch
```tsx
import { Switch } from '@nipsys/lsd'

<Switch checked={enabled} onCheckedChange={setEnabled} />
<Switch size="sm" /> <Switch size="md" /> <Switch size="lg" />
```

### Select
```tsx
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@nipsys/lsd'

<Select>
  <SelectTrigger><SelectValue placeholder="Select option" /></SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>
```

### Autocomplete
```tsx
import { Autocomplete } from '@nipsys/lsd'

<Autocomplete items={['Apple', 'Banana']} placeholder="Search..." renderItem={(item) => item} />
```

### InputGroup
```tsx
import { InputGroup, InputGroupInput, InputGroupAddon } from '@nipsys/lsd'

<InputGroup>
  <InputGroupAddon>$</InputGroupAddon>
  <InputGroupInput placeholder="Amount" />
  <InputGroupAddon>USD</InputGroupAddon>
</InputGroup>
```

### Slider
```tsx
import { Slider } from '@nipsys/lsd'

<Slider defaultValue={[50]} max={100} step={1} />
```

### Field
```tsx
import { Field, FieldLabel, FieldContent, FieldError, FieldDescription } from '@nipsys/lsd'

<Field>
  <FieldLabel>Full Name</FieldLabel>
  <FieldContent />
  <FieldError>Name is required</FieldError>
  <FieldDescription>Enter your legal name</FieldDescription>
</Field>
```

## Buttons & Actions Patterns

### Button
```tsx
import { Button } from '@nipsys/lsd'

// Variants
<Button variant="filled">Default</Button>
<Button variant="outlined">Outlined</Button>
<Button variant="filled-rounded">Rounded</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="success">Success</Button>
<Button variant="link">Link</Button>
<Button variant="ghost">Ghost</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="square-md"><Icon /></Button>

// Features
<Button loading onClick={handleSubmit}>Save</Button>
<Button fullWidth>Full Width</Button>
<Button asChild><Link href="/profile">View Profile</Link></Button>
```

### ButtonGroup
```tsx
import { ButtonGroup, Button } from '@nipsys/lsd'

<ButtonGroup>
  <Button variant="filled">Previous</Button>
  <Button variant="outlined">Next</Button>
</ButtonGroup>
```

### Toggle/ToggleGroup
```tsx
import { Toggle, ToggleGroup, ToggleGroupItem } from '@nipsys/lsd'

<Toggle pressed={pressed} onPressedChange={setPressed}>Bold</Toggle>

<ToggleGroup type="single" value={value} onValueChange={setValue}>
  <ToggleGroupItem value="bold">B</ToggleGroupItem>
  <ToggleGroupItem value="italic">I</ToggleGroupItem>
</ToggleGroup>

<ToggleGroup type="multiple">
  <ToggleGroupItem value="left">Left</ToggleGroupItem>
  <ToggleGroupItem value="center">Center</ToggleGroupItem>
</ToggleGroup>
```

## Navigation Patterns

### Tabs
```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@nipsys/lsd'

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Profile</TabsTrigger>
    <TabsTrigger value="tab2">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Profile content</TabsContent>
  <TabsContent value="tab2">Settings content</TabsContent>
</Tabs>

<Tabs size="lg" fullWidth bordered />
```

### Accordion
```tsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@nipsys/lsd'

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>Yes, it's fully accessible.</AccordionContent>
  </AccordionItem>
</Accordion>
```

### NavigationMenu/Menubar
```tsx
import { NavigationMenu, NavigationMenuTrigger, NavigationMenuContent } from '@nipsys/lsd'
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from '@nipsys/lsd'

<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent><NavigationMenuLink href="/p1">Product 1</NavigationMenuLink></NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent><MenubarItem>New</MenubarItem></MenubarContent>
  </MenubarMenu>
</Menubar>
```

### Sidebar
```tsx
import { Sidebar, SidebarContent, SidebarGroup, SidebarMenu, SidebarMenuItem } from '@nipsys/lsd'

<Sidebar>
  <SidebarContent>
    <SidebarGroup>
      <SidebarMenu>
        <SidebarMenuItem><SidebarMenuButton>Dashboard</SidebarMenuButton></SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  </SidebarContent>
</Sidebar>
```

## Overlays & Modals Patterns

### Dialog
```tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from '@nipsys/lsd'

<Dialog>
  <DialogTrigger asChild><Button>Open Dialog</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader><DialogTitle>Are you sure?</DialogTitle></DialogHeader>
    <DialogFooter>
      <DialogClose asChild><Button variant="outlined">Cancel</Button></DialogClose>
      <Button variant="destructive">Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### AlertDialog
```tsx
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@nipsys/lsd'

<AlertDialog>
  <AlertDialogTrigger asChild><Button>Delete</Button></AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader><AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle></AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

### Sheet/Popover/Tooltip
```tsx
import { Sheet, SheetContent, SheetTrigger } from '@nipsys/lsd'
import { Popover, PopoverContent, PopoverTrigger } from '@nipsys/lsd'
import { Tooltip, TooltipContent, TooltipTrigger } from '@nipsys/lsd'

<Sheet><SheetTrigger asChild><Button>Open</Button></SheetTrigger><SheetContent><div>Content</div></SheetContent></Sheet>
<Popover><PopoverTrigger asChild><Button variant="ghost">Info</Button></PopoverTrigger><PopoverContent><div>Popover</div></PopoverContent></Popover>
<Tooltip><TooltipTrigger>Hover</TooltipTrigger><TooltipContent><p>Tooltip</p></TooltipContent></Tooltip>
```

### DropdownMenu
```tsx
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuShortcut } from '@nipsys/lsd'

<DropdownMenu>
  <DropdownMenuTrigger asChild><Button variant="ghost">Menu</Button></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Profile<DropdownMenuShortcut>⌘P</DropdownMenuShortcut></DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuCheckboxItem checked={darkMode} onCheckedChange={setDarkMode}>Dark mode</DropdownMenuCheckboxItem>
    <DropdownMenuRadioGroup value={viewMode} onValueChange={setViewMode}>
      <DropdownMenuRadioItem value="list">List view</DropdownMenuRadioItem>
      <DropdownMenuRadioItem value="grid">Grid view</DropdownMenuRadioItem>
    </DropdownMenuRadioGroup>
  </DropdownMenuContent>
</DropdownMenu>
```

## Data Display Patterns

### Table
```tsx
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@nipsys/lsd'

<Table>
  <TableHeader><TableRow><TableHead>Name</TableHead><TableHead>Email</TableHead></TableRow></TableHeader>
  <TableBody><TableRow><TableCell>John Doe</TableCell><TableCell>john@example.com</TableCell></TableRow></TableBody>
</Table>
```

### Badge
```tsx
import { Badge } from '@nipsys/lsd'

<Badge>Default</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="success">Success</Badge>
<Badge size="sm">Small</Badge>
<Badge icon={<Icon />} iconPosition="left">With Icon</Badge>
<Badge onDismiss={() => {}}>Removable</Badge>
<Badge dot />
<Badge variant="outline" onClick={() => {}}>Clickable</Badge>
// variants: default, outline, destructive, success, dot | sizes: sm, md, lg | iconPosition: left, right
```

### Avatar/Progress/Alert/Command
```tsx
import { Avatar, AvatarFallback, AvatarImage } from '@nipsys/lsd'
import { Progress } from '@nipsys/lsd'
import { Alert, AlertDescription, AlertTitle } from '@nipsys/lsd'
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut } from '@nipsys/lsd'

<Avatar><AvatarImage src="/avatar.png" /><AvatarFallback>JD</AvatarFallback></Avatar>
<Progress value={75} max={100} />
<Alert variant="destructive"><AlertTitle>Error</AlertTitle><AlertDescription>Something went wrong.</AlertDescription></Alert>
<Command><CommandInput placeholder="Search..." /><CommandList><CommandEmpty>No results</CommandEmpty><CommandGroup heading="Suggestions"><CommandItem>Calendar<CommandShortcut>⌘K</CommandShortcut></CommandItem></CommandGroup></CommandList></Command>
```

## Layout & Structure Patterns

### Separator/ScrollArea/Typography/Calendar/Label
```tsx
import { Separator } from '@nipsys/lsd'
import { ScrollArea } from '@nipsys/lsd'
import { Typography } from '@nipsys/lsd'
import { Calendar } from '@nipsys/lsd'
import { Label } from '@nipsys/lsd'

<Separator orientation="horizontal" />
<ScrollArea className="h-96"><div>Scrollable content</div></ScrollArea>
<Typography variant="h1">Heading 1</Typography>
<Typography variant="body">Body text</Typography>
<Calendar mode="single" selected={date} onSelect={setDate} />
<Label htmlFor="email">Email</Label>
```

## Feedback Patterns

### Sonner (Toasts)/Form Validation
```tsx
import { toast } from 'sonner'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@nipsys/lsd'

toast.success("Changes saved successfully")
toast.error("Failed to save changes")

<Form {...form}>
  <FormField control={form.control} name="username" render={({ field }) => (
    <FormItem>
      <FormLabel>Username</FormLabel>
      <FormControl><Input placeholder="John" {...field} /></FormControl>
      <FormMessage />
    </FormItem>
  )} />
</Form>
```

## Key Component Props Reference

**Button**: variant (filled, outlined, filled-rounded, outlined-rounded, link, ghost, ghost-rounded, destructive, destructive-rounded, success, success-rounded), size (sm, md, lg, square-sm, square-md, square-lg), loading, fullWidth, asChild

**Input**: variant (underlined, outlined, ghost), size (sm, md, lg), label, supportingText, error

**Badge**: variant (default, outline, destructive, success, dot), size (sm, md, lg), asChild, onDismiss, onClick, icon, iconPosition, dot

**Switch**: size (sm, md, lg)

**Tabs**: size (sm, md, lg), fullWidth, bordered

## Composition Notes

**Dialog**: Dialog → DialogTrigger → DialogContent → DialogHeader → DialogTitle → DialogDescription → DialogFooter → DialogClose

**Form Fields**: Form → FormField → FormItem → FormLabel → FormControl → FormMessage

**Navigation**: TabsList → TabsTrigger, TabsContent | AccordionItem → AccordionTrigger → AccordionContent

**Menus**: DropdownMenuTrigger → DropdownMenuContent → DropdownMenuItem | DropdownMenuCheckboxItem | DropdownMenuRadioItem

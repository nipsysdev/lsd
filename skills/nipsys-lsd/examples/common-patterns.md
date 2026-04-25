# LSD Usage Examples

Common patterns and implementation examples for @nipsys/lsd components.

## Examples Index

- [Form Patterns](#form-patterns)
- [Dialog Patterns](#dialog-patterns)
- [Navigation Patterns](#navigation-patterns)
- [Data Display Patterns](#data-display-patterns)
- [Action Patterns](#action-patterns)

---

## Form Patterns

### Simple Form with Validation
```tsx
'use client';

import { useState } from 'react';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@nipsys/lsd';
import { Input } from '@nipsys/lsd';
import { Button } from '@nipsys/lsd';
import { Typography } from '@nipsys/lsd';

function SimpleForm() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({ email: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setErrors({ email: 'Email is required' });
      return;
    }
    // Submit form
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-(--lsd-spacing-base)">
      <FormField name="email">
        <FormItem>
          <FormLabel>
            <Typography variant="label1">Email Address</Typography>
          </FormLabel>
          <FormControl>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              className={errors.email ? 'border-destructive text-destructive' : ''}
            />
          </FormControl>
          {errors.email && (
            <FormMessage>
              <Typography variant="label2" className="text-destructive">
                {errors.email}
              </Typography>
            </FormMessage>
          )}
        </FormItem>
      </FormField>

      <Button type="submit" variant="filled">
        Submit
      </Button>
    </form>
  );
}
```

### Form with Input Groups
```tsx
'use client';

import { SearchIcon, TextboxIcon } from '@phosphor-icons/react';
import {
  InputGroup,
  InputGroupAddOn,
  InputGroupAddOnIcon,
} from '@nipsys/lsd';
import { Input } from '@nipsys/lsd';
import { Button } from '@nipsys/lsd';
import { Typography } from '@nipsys/lsd';

function SearchForm() {
  return (
    <div className="flex gap-(--lsd-spacing-base)">
      <InputGroup>
        <InputGroupAddOn>
          <InputGroupAddOnIcon>
            <SearchIcon weight="duotone" />
          </InputGroupAddOnIcon>
        </InputGroupAddOn>
        <Input placeholder="Search..." />
      </InputGroup>

      <Button variant="filled">Search</Button>
    </div>
  );
}

function CurrencyInput() {
  return (
    <InputGroup>
      <InputGroupAddOn>
        <Typography variant="body1">$</Typography>
      </InputGroupAddOn>
      <Input type="number" placeholder="0.00" />
    </InputGroup>
  );
}
```

### Form with Select and Autocomplete
```tsx
'use client';

import { useState } from 'react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@nipsys/lsd';
import { Autocomplete } from '@nipsys/lsd';
import { Typography } from '@nipsys/lsd';

function SelectForm() {
  const [language, setLanguage] = useState('javascript');
  const [country, setCountry] = useState<{
    label: string;
    value: string;
  } | null>(null);

  const languages = [
    { label: 'JavaScript', value: 'javascript' },
    { label: 'TypeScript', value: 'typescript' },
    { label: 'Python', value: 'python' },
  ];

  const countries = [
    { label: 'United States', value: 'us' },
    { label: 'Canada', value: 'ca' },
    { label: 'United Kingdom', value: 'uk' },
  ];

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <div>
        <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
          Programming Language
        </Typography>
        <Select defaultValue={language} onValueChange={setLanguage}>
          <SelectTrigger>
            <SelectValue placeholder="Select a language" />
          </SelectTrigger>
          <SelectContent>
            {languages.map((lang) => (
              <SelectItem key={lang.value} value={lang.value}>
                <Typography variant="body1">{lang.label}</Typography>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Typography variant="label1" className="block mb-(--lsd-spacing-smaller)">
          Country
        </Typography>
        <Autocomplete
          options={countries}
          value={country}
          onChange={setCountry}
          placeholder="Select or search a country"
          completeOnEmpty
        />
      </div>
    </div>
  );
}
```

---

## Dialog Patterns

### Simple Dialog
```tsx
'use client';

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogClose,
} from '@nipsys/lsd';
import { Button } from '@nipsys/lsd';
import { Typography } from '@nipsys/lsd';

function SimpleDialog() {
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
          <Typography variant="body2" className="mt-(--lsd-spacing-base)">
            This is a dialog content description. It provides additional context
            about the purpose of this dialog.
          </Typography>
        </DialogDescription>
        <div className="flex gap-(--lsd-spacing-base) mt-(--lsd-spacing-large)">
          <Button variant="filled">Continue</Button>
          <DialogClose>
            <Button variant="outlined">Cancel</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
```

### Alert Dialog (Destructive)
```tsx
'use client';

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from '@nipsys/lsd';
import { Button } from '@nipsys/lsd';
import { Typography } from '@nipsys/lsd';

function DeleteAlertDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button variant="destructive">Delete Item</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>
          <Typography variant="h4">Are you sure?</Typography>
        </AlertDialogTitle>
        <AlertDialogDescription>
          <Typography variant="body2" className="mt-(--lsd-spacing-base)">
            This action cannot be undone. This will permanently delete the item
            and all of its data.
          </Typography>
        </AlertDialogDescription>
        <div className="flex gap-(--lsd-spacing-base) mt-(--lsd-spacing-large)">
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

### Sheet (Slide-over Panel)
```tsx
'use client';

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetClose,
} from '@nipsys/lsd';
import { Button } from '@nipsys/lsd';
import { Typography } from '@nipsys/lsd';

function SlideOverPanel() {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="outlined">Open Settings</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetTitle>
          <Typography variant="h4">Settings</Typography>
        </SheetTitle>
        <SheetDescription>
          <Typography variant="body2" className="mt-(--lsd-spacing-base)">
            Configure your application settings here.
          </Typography>
        </SheetDescription>

        <div className="flex flex-col gap-(--lsd-spacing-base) mt-(--lsd-spacing-large)">
          <Typography variant="label1">Notifications</Typography>
          <Typography variant="body2">
            Enable email notifications
          </Typography>
          {/* Add switches or checkboxes here */}

          <SheetClose className="mt-(--lsd-spacing-base)">
            <Button variant="filled" className="w-full">
              Save Changes
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
```

---

## Navigation Patterns

### Tabs Navigation
```tsx
'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@nipsys/lsd';
import { Typography } from '@nipsys/lsd';

function TabsExample() {
  const [value, setValue] = useState('overview');

  return (
    <Tabs value={value} onValueChange={setValue}>
      <TabsList>
        <TabsTrigger value="overview">
          <Typography variant="body1">Overview</Typography>
        </TabsTrigger>
        <TabsTrigger value="details">
          <Typography variant="body1">Details</Typography>
        </TabsTrigger>
        <TabsTrigger value="settings">
          <Typography variant="body1">Settings</Typography>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="overview">
        <div className="p-(--lsd-spacing-base)">
          <Typography variant="body1">Overview content goes here.</Typography>
        </div>
      </TabsContent>

      <TabsContent value="details">
        <div className="p-(--lsd-spacing-base)">
          <Typography variant="body1">Details content goes here.</Typography>
        </div>
      </TabsContent>

      <TabsContent value="settings">
        <div className="p-(--lsd-spacing-base)">
          <Typography variant="body1">Settings content goes here.</Typography>
        </div>
      </TabsContent>
    </Tabs>
  );
}
```

### Dropdown Menu
```tsx
'use client';

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@nipsys/lsd';
import { Button } from '@nipsys/lsd';
import { Typography } from '@nipsys/lsd';

function DropdownExample() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outlined">Actions</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <Typography variant="label1">Document Actions</Typography>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Typography variant="body1">View</Typography>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Typography variant="body1">Edit</Typography>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Typography variant="body1">Share</Typography>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-destructive">
          <Typography variant="body1">Delete</Typography>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

### ToggleGroup (Segmented Control)
```tsx
'use client';

import { useState } from 'react';
import { ToggleGroup, Toggle } from '@nipsys/lsd';
import { AlignLeftIcon, AlignCenterIcon, AlignRightIcon } from '@phosphor-icons/react';
import { Typography } from '@nipsys/lsd';

function TextAlignToggle() {
  const [alignment, setAlignment] = useState('left');

  return (
    <ToggleGroup
      type="single"
      value={alignment}
      onValueChange={setAlignment}
      variant="outlined"
    >
      <Toggle value="left">
        <AlignLeftIcon weight="duotone" />
      </Toggle>
      <Toggle value="center">
        <AlignCenterIcon weight="duotone" />
      </Toggle>
      <Toggle value="right">
        <AlignRightIcon weight="duotone" />
      </Toggle>
    </ToggleGroup>
  );
}

function MultipleToggle() {
  const [values, setValues] = useState<string[]>([]);

  return (
    <ToggleGroup
      type="multiple"
      value={values}
      onValueChange={setValues}
      variant="outlined"
    >
      <Toggle value="bold">
        <Typography variant="body1">Bold</Typography>
      </Toggle>
      <Toggle value="italic">
        <Typography variant="body1">Italic</Typography>
      </Toggle>
      <Toggle value="underline">
        <Typography variant="body1">Underline</Typography>
      </Toggle>
    </ToggleGroup>
  );
}
```

---

## Data Display Patterns

### Card with List
```tsx
'use client';

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from '@nipsys/lsd';
import { Typography } from '@nipsys/lsd';
import { Avatar, AvatarImage, AvatarFallback } from '@nipsys/lsd';
import { UserIcon } from '@phosphor-icons/react';
import { Badge } from '@nipsys/lsd';

interface UserCardProps {
  name: string;
  email: string;
  role: 'Admin' | 'User' | 'Guest';
}

function UserCard({ name, email, role }: UserCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-(--lsd-spacing-base)">
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>
              <UserIcon weight="duotone" />
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <CardTitle>
              <Typography variant="h4">{name}</Typography>
            </CardTitle>
            <CardDescription>
              <Typography variant="body2">{email}</Typography>
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Badge variant="outlined">{role}</Badge>
      </CardContent>
    </Card>
  );
}
```

### Alert Messages
```tsx
'use client';

import { Alert, AlertDescription, AlertTitle } from '@nipsys/lsd';
import { Typography } from '@nipsys/lsd';
import {
  InfoIcon,
  CheckCircleIcon,
  WarningIcon,
  ErrorIcon,
} from '@phosphor-icons/react';

function AlertExamples() {
  return (
    <div className="space-y-(--lsd-spacing-base)">
      <Alert>
        <InfoIcon weight="duotone" />
        <AlertTitle>
          <Typography variant="h5">Information</Typography>
        </AlertTitle>
        <AlertDescription>
          <Typography variant="body2">
            This is an informational alert message.
          </Typography>
        </AlertDescription>
      </Alert>

      <Alert variant="default">
        <CheckCircleIcon weight="duotone" />
        <AlertTitle>
          <Typography variant="h5">Success</Typography>
        </AlertTitle>
        <AlertDescription>
          <Typography variant="body2">
            Your changes have been saved successfully.
          </Typography>
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <ErrorIcon weight="duotone" />
        <AlertTitle>
          <Typography variant="h5">Error</Typography>
        </AlertTitle>
        <AlertDescription>
          <Typography variant="body2">
            Something went wrong. Please try again.
          </Typography>
        </AlertDescription>
      </Alert>
    </div>
  );
}
```

### Progress Indicator
```tsx
'use client';

import { Progress } from '@nipsys/lsd';
import { Typography } from '@nipsys/lsd';

function ProgressExample() {
  return (
    <div className="space-y-(--lsd-spacing-base)">
      <div>
        <div className="flex justify-between mb-(--lsd-spacing-smaller)">
          <Typography variant="label1">File Upload</Typography>
          <Typography variant="body2">75%</Typography>
        </div>
        <Progress value={75} />
      </div>

      <div>
        <div className="flex justify-between mb-(--lsd-spacing-smaller)">
          <Typography variant="label1">Processing</Typography>
          <Typography variant="body2">30%</Typography>
        </div>
        <Progress value={30} />
      </div>
    </div>
  );
}
```

---

## Action Patterns

### Button Group with Icons
```tsx
'use client';

import { Button, ButtonGroup } from '@nipsys/lsd';
import { PlusIcon, ShareIcon, DownloadIcon, TrashIcon } from '@phosphor-icons/react';
import { Typography } from '@nipsys/lsd';

function ActionButtons() {
  return (
    <ButtonGroup>
      <Button variant="filled">
        <PlusIcon className="mr-(--lsd-spacing-smaller)" />
        <Typography variant="body1">Add</Typography>
      </Button>
      <Button variant="outlined">
        <ShareIcon weight="duotone" className="mr-(--lsd-spacing-smaller)" />
        <Typography variant="body1">Share</Typography>
      </Button>
      <Button variant="outlined">
        <DownloadIcon weight="duotone" className="mr-(--lsd-spacing-smaller)" />
        <Typography variant="body1">Download</Typography>
      </Button>
      <Button variant="ghost">
        <TrashIcon weight="duotone" />
      </Button>
    </ButtonGroup>
  );
}
```

### Icon Buttons with Tooltips
```tsx
'use client';

import { Tooltip } from '@nipsys/lsd';
import { Button } from '@nipsys/lsd';
import {
  SettingsIcon,
  BellIcon,
  UserIcon,
  QuestionIcon,
} from '@phosphor-icons/react';

function ToolbarButtons() {
  return (
    <div className="flex gap-(--lsd-spacing-smaller)">
      <Tooltip content="Settings">
        <Button variant="ghost">
          <SettingsIcon weight="duotone" />
        </Button>
      </Tooltip>

      <Tooltip content="Notifications">
        <Button variant="ghost">
          <BellIcon weight="duotone" />
        </Button>
      </Tooltip>

      <Tooltip content="Profile">
        <Button variant="ghost">
          <UserIcon weight="duotone" />
        </Button>
      </Tooltip>

      <Tooltip content="Help">
        <Button variant="ghost">
          <QuestionIcon weight="duotone" />
        </Button>
      </Tooltip>
    </div>
  );
}
```

### Checkboxes in List
```tsx
'use client';

import { useState } from 'react';
import { Checkbox } from '@nipsys/lsd';
import { Typography } from '@nipsys/lsd';

function CheckboxList() {
  const [items, setItems] = useState([
    { id: 1, label: 'Receive email notifications', checked: false },
    { id: 2, label: 'Receive SMS notifications', checked: false },
    { id: 3, label: 'Enable push notifications', checked: true },
  ]);

  const toggleItem = (id: number) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  return (
    <div className="space-y-(--lsd-spacing-base)">
      {items.map((item) => (
        <Checkbox
          key={item.id}
          checked={item.checked}
          onChange={() => toggleItem(item.id)}
        >
          <Typography variant="body1">{item.label}</Typography>
        </Checkbox>
      ))}
    </div>
  );
}
```

---

## Quick Tips

1. **Always use LSD spacing variables** - `gap-(--lsd-spacing-base)`, `mt-(--lsd-spacing-large)`, etc.
2. **Use Phosphor icons** with `weight="duotone"` (except CheckIcon, PlusIcon)
3. **Import all sub-components** for composite components (Dialog, Tabs, etc.)
4. **Use Typography component** instead of raw HTML elements
5. **Choose appropriate button variant**: `filled` (primary), `outlined` (secondary), `ghost` (subtle), `destructive` (danger)
6. **Use Form components** for form validation and accessibility
7. **Use Select** for dropdowns, **Autocomplete** for searchable lists
8. **Use AlertDialog** for destructive actions, **Dialog** for general modals

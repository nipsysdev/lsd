'use client';

import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Input,
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  Progress,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
  Typography,
} from '@nipsys/shadcn-lsd';
import { MoonIcon, SunIcon } from '@phosphor-icons/react';

interface ThemeDemoCardProps {
  themeMode?: string;
  themeAccent?: string;
}

export function ThemeDemoCard({
  themeMode = 'light',
  themeAccent = 'monochrome',
}: ThemeDemoCardProps) {
  return (
    <div data-theme={themeAccent} className={themeMode}>
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center gap-(--lsd-spacing-small)">
              {themeMode === 'light' ? (
                <SunIcon className="h-5 w-5" weight="duotone" />
              ) : (
                <MoonIcon className="h-5 w-5" weight="duotone" />
              )}
              <span className="capitalize">{themeMode}</span>
            </div>
          </CardTitle>
          <CardDescription>{`The ${themeAccent} theme in ${themeMode} mode`}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>New</MenubarItem>
                <MenubarItem>Open</MenubarItem>
                <MenubarItem>Save</MenubarItem>
                <MenubarSeparator />
                <MenubarItem variant="destructive">Delete</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Undo</MenubarItem>
                <MenubarItem>Redo</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Cut</MenubarItem>
                <MenubarItem>Copy</MenubarItem>
                <MenubarItem>Paste</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarCheckboxItem checked>Show Toolbar</MenubarCheckboxItem>
                <MenubarCheckboxItem>Show Status Bar</MenubarCheckboxItem>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>Zoom</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>50%</MenubarItem>
                    <MenubarItem>100%</MenubarItem>
                    <MenubarItem>150%</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Profile</MenubarTrigger>
              <MenubarContent>
                <MenubarGroup>
                  <MenubarLabel>Account</MenubarLabel>
                  <MenubarItem>Settings</MenubarItem>
                  <MenubarItem>Profile</MenubarItem>
                </MenubarGroup>
                <MenubarSeparator />
                <MenubarItem>Sign out</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          {/* Checkboxes */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Checkbox id="option1" defaultChecked />
              <label
                htmlFor="option1"
                className="text-sm cursor-pointer select-none"
              >
                Enable notifications
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="option2" />
              <label
                htmlFor="option2"
                className="text-sm cursor-pointer select-none"
              >
                Auto-save changes
              </label>
            </div>
          </div>

          {/* Switch */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Switch id="switch1" defaultChecked />
              <label
                htmlFor="switch1"
                className="text-sm cursor-pointer select-none"
              >
                Dark mode
              </label>
            </div>
          </div>

          {/* Input */}
          <div className="space-y-2">
            <Input placeholder="Enter your name..." />
          </div>

          <div className="space-y-2">
            <Select defaultValue="option2">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Progress indeterminate />
          </div>

          {/* Badges */}
          <div className="space-y-2">
            <div className="flex gap-2 flex-wrap">
              <Badge>Default</Badge>
              <Badge variant="outlined">Outlined</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="info">Info</Badge>
            </div>
          </div>

          {/* Text Colors */}
          <div className="space-y-2">
            <div className="flex gap-3 flex-wrap text-sm">
              <Typography color="primary">Primary</Typography>
              <Typography color="secondary">Secondary</Typography>
              <Typography color="destructive">Destructive</Typography>
              <Typography color="success">Success</Typography>
              <Typography color="warning">Warning</Typography>
              <Typography color="info">Info</Typography>
            </div>
          </div>

          {/* Button Variants */}
          <div className="space-y-2">
            <div className="flex gap-2 flex-wrap">
              <Button disabled>Disabled</Button>
              <Button disabled loading>
                Loading
              </Button>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button variant="destructive">Destructive</Button>
              <Button variant="success">Success</Button>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button variant="filled-icon" size="icon-sm">
                +
              </Button>
              <Button variant="outlined-icon" size="icon-sm">
                ✓
              </Button>
              <Button variant="ghost-icon" size="icon-sm">
                ✕
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="justify-end gap-(--lsd-spacing-base)">
          <Button variant="outlined">Secondary</Button>
          <Button>Primary</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

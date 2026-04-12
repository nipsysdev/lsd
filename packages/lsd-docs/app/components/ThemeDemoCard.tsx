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
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Switch,
  Typography,
} from '@nipsys/shadcn-lsd';
import { UserIcon } from '@phosphor-icons/react';

interface ThemeDemoCardProps {
  key?: string;
  themeMode?: string;
  themeAccent?: string;
}

export function ThemeDemoCard({
  themeMode = 'light',
  themeAccent = 'monochrome',
  key = `${themeMode}-${themeAccent}`,
}: ThemeDemoCardProps) {
  return (
    <div data-theme={themeAccent} className={themeMode}>
      <Card>
        <CardHeader>
          <div className="flex items-start gap-(--lsd-spacing-small)">
            <div className="flex items-center gap-x-(--lsd-spacing-base)">
              <UserIcon className="size-6" weight="duotone" />

              <div className="flex-1 space-y-(--lsd-spacing-smallest)">
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your profile and preferences</CardDescription>
              </div>
            </div>
            <div className="flex flex-col items-end gap-(--lsd-spacing-smaller)">
              <Badge variant="success">Verified</Badge>
              <Badge variant="info">Premium</Badge>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-(--lsd-spacing-base)">
          <Input id="displayName" label="Display Name" placeholder="John Doe" />

          <div className="flex items-center justify-between">
            <div className="space-y-(--lsd-spacing-smallest)">
              <Label htmlFor={`${key}-autoSave`}>Auto-save Changes</Label>
              <Typography variant="subtitle4" color="secondary" className="block">
                Automatically save your work
              </Typography>
            </div>
            <Switch id={`${key}-autoSave`} defaultChecked />
          </div>

          <div className="flex justify-between">
            <div className="space-y-(--lsd-spacing-smallest)">
              <Label htmlFor={`${key}-language`}>Language</Label>
              <Select defaultValue="en">
                <SelectTrigger id={`${key}-language`}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                  <SelectItem value="fr">Français</SelectItem>
                  <SelectItem value="de">Deutsch</SelectItem>
                  <SelectItem value="ja">日本語</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-(--lsd-spacing-smallest)">
              <Label htmlFor={`${key}-timezone`}>Timezone</Label>
              <Select defaultValue="utc-5">
                <SelectTrigger id={`${key}-timezone`}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="utc-8">Pacific Time (UTC-8)</SelectItem>
                  <SelectItem value="utc-5">Eastern Time (UTC-5)</SelectItem>
                  <SelectItem value="utc+0">UTC (UTC+0)</SelectItem>
                  <SelectItem value="utc+1">Central European (UTC+1)</SelectItem>
                  <SelectItem value="utc+9">Japan (UTC+9)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Separator />

          <Typography variant="subtitle4" color="destructive">
            Danger Zone
          </Typography>
          <div className="mt-(--lsd-spacing-smaller) flex items-center justify-between">
            <div className="space-y-(--lsd-spacing-smallest) flex flex-col">
              <Typography variant="label1">Delete Account</Typography>
              <Typography variant="subtitle4" color="secondary">
                There's no going back!
              </Typography>
            </div>
            <Button variant="destructive" size="sm">
              Delete
            </Button>
          </div>
        </CardContent>

        <CardFooter className="justify-between">
          <Button size="sm">Cancel</Button>
          <Button size="sm">Save Changes</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger, Typography } from '@nipsys/shadcn-lsd';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import { Tabs, TabsContent, TabsList, TabsTrigger, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Typography variant="body1" className="block">
            Make changes to your account here. Click save when you're done.
          </Typography>
        </TabsContent>
        <TabsContent value="password">
          <Typography variant="body1" className="block">
            Change your password here. After saving, you'll be logged out.
          </Typography>
        </TabsContent>
        <TabsContent value="settings">
          <Typography variant="body1" className="block">
            Manage your application settings here.
          </Typography>
        </TabsContent>
      </Tabs>
    </div>
  );
}`;

export function TabsBasicExample() {
  useInIframeThemeSync();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Typography variant="body1" className="block">
            Make changes to your account here. Click save when you're done.
          </Typography>
        </TabsContent>
        <TabsContent value="password">
          <Typography variant="body1" className="block">
            Change your password here. After saving, you'll be logged out.
          </Typography>
        </TabsContent>
        <TabsContent value="settings">
          <Typography variant="body1" className="block">
            Manage your application settings here.
          </Typography>
        </TabsContent>
      </Tabs>
    </div>
  );
}

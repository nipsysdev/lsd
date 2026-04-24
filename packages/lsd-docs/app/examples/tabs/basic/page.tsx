'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger, Typography } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const SIZE = 'md';

/**
 * @docSection usage
 */
export const CODE = `import { Tabs, TabsContent, TabsList, TabsTrigger, Typography } from '@nipsys/lsd';

export function Example() {
  return (
    <>
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
    </>
  );
}`;

export function TabsBasicExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
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

export default function Basic() {
  return <TabsBasicExample />;
}

'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger, Typography } from '@nipsys/shadcn-lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Tabs, TabsContent, TabsList, TabsTrigger, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <Tabs defaultValue="tab1" bordered>
      <TabsList>
        <TabsTrigger value="tab1">Profile</TabsTrigger>
        <TabsTrigger value="tab2">Billing</TabsTrigger>
        <TabsTrigger value="tab3">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <Typography variant="body1" className="block">Profile information with border</Typography>
      </TabsContent>
      <TabsContent value="tab2">
        <Typography variant="body1" className="block">Billing information with border</Typography>
      </TabsContent>
      <TabsContent value="tab3">
        <Typography variant="body1" className="block">Notification settings with border</Typography>
      </TabsContent>
    </Tabs>
  );
}`;

export function TabsBorderedExample() {
  useSendThemeToIframes();

  return (
    <Tabs defaultValue="tab1" bordered>
      <TabsList>
        <TabsTrigger value="tab1">Profile</TabsTrigger>
        <TabsTrigger value="tab2">Billing</TabsTrigger>
        <TabsTrigger value="tab3">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <Typography variant="body1" className="block">
          Profile information with border
        </Typography>
      </TabsContent>
      <TabsContent value="tab2">
        <Typography variant="body1" className="block">
          Billing information with border
        </Typography>
      </TabsContent>
      <TabsContent value="tab3">
        <Typography variant="body1" className="block">
          Notification settings with border
        </Typography>
      </TabsContent>
    </Tabs>
  );
}

export default function Bordered() {
  return <TabsBorderedExample />;
}

'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger, Typography } from '@nipsys/lsd';
import { ChartLineUpIcon, GearIcon, HouseIcon } from '@phosphor-icons/react';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Tabs, TabsContent, TabsList, TabsTrigger, Typography } from '@nipsys/lsd';
import { ChartLineUpIcon, GearIcon, HouseIcon } from '@phosphor-icons/react';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Tabs defaultValue="home" size="sm">
        <TabsList>
          <TabsTrigger value="home">
            <HouseIcon weight="duotone" />
            Home
          </TabsTrigger>
          <TabsTrigger value="analytics">
            <ChartLineUpIcon weight="duotone" />
            Analytics
          </TabsTrigger>
          <TabsTrigger value="settings">
            <GearIcon weight="duotone" />
            Settings
          </TabsTrigger>
        </TabsList>
        <TabsContent value="home">
          <Typography variant="body1" className="block">Home page content</Typography>
        </TabsContent>
        <TabsContent value="analytics">
          <Typography variant="body1" className="block">Analytics dashboard content</Typography>
        </TabsContent>
        <TabsContent value="settings">
          <Typography variant="body1" className="block">Settings configuration content</Typography>
        </TabsContent>
      </Tabs>

      <Tabs defaultValue="home" size="md">
        <TabsList>
          <TabsTrigger value="home">
            <HouseIcon weight="duotone" />
            Home
          </TabsTrigger>
          <TabsTrigger value="analytics">
            <ChartLineUpIcon weight="duotone" />
            Analytics
          </TabsTrigger>
          <TabsTrigger value="settings">
            <GearIcon weight="duotone" />
            Settings
          </TabsTrigger>
        </TabsList>
        <TabsContent value="home">
          <Typography variant="body1" className="block">Home page content</Typography>
        </TabsContent>
        <TabsContent value="analytics">
          <Typography variant="body1" className="block">Analytics dashboard content</Typography>
        </TabsContent>
        <TabsContent value="settings">
          <Typography variant="body1" className="block">Settings configuration content</Typography>
        </TabsContent>
      </Tabs>

      <Tabs defaultValue="home" size="lg">
        <TabsList>
          <TabsTrigger value="home">
            <HouseIcon weight="duotone" />
            Home
          </TabsTrigger>
          <TabsTrigger value="analytics">
            <ChartLineUpIcon weight="duotone" />
            Analytics
          </TabsTrigger>
          <TabsTrigger value="settings">
            <GearIcon weight="duotone" />
            Settings
          </TabsTrigger>
        </TabsList>
        <TabsContent value="home">
          <Typography variant="body1" className="block">Home page content</Typography>
        </TabsContent>
        <TabsContent value="analytics">
          <Typography variant="body1" className="block">Analytics dashboard content</Typography>
        </TabsContent>
        <TabsContent value="settings">
          <Typography variant="body1" className="block">Settings configuration content</Typography>
        </TabsContent>
      </Tabs>
    </div>
  );
}`;

export function TabsWithIconsExample() {
  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Tabs defaultValue="home" size="sm">
        <TabsList>
          <TabsTrigger value="home">
            <HouseIcon weight="duotone" />
            Home
          </TabsTrigger>
          <TabsTrigger value="analytics">
            <ChartLineUpIcon weight="duotone" />
            Analytics
          </TabsTrigger>
          <TabsTrigger value="settings">
            <GearIcon weight="duotone" />
            Settings
          </TabsTrigger>
        </TabsList>
        <TabsContent value="home">
          <Typography variant="body1" className="block">
            Home page content
          </Typography>
        </TabsContent>
        <TabsContent value="analytics">
          <Typography variant="body1" className="block">
            Analytics dashboard content
          </Typography>
        </TabsContent>
        <TabsContent value="settings">
          <Typography variant="body1" className="block">
            Settings configuration content
          </Typography>
        </TabsContent>
      </Tabs>

      <Tabs defaultValue="home" size="md">
        <TabsList>
          <TabsTrigger value="home">
            <HouseIcon weight="duotone" />
            Home
          </TabsTrigger>
          <TabsTrigger value="analytics">
            <ChartLineUpIcon weight="duotone" />
            Analytics
          </TabsTrigger>
          <TabsTrigger value="settings">
            <GearIcon weight="duotone" />
            Settings
          </TabsTrigger>
        </TabsList>
        <TabsContent value="home">
          <Typography variant="body1" className="block">
            Home page content
          </Typography>
        </TabsContent>
        <TabsContent value="analytics">
          <Typography variant="body1" className="block">
            Analytics dashboard content
          </Typography>
        </TabsContent>
        <TabsContent value="settings">
          <Typography variant="body1" className="block">
            Settings configuration content
          </Typography>
        </TabsContent>
      </Tabs>

      <Tabs defaultValue="home" size="lg">
        <TabsList>
          <TabsTrigger value="home">
            <HouseIcon weight="duotone" />
            Home
          </TabsTrigger>
          <TabsTrigger value="analytics">
            <ChartLineUpIcon weight="duotone" />
            Analytics
          </TabsTrigger>
          <TabsTrigger value="settings">
            <GearIcon weight="duotone" />
            Settings
          </TabsTrigger>
        </TabsList>
        <TabsContent value="home">
          <Typography variant="body1" className="block">
            Home page content
          </Typography>
        </TabsContent>
        <TabsContent value="analytics">
          <Typography variant="body1" className="block">
            Analytics dashboard content
          </Typography>
        </TabsContent>
        <TabsContent value="settings">
          <Typography variant="body1" className="block">
            Settings configuration content
          </Typography>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default function WithIcons() {
  return <TabsWithIconsExample />;
}

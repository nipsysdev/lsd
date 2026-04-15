'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger, Typography } from '@nipsys/lsd';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Tabs, TabsContent, TabsList, TabsTrigger, Typography } from '@nipsys/lsd';

export function Example() {
  return (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Active Tab</TabsTrigger>
        <TabsTrigger value="tab2">Another Tab</TabsTrigger>
        <TabsTrigger value="tab3" disabled>
          Disabled Tab
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <Typography variant="body1" className="block">Active tab content</Typography>
      </TabsContent>
      <TabsContent value="tab2">
        <Typography variant="body1" className="block">Another tab content</Typography>
      </TabsContent>
      <TabsContent value="tab3">
        <Typography variant="body1" className="block">Disabled tab content</Typography>
      </TabsContent>
    </Tabs>
  );
}`;

export function TabsDisabledExample() {
  useSendThemeToIframes();

  return (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Active Tab</TabsTrigger>
        <TabsTrigger value="tab2">Another Tab</TabsTrigger>
        <TabsTrigger value="tab3" disabled>
          Disabled Tab
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <Typography variant="body1" className="block">
          Active tab content
        </Typography>
      </TabsContent>
      <TabsContent value="tab2">
        <Typography variant="body1" className="block">
          Another tab content
        </Typography>
      </TabsContent>
      <TabsContent value="tab3">
        <Typography variant="body1" className="block">
          Disabled tab content
        </Typography>
      </TabsContent>
    </Tabs>
  );
}

export default function Disabled() {
  return <TabsDisabledExample />;
}

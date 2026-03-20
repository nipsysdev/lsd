'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger, Typography } from '@nipsys/shadcn-lsd';
import { useState } from 'react';

export const CODE = `import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  const [value, setValue] = useState('tab1');

  return (
    <>
      <Tabs value={value} onValueChange={setValue}>
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <Typography variant="body1" className="block">
            Controlled tab 1 content
          </Typography>
        </TabsContent>
        <TabsContent value="tab2">
          <Typography variant="body1" className="block">
            Controlled tab 2 content
          </Typography>
        </TabsContent>
        <TabsContent value="tab3">
          <Typography variant="body1" className="block">
            Controlled tab 3 content
          </Typography>
        </TabsContent>
      </Tabs>
    </>
  );
}`;

export function TabsControlledExample() {
  const [value, setValue] = useState('tab1');

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Tabs value={value} onValueChange={setValue}>
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <Typography variant="body1" className="block">
            Controlled tab 1 content
          </Typography>
        </TabsContent>
        <TabsContent value="tab2">
          <Typography variant="body1" className="block">
            Controlled tab 2 content
          </Typography>
        </TabsContent>
        <TabsContent value="tab3">
          <Typography variant="body1" className="block">
            Controlled tab 3 content
          </Typography>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default function Controlled() {
  return <TabsControlledExample />;
}

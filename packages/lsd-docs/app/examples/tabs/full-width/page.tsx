'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger, Typography } from '@nipsys/shadcn-lsd';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import { Tabs, TabsContent, TabsList, TabsTrigger, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <Tabs defaultValue="tab1" fullWidth>
      <TabsList>
        <TabsTrigger value="tab1">Overview</TabsTrigger>
        <TabsTrigger value="tab2">Details</TabsTrigger>
        <TabsTrigger value="tab3">Reviews</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <Typography variant="body1" className="block">Overview content goes here</Typography>
      </TabsContent>
      <TabsContent value="tab2">
        <Typography variant="body1" className="block">Details content goes here</Typography>
      </TabsContent>
      <TabsContent value="tab3">
        <Typography variant="body1" className="block">Reviews content goes here</Typography>
      </TabsContent>
    </Tabs>
  );
}`;

export function TabsFullWidthExample() {
  useInIframeThemeSync();

  return (
    <Tabs defaultValue="tab1" fullWidth>
      <TabsList>
        <TabsTrigger value="tab1">Overview</TabsTrigger>
        <TabsTrigger value="tab2">Details</TabsTrigger>
        <TabsTrigger value="tab3">Reviews</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <Typography variant="body1" className="block">
          Overview content goes here
        </Typography>
      </TabsContent>
      <TabsContent value="tab2">
        <Typography variant="body1" className="block">
          Details content goes here
        </Typography>
      </TabsContent>
      <TabsContent value="tab3">
        <Typography variant="body1" className="block">
          Reviews content goes here
        </Typography>
      </TabsContent>
    </Tabs>
  );
}

export default function FullWidth() {
  return <TabsFullWidthExample />;
}

'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger, Typography } from '@nipsys/shadcn-lsd';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import { Tabs, TabsContent, TabsList, TabsTrigger, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Tabs defaultValue="tab1" size="sm">
        <TabsList>
          <TabsTrigger value="tab1">Small</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <Typography variant="body1" className="block">Small tab content</Typography>
        </TabsContent>
        <TabsContent value="tab2">
          <Typography variant="body1" className="block">Small tab content 2</Typography>
        </TabsContent>
        <TabsContent value="tab3">
          <Typography variant="body1" className="block">Small tab content 3</Typography>
        </TabsContent>
      </Tabs>

      <Tabs defaultValue="tab1" size="md">
        <TabsList>
          <TabsTrigger value="tab1">Medium</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <Typography variant="body1" className="block">Medium tab content</Typography>
        </TabsContent>
        <TabsContent value="tab2">
          <Typography variant="body1" className="block">Medium tab content 2</Typography>
        </TabsContent>
        <TabsContent value="tab3">
          <Typography variant="body1" className="block">Medium tab content 3</Typography>
        </TabsContent>
      </Tabs>

      <Tabs defaultValue="tab1" size="lg">
        <TabsList>
          <TabsTrigger value="tab1">Large</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <Typography variant="body1" className="block">Large tab content</Typography>
        </TabsContent>
        <TabsContent value="tab2">
          <Typography variant="body1" className="block">Large tab content 2</Typography>
        </TabsContent>
        <TabsContent value="tab3">
          <Typography variant="body1" className="block">Large tab content 3</Typography>
        </TabsContent>
      </Tabs>
    </div>
  );
}`;

export function TabsSizesExample() {
  useInIframeThemeSync();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Tabs defaultValue="tab1" size="sm">
        <TabsList>
          <TabsTrigger value="tab1">Small</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <Typography variant="body1" className="block">
            Small tab content
          </Typography>
        </TabsContent>
        <TabsContent value="tab2">
          <Typography variant="body1" className="block">
            Small tab content 2
          </Typography>
        </TabsContent>
        <TabsContent value="tab3">
          <Typography variant="body1" className="block">
            Small tab content 3
          </Typography>
        </TabsContent>
      </Tabs>

      <Tabs defaultValue="tab1" size="md">
        <TabsList>
          <TabsTrigger value="tab1">Medium</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <Typography variant="body1" className="block">
            Medium tab content
          </Typography>
        </TabsContent>
        <TabsContent value="tab2">
          <Typography variant="body1" className="block">
            Medium tab content 2
          </Typography>
        </TabsContent>
        <TabsContent value="tab3">
          <Typography variant="body1" className="block">
            Medium tab content 3
          </Typography>
        </TabsContent>
      </Tabs>

      <Tabs defaultValue="tab1" size="lg">
        <TabsList>
          <TabsTrigger value="tab1">Large</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <Typography variant="body1" className="block">
            Large tab content
          </Typography>
        </TabsContent>
        <TabsContent value="tab2">
          <Typography variant="body1" className="block">
            Large tab content 2
          </Typography>
        </TabsContent>
        <TabsContent value="tab3">
          <Typography variant="body1" className="block">
            Large tab content 3
          </Typography>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default function Sizes() {
  return <TabsSizesExample />;
}

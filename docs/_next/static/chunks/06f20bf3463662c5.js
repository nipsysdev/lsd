(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,61417,a=>{"use strict";var e=a.i(20607);a.s(["Typography",()=>e.T])},16117,a=>{"use strict";var e=a.i(50674);a.s(["Tabs",()=>e.T])},52921,a=>{"use strict";var e=a.i(98134);a.i(26940);var t=a.i(16117),s=a.i(38205),r=a.i(91563),n=a.i(22410),l=a.i(61417),b=a.i(75201);let o=`import { useState } from 'react';
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
}`;function T(){let[a,o]=(0,b.useState)("tab1");return(0,e.jsx)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:(0,e.jsxs)(t.Tabs,{value:a,onValueChange:o,children:[(0,e.jsxs)(r.TabsList,{children:[(0,e.jsx)(n.TabsTrigger,{value:"tab1",children:"Tab 1"}),(0,e.jsx)(n.TabsTrigger,{value:"tab2",children:"Tab 2"}),(0,e.jsx)(n.TabsTrigger,{value:"tab3",children:"Tab 3"})]}),(0,e.jsx)(s.TabsContent,{value:"tab1",children:(0,e.jsx)(l.Typography,{variant:"body1",className:"block",children:"Controlled tab 1 content"})}),(0,e.jsx)(s.TabsContent,{value:"tab2",children:(0,e.jsx)(l.Typography,{variant:"body1",className:"block",children:"Controlled tab 2 content"})}),(0,e.jsx)(s.TabsContent,{value:"tab3",children:(0,e.jsx)(l.Typography,{variant:"body1",className:"block",children:"Controlled tab 3 content"})})]})})}function i(){return(0,e.jsx)(T,{})}a.s(["CODE",0,o,"TabsControlledExample",()=>T,"default",()=>i])}]);
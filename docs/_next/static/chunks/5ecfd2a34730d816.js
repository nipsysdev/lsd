(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68256,a=>{"use strict";var s=a.i(74702);a.s(["Typography",()=>s.T])},27399,a=>{"use strict";var s=a.i(29758);a.s(["Tabs",()=>s.T])},44187,a=>{"use strict";var s=a.i(2582);a.i(82419);var e=a.i(27399),r=a.i(65369),t=a.i(11129),n=a.i(23223),o=a.i(68256);let i=`import { Tabs, TabsContent, TabsList, TabsTrigger, Typography } from '@nipsys/shadcn-lsd';

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
}`;function c(){return(0,s.jsx)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:(0,s.jsxs)(e.Tabs,{defaultValue:"account",children:[(0,s.jsxs)(t.TabsList,{children:[(0,s.jsx)(n.TabsTrigger,{value:"account",children:"Account"}),(0,s.jsx)(n.TabsTrigger,{value:"password",children:"Password"}),(0,s.jsx)(n.TabsTrigger,{value:"settings",children:"Settings"})]}),(0,s.jsx)(r.TabsContent,{value:"account",children:(0,s.jsx)(o.Typography,{variant:"body1",className:"block",children:"Make changes to your account here. Click save when you're done."})}),(0,s.jsx)(r.TabsContent,{value:"password",children:(0,s.jsx)(o.Typography,{variant:"body1",className:"block",children:"Change your password here. After saving, you'll be logged out."})}),(0,s.jsx)(r.TabsContent,{value:"settings",children:(0,s.jsx)(o.Typography,{variant:"body1",className:"block",children:"Manage your application settings here."})})]})})}function l(){return(0,s.jsx)(c,{})}a.s(["CODE",0,i,"TabsBasicExample",()=>c,"default",()=>l])}]);
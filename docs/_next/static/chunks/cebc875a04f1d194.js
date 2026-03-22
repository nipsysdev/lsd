(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,61417,a=>{"use strict";var s=a.i(20607);a.s(["Typography",()=>s.T])},16117,a=>{"use strict";var s=a.i(50674);a.s(["Tabs",()=>s.T])},52754,a=>{"use strict";var s=a.i(98134);a.i(26940);var e=a.i(16117),r=a.i(38205),t=a.i(91563),n=a.i(22410),o=a.i(61417);let i=`import { Tabs, TabsContent, TabsList, TabsTrigger, Typography } from '@nipsys/shadcn-lsd';

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
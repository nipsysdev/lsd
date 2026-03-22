(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var a=e.i(75201);function t(){var e;let t;e=e=>{let a=document.documentElement;e.theme&&("dark"===e.theme?a.classList.add("dark"):a.classList.remove("dark")),e.accent&&("monochrome"===e.accent?a.removeAttribute("data-theme"):a.setAttribute("data-theme",e.accent)),e.font&&(a.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?a.classList.add("font-serif"):"sans-serif"===e.font?a.classList.add("font-sans"):"monospace"===e.font&&a.classList.add("font-mono"))},t=a.useRef(e),a.useEffect(()=>{t.current=e},[e]),a.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&t.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>t],45173)},61417,e=>{"use strict";var a=e.i(20607);e.s(["Typography",()=>a.T])},16117,e=>{"use strict";var a=e.i(50674);e.s(["Tabs",()=>a.T])},45776,e=>{"use strict";var a=e.i(98134);e.i(26940);var t=e.i(16117),s=e.i(38205),r=e.i(91563),i=e.i(22410),n=e.i(61417),o=e.i(45173);let l=`import { Tabs, TabsContent, TabsList, TabsTrigger, Typography } from '@nipsys/shadcn-lsd';

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
}`;function b(){return(0,o.useSendThemeToIframes)(),(0,a.jsxs)(t.Tabs,{defaultValue:"tab1",bordered:!0,children:[(0,a.jsxs)(r.TabsList,{children:[(0,a.jsx)(i.TabsTrigger,{value:"tab1",children:"Profile"}),(0,a.jsx)(i.TabsTrigger,{value:"tab2",children:"Billing"}),(0,a.jsx)(i.TabsTrigger,{value:"tab3",children:"Notifications"})]}),(0,a.jsx)(s.TabsContent,{value:"tab1",children:(0,a.jsx)(n.Typography,{variant:"body1",className:"block",children:"Profile information with border"})}),(0,a.jsx)(s.TabsContent,{value:"tab2",children:(0,a.jsx)(n.Typography,{variant:"body1",className:"block",children:"Billing information with border"})}),(0,a.jsx)(s.TabsContent,{value:"tab3",children:(0,a.jsx)(n.Typography,{variant:"body1",className:"block",children:"Notification settings with border"})})]})}function d(){return(0,a.jsx)(b,{})}e.s(["CODE",0,l,"TabsBorderedExample",()=>b,"default",()=>d])}]);
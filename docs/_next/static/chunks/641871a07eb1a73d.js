(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,a=>{"use strict";var e=a.i(75201);function t(){var a;let t;a=a=>{let e=document.documentElement;a.theme&&("dark"===a.theme?e.classList.add("dark"):e.classList.remove("dark")),a.accent&&("monochrome"===a.accent?e.removeAttribute("data-theme"):e.setAttribute("data-theme",a.accent)),a.font&&(e.classList.remove("font-serif","font-sans","font-mono"),"serif"===a.font?e.classList.add("font-serif"):"sans-serif"===a.font?e.classList.add("font-sans"):"monospace"===a.font&&e.classList.add("font-mono"))},t=e.useRef(a),e.useEffect(()=>{t.current=a},[a]),e.useEffect(()=>{if(window.self===window.top)return;let a=a=>{"example-params"===a.data.type&&t.current(a.data.data)};return window.addEventListener("message",a),()=>{window.removeEventListener("message",a)}},["example-params"])}a.s(["useSendThemeToIframes",()=>t],45173)},11770,a=>{"use strict";var e=a.i(13701);a.s(["Tabs",()=>e.T])},4656,a=>{"use strict";var e=a.i(98134);a.i(26940);var t=a.i(11770),s=a.i(38205),n=a.i(91563),r=a.i(22410),o=a.i(6896),i=a.i(45173);let b=`import { Tabs, TabsContent, TabsList, TabsTrigger, Typography } from '@nipsys/shadcn-lsd';

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
}`;function l(){return(0,i.useSendThemeToIframes)(),(0,e.jsxs)(t.Tabs,{defaultValue:"tab1",children:[(0,e.jsxs)(n.TabsList,{children:[(0,e.jsx)(r.TabsTrigger,{value:"tab1",children:"Active Tab"}),(0,e.jsx)(r.TabsTrigger,{value:"tab2",children:"Another Tab"}),(0,e.jsx)(r.TabsTrigger,{value:"tab3",disabled:!0,children:"Disabled Tab"})]}),(0,e.jsx)(s.TabsContent,{value:"tab1",children:(0,e.jsx)(o.Typography,{variant:"body1",className:"block",children:"Active tab content"})}),(0,e.jsx)(s.TabsContent,{value:"tab2",children:(0,e.jsx)(o.Typography,{variant:"body1",className:"block",children:"Another tab content"})}),(0,e.jsx)(s.TabsContent,{value:"tab3",children:(0,e.jsx)(o.Typography,{variant:"body1",className:"block",children:"Disabled tab content"})})]})}function c(){return(0,e.jsx)(l,{})}a.s(["CODE",0,b,"TabsDisabledExample",()=>l,"default",()=>c])}]);
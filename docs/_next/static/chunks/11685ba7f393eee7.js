(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68869,a=>{"use strict";var e=a.i(86900);function t(){var a;let t;a=a=>{let e=document.documentElement;a.theme&&("dark"===a.theme?e.classList.add("dark"):e.classList.remove("dark")),a.accent&&("monochrome"===a.accent?e.removeAttribute("data-theme"):e.setAttribute("data-theme",a.accent)),a.font&&(e.classList.remove("font-serif","font-sans","font-mono"),"serif"===a.font?e.classList.add("font-serif"):"sans-serif"===a.font?e.classList.add("font-sans"):"monospace"===a.font&&e.classList.add("font-mono"))},t=e.useRef(a),e.useEffect(()=>{t.current=a},[a]),e.useEffect(()=>{if(window.self===window.top)return;let a=a=>{"example-params"===a.data.type&&t.current(a.data.data)};return window.addEventListener("message",a),()=>{window.removeEventListener("message",a)}},["example-params"])}a.s(["useSendThemeToIframes",()=>t],68869)},68256,a=>{"use strict";var e=a.i(74702);a.s(["Typography",()=>e.T])},16353,a=>{"use strict";var e=a.i(12867);a.s(["Tabs",()=>e.T])},16832,a=>{"use strict";var e=a.i(2582);a.i(82419);var t=a.i(16353),s=a.i(65369),n=a.i(11129),r=a.i(23223),b=a.i(68256),l=a.i(68869);let o=`import { Tabs, TabsContent, TabsList, TabsTrigger, Typography } from '@nipsys/shadcn-lsd';

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
}`;function T(){return(0,l.useSendThemeToIframes)(),(0,e.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,e.jsxs)(t.Tabs,{defaultValue:"tab1",size:"sm",children:[(0,e.jsxs)(n.TabsList,{children:[(0,e.jsx)(r.TabsTrigger,{value:"tab1",children:"Small"}),(0,e.jsx)(r.TabsTrigger,{value:"tab2",children:"Tab 2"}),(0,e.jsx)(r.TabsTrigger,{value:"tab3",children:"Tab 3"})]}),(0,e.jsx)(s.TabsContent,{value:"tab1",children:(0,e.jsx)(b.Typography,{variant:"body1",className:"block",children:"Small tab content"})}),(0,e.jsx)(s.TabsContent,{value:"tab2",children:(0,e.jsx)(b.Typography,{variant:"body1",className:"block",children:"Small tab content 2"})}),(0,e.jsx)(s.TabsContent,{value:"tab3",children:(0,e.jsx)(b.Typography,{variant:"body1",className:"block",children:"Small tab content 3"})})]}),(0,e.jsxs)(t.Tabs,{defaultValue:"tab1",size:"md",children:[(0,e.jsxs)(n.TabsList,{children:[(0,e.jsx)(r.TabsTrigger,{value:"tab1",children:"Medium"}),(0,e.jsx)(r.TabsTrigger,{value:"tab2",children:"Tab 2"}),(0,e.jsx)(r.TabsTrigger,{value:"tab3",children:"Tab 3"})]}),(0,e.jsx)(s.TabsContent,{value:"tab1",children:(0,e.jsx)(b.Typography,{variant:"body1",className:"block",children:"Medium tab content"})}),(0,e.jsx)(s.TabsContent,{value:"tab2",children:(0,e.jsx)(b.Typography,{variant:"body1",className:"block",children:"Medium tab content 2"})}),(0,e.jsx)(s.TabsContent,{value:"tab3",children:(0,e.jsx)(b.Typography,{variant:"body1",className:"block",children:"Medium tab content 3"})})]}),(0,e.jsxs)(t.Tabs,{defaultValue:"tab1",size:"lg",children:[(0,e.jsxs)(n.TabsList,{children:[(0,e.jsx)(r.TabsTrigger,{value:"tab1",children:"Large"}),(0,e.jsx)(r.TabsTrigger,{value:"tab2",children:"Tab 2"}),(0,e.jsx)(r.TabsTrigger,{value:"tab3",children:"Tab 3"})]}),(0,e.jsx)(s.TabsContent,{value:"tab1",children:(0,e.jsx)(b.Typography,{variant:"body1",className:"block",children:"Large tab content"})}),(0,e.jsx)(s.TabsContent,{value:"tab2",children:(0,e.jsx)(b.Typography,{variant:"body1",className:"block",children:"Large tab content 2"})}),(0,e.jsx)(s.TabsContent,{value:"tab3",children:(0,e.jsx)(b.Typography,{variant:"body1",className:"block",children:"Large tab content 3"})})]})]})}function i(){return(0,e.jsx)(T,{})}a.s(["CODE",0,o,"TabsSizesExample",()=>T,"default",()=>i])}]);
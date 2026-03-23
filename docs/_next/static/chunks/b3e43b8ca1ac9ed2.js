(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68869,e=>{"use strict";var a=e.i(86900);function t(){var e;let t;e=e=>{let a=document.documentElement;e.theme&&("dark"===e.theme?a.classList.add("dark"):a.classList.remove("dark")),e.accent&&("monochrome"===e.accent?a.removeAttribute("data-theme"):a.setAttribute("data-theme",e.accent)),e.font&&(a.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?a.classList.add("font-serif"):"sans-serif"===e.font?a.classList.add("font-sans"):"monospace"===e.font&&a.classList.add("font-mono"))},t=a.useRef(e),a.useEffect(()=>{t.current=e},[e]),a.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&t.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>t],68869)},68256,e=>{"use strict";var a=e.i(74702);e.s(["Typography",()=>a.T])},27399,e=>{"use strict";var a=e.i(29758);e.s(["Tabs",()=>a.T])},85406,e=>{"use strict";var a=e.i(2582);e.i(82419);var t=e.i(27399),s=e.i(65369),r=e.i(11129),n=e.i(23223),o=e.i(68256),i=e.i(68869);let l=`import { Tabs, TabsContent, TabsList, TabsTrigger, Typography } from '@nipsys/shadcn-lsd';

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
}`;function c(){return(0,i.useSendThemeToIframes)(),(0,a.jsxs)(t.Tabs,{defaultValue:"tab1",fullWidth:!0,children:[(0,a.jsxs)(r.TabsList,{children:[(0,a.jsx)(n.TabsTrigger,{value:"tab1",children:"Overview"}),(0,a.jsx)(n.TabsTrigger,{value:"tab2",children:"Details"}),(0,a.jsx)(n.TabsTrigger,{value:"tab3",children:"Reviews"})]}),(0,a.jsx)(s.TabsContent,{value:"tab1",children:(0,a.jsx)(o.Typography,{variant:"body1",className:"block",children:"Overview content goes here"})}),(0,a.jsx)(s.TabsContent,{value:"tab2",children:(0,a.jsx)(o.Typography,{variant:"body1",className:"block",children:"Details content goes here"})}),(0,a.jsx)(s.TabsContent,{value:"tab3",children:(0,a.jsx)(o.Typography,{variant:"body1",className:"block",children:"Reviews content goes here"})})]})}function b(){return(0,a.jsx)(c,{})}e.s(["CODE",0,l,"TabsFullWidthExample",()=>c,"default",()=>b])}]);
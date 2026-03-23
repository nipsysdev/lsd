(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68869,e=>{"use strict";var a=e.i(86900);function t(){var e;let t;e=e=>{let a=document.documentElement;e.theme&&("dark"===e.theme?a.classList.add("dark"):a.classList.remove("dark")),e.accent&&("monochrome"===e.accent?a.removeAttribute("data-theme"):a.setAttribute("data-theme",e.accent)),e.font&&(a.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?a.classList.add("font-serif"):"sans-serif"===e.font?a.classList.add("font-sans"):"monospace"===e.font&&a.classList.add("font-mono"))},t=a.useRef(e),a.useEffect(()=>{t.current=e},[e]),a.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&t.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>t],68869)},72529,e=>{"use strict";var a=e.i(18510);e.s(["Badge",()=>a.B])},79221,e=>{"use strict";var a=e.i(2582);e.i(82419);var t=e.i(72529),s=e.i(68869);let n=`import { Badge } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base)">
      <Badge variant="filled">Filled</Badge>
      <Badge variant="outlined">Outlined</Badge>
      <Badge variant="destructive">Error</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="dot" size="sm" />
      <Badge variant="dot" size="md" />
      <Badge variant="dot" size="lg" />
    </div>
  );
}`;function i(){return(0,s.useSendThemeToIframes)(),(0,a.jsxs)("div",{className:"flex flex-wrap gap-(--lsd-spacing-base)",children:[(0,a.jsx)(t.Badge,{variant:"filled",children:"Filled"}),(0,a.jsx)(t.Badge,{variant:"outlined",children:"Outlined"}),(0,a.jsx)(t.Badge,{variant:"destructive",children:"Error"}),(0,a.jsx)(t.Badge,{variant:"success",children:"Success"}),(0,a.jsx)(t.Badge,{variant:"warning",children:"Warning"}),(0,a.jsx)(t.Badge,{variant:"info",children:"Info"}),(0,a.jsx)(t.Badge,{variant:"dot",size:"sm"}),(0,a.jsx)(t.Badge,{variant:"dot",size:"md"}),(0,a.jsx)(t.Badge,{variant:"dot",size:"lg"})]})}function d(){return(0,a.jsx)(i,{})}e.s(["BadgeVariantsExample",()=>i,"CODE",0,n,"default",()=>d])}]);
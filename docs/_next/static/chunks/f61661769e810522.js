(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var s=e.i(75201);function a(){var e;let a;e=e=>{let s=document.documentElement;e.theme&&("dark"===e.theme?s.classList.add("dark"):s.classList.remove("dark")),e.accent&&("monochrome"===e.accent?s.removeAttribute("data-theme"):s.setAttribute("data-theme",e.accent)),e.font&&(s.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?s.classList.add("font-serif"):"sans-serif"===e.font?s.classList.add("font-sans"):"monospace"===e.font&&s.classList.add("font-mono"))},a=s.useRef(e),s.useEffect(()=>{a.current=e},[e]),s.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&a.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>a],45173)},54857,e=>{"use strict";var s=e.i(88426);e.s(["Badge",()=>s.B])},34281,e=>{"use strict";var s=e.i(98134);e.i(26940);var a=e.i(54857),t=e.i(45173);let d=`import { Badge } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-wrap items-center gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
      <Badge variant="dot" size="sm" />
      <Badge variant="dot" size="md" />
      <Badge variant="dot" size="lg" />
    </div>
  );
}`;function i(){return(0,t.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-wrap items-center gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)",children:[(0,s.jsx)(a.Badge,{size:"sm",children:"Small"}),(0,s.jsx)(a.Badge,{size:"md",children:"Medium"}),(0,s.jsx)(a.Badge,{size:"lg",children:"Large"}),(0,s.jsx)(a.Badge,{variant:"dot",size:"sm"}),(0,s.jsx)(a.Badge,{variant:"dot",size:"md"}),(0,s.jsx)(a.Badge,{variant:"dot",size:"lg"})]})}function n(){return(0,s.jsx)(i,{})}e.s(["BadgeSizesExample",()=>i,"CODE",0,d,"default",()=>n])}]);
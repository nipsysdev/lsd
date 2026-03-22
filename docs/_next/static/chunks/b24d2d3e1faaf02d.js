(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var s=e.i(75201);function a(){var e;let a;e=e=>{let s=document.documentElement;e.theme&&("dark"===e.theme?s.classList.add("dark"):s.classList.remove("dark")),e.accent&&("monochrome"===e.accent?s.removeAttribute("data-theme"):s.setAttribute("data-theme",e.accent)),e.font&&(s.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?s.classList.add("font-serif"):"sans-serif"===e.font?s.classList.add("font-sans"):"monospace"===e.font&&s.classList.add("font-mono"))},a=s.useRef(e),s.useEffect(()=>{a.current=e},[e]),s.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&a.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>a],45173)},54857,e=>{"use strict";var s=e.i(88426);e.s(["Badge",()=>s.B])},45501,e=>{"use strict";var s=e.i(98134);e.i(26940);var a=e.i(54857),t=e.i(45173);let d=`import { Badge } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base)">
      <Badge variant="dot" size="sm" />
      <Badge variant="dot" size="md" />
      <Badge variant="dot" size="lg" />
      <Badge variant="dot" size="sm" dot className="lsd:bg-(--lsd-color-success)" />
      <Badge variant="dot" size="md" dot className="lsd:bg-(--lsd-color-warning)" />
      <Badge variant="dot" size="lg" dot className="lsd:bg-(--lsd-color-info)" />
      <Badge variant="dot" size="md" dot className="lsd:bg-(--lsd-color-destructive)" />
    </div>
  );
}`;function o(){return(0,t.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-wrap gap-(--lsd-spacing-base)",children:[(0,s.jsx)(a.Badge,{variant:"dot",size:"sm"}),(0,s.jsx)(a.Badge,{variant:"dot",size:"md"}),(0,s.jsx)(a.Badge,{variant:"dot",size:"lg"}),(0,s.jsx)(a.Badge,{variant:"dot",size:"sm",dot:!0,className:"lsd:bg-(--lsd-color-success)"}),(0,s.jsx)(a.Badge,{variant:"dot",size:"md",dot:!0,className:"lsd:bg-(--lsd-color-warning)"}),(0,s.jsx)(a.Badge,{variant:"dot",size:"lg",dot:!0,className:"lsd:bg-(--lsd-color-info)"}),(0,s.jsx)(a.Badge,{variant:"dot",size:"md",dot:!0,className:"lsd:bg-(--lsd-color-destructive)"})]})}function i(){return(0,s.jsx)(o,{})}e.s(["BadgeDotsExample",()=>o,"CODE",0,d,"default",()=>i])}]);
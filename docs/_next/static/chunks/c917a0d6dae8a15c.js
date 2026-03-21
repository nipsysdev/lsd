(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,s=>{"use strict";var e=s.i(75201);function a(){var s;let a;s=s=>{let e=document.documentElement;s.theme&&("dark"===s.theme?e.classList.add("dark"):e.classList.remove("dark")),s.accent&&("monochrome"===s.accent?e.removeAttribute("data-theme"):e.setAttribute("data-theme",s.accent)),s.font&&(e.classList.remove("font-serif","font-sans","font-mono"),"serif"===s.font?e.classList.add("font-serif"):"sans-serif"===s.font?e.classList.add("font-sans"):"monospace"===s.font&&e.classList.add("font-mono"))},a=e.useRef(s),e.useEffect(()=>{a.current=s},[s]),e.useEffect(()=>{if(window.self===window.top)return;let s=s=>{"example-params"===s.data.type&&a.current(s.data.data)};return window.addEventListener("message",s),()=>{window.removeEventListener("message",s)}},["example-params"])}s.s(["useSendThemeToIframes",()=>a],45173)},54857,s=>{"use strict";var e=s.i(88426);s.s(["Badge",()=>e.B])},45501,s=>{"use strict";var e=s.i(98134);s.i(26940);var a=s.i(54857),t=s.i(45173);let d=`import { Badge } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Badge variant="dot" size="sm" />
      <Badge variant="dot" size="md" />
      <Badge variant="dot" size="lg" />
      <Badge variant="dot" size="sm" dot className="lsd:bg-(--lsd-color-success)" />
      <Badge variant="dot" size="md" dot className="lsd:bg-(--lsd-color-warning)" />
      <Badge variant="dot" size="lg" dot className="lsd:bg-(--lsd-color-info)" />
      <Badge variant="dot" size="md" dot className="lsd:bg-(--lsd-color-destructive)" />
    </div>
  );
}`;function o(){return(0,t.useSendThemeToIframes)(),(0,e.jsxs)("div",{className:"flex flex-wrap gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)",children:[(0,e.jsx)(a.Badge,{variant:"dot",size:"sm"}),(0,e.jsx)(a.Badge,{variant:"dot",size:"md"}),(0,e.jsx)(a.Badge,{variant:"dot",size:"lg"}),(0,e.jsx)(a.Badge,{variant:"dot",size:"sm",dot:!0,className:"lsd:bg-(--lsd-color-success)"}),(0,e.jsx)(a.Badge,{variant:"dot",size:"md",dot:!0,className:"lsd:bg-(--lsd-color-warning)"}),(0,e.jsx)(a.Badge,{variant:"dot",size:"lg",dot:!0,className:"lsd:bg-(--lsd-color-info)"}),(0,e.jsx)(a.Badge,{variant:"dot",size:"md",dot:!0,className:"lsd:bg-(--lsd-color-destructive)"})]})}function r(){return(0,e.jsx)(o,{})}s.s(["BadgeDotsExample",()=>o,"CODE",0,d,"default",()=>r])}]);
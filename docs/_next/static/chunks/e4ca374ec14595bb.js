(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68869,e=>{"use strict";var t=e.i(86900);function s(){var e;let s;e=e=>{let t=document.documentElement;e.theme&&("dark"===e.theme?t.classList.add("dark"):t.classList.remove("dark")),e.accent&&("monochrome"===e.accent?t.removeAttribute("data-theme"):t.setAttribute("data-theme",e.accent)),e.font&&(t.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?t.classList.add("font-serif"):"sans-serif"===e.font?t.classList.add("font-sans"):"monospace"===e.font&&t.classList.add("font-mono"))},s=t.useRef(e),t.useEffect(()=>{s.current=e},[e]),t.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&s.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>s],68869)},42836,e=>{"use strict";var t=e.i(88102);e.s(["Button",()=>t.B])},55856,e=>{"use strict";var t=e.i(2582);e.i(82419);var s=e.i(42836),a=e.i(68869);let n=`import { Button } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base)">
      <Button disabled>Disabled</Button>
      <Button variant="outlined" disabled>Disabled</Button>
    </div>
  );
}
`;function i(){return(0,a.useSendThemeToIframes)(),(0,t.jsxs)("div",{className:"flex flex-wrap gap-(--lsd-spacing-base)",children:[(0,t.jsx)(s.Button,{disabled:!0,children:"Disabled"}),(0,t.jsx)(s.Button,{variant:"outlined",disabled:!0,children:"Disabled"})]})}function o(){return(0,t.jsx)(i,{})}e.s(["CODE",0,n,"Example",()=>i,"default",()=>o])}]);
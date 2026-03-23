(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68869,e=>{"use strict";var t=e.i(86900);function s(){var e;let s;e=e=>{let t=document.documentElement;e.theme&&("dark"===e.theme?t.classList.add("dark"):t.classList.remove("dark")),e.accent&&("monochrome"===e.accent?t.removeAttribute("data-theme"):t.setAttribute("data-theme",e.accent)),e.font&&(t.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?t.classList.add("font-serif"):"sans-serif"===e.font?t.classList.add("font-sans"):"monospace"===e.font&&t.classList.add("font-mono"))},s=t.useRef(e),t.useEffect(()=>{s.current=e},[e]),t.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&s.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>s],68869)},42836,e=>{"use strict";var t=e.i(88102);e.s(["Button",()=>t.B])},86598,e=>{"use strict";var t=e.i(2582);e.i(82419);var s=e.i(42836),n=e.i(68869);let a=`import { Button } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base)">
      <Button loading>Loading</Button>
      <Button loading>With Text</Button>
    </div>
  );
}`;function o(){return(0,n.useSendThemeToIframes)(),(0,t.jsxs)("div",{className:"flex flex-wrap gap-(--lsd-spacing-base)",children:[(0,t.jsx)(s.Button,{loading:!0,children:"Loading"}),(0,t.jsx)(s.Button,{loading:!0,children:"With Text"})]})}function i(){return(0,t.jsx)(o,{})}e.s(["ButtonLoadingExample",()=>o,"CODE",0,a,"default",()=>i])}]);
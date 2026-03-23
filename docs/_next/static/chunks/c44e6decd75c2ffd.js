(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68869,e=>{"use strict";var a=e.i(86900);function s(){var e;let s;e=e=>{let a=document.documentElement;e.theme&&("dark"===e.theme?a.classList.add("dark"):a.classList.remove("dark")),e.accent&&("monochrome"===e.accent?a.removeAttribute("data-theme"):a.setAttribute("data-theme",e.accent)),e.font&&(a.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?a.classList.add("font-serif"):"sans-serif"===e.font?a.classList.add("font-sans"):"monospace"===e.font&&a.classList.add("font-mono"))},s=a.useRef(e),a.useEffect(()=>{s.current=e},[e]),a.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&s.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>s],68869)},43969,e=>{"use strict";var a=e.i(71448);e.s(["Toggle",()=>a.T])},4021,e=>{"use strict";var a=e.i(2582);e.i(82419);var s=e.i(43969),t=e.i(68869);let l=`import { Toggle } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Toggle aria-label="Toggle bold">B</Toggle>
        <Toggle aria-label="Toggle italic">I</Toggle>
        <Toggle aria-label="Toggle underline">U</Toggle>
      </div>
    </div>
  );
}`;function n(){return(0,t.useSendThemeToIframes)(),(0,a.jsx)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:(0,a.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-base)",children:[(0,a.jsx)(s.Toggle,{"aria-label":"Toggle bold",children:"B"}),(0,a.jsx)(s.Toggle,{"aria-label":"Toggle italic",children:"I"}),(0,a.jsx)(s.Toggle,{"aria-label":"Toggle underline",children:"U"})]})})}function o(){return(0,a.jsx)(n,{})}e.s(["CODE",0,l,"ToggleExample",()=>n,"default",()=>o])}]);
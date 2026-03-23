(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68869,e=>{"use strict";var t=e.i(86900);function s(){var e;let s;e=e=>{let t=document.documentElement;e.theme&&("dark"===e.theme?t.classList.add("dark"):t.classList.remove("dark")),e.accent&&("monochrome"===e.accent?t.removeAttribute("data-theme"):t.setAttribute("data-theme",e.accent)),e.font&&(t.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?t.classList.add("font-serif"):"sans-serif"===e.font?t.classList.add("font-sans"):"monospace"===e.font&&t.classList.add("font-mono"))},s=t.useRef(e),t.useEffect(()=>{s.current=e},[e]),t.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&s.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>s],68869)},86409,e=>{"use strict";var t=e.i(58640);e.s(["Input",()=>t.I])},3725,e=>{"use strict";var t=e.i(2582);e.i(82419);var s=e.i(86409),r=e.i(68869);let a=`import { Input } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <Input
      label="Password"
      type="password"
      placeholder="Enter password"
      error
      supportingText="Password must be at least 8 characters."
    />
  );
}`;function n(){return(0,r.useSendThemeToIframes)(),(0,t.jsx)(s.Input,{label:"Password",type:"password",placeholder:"Enter password",error:!0,supportingText:"Password must be at least 8 characters."})}function o(){return(0,t.jsx)(n,{})}e.s(["CODE",0,a,"InputErrorExample",()=>n,"default",()=>o])}]);
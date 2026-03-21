(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var t=e.i(75201);function a(){var e;let a;e=e=>{let t=document.documentElement;e.theme&&("dark"===e.theme?t.classList.add("dark"):t.classList.remove("dark")),e.accent&&("monochrome"===e.accent?t.removeAttribute("data-theme"):t.setAttribute("data-theme",e.accent)),e.font&&(t.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?t.classList.add("font-serif"):"sans-serif"===e.font?t.classList.add("font-sans"):"monospace"===e.font&&t.classList.add("font-mono"))},a=t.useRef(e),t.useEffect(()=>{a.current=e},[e]),t.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&a.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>a],45173)},46402,e=>{"use strict";var t=e.i(45171);e.s(["Input",()=>t.I])},60196,e=>{"use strict";var t=e.i(98134);e.i(26940);var a=e.i(46402),s=e.i(45173);let l=`import { Input } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Input type="text" label="Text" placeholder="Text input" />
      <Input type="email" label="Email" placeholder="you@example.com" />
      <Input type="password" label="Password" placeholder="••••••••" />
      <Input type="number" label="Number" placeholder="123" />
      <Input type="date" label="Date" />
    </div>
  );
}`;function n(){return(0,s.useSendThemeToIframes)(),(0,t.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,t.jsx)(a.Input,{type:"text",label:"Text",placeholder:"Text input"}),(0,t.jsx)(a.Input,{type:"email",label:"Email",placeholder:"you@example.com"}),(0,t.jsx)(a.Input,{type:"password",label:"Password",placeholder:"••••••••"}),(0,t.jsx)(a.Input,{type:"number",label:"Number",placeholder:"123"}),(0,t.jsx)(a.Input,{type:"date",label:"Date"})]})}function r(){return(0,t.jsx)(n,{})}e.s(["CODE",0,l,"InputTypesExample",()=>n,"default",()=>r])}]);
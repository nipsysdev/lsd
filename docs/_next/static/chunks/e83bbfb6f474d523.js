(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var t=e.i(75201);function s(){var e;let s;e=e=>{let t=document.documentElement;e.theme&&("dark"===e.theme?t.classList.add("dark"):t.classList.remove("dark")),e.accent&&("monochrome"===e.accent?t.removeAttribute("data-theme"):t.setAttribute("data-theme",e.accent)),e.font&&(t.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?t.classList.add("font-serif"):"sans-serif"===e.font?t.classList.add("font-sans"):"monospace"===e.font&&t.classList.add("font-mono"))},s=t.useRef(e),t.useEffect(()=>{s.current=e},[e]),t.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&s.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>s],45173)},50333,e=>{"use strict";var t=e.i(98134);e.i(26940);var s=e.i(59038),n=e.i(45173);let a=`import { Button } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Button fullWidth>Full Width Button</Button>
    </div>
  );
}
`;function o(){return(0,n.useSendThemeToIframes)(),(0,t.jsx)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:(0,t.jsx)(s.Button,{fullWidth:!0,children:"Full Width Button"})})}function r(){return(0,t.jsx)(o,{})}e.s(["CODE",0,a,"Example",()=>o,"default",()=>r])}]);
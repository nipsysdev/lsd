(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var s=e.i(75201);function a(){var e;let a;e=e=>{let s=document.documentElement;e.theme&&("dark"===e.theme?s.classList.add("dark"):s.classList.remove("dark")),e.accent&&("monochrome"===e.accent?s.removeAttribute("data-theme"):s.setAttribute("data-theme",e.accent)),e.font&&(s.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?s.classList.add("font-serif"):"sans-serif"===e.font?s.classList.add("font-sans"):"monospace"===e.font&&s.classList.add("font-mono"))},a=s.useRef(e),s.useEffect(()=>{a.current=e},[e]),s.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&a.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>a],45173)},37910,e=>{"use strict";var s=e.i(98134);e.i(26940);var a=e.i(73597),t=e.i(45173);let n=`import { Badge } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base)">
      <Badge>New</Badge>
      <Badge>In Progress</Badge>
      <Badge>Completed</Badge>
      <Badge>Archived</Badge>
    </div>
  );
}`;function d(){return(0,t.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-wrap gap-(--lsd-spacing-base)",children:[(0,s.jsx)(a.Badge,{children:"New"}),(0,s.jsx)(a.Badge,{children:"In Progress"}),(0,s.jsx)(a.Badge,{children:"Completed"}),(0,s.jsx)(a.Badge,{children:"Archived"})]})}function r(){return(0,s.jsx)(d,{})}e.s(["BadgeBasicExample",()=>d,"CODE",0,n,"default",()=>r])}]);
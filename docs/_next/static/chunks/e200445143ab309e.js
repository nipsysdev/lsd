(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var t=e.i(75201);function a(){var e;let a;e=e=>{let t=document.documentElement;e.theme&&("dark"===e.theme?t.classList.add("dark"):t.classList.remove("dark")),e.accent&&("monochrome"===e.accent?t.removeAttribute("data-theme"):t.setAttribute("data-theme",e.accent)),e.font&&(t.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?t.classList.add("font-serif"):"sans-serif"===e.font?t.classList.add("font-sans"):"monospace"===e.font&&t.classList.add("font-mono"))},a=t.useRef(e),t.useEffect(()=>{a.current=e},[e]),t.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&a.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>a],45173)},59838,e=>{"use strict";var t=e.i(98134);e.i(26940);var a=e.i(15560),s=e.i(45173);let r=`import { Textarea } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Textarea placeholder="Enter your message here..." />
      <Textarea 
        placeholder="This is a textarea with some initial content"
        defaultValue="This is some initial text content that appears when the component loads."
      />
      <Textarea 
        placeholder="Textarea with rows attribute"
        rows={6}
      />
    </div>
  );
}`;function n(){return(0,s.useSendThemeToIframes)(),(0,t.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,t.jsx)(a.Textarea,{placeholder:"Enter your message here..."}),(0,t.jsx)(a.Textarea,{placeholder:"This is a textarea with some initial content",defaultValue:"This is some initial text content that appears when the component loads."}),(0,t.jsx)(a.Textarea,{placeholder:"Textarea with rows attribute",rows:6})]})}function o(){return(0,t.jsx)(n,{})}e.s(["CODE",0,r,"TextareaBasicExample",()=>n,"default",()=>o])}]);
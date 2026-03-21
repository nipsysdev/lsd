(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var t=e.i(75201);function s(){var e;let s;e=e=>{let t=document.documentElement;e.theme&&("dark"===e.theme?t.classList.add("dark"):t.classList.remove("dark")),e.accent&&("monochrome"===e.accent?t.removeAttribute("data-theme"):t.setAttribute("data-theme",e.accent)),e.font&&(t.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?t.classList.add("font-serif"):"sans-serif"===e.font?t.classList.add("font-sans"):"monospace"===e.font&&t.classList.add("font-mono"))},s=t.useRef(e),t.useEffect(()=>{s.current=e},[e]),t.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&s.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>s],45173)},46402,e=>{"use strict";var t=e.i(45171);e.s(["Input",()=>t.I])},58929,e=>{"use strict";var t=e.i(98134);e.i(26940);var s=e.i(46402),a=e.i(45173);let l=`import { Input } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Input size="xs" label="Extra Small" placeholder="xs input" />
      <Input size="sm" label="Small" placeholder="sm input" />
      <Input size="md" label="Medium" placeholder="md input" />
      <Input size="lg" label="Large" placeholder="lg input" />
      <Input size="xl" label="Extra Large" placeholder="xl input" />
    </div>
  );
}`;function n(){return(0,a.useSendThemeToIframes)(),(0,t.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,t.jsx)(s.Input,{size:"xs",label:"Extra Small",placeholder:"xs input"}),(0,t.jsx)(s.Input,{size:"sm",label:"Small",placeholder:"sm input"}),(0,t.jsx)(s.Input,{size:"md",label:"Medium",placeholder:"md input"}),(0,t.jsx)(s.Input,{size:"lg",label:"Large",placeholder:"lg input"}),(0,t.jsx)(s.Input,{size:"xl",label:"Extra Large",placeholder:"xl input"})]})}function i(){return(0,t.jsx)(n,{})}e.s(["CODE",0,l,"InputSizesExample",()=>n,"default",()=>i])}]);
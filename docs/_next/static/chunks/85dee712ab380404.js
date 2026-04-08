(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var s=e.i(75201);function a(){var e;let a;e=e=>{let s=document.documentElement;e.theme&&("dark"===e.theme?s.classList.add("dark"):s.classList.remove("dark")),e.accent&&("monochrome"===e.accent?s.removeAttribute("data-theme"):s.setAttribute("data-theme",e.accent)),e.font&&(s.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?s.classList.add("font-serif"):"sans-serif"===e.font?s.classList.add("font-sans"):"monospace"===e.font&&s.classList.add("font-mono"))},a=s.useRef(e),s.useEffect(()=>{a.current=e},[e]),s.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&a.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>a],45173)},85847,e=>{"use strict";var s=e.i(98134);e.i(26940);var a=e.i(39225),l=e.i(46353),c=e.i(45173);let t=`import { Checkbox, Label } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-large)">
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Checkbox id="small-checkbox" />
        <Label size="sm" htmlFor="small-checkbox">
          Small Label
        </Label>
      </div>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Checkbox id="medium-checkbox" defaultChecked />
        <Label size="md" htmlFor="medium-checkbox">
          Medium Label
        </Label>
      </div>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Checkbox id="large-checkbox" />
        <Label size="lg" htmlFor="large-checkbox">
          Large Label
        </Label>
      </div>
    </div>
  )
};`;function i(){return(0,c.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-large)",children:[(0,s.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-base)",children:[(0,s.jsx)(a.Checkbox,{id:"small-checkbox"}),(0,s.jsx)(l.Label,{size:"sm",htmlFor:"small-checkbox",children:"Small Label"})]}),(0,s.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-base)",children:[(0,s.jsx)(a.Checkbox,{id:"medium-checkbox",defaultChecked:!0}),(0,s.jsx)(l.Label,{size:"md",htmlFor:"medium-checkbox",children:"Medium Label"})]}),(0,s.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-base)",children:[(0,s.jsx)(a.Checkbox,{id:"large-checkbox"}),(0,s.jsx)(l.Label,{size:"lg",htmlFor:"large-checkbox",children:"Large Label"})]})]})}function d(){return(0,s.jsx)(i,{})}e.s(["CODE",0,t,"LabelSizesExample",()=>i,"default",()=>d])}]);
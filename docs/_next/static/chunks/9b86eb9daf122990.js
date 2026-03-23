(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68869,e=>{"use strict";var a=e.i(86900);function s(){var e;let s;e=e=>{let a=document.documentElement;e.theme&&("dark"===e.theme?a.classList.add("dark"):a.classList.remove("dark")),e.accent&&("monochrome"===e.accent?a.removeAttribute("data-theme"):a.setAttribute("data-theme",e.accent)),e.font&&(a.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?a.classList.add("font-serif"):"sans-serif"===e.font?a.classList.add("font-sans"):"monospace"===e.font&&a.classList.add("font-mono"))},s=a.useRef(e),a.useEffect(()=>{s.current=e},[e]),a.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&s.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>s],68869)},95187,e=>{"use strict";var a=e.i(18531);e.s(["Label",()=>a.L])},84064,e=>{"use strict";var a=e.i(2582);e.i(82419);var s=e.i(44403),t=e.i(95187),c=e.i(68869);let n=`import { Checkbox, Label } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-large)">
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Checkbox id="default-checkbox" />
        <Label variant="default" htmlFor="default-checkbox">
          Default Label
        </Label>
      </div>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Checkbox id="secondary-checkbox" defaultChecked />
        <Label variant="secondary" htmlFor="secondary-checkbox">
          Secondary Label
        </Label>
      </div>
    </div>
  )
};`;function l(){return(0,c.useSendThemeToIframes)(),(0,a.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-large)",children:[(0,a.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-base)",children:[(0,a.jsx)(s.Checkbox,{id:"default-checkbox"}),(0,a.jsx)(t.Label,{variant:"default",htmlFor:"default-checkbox",children:"Default Label"})]}),(0,a.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-base)",children:[(0,a.jsx)(s.Checkbox,{id:"secondary-checkbox",defaultChecked:!0}),(0,a.jsx)(t.Label,{variant:"secondary",htmlFor:"secondary-checkbox",children:"Secondary Label"})]})]})}function r(){return(0,a.jsx)(l,{})}e.s(["CODE",0,n,"LabelVariantsExample",()=>l,"default",()=>r])}]);
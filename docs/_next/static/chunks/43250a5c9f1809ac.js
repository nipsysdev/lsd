(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68869,e=>{"use strict";var s=e.i(86900);function t(){var e;let t;e=e=>{let s=document.documentElement;e.theme&&("dark"===e.theme?s.classList.add("dark"):s.classList.remove("dark")),e.accent&&("monochrome"===e.accent?s.removeAttribute("data-theme"):s.setAttribute("data-theme",e.accent)),e.font&&(s.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?s.classList.add("font-serif"):"sans-serif"===e.font?s.classList.add("font-sans"):"monospace"===e.font&&s.classList.add("font-mono"))},t=s.useRef(e),s.useEffect(()=>{t.current=e},[e]),s.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&t.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>t],68869)},95187,e=>{"use strict";var s=e.i(18531);e.s(["Label",()=>s.L])},37055,e=>{"use strict";var s=e.i(2582);e.i(82419);var t=e.i(44403),a=e.i(95187),i=e.i(68869);let c=`import { Checkbox, Label } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="w-full max-w-sm space-y-(--lsd-spacing-base)">
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Checkbox id="newsletter" defaultChecked />
        <Label htmlFor="newsletter">Subscribe to newsletter</Label>
      </div>
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Checkbox id="updates" />
        <Label htmlFor="updates">Receive product updates</Label>
      </div>
    </div>
  )
};`;function n(){return(0,i.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"w-full max-w-sm space-y-(--lsd-spacing-base)",children:[(0,s.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-base)",children:[(0,s.jsx)(t.Checkbox,{id:"terms"}),(0,s.jsx)(a.Label,{htmlFor:"terms",children:"Accept terms and conditions"})]}),(0,s.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-base)",children:[(0,s.jsx)(t.Checkbox,{id:"newsletter",defaultChecked:!0}),(0,s.jsx)(a.Label,{htmlFor:"newsletter",children:"Subscribe to newsletter"})]}),(0,s.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-base)",children:[(0,s.jsx)(t.Checkbox,{id:"updates"}),(0,s.jsx)(a.Label,{htmlFor:"updates",children:"Receive product updates"})]})]})}function r(){return(0,s.jsx)(n,{})}e.s(["CODE",0,c,"LabelBasicExample",()=>n,"default",()=>r])}]);
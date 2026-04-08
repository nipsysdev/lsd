(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var s=e.i(75201);function t(){var e;let t;e=e=>{let s=document.documentElement;e.theme&&("dark"===e.theme?s.classList.add("dark"):s.classList.remove("dark")),e.accent&&("monochrome"===e.accent?s.removeAttribute("data-theme"):s.setAttribute("data-theme",e.accent)),e.font&&(s.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?s.classList.add("font-serif"):"sans-serif"===e.font?s.classList.add("font-sans"):"monospace"===e.font&&s.classList.add("font-mono"))},t=s.useRef(e),s.useEffect(()=>{t.current=e},[e]),s.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&t.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>t],45173)},73108,e=>{"use strict";var s=e.i(98134);e.i(26940);var t=e.i(39225),a=e.i(46353),l=e.i(6896),r=e.i(45173);let n=`import { Checkbox, Label, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">With Labels</Typography>
      <div className="flex flex-col gap-(--lsd-spacing-base)">
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <Checkbox id="terms" />
          <Label htmlFor="terms">I agree to the terms and conditions</Label>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <Checkbox id="newsletter" defaultChecked />
          <Label htmlFor="newsletter">Subscribe to newsletter</Label>
        </div>
      </div>
    </div>
  );
}`;function i(){return(0,r.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsx)(l.Typography,{variant:"label1",children:"With Labels"}),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-smaller)",children:[(0,s.jsx)(t.Checkbox,{id:"terms"}),(0,s.jsx)(a.Label,{htmlFor:"terms",children:"I agree to the terms and conditions"})]}),(0,s.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-smaller)",children:[(0,s.jsx)(t.Checkbox,{id:"newsletter",defaultChecked:!0}),(0,s.jsx)(a.Label,{htmlFor:"newsletter",children:"Subscribe to newsletter"})]})]})]})}function c(){return(0,s.jsx)(i,{})}e.s(["CODE",0,n,"CheckboxWithLabelExample",()=>i,"default",()=>c])}]);
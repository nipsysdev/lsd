(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var a=e.i(75201);function s(){var e;let s;e=e=>{let a=document.documentElement;e.theme&&("dark"===e.theme?a.classList.add("dark"):a.classList.remove("dark")),e.accent&&("monochrome"===e.accent?a.removeAttribute("data-theme"):a.setAttribute("data-theme",e.accent)),e.font&&(a.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?a.classList.add("font-serif"):"sans-serif"===e.font?a.classList.add("font-sans"):"monospace"===e.font&&a.classList.add("font-mono"))},s=a.useRef(e),a.useEffect(()=>{s.current=e},[e]),a.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&s.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>s],45173)},23982,e=>{"use strict";var a=e.i(98134);e.i(26940);var s=e.i(46353),l=e.i(64730),t=e.i(68388),r=e.i(6896),i=e.i(75201),d=e.i(45173);let n=`
import { RadioGroup, RadioGroupItem, Label, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  const [value, setValue] = useState('enabled');

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Select payment method</Typography>
      <RadioGroup value={value} onValueChange={setValue}>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="enabled" id="r1" />
          <Label htmlFor="r1">Credit Card</Label>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="disabled" id="r2" disabled />
          <Label htmlFor="r2">PayPal (unavailable)</Label>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="cash" id="r3" />
          <Label htmlFor="r3">Cash on Delivery</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
`;function o(){(0,d.useSendThemeToIframes)();let[e,n]=(0,i.useState)("enabled");return(0,a.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,a.jsx)(r.Typography,{variant:"label1",children:"Select payment method"}),(0,a.jsxs)(l.RadioGroup,{value:e,onValueChange:n,children:[(0,a.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-smaller)",children:[(0,a.jsx)(t.RadioGroupItem,{value:"enabled",id:"r1"}),(0,a.jsx)(s.Label,{htmlFor:"r1",children:"Credit Card"})]}),(0,a.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-smaller)",children:[(0,a.jsx)(t.RadioGroupItem,{value:"disabled",id:"r2",disabled:!0}),(0,a.jsx)(s.Label,{htmlFor:"r2",children:"PayPal (unavailable)"})]}),(0,a.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-smaller)",children:[(0,a.jsx)(t.RadioGroupItem,{value:"cash",id:"r3"}),(0,a.jsx)(s.Label,{htmlFor:"r3",children:"Cash on Delivery"})]})]})]})}function c(){return(0,a.jsx)(o,{})}e.s(["CODE",0,n,"RadioGroupDisabledExample",()=>o,"default",()=>c])}]);
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68869,e=>{"use strict";var a=e.i(86900);function s(){var e;let s;e=e=>{let a=document.documentElement;e.theme&&("dark"===e.theme?a.classList.add("dark"):a.classList.remove("dark")),e.accent&&("monochrome"===e.accent?a.removeAttribute("data-theme"):a.setAttribute("data-theme",e.accent)),e.font&&(a.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?a.classList.add("font-serif"):"sans-serif"===e.font?a.classList.add("font-sans"):"monospace"===e.font&&a.classList.add("font-mono"))},s=a.useRef(e),a.useEffect(()=>{s.current=e},[e]),a.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&s.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>s],68869)},68256,e=>{"use strict";var a=e.i(74702);e.s(["Typography",()=>a.T])},46882,e=>{"use strict";var a=e.i(2582);e.i(82419);var s=e.i(60132),t=e.i(73361),l=e.i(68256),r=e.i(86900),i=e.i(68869);let d=`
import { RadioGroup, RadioGroupItem, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  const [value, setValue] = useState('enabled');

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Select payment method</Typography>
      <RadioGroup value={value} onValueChange={setValue}>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="enabled" />
          <Typography variant="body1">Credit Card</Typography>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="disabled" disabled />
          <Typography variant="body1" className="lsd:text-lsd-text-tertiary">
            PayPal (unavailable)
          </Typography>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="cash" />
          <Typography variant="body1">Cash on Delivery</Typography>
        </div>
      </RadioGroup>
    </div>
  );
}
`;function n(){(0,i.useSendThemeToIframes)();let[e,d]=(0,r.useState)("enabled");return(0,a.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,a.jsx)(l.Typography,{variant:"label1",children:"Select payment method"}),(0,a.jsxs)(s.RadioGroup,{value:e,onValueChange:d,children:[(0,a.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-smaller)",children:[(0,a.jsx)(t.RadioGroupItem,{value:"enabled"}),(0,a.jsx)(l.Typography,{variant:"body1",children:"Credit Card"})]}),(0,a.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-smaller)",children:[(0,a.jsx)(t.RadioGroupItem,{value:"disabled",disabled:!0}),(0,a.jsx)(l.Typography,{variant:"body1",className:"lsd:text-lsd-text-tertiary",children:"PayPal (unavailable)"})]}),(0,a.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-smaller)",children:[(0,a.jsx)(t.RadioGroupItem,{value:"cash"}),(0,a.jsx)(l.Typography,{variant:"body1",children:"Cash on Delivery"})]})]})]})}function o(){return(0,a.jsx)(n,{})}e.s(["CODE",0,d,"RadioGroupDisabledExample",()=>n,"default",()=>o])}]);
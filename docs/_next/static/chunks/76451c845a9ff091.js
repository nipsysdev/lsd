(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68869,e=>{"use strict";var a=e.i(86900);function s(){var e;let s;e=e=>{let a=document.documentElement;e.theme&&("dark"===e.theme?a.classList.add("dark"):a.classList.remove("dark")),e.accent&&("monochrome"===e.accent?a.removeAttribute("data-theme"):a.setAttribute("data-theme",e.accent)),e.font&&(a.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?a.classList.add("font-serif"):"sans-serif"===e.font?a.classList.add("font-sans"):"monospace"===e.font&&a.classList.add("font-mono"))},s=a.useRef(e),a.useEffect(()=>{s.current=e},[e]),a.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&s.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>s],68869)},68256,e=>{"use strict";var a=e.i(74702);e.s(["Typography",()=>a.T])},95187,e=>{"use strict";var a=e.i(18531);e.s(["Label",()=>a.L])},92787,e=>{"use strict";var a=e.i(2582);e.i(82419);var s=e.i(95187),l=e.i(60132),t=e.i(73361),r=e.i(68256),i=e.i(86900),o=e.i(68869);let d=`
import { RadioGroup, RadioGroupItem, Label, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  const [value, setValue] = useState('small');

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Select size</Typography>
      <RadioGroup value={value} onValueChange={setValue}>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="small" id="r1" />
          <Label htmlFor="r1">Small</Label>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="medium" id="r2" />
          <Label htmlFor="r2">Medium</Label>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="large" id="r3" />
          <Label htmlFor="r3">Large</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
`;function n(){(0,o.useSendThemeToIframes)();let[e,d]=(0,i.useState)("small");return(0,a.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,a.jsx)(r.Typography,{variant:"label1",children:"Select size"}),(0,a.jsxs)(l.RadioGroup,{value:e,onValueChange:d,children:[(0,a.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-smaller)",children:[(0,a.jsx)(t.RadioGroupItem,{value:"small",id:"r1"}),(0,a.jsx)(s.Label,{htmlFor:"r1",children:"Small"})]}),(0,a.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-smaller)",children:[(0,a.jsx)(t.RadioGroupItem,{value:"medium",id:"r2"}),(0,a.jsx)(s.Label,{htmlFor:"r2",children:"Medium"})]}),(0,a.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-smaller)",children:[(0,a.jsx)(t.RadioGroupItem,{value:"large",id:"r3"}),(0,a.jsx)(s.Label,{htmlFor:"r3",children:"Large"})]})]})]})}function m(){return(0,a.jsx)(n,{})}e.s(["CODE",0,d,"RadioGroupWithLabelsExample",()=>n,"default",()=>m])}]);
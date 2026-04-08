(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var a=e.i(75201);function s(){var e;let s;e=e=>{let a=document.documentElement;e.theme&&("dark"===e.theme?a.classList.add("dark"):a.classList.remove("dark")),e.accent&&("monochrome"===e.accent?a.removeAttribute("data-theme"):a.setAttribute("data-theme",e.accent)),e.font&&(a.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?a.classList.add("font-serif"):"sans-serif"===e.font?a.classList.add("font-sans"):"monospace"===e.font&&a.classList.add("font-mono"))},s=a.useRef(e),a.useEffect(()=>{s.current=e},[e]),a.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&s.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>s],45173)},59475,e=>{"use strict";var a=e.i(98134);e.i(26940);var s=e.i(46353),t=e.i(64730),o=e.i(68388),i=e.i(6896),l=e.i(75201),r=e.i(45173);let n=`
import { RadioGroup, RadioGroupItem, Label, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  const [value, setValue] = useState('option1');

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Choose an option</Typography>
      <RadioGroup value={value} onValueChange={setValue}>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="option1" id="r1" />
          <Label htmlFor="r1">Option 1</Label>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="option2" id="r2" />
          <Label htmlFor="r2">Option 2</Label>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="option3" id="r3" />
          <Label htmlFor="r3">Option 3</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
`;function d(){(0,r.useSendThemeToIframes)();let[e,n]=(0,l.useState)("option1");return(0,a.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,a.jsx)(i.Typography,{variant:"label1",children:"Choose an option"}),(0,a.jsxs)(t.RadioGroup,{value:e,onValueChange:n,children:[(0,a.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-smaller)",children:[(0,a.jsx)(o.RadioGroupItem,{value:"option1",id:"r1"}),(0,a.jsx)(s.Label,{htmlFor:"r1",children:"Option 1"})]}),(0,a.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-smaller)",children:[(0,a.jsx)(o.RadioGroupItem,{value:"option2",id:"r2"}),(0,a.jsx)(s.Label,{htmlFor:"r2",children:"Option 2"})]}),(0,a.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-smaller)",children:[(0,a.jsx)(o.RadioGroupItem,{value:"option3",id:"r3"}),(0,a.jsx)(s.Label,{htmlFor:"r3",children:"Option 3"})]})]})]})}function c(){return(0,a.jsx)(d,{})}e.s(["CODE",0,n,"RadioGroupBasicExample",()=>d,"default",()=>c])}]);
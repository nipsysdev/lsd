(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68869,e=>{"use strict";var a=e.i(86900);function s(){var e;let s;e=e=>{let a=document.documentElement;e.theme&&("dark"===e.theme?a.classList.add("dark"):a.classList.remove("dark")),e.accent&&("monochrome"===e.accent?a.removeAttribute("data-theme"):a.setAttribute("data-theme",e.accent)),e.font&&(a.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?a.classList.add("font-serif"):"sans-serif"===e.font?a.classList.add("font-sans"):"monospace"===e.font&&a.classList.add("font-mono"))},s=a.useRef(e),a.useEffect(()=>{s.current=e},[e]),a.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&s.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>s],68869)},68256,e=>{"use strict";var a=e.i(74702);e.s(["Typography",()=>a.T])},26327,e=>{"use strict";var a=e.i(2582);e.i(82419);var s=e.i(60132),t=e.i(73361),o=e.i(68256),i=e.i(86900),n=e.i(68869);let r=`
import { RadioGroup, RadioGroupItem, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  const [value, setValue] = useState('option1');

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Choose an option</Typography>
      <RadioGroup value={value} onValueChange={setValue}>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="option1" />
          <Typography variant="body1">Option 1</Typography>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="option2" />
          <Typography variant="body1">Option 2</Typography>
        </div>
        <div className="flex items-center gap-(--lsd-spacing-smaller)">
          <RadioGroupItem value="option3" />
          <Typography variant="body1">Option 3</Typography>
        </div>
      </RadioGroup>
    </div>
  );
}
`;function l(){(0,n.useSendThemeToIframes)();let[e,r]=(0,i.useState)("option1");return(0,a.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,a.jsx)(o.Typography,{variant:"label1",children:"Choose an option"}),(0,a.jsxs)(s.RadioGroup,{value:e,onValueChange:r,children:[(0,a.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-smaller)",children:[(0,a.jsx)(t.RadioGroupItem,{value:"option1"}),(0,a.jsx)(o.Typography,{variant:"body1",children:"Option 1"})]}),(0,a.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-smaller)",children:[(0,a.jsx)(t.RadioGroupItem,{value:"option2"}),(0,a.jsx)(o.Typography,{variant:"body1",children:"Option 2"})]}),(0,a.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-smaller)",children:[(0,a.jsx)(t.RadioGroupItem,{value:"option3"}),(0,a.jsx)(o.Typography,{variant:"body1",children:"Option 3"})]})]})]})}function p(){return(0,a.jsx)(l,{})}e.s(["CODE",0,r,"RadioGroupBasicExample",()=>l,"default",()=>p])}]);
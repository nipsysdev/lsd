(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68869,e=>{"use strict";var t=e.i(86900);function n(){var e;let n;e=e=>{let t=document.documentElement;e.theme&&("dark"===e.theme?t.classList.add("dark"):t.classList.remove("dark")),e.accent&&("monochrome"===e.accent?t.removeAttribute("data-theme"):t.setAttribute("data-theme",e.accent)),e.font&&(t.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?t.classList.add("font-serif"):"sans-serif"===e.font?t.classList.add("font-sans"):"monospace"===e.font&&t.classList.add("font-mono"))},n=t.useRef(e),t.useEffect(()=>{n.current=e},[e]),t.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&n.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>n],68869)},68256,e=>{"use strict";var t=e.i(74702);e.s(["Typography",()=>t.T])},12164,e=>{"use strict";var t=e.i(2582);e.i(82419);var n=e.i(88711),o=e.i(44096),a=e.i(69817),l=e.i(47691),s=e.i(17200),i=e.i(68256),c=e.i(86900),r=e.i(68869);let p=`import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Typography } from '@nipsys/shadcn-lsd';
import { useState } from 'react';

export function Example() {
  const [value, setValue] = useState('option2');

  return (
    <div>
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectContent>
      </Select>
      <Typography variant="body2" className="mt-(--lsd-spacing-smaller)">
        Selected: {value === 'option1' ? 'Option 1' : value === 'option2' ? 'Option 2' : 'Option 3'}
      </Typography>
    </div>
  );
}`;function d(){(0,r.useSendThemeToIframes)();let[e,p]=(0,c.useState)("option2");return(0,t.jsxs)("div",{children:[(0,t.jsxs)(n.Select,{value:e,onValueChange:p,children:[(0,t.jsx)(l.SelectTrigger,{children:(0,t.jsx)(s.SelectValue,{placeholder:"Select an option"})}),(0,t.jsxs)(o.SelectContent,{children:[(0,t.jsx)(a.SelectItem,{value:"option1",children:"Option 1"}),(0,t.jsx)(a.SelectItem,{value:"option2",children:"Option 2"}),(0,t.jsx)(a.SelectItem,{value:"option3",children:"Option 3"})]})]}),(0,t.jsxs)(i.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:["Selected: ","option1"===e?"Option 1":"option2"===e?"Option 2":"Option 3"]})]})}function m(){return(0,t.jsx)(d,{})}e.s(["CODE",0,p,"SelectControlledExample",()=>d,"default",()=>m])}]);
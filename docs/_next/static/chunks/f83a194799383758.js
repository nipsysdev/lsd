(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var t=e.i(75201);function n(){var e;let n;e=e=>{let t=document.documentElement;e.theme&&("dark"===e.theme?t.classList.add("dark"):t.classList.remove("dark")),e.accent&&("monochrome"===e.accent?t.removeAttribute("data-theme"):t.setAttribute("data-theme",e.accent)),e.font&&(t.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?t.classList.add("font-serif"):"sans-serif"===e.font?t.classList.add("font-sans"):"monospace"===e.font&&t.classList.add("font-mono"))},n=t.useRef(e),t.useEffect(()=>{n.current=e},[e]),t.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&n.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>n],45173)},61417,e=>{"use strict";var t=e.i(20607);e.s(["Typography",()=>t.T])},17639,e=>{"use strict";var t=e.i(98134);e.i(26940);var n=e.i(49773),a=e.i(84779),o=e.i(87300),l=e.i(1638),s=e.i(99397),i=e.i(61417),c=e.i(75201),r=e.i(45173);let p=`import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Typography } from '@nipsys/shadcn-lsd';
import { useState } from 'react';

export function Example() {
  const [value, setValue] = useState('option2');

  return (
    <div className="p-(--lsd-spacing-larger)">
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
}`;function d(){(0,r.useSendThemeToIframes)();let[e,p]=(0,c.useState)("option2");return(0,t.jsxs)("div",{className:"p-(--lsd-spacing-larger)",children:[(0,t.jsxs)(n.Select,{value:e,onValueChange:p,children:[(0,t.jsx)(l.SelectTrigger,{children:(0,t.jsx)(s.SelectValue,{placeholder:"Select an option"})}),(0,t.jsxs)(a.SelectContent,{children:[(0,t.jsx)(o.SelectItem,{value:"option1",children:"Option 1"}),(0,t.jsx)(o.SelectItem,{value:"option2",children:"Option 2"}),(0,t.jsx)(o.SelectItem,{value:"option3",children:"Option 3"})]})]}),(0,t.jsxs)(i.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:["Selected: ","option1"===e?"Option 1":"option2"===e?"Option 2":"Option 3"]})]})}function m(){return(0,t.jsx)(d,{})}e.s(["CODE",0,p,"SelectControlledExample",()=>d,"default",()=>m])}]);
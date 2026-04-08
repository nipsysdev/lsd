(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var t=e.i(75201);function l(){var e;let l;e=e=>{let t=document.documentElement;e.theme&&("dark"===e.theme?t.classList.add("dark"):t.classList.remove("dark")),e.accent&&("monochrome"===e.accent?t.removeAttribute("data-theme"):t.setAttribute("data-theme",e.accent)),e.font&&(t.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?t.classList.add("font-serif"):"sans-serif"===e.font?t.classList.add("font-sans"):"monospace"===e.font&&t.classList.add("font-mono"))},l=t.useRef(e),t.useEffect(()=>{l.current=e},[e]),t.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&l.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>l],45173)},82710,e=>{"use strict";var t=e.i(98134);e.i(26940);var l=e.i(49773),c=e.i(84779),a=e.i(15751),r=e.i(87300),n=e.i(19640),i=e.i(97146),s=e.i(1638),o=e.i(99397),S=e.i(75201),d=e.i(45173);let u=`import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@nipsys/shadcn-lsd';
import { useState } from 'react';

export function Example() {
  const [value, setValue] = useState('option2');

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a priority" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="high">🔴 High Priority</SelectItem>
          <SelectItem value="medium">🟡 Medium Priority</SelectItem>
          <SelectItem value="low">🟢 Low Priority</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a plan" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Individual</SelectLabel>
            <SelectItem value="free">Free Plan</SelectItem>
            <SelectItem value="pro">Pro Plan</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Business</SelectLabel>
            <SelectItem value="team">Team Plan</SelectItem>
            <SelectItem value="enterprise" disabled>
              Enterprise (Sold Out)
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select value={value} onValueChange={setValue}>
        <SelectTrigger>
          <SelectValue placeholder="Controlled select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectContent>
      </Select>
      <p className="text-sm text-gray-500">Selected: {value}</p>
    </div>
  );
}`;function m(){(0,d.useSendThemeToIframes)();let[e,u]=(0,S.useState)("option2");return(0,t.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,t.jsxs)(l.Select,{children:[(0,t.jsx)(s.SelectTrigger,{children:(0,t.jsx)(o.SelectValue,{placeholder:"Select a priority"})}),(0,t.jsxs)(c.SelectContent,{children:[(0,t.jsx)(r.SelectItem,{value:"high",children:"🔴 High Priority"}),(0,t.jsx)(r.SelectItem,{value:"medium",children:"🟡 Medium Priority"}),(0,t.jsx)(r.SelectItem,{value:"low",children:"🟢 Low Priority"})]})]}),(0,t.jsxs)(l.Select,{children:[(0,t.jsx)(s.SelectTrigger,{children:(0,t.jsx)(o.SelectValue,{placeholder:"Select a plan"})}),(0,t.jsxs)(c.SelectContent,{children:[(0,t.jsxs)(a.SelectGroup,{children:[(0,t.jsx)(n.SelectLabel,{children:"Individual"}),(0,t.jsx)(r.SelectItem,{value:"free",children:"Free Plan"}),(0,t.jsx)(r.SelectItem,{value:"pro",children:"Pro Plan"})]}),(0,t.jsx)(i.SelectSeparator,{}),(0,t.jsxs)(a.SelectGroup,{children:[(0,t.jsx)(n.SelectLabel,{children:"Business"}),(0,t.jsx)(r.SelectItem,{value:"team",children:"Team Plan"}),(0,t.jsx)(r.SelectItem,{value:"enterprise",disabled:!0,children:"Enterprise (Sold Out)"})]})]})]}),(0,t.jsxs)(l.Select,{value:e,onValueChange:u,children:[(0,t.jsx)(s.SelectTrigger,{children:(0,t.jsx)(o.SelectValue,{placeholder:"Controlled select"})}),(0,t.jsxs)(c.SelectContent,{children:[(0,t.jsx)(r.SelectItem,{value:"option1",children:"Option 1"}),(0,t.jsx)(r.SelectItem,{value:"option2",children:"Option 2"}),(0,t.jsx)(r.SelectItem,{value:"option3",children:"Option 3"})]})]}),(0,t.jsxs)("p",{className:"text-sm text-gray-500",children:["Selected: ",e]})]})}function p(){return(0,t.jsx)(m,{})}e.s(["CODE",0,u,"SelectVariantsExample",()=>m,"default",()=>p])}]);
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var t=e.i(75201);function l(){var e;let l;e=e=>{let t=document.documentElement;e.theme&&("dark"===e.theme?t.classList.add("dark"):t.classList.remove("dark")),e.accent&&("monochrome"===e.accent?t.removeAttribute("data-theme"):t.setAttribute("data-theme",e.accent)),e.font&&(t.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?t.classList.add("font-serif"):"sans-serif"===e.font?t.classList.add("font-sans"):"monospace"===e.font&&t.classList.add("font-mono"))},l=t.useRef(e),t.useEffect(()=>{l.current=e},[e]),t.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&l.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>l],45173)},67258,e=>{"use strict";var t=e.i(98134);e.i(26940);var l=e.i(49773),n=e.i(84779),r=e.i(87300),s=e.i(1638),a=e.i(99397),c=e.i(45173);let i=`import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a plan" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="free">Free Plan</SelectItem>
          <SelectItem value="pro">Pro Plan</SelectItem>
          <SelectItem value="enterprise" disabled>
            Enterprise Plan (Sold Out)
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}`;function o(){return(0,c.useSendThemeToIframes)(),(0,t.jsx)("div",{children:(0,t.jsxs)(l.Select,{children:[(0,t.jsx)(s.SelectTrigger,{children:(0,t.jsx)(a.SelectValue,{placeholder:"Select a plan"})}),(0,t.jsxs)(n.SelectContent,{children:[(0,t.jsx)(r.SelectItem,{value:"free",children:"Free Plan"}),(0,t.jsx)(r.SelectItem,{value:"pro",children:"Pro Plan"}),(0,t.jsx)(r.SelectItem,{value:"enterprise",disabled:!0,children:"Enterprise Plan (Sold Out)"})]})]})})}function d(){return(0,t.jsx)(o,{})}e.s(["CODE",0,i,"SelectDisabledExample",()=>o,"default",()=>d])}]);
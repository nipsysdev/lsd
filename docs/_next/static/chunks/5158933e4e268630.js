(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68869,e=>{"use strict";var t=e.i(86900);function l(){var e;let l;e=e=>{let t=document.documentElement;e.theme&&("dark"===e.theme?t.classList.add("dark"):t.classList.remove("dark")),e.accent&&("monochrome"===e.accent?t.removeAttribute("data-theme"):t.setAttribute("data-theme",e.accent)),e.font&&(t.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?t.classList.add("font-serif"):"sans-serif"===e.font?t.classList.add("font-sans"):"monospace"===e.font&&t.classList.add("font-mono"))},l=t.useRef(e),t.useEffect(()=>{l.current=e},[e]),t.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&l.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>l],68869)},33957,e=>{"use strict";var t=e.i(2582);e.i(82419);var l=e.i(88711),n=e.i(44096),r=e.i(69817),s=e.i(47691),a=e.i(17200),c=e.i(68869);let i=`import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@nipsys/shadcn-lsd';

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
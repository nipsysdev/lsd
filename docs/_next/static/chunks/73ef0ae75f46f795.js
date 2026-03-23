(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68869,e=>{"use strict";var t=e.i(86900);function r(){var e;let r;e=e=>{let t=document.documentElement;e.theme&&("dark"===e.theme?t.classList.add("dark"):t.classList.remove("dark")),e.accent&&("monochrome"===e.accent?t.removeAttribute("data-theme"):t.setAttribute("data-theme",e.accent)),e.font&&(t.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?t.classList.add("font-serif"):"sans-serif"===e.font?t.classList.add("font-sans"):"monospace"===e.font&&t.classList.add("font-mono"))},r=t.useRef(e),t.useEffect(()=>{r.current=e},[e]),t.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&r.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>r],68869)},35737,e=>{"use strict";var t=e.i(2582);e.i(82419);var r=e.i(88711),i=e.i(44096),l=e.i(69817),a=e.i(77238),c=e.i(47691),s=e.i(17200),n=e.i(68869);let o=`import { Select, SelectContent, SelectItem, SelectSeparator, SelectTrigger, SelectValue } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a priority" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="high">High Priority</SelectItem>
          <SelectItem value="medium">Medium Priority</SelectItem>
          <SelectSeparator />
          <SelectItem value="low">Low Priority</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}`;function d(){return(0,n.useSendThemeToIframes)(),(0,t.jsx)("div",{children:(0,t.jsxs)(r.Select,{children:[(0,t.jsx)(c.SelectTrigger,{children:(0,t.jsx)(s.SelectValue,{placeholder:"Select a priority"})}),(0,t.jsxs)(i.SelectContent,{children:[(0,t.jsx)(l.SelectItem,{value:"high",children:"High Priority"}),(0,t.jsx)(l.SelectItem,{value:"medium",children:"Medium Priority"}),(0,t.jsx)(a.SelectSeparator,{}),(0,t.jsx)(l.SelectItem,{value:"low",children:"Low Priority"})]})]})})}function m(){return(0,t.jsx)(d,{})}e.s(["CODE",0,o,"SelectWithSeparatorExample",()=>d,"default",()=>m])}]);
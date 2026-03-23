(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68869,e=>{"use strict";var t=e.i(86900);function a(){var e;let a;e=e=>{let t=document.documentElement;e.theme&&("dark"===e.theme?t.classList.add("dark"):t.classList.remove("dark")),e.accent&&("monochrome"===e.accent?t.removeAttribute("data-theme"):t.setAttribute("data-theme",e.accent)),e.font&&(t.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?t.classList.add("font-serif"):"sans-serif"===e.font?t.classList.add("font-sans"):"monospace"===e.font&&t.classList.add("font-mono"))},a=t.useRef(e),t.useEffect(()=>{a.current=e},[e]),t.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&a.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>a],68869)},88303,e=>{"use strict";var t=e.i(2582);e.i(82419);var a=e.i(88711),n=e.i(44096),l=e.i(69817),c=e.i(47691),r=e.i(17200),s=e.i(68869);let i=`import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
          <SelectItem value="grape">Grape</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}`;function o(){return(0,s.useSendThemeToIframes)(),(0,t.jsx)("div",{children:(0,t.jsxs)(a.Select,{children:[(0,t.jsx)(c.SelectTrigger,{children:(0,t.jsx)(r.SelectValue,{placeholder:"Select a fruit"})}),(0,t.jsxs)(n.SelectContent,{children:[(0,t.jsx)(l.SelectItem,{value:"apple",children:"Apple"}),(0,t.jsx)(l.SelectItem,{value:"banana",children:"Banana"}),(0,t.jsx)(l.SelectItem,{value:"orange",children:"Orange"}),(0,t.jsx)(l.SelectItem,{value:"grape",children:"Grape"})]})]})})}function d(){return(0,t.jsx)(o,{})}e.s(["CODE",0,i,"SelectBasicExample",()=>o,"default",()=>d])}]);
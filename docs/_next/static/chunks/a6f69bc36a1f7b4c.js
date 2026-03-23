(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68869,e=>{"use strict";var t=e.i(86900);function l(){var e;let l;e=e=>{let t=document.documentElement;e.theme&&("dark"===e.theme?t.classList.add("dark"):t.classList.remove("dark")),e.accent&&("monochrome"===e.accent?t.removeAttribute("data-theme"):t.setAttribute("data-theme",e.accent)),e.font&&(t.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?t.classList.add("font-serif"):"sans-serif"===e.font?t.classList.add("font-sans"):"monospace"===e.font&&t.classList.add("font-mono"))},l=t.useRef(e),t.useEffect(()=>{l.current=e},[e]),t.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&l.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>l],68869)},6816,e=>{"use strict";var t=e.i(2582);e.i(82419);var l=e.i(88711),n=e.i(44096),c=e.i(69817),s=e.i(47691),i=e.i(17200),o=e.i(68869);let a=`import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Select>
        <SelectTrigger size="sm">
          <SelectValue placeholder="Small size" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger size="default">
          <SelectValue placeholder="Default size" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}`;function r(){return(0,o.useSendThemeToIframes)(),(0,t.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,t.jsxs)(l.Select,{children:[(0,t.jsx)(s.SelectTrigger,{size:"sm",children:(0,t.jsx)(i.SelectValue,{placeholder:"Small size"})}),(0,t.jsxs)(n.SelectContent,{children:[(0,t.jsx)(c.SelectItem,{value:"option1",children:"Option 1"}),(0,t.jsx)(c.SelectItem,{value:"option2",children:"Option 2"}),(0,t.jsx)(c.SelectItem,{value:"option3",children:"Option 3"})]})]}),(0,t.jsxs)(l.Select,{children:[(0,t.jsx)(s.SelectTrigger,{size:"default",children:(0,t.jsx)(i.SelectValue,{placeholder:"Default size"})}),(0,t.jsxs)(n.SelectContent,{children:[(0,t.jsx)(c.SelectItem,{value:"option1",children:"Option 1"}),(0,t.jsx)(c.SelectItem,{value:"option2",children:"Option 2"}),(0,t.jsx)(c.SelectItem,{value:"option3",children:"Option 3"})]})]})]})}function m(){return(0,t.jsx)(r,{})}e.s(["CODE",0,a,"SelectSizesExample",()=>r,"default",()=>m])}]);
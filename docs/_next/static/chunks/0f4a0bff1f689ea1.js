(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68869,e=>{"use strict";var t=e.i(86900);function l(){var e;let l;e=e=>{let t=document.documentElement;e.theme&&("dark"===e.theme?t.classList.add("dark"):t.classList.remove("dark")),e.accent&&("monochrome"===e.accent?t.removeAttribute("data-theme"):t.setAttribute("data-theme",e.accent)),e.font&&(t.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?t.classList.add("font-serif"):"sans-serif"===e.font?t.classList.add("font-sans"):"monospace"===e.font&&t.classList.add("font-mono"))},l=t.useRef(e),t.useEffect(()=>{l.current=e},[e]),t.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&l.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>l],68869)},31100,e=>{"use strict";var t=e.i(2582);e.i(82419);var l=e.i(88711),c=e.i(44096),a=e.i(93727),r=e.i(69817),n=e.i(20193),s=e.i(77238),o=e.i(47691),i=e.i(17200),S=e.i(68869);let d=`import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a food" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Vegetables</SelectLabel>
            <SelectItem value="carrot">Carrot</SelectItem>
            <SelectItem value="broccoli">Broccoli</SelectItem>
            <SelectItem value="spinach">Spinach</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}`;function u(){return(0,S.useSendThemeToIframes)(),(0,t.jsx)("div",{children:(0,t.jsxs)(l.Select,{children:[(0,t.jsx)(o.SelectTrigger,{children:(0,t.jsx)(i.SelectValue,{placeholder:"Select a food"})}),(0,t.jsxs)(c.SelectContent,{children:[(0,t.jsxs)(a.SelectGroup,{children:[(0,t.jsx)(n.SelectLabel,{children:"Fruits"}),(0,t.jsx)(r.SelectItem,{value:"apple",children:"Apple"}),(0,t.jsx)(r.SelectItem,{value:"banana",children:"Banana"}),(0,t.jsx)(r.SelectItem,{value:"orange",children:"Orange"})]}),(0,t.jsx)(s.SelectSeparator,{}),(0,t.jsxs)(a.SelectGroup,{children:[(0,t.jsx)(n.SelectLabel,{children:"Vegetables"}),(0,t.jsx)(r.SelectItem,{value:"carrot",children:"Carrot"}),(0,t.jsx)(r.SelectItem,{value:"broccoli",children:"Broccoli"}),(0,t.jsx)(r.SelectItem,{value:"spinach",children:"Spinach"})]})]})]})})}function m(){return(0,t.jsx)(u,{})}e.s(["CODE",0,d,"SelectGroupedExample",()=>u,"default",()=>m])}]);
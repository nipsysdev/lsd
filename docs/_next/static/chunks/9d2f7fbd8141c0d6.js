(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var a=e.i(75201);function n(){var e;let n;e=e=>{let a=document.documentElement;e.theme&&("dark"===e.theme?a.classList.add("dark"):a.classList.remove("dark")),e.accent&&("monochrome"===e.accent?a.removeAttribute("data-theme"):a.setAttribute("data-theme",e.accent)),e.font&&(a.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?a.classList.add("font-serif"):"sans-serif"===e.font?a.classList.add("font-sans"):"monospace"===e.font&&a.classList.add("font-mono"))},n=a.useRef(e),a.useEffect(()=>{n.current=e},[e]),a.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&n.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>n],45173)},66597,e=>{"use strict";var a=e.i(98134);e.i(26940);var n=e.i(65961),m=e.i(81687),t=e.i(56996),s=e.i(88766),o=e.i(37508),d=e.i(45173);let r=`import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <Command>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandItem><span>Calendar</span></CommandItem>
        <CommandItem><span>Search Emoji</span></CommandItem>
        <CommandItem><span>Calculator</span></CommandItem>
      </CommandList>
    </Command>
  )
};`;function i(){return(0,d.useSendThemeToIframes)(),(0,a.jsxs)(n.Command,{className:"lsd:border lsd:border-lsd-border",children:[(0,a.jsx)(t.CommandInput,{placeholder:"Type a command or search..."}),(0,a.jsxs)(o.CommandList,{children:[(0,a.jsx)(m.CommandEmpty,{children:"No results found."}),(0,a.jsx)(s.CommandItem,{children:(0,a.jsx)("span",{children:"Calendar"})}),(0,a.jsx)(s.CommandItem,{children:(0,a.jsx)("span",{children:"Search Emoji"})}),(0,a.jsx)(s.CommandItem,{children:(0,a.jsx)("span",{children:"Calculator"})})]})]})}function c(){return(0,a.jsx)(i,{})}e.s(["CODE",0,r,"CommandBasicExample",()=>i,"default",()=>c])}]);
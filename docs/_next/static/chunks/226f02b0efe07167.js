(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,m=>{"use strict";var e=m.i(75201);function n(){var m;let n;m=m=>{let e=document.documentElement;m.theme&&("dark"===m.theme?e.classList.add("dark"):e.classList.remove("dark")),m.accent&&("monochrome"===m.accent?e.removeAttribute("data-theme"):e.setAttribute("data-theme",m.accent)),m.font&&(e.classList.remove("font-serif","font-sans","font-mono"),"serif"===m.font?e.classList.add("font-serif"):"sans-serif"===m.font?e.classList.add("font-sans"):"monospace"===m.font&&e.classList.add("font-mono"))},n=e.useRef(m),e.useEffect(()=>{n.current=m},[m]),e.useEffect(()=>{if(window.self===window.top)return;let m=m=>{"example-params"===m.data.type&&n.current(m.data.data)};return window.addEventListener("message",m),()=>{window.removeEventListener("message",m)}},["example-params"])}m.s(["useSendThemeToIframes",()=>n],45173)},41935,m=>{"use strict";var e=m.i(98134);m.i(26940);var n=m.i(65961),a=m.i(81687),o=m.i(55726),t=m.i(56996),d=m.i(88766),s=m.i(37508),r=m.i(44086),i=m.i(45173);let l=`import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <Command>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search Emoji</CommandItem>
          <CommandItem>Calculator</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>Profile</CommandItem>
          <CommandItem>Billing</CommandItem>
          <CommandItem>Settings</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
};`;function c(){return(0,i.useSendThemeToIframes)(),(0,e.jsxs)(n.Command,{className:"lsd:border lsd:border-lsd-border",children:[(0,e.jsx)(t.CommandInput,{placeholder:"Type a command or search..."}),(0,e.jsxs)(s.CommandList,{children:[(0,e.jsx)(a.CommandEmpty,{children:"No results found."}),(0,e.jsxs)(o.CommandGroup,{heading:"Suggestions",children:[(0,e.jsx)(d.CommandItem,{children:"Calendar"}),(0,e.jsx)(d.CommandItem,{children:"Search Emoji"}),(0,e.jsx)(d.CommandItem,{children:"Calculator"})]}),(0,e.jsx)(r.CommandSeparator,{}),(0,e.jsxs)(o.CommandGroup,{heading:"Settings",children:[(0,e.jsx)(d.CommandItem,{children:"Profile"}),(0,e.jsx)(d.CommandItem,{children:"Billing"}),(0,e.jsx)(d.CommandItem,{children:"Settings"})]})]})]})}function C(){return(0,e.jsx)(c,{})}m.s(["CODE",0,l,"CommandGroupsExample",()=>c,"default",()=>C])}]);
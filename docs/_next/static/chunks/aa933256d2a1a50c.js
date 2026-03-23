(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68869,m=>{"use strict";var e=m.i(86900);function n(){var m;let n;m=m=>{let e=document.documentElement;m.theme&&("dark"===m.theme?e.classList.add("dark"):e.classList.remove("dark")),m.accent&&("monochrome"===m.accent?e.removeAttribute("data-theme"):e.setAttribute("data-theme",m.accent)),m.font&&(e.classList.remove("font-serif","font-sans","font-mono"),"serif"===m.font?e.classList.add("font-serif"):"sans-serif"===m.font?e.classList.add("font-sans"):"monospace"===m.font&&e.classList.add("font-mono"))},n=e.useRef(m),e.useEffect(()=>{n.current=m},[m]),e.useEffect(()=>{if(window.self===window.top)return;let m=m=>{"example-params"===m.data.type&&n.current(m.data.data)};return window.addEventListener("message",m),()=>{window.removeEventListener("message",m)}},["example-params"])}m.s(["useSendThemeToIframes",()=>n],68869)},94271,m=>{"use strict";var e=m.i(2582);m.i(82419);var n=m.i(32163),a=m.i(87143),o=m.i(99071),t=m.i(27668),d=m.i(765),s=m.i(22931),r=m.i(73468),i=m.i(68869);let l=`import {
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
};`;function c(){return(0,i.useSendThemeToIframes)(),(0,e.jsxs)(n.Command,{className:"lsd:rounded-lg lsd:border lsd:border-lsd-border lsd:shadow-md",children:[(0,e.jsx)(t.CommandInput,{placeholder:"Type a command or search..."}),(0,e.jsxs)(s.CommandList,{children:[(0,e.jsx)(a.CommandEmpty,{children:"No results found."}),(0,e.jsxs)(o.CommandGroup,{heading:"Suggestions",children:[(0,e.jsx)(d.CommandItem,{children:"Calendar"}),(0,e.jsx)(d.CommandItem,{children:"Search Emoji"}),(0,e.jsx)(d.CommandItem,{children:"Calculator"})]}),(0,e.jsx)(r.CommandSeparator,{}),(0,e.jsxs)(o.CommandGroup,{heading:"Settings",children:[(0,e.jsx)(d.CommandItem,{children:"Profile"}),(0,e.jsx)(d.CommandItem,{children:"Billing"}),(0,e.jsx)(d.CommandItem,{children:"Settings"})]})]})]})}function C(){return(0,e.jsx)(c,{})}m.s(["CODE",0,l,"CommandGroupsExample",()=>c,"default",()=>C])}]);
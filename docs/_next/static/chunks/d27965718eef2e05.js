(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68869,m=>{"use strict";var n=m.i(86900);function a(){var m;let a;m=m=>{let n=document.documentElement;m.theme&&("dark"===m.theme?n.classList.add("dark"):n.classList.remove("dark")),m.accent&&("monochrome"===m.accent?n.removeAttribute("data-theme"):n.setAttribute("data-theme",m.accent)),m.font&&(n.classList.remove("font-serif","font-sans","font-mono"),"serif"===m.font?n.classList.add("font-serif"):"sans-serif"===m.font?n.classList.add("font-sans"):"monospace"===m.font&&n.classList.add("font-mono"))},a=n.useRef(m),n.useEffect(()=>{a.current=m},[m]),n.useEffect(()=>{if(window.self===window.top)return;let m=m=>{"example-params"===m.data.type&&a.current(m.data.data)};return window.addEventListener("message",m),()=>{window.removeEventListener("message",m)}},["example-params"])}m.s(["useSendThemeToIframes",()=>a],68869)},84799,m=>{"use strict";var n=m.i(2582);m.i(82419);var a=m.i(32163),o=m.i(87143),e=m.i(99071),t=m.i(27668),d=m.i(765),s=m.i(22931),r=m.i(73468),i=m.i(53779),c=m.i(68869);let C=`import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <Command>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <span>Calendar</span>
            <CommandShortcut>⌘K</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Search Emoji</span>
            <CommandShortcut>⌘E</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Calculator</span>
            <CommandShortcut>⌘C</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
};`;function l(){return(0,c.useSendThemeToIframes)(),(0,n.jsxs)(a.Command,{className:"lsd:rounded-lg lsd:border lsd:border-lsd-border lsd:shadow-md",children:[(0,n.jsx)(t.CommandInput,{placeholder:"Type a command or search..."}),(0,n.jsxs)(s.CommandList,{children:[(0,n.jsx)(o.CommandEmpty,{children:"No results found."}),(0,n.jsxs)(e.CommandGroup,{heading:"Suggestions",children:[(0,n.jsxs)(d.CommandItem,{children:[(0,n.jsx)("span",{children:"Calendar"}),(0,n.jsx)(i.CommandShortcut,{children:"⌘K"})]}),(0,n.jsxs)(d.CommandItem,{children:[(0,n.jsx)("span",{children:"Search Emoji"}),(0,n.jsx)(i.CommandShortcut,{children:"⌘E"})]}),(0,n.jsxs)(d.CommandItem,{children:[(0,n.jsx)("span",{children:"Calculator"}),(0,n.jsx)(i.CommandShortcut,{children:"⌘C"})]})]}),(0,n.jsx)(r.CommandSeparator,{}),(0,n.jsxs)(e.CommandGroup,{heading:"Settings",children:[(0,n.jsxs)(d.CommandItem,{children:[(0,n.jsx)("span",{children:"Profile"}),(0,n.jsx)(i.CommandShortcut,{children:"⌘P"})]}),(0,n.jsxs)(d.CommandItem,{children:[(0,n.jsx)("span",{children:"Billing"}),(0,n.jsx)(i.CommandShortcut,{children:"⌘B"})]}),(0,n.jsxs)(d.CommandItem,{children:[(0,n.jsx)("span",{children:"Settings"}),(0,n.jsx)(i.CommandShortcut,{children:"⌘S"})]})]})]})]})}function u(){return(0,n.jsx)(l,{})}m.s(["CODE",0,C,"CommandShortcutsExample",()=>l,"default",()=>u])}]);
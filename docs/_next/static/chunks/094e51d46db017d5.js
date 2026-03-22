(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,n=>{"use strict";var m=n.i(75201);function t(){var n;let t;n=n=>{let m=document.documentElement;n.theme&&("dark"===n.theme?m.classList.add("dark"):m.classList.remove("dark")),n.accent&&("monochrome"===n.accent?m.removeAttribute("data-theme"):m.setAttribute("data-theme",n.accent)),n.font&&(m.classList.remove("font-serif","font-sans","font-mono"),"serif"===n.font?m.classList.add("font-serif"):"sans-serif"===n.font?m.classList.add("font-sans"):"monospace"===n.font&&m.classList.add("font-mono"))},t=m.useRef(n),m.useEffect(()=>{t.current=n},[n]),m.useEffect(()=>{if(window.self===window.top)return;let n=n=>{"example-params"===n.data.type&&t.current(n.data.data)};return window.addEventListener("message",n),()=>{window.removeEventListener("message",n)}},["example-params"])}n.s(["useSendThemeToIframes",()=>t],45173)},22450,n=>{"use strict";var m=n.i(74116);n.s(["Button",()=>m.B])},61683,n=>{"use strict";var m=n.i(98134);n.i(26940);var t=n.i(22450),e=n.i(17778),o=n.i(81687),a=n.i(55726),s=n.i(56996),d=n.i(88766),r=n.i(37508),i=n.i(44086),c=n.i(36124),l=n.i(75201),C=n.i(45173);let u=`import {
  Button,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@nipsys/shadcn-lsd';

export function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Open Command Palette
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen} showCloseButton={false}>
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
      </CommandDialog>
    </>
  )
};`;function h(){let[n,u]=(0,l.useState)(!1);return(0,C.useSendThemeToIframes)(),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(t.Button,{variant:"outlined",onClick:()=>u(!0),children:"Open Command Palette"}),(0,m.jsxs)(e.CommandDialog,{open:n,onOpenChange:u,showCloseButton:!1,children:[(0,m.jsx)(s.CommandInput,{placeholder:"Type a command or search..."}),(0,m.jsxs)(r.CommandList,{children:[(0,m.jsx)(o.CommandEmpty,{children:"No results found."}),(0,m.jsxs)(a.CommandGroup,{heading:"Suggestions",children:[(0,m.jsxs)(d.CommandItem,{children:[(0,m.jsx)("span",{children:"Calendar"}),(0,m.jsx)(c.CommandShortcut,{children:"⌘K"})]}),(0,m.jsxs)(d.CommandItem,{children:[(0,m.jsx)("span",{children:"Search Emoji"}),(0,m.jsx)(c.CommandShortcut,{children:"⌘E"})]}),(0,m.jsxs)(d.CommandItem,{children:[(0,m.jsx)("span",{children:"Calculator"}),(0,m.jsx)(c.CommandShortcut,{children:"⌘C"})]})]}),(0,m.jsx)(i.CommandSeparator,{}),(0,m.jsxs)(a.CommandGroup,{heading:"Settings",children:[(0,m.jsxs)(d.CommandItem,{children:[(0,m.jsx)("span",{children:"Profile"}),(0,m.jsx)(c.CommandShortcut,{children:"⌘P"})]}),(0,m.jsxs)(d.CommandItem,{children:[(0,m.jsx)("span",{children:"Billing"}),(0,m.jsx)(c.CommandShortcut,{children:"⌘B"})]}),(0,m.jsxs)(d.CommandItem,{children:[(0,m.jsx)("span",{children:"Settings"}),(0,m.jsx)(c.CommandShortcut,{children:"⌘S"})]})]})]})]})]})}function p(){return(0,m.jsx)(h,{})}n.s(["CODE",0,u,"CommandDialogExample",()=>h,"default",()=>p])}]);
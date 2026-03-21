(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,n=>{"use strict";var e=n.i(75201);function m(){var n;let m;n=n=>{let e=document.documentElement;n.theme&&("dark"===n.theme?e.classList.add("dark"):e.classList.remove("dark")),n.accent&&("monochrome"===n.accent?e.removeAttribute("data-theme"):e.setAttribute("data-theme",n.accent)),n.font&&(e.classList.remove("font-serif","font-sans","font-mono"),"serif"===n.font?e.classList.add("font-serif"):"sans-serif"===n.font?e.classList.add("font-sans"):"monospace"===n.font&&e.classList.add("font-mono"))},m=e.useRef(n),e.useEffect(()=>{m.current=n},[n]),e.useEffect(()=>{if(window.self===window.top)return;let n=n=>{"example-params"===n.data.type&&m.current(n.data.data)};return window.addEventListener("message",n),()=>{window.removeEventListener("message",n)}},["example-params"])}n.s(["useSendThemeToIframes",()=>m],45173)},22450,n=>{"use strict";var e=n.i(74116);n.s(["Button",()=>e.B])},61683,n=>{"use strict";var e=n.i(98134);n.i(26940);var m=n.i(22450),t=n.i(17778),o=n.i(81687),a=n.i(55726),s=n.i(56996),d=n.i(88766),r=n.i(37508),i=n.i(44086),c=n.i(36124),l=n.i(75201),C=n.i(45173);let u=`import {
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
};`;function h(){let[n,u]=(0,l.useState)(!1);return(0,C.useSendThemeToIframes)(),(0,e.jsxs)("div",{className:"p-(--lsd-spacing-larger)",children:[(0,e.jsx)(m.Button,{variant:"outlined",onClick:()=>u(!0),children:"Open Command Palette"}),(0,e.jsxs)(t.CommandDialog,{open:n,onOpenChange:u,showCloseButton:!1,children:[(0,e.jsx)(s.CommandInput,{placeholder:"Type a command or search..."}),(0,e.jsxs)(r.CommandList,{children:[(0,e.jsx)(o.CommandEmpty,{children:"No results found."}),(0,e.jsxs)(a.CommandGroup,{heading:"Suggestions",children:[(0,e.jsxs)(d.CommandItem,{children:[(0,e.jsx)("span",{children:"Calendar"}),(0,e.jsx)(c.CommandShortcut,{children:"⌘K"})]}),(0,e.jsxs)(d.CommandItem,{children:[(0,e.jsx)("span",{children:"Search Emoji"}),(0,e.jsx)(c.CommandShortcut,{children:"⌘E"})]}),(0,e.jsxs)(d.CommandItem,{children:[(0,e.jsx)("span",{children:"Calculator"}),(0,e.jsx)(c.CommandShortcut,{children:"⌘C"})]})]}),(0,e.jsx)(i.CommandSeparator,{}),(0,e.jsxs)(a.CommandGroup,{heading:"Settings",children:[(0,e.jsxs)(d.CommandItem,{children:[(0,e.jsx)("span",{children:"Profile"}),(0,e.jsx)(c.CommandShortcut,{children:"⌘P"})]}),(0,e.jsxs)(d.CommandItem,{children:[(0,e.jsx)("span",{children:"Billing"}),(0,e.jsx)(c.CommandShortcut,{children:"⌘B"})]}),(0,e.jsxs)(d.CommandItem,{children:[(0,e.jsx)("span",{children:"Settings"}),(0,e.jsx)(c.CommandShortcut,{children:"⌘S"})]})]})]})]})]})}function p(){return(0,e.jsx)(h,{})}n.s(["CODE",0,u,"CommandDialogExample",()=>h,"default",()=>p])}]);
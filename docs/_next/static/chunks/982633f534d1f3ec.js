(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var t=e.i(75201);function r(){var e;let r;e=e=>{let t=document.documentElement;e.theme&&("dark"===e.theme?t.classList.add("dark"):t.classList.remove("dark")),e.accent&&("monochrome"===e.accent?t.removeAttribute("data-theme"):t.setAttribute("data-theme",e.accent)),e.font&&(t.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?t.classList.add("font-serif"):"sans-serif"===e.font?t.classList.add("font-sans"):"monospace"===e.font&&t.classList.add("font-mono"))},r=t.useRef(e),t.useEffect(()=>{r.current=e},[e]),t.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&r.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>r],45173)},96397,e=>{"use strict";var t=e.i(98134);e.i(26940);var r=e.i(45422),n=e.i(62489),a=e.i(9072),s=e.i(78034),u=e.i(53103),o=e.i(72390),i=e.i(45173);let c=`import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
} from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem shortcut="⌘N">New</MenubarItem>
          <MenubarItem shortcut="⌘O">Open</MenubarItem>
          <MenubarItem shortcut="⌘S">Save</MenubarItem>
          <MenubarSeparator />
          <MenubarItem shortcut="⌘P">Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
`;function m(){return(0,i.useSendThemeToIframes)(),(0,t.jsx)(r.Menubar,{children:(0,t.jsxs)(s.MenubarMenu,{children:[(0,t.jsx)(o.MenubarTrigger,{children:"File"}),(0,t.jsxs)(n.MenubarContent,{children:[(0,t.jsx)(a.MenubarItem,{shortcut:"⌘N",children:"New"}),(0,t.jsx)(a.MenubarItem,{shortcut:"⌘O",children:"Open"}),(0,t.jsx)(a.MenubarItem,{shortcut:"⌘S",children:"Save"}),(0,t.jsx)(u.MenubarSeparator,{}),(0,t.jsx)(a.MenubarItem,{shortcut:"⌘P",children:"Print"})]})]})})}function d(){return(0,t.jsx)(m,{})}e.s(["CODE",0,c,"Example",()=>m,"default",()=>d])}]);
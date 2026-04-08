(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var n=e.i(75201);function t(){var e;let t;e=e=>{let n=document.documentElement;e.theme&&("dark"===e.theme?n.classList.add("dark"):n.classList.remove("dark")),e.accent&&("monochrome"===e.accent?n.removeAttribute("data-theme"):n.setAttribute("data-theme",e.accent)),e.font&&(n.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?n.classList.add("font-serif"):"sans-serif"===e.font?n.classList.add("font-sans"):"monospace"===e.font&&n.classList.add("font-mono"))},t=n.useRef(e),n.useEffect(()=>{t.current=e},[e]),n.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&t.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>t],45173)},71559,e=>{"use strict";var n=e.i(98134);e.i(26940);var t=e.i(45422),r=e.i(62489),a=e.i(9072),s=e.i(78034),u=e.i(53103),i=e.i(72390),o=e.i(45173);let m=`import {
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
          <MenubarItem>New</MenubarItem>
          <MenubarItem>Open</MenubarItem>
          <MenubarSeparator />
          <MenubarItem variant="destructive">Delete</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
`;function c(){return(0,o.useSendThemeToIframes)(),(0,n.jsx)(t.Menubar,{children:(0,n.jsxs)(s.MenubarMenu,{children:[(0,n.jsx)(i.MenubarTrigger,{children:"File"}),(0,n.jsxs)(r.MenubarContent,{children:[(0,n.jsx)(a.MenubarItem,{children:"New"}),(0,n.jsx)(a.MenubarItem,{children:"Open"}),(0,n.jsx)(u.MenubarSeparator,{}),(0,n.jsx)(a.MenubarItem,{variant:"destructive",children:"Delete"})]})]})})}function d(){return(0,n.jsx)(c,{})}e.s(["CODE",0,m,"Example",()=>c,"default",()=>d])}]);
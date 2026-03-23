(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68869,e=>{"use strict";var n=e.i(86900);function r(){var e;let r;e=e=>{let n=document.documentElement;e.theme&&("dark"===e.theme?n.classList.add("dark"):n.classList.remove("dark")),e.accent&&("monochrome"===e.accent?n.removeAttribute("data-theme"):n.setAttribute("data-theme",e.accent)),e.font&&(n.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?n.classList.add("font-serif"):"sans-serif"===e.font?n.classList.add("font-sans"):"monospace"===e.font&&n.classList.add("font-mono"))},r=n.useRef(e),n.useEffect(()=>{r.current=e},[e]),n.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&r.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>r],68869)},21054,e=>{"use strict";var n=e.i(2582);e.i(82419);var r=e.i(97779),t=e.i(52687),a=e.i(25377),s=e.i(36371),u=e.i(77842),i=e.i(6266),o=e.i(45541),b=e.i(68869);let c=`import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarSeparator,
} from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>Recent Files</MenubarLabel>
          <MenubarItem>Document 1</MenubarItem>
          <MenubarItem>Document 2</MenubarItem>
          <MenubarSeparator />
          <MenubarLabel>Actions</MenubarLabel>
          <MenubarItem>New</MenubarItem>
          <MenubarItem>Open</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
`;function m(){return(0,b.useSendThemeToIframes)(),(0,n.jsx)(r.Menubar,{children:(0,n.jsxs)(u.MenubarMenu,{children:[(0,n.jsx)(o.MenubarTrigger,{children:"File"}),(0,n.jsxs)(t.MenubarContent,{children:[(0,n.jsx)(s.MenubarLabel,{children:"Recent Files"}),(0,n.jsx)(a.MenubarItem,{children:"Document 1"}),(0,n.jsx)(a.MenubarItem,{children:"Document 2"}),(0,n.jsx)(i.MenubarSeparator,{}),(0,n.jsx)(s.MenubarLabel,{children:"Actions"}),(0,n.jsx)(a.MenubarItem,{children:"New"}),(0,n.jsx)(a.MenubarItem,{children:"Open"})]})]})})}function l(){return(0,n.jsx)(m,{})}e.s(["CODE",0,c,"Example",()=>m,"default",()=>l])}]);
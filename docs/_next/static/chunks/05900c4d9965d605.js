(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68869,e=>{"use strict";var n=e.i(86900);function r(){var e;let r;e=e=>{let n=document.documentElement;e.theme&&("dark"===e.theme?n.classList.add("dark"):n.classList.remove("dark")),e.accent&&("monochrome"===e.accent?n.removeAttribute("data-theme"):n.setAttribute("data-theme",e.accent)),e.font&&(n.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?n.classList.add("font-serif"):"sans-serif"===e.font?n.classList.add("font-sans"):"monospace"===e.font&&n.classList.add("font-mono"))},r=n.useRef(e),n.useEffect(()=>{r.current=e},[e]),n.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&r.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>r],68869)},76713,e=>{"use strict";var n=e.i(2582);e.i(82419);var r=e.i(97779),t=e.i(52687),a=e.i(25377),u=e.i(77842),s=e.i(18370),i=e.i(25107),b=e.i(55852),o=e.i(60916),M=e.i(45541),m=e.i(68869);let c=`import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarPortal,
  MenubarSubContent,
} from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New</MenubarItem>
          <MenubarItem>Open</MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarPortal>
              <MenubarSubContent>
                <MenubarItem>Email</MenubarItem>
                <MenubarItem>Twitter</MenubarItem>
                <MenubarItem>Facebook</MenubarItem>
              </MenubarSubContent>
            </MenubarPortal>
          </MenubarSub>
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
`;function d(){return(0,m.useSendThemeToIframes)(),(0,n.jsx)(r.Menubar,{children:(0,n.jsxs)(u.MenubarMenu,{children:[(0,n.jsx)(M.MenubarTrigger,{children:"File"}),(0,n.jsxs)(t.MenubarContent,{children:[(0,n.jsx)(a.MenubarItem,{children:"New"}),(0,n.jsx)(a.MenubarItem,{children:"Open"}),(0,n.jsxs)(i.MenubarSub,{children:[(0,n.jsx)(o.MenubarSubTrigger,{children:"Share"}),(0,n.jsx)(s.MenubarPortal,{children:(0,n.jsxs)(b.MenubarSubContent,{children:[(0,n.jsx)(a.MenubarItem,{children:"Email"}),(0,n.jsx)(a.MenubarItem,{children:"Twitter"}),(0,n.jsx)(a.MenubarItem,{children:"Facebook"})]})})]}),(0,n.jsx)(a.MenubarItem,{children:"Print"})]})]})})}function l(){return(0,n.jsx)(d,{})}e.s(["CODE",0,c,"Example",()=>d,"default",()=>l])}]);
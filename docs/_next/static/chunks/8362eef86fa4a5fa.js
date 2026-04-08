(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var r=e.i(75201);function n(){var e;let n;e=e=>{let r=document.documentElement;e.theme&&("dark"===e.theme?r.classList.add("dark"):r.classList.remove("dark")),e.accent&&("monochrome"===e.accent?r.removeAttribute("data-theme"):r.setAttribute("data-theme",e.accent)),e.font&&(r.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?r.classList.add("font-serif"):"sans-serif"===e.font?r.classList.add("font-sans"):"monospace"===e.font&&r.classList.add("font-mono"))},n=r.useRef(e),r.useEffect(()=>{n.current=e},[e]),r.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&n.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>n],45173)},90074,e=>{"use strict";var r=e.i(98134);e.i(26940);var n=e.i(71030),a=e.i(73463),s=e.i(2476),t=e.i(52683),i=e.i(59038),l=e.i(6896),u=e.i(75201),c=e.i(85082);let d=new Map([["bold",u.createElement(u.Fragment,null,u.createElement("path",{d:"M200,28H165.47a51.88,51.88,0,0,0-74.94,0H56A20,20,0,0,0,36,48V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V48A20,20,0,0,0,200,28ZM155.71,60H100.29a28,28,0,0,1,55.42,0ZM196,212H60V52H77.41A52.13,52.13,0,0,0,76,64v8A12,12,0,0,0,88,84h80a12,12,0,0,0,12-12V64a52.13,52.13,0,0,0-1.41-12H196Z"}))],["duotone",u.createElement(u.Fragment,null,u.createElement("path",{d:"M208,48V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96a39.83,39.83,0,0,0-8,24v8h80V64a39.83,39.83,0,0,0-8-24h40A8,8,0,0,1,208,48Z",opacity:"0.2"}),u.createElement("path",{d:"M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"}))],["fill",u.createElement(u.Fragment,null,u.createElement("path",{d:"M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Z"}))],["light",u.createElement(u.Fragment,null,u.createElement("path",{d:"M200,34H162.83a45.91,45.91,0,0,0-69.66,0H56A14,14,0,0,0,42,48V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V48A14,14,0,0,0,200,34Zm-72-4a34,34,0,0,1,34,34v2H94V64A34,34,0,0,1,128,30Zm74,186a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H85.67A45.77,45.77,0,0,0,82,64v8a6,6,0,0,0,6,6h80a6,6,0,0,0,6-6V64a45.77,45.77,0,0,0-3.67-18H200a2,2,0,0,1,2,2Z"}))],["regular",u.createElement(u.Fragment,null,u.createElement("path",{d:"M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"}))],["thin",u.createElement(u.Fragment,null,u.createElement("path",{d:"M200,36H161.92a44,44,0,0,0-67.84,0H56A12,12,0,0,0,44,48V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V48A12,12,0,0,0,200,36Zm-72-8a36,36,0,0,1,36,36v4H92V64A36,36,0,0,1,128,28Zm76,188a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H88.83A43.71,43.71,0,0,0,84,64v8a4,4,0,0,0,4,4h80a4,4,0,0,0,4-4V64a43.71,43.71,0,0,0-4.83-20H200a4,4,0,0,1,4,4Z"}))]]),m=u.forwardRef((e,r)=>u.createElement(c.default,{ref:r,...e,weights:d}));m.displayName="ClipboardIcon";let o=new Map([["bold",u.createElement(u.Fragment,null,u.createElement("path",{d:"M71.68,97.22,34.74,128l36.94,30.78a12,12,0,1,1-15.36,18.44l-48-40a12,12,0,0,1,0-18.44l48-40A12,12,0,0,1,71.68,97.22Zm176,21.56-48-40a12,12,0,1,0-15.36,18.44L221.26,128l-36.94,30.78a12,12,0,1,0,15.36,18.44l48-40a12,12,0,0,0,0-18.44ZM164.1,28.72a12,12,0,0,0-15.38,7.18l-64,176a12,12,0,0,0,7.18,15.37A11.79,11.79,0,0,0,96,228a12,12,0,0,0,11.28-7.9l64-176A12,12,0,0,0,164.1,28.72Z"}))],["duotone",u.createElement(u.Fragment,null,u.createElement("path",{d:"M240,128l-48,40H64L16,128,64,88H192Z",opacity:"0.2"}),u.createElement("path",{d:"M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"}))],["fill",u.createElement(u.Fragment,null,u.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM92.8,145.6a8,8,0,1,1-9.6,12.8l-32-24a8,8,0,0,1,0-12.8l32-24a8,8,0,0,1,9.6,12.8L69.33,128Zm58.89-71.4-32,112a8,8,0,1,1-15.38-4.4l32-112a8,8,0,0,1,15.38,4.4Zm53.11,60.2-32,24a8,8,0,0,1-9.6-12.8L186.67,128,163.2,110.4a8,8,0,1,1,9.6-12.8l32,24a8,8,0,0,1,0,12.8Z"}))],["light",u.createElement(u.Fragment,null,u.createElement("path",{d:"M67.84,92.61,25.37,128l42.47,35.39a6,6,0,1,1-7.68,9.22l-48-40a6,6,0,0,1,0-9.22l48-40a6,6,0,0,1,7.68,9.22Zm176,30.78-48-40a6,6,0,1,0-7.68,9.22L230.63,128l-42.47,35.39a6,6,0,1,0,7.68,9.22l48-40a6,6,0,0,0,0-9.22Zm-81.79-89A6,6,0,0,0,154.36,38l-64,176A6,6,0,0,0,94,221.64a6.15,6.15,0,0,0,2,.36,6,6,0,0,0,5.64-3.95l64-176A6,6,0,0,0,162.05,34.36Z"}))],["regular",u.createElement(u.Fragment,null,u.createElement("path",{d:"M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"}))],["thin",u.createElement(u.Fragment,null,u.createElement("path",{d:"M66.56,91.07,22.25,128l44.31,36.93A4,4,0,0,1,64,172a3.94,3.94,0,0,1-2.56-.93l-48-40a4,4,0,0,1,0-6.14l48-40a4,4,0,0,1,5.12,6.14Zm176,33.86-48-40a4,4,0,1,0-5.12,6.14L233.75,128l-44.31,36.93a4,4,0,1,0,5.12,6.14l48-40a4,4,0,0,0,0-6.14ZM161.37,36.24a4,4,0,0,0-5.13,2.39l-64,176a4,4,0,0,0,2.39,5.13A4.12,4.12,0,0,0,96,220a4,4,0,0,0,3.76-2.63l64-176A4,4,0,0,0,161.37,36.24Z"}))]]),b=u.forwardRef((e,r)=>u.createElement(c.default,{ref:r,...e,weights:o}));b.displayName="CodeIcon";var M=e.i(54219);function h({code:e,useAccordion:u=!0}){let c=async()=>{try{await navigator.clipboard.writeText(e),M.toast.success("Code successfully copied to clipboard")}catch(e){M.toast.error("Failed to copy code to clipboard")}},d=(0,r.jsxs)("div",{className:"flex justify-between size-full relative group",children:[(0,r.jsx)(l.Typography,{variant:"subtitle3",className:"my-auto",children:(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"whitespace-break-spaces",children:e})})}),(0,r.jsx)(i.Button,{onClick:c,variant:"outlined",size:"square-md",className:"opacity-0 group-hover:opacity-100 transition-opacity","aria-label":"Copy code",children:(0,r.jsx)(m,{className:"size-4",weight:"duotone"})})]});return u?(0,r.jsx)(n.Accordion,{type:"single",collapsible:!0,children:(0,r.jsxs)(s.AccordionItem,{value:"code",children:[(0,r.jsx)(t.AccordionTrigger,{children:(0,r.jsxs)("div",{className:"flex items-center justify-center gap-x-(--lsd-spacing-base)",children:[(0,r.jsx)(b,{weight:"duotone",className:"size-5"})," View code"]})}),(0,r.jsx)(a.AccordionContent,{children:d})]})}):d}e.s(["CodeExample",()=>h],90074)},10337,e=>{"use strict";var r=e.i(98134);let n=(0,e.i(75201).forwardRef)(({src:e,title:n,size:a="md",className:s,...t},i)=>(0,r.jsx)("iframe",{ref:i,src:e,className:`${{sm:"min-h-[128px]",md:"min-h-[256px]",lg:"min-h-[450px]",xl:"min-h-[600px]"}[a]} w-full overflow-hidden`,title:n,...t}));n.displayName="IframeExample",e.s(["IframeExample",0,n])},71559,e=>{"use strict";var r=e.i(98134);e.i(26940);var n=e.i(45422),a=e.i(62489),s=e.i(9072),t=e.i(78034),i=e.i(53103),l=e.i(72390),u=e.i(45173);let c=`import {
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
`;function d(){return(0,u.useSendThemeToIframes)(),(0,r.jsx)(n.Menubar,{children:(0,r.jsxs)(t.MenubarMenu,{children:[(0,r.jsx)(l.MenubarTrigger,{children:"File"}),(0,r.jsxs)(a.MenubarContent,{children:[(0,r.jsx)(s.MenubarItem,{children:"New"}),(0,r.jsx)(s.MenubarItem,{children:"Open"}),(0,r.jsx)(i.MenubarSeparator,{}),(0,r.jsx)(s.MenubarItem,{variant:"destructive",children:"Delete"})]})]})})}function m(){return(0,r.jsx)(d,{})}e.s(["CODE",0,c,"Example",()=>d,"default",()=>m])},59090,e=>{"use strict";var r=e.i(98134);e.i(26940);var n=e.i(45422),a=e.i(62489),s=e.i(9072),t=e.i(78034),i=e.i(53103),l=e.i(72390),u=e.i(45173);let c=`import {
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
          <MenubarItem inset>Settings</MenubarItem>
          <MenubarItem inset>Preferences</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
`;function d(){return(0,u.useSendThemeToIframes)(),(0,r.jsx)(n.Menubar,{children:(0,r.jsxs)(t.MenubarMenu,{children:[(0,r.jsx)(l.MenubarTrigger,{children:"File"}),(0,r.jsxs)(a.MenubarContent,{children:[(0,r.jsx)(s.MenubarItem,{children:"New"}),(0,r.jsx)(s.MenubarItem,{children:"Open"}),(0,r.jsx)(i.MenubarSeparator,{}),(0,r.jsx)(s.MenubarItem,{inset:!0,children:"Settings"}),(0,r.jsx)(s.MenubarItem,{inset:!0,children:"Preferences"})]})]})})}function m(){return(0,r.jsx)(d,{})}e.s(["CODE",0,c,"Example",()=>d,"default",()=>m])},96397,e=>{"use strict";var r=e.i(98134);e.i(26940);var n=e.i(45422),a=e.i(62489),s=e.i(9072),t=e.i(78034),i=e.i(53103),l=e.i(72390),u=e.i(45173);let c=`import {
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
`;function d(){return(0,u.useSendThemeToIframes)(),(0,r.jsx)(n.Menubar,{children:(0,r.jsxs)(t.MenubarMenu,{children:[(0,r.jsx)(l.MenubarTrigger,{children:"File"}),(0,r.jsxs)(a.MenubarContent,{children:[(0,r.jsx)(s.MenubarItem,{shortcut:"⌘N",children:"New"}),(0,r.jsx)(s.MenubarItem,{shortcut:"⌘O",children:"Open"}),(0,r.jsx)(s.MenubarItem,{shortcut:"⌘S",children:"Save"}),(0,r.jsx)(i.MenubarSeparator,{}),(0,r.jsx)(s.MenubarItem,{shortcut:"⌘P",children:"Print"})]})]})})}function m(){return(0,r.jsx)(d,{})}e.s(["CODE",0,c,"Example",()=>d,"default",()=>m])},22179,e=>{"use strict";var r=e.i(98134);e.i(26940);var n=e.i(45422),a=e.i(62489),s=e.i(9072),t=e.i(27054),i=e.i(78034),l=e.i(53103),u=e.i(72390),c=e.i(45173);let d=`import {
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
`;function m(){return(0,c.useSendThemeToIframes)(),(0,r.jsx)(n.Menubar,{children:(0,r.jsxs)(i.MenubarMenu,{children:[(0,r.jsx)(u.MenubarTrigger,{children:"File"}),(0,r.jsxs)(a.MenubarContent,{children:[(0,r.jsx)(t.MenubarLabel,{children:"Recent Files"}),(0,r.jsx)(s.MenubarItem,{children:"Document 1"}),(0,r.jsx)(s.MenubarItem,{children:"Document 2"}),(0,r.jsx)(l.MenubarSeparator,{}),(0,r.jsx)(t.MenubarLabel,{children:"Actions"}),(0,r.jsx)(s.MenubarItem,{children:"New"}),(0,r.jsx)(s.MenubarItem,{children:"Open"})]})]})})}function o(){return(0,r.jsx)(m,{})}e.s(["CODE",0,d,"Example",()=>m,"default",()=>o])},70663,e=>{"use strict";var r=e.i(98134);e.i(26940);var n=e.i(45422),a=e.i(62489),s=e.i(9072),t=e.i(78034),i=e.i(72390);let l=`import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  Typography,
} from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New</MenubarItem>
            <MenubarItem>Open</MenubarItem>
            <MenubarItem>Save</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Undo</MenubarItem>
            <MenubarItem>Redo</MenubarItem>
            <MenubarItem>Cut</MenubarItem>
            <MenubarItem>Copy</MenubarItem>
            <MenubarItem>Paste</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Zoom In</MenubarItem>
            <MenubarItem>Zoom Out</MenubarItem>
            <MenubarItem>Full Screen</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
  );
}`;function u(){return(0,r.jsx)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:(0,r.jsxs)(n.Menubar,{children:[(0,r.jsxs)(t.MenubarMenu,{children:[(0,r.jsx)(i.MenubarTrigger,{children:"File"}),(0,r.jsxs)(a.MenubarContent,{children:[(0,r.jsx)(s.MenubarItem,{children:"New"}),(0,r.jsx)(s.MenubarItem,{children:"Open"}),(0,r.jsx)(s.MenubarItem,{children:"Save"})]})]}),(0,r.jsxs)(t.MenubarMenu,{children:[(0,r.jsx)(i.MenubarTrigger,{children:"Edit"}),(0,r.jsxs)(a.MenubarContent,{children:[(0,r.jsx)(s.MenubarItem,{children:"Undo"}),(0,r.jsx)(s.MenubarItem,{children:"Redo"}),(0,r.jsx)(s.MenubarItem,{children:"Cut"}),(0,r.jsx)(s.MenubarItem,{children:"Copy"}),(0,r.jsx)(s.MenubarItem,{children:"Paste"})]})]}),(0,r.jsxs)(t.MenubarMenu,{children:[(0,r.jsx)(i.MenubarTrigger,{children:"View"}),(0,r.jsxs)(a.MenubarContent,{children:[(0,r.jsx)(s.MenubarItem,{children:"Zoom In"}),(0,r.jsx)(s.MenubarItem,{children:"Zoom Out"}),(0,r.jsx)(s.MenubarItem,{children:"Full Screen"})]})]})]})})}function c(){return(0,r.jsx)(u,{})}e.s(["CODE",0,l,"MenubarExample",()=>u,"default",()=>c])},51404,e=>{"use strict";var r=e.i(98134);e.i(26940);var n=e.i(45422),a=e.i(62489),s=e.i(9072),t=e.i(78034),i=e.i(25348),l=e.i(41243),u=e.i(44704),c=e.i(8178),d=e.i(72390),m=e.i(45173);let o=`import {
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
`;function b(){return(0,m.useSendThemeToIframes)(),(0,r.jsx)(n.Menubar,{children:(0,r.jsxs)(t.MenubarMenu,{children:[(0,r.jsx)(d.MenubarTrigger,{children:"File"}),(0,r.jsxs)(a.MenubarContent,{children:[(0,r.jsx)(s.MenubarItem,{children:"New"}),(0,r.jsx)(s.MenubarItem,{children:"Open"}),(0,r.jsxs)(l.MenubarSub,{children:[(0,r.jsx)(c.MenubarSubTrigger,{children:"Share"}),(0,r.jsx)(i.MenubarPortal,{children:(0,r.jsxs)(u.MenubarSubContent,{children:[(0,r.jsx)(s.MenubarItem,{children:"Email"}),(0,r.jsx)(s.MenubarItem,{children:"Twitter"}),(0,r.jsx)(s.MenubarItem,{children:"Facebook"})]})})]}),(0,r.jsx)(s.MenubarItem,{children:"Print"})]})]})})}function M(){return(0,r.jsx)(b,{})}e.s(["CODE",0,o,"Example",()=>b,"default",()=>M])},38587,e=>{"use strict";var r=e.i(98134);e.i(26940);var n=e.i(46700),a=e.i(57845),s=e.i(80427),t=e.i(64439),i=e.i(93261),l=e.i(75201),u=e.i(90074),c=e.i(49332),d=e.i(10337),m=e.i(99311),o=e.i(11163),b=e.i(45010),M=e.i(48989),h=e.i(45173),p=e.i(71559),x=e.i(59090),j=e.i(22179),g=e.i(70663),C=e.i(96397),I=e.i(51404);function f(){let e=(0,l.useRef)(null),f=(0,l.useRef)(null),T=(0,l.useRef)(null),E=(0,l.useRef)(null),v=(0,l.useRef)(null),N=(0,l.useRef)(null);return(0,h.useSendThemeToIframes)(),(0,r.jsxs)(c.DocsLayout,{children:[(0,r.jsx)(o.PageHeader,{title:"Menubar",description:"Dropdown menu bar component with keyboard navigation and submenu support"}),(0,r.jsxs)(m.PageContent,{children:[(0,r.jsx)(M.PageSection,{title:"About Menubar",children:(0,r.jsx)("p",{className:"block",children:"Menubars are horizontal navigation menus that display dropdown menus when triggered. They provide a familiar pattern for organizing commands and actions in applications."})}),(0,r.jsxs)(M.PageSection,{title:"Installation",children:[(0,r.jsx)("p",{children:"Import the Menubar components from LSD:"}),(0,r.jsx)(n.Card,{className:"mt-(--lsd-spacing-base)",children:(0,r.jsx)(a.CardContent,{children:(0,r.jsx)(u.CodeExample,{useAccordion:!1,code:`import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from '@nipsys/shadcn-lsd'

export default function MyComponent() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New</MenubarItem>
          <MenubarItem>Open</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}`})})})]}),(0,r.jsxs)(M.PageSection,{title:"Features",children:[(0,r.jsx)("p",{children:"Comprehensive features including submenus, destructive items, labels, separators, and keyboard navigation."}),(0,r.jsxs)(n.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,r.jsxs)(t.CardHeader,{children:[(0,r.jsx)(i.CardTitle,{children:"Basic Menubar"}),(0,r.jsx)(s.CardDescription,{children:"Simple menubar with dropdown menus"})]}),(0,r.jsxs)(a.CardContent,{children:[(0,r.jsx)(d.IframeExample,{ref:e,size:"md",src:"/examples/menubar",title:"Menubar Example"}),(0,r.jsx)(u.CodeExample,{code:g.CODE})]})]}),(0,r.jsxs)(n.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,r.jsxs)(t.CardHeader,{children:[(0,r.jsx)(i.CardTitle,{children:"Submenus"}),(0,r.jsx)(s.CardDescription,{children:"Nested menus for hierarchical organization"})]}),(0,r.jsxs)(a.CardContent,{children:[(0,r.jsx)(d.IframeExample,{ref:f,size:"md",src:"/examples/menubar/submenus",title:"Submenus Example"}),(0,r.jsx)(u.CodeExample,{code:I.CODE})]})]}),(0,r.jsxs)(n.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,r.jsxs)(t.CardHeader,{children:[(0,r.jsx)(i.CardTitle,{children:"Destructive Items"}),(0,r.jsx)(s.CardDescription,{children:"Dangerous actions with destructive styling"})]}),(0,r.jsxs)(a.CardContent,{children:[(0,r.jsx)(d.IframeExample,{ref:T,size:"md",src:"/examples/menubar/destructive",title:"Destructive Items Example"}),(0,r.jsx)(u.CodeExample,{code:p.CODE})]})]}),(0,r.jsxs)(n.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,r.jsxs)(t.CardHeader,{children:[(0,r.jsx)(i.CardTitle,{children:"Labels and Separators"}),(0,r.jsx)(s.CardDescription,{children:"Organize items with labels and visual separators"})]}),(0,r.jsxs)(a.CardContent,{children:[(0,r.jsx)(d.IframeExample,{ref:E,size:"md",src:"/examples/menubar/labels-separators",title:"Labels and Separators Example"}),(0,r.jsx)(u.CodeExample,{code:j.CODE})]})]}),(0,r.jsxs)(n.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,r.jsxs)(t.CardHeader,{children:[(0,r.jsx)(i.CardTitle,{children:"Inset Items"}),(0,r.jsx)(s.CardDescription,{children:"Items with inset padding for visual hierarchy"})]}),(0,r.jsxs)(a.CardContent,{children:[(0,r.jsx)(d.IframeExample,{ref:v,size:"md",src:"/examples/menubar/inset",title:"Inset Items Example"}),(0,r.jsx)(u.CodeExample,{code:x.CODE})]})]}),(0,r.jsxs)(n.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,r.jsxs)(t.CardHeader,{children:[(0,r.jsx)(i.CardTitle,{children:"Keyboard Shortcuts"}),(0,r.jsx)(s.CardDescription,{children:"Display keyboard shortcuts for quick access"})]}),(0,r.jsxs)(a.CardContent,{children:[(0,r.jsx)(d.IframeExample,{ref:N,size:"md",src:"/examples/menubar/shortcuts",title:"Keyboard Shortcuts Example"}),(0,r.jsx)(u.CodeExample,{code:C.CODE})]})]})]}),(0,r.jsxs)(M.PageSection,{title:"API Reference",children:[(0,r.jsx)("p",{children:"All available props for the Menubar components."}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)",children:[(0,r.jsxs)(n.Card,{children:[(0,r.jsxs)(t.CardHeader,{children:[(0,r.jsx)(i.CardTitle,{children:"Menubar"}),(0,r.jsx)(s.CardDescription,{children:"Root menubar container component"})]}),(0,r.jsxs)(a.CardContent,{children:[(0,r.jsxs)("p",{className:"block mb-(--lsd-spacing-smaller)",children:[(0,r.jsx)("strong",{children:"Type:"})," React.ComponentType"]}),(0,r.jsx)("p",{className:"mt-(--lsd-spacing-smaller)",children:"Container for all menubar menus"})]})]}),(0,r.jsxs)(n.Card,{children:[(0,r.jsxs)(t.CardHeader,{children:[(0,r.jsx)(i.CardTitle,{children:"MenubarMenu"}),(0,r.jsx)(s.CardDescription,{children:"Individual menu item in the menubar"})]}),(0,r.jsxs)(a.CardContent,{children:[(0,r.jsxs)("p",{className:"block mb-(--lsd-spacing-smaller)",children:[(0,r.jsx)("strong",{children:"Type:"})," React.ComponentType"]}),(0,r.jsx)("p",{className:"mt-(--lsd-spacing-smaller)",children:"Wraps a trigger and its content"})]})]}),(0,r.jsxs)(n.Card,{children:[(0,r.jsxs)(t.CardHeader,{children:[(0,r.jsx)(i.CardTitle,{children:"MenubarTrigger"}),(0,r.jsx)(s.CardDescription,{children:"Button that opens the menu"})]}),(0,r.jsxs)(a.CardContent,{children:[(0,r.jsxs)("p",{className:"block mb-(--lsd-spacing-smaller)",children:[(0,r.jsx)("strong",{children:"Type:"})," React.ComponentType"]}),(0,r.jsx)("p",{className:"mt-(--lsd-spacing-smaller)",children:"Click to open the dropdown menu"})]})]}),(0,r.jsxs)(n.Card,{children:[(0,r.jsxs)(t.CardHeader,{children:[(0,r.jsx)(i.CardTitle,{children:"MenubarContent"}),(0,r.jsx)(s.CardDescription,{children:"Dropdown menu content container"})]}),(0,r.jsxs)(a.CardContent,{children:[(0,r.jsxs)("p",{className:"block mb-(--lsd-spacing-smaller)",children:[(0,r.jsx)("strong",{children:"Type:"})," React.ComponentType"]}),(0,r.jsxs)("p",{className:"mb-(--lsd-spacing-smaller)",children:[(0,r.jsx)("strong",{children:"Options:"})," align (start, center, end)"]}),(0,r.jsxs)("p",{className:"mb-(--lsd-spacing-smaller)",children:[(0,r.jsx)("strong",{children:"Default:"})," start"]}),(0,r.jsx)("p",{className:"mt-(--lsd-spacing-smaller)",children:"Contains all menu items"})]})]}),(0,r.jsxs)(n.Card,{children:[(0,r.jsxs)(t.CardHeader,{children:[(0,r.jsx)(i.CardTitle,{children:"MenubarItem"}),(0,r.jsx)(s.CardDescription,{children:"Individual menu item"})]}),(0,r.jsxs)(a.CardContent,{children:[(0,r.jsxs)("p",{className:"block mb-(--lsd-spacing-smaller)",children:[(0,r.jsx)("strong",{children:"Type:"})," React.ComponentType"]}),(0,r.jsxs)("p",{className:"mb-(--lsd-spacing-smaller)",children:[(0,r.jsx)("strong",{children:"Options:"})," variant (default, destructive)"]}),(0,r.jsxs)("p",{className:"mb-(--lsd-spacing-smaller)",children:[(0,r.jsx)("strong",{children:"Default:"})," default"]}),(0,r.jsx)("p",{className:"mt-(--lsd-spacing-smaller)",children:"Clickable action item"})]})]}),(0,r.jsxs)(n.Card,{children:[(0,r.jsxs)(t.CardHeader,{children:[(0,r.jsx)(i.CardTitle,{children:"MenubarLabel"}),(0,r.jsx)(s.CardDescription,{children:"Non-interactive label text"})]}),(0,r.jsxs)(a.CardContent,{children:[(0,r.jsxs)("p",{className:"block mb-(--lsd-spacing-smaller)",children:[(0,r.jsx)("strong",{children:"Type:"})," React.ComponentType"]}),(0,r.jsx)("p",{className:"mt-(--lsd-spacing-smaller)",children:"Used to group related items"})]})]}),(0,r.jsxs)(n.Card,{children:[(0,r.jsxs)(t.CardHeader,{children:[(0,r.jsx)(i.CardTitle,{children:"MenubarSeparator"}),(0,r.jsx)(s.CardDescription,{children:"Visual separator line"})]}),(0,r.jsxs)(a.CardContent,{children:[(0,r.jsxs)("p",{className:"block mb-(--lsd-spacing-smaller)",children:[(0,r.jsx)("strong",{children:"Type:"})," React.ComponentType"]}),(0,r.jsx)("p",{className:"mt-(--lsd-spacing-smaller)",children:"Divides menu items visually"})]})]})]})]}),(0,r.jsxs)(M.PageSection,{title:"Accessibility",children:[(0,r.jsx)("p",{children:"The Menubar component follows accessibility best practices."}),(0,r.jsxs)(n.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,r.jsxs)(t.CardHeader,{children:[(0,r.jsx)(i.CardTitle,{children:"Keyboard Navigation"}),(0,r.jsx)(s.CardDescription,{children:"Full keyboard support for all interactions"})]}),(0,r.jsxs)(a.CardContent,{children:[(0,r.jsxs)("p",{className:"block mb-(--lsd-spacing-smaller)",children:["• ",(0,r.jsx)("strong",{children:"Tab"})," - Navigate to the menubar"]}),(0,r.jsxs)("p",{className:"block mb-(--lsd-spacing-smaller)",children:["• ",(0,r.jsx)("strong",{children:"Arrow Keys"})," - Navigate between menu items"]}),(0,r.jsxs)("p",{className:"block mb-(--lsd-spacing-smaller)",children:["• ",(0,r.jsx)("strong",{children:"Enter / Space"})," - Select menu item"]}),(0,r.jsxs)("p",{className:"block mb-(--lsd-spacing-smaller)",children:["• ",(0,r.jsx)("strong",{children:"Escape"})," - Close menu"]}),(0,r.jsxs)("p",{className:"block",children:["• ",(0,r.jsx)("strong",{children:"Shift + Tab"})," - Navigate to previous focusable element"]})]})]})]}),(0,r.jsx)(b.PageNavigation,{previous:{title:"Navigation Menu",href:"/components/navigation-menu"},next:{title:"Sidebar",href:"/components/sidebar"}})]})]})}e.s(["default",()=>f])}]);
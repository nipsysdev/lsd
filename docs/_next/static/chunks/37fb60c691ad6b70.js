(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,70663,e=>{"use strict";var n=e.i(98134);e.i(26940);var r=e.i(45422),u=e.i(62489),a=e.i(9072),M=e.i(78034),t=e.i(72390);let b=`import {
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
}`;function i(){return(0,n.jsx)("div",{className:"flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)",children:(0,n.jsxs)(r.Menubar,{children:[(0,n.jsxs)(M.MenubarMenu,{children:[(0,n.jsx)(t.MenubarTrigger,{children:"File"}),(0,n.jsxs)(u.MenubarContent,{children:[(0,n.jsx)(a.MenubarItem,{children:"New"}),(0,n.jsx)(a.MenubarItem,{children:"Open"}),(0,n.jsx)(a.MenubarItem,{children:"Save"})]})]}),(0,n.jsxs)(M.MenubarMenu,{children:[(0,n.jsx)(t.MenubarTrigger,{children:"Edit"}),(0,n.jsxs)(u.MenubarContent,{children:[(0,n.jsx)(a.MenubarItem,{children:"Undo"}),(0,n.jsx)(a.MenubarItem,{children:"Redo"}),(0,n.jsx)(a.MenubarItem,{children:"Cut"}),(0,n.jsx)(a.MenubarItem,{children:"Copy"}),(0,n.jsx)(a.MenubarItem,{children:"Paste"})]})]}),(0,n.jsxs)(M.MenubarMenu,{children:[(0,n.jsx)(t.MenubarTrigger,{children:"View"}),(0,n.jsxs)(u.MenubarContent,{children:[(0,n.jsx)(a.MenubarItem,{children:"Zoom In"}),(0,n.jsx)(a.MenubarItem,{children:"Zoom Out"}),(0,n.jsx)(a.MenubarItem,{children:"Full Screen"})]})]})]})})}function s(){return(0,n.jsx)(i,{})}e.s(["CODE",0,b,"MenubarExample",()=>i,"default",()=>s])}]);
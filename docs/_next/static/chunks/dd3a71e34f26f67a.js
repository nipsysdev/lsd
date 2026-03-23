(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68869,e=>{"use strict";var l=e.i(86900);function a(){var e;let a;e=e=>{let l=document.documentElement;e.theme&&("dark"===e.theme?l.classList.add("dark"):l.classList.remove("dark")),e.accent&&("monochrome"===e.accent?l.removeAttribute("data-theme"):l.setAttribute("data-theme",e.accent)),e.font&&(l.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?l.classList.add("font-serif"):"sans-serif"===e.font?l.classList.add("font-sans"):"monospace"===e.font&&l.classList.add("font-mono"))},a=l.useRef(e),l.useEffect(()=>{a.current=e},[e]),l.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&a.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>a],68869)},77805,e=>{"use strict";var l=e.i(2582);e.i(82419);var a=e.i(86445),o=e.i(56835),n=e.i(59943),s=e.i(94560),b=e.i(63446),T=e.i(6248),t=e.i(97777),r=e.i(74198),i=e.i(68869);let d=`import {
  Table,
  TableBody,
  TableCaption,
  TableFooter,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <Table>
      <TableCaption>User Accounts</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Admin</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>Developer</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob Johnson</TableCell>
          <TableCell>bob@example.com</TableCell>
          <TableCell>Designer</TableCell>
          <TableCell>Pending</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total: 3 users</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};`;function c(){return(0,i.useSendThemeToIframes)(),(0,l.jsxs)(a.Table,{children:[(0,l.jsx)(n.TableCaption,{children:"User Accounts"}),(0,l.jsx)(t.TableHeader,{children:(0,l.jsxs)(r.TableRow,{children:[(0,l.jsx)(T.TableHead,{children:"Name"}),(0,l.jsx)(T.TableHead,{children:"Email"}),(0,l.jsx)(T.TableHead,{children:"Role"}),(0,l.jsx)(T.TableHead,{children:"Status"})]})}),(0,l.jsxs)(o.TableBody,{children:[(0,l.jsxs)(r.TableRow,{children:[(0,l.jsx)(s.TableCell,{children:"John Doe"}),(0,l.jsx)(s.TableCell,{children:"john@example.com"}),(0,l.jsx)(s.TableCell,{children:"Admin"}),(0,l.jsx)(s.TableCell,{children:"Active"})]}),(0,l.jsxs)(r.TableRow,{children:[(0,l.jsx)(s.TableCell,{children:"Jane Smith"}),(0,l.jsx)(s.TableCell,{children:"jane@example.com"}),(0,l.jsx)(s.TableCell,{children:"Developer"}),(0,l.jsx)(s.TableCell,{children:"Active"})]}),(0,l.jsxs)(r.TableRow,{children:[(0,l.jsx)(s.TableCell,{children:"Bob Johnson"}),(0,l.jsx)(s.TableCell,{children:"bob@example.com"}),(0,l.jsx)(s.TableCell,{children:"Designer"}),(0,l.jsx)(s.TableCell,{children:"Pending"})]})]}),(0,l.jsx)(b.TableFooter,{children:(0,l.jsx)(r.TableRow,{children:(0,l.jsx)(s.TableCell,{colSpan:4,children:"Total: 3 users"})})})]})}function m(){return(0,l.jsx)(c,{})}e.s(["CODE",0,d,"TableWithFooterExample",()=>c,"default",()=>m])}]);
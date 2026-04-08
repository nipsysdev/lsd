(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var l=e.i(75201);function a(){var e;let a;e=e=>{let l=document.documentElement;e.theme&&("dark"===e.theme?l.classList.add("dark"):l.classList.remove("dark")),e.accent&&("monochrome"===e.accent?l.removeAttribute("data-theme"):l.setAttribute("data-theme",e.accent)),e.font&&(l.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?l.classList.add("font-serif"):"sans-serif"===e.font?l.classList.add("font-sans"):"monospace"===e.font&&l.classList.add("font-mono"))},a=l.useRef(e),l.useEffect(()=>{a.current=e},[e]),l.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&a.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>a],45173)},90074,e=>{"use strict";var l=e.i(98134);e.i(26940);var a=e.i(71030),s=e.i(73463),r=e.i(2476),n=e.i(52683),i=e.i(59038),t=e.i(6896),o=e.i(75201),d=e.i(85082);let c=new Map([["bold",o.createElement(o.Fragment,null,o.createElement("path",{d:"M200,28H165.47a51.88,51.88,0,0,0-74.94,0H56A20,20,0,0,0,36,48V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V48A20,20,0,0,0,200,28ZM155.71,60H100.29a28,28,0,0,1,55.42,0ZM196,212H60V52H77.41A52.13,52.13,0,0,0,76,64v8A12,12,0,0,0,88,84h80a12,12,0,0,0,12-12V64a52.13,52.13,0,0,0-1.41-12H196Z"}))],["duotone",o.createElement(o.Fragment,null,o.createElement("path",{d:"M208,48V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96a39.83,39.83,0,0,0-8,24v8h80V64a39.83,39.83,0,0,0-8-24h40A8,8,0,0,1,208,48Z",opacity:"0.2"}),o.createElement("path",{d:"M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"}))],["fill",o.createElement(o.Fragment,null,o.createElement("path",{d:"M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Z"}))],["light",o.createElement(o.Fragment,null,o.createElement("path",{d:"M200,34H162.83a45.91,45.91,0,0,0-69.66,0H56A14,14,0,0,0,42,48V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V48A14,14,0,0,0,200,34Zm-72-4a34,34,0,0,1,34,34v2H94V64A34,34,0,0,1,128,30Zm74,186a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H85.67A45.77,45.77,0,0,0,82,64v8a6,6,0,0,0,6,6h80a6,6,0,0,0,6-6V64a45.77,45.77,0,0,0-3.67-18H200a2,2,0,0,1,2,2Z"}))],["regular",o.createElement(o.Fragment,null,o.createElement("path",{d:"M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"}))],["thin",o.createElement(o.Fragment,null,o.createElement("path",{d:"M200,36H161.92a44,44,0,0,0-67.84,0H56A12,12,0,0,0,44,48V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V48A12,12,0,0,0,200,36Zm-72-8a36,36,0,0,1,36,36v4H92V64A36,36,0,0,1,128,28Zm76,188a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H88.83A43.71,43.71,0,0,0,84,64v8a4,4,0,0,0,4,4h80a4,4,0,0,0,4-4V64a43.71,43.71,0,0,0-4.83-20H200a4,4,0,0,1,4,4Z"}))]]),b=o.forwardRef((e,l)=>o.createElement(d.default,{ref:l,...e,weights:c}));b.displayName="ClipboardIcon";let h=new Map([["bold",o.createElement(o.Fragment,null,o.createElement("path",{d:"M71.68,97.22,34.74,128l36.94,30.78a12,12,0,1,1-15.36,18.44l-48-40a12,12,0,0,1,0-18.44l48-40A12,12,0,0,1,71.68,97.22Zm176,21.56-48-40a12,12,0,1,0-15.36,18.44L221.26,128l-36.94,30.78a12,12,0,1,0,15.36,18.44l48-40a12,12,0,0,0,0-18.44ZM164.1,28.72a12,12,0,0,0-15.38,7.18l-64,176a12,12,0,0,0,7.18,15.37A11.79,11.79,0,0,0,96,228a12,12,0,0,0,11.28-7.9l64-176A12,12,0,0,0,164.1,28.72Z"}))],["duotone",o.createElement(o.Fragment,null,o.createElement("path",{d:"M240,128l-48,40H64L16,128,64,88H192Z",opacity:"0.2"}),o.createElement("path",{d:"M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"}))],["fill",o.createElement(o.Fragment,null,o.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM92.8,145.6a8,8,0,1,1-9.6,12.8l-32-24a8,8,0,0,1,0-12.8l32-24a8,8,0,0,1,9.6,12.8L69.33,128Zm58.89-71.4-32,112a8,8,0,1,1-15.38-4.4l32-112a8,8,0,0,1,15.38,4.4Zm53.11,60.2-32,24a8,8,0,0,1-9.6-12.8L186.67,128,163.2,110.4a8,8,0,1,1,9.6-12.8l32,24a8,8,0,0,1,0,12.8Z"}))],["light",o.createElement(o.Fragment,null,o.createElement("path",{d:"M67.84,92.61,25.37,128l42.47,35.39a6,6,0,1,1-7.68,9.22l-48-40a6,6,0,0,1,0-9.22l48-40a6,6,0,0,1,7.68,9.22Zm176,30.78-48-40a6,6,0,1,0-7.68,9.22L230.63,128l-42.47,35.39a6,6,0,1,0,7.68,9.22l48-40a6,6,0,0,0,0-9.22Zm-81.79-89A6,6,0,0,0,154.36,38l-64,176A6,6,0,0,0,94,221.64a6.15,6.15,0,0,0,2,.36,6,6,0,0,0,5.64-3.95l64-176A6,6,0,0,0,162.05,34.36Z"}))],["regular",o.createElement(o.Fragment,null,o.createElement("path",{d:"M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"}))],["thin",o.createElement(o.Fragment,null,o.createElement("path",{d:"M66.56,91.07,22.25,128l44.31,36.93A4,4,0,0,1,64,172a3.94,3.94,0,0,1-2.56-.93l-48-40a4,4,0,0,1,0-6.14l48-40a4,4,0,0,1,5.12,6.14Zm176,33.86-48-40a4,4,0,1,0-5.12,6.14L233.75,128l-44.31,36.93a4,4,0,1,0,5.12,6.14l48-40a4,4,0,0,0,0-6.14ZM161.37,36.24a4,4,0,0,0-5.13,2.39l-64,176a4,4,0,0,0,2.39,5.13A4.12,4.12,0,0,0,96,220a4,4,0,0,0,3.76-2.63l64-176A4,4,0,0,0,161.37,36.24Z"}))]]),T=o.forwardRef((e,l)=>o.createElement(d.default,{ref:l,...e,weights:h}));T.displayName="CodeIcon";var m=e.i(54219);function p({code:e,useAccordion:o=!0}){let d=async()=>{try{await navigator.clipboard.writeText(e),m.toast.success("Code successfully copied to clipboard")}catch(e){m.toast.error("Failed to copy code to clipboard")}},c=(0,l.jsxs)("div",{className:"flex justify-between size-full relative group",children:[(0,l.jsx)(t.Typography,{variant:"subtitle3",className:"my-auto",children:(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"whitespace-break-spaces",children:e})})}),(0,l.jsx)(i.Button,{onClick:d,variant:"outlined",size:"square-md",className:"opacity-0 group-hover:opacity-100 transition-opacity","aria-label":"Copy code",children:(0,l.jsx)(b,{className:"size-4",weight:"duotone"})})]});return o?(0,l.jsx)(a.Accordion,{type:"single",collapsible:!0,children:(0,l.jsxs)(r.AccordionItem,{value:"code",children:[(0,l.jsx)(n.AccordionTrigger,{children:(0,l.jsxs)("div",{className:"flex items-center justify-center gap-x-(--lsd-spacing-base)",children:[(0,l.jsx)(T,{weight:"duotone",className:"size-5"})," View code"]})}),(0,l.jsx)(s.AccordionContent,{children:c})]})}):c}e.s(["CodeExample",()=>p],90074)},10337,e=>{"use strict";var l=e.i(98134);let a=(0,e.i(75201).forwardRef)(({src:e,title:a,size:s="md",className:r,...n},i)=>(0,l.jsx)("iframe",{ref:i,src:e,className:`${{sm:"min-h-[128px]",md:"min-h-[256px]",lg:"min-h-[450px]",xl:"min-h-[600px]"}[s]} w-full overflow-hidden`,title:a,...n}));a.displayName="IframeExample",e.s(["IframeExample",0,a])},24126,e=>{"use strict";var l=e.i(98134);e.i(26940);var a=e.i(19514),s=e.i(88518),r=e.i(331),n=e.i(26906),i=e.i(67993),t=e.i(57753),o=e.i(45173);let d=`import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <Table>
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
    </Table>
  );
};`;function c(){return(0,o.useSendThemeToIframes)(),(0,l.jsxs)(a.Table,{children:[(0,l.jsx)(i.TableHeader,{children:(0,l.jsxs)(t.TableRow,{children:[(0,l.jsx)(n.TableHead,{children:"Name"}),(0,l.jsx)(n.TableHead,{children:"Email"}),(0,l.jsx)(n.TableHead,{children:"Role"}),(0,l.jsx)(n.TableHead,{children:"Status"})]})}),(0,l.jsxs)(s.TableBody,{children:[(0,l.jsxs)(t.TableRow,{children:[(0,l.jsx)(r.TableCell,{children:"John Doe"}),(0,l.jsx)(r.TableCell,{children:"john@example.com"}),(0,l.jsx)(r.TableCell,{children:"Admin"}),(0,l.jsx)(r.TableCell,{children:"Active"})]}),(0,l.jsxs)(t.TableRow,{children:[(0,l.jsx)(r.TableCell,{children:"Jane Smith"}),(0,l.jsx)(r.TableCell,{children:"jane@example.com"}),(0,l.jsx)(r.TableCell,{children:"Developer"}),(0,l.jsx)(r.TableCell,{children:"Active"})]}),(0,l.jsxs)(t.TableRow,{children:[(0,l.jsx)(r.TableCell,{children:"Bob Johnson"}),(0,l.jsx)(r.TableCell,{children:"bob@example.com"}),(0,l.jsx)(r.TableCell,{children:"Designer"}),(0,l.jsx)(r.TableCell,{children:"Pending"})]})]})]})}function b(){return(0,l.jsx)(c,{})}e.s(["CODE",0,d,"TableBasicExample",()=>c,"default",()=>b])},36855,e=>{"use strict";var l=e.i(98134);e.i(26940);var a=e.i(19514),s=e.i(88518),r=e.i(30226),n=e.i(331),i=e.i(26906),t=e.i(67993),o=e.i(57753),d=e.i(45173);let c=`import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <Table>
      <TableCaption>Sales Data - Q4 2024</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Month</TableHead>
          <TableHead>Sales</TableHead>
          <TableHead>Growth</TableHead>
          <TableHead>Target</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>October</TableCell>
          <TableCell>$45,000</TableCell>
          <TableCell>+12%</TableCell>
          <TableCell>$50,000</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>November</TableCell>
          <TableCell>$52,000</TableCell>
          <TableCell>+15%</TableCell>
          <TableCell>$50,000</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>December</TableCell>
          <TableCell>$58,000</TableCell>
          <TableCell>+11%</TableCell>
          <TableCell>$55,000</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};`;function b(){return(0,d.useSendThemeToIframes)(),(0,l.jsxs)(a.Table,{children:[(0,l.jsx)(r.TableCaption,{children:"Sales Data - Q4 2024"}),(0,l.jsx)(t.TableHeader,{children:(0,l.jsxs)(o.TableRow,{children:[(0,l.jsx)(i.TableHead,{children:"Month"}),(0,l.jsx)(i.TableHead,{children:"Sales"}),(0,l.jsx)(i.TableHead,{children:"Growth"}),(0,l.jsx)(i.TableHead,{children:"Target"})]})}),(0,l.jsxs)(s.TableBody,{children:[(0,l.jsxs)(o.TableRow,{children:[(0,l.jsx)(n.TableCell,{children:"October"}),(0,l.jsx)(n.TableCell,{children:"$45,000"}),(0,l.jsx)(n.TableCell,{children:"+12%"}),(0,l.jsx)(n.TableCell,{children:"$50,000"})]}),(0,l.jsxs)(o.TableRow,{children:[(0,l.jsx)(n.TableCell,{children:"November"}),(0,l.jsx)(n.TableCell,{children:"$52,000"}),(0,l.jsx)(n.TableCell,{children:"+15%"}),(0,l.jsx)(n.TableCell,{children:"$50,000"})]}),(0,l.jsxs)(o.TableRow,{children:[(0,l.jsx)(n.TableCell,{children:"December"}),(0,l.jsx)(n.TableCell,{children:"$58,000"}),(0,l.jsx)(n.TableCell,{children:"+11%"}),(0,l.jsx)(n.TableCell,{children:"$55,000"})]})]})]})}function h(){return(0,l.jsx)(b,{})}e.s(["CODE",0,c,"TableWithCaptionExample",()=>b,"default",()=>h])},38912,e=>{"use strict";var l=e.i(98134);e.i(26940);var a=e.i(19514),s=e.i(88518),r=e.i(331),n=e.i(26906),i=e.i(67993),t=e.i(57753),o=e.i(45173);let d=`import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="hover:bg-muted/20">
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Admin</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow className="hover:bg-muted/20">
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>Developer</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow className="hover:bg-muted/20">
          <TableCell>Bob Johnson</TableCell>
          <TableCell>bob@example.com</TableCell>
          <TableCell>Designer</TableCell>
          <TableCell>Pending</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};`;function c(){return(0,o.useSendThemeToIframes)(),(0,l.jsxs)(a.Table,{children:[(0,l.jsx)(i.TableHeader,{children:(0,l.jsxs)(t.TableRow,{children:[(0,l.jsx)(n.TableHead,{children:"Name"}),(0,l.jsx)(n.TableHead,{children:"Email"}),(0,l.jsx)(n.TableHead,{children:"Role"}),(0,l.jsx)(n.TableHead,{children:"Status"})]})}),(0,l.jsxs)(s.TableBody,{children:[(0,l.jsxs)(t.TableRow,{className:"hover:bg-muted/20",children:[(0,l.jsx)(r.TableCell,{children:"John Doe"}),(0,l.jsx)(r.TableCell,{children:"john@example.com"}),(0,l.jsx)(r.TableCell,{children:"Admin"}),(0,l.jsx)(r.TableCell,{children:"Active"})]}),(0,l.jsxs)(t.TableRow,{className:"hover:bg-muted/20",children:[(0,l.jsx)(r.TableCell,{children:"Jane Smith"}),(0,l.jsx)(r.TableCell,{children:"jane@example.com"}),(0,l.jsx)(r.TableCell,{children:"Developer"}),(0,l.jsx)(r.TableCell,{children:"Active"})]}),(0,l.jsxs)(t.TableRow,{className:"hover:bg-muted/20",children:[(0,l.jsx)(r.TableCell,{children:"Bob Johnson"}),(0,l.jsx)(r.TableCell,{children:"bob@example.com"}),(0,l.jsx)(r.TableCell,{children:"Designer"}),(0,l.jsx)(r.TableCell,{children:"Pending"})]})]})]})}function b(){return(0,l.jsx)(c,{})}e.s(["CODE",0,d,"TableStripedExample",()=>c,"default",()=>b])},57276,e=>{"use strict";var l=e.i(98134);e.i(26940);var a=e.i(19514),s=e.i(88518),r=e.i(30226),n=e.i(331),i=e.i(77986),t=e.i(26906),o=e.i(67993),d=e.i(57753),c=e.i(45173);let b=`import {
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
};`;function h(){return(0,c.useSendThemeToIframes)(),(0,l.jsxs)(a.Table,{children:[(0,l.jsx)(r.TableCaption,{children:"User Accounts"}),(0,l.jsx)(o.TableHeader,{children:(0,l.jsxs)(d.TableRow,{children:[(0,l.jsx)(t.TableHead,{children:"Name"}),(0,l.jsx)(t.TableHead,{children:"Email"}),(0,l.jsx)(t.TableHead,{children:"Role"}),(0,l.jsx)(t.TableHead,{children:"Status"})]})}),(0,l.jsxs)(s.TableBody,{children:[(0,l.jsxs)(d.TableRow,{children:[(0,l.jsx)(n.TableCell,{children:"John Doe"}),(0,l.jsx)(n.TableCell,{children:"john@example.com"}),(0,l.jsx)(n.TableCell,{children:"Admin"}),(0,l.jsx)(n.TableCell,{children:"Active"})]}),(0,l.jsxs)(d.TableRow,{children:[(0,l.jsx)(n.TableCell,{children:"Jane Smith"}),(0,l.jsx)(n.TableCell,{children:"jane@example.com"}),(0,l.jsx)(n.TableCell,{children:"Developer"}),(0,l.jsx)(n.TableCell,{children:"Active"})]}),(0,l.jsxs)(d.TableRow,{children:[(0,l.jsx)(n.TableCell,{children:"Bob Johnson"}),(0,l.jsx)(n.TableCell,{children:"bob@example.com"}),(0,l.jsx)(n.TableCell,{children:"Designer"}),(0,l.jsx)(n.TableCell,{children:"Pending"})]})]}),(0,l.jsx)(i.TableFooter,{children:(0,l.jsx)(d.TableRow,{children:(0,l.jsx)(n.TableCell,{colSpan:4,children:"Total: 3 users"})})})]})}function T(){return(0,l.jsx)(h,{})}e.s(["CODE",0,b,"TableWithFooterExample",()=>h,"default",()=>T])},17534,e=>{"use strict";var l=e.i(98134);e.i(26940);var a=e.i(46700),s=e.i(57845),r=e.i(80427),n=e.i(64439),i=e.i(93261),t=e.i(6896),o=e.i(75201),d=e.i(90074),c=e.i(49332),b=e.i(10337),h=e.i(99311),T=e.i(11163),m=e.i(45010),p=e.i(48989),x=e.i(45173),j=e.i(24126),C=e.i(38912),g=e.i(36855),y=e.i(57276);function u(){let e=(0,o.useRef)(null),u=(0,o.useRef)(null),f=(0,o.useRef)(null),v=(0,o.useRef)(null);return(0,x.useSendThemeToIframes)(),(0,l.jsxs)(c.DocsLayout,{children:[(0,l.jsx)(T.PageHeader,{title:"Table",description:"A structured component for displaying and organizing tabular data with consistent styling and accessibility."}),(0,l.jsxs)(h.PageContent,{children:[(0,l.jsx)(p.PageSection,{title:"About Table",children:(0,l.jsx)(t.Typography,{variant:"body1",className:"block",children:"The Table component provides a structured way to display tabular data with consistent styling and accessibility. It's composed of several subcomponents that work together to create tables with headers, bodies, footers, captions, and proper cell formatting. Tables are ideal for displaying data in rows and columns, such as user lists, financial data, or any information that benefits from a structured layout."})}),(0,l.jsxs)(p.PageSection,{title:"Installation",children:[(0,l.jsx)(t.Typography,{variant:"body1",children:"Import the Table components from LSD:"}),(0,l.jsx)(a.Card,{className:"mt-(--lsd-spacing-base)",children:(0,l.jsx)(s.CardContent,{children:(0,l.jsx)(d.CodeExample,{useAccordion:!1,code:`import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@nipsys/shadcn-lsd'`})})})]}),(0,l.jsxs)(p.PageSection,{title:"Structure",children:[(0,l.jsx)(t.Typography,{variant:"body1",className:"mb-(--lsd-spacing-base)",children:"A Table component is composed of the following parts:"}),(0,l.jsxs)(t.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:["• ",(0,l.jsx)("strong",{children:"Table"})," - The root container with horizontal scroll support"]}),(0,l.jsxs)(t.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:["• ",(0,l.jsx)("strong",{children:"TableHeader"})," - Container for the header row(s)"]}),(0,l.jsxs)(t.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:["• ",(0,l.jsx)("strong",{children:"TableBody"})," - Container for the data rows"]}),(0,l.jsxs)(t.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:["• ",(0,l.jsx)("strong",{children:"TableFooter"})," - Container for footer rows with summary information"]}),(0,l.jsxs)(t.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:["• ",(0,l.jsx)("strong",{children:"TableRow"})," - Individual table rows with hover states"]}),(0,l.jsxs)(t.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:["• ",(0,l.jsx)("strong",{children:"TableHead"})," - Header cells with styling for column titles"]}),(0,l.jsxs)(t.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:["• ",(0,l.jsx)("strong",{children:"TableCell"})," - Data cells with proper alignment and padding"]}),(0,l.jsxs)(t.Typography,{variant:"body2",className:"block",children:["• ",(0,l.jsx)("strong",{children:"TableCaption"})," - Optional caption for describing the table"]})]}),(0,l.jsxs)(p.PageSection,{title:"Usage",children:[(0,l.jsx)(t.Typography,{variant:"body1",children:"Basic usage of the Table component with header and body sections."}),(0,l.jsxs)(a.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,l.jsxs)(n.CardHeader,{children:[(0,l.jsx)(i.CardTitle,{children:"Basic Table"}),(0,l.jsx)(r.CardDescription,{children:"A simple table with header rows and data rows."})]}),(0,l.jsxs)(s.CardContent,{children:[(0,l.jsx)(b.IframeExample,{ref:e,size:"md",src:"/examples/table/basic",title:"Table Basic Example"}),(0,l.jsx)(d.CodeExample,{code:j.CODE})]})]})]}),(0,l.jsxs)(p.PageSection,{title:"Variants",children:[(0,l.jsx)(t.Typography,{variant:"body1",className:"mb-(--lsd-spacing-base)",children:"The Table component supports several variants and customizations."}),(0,l.jsxs)(a.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,l.jsxs)(n.CardHeader,{children:[(0,l.jsx)(i.CardTitle,{children:"Striped Rows"}),(0,l.jsx)(r.CardDescription,{children:"Add custom styling to create striped or alternating row patterns."})]}),(0,l.jsxs)(s.CardContent,{children:[(0,l.jsx)(b.IframeExample,{ref:u,size:"md",src:"/examples/table/striped",title:"Table Striped Example"}),(0,l.jsx)(d.CodeExample,{code:C.CODE})]})]}),(0,l.jsxs)(a.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,l.jsxs)(n.CardHeader,{children:[(0,l.jsx)(i.CardTitle,{children:"With Footer"}),(0,l.jsx)(r.CardDescription,{children:"Add a footer section for summary information or totals."})]}),(0,l.jsxs)(s.CardContent,{children:[(0,l.jsx)(b.IframeExample,{ref:f,size:"md",src:"/examples/table/with-footer",title:"Table With Footer Example"}),(0,l.jsx)(d.CodeExample,{code:y.CODE})]})]}),(0,l.jsxs)(a.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,l.jsxs)(n.CardHeader,{children:[(0,l.jsx)(i.CardTitle,{children:"With Caption"}),(0,l.jsx)(r.CardDescription,{children:"Add a caption to provide context or description for the table."})]}),(0,l.jsxs)(s.CardContent,{children:[(0,l.jsx)(b.IframeExample,{ref:v,size:"md",src:"/examples/table/with-caption",title:"Table With Caption Example"}),(0,l.jsx)(d.CodeExample,{code:g.CODE})]})]})]}),(0,l.jsxs)(p.PageSection,{title:"API Reference",children:[(0,l.jsx)(t.Typography,{variant:"body1",className:"mb-(--lsd-spacing-base)",children:"Table component props and configuration options."}),(0,l.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)",children:[(0,l.jsxs)(a.Card,{children:[(0,l.jsxs)(n.CardHeader,{children:[(0,l.jsx)(i.CardTitle,{children:"Table"}),(0,l.jsx)(r.CardDescription,{children:"The root container"})]}),(0,l.jsxs)(s.CardContent,{children:[(0,l.jsxs)(t.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,l.jsx)("strong",{children:"Type:"})," React.ComponentProps<'table'>"]}),(0,l.jsxs)(t.Typography,{variant:"label1",className:"block",children:[(0,l.jsx)("strong",{children:"Default:"})," relative, w-full, overflow-x-auto"]}),(0,l.jsx)(t.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:"Wraps the table in a container with horizontal scroll support. Uses LSD design system classes for proper spacing and overflow handling."})]})]}),(0,l.jsxs)(a.Card,{children:[(0,l.jsxs)(n.CardHeader,{children:[(0,l.jsx)(i.CardTitle,{children:"TableHeader"}),(0,l.jsx)(r.CardDescription,{children:"Container for header row(s)"})]}),(0,l.jsxs)(s.CardContent,{children:[(0,l.jsxs)(t.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,l.jsx)("strong",{children:"Type:"})," React.ComponentProps<'thead'>"]}),(0,l.jsxs)(t.Typography,{variant:"label1",className:"block",children:[(0,l.jsx)("strong",{children:"Default:"})," border-bottom on rows"]}),(0,l.jsx)(t.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:"Provides a container for table header rows with consistent border styling."})]})]}),(0,l.jsxs)(a.Card,{children:[(0,l.jsxs)(n.CardHeader,{children:[(0,l.jsx)(i.CardTitle,{children:"TableBody"}),(0,l.jsx)(r.CardDescription,{children:"Container for data rows"})]}),(0,l.jsxs)(s.CardContent,{children:[(0,l.jsxs)(t.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,l.jsx)("strong",{children:"Type:"})," React.ComponentProps<'tbody'>"]}),(0,l.jsxs)(t.Typography,{variant:"label1",className:"block",children:[(0,l.jsx)("strong",{children:"Default:"})," no border on last row"]}),(0,l.jsx)(t.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:"Container for table body rows with proper spacing and border handling."})]})]}),(0,l.jsxs)(a.Card,{children:[(0,l.jsxs)(n.CardHeader,{children:[(0,l.jsx)(i.CardTitle,{children:"TableFooter"}),(0,l.jsx)(r.CardDescription,{children:"Container for footer rows"})]}),(0,l.jsxs)(s.CardContent,{children:[(0,l.jsxs)(t.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,l.jsx)("strong",{children:"Type:"})," React.ComponentProps<'tfoot'>"]}),(0,l.jsxs)(t.Typography,{variant:"label1",className:"block",children:[(0,l.jsx)("strong",{children:"Default:"})," border-top, muted background, font-medium"]}),(0,l.jsx)(t.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:"Provides a footer section with appropriate styling for summary information."})]})]}),(0,l.jsxs)(a.Card,{children:[(0,l.jsxs)(n.CardHeader,{children:[(0,l.jsx)(i.CardTitle,{children:"TableRow"}),(0,l.jsx)(r.CardDescription,{children:"Individual table rows"})]}),(0,l.jsxs)(s.CardContent,{children:[(0,l.jsxs)(t.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,l.jsx)("strong",{children:"Type:"})," React.ComponentProps<'tr'>"]}),(0,l.jsxs)(t.Typography,{variant:"label1",className:"block",children:[(0,l.jsx)("strong",{children:"Default:"})," border-bottom, hover effects"]}),(0,l.jsxs)(t.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:["Individual rows with borders and hover states. Supports"," data-[state=selected]"," for selection styling."]})]})]}),(0,l.jsxs)(a.Card,{children:[(0,l.jsxs)(n.CardHeader,{children:[(0,l.jsx)(i.CardTitle,{children:"TableHead"}),(0,l.jsx)(r.CardDescription,{children:"Header cells"})]}),(0,l.jsxs)(s.CardContent,{children:[(0,l.jsxs)(t.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,l.jsx)("strong",{children:"Type:"})," React.ComponentProps<'th'>"]}),(0,l.jsxs)(t.Typography,{variant:"label1",className:"block",children:[(0,l.jsx)("strong",{children:"Default:"})," h-10, px-small, font-medium, text-left"]}),(0,l.jsx)(t.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:"Header cells with proper padding, alignment, and typography using LSD design system tokens."})]})]}),(0,l.jsxs)(a.Card,{children:[(0,l.jsxs)(n.CardHeader,{children:[(0,l.jsx)(i.CardTitle,{children:"TableCell"}),(0,l.jsx)(r.CardDescription,{children:"Data cells"})]}),(0,l.jsxs)(s.CardContent,{children:[(0,l.jsxs)(t.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,l.jsx)("strong",{children:"Type:"})," React.ComponentProps<'td'>"]}),(0,l.jsxs)(t.Typography,{variant:"label1",className:"block",children:[(0,l.jsx)("strong",{children:"Default:"})," p-small, align-middle"]}),(0,l.jsx)(t.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:"Data cells with proper padding and alignment using LSD spacing tokens."})]})]}),(0,l.jsxs)(a.Card,{children:[(0,l.jsxs)(n.CardHeader,{children:[(0,l.jsx)(i.CardTitle,{children:"TableCaption"}),(0,l.jsx)(r.CardDescription,{children:"Optional caption"})]}),(0,l.jsxs)(s.CardContent,{children:[(0,l.jsxs)(t.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,l.jsx)("strong",{children:"Type:"})," React.ComponentProps<'caption'>"]}),(0,l.jsxs)(t.Typography,{variant:"label1",className:"block",children:[(0,l.jsx)("strong",{children:"Default:"})," mt-4, text-sm, text-secondary"]}),(0,l.jsx)(t.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:"Optional caption with secondary text color for describing table contents."})]})]})]})]}),(0,l.jsxs)(p.PageSection,{title:"Accessibility",children:[(0,l.jsx)(t.Typography,{variant:"body1",className:"mb-(--lsd-spacing-base)",children:"The Table component follows accessibility best practices and is fully accessible to keyboard and screen reader users."}),(0,l.jsxs)(a.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,l.jsxs)(n.CardHeader,{children:[(0,l.jsx)(i.CardTitle,{children:"Keyboard Navigation"}),(0,l.jsx)(r.CardDescription,{children:"Keyboard shortcuts for table interaction"})]}),(0,l.jsxs)(s.CardContent,{children:[(0,l.jsxs)(t.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:["• ",(0,l.jsx)("strong",{children:"Tab"})," - Navigate through tabular data cells from left to right, top to bottom"]}),(0,l.jsxs)(t.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:["• ",(0,l.jsx)("strong",{children:"Shift + Tab"})," - Navigate in reverse order"]}),(0,l.jsxs)(t.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:["• ",(0,l.jsx)("strong",{children:"Arrow Keys"})," - Navigate within table cells (when focused)"]}),(0,l.jsxs)(t.Typography,{variant:"body2",className:"block",children:["• ",(0,l.jsx)("strong",{children:"Enter"})," - Activate interactive elements within cells"]})]})]}),(0,l.jsxs)(a.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,l.jsxs)(n.CardHeader,{children:[(0,l.jsx)(i.CardTitle,{children:"ARIA Attributes"}),(0,l.jsx)(r.CardDescription,{children:"Proper ARIA support for screen readers"})]}),(0,l.jsxs)(s.CardContent,{children:[(0,l.jsxs)(t.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:["• Use ",(0,l.jsx)("code",{children:"caption"})," or ",(0,l.jsx)("code",{children:"aria-label"})," for table descriptions"]}),(0,l.jsxs)(t.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:["• Sortable columns should use ",(0,l.jsx)("code",{children:"aria-sort"})," attribute"]}),(0,l.jsxs)(t.Typography,{variant:"body2",className:"block",children:["• Use ",(0,l.jsx)("code",{children:"aria-live"})," for dynamically updated table content"]})]})]}),(0,l.jsxs)(a.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,l.jsxs)(n.CardHeader,{children:[(0,l.jsx)(i.CardTitle,{children:"Focus States"}),(0,l.jsx)(r.CardDescription,{children:"Visible focus indicators for keyboard users"})]}),(0,l.jsx)(s.CardContent,{children:(0,l.jsx)(t.Typography,{variant:"body2",className:"block",children:"Interactive elements within table cells have visible focus states that follow the LSD design system's focus indicators, ensuring keyboard users can always see which element has focus."})})]})]}),(0,l.jsx)(m.PageNavigation,{previous:{title:"Skeleton",href:"/components/skeleton"},next:{title:"Toggle",href:"/components/toggle"}})]})]})}e.s(["default",()=>u])}]);
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var l=e.i(75201);function a(){var e;let a;e=e=>{let l=document.documentElement;e.theme&&("dark"===e.theme?l.classList.add("dark"):l.classList.remove("dark")),e.accent&&("monochrome"===e.accent?l.removeAttribute("data-theme"):l.setAttribute("data-theme",e.accent)),e.font&&(l.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?l.classList.add("font-serif"):"sans-serif"===e.font?l.classList.add("font-sans"):"monospace"===e.font&&l.classList.add("font-mono"))},a=l.useRef(e),l.useEffect(()=>{a.current=e},[e]),l.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&a.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>a],45173)},36855,e=>{"use strict";var l=e.i(98134);e.i(26940);var a=e.i(19514),s=e.i(88518),b=e.i(30226),t=e.i(331),T=e.i(26906),n=e.i(67993),r=e.i(57753),d=e.i(45173);let o=`import {
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
};`;function i(){return(0,d.useSendThemeToIframes)(),(0,l.jsxs)(a.Table,{children:[(0,l.jsx)(b.TableCaption,{children:"Sales Data - Q4 2024"}),(0,l.jsx)(n.TableHeader,{children:(0,l.jsxs)(r.TableRow,{children:[(0,l.jsx)(T.TableHead,{children:"Month"}),(0,l.jsx)(T.TableHead,{children:"Sales"}),(0,l.jsx)(T.TableHead,{children:"Growth"}),(0,l.jsx)(T.TableHead,{children:"Target"})]})}),(0,l.jsxs)(s.TableBody,{children:[(0,l.jsxs)(r.TableRow,{children:[(0,l.jsx)(t.TableCell,{children:"October"}),(0,l.jsx)(t.TableCell,{children:"$45,000"}),(0,l.jsx)(t.TableCell,{children:"+12%"}),(0,l.jsx)(t.TableCell,{children:"$50,000"})]}),(0,l.jsxs)(r.TableRow,{children:[(0,l.jsx)(t.TableCell,{children:"November"}),(0,l.jsx)(t.TableCell,{children:"$52,000"}),(0,l.jsx)(t.TableCell,{children:"+15%"}),(0,l.jsx)(t.TableCell,{children:"$50,000"})]}),(0,l.jsxs)(r.TableRow,{children:[(0,l.jsx)(t.TableCell,{children:"December"}),(0,l.jsx)(t.TableCell,{children:"$58,000"}),(0,l.jsx)(t.TableCell,{children:"+11%"}),(0,l.jsx)(t.TableCell,{children:"$55,000"})]})]})]})}function c(){return(0,l.jsx)(i,{})}e.s(["CODE",0,o,"TableWithCaptionExample",()=>i,"default",()=>c])}]);
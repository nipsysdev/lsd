(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var t=e.i(75201);function a(){var e;let a;e=e=>{let t=document.documentElement;e.theme&&("dark"===e.theme?t.classList.add("dark"):t.classList.remove("dark")),e.accent&&("monochrome"===e.accent?t.removeAttribute("data-theme"):t.setAttribute("data-theme",e.accent)),e.font&&(t.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?t.classList.add("font-serif"):"sans-serif"===e.font?t.classList.add("font-sans"):"monospace"===e.font&&t.classList.add("font-mono"))},a=t.useRef(e),t.useEffect(()=>{a.current=e},[e]),t.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&a.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>a],45173)},37883,e=>{"use strict";var t=e.i(98134);e.i(26940);var a=e.i(59038),r=e.i(23206),n=e.i(46700),o=e.i(25543),s=e.i(57845),i=e.i(80427),d=e.i(65972),l=e.i(64439),c=e.i(93261),m=e.i(3860),u=e.i(91365),p=e.i(19915),h=e.i(75201),f=e.i(85082);let C=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128ZM60,112a16,16,0,1,0,16,16A16,16,0,0,0,60,112Zm136,0a16,16,0,1,0,16,16A16,16,0,0,0,196,112Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M240,96v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80H224A16,16,0,0,1,240,96Z",opacity:"0.2"}),h.createElement("path",{d:"M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V96A16,16,0,0,0,224,80ZM60,140a12,12,0,1,1,12-12A12,12,0,0,1,60,140Zm68,0a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm68,0a12,12,0,1,1,12-12A12,12,0,0,1,196,140Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M138,128a10,10,0,1,1-10-10A10,10,0,0,1,138,128ZM60,118a10,10,0,1,0,10,10A10,10,0,0,0,60,118Zm136,0a10,10,0,1,0,10,10A10,10,0,0,0,196,118Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M136,128a8,8,0,1,1-8-8A8,8,0,0,1,136,128Zm-76-8a8,8,0,1,0,8,8A8,8,0,0,0,60,120Zm136,0a8,8,0,1,0,8,8A8,8,0,0,0,196,120Z"}))]]),v=h.forwardRef((e,t)=>h.createElement(f.default,{ref:t,...e,weights:C}));v.displayName="DotsThreeIcon";var g=e.i(45173);let x=`import {
  Button,
  ButtonGroup,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nipsys/shadcn-lsd';
import { DotsThreeIcon } from '@phosphor-icons/react';

export function Example() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          This is a card component with header, content, and footer sections.
        </CardDescription>
        <CardAction>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="square-sm" aria-label="More options">
                <DotsThreeIcon weight="bold" />
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" size="sm" className="p-0">
              <ButtonGroup orientation="vertical">
                <Button variant="outlined" size="sm" className="justify-start">
                  Edit
                </Button>
                <Button variant="outlined" size="sm" className="justify-start">
                  Duplicate
                </Button>
                <Button variant="outlined" size="sm" className="justify-start text-destructive">
                  Delete
                </Button>
              </ButtonGroup>
            </PopoverContent>
          </Popover>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          Cards are used to group related content and actions together. They provide a clean,
          organized way to display information and can include headers, content areas, and footers.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outlined" className="w-full">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  )
};`;function A(){return(0,g.useSendThemeToIframes)(),(0,t.jsxs)(n.Card,{className:"w-full max-w-md",children:[(0,t.jsxs)(l.CardHeader,{children:[(0,t.jsx)(c.CardTitle,{children:"Card Title"}),(0,t.jsx)(i.CardDescription,{children:"This is a card component with header, content, and footer sections."}),(0,t.jsx)(o.CardAction,{children:(0,t.jsxs)(m.Popover,{children:[(0,t.jsx)(p.PopoverTrigger,{asChild:!0,children:(0,t.jsx)(a.Button,{variant:"ghost",size:"square-sm","aria-label":"More options",children:(0,t.jsx)(v,{weight:"bold"})})}),(0,t.jsx)(u.PopoverContent,{align:"end",size:"sm",className:"p-0",children:(0,t.jsxs)(r.ButtonGroup,{orientation:"vertical",children:[(0,t.jsx)(a.Button,{variant:"outlined",size:"sm",className:"justify-start",children:"Edit"}),(0,t.jsx)(a.Button,{variant:"outlined",size:"sm",className:"justify-start",children:"Duplicate"}),(0,t.jsx)(a.Button,{variant:"outlined",size:"sm",className:"justify-start text-destructive",children:"Delete"})]})})]})})]}),(0,t.jsx)(s.CardContent,{children:(0,t.jsx)("p",{className:"text-sm",children:"Cards are used to group related content and actions together. They provide a clean, organized way to display information and can include headers, content areas, and footers."})}),(0,t.jsx)(d.CardFooter,{children:(0,t.jsx)(a.Button,{variant:"outlined",className:"w-full",children:"Learn More"})})]})}function j(){return(0,t.jsx)(A,{})}e.s(["CODE",0,x,"CardBasicExample",()=>A,"default",()=>j],37883)}]);
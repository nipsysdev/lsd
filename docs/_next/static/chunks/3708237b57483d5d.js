(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var t=e.i(75201);function a(){var e;let a;e=e=>{let t=document.documentElement;e.theme&&("dark"===e.theme?t.classList.add("dark"):t.classList.remove("dark")),e.accent&&("monochrome"===e.accent?t.removeAttribute("data-theme"):t.setAttribute("data-theme",e.accent)),e.font&&(t.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?t.classList.add("font-serif"):"sans-serif"===e.font?t.classList.add("font-sans"):"monospace"===e.font&&t.classList.add("font-mono"))},a=t.useRef(e),t.useEffect(()=>{a.current=e},[e]),t.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&a.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>a],45173)},22450,e=>{"use strict";var t=e.i(74116);e.s(["Button",()=>t.B])},25812,e=>{"use strict";var t=e.i(75201),a=e.i(85082);let s=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),t.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"}))]]),n=t.forwardRef((e,n)=>t.createElement(a.default,{ref:n,...e,weights:s}));n.displayName="PlusIcon",e.s(["PlusIcon",()=>n],25812)},49409,e=>{"use strict";var t=e.i(98134);e.i(26940);var a=e.i(22450),s=e.i(25812),n=e.i(45173);let l=`import { Button } from '@nipsys/shadcn-lsd';
import { PlusIcon } from '@phosphor-icons/react';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <div className="flex flex-wrap items-center gap-(--lsd-spacing-base)">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
      <div className="flex flex-wrap items-center gap-(--lsd-spacing-base)">
        <Button variant="filled-rounded" size="square-sm">
          <PlusIcon />
        </Button>
        <Button variant="filled-rounded" size="square-md">
          <PlusIcon />
        </Button>
        <Button variant="filled-rounded" size="square-lg">
          <PlusIcon />
        </Button>
      </div>
    </div>
  );
}`;function r(){return(0,n.useSendThemeToIframes)(),(0,t.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)",children:[(0,t.jsxs)("div",{className:"flex flex-wrap items-center gap-(--lsd-spacing-base)",children:[(0,t.jsx)(a.Button,{size:"sm",children:"Small"}),(0,t.jsx)(a.Button,{size:"md",children:"Medium"}),(0,t.jsx)(a.Button,{size:"lg",children:"Large"})]}),(0,t.jsxs)("div",{className:"flex flex-wrap items-center gap-(--lsd-spacing-base)",children:[(0,t.jsx)(a.Button,{variant:"filled-rounded",size:"square-sm",children:(0,t.jsx)(s.PlusIcon,{})}),(0,t.jsx)(a.Button,{variant:"filled-rounded",size:"square-md",children:(0,t.jsx)(s.PlusIcon,{})}),(0,t.jsx)(a.Button,{variant:"filled-rounded",size:"square-lg",children:(0,t.jsx)(s.PlusIcon,{})})]})]})}function i(){return(0,t.jsx)(r,{})}e.s(["ButtonSizesExample",()=>r,"CODE",0,l,"default",()=>i])}]);
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var t=e.i(75201);function o(){var e;let o;e=e=>{let t=document.documentElement;e.theme&&("dark"===e.theme?t.classList.add("dark"):t.classList.remove("dark")),e.accent&&("monochrome"===e.accent?t.removeAttribute("data-theme"):t.setAttribute("data-theme",e.accent)),e.font&&(t.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?t.classList.add("font-serif"):"sans-serif"===e.font?t.classList.add("font-sans"):"monospace"===e.font&&t.classList.add("font-mono"))},o=t.useRef(e),t.useEffect(()=>{o.current=e},[e]),t.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&o.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>o],45173)},14790,e=>{"use strict";var t=e.i(12085);e.s(["Autocomplete",()=>t.b])},94812,e=>{"use strict";var t=e.i(98134);e.i(26940);var o=e.i(14790),s=e.i(45173);let l=[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],a=`import { Autocomplete } from '@nipsys/shadcn-lsd';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-large) p-(--lsd-spacing-larger)">
      <Autocomplete size="xs" options={options} placeholder="Extra Small" />
      <Autocomplete size="sm" options={options} placeholder="Small" />
      <Autocomplete size="md" options={options} placeholder="Medium" />
      <Autocomplete size="lg" options={options} placeholder="Large" />
      <Autocomplete size="xl" options={options} placeholder="Extra Large" />
    </div>
  )
};`;function i(){return(0,s.useSendThemeToIframes)(),(0,t.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-large) p-(--lsd-spacing-larger)",children:[(0,t.jsx)(o.Autocomplete,{size:"xs",options:l,placeholder:"Extra Small"}),(0,t.jsx)(o.Autocomplete,{size:"sm",options:l,placeholder:"Small"}),(0,t.jsx)(o.Autocomplete,{size:"md",options:l,placeholder:"Medium"}),(0,t.jsx)(o.Autocomplete,{size:"lg",options:l,placeholder:"Large"}),(0,t.jsx)(o.Autocomplete,{size:"xl",options:l,placeholder:"Extra Large"})]})}function n(){return(0,t.jsx)(i,{})}e.s(["AutocompleteSizesExample",()=>i,"CODE",0,a,"default",()=>n])}]);
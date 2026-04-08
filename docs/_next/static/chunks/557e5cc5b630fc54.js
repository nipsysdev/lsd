(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var o=e.i(75201);function t(){var e;let t;e=e=>{let o=document.documentElement;e.theme&&("dark"===e.theme?o.classList.add("dark"):o.classList.remove("dark")),e.accent&&("monochrome"===e.accent?o.removeAttribute("data-theme"):o.setAttribute("data-theme",e.accent)),e.font&&(o.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?o.classList.add("font-serif"):"sans-serif"===e.font?o.classList.add("font-sans"):"monospace"===e.font&&o.classList.add("font-mono"))},t=o.useRef(e),o.useEffect(()=>{t.current=e},[e]),o.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&t.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>t],45173)},82227,e=>{"use strict";var o=e.i(98134);e.i(26940);var t=e.i(84390),a=e.i(3556),l=e.i(45173);let s=[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],n=`import { Autocomplete } from '@nipsys/shadcn-lsd';
import { TextAaIcon } from '@phosphor-icons/react';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-large)">
      <Autocomplete label="Select an option" options={options} placeholder="Choose..." />
      <Autocomplete
        label="With Icon"
        options={options}
        placeholder="Search..."
        icon={<TextAaIcon className="size-6" />}
      />
      <Autocomplete label="Clearable" options={options} placeholder="Type to search..." clearable />
      <Autocomplete label="Error State" options={options} placeholder="Select an option" error />
      <Autocomplete label="Disabled" options={options} placeholder="Can't select" disabled />
    </div>
  )
};`;function c(){return(0,l.useSendThemeToIframes)(),(0,o.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-large)",children:[(0,o.jsx)(t.Autocomplete,{label:"Select an option",options:s,placeholder:"Choose..."}),(0,o.jsx)(t.Autocomplete,{label:"With Icon",options:s,placeholder:"Search...",icon:(0,o.jsx)(a.TextAaIcon,{className:"size-6"})}),(0,o.jsx)(t.Autocomplete,{label:"Clearable",options:s,placeholder:"Type to search...",clearable:!0}),(0,o.jsx)(t.Autocomplete,{label:"Error State",options:s,placeholder:"Select an option",error:!0}),(0,o.jsx)(t.Autocomplete,{label:"Disabled",options:s,placeholder:"Can't select",disabled:!0})]})}function r(){return(0,o.jsx)(c,{})}e.s(["AutocompleteFeaturesExample",()=>c,"CODE",0,n,"default",()=>r])}]);
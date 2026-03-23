(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68869,e=>{"use strict";var t=e.i(86900);function s(){var e;let s;e=e=>{let t=document.documentElement;e.theme&&("dark"===e.theme?t.classList.add("dark"):t.classList.remove("dark")),e.accent&&("monochrome"===e.accent?t.removeAttribute("data-theme"):t.setAttribute("data-theme",e.accent)),e.font&&(t.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?t.classList.add("font-serif"):"sans-serif"===e.font?t.classList.add("font-sans"):"monospace"===e.font&&t.classList.add("font-mono"))},s=t.useRef(e),t.useEffect(()=>{s.current=e},[e]),t.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&s.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>s],68869)},14908,e=>{"use strict";var t=e.i(16879);e.s(["Autocomplete",()=>t.b])},10086,e=>{"use strict";var t=e.i(2582);e.i(82419);var s=e.i(14908),a=e.i(68869);let o=[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],n=`import { Autocomplete } from '@nipsys/shadcn-lsd';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

export function Example() {
  return (
    <Autocomplete
      label="Disabled"
      options={options}
      placeholder="Can't select"
      disabled
    />
  );
}`;function l(){return(0,a.useSendThemeToIframes)(),(0,t.jsx)(s.Autocomplete,{label:"Disabled",options:o,placeholder:"Can't select",disabled:!0})}function i(){return(0,t.jsx)(l,{})}e.s(["AutocompleteDisabledExample",()=>l,"CODE",0,n,"default",()=>i])}]);
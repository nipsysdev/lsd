(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68869,e=>{"use strict";var t=e.i(86900);function o(){var e;let o;e=e=>{let t=document.documentElement;e.theme&&("dark"===e.theme?t.classList.add("dark"):t.classList.remove("dark")),e.accent&&("monochrome"===e.accent?t.removeAttribute("data-theme"):t.setAttribute("data-theme",e.accent)),e.font&&(t.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?t.classList.add("font-serif"):"sans-serif"===e.font?t.classList.add("font-sans"):"monospace"===e.font&&t.classList.add("font-mono"))},o=t.useRef(e),t.useEffect(()=>{o.current=e},[e]),t.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&o.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>o],68869)},14908,e=>{"use strict";var t=e.i(16879);e.s(["Autocomplete",()=>t.b])},53179,e=>{"use strict";var t=e.i(2582);e.i(82419);var o=e.i(14908),a=e.i(68869);let s=[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],n=`import { Autocomplete } from '@nipsys/shadcn-lsd';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

export function Example() {
  return (
    <Autocomplete
      label="Error State"
      options={options}
      placeholder="Select an option"
      error
    />
  );
}`;function r(){return(0,a.useSendThemeToIframes)(),(0,t.jsx)(o.Autocomplete,{label:"Error State",options:s,placeholder:"Select an option",error:!0})}function l(){return(0,t.jsx)(r,{})}e.s(["AutocompleteErrorExample",()=>r,"CODE",0,n,"default",()=>l])}]);
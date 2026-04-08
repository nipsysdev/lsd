(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var t=e.i(75201);function o(){var e;let o;e=e=>{let t=document.documentElement;e.theme&&("dark"===e.theme?t.classList.add("dark"):t.classList.remove("dark")),e.accent&&("monochrome"===e.accent?t.removeAttribute("data-theme"):t.setAttribute("data-theme",e.accent)),e.font&&(t.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?t.classList.add("font-serif"):"sans-serif"===e.font?t.classList.add("font-sans"):"monospace"===e.font&&t.classList.add("font-mono"))},o=t.useRef(e),t.useEffect(()=>{o.current=e},[e]),t.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&o.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>o],45173)},40278,e=>{"use strict";var t=e.i(98134);e.i(26940);var o=e.i(84390),a=e.i(45173);let n=[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],s=`import { Autocomplete } from '@nipsys/shadcn-lsd';

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
}`;function r(){return(0,a.useSendThemeToIframes)(),(0,t.jsx)(o.Autocomplete,{label:"Error State",options:n,placeholder:"Select an option",error:!0})}function l(){return(0,t.jsx)(r,{})}e.s(["AutocompleteErrorExample",()=>r,"CODE",0,s,"default",()=>l])}]);
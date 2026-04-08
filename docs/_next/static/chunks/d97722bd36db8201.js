(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var t=e.i(75201);function a(){var e;let a;e=e=>{let t=document.documentElement;e.theme&&("dark"===e.theme?t.classList.add("dark"):t.classList.remove("dark")),e.accent&&("monochrome"===e.accent?t.removeAttribute("data-theme"):t.setAttribute("data-theme",e.accent)),e.font&&(t.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?t.classList.add("font-serif"):"sans-serif"===e.font?t.classList.add("font-sans"):"monospace"===e.font&&t.classList.add("font-mono"))},a=t.useRef(e),t.useEffect(()=>{a.current=e},[e]),t.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&a.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>a],45173)},22164,e=>{"use strict";var t=e.i(98134);e.i(26940);var a=e.i(84390),s=e.i(45173);let o=[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],n=`import { Autocomplete } from '@nipsys/shadcn-lsd';

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
}`;function l(){return(0,s.useSendThemeToIframes)(),(0,t.jsx)(a.Autocomplete,{label:"Disabled",options:o,placeholder:"Can't select",disabled:!0})}function i(){return(0,t.jsx)(l,{})}e.s(["AutocompleteDisabledExample",()=>l,"CODE",0,n,"default",()=>i])}]);
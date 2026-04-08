(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var a=e.i(75201);function t(){var e;let t;e=e=>{let a=document.documentElement;e.theme&&("dark"===e.theme?a.classList.add("dark"):a.classList.remove("dark")),e.accent&&("monochrome"===e.accent?a.removeAttribute("data-theme"):a.setAttribute("data-theme",e.accent)),e.font&&(a.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?a.classList.add("font-serif"):"sans-serif"===e.font?a.classList.add("font-sans"):"monospace"===e.font&&a.classList.add("font-mono"))},t=a.useRef(e),a.useEffect(()=>{t.current=e},[e]),a.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&t.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>t],45173)},91297,e=>{"use strict";var a=e.i(98134);e.i(26940);var t=e.i(84390),l=e.i(45173);let s=[{value:"js",label:"JavaScript"},{value:"ts",label:"TypeScript"},{value:"py",label:"Python"},{value:"go",label:"Go"},{value:"rs",label:"Rust"},{value:"java",label:"Java"}],o=`import { Autocomplete } from '@nipsys/shadcn-lsd';

const options = [
  { value: 'js', label: 'JavaScript' },
  { value: 'ts', label: 'TypeScript' },
  { value: 'py', label: 'Python' },
  { value: 'rb', label: 'Ruby' },
  { value: 'go', label: 'Go' },
  { value: 'rs', label: 'Rust' },
  { value: 'java', label: 'Java' },
  { value: 'cs', label: 'C#' },
  { value: 'cpp', label: 'C++' },
  { value: 'swift', label: 'Swift' },
];

export function Example() {
  return <Autocomplete options={options} placeholder="Search languages..." />
};`;function n(){return(0,l.useSendThemeToIframes)(),(0,a.jsx)(t.Autocomplete,{options:s,placeholder:"Search languages..."})}function r(){return(0,a.jsx)(n,{})}e.s(["AutocompleteBasicExample",()=>n,"CODE",0,o,"default",()=>r])}]);
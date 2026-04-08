(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var t=e.i(75201);function o(){var e;let o;e=e=>{let t=document.documentElement;e.theme&&("dark"===e.theme?t.classList.add("dark"):t.classList.remove("dark")),e.accent&&("monochrome"===e.accent?t.removeAttribute("data-theme"):t.setAttribute("data-theme",e.accent)),e.font&&(t.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?t.classList.add("font-serif"):"sans-serif"===e.font?t.classList.add("font-sans"):"monospace"===e.font&&t.classList.add("font-mono"))},o=t.useRef(e),t.useEffect(()=>{o.current=e},[e]),t.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&o.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>o],45173)},97593,e=>{"use strict";var t=e.i(98134);e.i(26940);var o=e.i(84390),a=e.i(3556),s=e.i(45173);let n=[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],i=`import { Autocomplete } from '@nipsys/shadcn-lsd';
import { TextAaIcon } from '@phosphor-icons/react';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

export function Example() {
  return (
    <Autocomplete
      label="With Icon"
      options={options}
      placeholder="Search..."
      icon={<TextAaIcon className="size-6" />}
    />
  );
}`;function l(){return(0,s.useSendThemeToIframes)(),(0,t.jsx)(o.Autocomplete,{label:"With Icon",options:n,placeholder:"Search...",icon:(0,t.jsx)(a.TextAaIcon,{className:"size-6"})})}function r(){return(0,t.jsx)(l,{})}e.s(["AutocompleteIconExample",()=>l,"CODE",0,i,"default",()=>r])}]);
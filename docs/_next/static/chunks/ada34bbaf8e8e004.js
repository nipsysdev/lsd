(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var a=e.i(75201);function t(){var e;let t;e=e=>{let a=document.documentElement;e.theme&&("dark"===e.theme?a.classList.add("dark"):a.classList.remove("dark")),e.accent&&("monochrome"===e.accent?a.removeAttribute("data-theme"):a.setAttribute("data-theme",e.accent)),e.font&&(a.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?a.classList.add("font-serif"):"sans-serif"===e.font?a.classList.add("font-sans"):"monospace"===e.font&&a.classList.add("font-mono"))},t=a.useRef(e),a.useEffect(()=>{t.current=e},[e]),a.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&t.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>t],45173)},65452,e=>{"use strict";var a=e.i(98134);e.i(26940);var t=e.i(15560),s=e.i(45173);let r=`import { Textarea } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Textarea 
        placeholder="Normal textarea"
        defaultValue="This is a normal textarea in its default state."
      />
      <Textarea 
        placeholder="Disabled textarea"
        defaultValue="This textarea is disabled and cannot be edited."
        disabled
      />
      <Textarea 
        placeholder="Error state textarea"
        defaultValue="This textarea has an error state."
        aria-invalid="true"
      />
      <Textarea 
        placeholder="Readonly textarea"
        defaultValue="This textarea is readonly but can be focused."
        readOnly
      />
    </div>
  );
}`;function l(){return(0,s.useSendThemeToIframes)(),(0,a.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,a.jsx)(t.Textarea,{placeholder:"Normal textarea",defaultValue:"This is a normal textarea in its default state."}),(0,a.jsx)(t.Textarea,{placeholder:"Disabled textarea",defaultValue:"This textarea is disabled and cannot be edited.",disabled:!0}),(0,a.jsx)(t.Textarea,{placeholder:"Error state textarea",defaultValue:"This textarea has an error state.","aria-invalid":"true"}),(0,a.jsx)(t.Textarea,{placeholder:"Readonly textarea",defaultValue:"This textarea is readonly but can be focused.",readOnly:!0})]})}function d(){return(0,a.jsx)(l,{})}e.s(["CODE",0,r,"TextareaStatesExample",()=>l,"default",()=>d])}]);
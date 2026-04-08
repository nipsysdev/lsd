(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var a=e.i(75201);function t(){var e;let t;e=e=>{let a=document.documentElement;e.theme&&("dark"===e.theme?a.classList.add("dark"):a.classList.remove("dark")),e.accent&&("monochrome"===e.accent?a.removeAttribute("data-theme"):a.setAttribute("data-theme",e.accent)),e.font&&(a.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?a.classList.add("font-serif"):"sans-serif"===e.font?a.classList.add("font-sans"):"monospace"===e.font&&a.classList.add("font-mono"))},t=a.useRef(e),a.useEffect(()=>{t.current=e},[e]),a.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&t.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>t],45173)},65546,e=>{"use strict";var a=e.i(98134);e.i(26940);var t=e.i(15560),s=e.i(6896),r=e.i(75201),n=e.i(45173);let i=`import { useState } from 'react';
import { Textarea, Typography } from '@nipsys/shadcn-lsd';

export function Example() {
  const [value, setValue] = useState('');
  const maxLength = 200;
  const remaining = maxLength - value.length;

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <div>
        <Textarea
          placeholder="Type your message here..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          maxLength={maxLength}
          className={remaining <= 20 ? 'lsd:aria-invalid:border-lsd-destructive lsd:aria-invalid:ring-lsd-destructive/20' : ''}
          aria-invalid={remaining <= 20}
        />
        <Typography variant="label1" className={\`mt-(--lsd-spacing-smaller) block text-right \${remaining <= 20 ? 'text-destructive' : 'text-lsd-text-secondary'}\`}>
          {remaining} characters remaining
        </Typography>
      </div>

      <div>
        <Textarea
          placeholder="Textarea with character count display"
          defaultValue="This textarea shows the current character count."
        />
        <Typography variant="label1" className="mt-(--lsd-spacing-smaller) block text-right text-lsd-text-secondary">
          52 / 500 characters
        </Typography>
      </div>
    </div>
  );
}`;function l(){let[e,i]=(0,r.useState)(""),l=200-e.length;return(0,n.useSendThemeToIframes)(),(0,a.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(t.Textarea,{placeholder:"Type your message here...",value:e,onChange:e=>i(e.target.value),maxLength:200,className:l<=20?"lsd:aria-invalid:border-lsd-destructive lsd:aria-invalid:ring-lsd-destructive/20":"","aria-invalid":l<=20}),(0,a.jsxs)(s.Typography,{variant:"label1",className:`mt-(--lsd-spacing-smaller) block text-right ${l<=20?"text-destructive":"text-lsd-text-secondary"}`,children:[l," characters remaining"]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(t.Textarea,{placeholder:"Textarea with character count display",defaultValue:"This textarea shows the current character count."}),(0,a.jsx)(s.Typography,{variant:"label1",className:"mt-(--lsd-spacing-smaller) block text-right text-lsd-text-secondary",children:"52 / 500 characters"})]})]})}function c(){return(0,a.jsx)(l,{})}e.s(["CODE",0,i,"TextareaCharacterCountExample",()=>l,"default",()=>c])}]);
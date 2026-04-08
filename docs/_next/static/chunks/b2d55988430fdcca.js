(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,a=>{"use strict";var e=a.i(75201);function t(){var a;let t;a=a=>{let e=document.documentElement;a.theme&&("dark"===a.theme?e.classList.add("dark"):e.classList.remove("dark")),a.accent&&("monochrome"===a.accent?e.removeAttribute("data-theme"):e.setAttribute("data-theme",a.accent)),a.font&&(e.classList.remove("font-serif","font-sans","font-mono"),"serif"===a.font?e.classList.add("font-serif"):"sans-serif"===a.font?e.classList.add("font-sans"):"monospace"===a.font&&e.classList.add("font-mono"))},t=e.useRef(a),e.useEffect(()=>{t.current=a},[a]),e.useEffect(()=>{if(window.self===window.top)return;let a=a=>{"example-params"===a.data.type&&t.current(a.data.data)};return window.addEventListener("message",a),()=>{window.removeEventListener("message",a)}},["example-params"])}a.s(["useSendThemeToIframes",()=>t],45173)},30098,a=>{"use strict";var e=a.i(98134);a.i(26940);var t=a.i(1247),s=a.i(89226),r=a.i(5813),n=a.i(45173);let i=`import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-wrap gap-(--lsd-spacing-base)">
      <Avatar>
        <AvatarImage src="/nipsysdev-nft_2.webp" alt="Nipsys NFT" />
        <AvatarFallback>NF</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    </div>
  );
}`;function c(){return(0,n.useSendThemeToIframes)(),(0,e.jsxs)("div",{className:"flex flex-wrap gap-(--lsd-spacing-base)",children:[(0,e.jsxs)(t.Avatar,{children:[(0,e.jsx)(r.AvatarImage,{src:"/nipsysdev-nft_2.webp",alt:"Nipsys NFT"}),(0,e.jsx)(s.AvatarFallback,{children:"NF"})]}),(0,e.jsx)(t.Avatar,{children:(0,e.jsx)(s.AvatarFallback,{children:"AB"})})]})}function l(){return(0,e.jsx)(c,{})}a.s(["AvatarBasicExample",()=>c,"CODE",0,i,"default",()=>l])}]);
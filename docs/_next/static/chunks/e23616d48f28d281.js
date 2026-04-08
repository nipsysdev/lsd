(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,a=>{"use strict";var e=a.i(75201);function s(){var a;let s;a=a=>{let e=document.documentElement;a.theme&&("dark"===a.theme?e.classList.add("dark"):e.classList.remove("dark")),a.accent&&("monochrome"===a.accent?e.removeAttribute("data-theme"):e.setAttribute("data-theme",a.accent)),a.font&&(e.classList.remove("font-serif","font-sans","font-mono"),"serif"===a.font?e.classList.add("font-serif"):"sans-serif"===a.font?e.classList.add("font-sans"):"monospace"===a.font&&e.classList.add("font-mono"))},s=e.useRef(a),e.useEffect(()=>{s.current=a},[a]),e.useEffect(()=>{if(window.self===window.top)return;let a=a=>{"example-params"===a.data.type&&s.current(a.data.data)};return window.addEventListener("message",a),()=>{window.removeEventListener("message",a)}},["example-params"])}a.s(["useSendThemeToIframes",()=>s],45173)},62545,a=>{"use strict";var e=a.i(98134);a.i(26940);var s=a.i(1247),t=a.i(89226),r=a.i(5813),l=a.i(45173);let n=`import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <div className="flex items-center gap-(--lsd-spacing-base)">
        <Avatar size="sm">
          <AvatarImage src="/nipsysdev-nft_2.webp" alt="Small" />
          <AvatarFallback>SM</AvatarFallback>
        </Avatar>
        <Avatar size="default">
          <AvatarImage src="/nipsysdev-nft_2.webp" alt="Default" />
          <AvatarFallback>DF</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarImage src="/nipsysdev-nft_2.webp" alt="Large" />
          <AvatarFallback>LG</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}`;function i(){return(0,l.useSendThemeToIframes)(),(0,e.jsx)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:(0,e.jsxs)("div",{className:"flex items-center gap-(--lsd-spacing-base)",children:[(0,e.jsxs)(s.Avatar,{size:"sm",children:[(0,e.jsx)(r.AvatarImage,{src:"/nipsysdev-nft_2.webp",alt:"Small"}),(0,e.jsx)(t.AvatarFallback,{children:"SM"})]}),(0,e.jsxs)(s.Avatar,{size:"default",children:[(0,e.jsx)(r.AvatarImage,{src:"/nipsysdev-nft_2.webp",alt:"Default"}),(0,e.jsx)(t.AvatarFallback,{children:"DF"})]}),(0,e.jsxs)(s.Avatar,{size:"lg",children:[(0,e.jsx)(r.AvatarImage,{src:"/nipsysdev-nft_2.webp",alt:"Large"}),(0,e.jsx)(t.AvatarFallback,{children:"LG"})]})]})})}function c(){return(0,e.jsx)(i,{})}a.s(["AvatarSizesExample",()=>i,"CODE",0,n,"default",()=>c])}]);
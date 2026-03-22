(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45251,e=>{"use strict";var s=e.i(75201),t=e.i(85082);let a=new Map([["bold",s.createElement(s.Fragment,null,s.createElement("path",{d:"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"}))],["duotone",s.createElement(s.Fragment,null,s.createElement("path",{d:"M216,128l-72,72V56Z",opacity:"0.2"}),s.createElement("path",{d:"M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"}))],["fill",s.createElement(s.Fragment,null,s.createElement("path",{d:"M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"}))],["light",s.createElement(s.Fragment,null,s.createElement("path",{d:"M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"}))],["regular",s.createElement(s.Fragment,null,s.createElement("path",{d:"M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"}))],["thin",s.createElement(s.Fragment,null,s.createElement("path",{d:"M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"}))]]),n=s.forwardRef((e,n)=>s.createElement(t.default,{ref:n,...e,weights:a}));n.displayName="ArrowRightIcon",e.s(["ArrowRightIcon",()=>n],45251)},49332,99311,11163,45010,48989,e=>{"use strict";var s=e.i(98134),t=e.i(75201);let a=(e,s)=>t=>{e.current!==t&&(e.current=t,s())};function n(e,{keys:s,deps:i=[e,s]}={}){let o=(0,t.useRef)();o.current=e.get();let l=(0,t.useCallback)(t=>{var n;let i;return a(o,t)(e.value),s?.length>0?(n=a(o,t),i=new Set(s).add(void 0),e.listen((e,s,t)=>{i.has(t)&&n(e,s,t)})):e.listen(a(o,t))},i),r=()=>o.current;return(0,t.useSyncExternalStore)(l,r,r)}var i=e.i(54219);e.i(82637);let o=[],l=0,r=0,c=e=>{let s=[],t={get:()=>(t.lc||t.listen(()=>{})(),t.value),lc:0,listen:e=>(t.lc=s.push(e),()=>{for(let s=l+4;s<o.length;)o[s]===e?o.splice(s,4):s+=4;let a=s.indexOf(e);~a&&(s.splice(a,1),--t.lc||t.off())}),notify(e,a){r++;let n=!o.length;for(let n of s)o.push(n,t.value,e,a);if(n){for(l=0;l<o.length;l+=4)o[l](o[l+1],o[l+2],o[l+3]);o.length=0}},off(){},set(e){let s=t.value;s!==e&&(t.value=e,t.notify(s))},subscribe(e){let s=t.listen(e);return e(t.value),s},value:e};return t},d=((e={})=>{let s=c(e);return s.setKey=function(e,t){let a=s.value;void 0===t&&e in s.value?(s.value={...s.value},delete s.value[e],s.notify(a,e)):s.value[e]!==t&&(s.value={...s.value,[e]:t},s.notify(a,e))},s})([]),p=c(null),h=null,m=new Map;function x(e){return[...e].sort((e,s)=>{let t=document.getElementById(e.title),a=document.getElementById(s.title);if(!t||!a)return 0;let n=t.compareDocumentPosition(a);return n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0})}e.i(26940);var u=e.i(61417);function g({items:e}){let t=n(p);return e.length?(0,s.jsx)("div",{className:"flex flex-col items-center absolute w-full",children:(0,s.jsxs)("div",{className:"fixed max-w-xs hidden 2xl:block",children:[(0,s.jsx)(u.Typography,{variant:"h6",color:"secondary",className:"mb-(--lsd-spacing-base)",children:"On this page"}),(0,s.jsx)("nav",{className:"flex flex-col gap-(--lsd-spacing-small)",children:e.map(e=>{let a=t===e.title,n=e.isChild?"pl-(--lsd-spacing-base)":"";return(0,s.jsx)("a",{href:`#${e.title}`,onClick:s=>{var t;let a;return t=e.title,s.preventDefault(),void((a=document.getElementById(t))&&a.scrollIntoView({behavior:"instant",block:"start"}))},className:`text-sm transition-colors ${a?"underline":"not-hover:text-(--lsd-text-secondary)"} ${n}`,children:e.title},e.title)})})]})}):null}function f({children:e}){let a=n(d);return(0,t.useEffect)(()=>(!function(){if(h)return;h=new IntersectionObserver(e=>{let s=e.filter(e=>e.isIntersecting);if(0===s.length)return;let t=s.reduce((e,s)=>{let t=e.boundingClientRect;return s.boundingClientRect.top<t.top?s:e});p.set(t.target.id)},{rootMargin:"-20% 0px -60% 0px",threshold:0});let e=x(d.get());d.set(e),e.forEach(e=>{let s=document.getElementById(e.title);s&&(h.observe(s),m.set(e.title,s))})}(),()=>void(h&&(h.disconnect(),h=null),m.clear(),d.set([]),p.set(null))),[]),(0,s.jsxs)("div",{className:"flex justify-between gap-x-(--lsd-spacing-large) p-(--lsd-spacing-largest)",children:[(0,s.jsx)("div",{className:"flex-auto hidden xl:block mr-(--lsd-spacing-large)"}),(0,s.jsx)("div",{className:"flex basis-4xl max-w-full mx-auto shrink flex-col",children:e}),(0,s.jsx)("div",{className:"flex-auto hidden xl:flex justify-center relative xl:ml-(--lsd-spacing-large)",children:a.length>0&&(0,s.jsx)(g,{items:a})}),(0,s.jsx)(i.Toaster,{})]})}function j({children:e}){return(0,s.jsx)("div",{className:"w-full flex-1 pb-16 *:data-[slot=alert]:first:mt-0 sm:pb-0",children:e})}function y({title:e,description:t}){return(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-small) mb-(--lsd-spacing-large)",children:[(0,s.jsx)(u.Typography,{variant:"h1",children:e}),t&&(0,s.jsx)(u.Typography,{variant:"subtitle1",color:"secondary",children:t})]})}e.s(["DocsLayout",()=>f],49332),e.s(["PageContent",()=>j],99311),e.s(["PageHeader",()=>y],11163);var v=e.i(22450),T=e.i(85082);let b=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M112,56V200L40,128Z",opacity:"0.2"}),t.createElement("path",{d:"M216,120H120V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,120,200V136h96a8,8,0,0,0,0-16ZM104,180.69,51.31,128,104,75.31Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-13.66,5.66l-72-72a8,8,0,0,1,0-11.32l72-72A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H54.49l61.75,61.76a6,6,0,1,1-8.48,8.48l-72-72a6,6,0,0,1,0-8.48l72-72a6,6,0,0,1,8.48,8.48L54.49,122H216A6,6,0,0,1,222,128Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H49.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,0,1,5.66,5.66L49.66,124H216A4,4,0,0,1,220,128Z"}))]]),C=t.forwardRef((e,s)=>t.createElement(T.default,{ref:s,...e,weights:b}));C.displayName="ArrowLeftIcon";var N=e.i(45251),E=e.i(99352);function w({previous:e,next:t}){return(0,s.jsxs)("div",{className:"grid grid-cols-2 my-(--lsd-spacing-larger) items-center",children:[e&&(0,s.jsx)("div",{children:(0,s.jsx)(v.Button,{className:"w-fit",variant:"outlined",asChild:!0,children:(0,s.jsxs)(E.default,{href:e.href,children:[(0,s.jsx)(C,{className:"mr-(--lsd-spacing-smaller)",weight:"duotone"}),e.title]})})}),t&&(0,s.jsx)("div",{className:"col-start-2 text-right",children:(0,s.jsx)(v.Button,{className:"w-fit",asChild:!0,children:(0,s.jsxs)(E.default,{href:t.href,children:[t.title,(0,s.jsx)(N.ArrowRightIcon,{className:"ml-(--lsd-spacing-smaller)",weight:"duotone"})]})})})]})}function B({title:e,isChild:a=!1,children:n}){(0,t.useEffect)(()=>(!function(e){let s=d.get();if(!s.some(s=>s.title===e.title)){let t=x([...s,e]);if(d.set(t),h){let s=document.getElementById(e.title);s&&(h.observe(s),m.set(e.title,s))}}}({title:e,isChild:a}),()=>{let s,t;s=d.get(),d.set(s.filter(s=>s.title!==e)),(t=m.get(e))&&h&&(h.unobserve(t),m.delete(e))}),[e,a]);let i=a?"h4":"h2",o=a?"mt-(--lsd-spacing-largest) pt-(--lsd-spacing-small)":"my-(--lsd-spacing-largest) py-(--lsd-spacing-small)";return(0,s.jsxs)("div",{id:e,className:`${o}`,children:[(0,s.jsx)(u.Typography,{variant:i,className:"mb-(--lsd-spacing-base)",children:e}),n]})}e.s(["PageNavigation",()=>w],45010),e.s(["PageSection",()=>B],48989)},90074,e=>{"use strict";var s=e.i(98134);e.i(26940);var t=e.i(22450),a=e.i(61417),n=e.i(75201),i=e.i(85082);let o=new Map([["bold",n.createElement(n.Fragment,null,n.createElement("path",{d:"M200,28H165.47a51.88,51.88,0,0,0-74.94,0H56A20,20,0,0,0,36,48V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V48A20,20,0,0,0,200,28ZM155.71,60H100.29a28,28,0,0,1,55.42,0ZM196,212H60V52H77.41A52.13,52.13,0,0,0,76,64v8A12,12,0,0,0,88,84h80a12,12,0,0,0,12-12V64a52.13,52.13,0,0,0-1.41-12H196Z"}))],["duotone",n.createElement(n.Fragment,null,n.createElement("path",{d:"M208,48V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96a39.83,39.83,0,0,0-8,24v8h80V64a39.83,39.83,0,0,0-8-24h40A8,8,0,0,1,208,48Z",opacity:"0.2"}),n.createElement("path",{d:"M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"}))],["fill",n.createElement(n.Fragment,null,n.createElement("path",{d:"M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Z"}))],["light",n.createElement(n.Fragment,null,n.createElement("path",{d:"M200,34H162.83a45.91,45.91,0,0,0-69.66,0H56A14,14,0,0,0,42,48V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V48A14,14,0,0,0,200,34Zm-72-4a34,34,0,0,1,34,34v2H94V64A34,34,0,0,1,128,30Zm74,186a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H85.67A45.77,45.77,0,0,0,82,64v8a6,6,0,0,0,6,6h80a6,6,0,0,0,6-6V64a45.77,45.77,0,0,0-3.67-18H200a2,2,0,0,1,2,2Z"}))],["regular",n.createElement(n.Fragment,null,n.createElement("path",{d:"M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"}))],["thin",n.createElement(n.Fragment,null,n.createElement("path",{d:"M200,36H161.92a44,44,0,0,0-67.84,0H56A12,12,0,0,0,44,48V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V48A12,12,0,0,0,200,36Zm-72-8a36,36,0,0,1,36,36v4H92V64A36,36,0,0,1,128,28Zm76,188a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H88.83A43.71,43.71,0,0,0,84,64v8a4,4,0,0,0,4,4h80a4,4,0,0,0,4-4V64a43.71,43.71,0,0,0-4.83-20H200a4,4,0,0,1,4,4Z"}))]]),l=n.forwardRef((e,s)=>n.createElement(i.default,{ref:s,...e,weights:o}));l.displayName="ClipboardIcon";var r=e.i(54219);function c({code:e}){let n=async()=>{try{await navigator.clipboard.writeText(e),r.toast.success("Code successfully copied to clipboard")}catch(e){r.toast.error("Failed to copy code to clipboard")}};return(0,s.jsxs)("div",{className:"flex justify-between size-full relative group",children:[(0,s.jsx)(a.Typography,{variant:"subtitle3",className:"my-auto",children:(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"whitespace-break-spaces",children:e})})}),(0,s.jsx)(t.Button,{onClick:n,variant:"outlined",size:"square-md",className:"opacity-0 group-hover:opacity-100 transition-opacity","aria-label":"Copy code",children:(0,s.jsx)(l,{className:"size-4",weight:"duotone"})})]})}e.s(["CodeExample",()=>c],90074)},10337,e=>{"use strict";var s=e.i(98134);let t=(0,e.i(75201).forwardRef)(({src:e,title:t,size:a="md",className:n,...i},o)=>(0,s.jsx)("iframe",{ref:o,src:e,className:`${{sm:"min-h-[128px]",md:"min-h-[256px]",lg:"min-h-[450px]"}[a]} w-full overflow-hidden`,title:t,...i}));t.displayName="IframeExample",e.s(["IframeExample",0,t])},46402,e=>{"use strict";var s=e.i(45171);e.s(["Input",()=>s.I])},43265,e=>{"use strict";var s=e.i(98134);e.i(26940);var t=e.i(22450),a=e.i(61417),n=e.i(54219),i=e.i(45173);let o=`import { Button, Typography } from '@nipsys/shadcn-lsd';
import { Toaster, toast } from 'sonner';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Toaster />

      <Typography variant="label1">Persistent Toasts</Typography>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button
          variant="outlined"
          onClick={() =>
            toast('This toast will not auto-dismiss', {
              duration: Number.POSITIVE_INFINITY,
            })
          }
        >
          Show Persistent Toast
        </Button>
        <Button variant="outlined" onClick={() => toast.dismiss()}>
          Dismiss All Toasts
        </Button>
      </div>
    </div>
  );
}`;function l(){return(0,i.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsx)(n.Toaster,{}),(0,s.jsx)(a.Typography,{variant:"label1",children:"Persistent Toasts"}),(0,s.jsxs)("div",{className:"flex flex-wrap gap-(--lsd-spacing-base)",children:[(0,s.jsx)(t.Button,{variant:"outlined",onClick:()=>(0,n.toast)("This toast will not auto-dismiss",{duration:1/0}),children:"Show Persistent Toast"}),(0,s.jsx)(t.Button,{variant:"outlined",onClick:()=>n.toast.dismiss(),children:"Dismiss All Toasts"})]})]})}function r(){return(0,s.jsx)(l,{})}e.s(["CODE",0,o,"ToastPersistentExample",()=>l,"default",()=>r])},44780,e=>{"use strict";var s=e.i(98134);e.i(26940);var t=e.i(22450),a=e.i(61417),n=e.i(54219),i=e.i(45173);let o=`import { Button, Typography } from '@nipsys/shadcn-lsd';
import { Toaster, toast } from 'sonner';

export function Example() {
  const handlePromiseClick = () => {
    const promise = new Promise(resolve => setTimeout(() => resolve('Data loaded!'), 2000));
    toast.promise(promise, {
      loading: 'Loading...',
      success: data => String(data),
      error: 'Error loading data',
    });
  };

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Toaster />

      <Typography variant="label1">Promise-based Toasts</Typography>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button variant="outlined" onClick={handlePromiseClick}>
          Show Promise Toast
        </Button>
      </div>
    </div>
  );
}`;function l(){return(0,i.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsx)(n.Toaster,{}),(0,s.jsx)(a.Typography,{variant:"label1",children:"Promise-based Toasts"}),(0,s.jsx)("div",{className:"flex flex-wrap gap-(--lsd-spacing-base)",children:(0,s.jsx)(t.Button,{variant:"outlined",onClick:()=>{let e=new Promise(e=>setTimeout(()=>e("Data loaded!"),2e3));n.toast.promise(e,{loading:"Loading...",success:e=>String(e),error:"Error loading data"})},children:"Show Promise Toast"})})]})}function r(){return(0,s.jsx)(l,{})}e.s(["CODE",0,o,"ToastPromiseExample",()=>l,"default",()=>r])},45910,e=>{"use strict";var s=e.i(98134);e.i(26940);var t=e.i(22450),a=e.i(61417),n=e.i(54219),i=e.i(45173);let o=`import { Button, Typography } from '@nipsys/shadcn-lsd';
import { Toaster, toast } from 'sonner';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Toaster />

      <Typography variant="label1">Rich Toasts</Typography>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button
          variant="outlined"
          onClick={() =>
            toast(
              <div>
                <h4 className="lsd:font-semibold">Event Created</h4>
                <p className="lsd:text-sm">Your event has been created successfully.</p>
              </div>,
              {
                duration: 5000,
              }
            )
          }
        >
          Show Rich Toast
        </Button>
      </div>
    </div>
  );
}`;function l(){return(0,i.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsx)(n.Toaster,{}),(0,s.jsx)(a.Typography,{variant:"label1",children:"Rich Toasts"}),(0,s.jsx)("div",{className:"flex flex-wrap gap-(--lsd-spacing-base)",children:(0,s.jsx)(t.Button,{variant:"outlined",onClick:()=>(0,n.toast)((0,s.jsxs)("div",{children:[(0,s.jsx)("h4",{className:"lsd:font-semibold",children:"Event Created"}),(0,s.jsx)("p",{className:"lsd:text-sm",children:"Your event has been created successfully."})]}),{duration:5e3}),children:"Show Rich Toast"})})]})}function r(){return(0,s.jsx)(l,{})}e.s(["CODE",0,o,"ToastRichExample",()=>l,"default",()=>r])},67793,e=>{"use strict";var s=e.i(98134);e.i(26940);var t=e.i(22450),a=e.i(61417),n=e.i(54219),i=e.i(45173);let o=`import { Button, Typography } from '@nipsys/shadcn-lsd';
import { Toaster, toast } from 'sonner';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Toaster />

      <Typography variant="label1">Custom Duration</Typography>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button
          variant="outlined"
          onClick={() => toast('Short duration', { duration: 2000 })}
        >
          2 seconds
        </Button>
        <Button
          variant="outlined"
          onClick={() => toast('Long duration', { duration: 10000 })}
        >
          10 seconds
        </Button>
      </div>
    </div>
  );
}`;function l(){return(0,i.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsx)(n.Toaster,{}),(0,s.jsx)(a.Typography,{variant:"label1",children:"Custom Duration"}),(0,s.jsxs)("div",{className:"flex flex-wrap gap-(--lsd-spacing-base)",children:[(0,s.jsx)(t.Button,{variant:"outlined",onClick:()=>(0,n.toast)("Short duration",{duration:2e3}),children:"2 seconds"}),(0,s.jsx)(t.Button,{variant:"outlined",onClick:()=>(0,n.toast)("Long duration",{duration:1e4}),children:"10 seconds"})]})]})}function r(){return(0,s.jsx)(l,{})}e.s(["CODE",0,o,"ToastDurationExample",()=>l,"default",()=>r])},28531,e=>{"use strict";var s=e.i(98134);e.i(26940);var t=e.i(22450),a=e.i(61417),n=e.i(54219),i=e.i(45173);let o=`import { Button, Typography } from '@nipsys/shadcn-lsd';
import { Toaster, toast } from 'sonner';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Toaster />

      <Typography variant="label1">With Actions</Typography>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button
          variant="outlined"
          onClick={() =>
            toast('Event has been created', {
              action: {
                label: 'Undo',
                onClick: () => console.log('Undo clicked'),
              },
            })
          }
        >
          Show with Action
        </Button>
      </div>
    </div>
  );
}`;function l(){return(0,i.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsx)(n.Toaster,{}),(0,s.jsx)(a.Typography,{variant:"label1",children:"With Actions"}),(0,s.jsx)("div",{className:"flex flex-wrap gap-(--lsd-spacing-base)",children:(0,s.jsx)(t.Button,{variant:"outlined",onClick:()=>(0,n.toast)("Event has been created",{action:{label:"Undo",onClick:()=>console.log("Undo clicked")}}),children:"Show with Action"})})]})}function r(){return(0,s.jsx)(l,{})}e.s(["CODE",0,o,"ToastActionsExample",()=>l,"default",()=>r])},57230,e=>{"use strict";var s=e.i(98134);e.i(26940);var t=e.i(22450),a=e.i(61417),n=e.i(54219),i=e.i(45173);let o=`import { Button, Typography } from '@nipsys/shadcn-lsd';
import { Toaster, toast } from 'sonner';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Toaster />

      <Typography variant="label1">Positioned Toasts</Typography>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button
          variant="outlined"
          onClick={() => toast('Top-left toast', { position: 'top-left' })}
        >
          Top-Left
        </Button>
        <Button
          variant="outlined"
          onClick={() => toast('Top-right toast', { position: 'top-right' })}
        >
          Top-Right
        </Button>
        <Button
          variant="outlined"
          onClick={() => toast('Bottom-left toast', { position: 'bottom-left' })}
        >
          Bottom-Left
        </Button>
        <Button
          variant="outlined"
          onClick={() => toast('Bottom-right toast', { position: 'bottom-right' })}
        >
          Bottom-Right
        </Button>
      </div>
    </div>
  );
}`;function l(){return(0,i.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsx)(n.Toaster,{}),(0,s.jsx)(a.Typography,{variant:"label1",children:"Positioned Toasts"}),(0,s.jsxs)("div",{className:"flex flex-wrap gap-(--lsd-spacing-base)",children:[(0,s.jsx)(t.Button,{variant:"outlined",onClick:()=>(0,n.toast)("Top-left toast",{position:"top-left"}),children:"Top-Left"}),(0,s.jsx)(t.Button,{variant:"outlined",onClick:()=>(0,n.toast)("Top-right toast",{position:"top-right"}),children:"Top-Right"}),(0,s.jsx)(t.Button,{variant:"outlined",onClick:()=>(0,n.toast)("Bottom-left toast",{position:"bottom-left"}),children:"Bottom-Left"}),(0,s.jsx)(t.Button,{variant:"outlined",onClick:()=>(0,n.toast)("Bottom-right toast",{position:"bottom-right"}),children:"Bottom-Right"})]})]})}function r(){return(0,s.jsx)(l,{})}e.s(["CODE",0,o,"ToastPositionsExample",()=>l,"default",()=>r])},66730,e=>{"use strict";var s=e.i(98134);e.i(26940);var t=e.i(22450),a=e.i(61417),n=e.i(54219),i=e.i(45173);let o=`import { Button, Typography } from '@nipsys/shadcn-lsd';
import { Toaster, toast } from 'sonner';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="label1">Toast Types</Typography>
      <div className="flex flex-wrap gap-(--lsd-spacing-base)">
        <Button variant="outlined" onClick={() => toast('Simple toast message')}>
          Show Simple Toast
        </Button>
        <Button
          variant="outlined"
          onClick={() => toast.success('Changes saved successfully!')}
        >
          Show Success Toast
        </Button>
        <Button variant="outlined" onClick={() => toast.error('Something went wrong!')}>
          Show Error Toast
        </Button>
        <Button
          variant="outlined"
          onClick={() => toast.warning('Please review your changes')}
        >
          Show Warning Toast
        </Button>
        <Button variant="outlined" onClick={() => toast.info('New feature available')}>
          Show Info Toast
        </Button>
      </div>
      <Toaster />
    </div>
  );
}`;function l(){return(0,i.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsx)(a.Typography,{variant:"label1",children:"Toast Types"}),(0,s.jsxs)("div",{className:"flex flex-wrap gap-(--lsd-spacing-base)",children:[(0,s.jsx)(t.Button,{variant:"outlined",onClick:()=>(0,n.toast)("Simple toast message"),children:"Show Simple Toast"}),(0,s.jsx)(t.Button,{variant:"outlined",onClick:()=>n.toast.success("Changes saved successfully!"),children:"Show Success Toast"}),(0,s.jsx)(t.Button,{variant:"outlined",onClick:()=>n.toast.error("Something went wrong!"),children:"Show Error Toast"}),(0,s.jsx)(t.Button,{variant:"outlined",onClick:()=>n.toast.warning("Please review your changes"),children:"Show Warning Toast"}),(0,s.jsx)(t.Button,{variant:"outlined",onClick:()=>n.toast.info("New feature available"),children:"Show Info Toast"})]}),(0,s.jsx)(n.Toaster,{})]})}function r(){return(0,s.jsx)(l,{})}e.s(["CODE",0,o,"ToastTypesExample",()=>l,"default",()=>r])},67531,e=>{"use strict";var s=e.i(98134);e.i(26940);var t=e.i(22450),a=e.i(61417),n=e.i(54219),i=e.i(45173);let o=`import { Button, Typography } from '@nipsys/shadcn-lsd';
import { Toaster, toast } from 'sonner';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Toaster />

      <Typography variant="label1">Success Toast</Typography>
      <Button 
        variant="outlined" 
        onClick={() => toast.success('Operation completed successfully!')}
      >
        Show Success Toast
      </Button>

      <Typography variant="label1">Error Toast</Typography>
      <Button 
        variant="outlined" 
        onClick={() => toast.error('Something went wrong. Please try again.')}
      >
        Show Error Toast
      </Button>

      <Typography variant="label1">Warning Toast</Typography>
      <Button 
        variant="outlined" 
        onClick={() => toast.warning('Please review your input before proceeding.')}
      >
        Show Warning Toast
      </Button>

      <Typography variant="label1">Info Toast</Typography>
      <Button 
        variant="outlined" 
        onClick={() => toast.info('A new feature is now available!')}
      >
        Show Info Toast
      </Button>
    </div>
  );
}`;function l(){return(0,i.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsx)(a.Typography,{variant:"h3",children:"Basic Toast Examples"}),(0,s.jsx)(a.Typography,{variant:"body1",className:"text-(--lsd-text-secondary)",children:"Demonstrates success, error, warning, and info toast notifications."}),(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-lg)",children:[(0,s.jsxs)("div",{className:"space-y-(--lsd-spacing-base)",children:[(0,s.jsx)(a.Typography,{variant:"label1",children:"Success Toast"}),(0,s.jsx)(t.Button,{variant:"outlined",onClick:()=>n.toast.success("Operation completed successfully!"),children:"Show Success Toast"})]}),(0,s.jsxs)("div",{className:"space-y-(--lsd-spacing-base)",children:[(0,s.jsx)(a.Typography,{variant:"label1",children:"Error Toast"}),(0,s.jsx)(t.Button,{variant:"outlined",onClick:()=>n.toast.error("Something went wrong. Please try again."),children:"Show Error Toast"})]}),(0,s.jsxs)("div",{className:"space-y-(--lsd-spacing-base)",children:[(0,s.jsx)(a.Typography,{variant:"label1",children:"Warning Toast"}),(0,s.jsx)(t.Button,{variant:"outlined",onClick:()=>n.toast.warning("Please review your input before proceeding."),children:"Show Warning Toast"})]}),(0,s.jsxs)("div",{className:"space-y-(--lsd-spacing-base)",children:[(0,s.jsx)(a.Typography,{variant:"label1",children:"Info Toast"}),(0,s.jsx)(t.Button,{variant:"outlined",onClick:()=>n.toast.info("A new feature is now available!"),children:"Show Info Toast"})]})]}),(0,s.jsx)(n.Toaster,{})]})}function r(){return(0,s.jsx)(l,{})}e.s(["BasicExample",()=>l,"CODE",0,o,"default",()=>r])},75125,e=>{"use strict";var s=e.i(98134);e.i(26940);var t=e.i(22450),a=e.i(61417),n=e.i(54219),i=e.i(45173);let o=`import { Button, Typography } from '@nipsys/shadcn-lsd';
import { Toaster, toast } from 'sonner';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Toaster />

      <Typography variant="label1">Toast Positions</Typography>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-(--lsd-spacing-base)">
        <Button
          variant="outlined"
          onClick={() => toast('Top-left toast', { position: 'top-left' })}
        >
          Top-Left
        </Button>
        <Button
          variant="outlined"
          onClick={() => toast('Top-center toast', { position: 'top-center' })}
        >
          Top-Center
        </Button>
        <Button
          variant="outlined"
          onClick={() => toast('Top-right toast', { position: 'top-right' })}
        >
          Top-Right
        </Button>
        <Button
          variant="outlined"
          onClick={() => toast('Bottom-left toast', { position: 'bottom-left' })}
        >
          Bottom-Left
        </Button>
        <Button
          variant="outlined"
          onClick={() => toast('Bottom-center toast', { position: 'bottom-center' })}
        >
          Bottom-Center
        </Button>
        <Button
          variant="outlined"
          onClick={() => toast('Bottom-right toast', { position: 'bottom-right' })}
        >
          Bottom-Right
        </Button>
      </div>
    </div>
  );
}`;function l(){return(0,i.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsx)(a.Typography,{variant:"h3",children:"Toast Position Examples"}),(0,s.jsx)(a.Typography,{variant:"body1",className:"text-(--lsd-text-secondary)",children:"Demonstrates different toast positioning options on the screen."}),(0,s.jsxs)("div",{className:"space-y-(--lsd-spacing-lg)",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(a.Typography,{variant:"label1",children:"Top Positions"}),(0,s.jsx)(a.Typography,{variant:"body2",className:"text-(--lsd-text-secondary) mb-(--lsd-spacing-base)",children:"Toasts that appear at the top of the screen."}),(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-(--lsd-spacing-base)",children:[(0,s.jsx)(t.Button,{variant:"outlined",onClick:()=>(0,n.toast)("Top-left toast message",{position:"top-left"}),children:"Top-Left"}),(0,s.jsx)(t.Button,{variant:"outlined",onClick:()=>(0,n.toast)("Top-center toast message",{position:"top-center"}),children:"Top-Center"}),(0,s.jsx)(t.Button,{variant:"outlined",onClick:()=>(0,n.toast)("Top-right toast message",{position:"top-right"}),children:"Top-Right"})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(a.Typography,{variant:"label1",children:"Bottom Positions"}),(0,s.jsx)(a.Typography,{variant:"body2",className:"text-(--lsd-text-secondary) mb-(--lsd-spacing-base)",children:"Toasts that appear at the bottom of the screen."}),(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-(--lsd-spacing-base)",children:[(0,s.jsx)(t.Button,{variant:"outlined",onClick:()=>(0,n.toast)("Bottom-left toast message",{position:"bottom-left"}),children:"Bottom-Left"}),(0,s.jsx)(t.Button,{variant:"outlined",onClick:()=>(0,n.toast)("Bottom-center toast message",{position:"bottom-center"}),children:"Bottom-Center"}),(0,s.jsx)(t.Button,{variant:"outlined",onClick:()=>(0,n.toast)("Bottom-right toast message",{position:"bottom-right"}),children:"Bottom-Right"})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(a.Typography,{variant:"label1",children:"Common Positions Demo"}),(0,s.jsx)(a.Typography,{variant:"body2",className:"text-(--lsd-text-secondary) mb-(--lsd-spacing-base)",children:"Test multiple toasts to see how they stack in different positions."}),(0,s.jsx)(t.Button,{variant:"filled",onClick:()=>{n.toast.success("First success toast",{position:"top-right"}),setTimeout(()=>n.toast.info("Second info toast",{position:"top-right"}),500),setTimeout(()=>n.toast.warning("Third warning toast",{position:"top-right"}),1e3)},children:"Show Multiple Toasts"})]})]}),(0,s.jsx)(n.Toaster,{})]})}function r(){return(0,s.jsx)(l,{})}e.s(["CODE",0,o,"PositionExample",()=>l,"default",()=>r])},25758,e=>{"use strict";var s=e.i(98134);e.i(26940);var t=e.i(22450),a=e.i(46402),n=e.i(61417),i=e.i(75201),o=e.i(54219),l=e.i(45173);let r=`import { Button, Typography, Input } from '@nipsys/shadcn-lsd';
import { Toaster, toast } from 'sonner';
import { useState } from 'react';

export function Example() {
  const [filename, setFilename] = useState('');
  
  const handleUpload = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.3) {
          resolve('File uploaded successfully');
        } else {
          reject(new Error('Upload failed'));
        }
      }, 2000);
    });
  };

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Toaster />

      <Typography variant="label1">Rich Content Toast</Typography>
      <Button
        variant="outlined"
        onClick={() => {
          toast(
            <div className="flex items-center gap-(--lsd-spacing-smaller)">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div>
                <p className="font-semibold">Upload Complete</p>
                <p className="text-sm text-gray-600">Your file has been processed</p>
              </div>
            </div>,
            {
              duration: 5000,
              action: {
                label: 'View',
                onClick: () => console.log('View uploaded file'),
              },
            }
          );
        }}
      >
        Show Rich Content Toast
      </Button>

      <Typography variant="label1">Promise Toast</Typography>
      <Input
        placeholder="Enter filename"
        value={filename}
        onChange={(e) => setFilename(e.target.value)}
        className="mb-(--lsd-spacing-smaller)"
      />
      <Button
        variant="outlined"
        disabled={!filename}
        onClick={() => {
          toast.promise(
            handleUpload(),
            {
              loading: \`Uploading \${filename}...\`,
              success: (data) => \`\${data}: \${filename}\`,
              error: (error) => \`Failed to upload \${filename}: \${error.message}\`,
            }
          );
        }}
      >
        Upload with Promise
      </Button>
    </div>
  );
}`;function c(){let[e,r]=(0,i.useState)(""),c=async()=>new Promise((e,s)=>{setTimeout(()=>{Math.random()>.3?e("File uploaded successfully"):s(Error("Upload failed"))},2e3)});return(0,l.useSendThemeToIframes)(),(0,s.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,s.jsx)(n.Typography,{variant:"h3",children:"Custom Toast Examples"}),(0,s.jsx)(n.Typography,{variant:"body1",className:"text-(--lsd-text-secondary)",children:"Demonstrates rich content, custom styling, and promise-based toasts."}),(0,s.jsxs)("div",{className:"space-y-(--lsd-spacing-lg)",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(n.Typography,{variant:"label1",children:"Rich Content Toast with Custom Styling"}),(0,s.jsx)(n.Typography,{variant:"body2",className:"text-(--lsd-text-secondary) mb-(--lsd-spacing-base)",children:"Custom JSX content with inline styles and action buttons."}),(0,s.jsx)(t.Button,{variant:"outlined",onClick:()=>{(0,o.toast)((0,s.jsxs)("div",{className:"flex items-center gap-3",children:[(0,s.jsx)("div",{className:"w-3 h-3 bg-green-500 rounded-full shrink-0"}),(0,s.jsxs)("div",{className:"flex-1",children:[(0,s.jsx)("p",{className:"font-semibold text-gray-900",children:"Upload Complete"}),(0,s.jsx)("p",{className:"text-sm text-gray-600",children:"Your file has been processed and is ready to view"})]})]}),{duration:5e3,className:"border border-green-200",action:{label:"View",onClick:()=>console.log("View uploaded file")}})},children:"Show Rich Content Toast"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(n.Typography,{variant:"label1",children:"Toast with Custom Icon"}),(0,s.jsx)(n.Typography,{variant:"body2",className:"text-(--lsd-text-secondary) mb-(--lsd-spacing-base)",children:"Toast with custom visual elements and different styling."}),(0,s.jsx)(t.Button,{variant:"outlined",onClick:()=>{(0,o.toast)((0,s.jsxs)("div",{className:"flex items-center gap-3",children:[(0,s.jsx)("div",{className:"w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center",children:(0,s.jsx)("span",{className:"text-blue-600 text-sm",children:"📧"})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"font-semibold text-gray-900",children:"Email Sent"}),(0,s.jsx)("p",{className:"text-sm text-gray-600",children:"Message delivered to recipient"})]})]}),{className:"border border-blue-200 bg-blue-50"})},children:"Show Custom Icon Toast"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(n.Typography,{variant:"label1",children:"Promise-based Toast"}),(0,s.jsx)(n.Typography,{variant:"body2",className:"text-(--lsd-text-secondary) mb-(--lsd-spacing-base)",children:"Upload simulation with loading, success, and error states."}),(0,s.jsx)(a.Input,{placeholder:"Enter filename to upload",value:e,onChange:e=>r(e.target.value),className:"mb-(--lsd-spacing-base) max-w-sm"}),(0,s.jsx)(t.Button,{variant:"outlined",disabled:!e,onClick:()=>{o.toast.promise(c(),{loading:`Uploading ${e}...`,success:s=>`${s}: ${e}`,error:s=>`Failed to upload ${e}: ${s.message}`})},children:"Upload with Promise"})]})]}),(0,s.jsx)(o.Toaster,{})]})}function d(){return(0,s.jsx)(c,{})}e.s(["CODE",0,r,"CustomExample",()=>c,"default",()=>d])},72336,e=>{"use strict";var s=e.i(98134);e.i(26940);var t=e.i(71030),a=e.i(73463),n=e.i(2476),i=e.i(52683),o=e.i(46700),l=e.i(57845),r=e.i(80427),c=e.i(64439),d=e.i(93261),p=e.i(61417),h=e.i(75201),m=e.i(90074),x=e.i(49332),u=e.i(10337),g=e.i(99311),f=e.i(11163),j=e.i(45010),y=e.i(48989),v=e.i(45173),T=e.i(28531),b=e.i(67531),C=e.i(25758),N=e.i(67793),E=e.i(43265),w=e.i(75125),B=e.i(57230),A=e.i(44780),k=e.i(45910),S=e.i(66730);function H(){let e=(0,h.useRef)(null),H=(0,h.useRef)(null),D=(0,h.useRef)(null),I=(0,h.useRef)(null),P=(0,h.useRef)(null),V=(0,h.useRef)(null),R=(0,h.useRef)(null),O=(0,h.useRef)(null),M=(0,h.useRef)(null),Z=(0,h.useRef)(null);return(0,v.useSendThemeToIframes)(),(0,s.jsxs)(x.DocsLayout,{children:[(0,s.jsx)(f.PageHeader,{title:"Sonner",description:"Toast notification component with multiple types and customizable options"}),(0,s.jsxs)(g.PageContent,{children:[(0,s.jsx)(y.PageSection,{title:"About Sonner",children:(0,s.jsx)(p.Typography,{variant:"body1",className:"block",children:"Sonner is a toast notification component that displays brief, non-intrusive messages to users. It provides multiple toast types, customizable positioning, and rich color options for different notification states."})}),(0,s.jsxs)(y.PageSection,{title:"Installation",children:[(0,s.jsx)(p.Typography,{variant:"body1",children:"Import the Toaster component and toast function from LSD and sonner:"}),(0,s.jsx)(o.Card,{className:"mt-(--lsd-spacing-base)",children:(0,s.jsx)(l.CardContent,{children:(0,s.jsx)(m.CodeExample,{code:`import { Toaster } from '@nipsys/shadcn-lsd'
import { toast } from 'sonner'

export default function MyComponent() {
  return (
    <>
      <Toaster />
      <Button onClick={() => toast('Hello world')}>
        Show toast
      </Button>
    </>
  )
}`})})})]}),(0,s.jsxs)(y.PageSection,{title:"Sonner Examples",children:[(0,s.jsx)(p.Typography,{variant:"body1",children:"Various toast types, positions, and features including custom duration, actions, promise-based toasts, and rich content."}),(0,s.jsxs)(o.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,s.jsxs)(c.CardHeader,{children:[(0,s.jsx)(d.CardTitle,{children:"Basic Toasts"}),(0,s.jsx)(r.CardDescription,{children:"Success, error, warning, and info toasts"})]}),(0,s.jsxs)(l.CardContent,{children:[(0,s.jsx)(u.IframeExample,{ref:e,size:"md",src:"/examples/sonner/basic",title:"Basic Toast Example"}),(0,s.jsx)(t.Accordion,{type:"single",collapsible:!0,children:(0,s.jsxs)(n.AccordionItem,{value:"code",children:[(0,s.jsx)(i.AccordionTrigger,{children:"View code"}),(0,s.jsx)(a.AccordionContent,{children:(0,s.jsx)(m.CodeExample,{code:b.CODE})})]})})]})]}),(0,s.jsxs)(o.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,s.jsxs)(c.CardHeader,{children:[(0,s.jsx)(d.CardTitle,{children:"Custom Toasts"}),(0,s.jsx)(r.CardDescription,{children:"Rich content, custom icons, and promise-based toasts"})]}),(0,s.jsxs)(l.CardContent,{children:[(0,s.jsx)(u.IframeExample,{ref:H,size:"md",src:"/examples/sonner/custom",title:"Custom Toast Example"}),(0,s.jsx)(t.Accordion,{type:"single",collapsible:!0,children:(0,s.jsxs)(n.AccordionItem,{value:"code",children:[(0,s.jsx)(i.AccordionTrigger,{children:"View code"}),(0,s.jsx)(a.AccordionContent,{children:(0,s.jsx)(m.CodeExample,{code:C.CODE})})]})})]})]}),(0,s.jsxs)(o.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,s.jsxs)(c.CardHeader,{children:[(0,s.jsx)(d.CardTitle,{children:"Toast Positions"}),(0,s.jsx)(r.CardDescription,{children:"Different toast positioning options"})]}),(0,s.jsxs)(l.CardContent,{children:[(0,s.jsx)(u.IframeExample,{ref:D,size:"md",src:"/examples/sonner/position",title:"Toast Position Example"}),(0,s.jsx)(t.Accordion,{type:"single",collapsible:!0,children:(0,s.jsxs)(n.AccordionItem,{value:"code",children:[(0,s.jsx)(i.AccordionTrigger,{children:"View code"}),(0,s.jsx)(a.AccordionContent,{children:(0,s.jsx)(m.CodeExample,{code:w.CODE})})]})})]})]}),(0,s.jsxs)(o.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,s.jsxs)(c.CardHeader,{children:[(0,s.jsx)(d.CardTitle,{children:"Toast Types"}),(0,s.jsx)(r.CardDescription,{children:"Simple, success, error, warning, and info toasts"})]}),(0,s.jsxs)(l.CardContent,{children:[(0,s.jsx)(u.IframeExample,{ref:I,size:"md",src:"/examples/sonner/toast-types",title:"Toast Types Example"}),(0,s.jsx)(t.Accordion,{type:"single",collapsible:!0,children:(0,s.jsxs)(n.AccordionItem,{value:"code",children:[(0,s.jsx)(i.AccordionTrigger,{children:"View code"}),(0,s.jsx)(a.AccordionContent,{children:(0,s.jsx)(m.CodeExample,{code:S.CODE})})]})})]})]}),(0,s.jsxs)(o.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,s.jsxs)(c.CardHeader,{children:[(0,s.jsx)(d.CardTitle,{children:"Custom Duration"}),(0,s.jsx)(r.CardDescription,{children:"Control how long toasts stay visible"})]}),(0,s.jsxs)(l.CardContent,{children:[(0,s.jsx)(u.IframeExample,{ref:P,size:"md",src:"/examples/sonner/duration",title:"Toast Duration Example"}),(0,s.jsx)(t.Accordion,{type:"single",collapsible:!0,children:(0,s.jsxs)(n.AccordionItem,{value:"code",children:[(0,s.jsx)(i.AccordionTrigger,{children:"View code"}),(0,s.jsx)(a.AccordionContent,{children:(0,s.jsx)(m.CodeExample,{code:N.CODE})})]})})]})]}),(0,s.jsxs)(o.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,s.jsxs)(c.CardHeader,{children:[(0,s.jsx)(d.CardTitle,{children:"Positioned Toasts"}),(0,s.jsx)(r.CardDescription,{children:"Control toast positioning on screen"})]}),(0,s.jsxs)(l.CardContent,{children:[(0,s.jsx)(u.IframeExample,{ref:V,size:"md",src:"/examples/sonner/positions",title:"Toast Positions Example"}),(0,s.jsx)(t.Accordion,{type:"single",collapsible:!0,children:(0,s.jsxs)(n.AccordionItem,{value:"code",children:[(0,s.jsx)(i.AccordionTrigger,{children:"View code"}),(0,s.jsx)(a.AccordionContent,{children:(0,s.jsx)(m.CodeExample,{code:B.CODE})})]})})]})]}),(0,s.jsxs)(o.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,s.jsxs)(c.CardHeader,{children:[(0,s.jsx)(d.CardTitle,{children:"With Actions"}),(0,s.jsx)(r.CardDescription,{children:"Add action buttons to toasts"})]}),(0,s.jsxs)(l.CardContent,{children:[(0,s.jsx)(u.IframeExample,{ref:R,size:"md",src:"/examples/sonner/actions",title:"Toast Actions Example"}),(0,s.jsx)(t.Accordion,{type:"single",collapsible:!0,children:(0,s.jsxs)(n.AccordionItem,{value:"code",children:[(0,s.jsx)(i.AccordionTrigger,{children:"View code"}),(0,s.jsx)(a.AccordionContent,{children:(0,s.jsx)(m.CodeExample,{code:T.CODE})})]})})]})]}),(0,s.jsxs)(o.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,s.jsxs)(c.CardHeader,{children:[(0,s.jsx)(d.CardTitle,{children:"Persistent Toasts"}),(0,s.jsx)(r.CardDescription,{children:"Toasts that don't auto-dismiss"})]}),(0,s.jsxs)(l.CardContent,{children:[(0,s.jsx)(u.IframeExample,{ref:O,size:"md",src:"/examples/sonner/persistent",title:"Toast Persistent Example"}),(0,s.jsx)(t.Accordion,{type:"single",collapsible:!0,children:(0,s.jsxs)(n.AccordionItem,{value:"code",children:[(0,s.jsx)(i.AccordionTrigger,{children:"View code"}),(0,s.jsx)(a.AccordionContent,{children:(0,s.jsx)(m.CodeExample,{code:E.CODE})})]})})]})]}),(0,s.jsxs)(o.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,s.jsxs)(c.CardHeader,{children:[(0,s.jsx)(d.CardTitle,{children:"Promise-based Toasts"}),(0,s.jsx)(r.CardDescription,{children:"Async loading states with automatic success/error"})]}),(0,s.jsxs)(l.CardContent,{children:[(0,s.jsx)(u.IframeExample,{ref:M,size:"md",src:"/examples/sonner/promise",title:"Toast Promise Example"}),(0,s.jsx)(t.Accordion,{type:"single",collapsible:!0,children:(0,s.jsxs)(n.AccordionItem,{value:"code",children:[(0,s.jsx)(i.AccordionTrigger,{children:"View code"}),(0,s.jsx)(a.AccordionContent,{children:(0,s.jsx)(m.CodeExample,{code:A.CODE})})]})})]})]}),(0,s.jsxs)(o.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,s.jsxs)(c.CardHeader,{children:[(0,s.jsx)(d.CardTitle,{children:"Rich Toasts"}),(0,s.jsx)(r.CardDescription,{children:"Custom JSX content in toasts"})]}),(0,s.jsxs)(l.CardContent,{children:[(0,s.jsx)(u.IframeExample,{ref:Z,size:"md",src:"/examples/sonner/rich",title:"Toast Rich Example"}),(0,s.jsx)(t.Accordion,{type:"single",collapsible:!0,children:(0,s.jsxs)(n.AccordionItem,{value:"code",children:[(0,s.jsx)(i.AccordionTrigger,{children:"View code"}),(0,s.jsx)(a.AccordionContent,{children:(0,s.jsx)(m.CodeExample,{code:k.CODE})})]})})]})]})]}),(0,s.jsxs)(y.PageSection,{title:"API Reference",children:[(0,s.jsx)(p.Typography,{variant:"body1",children:"All available props for the Toaster component."}),(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)",children:[(0,s.jsxs)(o.Card,{children:[(0,s.jsxs)(c.CardHeader,{children:[(0,s.jsx)(d.CardTitle,{children:"theme"}),(0,s.jsx)(r.CardDescription,{children:"Theme for the toast notifications"})]}),(0,s.jsxs)(l.CardContent,{children:[(0,s.jsxs)(p.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,s.jsx)("strong",{children:"Type:"})," 'light' | 'dark' | 'system'"]}),(0,s.jsxs)(p.Typography,{variant:"label1",className:"block mb-(--lsd-spacing-smaller)",children:[(0,s.jsx)("strong",{children:"Options:"})," light, dark, system"]}),(0,s.jsxs)(p.Typography,{variant:"label1",className:"block",children:[(0,s.jsx)("strong",{children:"Default:"})," system"]})]})]}),(0,s.jsxs)(o.Card,{children:[(0,s.jsxs)(c.CardHeader,{children:[(0,s.jsx)(d.CardTitle,{children:"position"}),(0,s.jsx)(r.CardDescription,{children:"Position of the toast container"})]}),(0,s.jsxs)(l.CardContent,{children:[(0,s.jsxs)(p.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,s.jsx)("strong",{children:"Type:"})," ToasterPosition"]}),(0,s.jsxs)(p.Typography,{variant:"label1",className:"block mb-(--lsd-spacing-smaller)",children:[(0,s.jsx)("strong",{children:"Options:"})," top-left, top-center, top-right, bottom-left, bottom-center, bottom-right"]}),(0,s.jsxs)(p.Typography,{variant:"label1",className:"block",children:[(0,s.jsx)("strong",{children:"Default:"})," bottom-right"]})]})]}),(0,s.jsxs)(o.Card,{children:[(0,s.jsxs)(c.CardHeader,{children:[(0,s.jsx)(d.CardTitle,{children:"expand"}),(0,s.jsx)(r.CardDescription,{children:"Whether to expand toasts on hover"})]}),(0,s.jsxs)(l.CardContent,{children:[(0,s.jsxs)(p.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,s.jsx)("strong",{children:"Type:"})," boolean"]}),(0,s.jsxs)(p.Typography,{variant:"label1",className:"block",children:[(0,s.jsx)("strong",{children:"Default:"})," false"]}),(0,s.jsx)(p.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:"Expands toast to show full content on hover"})]})]}),(0,s.jsxs)(o.Card,{children:[(0,s.jsxs)(c.CardHeader,{children:[(0,s.jsx)(d.CardTitle,{children:"duration"}),(0,s.jsx)(r.CardDescription,{children:"Default duration for all toasts"})]}),(0,s.jsxs)(l.CardContent,{children:[(0,s.jsxs)(p.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,s.jsx)("strong",{children:"Type:"})," number"]}),(0,s.jsxs)(p.Typography,{variant:"label1",className:"block",children:[(0,s.jsx)("strong",{children:"Default:"})," 4000"]}),(0,s.jsx)(p.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:"Duration in milliseconds before toast auto-dismisses"})]})]}),(0,s.jsxs)(o.Card,{children:[(0,s.jsxs)(c.CardHeader,{children:[(0,s.jsx)(d.CardTitle,{children:"richColors"}),(0,s.jsx)(r.CardDescription,{children:"Enable rich color backgrounds for toast types"})]}),(0,s.jsxs)(l.CardContent,{children:[(0,s.jsxs)(p.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,s.jsx)("strong",{children:"Type:"})," boolean"]}),(0,s.jsxs)(p.Typography,{variant:"label1",className:"block",children:[(0,s.jsx)("strong",{children:"Default:"})," true"]}),(0,s.jsx)(p.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:"Applies colored backgrounds based on toast type"})]})]}),(0,s.jsxs)(o.Card,{children:[(0,s.jsxs)(c.CardHeader,{children:[(0,s.jsx)(d.CardTitle,{children:"closeButton"}),(0,s.jsx)(r.CardDescription,{children:"Show close button on toasts"})]}),(0,s.jsxs)(l.CardContent,{children:[(0,s.jsxs)(p.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,s.jsx)("strong",{children:"Type:"})," boolean"]}),(0,s.jsxs)(p.Typography,{variant:"label1",className:"block",children:[(0,s.jsx)("strong",{children:"Default:"})," false"]}),(0,s.jsx)(p.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:"Displays a close button on each toast"})]})]}),(0,s.jsxs)(o.Card,{children:[(0,s.jsxs)(c.CardHeader,{children:[(0,s.jsx)(d.CardTitle,{children:"toastOptions"}),(0,s.jsx)(r.CardDescription,{children:"Default options for all toasts"})]}),(0,s.jsxs)(l.CardContent,{children:[(0,s.jsxs)(p.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,s.jsx)("strong",{children:"Type:"})," ToastOptions"]}),(0,s.jsxs)(p.Typography,{variant:"label1",className:"block",children:[(0,s.jsx)("strong",{children:"Default:"})," undefined"]}),(0,s.jsx)(p.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:"Default configuration applied to all toasts"})]})]}),(0,s.jsxs)(o.Card,{children:[(0,s.jsxs)(c.CardHeader,{children:[(0,s.jsx)(d.CardTitle,{children:"className"}),(0,s.jsx)(r.CardDescription,{children:"Additional CSS classes to apply"})]}),(0,s.jsxs)(l.CardContent,{children:[(0,s.jsxs)(p.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,s.jsx)("strong",{children:"Type:"})," string"]}),(0,s.jsx)(p.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:"Merges with existing toaster classes"})]})]})]})]}),(0,s.jsxs)(y.PageSection,{title:"Accessibility",children:[(0,s.jsx)(p.Typography,{variant:"body1",children:"The Sonner component follows accessibility best practices."}),(0,s.jsxs)(o.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,s.jsxs)(c.CardHeader,{children:[(0,s.jsx)(d.CardTitle,{children:"Keyboard Navigation"}),(0,s.jsx)(r.CardDescription,{children:"Toasts are fully keyboard accessible"})]}),(0,s.jsxs)(l.CardContent,{children:[(0,s.jsxs)(p.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:["• ",(0,s.jsx)("strong",{children:"Tab"})," - Navigate to toast actions"]}),(0,s.jsxs)(p.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:["• ",(0,s.jsx)("strong",{children:"Shift + Tab"})," - Navigate to previous focusable element"]}),(0,s.jsxs)(p.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:["• ",(0,s.jsx)("strong",{children:"Enter"})," - Activate toast action button"]}),(0,s.jsxs)(p.Typography,{variant:"body2",className:"block",children:["• ",(0,s.jsx)("strong",{children:"Escape"})," - Dismiss toast (if dismissible)"]})]})]}),(0,s.jsxs)(o.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,s.jsxs)(c.CardHeader,{children:[(0,s.jsx)(d.CardTitle,{children:"ARIA Attributes"}),(0,s.jsx)(r.CardDescription,{children:"Proper ARIA attributes for screen readers"})]}),(0,s.jsxs)(l.CardContent,{children:[(0,s.jsxs)(p.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:["• Toasts use ",(0,s.jsx)("code",{children:'role="alert"'})," for important notifications"]}),(0,s.jsxs)(p.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:["• Use ",(0,s.jsx)("code",{children:"aria-live"})," for announcing toast messages"]}),(0,s.jsx)(p.Typography,{variant:"body2",className:"block",children:"• Action buttons are properly labeled for screen readers"})]})]}),(0,s.jsxs)(o.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,s.jsxs)(c.CardHeader,{children:[(0,s.jsx)(d.CardTitle,{children:"Focus States"}),(0,s.jsx)(r.CardDescription,{children:"Visible focus indicators for keyboard users"})]}),(0,s.jsx)(l.CardContent,{children:(0,s.jsx)(p.Typography,{variant:"body2",className:"block",children:"Toasts have visible focus states that follow the LSD design system's focus indicators, ensuring keyboard users can always see which element has focus."})})]})]})]}),(0,s.jsx)(j.PageNavigation,{previous:{title:"Progress",href:"/components/progress"},next:{title:"Card",href:"/components/card"}})]})}e.s(["default",()=>H])}]);
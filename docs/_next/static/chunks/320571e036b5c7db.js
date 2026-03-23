(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,10944,e=>{"use strict";var n=e.i(86900),r=e.i(66920);let a=new Map([["bold",n.createElement(n.Fragment,null,n.createElement("path",{d:"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"}))],["duotone",n.createElement(n.Fragment,null,n.createElement("path",{d:"M216,128l-72,72V56Z",opacity:"0.2"}),n.createElement("path",{d:"M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"}))],["fill",n.createElement(n.Fragment,null,n.createElement("path",{d:"M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"}))],["light",n.createElement(n.Fragment,null,n.createElement("path",{d:"M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"}))],["regular",n.createElement(n.Fragment,null,n.createElement("path",{d:"M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"}))],["thin",n.createElement(n.Fragment,null,n.createElement("path",{d:"M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"}))]]),t=n.forwardRef((e,t)=>n.createElement(r.default,{ref:t,...e,weights:a}));t.displayName="ArrowRightIcon",e.s(["ArrowRightIcon",()=>t],10944)},28131,68456,24847,21810,72063,e=>{"use strict";var n=e.i(2582),r=e.i(86900);let a=(e,n)=>r=>{e.current!==r&&(e.current=r,n())};function t(e,{keys:n,deps:s=[e,n]}={}){let l=(0,r.useRef)();l.current=e.get();let i=(0,r.useCallback)(r=>{var t;let s;return a(l,r)(e.value),n?.length>0?(t=a(l,r),s=new Set(n).add(void 0),e.listen((e,n,r)=>{s.has(r)&&t(e,n,r)})):e.listen(a(l,r))},s),c=()=>l.current;return(0,r.useSyncExternalStore)(i,c,c)}var s=e.i(38447);e.i(24168);let l=[],i=0,c=0,u=e=>{let n=[],r={get:()=>(r.lc||r.listen(()=>{})(),r.value),lc:0,listen:e=>(r.lc=n.push(e),()=>{for(let n=i+4;n<l.length;)l[n]===e?l.splice(n,4):n+=4;let a=n.indexOf(e);~a&&(n.splice(a,1),--r.lc||r.off())}),notify(e,a){c++;let t=!l.length;for(let t of n)l.push(t,r.value,e,a);if(t){for(i=0;i<l.length;i+=4)l[i](l[i+1],l[i+2],l[i+3]);l.length=0}},off(){},set(e){let n=r.value;n!==e&&(r.value=e,r.notify(n))},subscribe(e){let n=r.listen(e);return e(r.value),n},value:e};return r},d=((e={})=>{let n=u(e);return n.setKey=function(e,r){let a=n.value;void 0===r&&e in n.value?(n.value={...n.value},delete n.value[e],n.notify(a,e)):n.value[e]!==r&&(n.value={...n.value,[e]:r},n.notify(a,e))},n})([]),o=u(null),m=null,b=new Map;function h(e){return[...e].sort((e,n)=>{let r=document.getElementById(e.title),a=document.getElementById(n.title);if(!r||!a)return 0;let t=r.compareDocumentPosition(a);return t&Node.DOCUMENT_POSITION_FOLLOWING?-1:t&Node.DOCUMENT_POSITION_PRECEDING?1:0})}e.i(82419);var x=e.i(68256);function M({items:e}){let r=t(o);return e.length?(0,n.jsx)("div",{className:"flex flex-col items-center absolute w-full",children:(0,n.jsxs)("div",{className:"fixed max-w-xs hidden 2xl:block",children:[(0,n.jsx)(x.Typography,{variant:"h6",color:"secondary",className:"mb-(--lsd-spacing-base)",children:"On this page"}),(0,n.jsx)("nav",{className:"flex flex-col gap-(--lsd-spacing-small)",children:e.map(e=>{let a=r===e.title,t=e.isChild?"pl-(--lsd-spacing-base)":"";return(0,n.jsx)("a",{href:`#${e.title}`,onClick:n=>{var r;let a;return r=e.title,n.preventDefault(),void((a=document.getElementById(r))&&a.scrollIntoView({behavior:"instant",block:"start"}))},className:`text-sm transition-colors ${a?"underline":"not-hover:text-(--lsd-text-secondary)"} ${t}`,children:e.title},e.title)})})]})}):null}function p({children:e}){let a=t(d);return(0,r.useEffect)(()=>(!function(){if(m)return;m=new IntersectionObserver(e=>{let n=e.filter(e=>e.isIntersecting);if(0===n.length)return;let r=n.reduce((e,n)=>{let r=e.boundingClientRect;return n.boundingClientRect.top<r.top?n:e});o.set(r.target.id)},{rootMargin:"-20% 0px -60% 0px",threshold:0});let e=h(d.get());d.set(e),e.forEach(e=>{let n=document.getElementById(e.title);n&&(m.observe(n),b.set(e.title,n))})}(),()=>void(m&&(m.disconnect(),m=null),b.clear(),d.set([]),o.set(null))),[]),(0,n.jsxs)("div",{className:"flex justify-between gap-x-(--lsd-spacing-large) p-(--lsd-spacing-largest)",children:[(0,n.jsx)("div",{className:"flex-auto hidden xl:block mr-(--lsd-spacing-large)"}),(0,n.jsx)("div",{className:"flex basis-4xl max-w-full mx-auto shrink flex-col",children:e}),(0,n.jsx)("div",{className:"flex-auto hidden xl:flex justify-center relative xl:ml-(--lsd-spacing-large)",children:a.length>0&&(0,n.jsx)(M,{items:a})}),(0,n.jsx)(s.Toaster,{})]})}function g({children:e}){return(0,n.jsx)("div",{className:"w-full flex-1 pb-16 *:data-[slot=alert]:first:mt-0 sm:pb-0",children:e})}function j({title:e,description:r}){return(0,n.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-small) mb-(--lsd-spacing-large)",children:[(0,n.jsx)(x.Typography,{variant:"h1",children:e}),r&&(0,n.jsx)(x.Typography,{variant:"subtitle1",color:"secondary",children:r})]})}e.s(["DocsLayout",()=>p],28131),e.s(["PageContent",()=>g],68456),e.s(["PageHeader",()=>j],24847);var C=e.i(42836),f=e.i(66920);let I=new Map([["bold",r.createElement(r.Fragment,null,r.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"}))],["duotone",r.createElement(r.Fragment,null,r.createElement("path",{d:"M112,56V200L40,128Z",opacity:"0.2"}),r.createElement("path",{d:"M216,120H120V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,120,200V136h96a8,8,0,0,0,0-16ZM104,180.69,51.31,128,104,75.31Z"}))],["fill",r.createElement(r.Fragment,null,r.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-13.66,5.66l-72-72a8,8,0,0,1,0-11.32l72-72A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"}))],["light",r.createElement(r.Fragment,null,r.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H54.49l61.75,61.76a6,6,0,1,1-8.48,8.48l-72-72a6,6,0,0,1,0-8.48l72-72a6,6,0,0,1,8.48,8.48L54.49,122H216A6,6,0,0,1,222,128Z"}))],["regular",r.createElement(r.Fragment,null,r.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"}))],["thin",r.createElement(r.Fragment,null,r.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H49.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,0,1,5.66,5.66L49.66,124H216A4,4,0,0,1,220,128Z"}))]]),v=r.forwardRef((e,n)=>r.createElement(f.default,{ref:n,...e,weights:I}));v.displayName="ArrowLeftIcon";var E=e.i(10944),T=e.i(41123);function y({previous:e,next:r}){return(0,n.jsxs)("div",{className:"grid grid-cols-2 my-(--lsd-spacing-larger) items-center",children:[e&&(0,n.jsx)("div",{children:(0,n.jsx)(C.Button,{className:"w-fit",variant:"outlined",asChild:!0,children:(0,n.jsxs)(T.default,{href:e.href,children:[(0,n.jsx)(v,{className:"mr-(--lsd-spacing-smaller)",weight:"duotone"}),e.title]})})}),r&&(0,n.jsx)("div",{className:"col-start-2 text-right",children:(0,n.jsx)(C.Button,{className:"w-fit",asChild:!0,children:(0,n.jsxs)(T.default,{href:r.href,children:[r.title,(0,n.jsx)(E.ArrowRightIcon,{className:"ml-(--lsd-spacing-smaller)",weight:"duotone"})]})})})]})}function N({title:e,isChild:a=!1,children:t}){(0,r.useEffect)(()=>(!function(e){let n=d.get();if(!n.some(n=>n.title===e.title)){let r=h([...n,e]);if(d.set(r),m){let n=document.getElementById(e.title);n&&(m.observe(n),b.set(e.title,n))}}}({title:e,isChild:a}),()=>{let n,r;n=d.get(),d.set(n.filter(n=>n.title!==e)),(r=b.get(e))&&m&&(m.unobserve(r),b.delete(e))}),[e,a]);let s=a?"h4":"h2",l=a?"mt-(--lsd-spacing-largest) pt-(--lsd-spacing-small)":"my-(--lsd-spacing-largest) py-(--lsd-spacing-small)";return(0,n.jsxs)("div",{id:e,className:`${l}`,children:[(0,n.jsx)(x.Typography,{variant:s,className:"mb-(--lsd-spacing-base)",children:e}),t]})}e.s(["PageNavigation",()=>y],21810),e.s(["PageSection",()=>N],72063)},85313,e=>{"use strict";var n=e.i(2582);e.i(82419);var r=e.i(42836),a=e.i(68256),t=e.i(86900),s=e.i(66920);let l=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M200,28H165.47a51.88,51.88,0,0,0-74.94,0H56A20,20,0,0,0,36,48V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V48A20,20,0,0,0,200,28ZM155.71,60H100.29a28,28,0,0,1,55.42,0ZM196,212H60V52H77.41A52.13,52.13,0,0,0,76,64v8A12,12,0,0,0,88,84h80a12,12,0,0,0,12-12V64a52.13,52.13,0,0,0-1.41-12H196Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,48V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96a39.83,39.83,0,0,0-8,24v8h80V64a39.83,39.83,0,0,0-8-24h40A8,8,0,0,1,208,48Z",opacity:"0.2"}),t.createElement("path",{d:"M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M200,34H162.83a45.91,45.91,0,0,0-69.66,0H56A14,14,0,0,0,42,48V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V48A14,14,0,0,0,200,34Zm-72-4a34,34,0,0,1,34,34v2H94V64A34,34,0,0,1,128,30Zm74,186a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H85.67A45.77,45.77,0,0,0,82,64v8a6,6,0,0,0,6,6h80a6,6,0,0,0,6-6V64a45.77,45.77,0,0,0-3.67-18H200a2,2,0,0,1,2,2Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M200,36H161.92a44,44,0,0,0-67.84,0H56A12,12,0,0,0,44,48V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V48A12,12,0,0,0,200,36Zm-72-8a36,36,0,0,1,36,36v4H92V64A36,36,0,0,1,128,28Zm76,188a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H88.83A43.71,43.71,0,0,0,84,64v8a4,4,0,0,0,4,4h80a4,4,0,0,0,4-4V64a43.71,43.71,0,0,0-4.83-20H200a4,4,0,0,1,4,4Z"}))]]),i=t.forwardRef((e,n)=>t.createElement(s.default,{ref:n,...e,weights:l}));i.displayName="ClipboardIcon";var c=e.i(38447);function u({code:e}){let t=async()=>{try{await navigator.clipboard.writeText(e),c.toast.success("Code successfully copied to clipboard")}catch(e){c.toast.error("Failed to copy code to clipboard")}};return(0,n.jsxs)("div",{className:"flex justify-between size-full relative group",children:[(0,n.jsx)(a.Typography,{variant:"subtitle3",className:"my-auto",children:(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"whitespace-break-spaces",children:e})})}),(0,n.jsx)(r.Button,{onClick:t,variant:"outlined",size:"square-md",className:"opacity-0 group-hover:opacity-100 transition-opacity","aria-label":"Copy code",children:(0,n.jsx)(i,{className:"size-4",weight:"duotone"})})]})}e.s(["CodeExample",()=>u],85313)},23582,e=>{"use strict";var n=e.i(2582);let r=(0,e.i(86900).forwardRef)(({src:e,title:r,size:a="md",className:t,...s},l)=>(0,n.jsx)("iframe",{ref:l,src:e,className:`${{sm:"min-h-[128px]",md:"min-h-[256px]",lg:"min-h-[450px]"}[a]} w-full overflow-hidden`,title:r,...s}));r.displayName="IframeExample",e.s(["IframeExample",0,r])},98273,e=>{"use strict";var n=e.i(2582);e.i(82419);var r=e.i(97779),a=e.i(52687),t=e.i(25377),s=e.i(77842),l=e.i(6266),i=e.i(45541),c=e.i(68869);let u=`import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
} from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New</MenubarItem>
          <MenubarItem>Open</MenubarItem>
          <MenubarSeparator />
          <MenubarItem variant="destructive">Delete</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
`;function d(){return(0,c.useSendThemeToIframes)(),(0,n.jsx)(r.Menubar,{children:(0,n.jsxs)(s.MenubarMenu,{children:[(0,n.jsx)(i.MenubarTrigger,{children:"File"}),(0,n.jsxs)(a.MenubarContent,{children:[(0,n.jsx)(t.MenubarItem,{children:"New"}),(0,n.jsx)(t.MenubarItem,{children:"Open"}),(0,n.jsx)(l.MenubarSeparator,{}),(0,n.jsx)(t.MenubarItem,{variant:"destructive",children:"Delete"})]})]})})}function o(){return(0,n.jsx)(d,{})}e.s(["CODE",0,u,"Example",()=>d,"default",()=>o])},73040,e=>{"use strict";var n=e.i(2582);e.i(82419);var r=e.i(97779),a=e.i(52687),t=e.i(25377),s=e.i(77842),l=e.i(6266),i=e.i(45541),c=e.i(68869);let u=`import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
} from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New</MenubarItem>
          <MenubarItem>Open</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Settings</MenubarItem>
          <MenubarItem inset>Preferences</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
`;function d(){return(0,c.useSendThemeToIframes)(),(0,n.jsx)(r.Menubar,{children:(0,n.jsxs)(s.MenubarMenu,{children:[(0,n.jsx)(i.MenubarTrigger,{children:"File"}),(0,n.jsxs)(a.MenubarContent,{children:[(0,n.jsx)(t.MenubarItem,{children:"New"}),(0,n.jsx)(t.MenubarItem,{children:"Open"}),(0,n.jsx)(l.MenubarSeparator,{}),(0,n.jsx)(t.MenubarItem,{inset:!0,children:"Settings"}),(0,n.jsx)(t.MenubarItem,{inset:!0,children:"Preferences"})]})]})})}function o(){return(0,n.jsx)(d,{})}e.s(["CODE",0,u,"Example",()=>d,"default",()=>o])},36771,e=>{"use strict";var n=e.i(2582);e.i(82419);var r=e.i(97779),a=e.i(52687),t=e.i(25377),s=e.i(77842),l=e.i(6266),i=e.i(45541),c=e.i(68869);let u=`import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
} from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem shortcut="⌘N">New</MenubarItem>
          <MenubarItem shortcut="⌘O">Open</MenubarItem>
          <MenubarItem shortcut="⌘S">Save</MenubarItem>
          <MenubarSeparator />
          <MenubarItem shortcut="⌘P">Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
`;function d(){return(0,c.useSendThemeToIframes)(),(0,n.jsx)(r.Menubar,{children:(0,n.jsxs)(s.MenubarMenu,{children:[(0,n.jsx)(i.MenubarTrigger,{children:"File"}),(0,n.jsxs)(a.MenubarContent,{children:[(0,n.jsx)(t.MenubarItem,{shortcut:"⌘N",children:"New"}),(0,n.jsx)(t.MenubarItem,{shortcut:"⌘O",children:"Open"}),(0,n.jsx)(t.MenubarItem,{shortcut:"⌘S",children:"Save"}),(0,n.jsx)(l.MenubarSeparator,{}),(0,n.jsx)(t.MenubarItem,{shortcut:"⌘P",children:"Print"})]})]})})}function o(){return(0,n.jsx)(d,{})}e.s(["CODE",0,u,"Example",()=>d,"default",()=>o])},21054,e=>{"use strict";var n=e.i(2582);e.i(82419);var r=e.i(97779),a=e.i(52687),t=e.i(25377),s=e.i(36371),l=e.i(77842),i=e.i(6266),c=e.i(45541),u=e.i(68869);let d=`import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarSeparator,
} from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>Recent Files</MenubarLabel>
          <MenubarItem>Document 1</MenubarItem>
          <MenubarItem>Document 2</MenubarItem>
          <MenubarSeparator />
          <MenubarLabel>Actions</MenubarLabel>
          <MenubarItem>New</MenubarItem>
          <MenubarItem>Open</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
`;function o(){return(0,u.useSendThemeToIframes)(),(0,n.jsx)(r.Menubar,{children:(0,n.jsxs)(l.MenubarMenu,{children:[(0,n.jsx)(c.MenubarTrigger,{children:"File"}),(0,n.jsxs)(a.MenubarContent,{children:[(0,n.jsx)(s.MenubarLabel,{children:"Recent Files"}),(0,n.jsx)(t.MenubarItem,{children:"Document 1"}),(0,n.jsx)(t.MenubarItem,{children:"Document 2"}),(0,n.jsx)(i.MenubarSeparator,{}),(0,n.jsx)(s.MenubarLabel,{children:"Actions"}),(0,n.jsx)(t.MenubarItem,{children:"New"}),(0,n.jsx)(t.MenubarItem,{children:"Open"})]})]})})}function m(){return(0,n.jsx)(o,{})}e.s(["CODE",0,d,"Example",()=>o,"default",()=>m])},86387,e=>{"use strict";var n=e.i(2582);e.i(82419);var r=e.i(97779),a=e.i(52687),t=e.i(25377),s=e.i(77842),l=e.i(45541);let i=`import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  Typography,
} from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New</MenubarItem>
            <MenubarItem>Open</MenubarItem>
            <MenubarItem>Save</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Undo</MenubarItem>
            <MenubarItem>Redo</MenubarItem>
            <MenubarItem>Cut</MenubarItem>
            <MenubarItem>Copy</MenubarItem>
            <MenubarItem>Paste</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Zoom In</MenubarItem>
            <MenubarItem>Zoom Out</MenubarItem>
            <MenubarItem>Full Screen</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
  );
}`;function c(){return(0,n.jsx)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:(0,n.jsxs)(r.Menubar,{children:[(0,n.jsxs)(s.MenubarMenu,{children:[(0,n.jsx)(l.MenubarTrigger,{children:"File"}),(0,n.jsxs)(a.MenubarContent,{children:[(0,n.jsx)(t.MenubarItem,{children:"New"}),(0,n.jsx)(t.MenubarItem,{children:"Open"}),(0,n.jsx)(t.MenubarItem,{children:"Save"})]})]}),(0,n.jsxs)(s.MenubarMenu,{children:[(0,n.jsx)(l.MenubarTrigger,{children:"Edit"}),(0,n.jsxs)(a.MenubarContent,{children:[(0,n.jsx)(t.MenubarItem,{children:"Undo"}),(0,n.jsx)(t.MenubarItem,{children:"Redo"}),(0,n.jsx)(t.MenubarItem,{children:"Cut"}),(0,n.jsx)(t.MenubarItem,{children:"Copy"}),(0,n.jsx)(t.MenubarItem,{children:"Paste"})]})]}),(0,n.jsxs)(s.MenubarMenu,{children:[(0,n.jsx)(l.MenubarTrigger,{children:"View"}),(0,n.jsxs)(a.MenubarContent,{children:[(0,n.jsx)(t.MenubarItem,{children:"Zoom In"}),(0,n.jsx)(t.MenubarItem,{children:"Zoom Out"}),(0,n.jsx)(t.MenubarItem,{children:"Full Screen"})]})]})]})})}function u(){return(0,n.jsx)(c,{})}e.s(["CODE",0,i,"MenubarExample",()=>c,"default",()=>u])},76713,e=>{"use strict";var n=e.i(2582);e.i(82419);var r=e.i(97779),a=e.i(52687),t=e.i(25377),s=e.i(77842),l=e.i(18370),i=e.i(25107),c=e.i(81878),u=e.i(60916),d=e.i(45541),o=e.i(68869);let m=`import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarPortal,
  MenubarSubContent,
} from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New</MenubarItem>
          <MenubarItem>Open</MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarPortal>
              <MenubarSubContent>
                <MenubarItem>Email</MenubarItem>
                <MenubarItem>Twitter</MenubarItem>
                <MenubarItem>Facebook</MenubarItem>
              </MenubarSubContent>
            </MenubarPortal>
          </MenubarSub>
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
`;function b(){return(0,o.useSendThemeToIframes)(),(0,n.jsx)(r.Menubar,{children:(0,n.jsxs)(s.MenubarMenu,{children:[(0,n.jsx)(d.MenubarTrigger,{children:"File"}),(0,n.jsxs)(a.MenubarContent,{children:[(0,n.jsx)(t.MenubarItem,{children:"New"}),(0,n.jsx)(t.MenubarItem,{children:"Open"}),(0,n.jsxs)(i.MenubarSub,{children:[(0,n.jsx)(u.MenubarSubTrigger,{children:"Share"}),(0,n.jsx)(l.MenubarPortal,{children:(0,n.jsxs)(c.MenubarSubContent,{children:[(0,n.jsx)(t.MenubarItem,{children:"Email"}),(0,n.jsx)(t.MenubarItem,{children:"Twitter"}),(0,n.jsx)(t.MenubarItem,{children:"Facebook"})]})})]}),(0,n.jsx)(t.MenubarItem,{children:"Print"})]})]})})}function h(){return(0,n.jsx)(b,{})}e.s(["CODE",0,m,"Example",()=>b,"default",()=>h])},8976,e=>{"use strict";var n=e.i(2582);e.i(82419);var r=e.i(19838),a=e.i(82738),t=e.i(13664),s=e.i(54668),l=e.i(76296),i=e.i(90305),c=e.i(62634),u=e.i(8926),d=e.i(74868),o=e.i(86900),m=e.i(85313),b=e.i(28131),h=e.i(23582),x=e.i(68456),M=e.i(24847),p=e.i(21810),g=e.i(72063),j=e.i(68869),C=e.i(98273),f=e.i(73040),I=e.i(21054),v=e.i(86387),E=e.i(36771),T=e.i(76713);function y(){let e=(0,o.useRef)(null),y=(0,o.useRef)(null),N=(0,o.useRef)(null),H=(0,o.useRef)(null),A=(0,o.useRef)(null),w=(0,o.useRef)(null);return(0,j.useSendThemeToIframes)(),(0,n.jsxs)(b.DocsLayout,{children:[(0,n.jsx)(M.PageHeader,{title:"Menubar",description:"Dropdown menu bar component with keyboard navigation and submenu support"}),(0,n.jsxs)(x.PageContent,{children:[(0,n.jsx)(g.PageSection,{title:"About Menubar",children:(0,n.jsx)("p",{className:"block",children:"Menubars are horizontal navigation menus that display dropdown menus when triggered. They provide a familiar pattern for organizing commands and actions in applications."})}),(0,n.jsxs)(g.PageSection,{title:"Installation",children:[(0,n.jsx)("p",{children:"Import the Menubar components from LSD:"}),(0,n.jsx)(l.Card,{className:"mt-(--lsd-spacing-base)",children:(0,n.jsx)(i.CardContent,{children:(0,n.jsx)(m.CodeExample,{code:`import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from '@nipsys/shadcn-lsd'

export default function MyComponent() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New</MenubarItem>
          <MenubarItem>Open</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}`})})})]}),(0,n.jsxs)(g.PageSection,{title:"Features",children:[(0,n.jsx)("p",{children:"Comprehensive features including submenus, destructive items, labels, separators, and keyboard navigation."}),(0,n.jsxs)(l.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,n.jsxs)(u.CardHeader,{children:[(0,n.jsx)(d.CardTitle,{children:"Basic Menubar"}),(0,n.jsx)(c.CardDescription,{children:"Simple menubar with dropdown menus"})]}),(0,n.jsxs)(i.CardContent,{children:[(0,n.jsx)(h.IframeExample,{ref:e,size:"md",src:"/examples/menubar",title:"Menubar Example"}),(0,n.jsx)(r.Accordion,{type:"single",collapsible:!0,children:(0,n.jsxs)(t.AccordionItem,{value:"code",children:[(0,n.jsx)(s.AccordionTrigger,{children:"View code"}),(0,n.jsx)(a.AccordionContent,{children:(0,n.jsx)(m.CodeExample,{code:v.CODE})})]})})]})]}),(0,n.jsxs)(l.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,n.jsxs)(u.CardHeader,{children:[(0,n.jsx)(d.CardTitle,{children:"Submenus"}),(0,n.jsx)(c.CardDescription,{children:"Nested menus for hierarchical organization"})]}),(0,n.jsxs)(i.CardContent,{children:[(0,n.jsx)(h.IframeExample,{ref:y,size:"md",src:"/examples/menubar/submenus",title:"Submenus Example"}),(0,n.jsx)(r.Accordion,{type:"single",collapsible:!0,children:(0,n.jsxs)(t.AccordionItem,{value:"code",children:[(0,n.jsx)(s.AccordionTrigger,{children:"View code"}),(0,n.jsx)(a.AccordionContent,{children:(0,n.jsx)(m.CodeExample,{code:T.CODE})})]})})]})]}),(0,n.jsxs)(l.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,n.jsxs)(u.CardHeader,{children:[(0,n.jsx)(d.CardTitle,{children:"Destructive Items"}),(0,n.jsx)(c.CardDescription,{children:"Dangerous actions with destructive styling"})]}),(0,n.jsxs)(i.CardContent,{children:[(0,n.jsx)(h.IframeExample,{ref:N,size:"md",src:"/examples/menubar/destructive",title:"Destructive Items Example"}),(0,n.jsx)(r.Accordion,{type:"single",collapsible:!0,children:(0,n.jsxs)(t.AccordionItem,{value:"code",children:[(0,n.jsx)(s.AccordionTrigger,{children:"View code"}),(0,n.jsx)(a.AccordionContent,{children:(0,n.jsx)(m.CodeExample,{code:C.CODE})})]})})]})]}),(0,n.jsxs)(l.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,n.jsxs)(u.CardHeader,{children:[(0,n.jsx)(d.CardTitle,{children:"Labels and Separators"}),(0,n.jsx)(c.CardDescription,{children:"Organize items with labels and visual separators"})]}),(0,n.jsxs)(i.CardContent,{children:[(0,n.jsx)(h.IframeExample,{ref:H,size:"md",src:"/examples/menubar/labels-separators",title:"Labels and Separators Example"}),(0,n.jsx)(r.Accordion,{type:"single",collapsible:!0,children:(0,n.jsxs)(t.AccordionItem,{value:"code",children:[(0,n.jsx)(s.AccordionTrigger,{children:"View code"}),(0,n.jsx)(a.AccordionContent,{children:(0,n.jsx)(m.CodeExample,{code:I.CODE})})]})})]})]}),(0,n.jsxs)(l.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,n.jsxs)(u.CardHeader,{children:[(0,n.jsx)(d.CardTitle,{children:"Inset Items"}),(0,n.jsx)(c.CardDescription,{children:"Items with inset padding for visual hierarchy"})]}),(0,n.jsxs)(i.CardContent,{children:[(0,n.jsx)(h.IframeExample,{ref:A,size:"md",src:"/examples/menubar/inset",title:"Inset Items Example"}),(0,n.jsx)(r.Accordion,{type:"single",collapsible:!0,children:(0,n.jsxs)(t.AccordionItem,{value:"code",children:[(0,n.jsx)(s.AccordionTrigger,{children:"View code"}),(0,n.jsx)(a.AccordionContent,{children:(0,n.jsx)(m.CodeExample,{code:f.CODE})})]})})]})]}),(0,n.jsxs)(l.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,n.jsxs)(u.CardHeader,{children:[(0,n.jsx)(d.CardTitle,{children:"Keyboard Shortcuts"}),(0,n.jsx)(c.CardDescription,{children:"Display keyboard shortcuts for quick access"})]}),(0,n.jsxs)(i.CardContent,{children:[(0,n.jsx)(h.IframeExample,{ref:w,size:"md",src:"/examples/menubar/shortcuts",title:"Keyboard Shortcuts Example"}),(0,n.jsx)(r.Accordion,{type:"single",collapsible:!0,children:(0,n.jsxs)(t.AccordionItem,{value:"code",children:[(0,n.jsx)(s.AccordionTrigger,{children:"View code"}),(0,n.jsx)(a.AccordionContent,{children:(0,n.jsx)(m.CodeExample,{code:E.CODE})})]})})]})]})]}),(0,n.jsxs)(g.PageSection,{title:"API Reference",children:[(0,n.jsx)("p",{children:"All available props for the Menubar components."}),(0,n.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)",children:[(0,n.jsxs)(l.Card,{children:[(0,n.jsxs)(u.CardHeader,{children:[(0,n.jsx)(d.CardTitle,{children:"Menubar"}),(0,n.jsx)(c.CardDescription,{children:"Root menubar container component"})]}),(0,n.jsxs)(i.CardContent,{children:[(0,n.jsxs)("p",{className:"block mb-(--lsd-spacing-smaller)",children:[(0,n.jsx)("strong",{children:"Type:"})," React.ComponentType"]}),(0,n.jsx)("p",{className:"mt-(--lsd-spacing-smaller)",children:"Container for all menubar menus"})]})]}),(0,n.jsxs)(l.Card,{children:[(0,n.jsxs)(u.CardHeader,{children:[(0,n.jsx)(d.CardTitle,{children:"MenubarMenu"}),(0,n.jsx)(c.CardDescription,{children:"Individual menu item in the menubar"})]}),(0,n.jsxs)(i.CardContent,{children:[(0,n.jsxs)("p",{className:"block mb-(--lsd-spacing-smaller)",children:[(0,n.jsx)("strong",{children:"Type:"})," React.ComponentType"]}),(0,n.jsx)("p",{className:"mt-(--lsd-spacing-smaller)",children:"Wraps a trigger and its content"})]})]}),(0,n.jsxs)(l.Card,{children:[(0,n.jsxs)(u.CardHeader,{children:[(0,n.jsx)(d.CardTitle,{children:"MenubarTrigger"}),(0,n.jsx)(c.CardDescription,{children:"Button that opens the menu"})]}),(0,n.jsxs)(i.CardContent,{children:[(0,n.jsxs)("p",{className:"block mb-(--lsd-spacing-smaller)",children:[(0,n.jsx)("strong",{children:"Type:"})," React.ComponentType"]}),(0,n.jsx)("p",{className:"mt-(--lsd-spacing-smaller)",children:"Click to open the dropdown menu"})]})]}),(0,n.jsxs)(l.Card,{children:[(0,n.jsxs)(u.CardHeader,{children:[(0,n.jsx)(d.CardTitle,{children:"MenubarContent"}),(0,n.jsx)(c.CardDescription,{children:"Dropdown menu content container"})]}),(0,n.jsxs)(i.CardContent,{children:[(0,n.jsxs)("p",{className:"block mb-(--lsd-spacing-smaller)",children:[(0,n.jsx)("strong",{children:"Type:"})," React.ComponentType"]}),(0,n.jsxs)("p",{className:"mb-(--lsd-spacing-smaller)",children:[(0,n.jsx)("strong",{children:"Options:"})," align (start, center, end)"]}),(0,n.jsxs)("p",{className:"mb-(--lsd-spacing-smaller)",children:[(0,n.jsx)("strong",{children:"Default:"})," start"]}),(0,n.jsx)("p",{className:"mt-(--lsd-spacing-smaller)",children:"Contains all menu items"})]})]}),(0,n.jsxs)(l.Card,{children:[(0,n.jsxs)(u.CardHeader,{children:[(0,n.jsx)(d.CardTitle,{children:"MenubarItem"}),(0,n.jsx)(c.CardDescription,{children:"Individual menu item"})]}),(0,n.jsxs)(i.CardContent,{children:[(0,n.jsxs)("p",{className:"block mb-(--lsd-spacing-smaller)",children:[(0,n.jsx)("strong",{children:"Type:"})," React.ComponentType"]}),(0,n.jsxs)("p",{className:"mb-(--lsd-spacing-smaller)",children:[(0,n.jsx)("strong",{children:"Options:"})," variant (default, destructive)"]}),(0,n.jsxs)("p",{className:"mb-(--lsd-spacing-smaller)",children:[(0,n.jsx)("strong",{children:"Default:"})," default"]}),(0,n.jsx)("p",{className:"mt-(--lsd-spacing-smaller)",children:"Clickable action item"})]})]}),(0,n.jsxs)(l.Card,{children:[(0,n.jsxs)(u.CardHeader,{children:[(0,n.jsx)(d.CardTitle,{children:"MenubarLabel"}),(0,n.jsx)(c.CardDescription,{children:"Non-interactive label text"})]}),(0,n.jsxs)(i.CardContent,{children:[(0,n.jsxs)("p",{className:"block mb-(--lsd-spacing-smaller)",children:[(0,n.jsx)("strong",{children:"Type:"})," React.ComponentType"]}),(0,n.jsx)("p",{className:"mt-(--lsd-spacing-smaller)",children:"Used to group related items"})]})]}),(0,n.jsxs)(l.Card,{children:[(0,n.jsxs)(u.CardHeader,{children:[(0,n.jsx)(d.CardTitle,{children:"MenubarSeparator"}),(0,n.jsx)(c.CardDescription,{children:"Visual separator line"})]}),(0,n.jsxs)(i.CardContent,{children:[(0,n.jsxs)("p",{className:"block mb-(--lsd-spacing-smaller)",children:[(0,n.jsx)("strong",{children:"Type:"})," React.ComponentType"]}),(0,n.jsx)("p",{className:"mt-(--lsd-spacing-smaller)",children:"Divides menu items visually"})]})]})]})]}),(0,n.jsxs)(g.PageSection,{title:"Accessibility",children:[(0,n.jsx)("p",{children:"The Menubar component follows accessibility best practices."}),(0,n.jsxs)(l.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,n.jsxs)(u.CardHeader,{children:[(0,n.jsx)(d.CardTitle,{children:"Keyboard Navigation"}),(0,n.jsx)(c.CardDescription,{children:"Full keyboard support for all interactions"})]}),(0,n.jsxs)(i.CardContent,{children:[(0,n.jsxs)("p",{className:"block mb-(--lsd-spacing-smaller)",children:["• ",(0,n.jsx)("strong",{children:"Tab"})," - Navigate to the menubar"]}),(0,n.jsxs)("p",{className:"block mb-(--lsd-spacing-smaller)",children:["• ",(0,n.jsx)("strong",{children:"Arrow Keys"})," - Navigate between menu items"]}),(0,n.jsxs)("p",{className:"block mb-(--lsd-spacing-smaller)",children:["• ",(0,n.jsx)("strong",{children:"Enter / Space"})," - Select menu item"]}),(0,n.jsxs)("p",{className:"block mb-(--lsd-spacing-smaller)",children:["• ",(0,n.jsx)("strong",{children:"Escape"})," - Close menu"]}),(0,n.jsxs)("p",{className:"block",children:["• ",(0,n.jsx)("strong",{children:"Shift + Tab"})," - Navigate to previous focusable element"]})]})]})]}),(0,n.jsx)(p.PageNavigation,{previous:{title:"Dropdown Menu",href:"/components/dropdown-menu"},next:{title:"Sidebar",href:"/components/sidebar"}})]})]})}e.s(["default",()=>y])}]);
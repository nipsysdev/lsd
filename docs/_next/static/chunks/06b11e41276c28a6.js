(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45251,e=>{"use strict";var r=e.i(75201),a=e.i(85082);let l=new Map([["bold",r.createElement(r.Fragment,null,r.createElement("path",{d:"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"}))],["duotone",r.createElement(r.Fragment,null,r.createElement("path",{d:"M216,128l-72,72V56Z",opacity:"0.2"}),r.createElement("path",{d:"M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"}))],["fill",r.createElement(r.Fragment,null,r.createElement("path",{d:"M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"}))],["light",r.createElement(r.Fragment,null,r.createElement("path",{d:"M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"}))],["regular",r.createElement(r.Fragment,null,r.createElement("path",{d:"M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"}))],["thin",r.createElement(r.Fragment,null,r.createElement("path",{d:"M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"}))]]),s=r.forwardRef((e,s)=>r.createElement(a.default,{ref:s,...e,weights:l}));s.displayName="ArrowRightIcon",e.s(["ArrowRightIcon",()=>s],45251)},49332,99311,11163,45010,48989,e=>{"use strict";var r=e.i(98134),a=e.i(75201);let l=(e,r)=>a=>{e.current!==a&&(e.current=a,r())};function s(e,{keys:r,deps:t=[e,r]}={}){let o=(0,a.useRef)();o.current=e.get();let n=(0,a.useCallback)(a=>{var s;let t;return l(o,a)(e.value),r?.length>0?(s=l(o,a),t=new Set(r).add(void 0),e.listen((e,r,a)=>{t.has(a)&&s(e,r,a)})):e.listen(l(o,a))},t),i=()=>o.current;return(0,a.useSyncExternalStore)(n,i,i)}var t=e.i(54219);e.i(82637);let o=[],n=0,i=0,c=e=>{let r=[],a={get:()=>(a.lc||a.listen(()=>{})(),a.value),lc:0,listen:e=>(a.lc=r.push(e),()=>{for(let r=n+4;r<o.length;)o[r]===e?o.splice(r,4):r+=4;let l=r.indexOf(e);~l&&(r.splice(l,1),--a.lc||a.off())}),notify(e,l){i++;let s=!o.length;for(let s of r)o.push(s,a.value,e,l);if(s){for(n=0;n<o.length;n+=4)o[n](o[n+1],o[n+2],o[n+3]);o.length=0}},off(){},set(e){let r=a.value;r!==e&&(a.value=e,a.notify(r))},subscribe(e){let r=a.listen(e);return e(a.value),r},value:e};return a},d=((e={})=>{let r=c(e);return r.setKey=function(e,a){let l=r.value;void 0===a&&e in r.value?(r.value={...r.value},delete r.value[e],r.notify(l,e)):r.value[e]!==a&&(r.value={...r.value,[e]:a},r.notify(l,e))},r})([]),m=c(null),h=null,p=new Map;function u(e){return[...e].sort((e,r)=>{let a=document.getElementById(e.title),l=document.getElementById(r.title);if(!a||!l)return 0;let s=a.compareDocumentPosition(l);return s&Node.DOCUMENT_POSITION_FOLLOWING?-1:s&Node.DOCUMENT_POSITION_PRECEDING?1:0})}e.i(26940);var x=e.i(61417);function g({items:e}){let a=s(m);return e.length?(0,r.jsx)("div",{className:"flex flex-col items-center absolute w-full",children:(0,r.jsxs)("div",{className:"fixed max-w-xs hidden 2xl:block",children:[(0,r.jsx)(x.Typography,{variant:"h6",color:"secondary",className:"mb-(--lsd-spacing-base)",children:"On this page"}),(0,r.jsx)("nav",{className:"flex flex-col gap-(--lsd-spacing-small)",children:e.map(e=>{let l=a===e.title,s=e.isChild?"pl-(--lsd-spacing-base)":"";return(0,r.jsx)("a",{href:`#${e.title}`,onClick:r=>{var a;let l;return a=e.title,r.preventDefault(),void((l=document.getElementById(a))&&l.scrollIntoView({behavior:"instant",block:"start"}))},className:`text-sm transition-colors ${l?"underline":"not-hover:text-(--lsd-text-secondary)"} ${s}`,children:e.title},e.title)})})]})}):null}function j({children:e}){let l=s(d);return(0,a.useEffect)(()=>(!function(){if(h)return;h=new IntersectionObserver(e=>{let r=e.filter(e=>e.isIntersecting);if(0===r.length)return;let a=r.reduce((e,r)=>{let a=e.boundingClientRect;return r.boundingClientRect.top<a.top?r:e});m.set(a.target.id)},{rootMargin:"-20% 0px -60% 0px",threshold:0});let e=u(d.get());d.set(e),e.forEach(e=>{let r=document.getElementById(e.title);r&&(h.observe(r),p.set(e.title,r))})}(),()=>void(h&&(h.disconnect(),h=null),p.clear(),d.set([]),m.set(null))),[]),(0,r.jsxs)("div",{className:"flex justify-between gap-x-(--lsd-spacing-large) p-(--lsd-spacing-largest)",children:[(0,r.jsx)("div",{className:"flex-auto hidden xl:block mr-(--lsd-spacing-large)"}),(0,r.jsx)("div",{className:"flex basis-4xl max-w-full mx-auto shrink flex-col",children:e}),(0,r.jsx)("div",{className:"flex-auto hidden xl:flex justify-center relative xl:ml-(--lsd-spacing-large)",children:l.length>0&&(0,r.jsx)(g,{items:l})}),(0,r.jsx)(t.Toaster,{})]})}function F({children:e}){return(0,r.jsx)("div",{className:"w-full flex-1 pb-16 *:data-[slot=alert]:first:mt-0 sm:pb-0",children:e})}function b({title:e,description:a}){return(0,r.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-small) mb-(--lsd-spacing-large)",children:[(0,r.jsx)(x.Typography,{variant:"h1",children:e}),a&&(0,r.jsx)(x.Typography,{variant:"subtitle1",color:"secondary",children:a})]})}e.s(["DocsLayout",()=>j],49332),e.s(["PageContent",()=>F],99311),e.s(["PageHeader",()=>b],11163);var f=e.i(22450),y=e.i(85082);let C=new Map([["bold",a.createElement(a.Fragment,null,a.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"}))],["duotone",a.createElement(a.Fragment,null,a.createElement("path",{d:"M112,56V200L40,128Z",opacity:"0.2"}),a.createElement("path",{d:"M216,120H120V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,120,200V136h96a8,8,0,0,0,0-16ZM104,180.69,51.31,128,104,75.31Z"}))],["fill",a.createElement(a.Fragment,null,a.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-13.66,5.66l-72-72a8,8,0,0,1,0-11.32l72-72A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"}))],["light",a.createElement(a.Fragment,null,a.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H54.49l61.75,61.76a6,6,0,1,1-8.48,8.48l-72-72a6,6,0,0,1,0-8.48l72-72a6,6,0,0,1,8.48,8.48L54.49,122H216A6,6,0,0,1,222,128Z"}))],["regular",a.createElement(a.Fragment,null,a.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"}))],["thin",a.createElement(a.Fragment,null,a.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H49.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,0,1,5.66,5.66L49.66,124H216A4,4,0,0,1,220,128Z"}))]]),v=a.forwardRef((e,r)=>a.createElement(y.default,{ref:r,...e,weights:C}));v.displayName="ArrowLeftIcon";var I=e.i(45251),w=e.i(99352);function T({previous:e,next:a}){return(0,r.jsxs)("div",{className:"grid grid-cols-2 my-(--lsd-spacing-larger) items-center",children:[e&&(0,r.jsx)("div",{children:(0,r.jsx)(f.Button,{className:"w-fit",variant:"outlined",asChild:!0,children:(0,r.jsxs)(w.default,{href:e.href,children:[(0,r.jsx)(v,{className:"mr-(--lsd-spacing-smaller)",weight:"duotone"}),e.title]})})}),a&&(0,r.jsx)("div",{className:"col-start-2 text-right",children:(0,r.jsx)(f.Button,{className:"w-fit",asChild:!0,children:(0,r.jsxs)(w.default,{href:a.href,children:[a.title,(0,r.jsx)(I.ArrowRightIcon,{className:"ml-(--lsd-spacing-smaller)",weight:"duotone"})]})})})]})}function N({title:e,isChild:l=!1,children:s}){(0,a.useEffect)(()=>(!function(e){let r=d.get();if(!r.some(r=>r.title===e.title)){let a=u([...r,e]);if(d.set(a),h){let r=document.getElementById(e.title);r&&(h.observe(r),p.set(e.title,r))}}}({title:e,isChild:l}),()=>{let r,a;r=d.get(),d.set(r.filter(r=>r.title!==e)),(a=p.get(e))&&h&&(h.unobserve(a),p.delete(e))}),[e,l]);let t=l?"h4":"h2",o=l?"mt-(--lsd-spacing-largest) pt-(--lsd-spacing-small)":"my-(--lsd-spacing-largest) py-(--lsd-spacing-small)";return(0,r.jsxs)("div",{id:e,className:`${o}`,children:[(0,r.jsx)(x.Typography,{variant:t,className:"mb-(--lsd-spacing-base)",children:e}),s]})}e.s(["PageNavigation",()=>T],45010),e.s(["PageSection",()=>N],48989)},90074,e=>{"use strict";var r=e.i(98134);e.i(26940);var a=e.i(22450),l=e.i(61417),s=e.i(75201),t=e.i(85082);let o=new Map([["bold",s.createElement(s.Fragment,null,s.createElement("path",{d:"M200,28H165.47a51.88,51.88,0,0,0-74.94,0H56A20,20,0,0,0,36,48V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V48A20,20,0,0,0,200,28ZM155.71,60H100.29a28,28,0,0,1,55.42,0ZM196,212H60V52H77.41A52.13,52.13,0,0,0,76,64v8A12,12,0,0,0,88,84h80a12,12,0,0,0,12-12V64a52.13,52.13,0,0,0-1.41-12H196Z"}))],["duotone",s.createElement(s.Fragment,null,s.createElement("path",{d:"M208,48V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96a39.83,39.83,0,0,0-8,24v8h80V64a39.83,39.83,0,0,0-8-24h40A8,8,0,0,1,208,48Z",opacity:"0.2"}),s.createElement("path",{d:"M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"}))],["fill",s.createElement(s.Fragment,null,s.createElement("path",{d:"M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Z"}))],["light",s.createElement(s.Fragment,null,s.createElement("path",{d:"M200,34H162.83a45.91,45.91,0,0,0-69.66,0H56A14,14,0,0,0,42,48V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V48A14,14,0,0,0,200,34Zm-72-4a34,34,0,0,1,34,34v2H94V64A34,34,0,0,1,128,30Zm74,186a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H85.67A45.77,45.77,0,0,0,82,64v8a6,6,0,0,0,6,6h80a6,6,0,0,0,6-6V64a45.77,45.77,0,0,0-3.67-18H200a2,2,0,0,1,2,2Z"}))],["regular",s.createElement(s.Fragment,null,s.createElement("path",{d:"M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"}))],["thin",s.createElement(s.Fragment,null,s.createElement("path",{d:"M200,36H161.92a44,44,0,0,0-67.84,0H56A12,12,0,0,0,44,48V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V48A12,12,0,0,0,200,36Zm-72-8a36,36,0,0,1,36,36v4H92V64A36,36,0,0,1,128,28Zm76,188a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H88.83A43.71,43.71,0,0,0,84,64v8a4,4,0,0,0,4,4h80a4,4,0,0,0,4-4V64a43.71,43.71,0,0,0-4.83-20H200a4,4,0,0,1,4,4Z"}))]]),n=s.forwardRef((e,r)=>s.createElement(t.default,{ref:r,...e,weights:o}));n.displayName="ClipboardIcon";var i=e.i(54219);function c({code:e}){let s=async()=>{try{await navigator.clipboard.writeText(e),i.toast.success("Code successfully copied to clipboard")}catch(e){i.toast.error("Failed to copy code to clipboard")}};return(0,r.jsxs)("div",{className:"flex justify-between size-full relative group",children:[(0,r.jsx)(l.Typography,{variant:"subtitle3",className:"my-auto",children:(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"whitespace-break-spaces",children:e})})}),(0,r.jsx)(a.Button,{onClick:s,variant:"outlined",size:"square-md",className:"opacity-0 group-hover:opacity-100 transition-opacity","aria-label":"Copy code",children:(0,r.jsx)(n,{className:"size-4",weight:"duotone"})})]})}e.s(["CodeExample",()=>c],90074)},10337,e=>{"use strict";var r=e.i(98134);let a=(0,e.i(75201).forwardRef)(({src:e,title:a,size:l="md",className:s,...t},o)=>(0,r.jsx)("iframe",{ref:o,src:e,className:`${{sm:"min-h-[128px]",md:"min-h-[256px]",lg:"min-h-[450px]"}[l]} w-full overflow-hidden`,title:a,...t}));a.displayName="IframeExample",e.s(["IframeExample",0,a])},46402,e=>{"use strict";var r=e.i(45171);e.s(["Input",()=>r.I])},29659,e=>{"use strict";var r=e.i(17964);e.s(["useForm",()=>r.u])},8230,e=>{"use strict";var r=e.i(98134);e.i(26940);var a=e.i(22450),l=e.i(83499),s=e.i(46466),t=e.i(61831),o=e.i(53439),n=e.i(34269),i=e.i(67825),c=e.i(9438),d=e.i(46402),m=e.i(29659),h=e.i(45173);let p=`import { Button, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Input, useForm } from '@nipsys/shadcn-lsd';

export function FormBasicExample() {
  const form = useForm({
    defaultValues: {
      username: '',
      email: '',
      bio: '',
    },
  });

  function onSubmit(data: { username: string; email: string; bio: string }) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=\\"space-y-(--lsd-spacing-base)\\" style={{ minWidth: 360 }}>
        <FormField
          control={form.control}
          name=\\"username\\"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder=\\"johndoe\\" {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name=\\"email\\"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type=\\"email\\" placeholder=\\"john@example.com\\" {...field} />
              </FormControl>
              <FormDescription>We'll send you updates to this email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name=\\"bio\\"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Input placeholder=\\"Tell us about yourself\\" {...field} />
              </FormControl>
              <FormDescription>Optional, but helps us personalize your experience.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type=\\"submit\\" className=\\"w-full\\">Submit</Button>
      </form>
    </Form>
  );
}`;function u(){(0,h.useSendThemeToIframes)();let e=(0,m.useForm)({defaultValues:{username:"",email:"",bio:""}});return(0,r.jsx)(l.Form,{...e,children:(0,r.jsxs)("form",{onSubmit:e.handleSubmit(function(e){}),className:"space-y-(--lsd-spacing-base)",style:{minWidth:360},children:[(0,r.jsx)(o.FormField,{control:e.control,name:"username",render:({field:e})=>(0,r.jsxs)(n.FormItem,{children:[(0,r.jsx)(i.FormLabel,{children:"Username"}),(0,r.jsx)(s.FormControl,{children:(0,r.jsx)(d.Input,{placeholder:"johndoe",...e})}),(0,r.jsx)(t.FormDescription,{children:"This is your public display name."}),(0,r.jsx)(c.FormMessage,{})]})}),(0,r.jsx)(o.FormField,{control:e.control,name:"email",render:({field:e})=>(0,r.jsxs)(n.FormItem,{children:[(0,r.jsx)(i.FormLabel,{children:"Email"}),(0,r.jsx)(s.FormControl,{children:(0,r.jsx)(d.Input,{type:"email",placeholder:"john@example.com",...e})}),(0,r.jsx)(t.FormDescription,{children:"We'll send you updates to this email."}),(0,r.jsx)(c.FormMessage,{})]})}),(0,r.jsx)(o.FormField,{control:e.control,name:"bio",render:({field:e})=>(0,r.jsxs)(n.FormItem,{children:[(0,r.jsx)(i.FormLabel,{children:"Bio"}),(0,r.jsx)(s.FormControl,{children:(0,r.jsx)(d.Input,{placeholder:"Tell us about yourself",...e})}),(0,r.jsx)(t.FormDescription,{children:"Optional, but helps us personalize your experience."}),(0,r.jsx)(c.FormMessage,{})]})}),(0,r.jsx)(a.Button,{type:"submit",className:"w-full",children:"Submit"})]})})}function x(){return(0,r.jsx)(u,{})}e.s(["CODE",0,p,"FormBasicExample",()=>u,"default",()=>x])},23079,e=>{"use strict";var r=e.i(98134);e.i(26940);var a=e.i(22450),l=e.i(83499),s=e.i(46466),t=e.i(61831),o=e.i(53439),n=e.i(34269),i=e.i(67825),c=e.i(9438),d=e.i(46402),m=e.i(29659),h=e.i(45173);let p=`import { Button, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Input, useForm } from '@nipsys/shadcn-lsd';

export function FormValidationExample() {
  const form = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  function onSubmit(data: { username: string; email: string; password: string; confirmPassword: string }) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=\\"space-y-(--lsd-spacing-base)\\" style={{ minWidth: 360 }}>
        <FormField
          control={form.control}
          name=\\"username\\"
          rules={{
            required: 'Username is required',
            minLength: { value: 3, message: 'Username must be at least 3 characters' },
            maxLength: { value: 20, message: 'Username must be at most 20 characters' },
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder=\\"johndoe\\" {...field} />
              </FormControl>
              <FormDescription>3-20 characters, alphanumeric only.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name=\\"email\\"
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type=\\"email\\" placeholder=\\"john@example.com\\" {...field} />
              </FormControl>
              <FormDescription>We'll send you updates to this email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name=\\"password\\"
          rules={{
            required: 'Password is required',
            minLength: { value: 8, message: 'Password must be at least 8 characters' },
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type=\\"password\\" placeholder=\\"••••••••\\" {...field} />
              </FormControl>
              <FormDescription>At least 8 characters.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name=\\"confirmPassword\\"
          rules={{
            required: 'Please confirm your password',
            validate: (value, values) => value === values.password || 'Passwords do not match',
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type=\\"password\\" placeholder=\\"••••••••\\" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type=\\"submit\\" className=\\"w-full\\">Create Account</Button>
      </form>
    </Form>
  );
}`;function u(){(0,h.useSendThemeToIframes)();let e=(0,m.useForm)({defaultValues:{username:"",email:"",password:"",confirmPassword:""}});return(0,r.jsx)(l.Form,{...e,children:(0,r.jsxs)("form",{onSubmit:e.handleSubmit(function(e){}),className:"space-y-(--lsd-spacing-base)",style:{minWidth:360},children:[(0,r.jsx)(o.FormField,{control:e.control,name:"username",rules:{required:"Username is required",minLength:{value:3,message:"Username must be at least 3 characters"},maxLength:{value:20,message:"Username must be at most 20 characters"}},render:({field:e})=>(0,r.jsxs)(n.FormItem,{children:[(0,r.jsx)(i.FormLabel,{children:"Username"}),(0,r.jsx)(s.FormControl,{children:(0,r.jsx)(d.Input,{placeholder:"johndoe",...e})}),(0,r.jsx)(t.FormDescription,{children:"3-20 characters, alphanumeric only."}),(0,r.jsx)(c.FormMessage,{})]})}),(0,r.jsx)(o.FormField,{control:e.control,name:"email",rules:{required:"Email is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}},render:({field:e})=>(0,r.jsxs)(n.FormItem,{children:[(0,r.jsx)(i.FormLabel,{children:"Email"}),(0,r.jsx)(s.FormControl,{children:(0,r.jsx)(d.Input,{type:"email",placeholder:"john@example.com",...e})}),(0,r.jsx)(t.FormDescription,{children:"We'll send you updates to this email."}),(0,r.jsx)(c.FormMessage,{})]})}),(0,r.jsx)(o.FormField,{control:e.control,name:"password",rules:{required:"Password is required",minLength:{value:8,message:"Password must be at least 8 characters"}},render:({field:e})=>(0,r.jsxs)(n.FormItem,{children:[(0,r.jsx)(i.FormLabel,{children:"Password"}),(0,r.jsx)(s.FormControl,{children:(0,r.jsx)(d.Input,{type:"password",placeholder:"••••••••",...e})}),(0,r.jsx)(t.FormDescription,{children:"At least 8 characters."}),(0,r.jsx)(c.FormMessage,{})]})}),(0,r.jsx)(o.FormField,{control:e.control,name:"confirmPassword",rules:{required:"Please confirm your password",validate:(e,r)=>e===r.password||"Passwords do not match"},render:({field:e})=>(0,r.jsxs)(n.FormItem,{children:[(0,r.jsx)(i.FormLabel,{children:"Confirm Password"}),(0,r.jsx)(s.FormControl,{children:(0,r.jsx)(d.Input,{type:"password",placeholder:"••••••••",...e})}),(0,r.jsx)(c.FormMessage,{})]})}),(0,r.jsx)(a.Button,{type:"submit",className:"w-full",children:"Create Account"})]})})}function x(){return(0,r.jsx)(u,{})}e.s(["CODE",0,p,"FormValidationExample",()=>u,"default",()=>x])},92723,e=>{"use strict";var r=e.i(98134);e.i(26940);var a=e.i(22450),l=e.i(39225),s=e.i(83499),t=e.i(46466),o=e.i(61831),n=e.i(53439),i=e.i(34269),c=e.i(67825),d=e.i(9438),m=e.i(46402),h=e.i(49773),p=e.i(84779),u=e.i(87300),x=e.i(1638),g=e.i(99397),j=e.i(30451),F=e.i(29659),b=e.i(45173);let f=`import { Button, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Switch, Checkbox, useForm } from '@nipsys/shadcn-lsd';

export function FormWithOtherComponentsExample() {
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      category: '',
      newsletter: false,
      terms: false,
    },
  });

  function onSubmit(data: { name: string; email: string; category: string; newsletter: boolean; terms: boolean }) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=\\"space-y-(--lsd-spacing-base)\\" style={{ minWidth: 360 }}>
        <FormField
          control={form.control}
          name=\\"name\\"
          rules={{ required: 'Name is required' }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder=\\"John Doe\\" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name=\\"email\\"
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type=\\"email\\" placeholder=\\"john@example.com\\" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name=\\"category\\"
          rules={{ required: 'Please select a category' }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder=\\"Select a category\\" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value=\\"technology\\">Technology</SelectItem>
                  <SelectItem value=\\"design\\">Design</SelectItem>
                  <SelectItem value=\\"business\\">Business</SelectItem>
                  <SelectItem value=\\"other\\">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>Choose the category that best describes your content.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name=\\"newsletter\\"
          render={({ field }) => (
            <FormItem className=\\"flex flex-row items-center justify-between rounded-lg border p-(--lsd-spacing-base) shadow-sm\\">
              <div className=\\"space-y-0.5\\">
                <FormLabel>Newsletter</FormLabel>
                <FormDescription>
                  Receive our weekly newsletter with updates and tips.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name=\\"terms\\"
          rules={{
            validate: (value) => value === true || 'You must accept the terms',
          }}
          render={({ field }) => (
            <FormItem className=\\"flex flex-row items-start space-x-3 space-y-0\\">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className=\\"space-y-1 leading-none\\">
                <FormLabel>
                  I agree to the terms and conditions
                </FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type=\\"submit\\" className=\\"w-full\\">Submit</Button>
      </form>
    </Form>
  );
}`;function y(){(0,b.useSendThemeToIframes)();let e=(0,F.useForm)({defaultValues:{name:"",email:"",category:"",newsletter:!1,terms:!1}});return(0,r.jsx)(s.Form,{...e,children:(0,r.jsxs)("form",{onSubmit:e.handleSubmit(function(e){}),className:"space-y-(--lsd-spacing-base)",style:{minWidth:360},children:[(0,r.jsx)(n.FormField,{control:e.control,name:"name",rules:{required:"Name is required"},render:({field:e})=>(0,r.jsxs)(i.FormItem,{children:[(0,r.jsx)(c.FormLabel,{children:"Full Name"}),(0,r.jsx)(t.FormControl,{children:(0,r.jsx)(m.Input,{placeholder:"John Doe",...e})}),(0,r.jsx)(d.FormMessage,{})]})}),(0,r.jsx)(n.FormField,{control:e.control,name:"email",rules:{required:"Email is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}},render:({field:e})=>(0,r.jsxs)(i.FormItem,{children:[(0,r.jsx)(c.FormLabel,{children:"Email"}),(0,r.jsx)(t.FormControl,{children:(0,r.jsx)(m.Input,{type:"email",placeholder:"john@example.com",...e})}),(0,r.jsx)(d.FormMessage,{})]})}),(0,r.jsx)(n.FormField,{control:e.control,name:"category",rules:{required:"Please select a category"},render:({field:e})=>(0,r.jsxs)(i.FormItem,{children:[(0,r.jsx)(c.FormLabel,{children:"Category"}),(0,r.jsxs)(h.Select,{onValueChange:e.onChange,defaultValue:e.value,children:[(0,r.jsx)(t.FormControl,{children:(0,r.jsx)(x.SelectTrigger,{children:(0,r.jsx)(g.SelectValue,{placeholder:"Select a category"})})}),(0,r.jsxs)(p.SelectContent,{children:[(0,r.jsx)(u.SelectItem,{value:"technology",children:"Technology"}),(0,r.jsx)(u.SelectItem,{value:"design",children:"Design"}),(0,r.jsx)(u.SelectItem,{value:"business",children:"Business"}),(0,r.jsx)(u.SelectItem,{value:"other",children:"Other"})]})]}),(0,r.jsx)(o.FormDescription,{children:"Choose the category that best describes your content."}),(0,r.jsx)(d.FormMessage,{})]})}),(0,r.jsx)(n.FormField,{control:e.control,name:"newsletter",render:({field:e})=>(0,r.jsxs)(i.FormItem,{className:"flex flex-row items-center justify-between rounded-lg border p-(--lsd-spacing-base) shadow-sm",children:[(0,r.jsxs)("div",{className:"space-y-0.5",children:[(0,r.jsx)(c.FormLabel,{children:"Newsletter"}),(0,r.jsx)(o.FormDescription,{children:"Receive our weekly newsletter with updates and tips."})]}),(0,r.jsx)(t.FormControl,{children:(0,r.jsx)(j.Switch,{checked:e.value,onCheckedChange:e.onChange})})]})}),(0,r.jsx)(n.FormField,{control:e.control,name:"terms",rules:{validate:e=>!0===e||"You must accept the terms"},render:({field:e})=>(0,r.jsxs)(i.FormItem,{className:"flex flex-row items-start space-x-3 space-y-0",children:[(0,r.jsx)(t.FormControl,{children:(0,r.jsx)(l.Checkbox,{checked:e.value,onCheckedChange:e.onChange})}),(0,r.jsx)("div",{className:"space-y-1 leading-none",children:(0,r.jsx)(c.FormLabel,{children:"I agree to the terms and conditions"})}),(0,r.jsx)(d.FormMessage,{})]})}),(0,r.jsx)(a.Button,{type:"submit",className:"w-full",children:"Submit"})]})})}function C(){return(0,r.jsx)(y,{})}e.s(["CODE",0,f,"FormWithOtherComponentsExample",()=>y,"default",()=>C])},26456,e=>{"use strict";var r=e.i(98134);e.i(26940);var a=e.i(71030),l=e.i(73463),s=e.i(2476),t=e.i(52683),o=e.i(46700),n=e.i(57845),i=e.i(80427),c=e.i(64439),d=e.i(93261),m=e.i(61417),h=e.i(75201),p=e.i(90074),u=e.i(49332),x=e.i(10337),g=e.i(99311),j=e.i(11163),F=e.i(45010),b=e.i(48989),f=e.i(45173);function y(){let y=(0,h.useRef)(null),C=(0,h.useRef)(null),v=(0,h.useRef)(null);return(0,f.useSendThemeToIframes)(),(0,r.jsxs)(u.DocsLayout,{children:[(0,r.jsx)(j.PageHeader,{title:"Form",description:"A flexible form component built on react-hook-form with accessible form fields"}),(0,r.jsxs)(g.PageContent,{children:[(0,r.jsx)(b.PageSection,{title:"About Form",children:(0,r.jsx)(m.Typography,{variant:"body1",className:"block",children:"The Form component provides a powerful and accessible way to build forms in React using react-hook-form. It combines validation, state management, and accessible markup into a cohesive experience that integrates seamlessly with LSD components."})}),(0,r.jsxs)(b.PageSection,{title:"Installation",children:[(0,r.jsx)(m.Typography,{variant:"body1",children:"react-hook-form is already installed. Import the Form components from LSD:"}),(0,r.jsx)(o.Card,{className:"mt-(--lsd-spacing-base)",children:(0,r.jsx)(n.CardContent,{children:(0,r.jsx)(p.CodeExample,{code:`import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useForm,
} from '@nipsys/shadcn-lsd'

export default function MyForm() {
  const form = useForm({
    defaultValues: {
      username: '',
      email: '',
    },
  });

  function onSubmit(data: any) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-(--lsd-spacing-base)">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="johndoe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}`})})})]}),(0,r.jsxs)(b.PageSection,{title:"Components Overview",children:[(0,r.jsx)(m.Typography,{variant:"body1",children:"The Form component is composed of several sub-components that work together:"}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)",children:[(0,r.jsxs)(o.Card,{children:[(0,r.jsxs)(c.CardHeader,{children:[(0,r.jsx)(d.CardTitle,{children:"Form"}),(0,r.jsx)(i.CardDescription,{children:"Form provider wrapper"})]}),(0,r.jsx)(n.CardContent,{children:(0,r.jsx)(m.Typography,{variant:"body2",className:"block",children:"Wraps your form with the FormProvider from react-hook-form, enabling context access for all form components."})})]}),(0,r.jsxs)(o.Card,{children:[(0,r.jsxs)(c.CardHeader,{children:[(0,r.jsx)(d.CardTitle,{children:"FormField"}),(0,r.jsx)(i.CardDescription,{children:"Connects form control to UI"})]}),(0,r.jsx)(n.CardContent,{children:(0,r.jsx)(m.Typography,{variant:"body2",className:"block",children:"Links a form field to the react-hook-form controller using the render prop pattern for maximum flexibility."})})]}),(0,r.jsxs)(o.Card,{children:[(0,r.jsxs)(c.CardHeader,{children:[(0,r.jsx)(d.CardTitle,{children:"FormItem"}),(0,r.jsx)(i.CardDescription,{children:"Field container wrapper"})]}),(0,r.jsx)(n.CardContent,{children:(0,r.jsx)(m.Typography,{variant:"body2",className:"block",children:"Provides the context for each form field, automatically generating unique IDs and managing spacing."})})]}),(0,r.jsxs)(o.Card,{children:[(0,r.jsxs)(c.CardHeader,{children:[(0,r.jsx)(d.CardTitle,{children:"FormLabel"}),(0,r.jsx)(i.CardDescription,{children:"Accessible label for field"})]}),(0,r.jsx)(n.CardContent,{children:(0,r.jsx)(m.Typography,{variant:"body2",className:"block",children:"Renders an accessible label that automatically associates with the form control and changes color on error."})})]}),(0,r.jsxs)(o.Card,{children:[(0,r.jsxs)(c.CardHeader,{children:[(0,r.jsx)(d.CardTitle,{children:"FormControl"}),(0,r.jsx)(i.CardDescription,{children:"Form control wrapper"})]}),(0,r.jsx)(n.CardContent,{children:(0,r.jsx)(m.Typography,{variant:"body2",className:"block",children:"Wraps your actual form input component using Radix UI's Slot component, passing all necessary attributes for accessibility."})})]}),(0,r.jsxs)(o.Card,{children:[(0,r.jsxs)(c.CardHeader,{children:[(0,r.jsx)(d.CardTitle,{children:"FormDescription"}),(0,r.jsx)(i.CardDescription,{children:"Helper text for field"})]}),(0,r.jsx)(n.CardContent,{children:(0,r.jsx)(m.Typography,{variant:"body2",className:"block",children:"Displays additional helper text below the form field to provide context or guidance to the user."})})]}),(0,r.jsxs)(o.Card,{children:[(0,r.jsxs)(c.CardHeader,{children:[(0,r.jsx)(d.CardTitle,{children:"FormMessage"}),(0,r.jsx)(i.CardDescription,{children:"Error or success message"})]}),(0,r.jsx)(n.CardContent,{children:(0,r.jsx)(m.Typography,{variant:"body2",className:"block",children:"Displays validation error messages (or custom messages) when a field has errors, styled with destructive colors."})})]}),(0,r.jsxs)(o.Card,{children:[(0,r.jsxs)(c.CardHeader,{children:[(0,r.jsx)(d.CardTitle,{children:"useFormField"}),(0,r.jsx)(i.CardDescription,{children:"Custom hook for form fields"})]}),(0,r.jsx)(n.CardContent,{children:(0,r.jsx)(m.Typography,{variant:"body2",className:"block",children:"Provides access to field state, IDs, and form context for custom form field implementations."})})]})]})]}),(0,r.jsxs)(b.PageSection,{title:"Basic Usage",children:[(0,r.jsx)(m.Typography,{variant:"body1",children:"A simple form with Input components and descriptions."}),(0,r.jsxs)(o.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,r.jsxs)(c.CardHeader,{children:[(0,r.jsx)(d.CardTitle,{children:"Basic Form"}),(0,r.jsx)(i.CardDescription,{children:"Simple form with basic fields"})]}),(0,r.jsxs)(n.CardContent,{children:[(0,r.jsx)(x.IframeExample,{ref:y,size:"md",src:"/examples/form/basic",title:"Form Basic Example"}),(0,r.jsx)(a.Accordion,{type:"single",collapsible:!0,children:(0,r.jsxs)(s.AccordionItem,{value:"code",children:[(0,r.jsx)(t.AccordionTrigger,{children:"View code"}),(0,r.jsx)(l.AccordionContent,{children:(0,r.jsx)(p.CodeExample,{code:e.r(8230).CODE})})]})})]})]})]}),(0,r.jsxs)(b.PageSection,{title:"Validation",children:[(0,r.jsx)(m.Typography,{variant:"body1",children:"Form with comprehensive validation using react-hook-form rules."}),(0,r.jsxs)(o.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,r.jsxs)(c.CardHeader,{children:[(0,r.jsx)(d.CardTitle,{children:"Validation Form"}),(0,r.jsx)(i.CardDescription,{children:"Form with validation rules and error handling"})]}),(0,r.jsxs)(n.CardContent,{children:[(0,r.jsx)(x.IframeExample,{ref:C,size:"md",src:"/examples/form/validation",title:"Form Validation Example"}),(0,r.jsx)(a.Accordion,{type:"single",collapsible:!0,children:(0,r.jsxs)(s.AccordionItem,{value:"code",children:[(0,r.jsx)(t.AccordionTrigger,{children:"View code"}),(0,r.jsx)(l.AccordionContent,{children:(0,r.jsx)(p.CodeExample,{code:e.r(23079).CODE})})]})})]})]})]}),(0,r.jsxs)(b.PageSection,{title:"Integration with Other Components",children:[(0,r.jsx)(m.Typography,{variant:"body1",children:"Form showing integration with various LSD components like Select, Switch, and Checkbox."}),(0,r.jsxs)(o.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,r.jsxs)(c.CardHeader,{children:[(0,r.jsx)(d.CardTitle,{children:"Form with Multiple Components"}),(0,r.jsx)(i.CardDescription,{children:"Integration with Input, Select, Switch, and Checkbox"})]}),(0,r.jsxs)(n.CardContent,{children:[(0,r.jsx)(x.IframeExample,{ref:v,size:"lg",src:"/examples/form/with-other-components",title:"Form with Other Components Example"}),(0,r.jsx)(a.Accordion,{type:"single",collapsible:!0,children:(0,r.jsxs)(s.AccordionItem,{value:"code",children:[(0,r.jsx)(t.AccordionTrigger,{children:"View code"}),(0,r.jsx)(l.AccordionContent,{children:(0,r.jsx)(p.CodeExample,{code:e.r(92723).CODE})})]})})]})]})]}),(0,r.jsxs)(b.PageSection,{title:"API Reference",children:[(0,r.jsx)(m.Typography,{variant:"body1",children:"All available props for the Form components."}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)",children:[(0,r.jsxs)(o.Card,{children:[(0,r.jsxs)(c.CardHeader,{children:[(0,r.jsx)(d.CardTitle,{children:"Form"}),(0,r.jsx)(i.CardDescription,{children:"Form provider component"})]}),(0,r.jsxs)(n.CardContent,{children:[(0,r.jsxs)(m.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,r.jsx)("strong",{children:"Type:"})," FormProvider from react-hook-form"]}),(0,r.jsxs)(m.Typography,{variant:"label1",className:"block",children:[(0,r.jsx)("strong",{children:"Props:"})," All methods from useForm()"]}),(0,r.jsxs)(m.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:["Accepts the entire form object returned by useForm(","{...}",") via spread operator."]})]})]}),(0,r.jsxs)(o.Card,{children:[(0,r.jsxs)(c.CardHeader,{children:[(0,r.jsx)(d.CardTitle,{children:"FormField"}),(0,r.jsx)(i.CardDescription,{children:"Form field connector"})]}),(0,r.jsxs)(n.CardContent,{children:[(0,r.jsxs)(m.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,r.jsx)("strong",{children:"control:"})," Control (required)"]}),(0,r.jsxs)(m.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,r.jsx)("strong",{children:"name:"})," string (required)"]}),(0,r.jsxs)(m.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,r.jsx)("strong",{children:"render:"})," (field, fieldState, formState) → ReactNode (required)"]}),(0,r.jsx)(m.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:"Use the rules prop to pass validation rules to the controller."})]})]}),(0,r.jsxs)(o.Card,{children:[(0,r.jsxs)(c.CardHeader,{children:[(0,r.jsx)(d.CardTitle,{children:"FormItem"}),(0,r.jsx)(i.CardDescription,{children:"Form field container"})]}),(0,r.jsxs)(n.CardContent,{children:[(0,r.jsxs)(m.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,r.jsx)("strong",{children:"Type:"})," HTMLDivAttributes"]}),(0,r.jsxs)(m.Typography,{variant:"label1",className:"block",children:[(0,r.jsx)("strong",{children:"Props:"})," ...props"]}),(0,r.jsx)(m.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:"Accepts all standard HTML div attributes. Styled with CSS Grid for proper spacing."})]})]}),(0,r.jsxs)(o.Card,{children:[(0,r.jsxs)(c.CardHeader,{children:[(0,r.jsx)(d.CardTitle,{children:"FormLabel"}),(0,r.jsx)(i.CardDescription,{children:"Form field label"})]}),(0,r.jsxs)(n.CardContent,{children:[(0,r.jsxs)(m.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,r.jsx)("strong",{children:"Type:"})," LabelProps (Radix UI Label)"]}),(0,r.jsxs)(m.Typography,{variant:"label1",className:"block",children:[(0,r.jsx)("strong",{children:"Props:"})," ...props"]}),(0,r.jsx)(m.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:"Automatically receives htmlFor, data-error aria attributes. Supports all Label variants and sizes."})]})]}),(0,r.jsxs)(o.Card,{children:[(0,r.jsxs)(c.CardHeader,{children:[(0,r.jsx)(d.CardTitle,{children:"FormControl"}),(0,r.jsx)(i.CardDescription,{children:"Form control wrapper"})]}),(0,r.jsxs)(n.CardContent,{children:[(0,r.jsxs)(m.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,r.jsx)("strong",{children:"Type:"})," SlotProps (Radix UI Slot)"]}),(0,r.jsxs)(m.Typography,{variant:"label1",className:"block",children:[(0,r.jsx)("strong",{children:"Props:"})," ...props"]}),(0,r.jsx)(m.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:"Automatically applies id, aria-describedby, aria-invalid attributes to children."})]})]}),(0,r.jsxs)(o.Card,{children:[(0,r.jsxs)(c.CardHeader,{children:[(0,r.jsx)(d.CardTitle,{children:"FormDescription"}),(0,r.jsx)(i.CardDescription,{children:"Helper text component"})]}),(0,r.jsxs)(n.CardContent,{children:[(0,r.jsxs)(m.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,r.jsx)("strong",{children:"Type:"})," HTMLParagraphAttributes"]}),(0,r.jsxs)(m.Typography,{variant:"label1",className:"block",children:[(0,r.jsx)("strong",{children:"Props:"})," ...props"]}),(0,r.jsx)(m.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:"Automatically receives id attribute. Styled with muted foreground color and label typography."})]})]}),(0,r.jsxs)(o.Card,{children:[(0,r.jsxs)(c.CardHeader,{children:[(0,r.jsx)(d.CardTitle,{children:"FormMessage"}),(0,r.jsx)(i.CardDescription,{children:"Error message component"})]}),(0,r.jsxs)(n.CardContent,{children:[(0,r.jsxs)(m.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,r.jsx)("strong",{children:"Type:"})," HTMLParagraphAttributes"]}),(0,r.jsxs)(m.Typography,{variant:"label1",className:"block",children:[(0,r.jsx)("strong",{children:"Props:"})," children?: ReactNode, ...props"]}),(0,r.jsx)(m.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:"Automatically receives id attribute. Renders null if no error exists."})]})]})]})]}),(0,r.jsxs)(b.PageSection,{title:"Accessibility",children:[(0,r.jsx)(m.Typography,{variant:"body1",children:"The Form component follows accessibility best practices with full ARIA support."}),(0,r.jsxs)(o.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,r.jsxs)(c.CardHeader,{children:[(0,r.jsx)(d.CardTitle,{children:"Semantic Markup"}),(0,r.jsx)(i.CardDescription,{children:"Proper HTML structure for accessibility"})]}),(0,r.jsxs)(n.CardContent,{children:[(0,r.jsx)(m.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:"- Labels are automatically associated with form controls using htmlFor"}),(0,r.jsx)(m.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:"- Form controls receive proper id attributes generated by FormItem"}),(0,r.jsx)(m.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:"- Helper and error text are linked via aria-describedby"}),(0,r.jsx)(m.Typography,{variant:"body2",className:"block",children:'- Error states are indicated with aria-invalid="true"'})]})]}),(0,r.jsxs)(o.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,r.jsxs)(c.CardHeader,{children:[(0,r.jsx)(d.CardTitle,{children:"Keyboard Navigation"}),(0,r.jsx)(i.CardDescription,{children:"Full keyboard support"})]}),(0,r.jsxs)(n.CardContent,{children:[(0,r.jsx)(m.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:"- Tab - Navigate through form fields"}),(0,r.jsx)(m.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:"- Shift + Tab - Navigate to previous form field"}),(0,r.jsx)(m.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:"- Enter - Submit form when in a form"}),(0,r.jsx)(m.Typography,{variant:"body2",className:"block",children:"All nested LSD components (Input, Select, Checkbox, Switch) support their full keyboard navigation within the form context."})]})]}),(0,r.jsxs)(o.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,r.jsxs)(c.CardHeader,{children:[(0,r.jsx)(d.CardTitle,{children:"ARIA Attributes"}),(0,r.jsx)(i.CardDescription,{children:"Automatic ARIA attribute management"})]}),(0,r.jsxs)(n.CardContent,{children:[(0,r.jsx)(m.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:"- aria-describedby - Links form control to helper and error text"}),(0,r.jsx)(m.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:"- aria-invalid - Indicates field has validation errors"}),(0,r.jsx)(m.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:"- data-error - Data attribute for styling error states"}),(0,r.jsx)(m.Typography,{variant:"body2",className:"block",children:"These attributes are automatically managed by the Form components, but you can add additional ARIA attributes as needed."})]})]})]}),(0,r.jsx)(F.PageNavigation,{previous:{title:"Label",href:"/components/label"},next:{title:"Select",href:"/components/select"}})]})]})}e.s(["default",()=>y])}]);
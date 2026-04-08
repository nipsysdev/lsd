(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var r=e.i(75201);function a(){var e;let a;e=e=>{let r=document.documentElement;e.theme&&("dark"===e.theme?r.classList.add("dark"):r.classList.remove("dark")),e.accent&&("monochrome"===e.accent?r.removeAttribute("data-theme"):r.setAttribute("data-theme",e.accent)),e.font&&(r.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?r.classList.add("font-serif"):"sans-serif"===e.font?r.classList.add("font-sans"):"monospace"===e.font&&r.classList.add("font-mono"))},a=r.useRef(e),r.useEffect(()=>{a.current=e},[e]),r.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&a.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>a],45173)},90074,e=>{"use strict";var r=e.i(98134);e.i(26940);var a=e.i(71030),s=e.i(73463),o=e.i(2476),l=e.i(52683),t=e.i(59038),n=e.i(6896),i=e.i(75201),m=e.i(85082);let d=new Map([["bold",i.createElement(i.Fragment,null,i.createElement("path",{d:"M200,28H165.47a51.88,51.88,0,0,0-74.94,0H56A20,20,0,0,0,36,48V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V48A20,20,0,0,0,200,28ZM155.71,60H100.29a28,28,0,0,1,55.42,0ZM196,212H60V52H77.41A52.13,52.13,0,0,0,76,64v8A12,12,0,0,0,88,84h80a12,12,0,0,0,12-12V64a52.13,52.13,0,0,0-1.41-12H196Z"}))],["duotone",i.createElement(i.Fragment,null,i.createElement("path",{d:"M208,48V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96a39.83,39.83,0,0,0-8,24v8h80V64a39.83,39.83,0,0,0-8-24h40A8,8,0,0,1,208,48Z",opacity:"0.2"}),i.createElement("path",{d:"M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"}))],["fill",i.createElement(i.Fragment,null,i.createElement("path",{d:"M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Z"}))],["light",i.createElement(i.Fragment,null,i.createElement("path",{d:"M200,34H162.83a45.91,45.91,0,0,0-69.66,0H56A14,14,0,0,0,42,48V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V48A14,14,0,0,0,200,34Zm-72-4a34,34,0,0,1,34,34v2H94V64A34,34,0,0,1,128,30Zm74,186a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H85.67A45.77,45.77,0,0,0,82,64v8a6,6,0,0,0,6,6h80a6,6,0,0,0,6-6V64a45.77,45.77,0,0,0-3.67-18H200a2,2,0,0,1,2,2Z"}))],["regular",i.createElement(i.Fragment,null,i.createElement("path",{d:"M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"}))],["thin",i.createElement(i.Fragment,null,i.createElement("path",{d:"M200,36H161.92a44,44,0,0,0-67.84,0H56A12,12,0,0,0,44,48V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V48A12,12,0,0,0,200,36Zm-72-8a36,36,0,0,1,36,36v4H92V64A36,36,0,0,1,128,28Zm76,188a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H88.83A43.71,43.71,0,0,0,84,64v8a4,4,0,0,0,4,4h80a4,4,0,0,0,4-4V64a43.71,43.71,0,0,0-4.83-20H200a4,4,0,0,1,4,4Z"}))]]),c=i.forwardRef((e,r)=>i.createElement(m.default,{ref:r,...e,weights:d}));c.displayName="ClipboardIcon";let h=new Map([["bold",i.createElement(i.Fragment,null,i.createElement("path",{d:"M71.68,97.22,34.74,128l36.94,30.78a12,12,0,1,1-15.36,18.44l-48-40a12,12,0,0,1,0-18.44l48-40A12,12,0,0,1,71.68,97.22Zm176,21.56-48-40a12,12,0,1,0-15.36,18.44L221.26,128l-36.94,30.78a12,12,0,1,0,15.36,18.44l48-40a12,12,0,0,0,0-18.44ZM164.1,28.72a12,12,0,0,0-15.38,7.18l-64,176a12,12,0,0,0,7.18,15.37A11.79,11.79,0,0,0,96,228a12,12,0,0,0,11.28-7.9l64-176A12,12,0,0,0,164.1,28.72Z"}))],["duotone",i.createElement(i.Fragment,null,i.createElement("path",{d:"M240,128l-48,40H64L16,128,64,88H192Z",opacity:"0.2"}),i.createElement("path",{d:"M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"}))],["fill",i.createElement(i.Fragment,null,i.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM92.8,145.6a8,8,0,1,1-9.6,12.8l-32-24a8,8,0,0,1,0-12.8l32-24a8,8,0,0,1,9.6,12.8L69.33,128Zm58.89-71.4-32,112a8,8,0,1,1-15.38-4.4l32-112a8,8,0,0,1,15.38,4.4Zm53.11,60.2-32,24a8,8,0,0,1-9.6-12.8L186.67,128,163.2,110.4a8,8,0,1,1,9.6-12.8l32,24a8,8,0,0,1,0,12.8Z"}))],["light",i.createElement(i.Fragment,null,i.createElement("path",{d:"M67.84,92.61,25.37,128l42.47,35.39a6,6,0,1,1-7.68,9.22l-48-40a6,6,0,0,1,0-9.22l48-40a6,6,0,0,1,7.68,9.22Zm176,30.78-48-40a6,6,0,1,0-7.68,9.22L230.63,128l-42.47,35.39a6,6,0,1,0,7.68,9.22l48-40a6,6,0,0,0,0-9.22Zm-81.79-89A6,6,0,0,0,154.36,38l-64,176A6,6,0,0,0,94,221.64a6.15,6.15,0,0,0,2,.36,6,6,0,0,0,5.64-3.95l64-176A6,6,0,0,0,162.05,34.36Z"}))],["regular",i.createElement(i.Fragment,null,i.createElement("path",{d:"M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"}))],["thin",i.createElement(i.Fragment,null,i.createElement("path",{d:"M66.56,91.07,22.25,128l44.31,36.93A4,4,0,0,1,64,172a3.94,3.94,0,0,1-2.56-.93l-48-40a4,4,0,0,1,0-6.14l48-40a4,4,0,0,1,5.12,6.14Zm176,33.86-48-40a4,4,0,1,0-5.12,6.14L233.75,128l-44.31,36.93a4,4,0,1,0,5.12,6.14l48-40a4,4,0,0,0,0-6.14ZM161.37,36.24a4,4,0,0,0-5.13,2.39l-64,176a4,4,0,0,0,2.39,5.13A4.12,4.12,0,0,0,96,220a4,4,0,0,0,3.76-2.63l64-176A4,4,0,0,0,161.37,36.24Z"}))]]),p=i.forwardRef((e,r)=>i.createElement(m.default,{ref:r,...e,weights:h}));p.displayName="CodeIcon";var u=e.i(54219);function x({code:e,useAccordion:i=!0}){let m=async()=>{try{await navigator.clipboard.writeText(e),u.toast.success("Code successfully copied to clipboard")}catch(e){u.toast.error("Failed to copy code to clipboard")}},d=(0,r.jsxs)("div",{className:"flex justify-between size-full relative group",children:[(0,r.jsx)(n.Typography,{variant:"subtitle3",className:"my-auto",children:(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"whitespace-break-spaces",children:e})})}),(0,r.jsx)(t.Button,{onClick:m,variant:"outlined",size:"square-md",className:"opacity-0 group-hover:opacity-100 transition-opacity","aria-label":"Copy code",children:(0,r.jsx)(c,{className:"size-4",weight:"duotone"})})]});return i?(0,r.jsx)(a.Accordion,{type:"single",collapsible:!0,children:(0,r.jsxs)(o.AccordionItem,{value:"code",children:[(0,r.jsx)(l.AccordionTrigger,{children:(0,r.jsxs)("div",{className:"flex items-center justify-center gap-x-(--lsd-spacing-base)",children:[(0,r.jsx)(p,{weight:"duotone",className:"size-5"})," View code"]})}),(0,r.jsx)(s.AccordionContent,{children:d})]})}):d}e.s(["CodeExample",()=>x],90074)},10337,e=>{"use strict";var r=e.i(98134);let a=(0,e.i(75201).forwardRef)(({src:e,title:a,size:s="md",className:o,...l},t)=>(0,r.jsx)("iframe",{ref:t,src:e,className:`${{sm:"min-h-[128px]",md:"min-h-[256px]",lg:"min-h-[450px]",xl:"min-h-[600px]"}[s]} w-full overflow-hidden`,title:a,...l}));a.displayName="IframeExample",e.s(["IframeExample",0,a])},29659,e=>{"use strict";var r=e.i(17964);e.s(["useForm",()=>r.u])},8230,e=>{"use strict";var r=e.i(98134);e.i(26940);var a=e.i(59038),s=e.i(83499),o=e.i(46466),l=e.i(61831),t=e.i(53439),n=e.i(34269),i=e.i(67825),m=e.i(9438),d=e.i(23155),c=e.i(29659),h=e.i(45173);let p=`import { Button, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Input, useForm } from '@nipsys/shadcn-lsd';

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
}`;function u(){(0,h.useSendThemeToIframes)();let e=(0,c.useForm)({defaultValues:{username:"",email:"",bio:""}});return(0,r.jsx)(s.Form,{...e,children:(0,r.jsxs)("form",{onSubmit:e.handleSubmit(function(e){}),className:"space-y-(--lsd-spacing-base)",style:{minWidth:360},children:[(0,r.jsx)(t.FormField,{control:e.control,name:"username",render:({field:e})=>(0,r.jsxs)(n.FormItem,{children:[(0,r.jsx)(i.FormLabel,{children:"Username"}),(0,r.jsx)(o.FormControl,{children:(0,r.jsx)(d.Input,{placeholder:"johndoe",...e})}),(0,r.jsx)(l.FormDescription,{children:"This is your public display name."}),(0,r.jsx)(m.FormMessage,{})]})}),(0,r.jsx)(t.FormField,{control:e.control,name:"email",render:({field:e})=>(0,r.jsxs)(n.FormItem,{children:[(0,r.jsx)(i.FormLabel,{children:"Email"}),(0,r.jsx)(o.FormControl,{children:(0,r.jsx)(d.Input,{type:"email",placeholder:"john@example.com",...e})}),(0,r.jsx)(l.FormDescription,{children:"We'll send you updates to this email."}),(0,r.jsx)(m.FormMessage,{})]})}),(0,r.jsx)(t.FormField,{control:e.control,name:"bio",render:({field:e})=>(0,r.jsxs)(n.FormItem,{children:[(0,r.jsx)(i.FormLabel,{children:"Bio"}),(0,r.jsx)(o.FormControl,{children:(0,r.jsx)(d.Input,{placeholder:"Tell us about yourself",...e})}),(0,r.jsx)(l.FormDescription,{children:"Optional, but helps us personalize your experience."}),(0,r.jsx)(m.FormMessage,{})]})}),(0,r.jsx)(a.Button,{type:"submit",className:"w-full",children:"Submit"})]})})}function x(){return(0,r.jsx)(u,{})}e.s(["CODE",0,p,"FormBasicExample",()=>u,"default",()=>x])},23079,e=>{"use strict";var r=e.i(98134);e.i(26940);var a=e.i(59038),s=e.i(83499),o=e.i(46466),l=e.i(61831),t=e.i(53439),n=e.i(34269),i=e.i(67825),m=e.i(9438),d=e.i(23155),c=e.i(29659),h=e.i(45173);let p=`import { Button, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Input, useForm } from '@nipsys/shadcn-lsd';

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
}`;function u(){(0,h.useSendThemeToIframes)();let e=(0,c.useForm)({defaultValues:{username:"",email:"",password:"",confirmPassword:""}});return(0,r.jsx)(s.Form,{...e,children:(0,r.jsxs)("form",{onSubmit:e.handleSubmit(function(e){}),className:"space-y-(--lsd-spacing-base)",style:{minWidth:360},children:[(0,r.jsx)(t.FormField,{control:e.control,name:"username",rules:{required:"Username is required",minLength:{value:3,message:"Username must be at least 3 characters"},maxLength:{value:20,message:"Username must be at most 20 characters"}},render:({field:e})=>(0,r.jsxs)(n.FormItem,{children:[(0,r.jsx)(i.FormLabel,{children:"Username"}),(0,r.jsx)(o.FormControl,{children:(0,r.jsx)(d.Input,{placeholder:"johndoe",...e})}),(0,r.jsx)(l.FormDescription,{children:"3-20 characters, alphanumeric only."}),(0,r.jsx)(m.FormMessage,{})]})}),(0,r.jsx)(t.FormField,{control:e.control,name:"email",rules:{required:"Email is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}},render:({field:e})=>(0,r.jsxs)(n.FormItem,{children:[(0,r.jsx)(i.FormLabel,{children:"Email"}),(0,r.jsx)(o.FormControl,{children:(0,r.jsx)(d.Input,{type:"email",placeholder:"john@example.com",...e})}),(0,r.jsx)(l.FormDescription,{children:"We'll send you updates to this email."}),(0,r.jsx)(m.FormMessage,{})]})}),(0,r.jsx)(t.FormField,{control:e.control,name:"password",rules:{required:"Password is required",minLength:{value:8,message:"Password must be at least 8 characters"}},render:({field:e})=>(0,r.jsxs)(n.FormItem,{children:[(0,r.jsx)(i.FormLabel,{children:"Password"}),(0,r.jsx)(o.FormControl,{children:(0,r.jsx)(d.Input,{type:"password",placeholder:"••••••••",...e})}),(0,r.jsx)(l.FormDescription,{children:"At least 8 characters."}),(0,r.jsx)(m.FormMessage,{})]})}),(0,r.jsx)(t.FormField,{control:e.control,name:"confirmPassword",rules:{required:"Please confirm your password",validate:(e,r)=>e===r.password||"Passwords do not match"},render:({field:e})=>(0,r.jsxs)(n.FormItem,{children:[(0,r.jsx)(i.FormLabel,{children:"Confirm Password"}),(0,r.jsx)(o.FormControl,{children:(0,r.jsx)(d.Input,{type:"password",placeholder:"••••••••",...e})}),(0,r.jsx)(m.FormMessage,{})]})}),(0,r.jsx)(a.Button,{type:"submit",className:"w-full",children:"Create Account"})]})})}function x(){return(0,r.jsx)(u,{})}e.s(["CODE",0,p,"FormValidationExample",()=>u,"default",()=>x])},92723,e=>{"use strict";var r=e.i(98134);e.i(26940);var a=e.i(59038),s=e.i(46700),o=e.i(57845),l=e.i(39225),t=e.i(83499),n=e.i(46466),i=e.i(61831),m=e.i(53439),d=e.i(34269),c=e.i(67825),h=e.i(9438),p=e.i(23155),u=e.i(49773),x=e.i(84779),F=e.i(87300),j=e.i(1638),g=e.i(99397),b=e.i(30451),y=e.i(29659),f=e.i(45173);let C=`import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Switch, Checkbox, useForm } from '@nipsys/shadcn-lsd';

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
      <form onSubmit={form.handleSubmit(onSubmit)} className=\\"space-y-(--lsd-spacing-larger)\\" style={{ minWidth: 360 }}>
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
            <Card>
              <CardContent className=\\"flex flex-col gap-y-(--lsd-spacing-small) items-end\\">
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
              </CardContent>
            </Card>
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
              <div className=\\"flex gap-x-(--lsd-spacing-smaller)\\">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel>I agree to the terms and conditions</FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type=\\"submit\\" className=\\"w-full\\">Submit</Button>
      </form>
    </Form>
  );
}`;function v(){(0,f.useSendThemeToIframes)();let e=(0,y.useForm)({defaultValues:{name:"",email:"",category:"",newsletter:!1,terms:!1}});return(0,r.jsx)(t.Form,{...e,children:(0,r.jsxs)("form",{onSubmit:e.handleSubmit(function(e){}),className:"space-y-(--lsd-spacing-larger)",style:{minWidth:360},children:[(0,r.jsx)(m.FormField,{control:e.control,name:"name",rules:{required:"Name is required"},render:({field:e})=>(0,r.jsxs)(d.FormItem,{children:[(0,r.jsx)(c.FormLabel,{children:"Full Name"}),(0,r.jsx)(n.FormControl,{children:(0,r.jsx)(p.Input,{placeholder:"John Doe",...e})}),(0,r.jsx)(h.FormMessage,{})]})}),(0,r.jsx)(m.FormField,{control:e.control,name:"email",rules:{required:"Email is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}},render:({field:e})=>(0,r.jsxs)(d.FormItem,{children:[(0,r.jsx)(c.FormLabel,{children:"Email"}),(0,r.jsx)(n.FormControl,{children:(0,r.jsx)(p.Input,{type:"email",placeholder:"john@example.com",...e})}),(0,r.jsx)(h.FormMessage,{})]})}),(0,r.jsx)(m.FormField,{control:e.control,name:"category",rules:{required:"Please select a category"},render:({field:e})=>(0,r.jsxs)(d.FormItem,{children:[(0,r.jsx)(c.FormLabel,{children:"Category"}),(0,r.jsxs)(u.Select,{onValueChange:e.onChange,defaultValue:e.value,children:[(0,r.jsx)(n.FormControl,{children:(0,r.jsx)(j.SelectTrigger,{children:(0,r.jsx)(g.SelectValue,{placeholder:"Select a category"})})}),(0,r.jsxs)(x.SelectContent,{children:[(0,r.jsx)(F.SelectItem,{value:"technology",children:"Technology"}),(0,r.jsx)(F.SelectItem,{value:"design",children:"Design"}),(0,r.jsx)(F.SelectItem,{value:"business",children:"Business"}),(0,r.jsx)(F.SelectItem,{value:"other",children:"Other"})]})]}),(0,r.jsx)(i.FormDescription,{children:"Choose the category that best describes your content."}),(0,r.jsx)(h.FormMessage,{})]})}),(0,r.jsx)(m.FormField,{control:e.control,name:"newsletter",render:({field:e})=>(0,r.jsx)(s.Card,{children:(0,r.jsxs)(o.CardContent,{className:"flex flex-col gap-y-(--lsd-spacing-small) items-end",children:[(0,r.jsxs)("div",{className:"space-y-0.5",children:[(0,r.jsx)(c.FormLabel,{children:"Newsletter"}),(0,r.jsx)(i.FormDescription,{children:"Receive our weekly newsletter with updates and tips."})]}),(0,r.jsx)(n.FormControl,{children:(0,r.jsx)(b.Switch,{checked:e.value,onCheckedChange:e.onChange})})]})})}),(0,r.jsx)(m.FormField,{control:e.control,name:"terms",rules:{validate:e=>!0===e||"You must accept the terms"},render:({field:e})=>(0,r.jsxs)(d.FormItem,{className:"flex flex-row items-start space-x-3 space-y-0",children:[(0,r.jsxs)("div",{className:"flex gap-x-(--lsd-spacing-smaller)",children:[(0,r.jsx)(n.FormControl,{children:(0,r.jsx)(l.Checkbox,{checked:e.value,onCheckedChange:e.onChange})}),(0,r.jsx)(c.FormLabel,{children:"I agree to the terms and conditions"})]}),(0,r.jsx)(h.FormMessage,{})]})}),(0,r.jsx)(a.Button,{type:"submit",className:"w-full",children:"Submit"})]})})}function I(){return(0,r.jsx)(v,{})}e.s(["CODE",0,C,"FormWithOtherComponentsExample",()=>v,"default",()=>I])},26456,e=>{"use strict";var r=e.i(98134);e.i(26940);var a=e.i(46700),s=e.i(57845),o=e.i(80427),l=e.i(64439),t=e.i(93261),n=e.i(6896),i=e.i(75201),m=e.i(90074),d=e.i(49332),c=e.i(10337),h=e.i(99311),p=e.i(11163),u=e.i(45010),x=e.i(48989),F=e.i(45173);function j(){let j=(0,i.useRef)(null),g=(0,i.useRef)(null),b=(0,i.useRef)(null);return(0,F.useSendThemeToIframes)(),(0,r.jsxs)(d.DocsLayout,{children:[(0,r.jsx)(p.PageHeader,{title:"Form",description:"A flexible form component built on react-hook-form with accessible form fields"}),(0,r.jsxs)(h.PageContent,{children:[(0,r.jsx)(x.PageSection,{title:"About Form",children:(0,r.jsx)(n.Typography,{variant:"body1",className:"block",children:"The Form component provides a powerful and accessible way to build forms in React using react-hook-form. It combines validation, state management, and accessible markup into a cohesive experience that integrates seamlessly with LSD components."})}),(0,r.jsxs)(x.PageSection,{title:"Installation",children:[(0,r.jsx)(n.Typography,{variant:"body1",children:"The Form component is built on react-hook-form, which is included as a dependency. Import the Form components from LSD:"}),(0,r.jsx)(a.Card,{className:"mt-(--lsd-spacing-base)",children:(0,r.jsx)(s.CardContent,{children:(0,r.jsx)(m.CodeExample,{useAccordion:!1,code:`import {
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
}`})})})]}),(0,r.jsxs)(x.PageSection,{title:"Components Overview",children:[(0,r.jsx)(n.Typography,{variant:"body1",children:"The Form component is composed of several sub-components that work together:"}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)",children:[(0,r.jsxs)(a.Card,{children:[(0,r.jsxs)(l.CardHeader,{children:[(0,r.jsx)(t.CardTitle,{children:"Form"}),(0,r.jsx)(o.CardDescription,{children:"Form provider wrapper"})]}),(0,r.jsx)(s.CardContent,{children:(0,r.jsx)(n.Typography,{variant:"body2",className:"block",children:"Wraps your form with the FormProvider from react-hook-form, enabling context access for all form components."})})]}),(0,r.jsxs)(a.Card,{children:[(0,r.jsxs)(l.CardHeader,{children:[(0,r.jsx)(t.CardTitle,{children:"FormField"}),(0,r.jsx)(o.CardDescription,{children:"Connects form control to UI"})]}),(0,r.jsx)(s.CardContent,{children:(0,r.jsx)(n.Typography,{variant:"body2",className:"block",children:"Links a form field to the react-hook-form controller using the render prop pattern for maximum flexibility."})})]}),(0,r.jsxs)(a.Card,{children:[(0,r.jsxs)(l.CardHeader,{children:[(0,r.jsx)(t.CardTitle,{children:"FormItem"}),(0,r.jsx)(o.CardDescription,{children:"Field container wrapper"})]}),(0,r.jsx)(s.CardContent,{children:(0,r.jsx)(n.Typography,{variant:"body2",className:"block",children:"Provides the context for each form field, automatically generating unique IDs and managing spacing."})})]}),(0,r.jsxs)(a.Card,{children:[(0,r.jsxs)(l.CardHeader,{children:[(0,r.jsx)(t.CardTitle,{children:"FormLabel"}),(0,r.jsx)(o.CardDescription,{children:"Accessible label for field"})]}),(0,r.jsx)(s.CardContent,{children:(0,r.jsx)(n.Typography,{variant:"body2",className:"block",children:"Renders an accessible label that automatically associates with the form control and changes color on error."})})]}),(0,r.jsxs)(a.Card,{children:[(0,r.jsxs)(l.CardHeader,{children:[(0,r.jsx)(t.CardTitle,{children:"FormControl"}),(0,r.jsx)(o.CardDescription,{children:"Form control wrapper"})]}),(0,r.jsx)(s.CardContent,{children:(0,r.jsx)(n.Typography,{variant:"body2",className:"block",children:"Wraps your actual form input component using Radix UI's Slot component, passing all necessary attributes for accessibility."})})]}),(0,r.jsxs)(a.Card,{children:[(0,r.jsxs)(l.CardHeader,{children:[(0,r.jsx)(t.CardTitle,{children:"FormDescription"}),(0,r.jsx)(o.CardDescription,{children:"Helper text for field"})]}),(0,r.jsx)(s.CardContent,{children:(0,r.jsx)(n.Typography,{variant:"body2",className:"block",children:"Displays additional helper text below the form field to provide context or guidance to the user."})})]}),(0,r.jsxs)(a.Card,{children:[(0,r.jsxs)(l.CardHeader,{children:[(0,r.jsx)(t.CardTitle,{children:"FormMessage"}),(0,r.jsx)(o.CardDescription,{children:"Error or success message"})]}),(0,r.jsx)(s.CardContent,{children:(0,r.jsx)(n.Typography,{variant:"body2",className:"block",children:"Displays validation error messages (or custom messages) when a field has errors, styled with destructive colors."})})]}),(0,r.jsxs)(a.Card,{children:[(0,r.jsxs)(l.CardHeader,{children:[(0,r.jsx)(t.CardTitle,{children:"useFormField"}),(0,r.jsx)(o.CardDescription,{children:"Custom hook for form fields"})]}),(0,r.jsx)(s.CardContent,{children:(0,r.jsx)(n.Typography,{variant:"body2",className:"block",children:"Provides access to field state, IDs, and form context for custom form field implementations."})})]})]})]}),(0,r.jsxs)(x.PageSection,{title:"Basic Usage",children:[(0,r.jsx)(n.Typography,{variant:"body1",children:"A simple form with Input components and descriptions."}),(0,r.jsxs)(a.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,r.jsxs)(l.CardHeader,{children:[(0,r.jsx)(t.CardTitle,{children:"Basic Form"}),(0,r.jsx)(o.CardDescription,{children:"Simple form with basic fields"})]}),(0,r.jsxs)(s.CardContent,{children:[(0,r.jsx)(c.IframeExample,{ref:j,size:"lg",src:"/examples/form/basic",title:"Form Basic Example"}),(0,r.jsx)(m.CodeExample,{code:e.r(8230).CODE})]})]})]}),(0,r.jsxs)(x.PageSection,{title:"Validation",children:[(0,r.jsx)(n.Typography,{variant:"body1",children:"Form with comprehensive validation using react-hook-form rules."}),(0,r.jsxs)(a.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,r.jsxs)(l.CardHeader,{children:[(0,r.jsx)(t.CardTitle,{children:"Validation Form"}),(0,r.jsx)(o.CardDescription,{children:"Form with validation rules and error handling"})]}),(0,r.jsxs)(s.CardContent,{children:[(0,r.jsx)(c.IframeExample,{ref:g,size:"xl",src:"/examples/form/validation",title:"Form Validation Example"}),(0,r.jsx)(m.CodeExample,{code:e.r(23079).CODE})]})]})]}),(0,r.jsxs)(x.PageSection,{title:"Integration with Other Components",children:[(0,r.jsx)(n.Typography,{variant:"body1",children:"Form showing integration with various LSD components like Select, Switch, and Checkbox."}),(0,r.jsxs)(a.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,r.jsxs)(l.CardHeader,{children:[(0,r.jsx)(t.CardTitle,{children:"Form with Multiple Components"}),(0,r.jsx)(o.CardDescription,{children:"Integration with Input, Select, Switch, and Checkbox"})]}),(0,r.jsxs)(s.CardContent,{children:[(0,r.jsx)(c.IframeExample,{ref:b,size:"xl",src:"/examples/form/with-other-components",title:"Form with Other Components Example"}),(0,r.jsx)(m.CodeExample,{code:e.r(92723).CODE})]})]})]}),(0,r.jsxs)(x.PageSection,{title:"API Reference",children:[(0,r.jsx)(n.Typography,{variant:"body1",children:"All available props for the Form components."}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)",children:[(0,r.jsxs)(a.Card,{children:[(0,r.jsxs)(l.CardHeader,{children:[(0,r.jsx)(t.CardTitle,{children:"Form"}),(0,r.jsx)(o.CardDescription,{children:"Form provider component"})]}),(0,r.jsxs)(s.CardContent,{children:[(0,r.jsxs)(n.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,r.jsx)("strong",{children:"Type:"})," FormProvider from react-hook-form"]}),(0,r.jsxs)(n.Typography,{variant:"label1",className:"block",children:[(0,r.jsx)("strong",{children:"Props:"})," All methods from useForm()"]}),(0,r.jsxs)(n.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:["Accepts the entire form object returned by useForm(","{...}",") via spread operator."]})]})]}),(0,r.jsxs)(a.Card,{children:[(0,r.jsxs)(l.CardHeader,{children:[(0,r.jsx)(t.CardTitle,{children:"FormField"}),(0,r.jsx)(o.CardDescription,{children:"Form field connector"})]}),(0,r.jsxs)(s.CardContent,{children:[(0,r.jsxs)(n.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,r.jsx)("strong",{children:"control:"})," Control (required)"]}),(0,r.jsxs)(n.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,r.jsx)("strong",{children:"name:"})," string (required)"]}),(0,r.jsxs)(n.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,r.jsx)("strong",{children:"render:"})," (field, fieldState, formState) → ReactNode (required)"]}),(0,r.jsx)(n.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:"Use the rules prop to pass validation rules to the controller."})]})]}),(0,r.jsxs)(a.Card,{children:[(0,r.jsxs)(l.CardHeader,{children:[(0,r.jsx)(t.CardTitle,{children:"FormItem"}),(0,r.jsx)(o.CardDescription,{children:"Form field container"})]}),(0,r.jsxs)(s.CardContent,{children:[(0,r.jsxs)(n.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,r.jsx)("strong",{children:"Type:"})," HTMLDivAttributes"]}),(0,r.jsxs)(n.Typography,{variant:"label1",className:"block",children:[(0,r.jsx)("strong",{children:"Props:"})," ...props"]}),(0,r.jsx)(n.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:"Accepts all standard HTML div attributes. Styled with CSS Grid for proper spacing."})]})]}),(0,r.jsxs)(a.Card,{children:[(0,r.jsxs)(l.CardHeader,{children:[(0,r.jsx)(t.CardTitle,{children:"FormLabel"}),(0,r.jsx)(o.CardDescription,{children:"Form field label"})]}),(0,r.jsxs)(s.CardContent,{children:[(0,r.jsxs)(n.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,r.jsx)("strong",{children:"Type:"})," LabelProps (Radix UI Label)"]}),(0,r.jsxs)(n.Typography,{variant:"label1",className:"block",children:[(0,r.jsx)("strong",{children:"Props:"})," ...props"]}),(0,r.jsx)(n.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:"Automatically receives htmlFor, data-error aria attributes. Supports all Label variants and sizes."})]})]}),(0,r.jsxs)(a.Card,{children:[(0,r.jsxs)(l.CardHeader,{children:[(0,r.jsx)(t.CardTitle,{children:"FormControl"}),(0,r.jsx)(o.CardDescription,{children:"Form control wrapper"})]}),(0,r.jsxs)(s.CardContent,{children:[(0,r.jsxs)(n.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,r.jsx)("strong",{children:"Type:"})," SlotProps (Radix UI Slot)"]}),(0,r.jsxs)(n.Typography,{variant:"label1",className:"block",children:[(0,r.jsx)("strong",{children:"Props:"})," ...props"]}),(0,r.jsx)(n.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:"Automatically applies id, aria-describedby, aria-invalid attributes to children."})]})]}),(0,r.jsxs)(a.Card,{children:[(0,r.jsxs)(l.CardHeader,{children:[(0,r.jsx)(t.CardTitle,{children:"FormDescription"}),(0,r.jsx)(o.CardDescription,{children:"Helper text component"})]}),(0,r.jsxs)(s.CardContent,{children:[(0,r.jsxs)(n.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,r.jsx)("strong",{children:"Type:"})," HTMLParagraphAttributes"]}),(0,r.jsxs)(n.Typography,{variant:"label1",className:"block",children:[(0,r.jsx)("strong",{children:"Props:"})," ...props"]}),(0,r.jsx)(n.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:"Automatically receives id attribute. Styled with muted foreground color and label typography."})]})]}),(0,r.jsxs)(a.Card,{children:[(0,r.jsxs)(l.CardHeader,{children:[(0,r.jsx)(t.CardTitle,{children:"FormMessage"}),(0,r.jsx)(o.CardDescription,{children:"Error message component"})]}),(0,r.jsxs)(s.CardContent,{children:[(0,r.jsxs)(n.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:[(0,r.jsx)("strong",{children:"Type:"})," HTMLParagraphAttributes"]}),(0,r.jsxs)(n.Typography,{variant:"label1",className:"block",children:[(0,r.jsx)("strong",{children:"Props:"})," children?: ReactNode, ...props"]}),(0,r.jsx)(n.Typography,{variant:"body2",className:"mt-(--lsd-spacing-smaller)",children:"Automatically receives id attribute. Renders null if no error exists."})]})]})]})]}),(0,r.jsxs)(x.PageSection,{title:"Accessibility",children:[(0,r.jsx)(n.Typography,{variant:"body1",children:"The Form component follows accessibility best practices with full ARIA support."}),(0,r.jsxs)(a.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,r.jsxs)(l.CardHeader,{children:[(0,r.jsx)(t.CardTitle,{children:"Semantic Markup"}),(0,r.jsx)(o.CardDescription,{children:"Proper HTML structure for accessibility"})]}),(0,r.jsxs)(s.CardContent,{children:[(0,r.jsx)(n.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:"- Labels are automatically associated with form controls using htmlFor"}),(0,r.jsx)(n.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:"- Form controls receive proper id attributes generated by FormItem"}),(0,r.jsx)(n.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:"- Helper and error text are linked via aria-describedby"}),(0,r.jsx)(n.Typography,{variant:"body2",className:"block",children:'- Error states are indicated with aria-invalid="true"'})]})]}),(0,r.jsxs)(a.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,r.jsxs)(l.CardHeader,{children:[(0,r.jsx)(t.CardTitle,{children:"Keyboard Navigation"}),(0,r.jsx)(o.CardDescription,{children:"Full keyboard support"})]}),(0,r.jsxs)(s.CardContent,{children:[(0,r.jsx)(n.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:"- Tab - Navigate through form fields"}),(0,r.jsx)(n.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:"- Shift + Tab - Navigate to previous form field"}),(0,r.jsx)(n.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:"- Enter - Submit form when in a form"}),(0,r.jsx)(n.Typography,{variant:"body2",className:"block",children:"All nested LSD components (Input, Select, Checkbox, Switch) support their full keyboard navigation within the form context."})]})]}),(0,r.jsxs)(a.Card,{className:"mt-(--lsd-spacing-base)",children:[(0,r.jsxs)(l.CardHeader,{children:[(0,r.jsx)(t.CardTitle,{children:"ARIA Attributes"}),(0,r.jsx)(o.CardDescription,{children:"Automatic ARIA attribute management"})]}),(0,r.jsxs)(s.CardContent,{children:[(0,r.jsx)(n.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:"- aria-describedby - Links form control to helper and error text"}),(0,r.jsx)(n.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:"- aria-invalid - Indicates field has validation errors"}),(0,r.jsx)(n.Typography,{variant:"body2",className:"block mb-(--lsd-spacing-smaller)",children:"- data-error - Data attribute for styling error states"}),(0,r.jsx)(n.Typography,{variant:"body2",className:"block",children:"These attributes are automatically managed by the Form components, but you can add additional ARIA attributes as needed."})]})]})]}),(0,r.jsx)(u.PageNavigation,{previous:{title:"Field",href:"/components/field"},next:{title:"Radio Group",href:"/components/radio-group"}})]})]})}e.s(["default",()=>j])}]);
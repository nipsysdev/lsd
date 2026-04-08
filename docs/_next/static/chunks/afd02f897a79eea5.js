(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var o=e.i(75201);function r(){var e;let r;e=e=>{let o=document.documentElement;e.theme&&("dark"===e.theme?o.classList.add("dark"):o.classList.remove("dark")),e.accent&&("monochrome"===e.accent?o.removeAttribute("data-theme"):o.setAttribute("data-theme",e.accent)),e.font&&(o.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?o.classList.add("font-serif"):"sans-serif"===e.font?o.classList.add("font-sans"):"monospace"===e.font&&o.classList.add("font-mono"))},r=o.useRef(e),o.useEffect(()=>{r.current=e},[e]),o.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&r.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>r],45173)},29659,e=>{"use strict";var o=e.i(17964);e.s(["useForm",()=>o.u])},8230,e=>{"use strict";var o=e.i(98134);e.i(26940);var r=e.i(59038),s=e.i(83499),t=e.i(46466),n=e.i(61831),m=e.i(53439),i=e.i(34269),l=e.i(67825),a=e.i(9438),c=e.i(23155),d=e.i(29659),u=e.i(45173);let F=`import { Button, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Input, useForm } from '@nipsys/shadcn-lsd';

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
}`;function p(){(0,u.useSendThemeToIframes)();let e=(0,d.useForm)({defaultValues:{username:"",email:"",bio:""}});return(0,o.jsx)(s.Form,{...e,children:(0,o.jsxs)("form",{onSubmit:e.handleSubmit(function(e){}),className:"space-y-(--lsd-spacing-base)",style:{minWidth:360},children:[(0,o.jsx)(m.FormField,{control:e.control,name:"username",render:({field:e})=>(0,o.jsxs)(i.FormItem,{children:[(0,o.jsx)(l.FormLabel,{children:"Username"}),(0,o.jsx)(t.FormControl,{children:(0,o.jsx)(c.Input,{placeholder:"johndoe",...e})}),(0,o.jsx)(n.FormDescription,{children:"This is your public display name."}),(0,o.jsx)(a.FormMessage,{})]})}),(0,o.jsx)(m.FormField,{control:e.control,name:"email",render:({field:e})=>(0,o.jsxs)(i.FormItem,{children:[(0,o.jsx)(l.FormLabel,{children:"Email"}),(0,o.jsx)(t.FormControl,{children:(0,o.jsx)(c.Input,{type:"email",placeholder:"john@example.com",...e})}),(0,o.jsx)(n.FormDescription,{children:"We'll send you updates to this email."}),(0,o.jsx)(a.FormMessage,{})]})}),(0,o.jsx)(m.FormField,{control:e.control,name:"bio",render:({field:e})=>(0,o.jsxs)(i.FormItem,{children:[(0,o.jsx)(l.FormLabel,{children:"Bio"}),(0,o.jsx)(t.FormControl,{children:(0,o.jsx)(c.Input,{placeholder:"Tell us about yourself",...e})}),(0,o.jsx)(n.FormDescription,{children:"Optional, but helps us personalize your experience."}),(0,o.jsx)(a.FormMessage,{})]})}),(0,o.jsx)(r.Button,{type:"submit",className:"w-full",children:"Submit"})]})})}function f(){return(0,o.jsx)(p,{})}e.s(["CODE",0,F,"FormBasicExample",()=>p,"default",()=>f])}]);
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var r=e.i(75201);function s(){var e;let s;e=e=>{let r=document.documentElement;e.theme&&("dark"===e.theme?r.classList.add("dark"):r.classList.remove("dark")),e.accent&&("monochrome"===e.accent?r.removeAttribute("data-theme"):r.setAttribute("data-theme",e.accent)),e.font&&(r.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?r.classList.add("font-serif"):"sans-serif"===e.font?r.classList.add("font-sans"):"monospace"===e.font&&r.classList.add("font-mono"))},s=r.useRef(e),r.useEffect(()=>{s.current=e},[e]),r.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&s.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>s],45173)},22450,e=>{"use strict";var r=e.i(74116);e.s(["Button",()=>r.B])},46402,e=>{"use strict";var r=e.i(45171);e.s(["Input",()=>r.I])},29659,e=>{"use strict";var r=e.i(17964);e.s(["useForm",()=>r.u])},23079,e=>{"use strict";var r=e.i(98134);e.i(26940);var s=e.i(22450),o=e.i(83499),a=e.i(46466),t=e.i(61831),m=e.i(53439),n=e.i(34269),l=e.i(67825),i=e.i(9438),d=e.i(46402),c=e.i(29659),u=e.i(45173);let F=`import { Button, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Input, useForm } from '@nipsys/shadcn-lsd';

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
}`;function p(){(0,u.useSendThemeToIframes)();let e=(0,c.useForm)({defaultValues:{username:"",email:"",password:"",confirmPassword:""}});return(0,r.jsx)(o.Form,{...e,children:(0,r.jsxs)("form",{onSubmit:e.handleSubmit(function(e){}),className:"space-y-(--lsd-spacing-base)",style:{minWidth:360},children:[(0,r.jsx)(m.FormField,{control:e.control,name:"username",rules:{required:"Username is required",minLength:{value:3,message:"Username must be at least 3 characters"},maxLength:{value:20,message:"Username must be at most 20 characters"}},render:({field:e})=>(0,r.jsxs)(n.FormItem,{children:[(0,r.jsx)(l.FormLabel,{children:"Username"}),(0,r.jsx)(a.FormControl,{children:(0,r.jsx)(d.Input,{placeholder:"johndoe",...e})}),(0,r.jsx)(t.FormDescription,{children:"3-20 characters, alphanumeric only."}),(0,r.jsx)(i.FormMessage,{})]})}),(0,r.jsx)(m.FormField,{control:e.control,name:"email",rules:{required:"Email is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}},render:({field:e})=>(0,r.jsxs)(n.FormItem,{children:[(0,r.jsx)(l.FormLabel,{children:"Email"}),(0,r.jsx)(a.FormControl,{children:(0,r.jsx)(d.Input,{type:"email",placeholder:"john@example.com",...e})}),(0,r.jsx)(t.FormDescription,{children:"We'll send you updates to this email."}),(0,r.jsx)(i.FormMessage,{})]})}),(0,r.jsx)(m.FormField,{control:e.control,name:"password",rules:{required:"Password is required",minLength:{value:8,message:"Password must be at least 8 characters"}},render:({field:e})=>(0,r.jsxs)(n.FormItem,{children:[(0,r.jsx)(l.FormLabel,{children:"Password"}),(0,r.jsx)(a.FormControl,{children:(0,r.jsx)(d.Input,{type:"password",placeholder:"••••••••",...e})}),(0,r.jsx)(t.FormDescription,{children:"At least 8 characters."}),(0,r.jsx)(i.FormMessage,{})]})}),(0,r.jsx)(m.FormField,{control:e.control,name:"confirmPassword",rules:{required:"Please confirm your password",validate:(e,r)=>e===r.password||"Passwords do not match"},render:({field:e})=>(0,r.jsxs)(n.FormItem,{children:[(0,r.jsx)(l.FormLabel,{children:"Confirm Password"}),(0,r.jsx)(a.FormControl,{children:(0,r.jsx)(d.Input,{type:"password",placeholder:"••••••••",...e})}),(0,r.jsx)(i.FormMessage,{})]})}),(0,r.jsx)(s.Button,{type:"submit",className:"w-full",children:"Create Account"})]})})}function h(){return(0,r.jsx)(p,{})}e.s(["CODE",0,F,"FormValidationExample",()=>p,"default",()=>h])}]);
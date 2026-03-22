(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var r=e.i(75201);function t(){var e;let t;e=e=>{let r=document.documentElement;e.theme&&("dark"===e.theme?r.classList.add("dark"):r.classList.remove("dark")),e.accent&&("monochrome"===e.accent?r.removeAttribute("data-theme"):r.setAttribute("data-theme",e.accent)),e.font&&(r.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?r.classList.add("font-serif"):"sans-serif"===e.font?r.classList.add("font-sans"):"monospace"===e.font&&r.classList.add("font-mono"))},t=r.useRef(e),r.useEffect(()=>{t.current=e},[e]),r.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&t.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>t],45173)},22450,e=>{"use strict";var r=e.i(74116);e.s(["Button",()=>r.B])},46402,e=>{"use strict";var r=e.i(45171);e.s(["Input",()=>r.I])},29659,e=>{"use strict";var r=e.i(17964);e.s(["useForm",()=>r.u])},92723,e=>{"use strict";var r=e.i(98134);e.i(26940);var t=e.i(22450),o=e.i(39225),s=e.i(83499),l=e.i(46466),n=e.i(61831),a=e.i(53439),m=e.i(34269),i=e.i(67825),c=e.i(9438),d=e.i(46402),u=e.i(49773),h=e.i(84779),F=e.i(87300),f=e.i(1638),g=e.i(99397),p=e.i(30451),x=e.i(29659),b=e.i(45173);let j=`import { Button, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Switch, Checkbox, useForm } from '@nipsys/shadcn-lsd';

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
}`;function C(){(0,b.useSendThemeToIframes)();let e=(0,x.useForm)({defaultValues:{name:"",email:"",category:"",newsletter:!1,terms:!1}});return(0,r.jsx)(s.Form,{...e,children:(0,r.jsxs)("form",{onSubmit:e.handleSubmit(function(e){}),className:"space-y-(--lsd-spacing-base)",style:{minWidth:360},children:[(0,r.jsx)(a.FormField,{control:e.control,name:"name",rules:{required:"Name is required"},render:({field:e})=>(0,r.jsxs)(m.FormItem,{children:[(0,r.jsx)(i.FormLabel,{children:"Full Name"}),(0,r.jsx)(l.FormControl,{children:(0,r.jsx)(d.Input,{placeholder:"John Doe",...e})}),(0,r.jsx)(c.FormMessage,{})]})}),(0,r.jsx)(a.FormField,{control:e.control,name:"email",rules:{required:"Email is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}},render:({field:e})=>(0,r.jsxs)(m.FormItem,{children:[(0,r.jsx)(i.FormLabel,{children:"Email"}),(0,r.jsx)(l.FormControl,{children:(0,r.jsx)(d.Input,{type:"email",placeholder:"john@example.com",...e})}),(0,r.jsx)(c.FormMessage,{})]})}),(0,r.jsx)(a.FormField,{control:e.control,name:"category",rules:{required:"Please select a category"},render:({field:e})=>(0,r.jsxs)(m.FormItem,{children:[(0,r.jsx)(i.FormLabel,{children:"Category"}),(0,r.jsxs)(u.Select,{onValueChange:e.onChange,defaultValue:e.value,children:[(0,r.jsx)(l.FormControl,{children:(0,r.jsx)(f.SelectTrigger,{children:(0,r.jsx)(g.SelectValue,{placeholder:"Select a category"})})}),(0,r.jsxs)(h.SelectContent,{children:[(0,r.jsx)(F.SelectItem,{value:"technology",children:"Technology"}),(0,r.jsx)(F.SelectItem,{value:"design",children:"Design"}),(0,r.jsx)(F.SelectItem,{value:"business",children:"Business"}),(0,r.jsx)(F.SelectItem,{value:"other",children:"Other"})]})]}),(0,r.jsx)(n.FormDescription,{children:"Choose the category that best describes your content."}),(0,r.jsx)(c.FormMessage,{})]})}),(0,r.jsx)(a.FormField,{control:e.control,name:"newsletter",render:({field:e})=>(0,r.jsxs)(m.FormItem,{className:"flex flex-row items-center justify-between rounded-lg border p-(--lsd-spacing-base) shadow-sm",children:[(0,r.jsxs)("div",{className:"space-y-0.5",children:[(0,r.jsx)(i.FormLabel,{children:"Newsletter"}),(0,r.jsx)(n.FormDescription,{children:"Receive our weekly newsletter with updates and tips."})]}),(0,r.jsx)(l.FormControl,{children:(0,r.jsx)(p.Switch,{checked:e.value,onCheckedChange:e.onChange})})]})}),(0,r.jsx)(a.FormField,{control:e.control,name:"terms",rules:{validate:e=>!0===e||"You must accept the terms"},render:({field:e})=>(0,r.jsxs)(m.FormItem,{className:"flex flex-row items-start space-x-3 space-y-0",children:[(0,r.jsx)(l.FormControl,{children:(0,r.jsx)(o.Checkbox,{checked:e.value,onCheckedChange:e.onChange})}),(0,r.jsx)("div",{className:"space-y-1 leading-none",children:(0,r.jsx)(i.FormLabel,{children:"I agree to the terms and conditions"})}),(0,r.jsx)(c.FormMessage,{})]})}),(0,r.jsx)(t.Button,{type:"submit",className:"w-full",children:"Submit"})]})})}function v(){return(0,r.jsx)(C,{})}e.s(["CODE",0,j,"FormWithOtherComponentsExample",()=>C,"default",()=>v])}]);
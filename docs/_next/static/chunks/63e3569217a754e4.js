(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45173,e=>{"use strict";var r=e.i(75201);function t(){var e;let t;e=e=>{let r=document.documentElement;e.theme&&("dark"===e.theme?r.classList.add("dark"):r.classList.remove("dark")),e.accent&&("monochrome"===e.accent?r.removeAttribute("data-theme"):r.setAttribute("data-theme",e.accent)),e.font&&(r.classList.remove("font-serif","font-sans","font-mono"),"serif"===e.font?r.classList.add("font-serif"):"sans-serif"===e.font?r.classList.add("font-sans"):"monospace"===e.font&&r.classList.add("font-mono"))},t=r.useRef(e),r.useEffect(()=>{t.current=e},[e]),r.useEffect(()=>{if(window.self===window.top)return;let e=e=>{"example-params"===e.data.type&&t.current(e.data.data)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},["example-params"])}e.s(["useSendThemeToIframes",()=>t],45173)},29659,e=>{"use strict";var r=e.i(17964);e.s(["useForm",()=>r.u])},92723,e=>{"use strict";var r=e.i(98134);e.i(26940);var t=e.i(59038),o=e.i(46700),l=e.i(57845),s=e.i(39225),a=e.i(83499),n=e.i(46466),m=e.i(61831),i=e.i(53439),c=e.i(34269),d=e.i(67825),u=e.i(9438),h=e.i(23155),F=e.i(49773),f=e.i(84779),g=e.i(87300),x=e.i(1638),p=e.i(99397),C=e.i(30451),j=e.i(29659),S=e.i(45173);let b=`import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Switch, Checkbox, useForm } from '@nipsys/shadcn-lsd';

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
}`;function v(){(0,S.useSendThemeToIframes)();let e=(0,j.useForm)({defaultValues:{name:"",email:"",category:"",newsletter:!1,terms:!1}});return(0,r.jsx)(a.Form,{...e,children:(0,r.jsxs)("form",{onSubmit:e.handleSubmit(function(e){}),className:"space-y-(--lsd-spacing-larger)",style:{minWidth:360},children:[(0,r.jsx)(i.FormField,{control:e.control,name:"name",rules:{required:"Name is required"},render:({field:e})=>(0,r.jsxs)(c.FormItem,{children:[(0,r.jsx)(d.FormLabel,{children:"Full Name"}),(0,r.jsx)(n.FormControl,{children:(0,r.jsx)(h.Input,{placeholder:"John Doe",...e})}),(0,r.jsx)(u.FormMessage,{})]})}),(0,r.jsx)(i.FormField,{control:e.control,name:"email",rules:{required:"Email is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}},render:({field:e})=>(0,r.jsxs)(c.FormItem,{children:[(0,r.jsx)(d.FormLabel,{children:"Email"}),(0,r.jsx)(n.FormControl,{children:(0,r.jsx)(h.Input,{type:"email",placeholder:"john@example.com",...e})}),(0,r.jsx)(u.FormMessage,{})]})}),(0,r.jsx)(i.FormField,{control:e.control,name:"category",rules:{required:"Please select a category"},render:({field:e})=>(0,r.jsxs)(c.FormItem,{children:[(0,r.jsx)(d.FormLabel,{children:"Category"}),(0,r.jsxs)(F.Select,{onValueChange:e.onChange,defaultValue:e.value,children:[(0,r.jsx)(n.FormControl,{children:(0,r.jsx)(x.SelectTrigger,{children:(0,r.jsx)(p.SelectValue,{placeholder:"Select a category"})})}),(0,r.jsxs)(f.SelectContent,{children:[(0,r.jsx)(g.SelectItem,{value:"technology",children:"Technology"}),(0,r.jsx)(g.SelectItem,{value:"design",children:"Design"}),(0,r.jsx)(g.SelectItem,{value:"business",children:"Business"}),(0,r.jsx)(g.SelectItem,{value:"other",children:"Other"})]})]}),(0,r.jsx)(m.FormDescription,{children:"Choose the category that best describes your content."}),(0,r.jsx)(u.FormMessage,{})]})}),(0,r.jsx)(i.FormField,{control:e.control,name:"newsletter",render:({field:e})=>(0,r.jsx)(o.Card,{children:(0,r.jsxs)(l.CardContent,{className:"flex flex-col gap-y-(--lsd-spacing-small) items-end",children:[(0,r.jsxs)("div",{className:"space-y-0.5",children:[(0,r.jsx)(d.FormLabel,{children:"Newsletter"}),(0,r.jsx)(m.FormDescription,{children:"Receive our weekly newsletter with updates and tips."})]}),(0,r.jsx)(n.FormControl,{children:(0,r.jsx)(C.Switch,{checked:e.value,onCheckedChange:e.onChange})})]})})}),(0,r.jsx)(i.FormField,{control:e.control,name:"terms",rules:{validate:e=>!0===e||"You must accept the terms"},render:({field:e})=>(0,r.jsxs)(c.FormItem,{className:"flex flex-row items-start space-x-3 space-y-0",children:[(0,r.jsxs)("div",{className:"flex gap-x-(--lsd-spacing-smaller)",children:[(0,r.jsx)(n.FormControl,{children:(0,r.jsx)(s.Checkbox,{checked:e.value,onCheckedChange:e.onChange})}),(0,r.jsx)(d.FormLabel,{children:"I agree to the terms and conditions"})]}),(0,r.jsx)(u.FormMessage,{})]})}),(0,r.jsx)(t.Button,{type:"submit",className:"w-full",children:"Submit"})]})})}function y(){return(0,r.jsx)(v,{})}e.s(["CODE",0,b,"FormWithOtherComponentsExample",()=>v,"default",()=>y])}]);
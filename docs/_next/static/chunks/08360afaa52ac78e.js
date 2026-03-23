(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,85313,e=>{"use strict";var n=e.i(2582);e.i(82419);var o=e.i(42836),s=e.i(68256),d=e.i(86900),r=e.i(66920);let t=new Map([["bold",d.createElement(d.Fragment,null,d.createElement("path",{d:"M200,28H165.47a51.88,51.88,0,0,0-74.94,0H56A20,20,0,0,0,36,48V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V48A20,20,0,0,0,200,28ZM155.71,60H100.29a28,28,0,0,1,55.42,0ZM196,212H60V52H77.41A52.13,52.13,0,0,0,76,64v8A12,12,0,0,0,88,84h80a12,12,0,0,0,12-12V64a52.13,52.13,0,0,0-1.41-12H196Z"}))],["duotone",d.createElement(d.Fragment,null,d.createElement("path",{d:"M208,48V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96a39.83,39.83,0,0,0-8,24v8h80V64a39.83,39.83,0,0,0-8-24h40A8,8,0,0,1,208,48Z",opacity:"0.2"}),d.createElement("path",{d:"M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"}))],["fill",d.createElement(d.Fragment,null,d.createElement("path",{d:"M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Z"}))],["light",d.createElement(d.Fragment,null,d.createElement("path",{d:"M200,34H162.83a45.91,45.91,0,0,0-69.66,0H56A14,14,0,0,0,42,48V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V48A14,14,0,0,0,200,34Zm-72-4a34,34,0,0,1,34,34v2H94V64A34,34,0,0,1,128,30Zm74,186a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H85.67A45.77,45.77,0,0,0,82,64v8a6,6,0,0,0,6,6h80a6,6,0,0,0,6-6V64a45.77,45.77,0,0,0-3.67-18H200a2,2,0,0,1,2,2Z"}))],["regular",d.createElement(d.Fragment,null,d.createElement("path",{d:"M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"}))],["thin",d.createElement(d.Fragment,null,d.createElement("path",{d:"M200,36H161.92a44,44,0,0,0-67.84,0H56A12,12,0,0,0,44,48V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V48A12,12,0,0,0,200,36Zm-72-8a36,36,0,0,1,36,36v4H92V64A36,36,0,0,1,128,28Zm76,188a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H88.83A43.71,43.71,0,0,0,84,64v8a4,4,0,0,0,4,4h80a4,4,0,0,0,4-4V64a43.71,43.71,0,0,0-4.83-20H200a4,4,0,0,1,4,4Z"}))]]),l=d.forwardRef((e,n)=>d.createElement(r.default,{ref:n,...e,weights:t}));l.displayName="ClipboardIcon";var i=e.i(38447);function a({code:e}){let d=async()=>{try{await navigator.clipboard.writeText(e),i.toast.success("Code successfully copied to clipboard")}catch(e){i.toast.error("Failed to copy code to clipboard")}};return(0,n.jsxs)("div",{className:"flex justify-between size-full relative group",children:[(0,n.jsx)(s.Typography,{variant:"subtitle3",className:"my-auto",children:(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"whitespace-break-spaces",children:e})})}),(0,n.jsx)(o.Button,{onClick:d,variant:"outlined",size:"square-md",className:"opacity-0 group-hover:opacity-100 transition-opacity","aria-label":"Copy code",children:(0,n.jsx)(l,{className:"size-4",weight:"duotone"})})]})}e.s(["CodeExample",()=>a],85313)},23582,e=>{"use strict";var n=e.i(2582);let o=(0,e.i(86900).forwardRef)(({src:e,title:o,size:s="md",className:d,...r},t)=>(0,n.jsx)("iframe",{ref:t,src:e,className:`${{sm:"min-h-[128px]",md:"min-h-[256px]",lg:"min-h-[450px]"}[s]} w-full overflow-hidden`,title:o,...r}));o.displayName="IframeExample",e.s(["IframeExample",0,o])},90366,e=>{"use strict";var n=e.i(2582);e.i(82419);var o=e.i(42836),s=e.i(29960),d=e.i(35165),r=e.i(42687),t=e.i(58817),l=e.i(38054),i=e.i(57811),a=e.i(36416),c=e.i(86900);let u=`
\`\`\`tsx
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  Button,
} from '@nipsys/shadcn-lsd';

export function DropdownMenuRadioItems() {
  const [position, setPosition] = useState('bottom');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outlined">
          Position: {position}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
\`\`\`
`;function p(){let[e,u]=(0,c.useState)("bottom");return(0,n.jsxs)(s.DropdownMenu,{children:[(0,n.jsx)(a.DropdownMenuTrigger,{asChild:!0,children:(0,n.jsxs)(o.Button,{variant:"outlined",children:["Position: ",e]})}),(0,n.jsxs)(d.DropdownMenuContent,{children:[(0,n.jsx)(r.DropdownMenuLabel,{children:"Panel Position"}),(0,n.jsx)(i.DropdownMenuSeparator,{}),(0,n.jsxs)(t.DropdownMenuRadioGroup,{value:e,onValueChange:u,children:[(0,n.jsx)(l.DropdownMenuRadioItem,{value:"top",children:"Top"}),(0,n.jsx)(l.DropdownMenuRadioItem,{value:"bottom",children:"Bottom"}),(0,n.jsx)(l.DropdownMenuRadioItem,{value:"right",children:"Right"})]})]})]})}e.s(["CODE",0,u,"default",()=>p])},37415,e=>{"use strict";var n=e.i(2582);e.i(82419);var o=e.i(42836),s=e.i(29960),d=e.i(35165),r=e.i(32783),t=e.i(42687),l=e.i(57811),i=e.i(36416);let a=`
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  Button,
} from '@nipsys/shadcn-lsd';

export function DropdownMenuBasic() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outlined">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem variant="destructive">Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
`;function c(){return(0,n.jsxs)(s.DropdownMenu,{children:[(0,n.jsx)(i.DropdownMenuTrigger,{asChild:!0,children:(0,n.jsx)(o.Button,{variant:"outlined",children:"Open Menu"})}),(0,n.jsxs)(d.DropdownMenuContent,{children:[(0,n.jsx)(t.DropdownMenuLabel,{children:"My Account"}),(0,n.jsx)(l.DropdownMenuSeparator,{}),(0,n.jsx)(r.DropdownMenuItem,{children:"Profile"}),(0,n.jsx)(r.DropdownMenuItem,{children:"Billing"}),(0,n.jsx)(r.DropdownMenuItem,{children:"Team"}),(0,n.jsx)(r.DropdownMenuItem,{variant:"destructive",children:"Log out"})]})]})}e.s(["CODE",0,a,"default",()=>c])},72288,e=>{"use strict";var n=e.i(2582);e.i(82419);var o=e.i(42836),s=e.i(29960),d=e.i(35165),r=e.i(32783),t=e.i(42687),l=e.i(57811),i=e.i(62623),a=e.i(39456),c=e.i(20785),u=e.i(36416);let p=`\`\`\`tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  Button,
} from '@nipsys/shadcn-lsd';

export function DropdownMenuSubmenus() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outlined">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Team</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Members</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>More</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Advanced</DropdownMenuItem>
                <DropdownMenuItem>Integrations</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
\`\`\`
`;function m(){return(0,n.jsxs)(s.DropdownMenu,{children:[(0,n.jsx)(u.DropdownMenuTrigger,{asChild:!0,children:(0,n.jsx)(o.Button,{variant:"outlined",children:"Open Menu"})}),(0,n.jsxs)(d.DropdownMenuContent,{children:[(0,n.jsx)(t.DropdownMenuLabel,{children:"My Account"}),(0,n.jsx)(l.DropdownMenuSeparator,{}),(0,n.jsx)(r.DropdownMenuItem,{children:"Profile"}),(0,n.jsx)(r.DropdownMenuItem,{children:"Billing"}),(0,n.jsxs)(i.DropdownMenuSub,{children:[(0,n.jsx)(c.DropdownMenuSubTrigger,{children:"Team"}),(0,n.jsxs)(a.DropdownMenuSubContent,{children:[(0,n.jsx)(r.DropdownMenuItem,{children:"Members"}),(0,n.jsx)(r.DropdownMenuItem,{children:"Settings"}),(0,n.jsxs)(i.DropdownMenuSub,{children:[(0,n.jsx)(c.DropdownMenuSubTrigger,{children:"More"}),(0,n.jsxs)(a.DropdownMenuSubContent,{children:[(0,n.jsx)(r.DropdownMenuItem,{children:"Advanced"}),(0,n.jsx)(r.DropdownMenuItem,{children:"Integrations"})]})]})]})]}),(0,n.jsx)(l.DropdownMenuSeparator,{}),(0,n.jsx)(r.DropdownMenuItem,{variant:"destructive",children:"Log out"})]})]})}e.s(["CODE",0,p,"default",()=>m])},70878,e=>{"use strict";var n=e.i(2582);e.i(82419);var o=e.i(42836),s=e.i(29960),d=e.i(35165),r=e.i(32783),t=e.i(57811),l=e.i(59988),i=e.i(36416);let a=`
\`\`\`tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  Button,
} from '@nipsys/shadcn-lsd';

export function DropdownMenuShortcuts() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outlined">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          New Tab
          <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          New Window
          <DropdownMenuShortcut>⌘+N</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Close
          <DropdownMenuShortcut>⌘+W</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Zoom In
          <DropdownMenuShortcut>⌘++</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Zoom Out
          <DropdownMenuShortcut>⌘+-</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
\`\`\`
`;function c(){return(0,n.jsxs)(s.DropdownMenu,{children:[(0,n.jsx)(i.DropdownMenuTrigger,{asChild:!0,children:(0,n.jsx)(o.Button,{variant:"outlined",children:"Open Menu"})}),(0,n.jsxs)(d.DropdownMenuContent,{children:[(0,n.jsxs)(r.DropdownMenuItem,{children:["New Tab",(0,n.jsx)(l.DropdownMenuShortcut,{children:"⌘+T"})]}),(0,n.jsxs)(r.DropdownMenuItem,{children:["New Window",(0,n.jsx)(l.DropdownMenuShortcut,{children:"⌘+N"})]}),(0,n.jsxs)(r.DropdownMenuItem,{children:["Close",(0,n.jsx)(l.DropdownMenuShortcut,{children:"⌘+W"})]}),(0,n.jsx)(t.DropdownMenuSeparator,{}),(0,n.jsxs)(r.DropdownMenuItem,{children:["Zoom In",(0,n.jsx)(l.DropdownMenuShortcut,{children:"⌘++"})]}),(0,n.jsxs)(r.DropdownMenuItem,{children:["Zoom Out",(0,n.jsx)(l.DropdownMenuShortcut,{children:"⌘+-"})]})]})]})}e.s(["CODE",0,a,"default",()=>c])},59684,e=>{"use strict";var n=e.i(2582);e.i(82419);var o=e.i(42836),s=e.i(29960),d=e.i(97419),r=e.i(35165),t=e.i(42687),l=e.i(57811),i=e.i(36416),a=e.i(86900);let c=`\`\`\`tsx
import { useState } from 'react';
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  Button,
} from '@nipsys/shadcn-lsd';

export function DropdownMenuCheckboxItems() {
  const [showBookmarks, setShowBookmarks] = useState(true);
  const [showUrls, setShowUrls] = useState(false);
  const [askPrivate, setAskPrivate] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outlined">Options</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showBookmarks}
          onCheckedChange={setShowBookmarks}
        >
          Show Bookmarks Sidebar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showUrls}
          onCheckedChange={setShowUrls}
        >
          Show URLs in Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Privacy</DropdownMenuLabel>
        <DropdownMenuCheckboxItem
          checked={askPrivate}
          onCheckedChange={setAskPrivate}
        >
          Ask Before Private Browsing
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
\`\`\`
`;function u(){let[e,c]=(0,a.useState)(!0),[u,p]=(0,a.useState)(!1),[m,x]=(0,a.useState)(!1);return(0,n.jsxs)(s.DropdownMenu,{children:[(0,n.jsx)(i.DropdownMenuTrigger,{asChild:!0,children:(0,n.jsx)(o.Button,{variant:"outlined",children:"Options"})}),(0,n.jsxs)(r.DropdownMenuContent,{children:[(0,n.jsx)(t.DropdownMenuLabel,{children:"Appearance"}),(0,n.jsx)(l.DropdownMenuSeparator,{}),(0,n.jsx)(d.DropdownMenuCheckboxItem,{checked:e,onCheckedChange:c,children:"Show Bookmarks Sidebar"}),(0,n.jsx)(d.DropdownMenuCheckboxItem,{checked:u,onCheckedChange:p,children:"Show URLs in Bar"}),(0,n.jsx)(l.DropdownMenuSeparator,{}),(0,n.jsx)(t.DropdownMenuLabel,{children:"Privacy"}),(0,n.jsx)(d.DropdownMenuCheckboxItem,{checked:m,onCheckedChange:x,children:"Ask Before Private Browsing"})]})]})}e.s(["CODE",0,c,"default",()=>u])},52140,e=>{"use strict";var n=e.i(2582);e.i(82419);var o=e.i(19838),s=e.i(82738),d=e.i(13664),r=e.i(54668),t=e.i(85313),l=e.i(28131),i=e.i(23582),a=e.i(68456),c=e.i(24847),u=e.i(21810),p=e.i(72063),m=e.i(37415),x=e.i(59684),h=e.i(90366),w=e.i(70878),M=e.i(72288);function D(){return(0,n.jsxs)(l.DocsLayout,{children:[(0,n.jsx)(c.PageHeader,{title:"Dropdown Menu",description:"A dropdown menu displays a list of actions or options in a persistent menu that appears when triggered."}),(0,n.jsxs)(a.PageContent,{children:[(0,n.jsx)(p.PageSection,{title:"About Dropdown Menu",children:(0,n.jsxs)("div",{className:"space-y-4",children:[(0,n.jsx)("p",{className:"lsd:text-lsd-text-secondary",children:"The Dropdown Menu component is built on Radix UI and follows accessibility patterns. It provides a rich set of features including:"}),(0,n.jsxs)("ul",{className:"list-disc list-inside space-y-2 lsd:text-lsd-text-secondary",children:[(0,n.jsx)("li",{children:"Keyboard navigation (arrow keys, Tab, Enter, Escape)"}),(0,n.jsx)("li",{children:"Submenu support with unlimited nesting"}),(0,n.jsx)("li",{children:"Checkbox items for boolean selections"}),(0,n.jsx)("li",{children:"Radio group items for exclusive selection"}),(0,n.jsx)("li",{children:"Shortcuts display for keyboard commands"}),(0,n.jsx)("li",{children:"Inset option for aligned labels"}),(0,n.jsx)("li",{children:"Destructive variant for dangerous actions"})]})]})}),(0,n.jsx)(p.PageSection,{title:"Installation",children:(0,n.jsx)("p",{className:"lsd:text-lsd-text-secondary",children:"The Dropdown Menu component is included in @nipsys/shadcn-lsd. No additional installation steps are required."})}),(0,n.jsxs)(p.PageSection,{title:"Basic Usage",children:[(0,n.jsx)("p",{className:"mb-4 lsd:text-lsd-text-secondary",children:"Here's a simple dropdown menu with basic items:"}),(0,n.jsx)(i.IframeExample,{size:"md",src:"/examples/dropdown-menu/basic",title:"Basic"}),(0,n.jsx)(o.Accordion,{type:"single",collapsible:!0,children:(0,n.jsxs)(d.AccordionItem,{value:"code",children:[(0,n.jsx)(r.AccordionTrigger,{children:"View code"}),(0,n.jsx)(s.AccordionContent,{children:(0,n.jsx)(t.CodeExample,{code:m.CODE})})]})})]}),(0,n.jsxs)(p.PageSection,{title:"Shortcuts",children:[(0,n.jsx)("p",{className:"mb-4 lsd:text-lsd-text-secondary",children:"Display keyboard shortcuts for menu items:"}),(0,n.jsx)(i.IframeExample,{size:"md",src:"/examples/dropdown-menu/shortcuts",title:"Shortcuts"}),(0,n.jsx)(o.Accordion,{type:"single",collapsible:!0,children:(0,n.jsxs)(d.AccordionItem,{value:"code",children:[(0,n.jsx)(r.AccordionTrigger,{children:"View code"}),(0,n.jsx)(s.AccordionContent,{children:(0,n.jsx)(t.CodeExample,{code:w.CODE})})]})})]}),(0,n.jsxs)(p.PageSection,{title:"Submenus",children:[(0,n.jsx)("p",{className:"mb-4 lsd:text-lsd-text-secondary",children:"Create nested dropdown menus for hierarchical actions:"}),(0,n.jsx)(i.IframeExample,{size:"md",src:"/examples/dropdown-menu/submenus",title:"Submenus"}),(0,n.jsx)(o.Accordion,{type:"single",collapsible:!0,children:(0,n.jsxs)(d.AccordionItem,{value:"code",children:[(0,n.jsx)(r.AccordionTrigger,{children:"View code"}),(0,n.jsx)(s.AccordionContent,{children:(0,n.jsx)(t.CodeExample,{code:M.CODE})})]})})]}),(0,n.jsxs)(p.PageSection,{title:"Checkbox Items",children:[(0,n.jsx)("p",{className:"mb-4 lsd:text-lsd-text-secondary",children:"Use checkbox items for boolean toggles:"}),(0,n.jsx)(i.IframeExample,{size:"md",src:"/examples/dropdown-menu/checkbox-items",title:"Checkbox Items"}),(0,n.jsx)(o.Accordion,{type:"single",collapsible:!0,children:(0,n.jsxs)(d.AccordionItem,{value:"code",children:[(0,n.jsx)(r.AccordionTrigger,{children:"View code"}),(0,n.jsx)(s.AccordionContent,{children:(0,n.jsx)(t.CodeExample,{code:x.CODE})})]})})]}),(0,n.jsxs)(p.PageSection,{title:"Radio Group Items",children:[(0,n.jsx)("p",{className:"mb-4 lsd:text-lsd-text-secondary",children:"Use radio group items for exclusive selection:"}),(0,n.jsx)(i.IframeExample,{size:"md",src:"/examples/dropdown-menu/radio-items",title:"Radio Items"}),(0,n.jsx)(o.Accordion,{type:"single",collapsible:!0,children:(0,n.jsxs)(d.AccordionItem,{value:"code",children:[(0,n.jsx)(r.AccordionTrigger,{children:"View code"}),(0,n.jsx)(s.AccordionContent,{children:(0,n.jsx)(t.CodeExample,{code:h.CODE})})]})})]}),(0,n.jsx)(p.PageSection,{title:"API Reference",children:(0,n.jsxs)("div",{className:"space-y-6",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"lsd:text-xl lsd:font-medium mb-2",children:"DropdownMenu"}),(0,n.jsx)("p",{className:"mb-2 lsd:text-lsd-text-secondary",children:"The root dropdown menu component."}),(0,n.jsx)("p",{className:"text-sm lsd:text-lsd-text-secondary",children:"Extends DropdownMenuPrimitive.Root from @radix-ui/react-dropdown-menu."})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"lsd:text-xl lsd:font-medium mb-2",children:"DropdownMenuTrigger"}),(0,n.jsx)("p",{className:"mb-2 lsd:text-lsd-text-secondary",children:"The button or element that opens the dropdown menu."}),(0,n.jsx)("p",{className:"text-sm lsd:text-lsd-text-secondary",children:"Extends DropdownMenuPrimitive.Trigger."})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"lsd:text-xl lsd:font-medium mb-2",children:"DropdownMenuContent"}),(0,n.jsx)("p",{className:"mb-2 lsd:text-lsd-text-secondary",children:"The container for dropdown menu items. Handles positioning and animations."}),(0,n.jsxs)("table",{className:"w-full text-left lsd:border-collapse",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{className:"lsd:border-b lsd:border-[var(--lsd-border)]",children:[(0,n.jsx)("th",{className:"lsd:py-2 lsd:px-3",children:"Prop"}),(0,n.jsx)("th",{className:"lsd:py-2 lsd:px-3",children:"Type"}),(0,n.jsx)("th",{className:"lsd:py-2 lsd:px-3",children:"Default"})]})}),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{className:"lsd:border-b lsd:border-[var(--lsd-border)]",children:[(0,n.jsx)("td",{className:"lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm",children:"sideOffset"}),(0,n.jsx)("td",{className:"lsd:py-2 lsd:px-3 lsd:text-sm",children:"number"}),(0,n.jsx)("td",{className:"lsd:py-2 lsd:px-3 lsd:text-sm",children:"4"})]})})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"lsd:text-xl lsd:font-medium mb-2",children:"DropdownMenuItem"}),(0,n.jsx)("p",{className:"mb-2 lsd:text-lsd-text-secondary",children:"A selectable item in the dropdown menu."}),(0,n.jsxs)("table",{className:"w-full text-left lsd:border-collapse",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{className:"lsd:border-b lsd:border-[var(--lsd-border)]",children:[(0,n.jsx)("th",{className:"lsd:py-2 lsd:px-3",children:"Prop"}),(0,n.jsx)("th",{className:"lsd:py-2 lsd:px-3",children:"Type"}),(0,n.jsx)("th",{className:"lsd:py-2 lsd:px-3",children:"Default"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{className:"lsd:border-b lsd:border-[var(--lsd-border)]",children:[(0,n.jsx)("td",{className:"lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm",children:"inset"}),(0,n.jsx)("td",{className:"lsd:py-2 lsd:px-3 lsd:text-sm",children:"boolean"}),(0,n.jsx)("td",{className:"lsd:py-2 lsd:px-3 lsd:text-sm",children:"false"})]}),(0,n.jsxs)("tr",{className:"lsd:border-b lsd:border-[var(--lsd-border)]",children:[(0,n.jsx)("td",{className:"lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm",children:"variant"}),(0,n.jsx)("td",{className:"lsd:py-2 lsd:px-3 lsd:text-sm",children:"default | destructive"}),(0,n.jsx)("td",{className:"lsd:py-2 lsd:px-3 lsd:text-sm",children:"default"})]})]})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"lsd:text-xl lsd:font-medium mb-2",children:"DropdownMenuCheckboxItem"}),(0,n.jsx)("p",{className:"lsd:text-lsd-text-secondary",children:"A dropdown menu item with checkbox indicating selection state. Shows a checkmark when checked."})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"lsd:text-xl lsd:font-medium mb-2",children:"DropdownMenuGroup"}),(0,n.jsx)("p",{className:"lsd:text-lsd-text-secondary",children:"Groups menu items together without adding visual separators."})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"lsd:text-xl lsd:font-medium mb-2",children:"DropdownMenuRadioGroup"}),(0,n.jsx)("p",{className:"lsd:text-lsd-text-secondary",children:"Groups radio button items together for exclusive selection."})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"lsd:text-xl lsd:font-medium mb-2",children:"DropdownMenuRadioItem"}),(0,n.jsx)("p",{className:"lsd:text-lsd-text-secondary",children:"A radio button item for exclusive selection within a DropdownMenuRadioGroup."})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"lsd:text-xl lsd:font-medium mb-2",children:"DropdownMenuLabel"}),(0,n.jsx)("p",{className:"mb-2 lsd:text-lsd-text-secondary",children:"A non-interactive label for organizing dropdown menu content."}),(0,n.jsxs)("table",{className:"w-full text-left lsd:border-collapse",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{className:"lsd:border-b lsd:border-[var(--lsd-border)]",children:[(0,n.jsx)("th",{className:"lsd:py-2 lsd:px-3",children:"Prop"}),(0,n.jsx)("th",{className:"lsd:py-2 lsd:px-3",children:"Type"}),(0,n.jsx)("th",{className:"lsd:py-2 lsd:px-3",children:"Default"})]})}),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{className:"lsd:border-b lsd:border-[var(--lsd-border)]",children:[(0,n.jsx)("td",{className:"lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm",children:"inset"}),(0,n.jsx)("td",{className:"lsd:py-2 lsd:px-3 lsd:text-sm",children:"boolean"}),(0,n.jsx)("td",{className:"lsd:py-2 lsd:px-3 lsd:text-sm",children:"false"})]})})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"lsd:text-xl lsd:font-medium mb-2",children:"DropdownMenuSeparator"}),(0,n.jsx)("p",{className:"lsd:text-lsd-text-secondary",children:"A visual divider between dropdown menu sections."})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"lsd:text-xl lsd:font-medium mb-2",children:"DropdownMenuShortcut"}),(0,n.jsx)("p",{className:"lsd:text-lsd-text-secondary",children:"Displays keyboard shortcuts for menu items. Aligned to the right."})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"lsd:text-xl lsd:font-medium mb-2",children:"DropdownMenuSub"}),(0,n.jsx)("p",{className:"lsd:text-lsd-text-secondary",children:"A submenu container for nested dropdown menus."})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"lsd:text-xl lsd:font-medium mb-2",children:"DropdownMenuSubTrigger"}),(0,n.jsx)("p",{className:"mb-2 lsd:text-lsd-text-secondary",children:"A menu item that opens a submenu."}),(0,n.jsxs)("table",{className:"w-full text-left lsd:border-collapse",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{className:"lsd:border-b lsd:border-[var(--lsd-border)]",children:[(0,n.jsx)("th",{className:"lsd:py-2 lsd:px-3",children:"Prop"}),(0,n.jsx)("th",{className:"lsd:py-2 lsd:px-3",children:"Type"}),(0,n.jsx)("th",{className:"lsd:py-2 lsd:px-3",children:"Default"})]})}),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{className:"lsd:border-b lsd:border-[var(--lsd-border)]",children:[(0,n.jsx)("td",{className:"lsd:py-2 lsd:px-3 lsd:font-mono lsd:text-sm",children:"inset"}),(0,n.jsx)("td",{className:"lsd:py-2 lsd:px-3 lsd:text-sm",children:"boolean"}),(0,n.jsx)("td",{className:"lsd:py-2 lsd:px-3 lsd:text-sm",children:"false"})]})})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"lsd:text-xl lsd:font-medium mb-2",children:"DropdownMenuSubContent"}),(0,n.jsx)("p",{className:"lsd:text-lsd-text-secondary",children:"The container for submenu items. Similar to DropdownMenuContent but without portal."})]})]})}),(0,n.jsx)(p.PageSection,{title:"Accessibility",children:(0,n.jsxs)("div",{className:"space-y-4",children:[(0,n.jsx)("p",{className:"mb-4 lsd:text-lsd-text-secondary",children:"The Dropdown Menu component follows the WAI-ARIA combobox pattern and is keyboard accessible by default:"}),(0,n.jsxs)("ul",{className:"list-disc list-inside space-y-2 lsd:text-lsd-text-secondary",children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("kbd",{className:"lsd:px-2 lsd:py-1 lsd:bg-[var(--lsd-surface)] lsd:border lsd:border-[var(--lsd-border)] lsd:rounded lsd:text-sm",children:"ArrowDown"})," ","/"," ",(0,n.jsx)("kbd",{className:"lsd:px-2 lsd:py-1 lsd:bg-[var(--lsd-surface)] lsd:border lsd:border-[var(--lsd-border)] lsd:rounded lsd:text-sm",children:"ArrowUp"})," ","- Navigate items"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("kbd",{className:"lsd:px-2 lsd:py-1 lsd:bg-[var(--lsd-surface)] lsd:border lsd:border-[var(--lsd-border)] lsd:rounded lsd:text-sm",children:"ArrowRight"})," ","- Open submenu"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("kbd",{className:"lsd:px-2 lsd:py-1 lsd:bg-[var(--lsd-surface)] lsd:border lsd:border-[var(--lsd-border)] lsd:rounded lsd:text-sm",children:"ArrowLeft"})," ","- Close submenu"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("kbd",{className:"lsd:px-2 lsd:py-1 lsd:bg-[var(--lsd-surface)] lsd:border lsd:border-[var(--lsd-border)] lsd:rounded lsd:text-sm",children:"Enter"})," ","/"," ",(0,n.jsx)("kbd",{className:"lsd:px-2 lsd:py-1 lsd:bg-[var(--lsd-surface)] lsd:border lsd:border-[var(--lsd-border)] lsd:rounded lsd:text-sm",children:"Space"})," ","- Activate item"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("kbd",{className:"lsd:px-2 lsd:py-1 lsd:bg-[var(--lsd-surface)] lsd:border lsd:border-[var(--lsd-border)] lsd:rounded lsd:text-sm",children:"Escape"})," ","- Close menu"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("kbd",{className:"lsd:px-2 lsd:py-1 lsd:bg-[var(--lsd-surface)] lsd:border lsd:border-[var(--lsd-border)] lsd:rounded lsd:text-sm",children:"Tab"})," ","- Move focus to next element"]})]})]})}),(0,n.jsx)(u.PageNavigation,{previous:{title:"Command",href:"/components/command"},next:{title:"Menubar",href:"/components/menubar"}})]})]})}e.s(["default",()=>D])}]);
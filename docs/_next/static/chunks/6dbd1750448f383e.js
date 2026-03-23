(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,42836,t=>{"use strict";var n=t.i(88102);t.s(["Button",()=>n.B])},663,t=>{"use strict";var n=t.i(5737);t.s(["ButtonGroup",()=>n.B])},205,t=>{"use strict";var n=t.i(2582);t.i(82419);var o=t.i(42836),u=t.i(663),r=t.i(19863),e=t.i(93336);let i=`import {
  Button,
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <>
      <ButtonGroup>
        <Button>Save</Button>
        <Button>Cancel</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button variant="filled">Previous</Button>
        <ButtonGroupText>Page 1 of 10</ButtonGroupText>
        <Button variant="filled">Next</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button>Save</Button>
        <Button>Cancel</Button>
        <ButtonGroupSeparator />
        <Button variant="destructive">Delete</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button variant="filled">Primary</Button>
        <Button variant="outlined">Secondary</Button>
      </ButtonGroup>
    </>
  );
}`;function a(){return(0,n.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,n.jsxs)(u.ButtonGroup,{children:[(0,n.jsx)(o.Button,{children:"Save"}),(0,n.jsx)(o.Button,{children:"Cancel"})]}),(0,n.jsxs)(u.ButtonGroup,{children:[(0,n.jsx)(o.Button,{variant:"filled",children:"Previous"}),(0,n.jsx)(e.ButtonGroupText,{children:"Page 1 of 10"}),(0,n.jsx)(o.Button,{variant:"filled",children:"Next"})]}),(0,n.jsxs)(u.ButtonGroup,{children:[(0,n.jsx)(o.Button,{children:"Save"}),(0,n.jsx)(o.Button,{children:"Cancel"}),(0,n.jsx)(r.ButtonGroupSeparator,{}),(0,n.jsx)(o.Button,{variant:"destructive",children:"Delete"})]}),(0,n.jsxs)(u.ButtonGroup,{children:[(0,n.jsx)(o.Button,{variant:"filled",children:"Primary"}),(0,n.jsx)(o.Button,{variant:"outlined",children:"Secondary"})]})]})}function B(){return(0,n.jsx)(a,{})}t.s(["ButtonGroupExample",()=>a,"CODE",0,i,"default",()=>B])}]);
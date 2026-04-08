(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,10019,t=>{"use strict";var o=t.i(98134);t.i(26940);var n=t.i(59038),u=t.i(23206),r=t.i(66056),e=t.i(71952);let B=`import {
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
        <Button>Previous</Button>
        <ButtonGroupText>Page 1 of 10</ButtonGroupText>
        <Button>Next</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button>Save</Button>
        <Button>Cancel</Button>
        <ButtonGroupSeparator />
        <Button variant="destructive">Delete</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button>Primary</Button>
        <Button variant="outlined">Secondary</Button>
      </ButtonGroup>
    </>
  );
}`;function i(){return(0,o.jsxs)("div",{className:"flex flex-col gap-(--lsd-spacing-base)",children:[(0,o.jsxs)(u.ButtonGroup,{children:[(0,o.jsx)(n.Button,{children:"Save"}),(0,o.jsx)(n.Button,{children:"Cancel"})]}),(0,o.jsxs)(u.ButtonGroup,{children:[(0,o.jsx)(n.Button,{children:"Previous"}),(0,o.jsx)(e.ButtonGroupText,{children:"Page 1 of 10"}),(0,o.jsx)(n.Button,{children:"Next"})]}),(0,o.jsxs)(u.ButtonGroup,{children:[(0,o.jsx)(n.Button,{children:"Save"}),(0,o.jsx)(n.Button,{children:"Cancel"}),(0,o.jsx)(r.ButtonGroupSeparator,{}),(0,o.jsx)(n.Button,{variant:"destructive",children:"Delete"})]}),(0,o.jsxs)(u.ButtonGroup,{children:[(0,o.jsx)(n.Button,{children:"Primary"}),(0,o.jsx)(n.Button,{variant:"outlined",children:"Secondary"})]})]})}function a(){return(0,o.jsx)(i,{})}t.s(["ButtonGroupExample",()=>i,"CODE",0,B,"default",()=>a])}]);
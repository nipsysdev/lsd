(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,15596,e=>{"use strict";var r=e.i(2582);e.i(82419);var t=e.i(18026),l=e.i(85272),i=e.i(36786);let s=`
import { Alert, AlertDescription, AlertTitle } from '@nipsys/shadcn-lsd';

export function AlertAllVariants() {
  return (
    <div className="flex flex-col gap-4">
      <Alert variant="default">
        <AlertTitle>Default Alert</AlertTitle>
        <AlertDescription>
          This is a default alert for general information messages.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <AlertTitle>Error Encountered</AlertTitle>
        <AlertDescription>
          An error occurred while processing your request. Please try again later.
        </AlertDescription>
      </Alert>

      <Alert variant="info">
        <AlertTitle>New Feature Available</AlertTitle>
        <AlertDescription>
          Check out our new dashboard features available in the latest update.
        </AlertDescription>
      </Alert>

      <Alert variant="success">
        <AlertTitle>Operation Complete</AlertTitle>
        <AlertDescription>
          Your changes have been saved successfully.
        </AlertDescription>
      </Alert>

      <Alert variant="warning">
        <AlertTitle>Attention Required</AlertTitle>
        <AlertDescription>
          Your session will expire in 5 minutes. Please save your work.
        </AlertDescription>
      </Alert>
    </div>
  );
}
`;function n(){return(0,r.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,r.jsxs)(t.Alert,{variant:"default",children:[(0,r.jsx)(i.AlertTitle,{children:"Default Alert"}),(0,r.jsx)(l.AlertDescription,{children:"This is a default alert for general information messages."})]}),(0,r.jsxs)(t.Alert,{variant:"destructive",children:[(0,r.jsx)(i.AlertTitle,{children:"Error Encountered"}),(0,r.jsx)(l.AlertDescription,{children:"An error occurred while processing your request. Please try again later."})]}),(0,r.jsxs)(t.Alert,{variant:"info",children:[(0,r.jsx)(i.AlertTitle,{children:"New Feature Available"}),(0,r.jsx)(l.AlertDescription,{children:"Check out our new dashboard features available in the latest update."})]}),(0,r.jsxs)(t.Alert,{variant:"success",children:[(0,r.jsx)(i.AlertTitle,{children:"Operation Complete"}),(0,r.jsx)(l.AlertDescription,{children:"Your changes have been saved successfully."})]}),(0,r.jsxs)(t.Alert,{variant:"warning",children:[(0,r.jsx)(i.AlertTitle,{children:"Attention Required"}),(0,r.jsx)(l.AlertDescription,{children:"Your session will expire in 5 minutes. Please save your work."})]})]})}e.s(["CODE",0,s,"default",()=>n])}]);
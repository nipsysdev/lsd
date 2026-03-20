'use client';

import { Input } from '@nipsys/shadcn-lsd';
import { useInIframeThemeSync } from '@/components/docs/useInIframeThemeSync';

export const CODE = `import { Input } from '@nipsys/shadcn-lsd';

export function Example() {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Input label="Default" placeholder="Enter text" />
      
      <Input 
        label="Email" 
        type="email" 
        placeholder="you@example.com" 
      />
      
      <Input 
        label="Password" 
        type="password" 
        placeholder="••••••••" 
      />
      
      <Input 
        label="Username" 
        placeholder="johndoe" 
        supportingText="Choose a unique username"
      />
      
      <Input 
        label="Error State" 
        placeholder="Enter email" 
        error
        supportingText="Please enter a valid email address"
      />
      
      <Input 
        label="Disabled" 
        placeholder="Can't edit this" 
        disabled
      />
    </div>
  );
}`;

export function InputExample() {
  useInIframeThemeSync();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base) p-(--lsd-spacing-larger)">
      <Input label="Default" placeholder="Enter text" />

      <Input label="Email" type="email" placeholder="you@example.com" />

      <Input label="Password" type="password" placeholder="••••••••" />

      <Input label="Username" placeholder="johndoe" supportingText="Choose a unique username" />

      <Input
        label="Error State"
        placeholder="Enter email"
        error
        supportingText="Please enter a valid email address"
      />

      <Input label="Disabled" placeholder="Can't edit this" disabled />
    </div>
  );
}

import type { ReactNode } from 'react';

export default function ExamplesLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="size-full bg-(--lsd-foreground)">
      <div className="flex h-full">{children}</div>
    </div>
  );
}

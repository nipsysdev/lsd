'use client';

import { ScrollArea } from '@nipsys/lsd';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from './Header';
import SidebarWrapper from './SidebarWrapper';

interface LayoutWrapperProps {
  children: React.ReactNode;
  currentPath: string;
}

export default function LayoutWrapper({ children, currentPath }: LayoutWrapperProps) {
  const pathname = usePathname();
  const [isExampleRoute, setIsExampleRoute] = useState(false);

  useEffect(() => {
    setIsExampleRoute(pathname?.startsWith('/examples/') ?? false);
  }, [pathname]);

  return isExampleRoute ? (
    children
  ) : (
    <SidebarWrapper currentPath={currentPath}>
      <main className="size-full flex flex-col">
        <Header className="w-full border-b" />
        <ScrollArea className="flex-auto overflow-hidden">{children}</ScrollArea>
      </main>
    </SidebarWrapper>
  );
}

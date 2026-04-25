import {
  ScrollArea,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
} from '@nipsys/lsd';
import { PillIcon } from '@phosphor-icons/react';
import Link from 'next/link';
import type React from 'react';
import { navItems } from '../config/navigation';

interface SidebarWrapperProps {
  currentPath: string;
  children: React.ReactNode;
}

export default function SidebarWrapper({ currentPath, children }: SidebarWrapperProps) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <Link href="/">
                  <div className="flex aspect-square size-8 items-center justify-center">
                    <PillIcon className="size-6" weight="duotone" />
                  </div>
                  <div className="flex flex-col gap-(--lsd-spacing-smaller) leading-none">
                    <span className="font-semibold">@nipsys/lsd</span>
                    <span className="text-xs">v1.0.0-alpha.2</span>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
          <ScrollArea className="h-full">
            {navItems.map(group => (
              <SidebarGroup key={group.title}>
                <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {group.items.map(item => (
                      <SidebarMenuItem key={item.title}>
                        {item.subItems ? (
                          <>
                            <SidebarMenuButton>
                              {item.icon && <item.icon weight="duotone" />}
                              <span>{item.title}</span>
                            </SidebarMenuButton>
                            <SidebarMenuSub>
                              {item.subItems.map(subItem => (
                                <SidebarMenuSubItem key={subItem.url}>
                                  <SidebarMenuSubButton
                                    asChild
                                    className={
                                      currentPath === subItem.url
                                        ? 'bg-accent text-accent-foreground'
                                        : ''
                                    }
                                  >
                                    <a href={subItem.url}>{subItem.title}</a>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              ))}
                            </SidebarMenuSub>
                          </>
                        ) : (
                          <SidebarMenuButton
                            asChild
                            className={
                              currentPath === item.url ? 'bg-accent text-accent-foreground' : ''
                            }
                          >
                            <a href={item.url}>
                              {item.icon && <item.icon weight="duotone" />}
                              <span>{item.title}</span>
                            </a>
                          </SidebarMenuButton>
                        )}
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            ))}
          </ScrollArea>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="overflow-hidden">{children}</SidebarInset>
    </SidebarProvider>
  );
}

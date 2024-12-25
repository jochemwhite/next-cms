"use client";

import * as React from "react";
import { Book, Calendar, MessageSquare, Users, Image, Menu, X } from "lucide-react";
import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const routes = [
  { name: "Blogs", href: "/dashboard/blogs", icon: Book },
  { name: "Events", href: "/dashboard/events", icon: Calendar },
  { name: "Comments", href: "/dashboard/comments", icon: MessageSquare },
  { name: "Users", href: "/dashboard/users", icon: Users },
  { name: "Images", href: "/dashboard/images", icon: Image },
];

export function CMSSidebar() {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-between p-4">
        <h2 className="text-lg font-semibold">CMS dashboard</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {routes.map((route) => (
            <SidebarMenuItem key={route.name}>
              <SidebarMenuButton asChild>
                <Link href={route.href} className="flex items-center">
                  <route.icon className="mr-2 h-4 w-4" />
                  <span>{route.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <p className="text-sm text-gray-500">© 2024 Your CMS</p>
      </SidebarFooter>
    </Sidebar>
  );
}

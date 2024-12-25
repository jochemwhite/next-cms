import { CMSSidebar } from "@/components/dashboard/dashboard-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function layout({ children }: Props) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <CMSSidebar />
        <main className="w-full">{children}</main>
      </div>
    </SidebarProvider>
  );
}

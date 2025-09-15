import { AppSidebar } from "@/components/sidebar/AppSidebar";
import { Header } from "@/components/sidebar/Header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ROUTE } from "@/routes/router";
import type { IsidebarItems } from "@/types/general";
import { IoFastFood, IoSettingsSharp } from "react-icons/io5";
import { FaCrown } from "react-icons/fa";
import { Outlet, useNavigate } from "react-router-dom";

export default function GeneralLayout() {

  const navigate = useNavigate();
  const sidebarData: IsidebarItems[] = [
    {
      title: "Food items",
      url: ROUTE.FOODS,
      icon: IoFastFood,
      onClick: () => navigate(ROUTE.FOODS),
      isAvailable: true,
    },
    {
      title: "Subscription",
      url: ROUTE.SUBSCRIPTION,
      icon: FaCrown,
      onClick: () => navigate(ROUTE.SUBSCRIPTION),
      isAvailable: true,
    },
    {
      title: "Accounts",
      url: ROUTE.ACCOUNTS,
      icon: IoSettingsSharp,
      onClick: () => navigate(ROUTE.ACCOUNTS),
      isAvailable: true,
    },
  ];

  return (
    <SidebarProvider>
      <AppSidebar variant="inset" sidebarData={sidebarData} />
      <SidebarInset className="p-4">
        <Header sidebarData={sidebarData} />
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
};
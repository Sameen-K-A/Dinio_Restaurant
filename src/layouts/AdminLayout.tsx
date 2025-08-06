import { AppSidebar } from "@/components/admin/sidebar/AppSidebar";
import { Header } from "@/components/admin/sidebar/Header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ROUTE } from "@/routes/router";
import type { IsidebarItems } from "@/types/admin";
import { IconChefHat, IconCrown, IconDashboard, IconFishBone, IconListDetails, IconSettings } from "@tabler/icons-react";
import { Outlet, useNavigate } from "react-router-dom";

export default function AdminLayout() {

  const navigate = useNavigate();
  const sidebarData: IsidebarItems[] = [
    {
      title: "Dashboard",
      url: ROUTE.DASHBOARD,
      icon: IconDashboard,
      onClick: () => navigate(ROUTE.DASHBOARD),
    },
    {
      title: "Orders",
      url: ROUTE.ORDERS,
      icon: IconListDetails,
      onClick: () => navigate(ROUTE.ORDERS),
    },
    {
      title: "Food items",
      url: ROUTE.FOODS,
      icon: IconFishBone,
      onClick: () => navigate(ROUTE.FOODS),
    },
    {
      title: "Employees",
      url: ROUTE.EMPLOYEES,
      icon: IconChefHat,
      onClick: () => navigate(ROUTE.EMPLOYEES),
    },
    {
      title: "Subscription",
      url: ROUTE.SUBSCRIPTION,
      icon: IconCrown,
      onClick: () => navigate(ROUTE.SUBSCRIPTION),
    },
    {
      title: "Accounts",
      url: ROUTE.ACCOUNTS,
      icon: IconSettings,
      onClick: () => navigate(ROUTE.ACCOUNTS),
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
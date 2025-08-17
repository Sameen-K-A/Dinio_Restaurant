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
      url: ROUTE.ADMIN.DASHBOARD,
      icon: IconDashboard,
      onClick: () => navigate(ROUTE.ADMIN.DASHBOARD),
      isAvailable: false,
    },
    {
      title: "Orders",
      url: ROUTE.ADMIN.ORDERS,
      icon: IconListDetails,
      onClick: () => navigate(ROUTE.ADMIN.ORDERS),
      isAvailable: true,
    },
    {
      title: "Food items",
      url: ROUTE.ADMIN.FOODS,
      icon: IconFishBone,
      onClick: () => navigate(ROUTE.ADMIN.FOODS),
      isAvailable: true,
    },
    {
      title: "Employees",
      url: ROUTE.ADMIN.EMPLOYEES,
      icon: IconChefHat,
      onClick: () => navigate(ROUTE.ADMIN.EMPLOYEES),
      isAvailable: true,
    },
    {
      title: "Subscription",
      url: ROUTE.ADMIN.SUBSCRIPTION,
      icon: IconCrown,
      onClick: () => navigate(ROUTE.ADMIN.SUBSCRIPTION),
      isAvailable: true,
    },
    {
      title: "Accounts",
      url: ROUTE.ADMIN.ACCOUNTS,
      icon: IconSettings,
      onClick: () => navigate(ROUTE.ADMIN.ACCOUNTS),
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
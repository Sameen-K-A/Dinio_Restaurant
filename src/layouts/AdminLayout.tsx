import { AppSidebar } from "@/components/admin/sidebar/AppSidebar";
import { Header } from "@/components/admin/sidebar/Header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ROUTE } from "@/routes/router";
import type { IsidebarItems } from "@/types/admin";
import { IoFastFood, IoSettingsSharp } from "react-icons/io5";
import { FaCrown, FaUserTie } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { Outlet, useNavigate } from "react-router-dom";

export default function AdminLayout() {

  const navigate = useNavigate();
  const sidebarData: IsidebarItems[] = [
    {
      title: "Orders",
      url: ROUTE.ADMIN.ORDERS,
      icon: IoMdCart,
      onClick: () => navigate(ROUTE.ADMIN.ORDERS),
      isAvailable: true,
    },
    {
      title: "Food items",
      url: ROUTE.ADMIN.FOODS,
      icon: IoFastFood,
      onClick: () => navigate(ROUTE.ADMIN.FOODS),
      isAvailable: true,
    },
    {
      title: "Employees",
      url: ROUTE.ADMIN.EMPLOYEES,
      icon: FaUserTie,
      onClick: () => navigate(ROUTE.ADMIN.EMPLOYEES),
      isAvailable: true,
    },
    {
      title: "Subscription",
      url: ROUTE.ADMIN.SUBSCRIPTION,
      icon: FaCrown,
      onClick: () => navigate(ROUTE.ADMIN.SUBSCRIPTION),
      isAvailable: true,
    },
    {
      title: "Accounts",
      url: ROUTE.ADMIN.ACCOUNTS,
      icon: IoSettingsSharp,
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
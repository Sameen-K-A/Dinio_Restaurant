import { AppSidebar } from "@/components/employee/sidebar/AppSidebar";
import { Header } from "@/components/employee/sidebar/Header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ROUTE } from "@/routes/router";
import type { InavbarItems } from "@/types/employee";
import { IconDashboard, IconFishBone, IconListDetails } from "@tabler/icons-react";
import { Outlet, useNavigate } from "react-router-dom";

export default function EmployeeLayout() {

  const navigate = useNavigate();
  const sidebarData: InavbarItems[] = [
    {
      title: "Dashboard",
      url: ROUTE.EMPLOYEE.DASHBOARD,
      icon: IconDashboard,
      onClick: () => navigate(ROUTE.EMPLOYEE.DASHBOARD),
      isAvailable: false,
    },
    {
      title: "Orders",
      url: ROUTE.SHARED.ORDERS,
      icon: IconListDetails,
      onClick: () => navigate(ROUTE.SHARED.ORDERS),
      isAvailable: true,
    },
    {
      title: "Food items",
      url: ROUTE.SHARED.FOODS,
      icon: IconFishBone,
      onClick: () => navigate(ROUTE.SHARED.FOODS),
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
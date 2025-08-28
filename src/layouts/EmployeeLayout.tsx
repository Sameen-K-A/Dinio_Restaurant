import { AppSidebar } from "@/components/employee/sidebar/AppSidebar";
import { Header } from "@/components/employee/sidebar/Header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ROUTE } from "@/routes/router";
import type { InavbarItems } from "@/types/employee";
import { IoMdCart } from "react-icons/io";
import { IoFastFood } from "react-icons/io5";
import { Outlet, useNavigate } from "react-router-dom";

export default function EmployeeLayout() {

  const navigate = useNavigate();
  const sidebarData: InavbarItems[] = [
    {
      title: "Orders",
      url: ROUTE.EMPLOYEE.ORDERS,
      icon: IoMdCart,
      onClick: () => navigate(ROUTE.EMPLOYEE.ORDERS),
      isAvailable: true,
    },
    {
      title: "Food items",
      url: ROUTE.EMPLOYEE.FOODS,
      icon: IoFastFood,
      onClick: () => navigate(ROUTE.EMPLOYEE.FOODS),
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
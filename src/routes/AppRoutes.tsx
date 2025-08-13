import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTE } from "@/routes/router";

// Common imports
import Login from "@/pages/shared/Login";

// Admin imports
import Dashboard from "@/pages/admin/Dashboard";
import Employees from "@/pages/admin/Employees";
import Subscription from "@/pages/admin/Subscription";
import Accounts from "@/pages/admin/Accounts";

// Employee imports
import EmployeeDashboard from "@/pages/employee/Dashboard";

// Shared imports
import Orders from "@/pages/shared/orders/Orders";
import OrderDetails from "@/pages/shared/orders/OrderDetails";
import Foods from "@/pages/shared/Foods";

// Layout imports
import AdminLayout from "@/layouts/AdminLayout";
import EmployeeLayout from "@/layouts/EmployeeLayout";

export default function AppRoutes() {
  return (
    <Routes>

      {/* Common routes */}
      <Route path={ROUTE.LOGIN} element={<Login />} />
      <Route path={ROUTE.DEFAULT} element={<Navigate to={ROUTE.LOGIN} replace />} />

      {/* Admin routes */}
      <Route element={<AdminLayout />}>
        <Route path={ROUTE.ADMIN.DASHBOARD} element={<Dashboard />} />
        <Route path={ROUTE.ADMIN.ORDERS} element={<Orders />} />
        <Route path={ROUTE.ADMIN.ORDERS + "/:id"} element={<OrderDetails />} />
        <Route path={ROUTE.ADMIN.FOODS} element={<Foods />} />
        <Route path={ROUTE.ADMIN.EMPLOYEES} element={<Employees />} />
        <Route path={ROUTE.ADMIN.SUBSCRIPTION} element={<Subscription />} />
        <Route path={ROUTE.ADMIN.ACCOUNTS} element={<Accounts />} />
      </Route>

      {/* Employee routes */}
      <Route element={<EmployeeLayout />}>
        <Route path={ROUTE.EMPLOYEE.DASHBOARD} element={<EmployeeDashboard />} />
        <Route path={ROUTE.EMPLOYEE.ORDERS} element={<Orders />} />
        <Route path={ROUTE.EMPLOYEE.ORDERS + "/:id"} element={<OrderDetails />} />
        <Route path={ROUTE.EMPLOYEE.FOODS} element={<Foods />} />
      </Route>
    </Routes>
  );
}
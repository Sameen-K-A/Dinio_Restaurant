import { Route, Routes } from "react-router-dom";
import { ROUTE } from "@/routes/router";

// Admin imports
import Dashboard from "@/pages/admin/Dashboard";
import Foods from "@/pages/admin/Foods";
import Orders from "@/pages/admin/orders/Orders";
import OrderDetails from "@/pages/admin/orders/OrderDetails";
import Employees from "@/pages/admin/Employees";
import Subscription from "@/pages/admin/Subscription";
import Accounts from "@/pages/admin/Accounts";

// Employee imports
import EmployeeDashboard from "@/pages/employee/Dashboard";
import EmployeeOrders from "@/pages/employee/Orders";
import EmployeeProfile from "@/pages/employee/Profile";

// Layout imports
import AdminLayout from "@/layouts/AdminLayout";
import EmployeeLayout from "@/layouts/EmployeeLayout";

export default function AppRoutes() {
  return (
    <Routes>

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
        <Route path={ROUTE.EMPLOYEE.ORDERS} element={<EmployeeOrders />} />
        <Route path={ROUTE.EMPLOYEE.PROFILE} element={<EmployeeProfile />} />
      </Route>
    </Routes>
  );
}
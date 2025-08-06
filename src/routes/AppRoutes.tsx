import { Route, Routes } from "react-router-dom";
import Dashboard from "@/pages/admin/Dashboard";
import Foods from "@/pages/admin/Foods";
import Orders from "@/pages/admin/Orders";
import Employees from "@/pages/admin/Employees";
import Subscription from "@/pages/admin/Subscription";
import Accounts from "@/pages/admin/Accounts";
import AdminLayout from "@/layouts/AdminLayout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="foods" element={<Foods />} />
        <Route path="employees" element={<Employees />} />
        <Route path="subscription" element={<Subscription />} />
        <Route path="accounts" element={<Accounts />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
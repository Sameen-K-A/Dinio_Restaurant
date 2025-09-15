import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTE } from "@/routes/router";

import Login from "@/pages/Login";
import Foods from "@/pages/Foods";
import Subscription from "@/pages/Subscription";
import Accounts from "@/pages/Accounts";
import NotFoundPage from "@/components/others/Error404";
import GeneralLayout from "@/layouts/GeneralLayout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTE.LOGIN} element={<Login />} />
      <Route path={ROUTE.DEFAULT} element={<Navigate to={ROUTE.LOGIN} replace />} />

      <Route element={<GeneralLayout />}>
        <Route path={ROUTE.FOODS} element={<Foods />} />
        <Route path={ROUTE.SUBSCRIPTION} element={<Subscription />} />
        <Route path={ROUTE.ACCOUNTS} element={<Accounts />} />
      </Route>

      <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
}
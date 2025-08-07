import EmployeeNavbar from "../components/employee/navbar/EmployeeNavbar";
import { Outlet } from "react-router-dom";

export default function EmployeeLayout() {
  return (
    <div className="min-h-screen px-4">
      <EmployeeNavbar />
      <div className="pt-5 md:pt-10">
        <Outlet />
      </div>
    </div>
  );
};
import WaiterCallPopup from "@/components/shared/WaiterCallPopup";
import { Outlet } from "react-router-dom";

export default function WrapperLayout() {
  return (
    <>
      <WaiterCallPopup tableNumber={15} show={true} />
      <Outlet />
    </>
  );
};
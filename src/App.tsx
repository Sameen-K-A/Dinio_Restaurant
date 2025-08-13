import WaiterCallPopup from "./components/shared/WaiterCallPopup";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <>
      <AppRoutes />
      <WaiterCallPopup tableNumber={15} show={true} />
    </>
  )
};
import WaiterCallPopup from "@/components/shared/WaiterCallPopup";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { orders } from "@/constants/orders";
import type { Order } from "@/types/admin";
import { OrderAlertDialog, SummaryAlertDialog } from "@/components/shared/orders/OrderAlert";
import { ROUTE } from "@/routes/router";

export default function WrapperLayout() {
  const navigate = useNavigate();
  const [newOrderQueue, setNewOrderQueue] = useState<Order[]>([]);
  const [callQueue, setCallQueue] = useState<number[]>([]);
  const [showOrderAlert, setShowOrderAlert] = useState(false)

  const playNotificationSound = () => {
    new Audio("/sounds/orderAlert.wav").play();
  };

  useEffect(() => {
    const pushOrder = () => {
      const randomOrder = orders[Math.floor(Math.random() * orders.length)];
      setNewOrderQueue((prev) => [...prev, randomOrder]);
    };

    const pushCall = () => {
      const randomTable = Math.floor(Math.random() * 30) + 1;
      setCallQueue((prev) => [...prev, randomTable]);
    };

    const interval = setInterval(() => {
      pushOrder();
      pushCall();
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (newOrderQueue.length === 0) {
      setShowOrderAlert(false)
      return
    }

    playNotificationSound()
    setShowOrderAlert(true)
  }, [newOrderQueue]);

  const handleCloseOrdersAlert = () => {
    setShowOrderAlert(false)
    setNewOrderQueue([])
  }

  return (
    <>
      <WaiterCallPopup calls={callQueue} clearCalls={() => setCallQueue([])} />

      {newOrderQueue.length === 1 && (
        <OrderAlertDialog
          order={newOrderQueue[0]}
          isOpen={showOrderAlert}
          onClose={handleCloseOrdersAlert}
          onViewDetails={() => navigate(`${ROUTE.ADMIN.ORDERS}/${newOrderQueue[0].orderId}`)}
        />
      )}

      {newOrderQueue.length > 1 && (
        <SummaryAlertDialog
          orderCount={newOrderQueue.length}
          isOpen={showOrderAlert}
          onClose={handleCloseOrdersAlert}
          onViewDetails={() => navigate(`${ROUTE.ADMIN.ORDERS}`)}
        />
      )}

      <Outlet />
    </>
  );
};
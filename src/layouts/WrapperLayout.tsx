import WaiterCallPopup from "@/components/shared/WaiterCallPopup";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { toast } from "sonner";
import { orders } from "@/constants/orders";
import type { Order } from "@/types/admin";
import { OrderAlert, SummaryAlert } from "@/components/shared/orders/OrderAlert";

export default function WrapperLayout() {
  const [newOrderQueue, setNewOrderQueue] = useState<Order[]>([]);

  const playNotificationSound = () => {
    new Audio("/sounds/orderAlert.wav").play();
  };

  useEffect(() => {
    const pushOrder = () => {
      const randomOrder = orders[Math.floor(Math.random() * orders.length)];
      setNewOrderQueue((prev) => [...prev, randomOrder]);
    };
    const interval = setInterval(pushOrder, 15000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    toast.dismiss();
    if (newOrderQueue.length === 0) return;
    playNotificationSound();

    if (newOrderQueue.length === 1) {
      toast.custom((t) => (
        <OrderAlert
          order={newOrderQueue[0]}
          toastId={t}
          clearQueue={() => setNewOrderQueue([])}
        />
      ), { position: "top-center" });
    } else {
      toast.custom((t) => (
        <SummaryAlert
          orderLength={newOrderQueue.length}
          toastId={t}
          clearQueue={() => setNewOrderQueue([])}
        />
      ), { position: "top-center" });
    }
  }, [newOrderQueue]);

  return (
    <>
      <WaiterCallPopup tableNumber={15} show={true} />
      <Outlet />
    </>
  );
};
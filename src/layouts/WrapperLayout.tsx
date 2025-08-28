import WaiterCallPopup from "@/components/shared/WaiterCallPopup";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { toast } from "sonner";
// import { orders } from "@/constants/orders";
import type { Order } from "@/types/admin";
import { OrderAlert, SummaryAlert } from "@/components/shared/orders/OrderAlert";

export default function WrapperLayout() {
  const [newOrderQueue, setNewOrderQueue] = useState<Order[]>([]);
  const [callQueue, setCallQueue] = useState<number[]>([]);

  const playNotificationSound = () => {
    new Audio("/sounds/orderAlert.wav").play();
  };

  useEffect(() => {
    // const pushOrder = () => {
    //   const randomOrder = orders[Math.floor(Math.random() * orders.length)];
    //   setNewOrderQueue((prev) => [...prev, randomOrder]);
    // };

    // const pushCall = () => {
    //   const randomTable = Math.floor(Math.random() * 30) + 1;
    //   setCallQueue((prev) => [...prev, randomTable]);
    // };

    const interval = setInterval(() => {
      // pushOrder();
      // pushCall();
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    toast.dismiss();
    if (newOrderQueue.length === 0) return;
    playNotificationSound();

    if (newOrderQueue.length === 1) {
      toast.custom((t) => (
        <div className="mt-10 md:mt-0">
          <OrderAlert
            order={newOrderQueue[0]}
            toastId={t}
            clearQueue={() => setNewOrderQueue([])}
          />
        </div>
      ), { position: "top-center" });
    } else {
      toast.custom((t) => (
        <div className="mt-10 md:mt-0">
          <SummaryAlert
            orderLength={newOrderQueue.length}
            toastId={t}
            clearQueue={() => setNewOrderQueue([])}
          />
        </div>
      ), { position: "top-center" });
    }
  }, [newOrderQueue]);

  return (
    <>
      <WaiterCallPopup calls={callQueue} clearCalls={() => setCallQueue([])} />
      <Outlet />
    </>
  );
};
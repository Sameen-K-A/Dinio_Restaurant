import { PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";

interface WaiterCallPopupProps {
  tableNumber: number;
  show: boolean;
}

export default function WaiterCallPopup({ tableNumber, show }: WaiterCallPopupProps) {
  return (
    <div className={cn("fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-transform duration-300 ease-in-out", show ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0")}>
      <div className="flex items-center justify-between gap-4 bg-[#ffffff] dark:bg-[#232323] border rounded-full p-2 w-full shadow-lg">
        <div className="flex items-center justify-center w-15 h-15 rounded-full bg-green-500">
          <PhoneCall size={22} className="animate-shake text-white" />
        </div>

        <div className="flex-1 text-center pr-4">
          <p className="whitespace-nowrap">Customer calling the waiter from <br /><span className="font-semibold">Table {tableNumber}...</span></p>
        </div>
      </div>
    </div>
  );
};
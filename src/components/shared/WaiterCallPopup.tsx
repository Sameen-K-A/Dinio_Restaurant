import { PhoneCall, X } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "../ui/button";

interface WaiterCallPopupProps {
  calls: number[];
  clearCalls: () => void;
}

export default function WaiterCallPopup({ calls, clearCalls }: WaiterCallPopupProps) {

  if (calls.length === 0) return null;

  if (calls.length === 1) {
    const tableNumber = calls[0];
    return (
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 transition-transform duration-300 ease-in-out translate-y-0">
        <div className="flex items-center justify-between gap-4 bg-popover border p-2 shadow-lg rounded-full">

          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500">
            <PhoneCall size={22} className="animate-shake text-white" />
          </div>

          <div className="flex-1 text-center pr-4">
            <p className="whitespace-nowrap">
              Customer calling the waiter from <br />
              <span className="font-semibold">Table {tableNumber}</span>
            </p>
          </div>

          <Button
            variant="ghost"
            className="h-4 w-4 cursor-pointer mr-2"
            size="icon"
            onClick={() => clearCalls()}
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Popover>
        <PopoverTrigger asChild>
          <button className="relative cursor-pointer flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-lg">
            <PhoneCall size={22} className="animate-shake text-white" />
            <span className="absolute -top-1 -right-1 flex items-center justify-center w-6 h-6 rounded-full bg-red-500 text-xs text-white font-bold">
              {calls.length}
            </span>
          </button>
        </PopoverTrigger>
        <PopoverContent align="end" className="w-fit p-6 rounded-xl max-h-80 overflow-y-auto custom-scrollbar">
          <div className="flex justify-between items-center mb-4 gap-4">
            <h4 className="text-lg font-semibold">Calls from Table's</h4>
          </div>
          <div className="flex flex-col gap-2 text-center">
            {calls.map((table, i) => (
              <p className="my-1" key={i}>Table: {table}</p>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import type { Order } from "@/types/admin"
import { X } from "lucide-react"
import { MdFastfood } from "react-icons/md";

interface OrderToastProps {
  order: Order
  toastId: string | number
}

export function OrderAlert({ order }: OrderToastProps) {

  const getDisplayText = () => {
    if (order.items.length === 1) {
      return order.items[0].name
    }
    return `${order.items[0].name} and more`
  }

  return (
    <div className="bg-popover relative border border-border rounded-lg shadow-lg p-2 px-3 min-w-[320px]">
      <Button variant="default" className="h-4 w-4 cursor-pointer absolute -right-1 -top-1" size="icon">
        <X />
      </Button>

      <div className="flex items-center gap-1">
        <div className="flex-shrink-0">
          {order.items.length === 1 ? (
            <Avatar className="h-10 w-10 rounded-sm">
              <AvatarImage src={order.items[0].image || "/placeholder.svg"} alt={order.items[0].name} />
              <AvatarFallback className="rounded-sm">{order.items[0].name.charAt(0)}</AvatarFallback>
            </Avatar>
          ) : (
            <div className="flex -space-x-2">
              <Avatar className="h-10 w-10 rounded-sm ring-2 ring-popover grayscale">
                <AvatarImage src={order.items[0].image || "/placeholder.svg"} alt={order.items[0].name} />
                <AvatarFallback className="rounded-sm">{order.items[0].name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="h-10 w-10 rounded-sm bg-muted ring-2 ring-popover flex items-center justify-center">
                <span className="text-xs font-medium text-muted-foreground">+{order.items.length - 1}</span>
              </div>
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <p className="font-medium text-foreground truncate line-clamp-1">{getDisplayText()}</p>
          <p className="text-sm text-muted-foreground">Table No: {order.tableNo}</p>
        </div>

        <Button variant="outline" size="sm" className="text-xs cursor-pointer">
          View Details
        </Button>
      </div>
    </div >
  )
}

interface ISummuryAlertProps {
  orderLength: number
};

export function SummaryAlert({ orderLength }: ISummuryAlertProps) {
  return (
    <div className="bg-popover border border-border rounded-xl shadow-md p-2 px-3 min-w-[320px] flex items-center gap-3">
      <div className="bg-primary/10 p-3 rounded-md text-primary">
        <MdFastfood size={25} />
      </div>

      <p className="text-sm font-medium flex-1">
        {`${orderLength}+ orders waiting`}
        <span className="dots-placeholder">
          <span className="animate-dots"></span>
        </span>
      </p>

      <Button
        variant="outline"
        size="sm"
        className="text-xs rounded-full cursor-pointer whitespace-nowrap"
      >
        View Orders
      </Button>
    </div>
  );
}
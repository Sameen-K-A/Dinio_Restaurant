import { AlertDialog, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import type { Order } from "@/types/admin"

interface OrderAlertDialogProps {
  order: Order
  isOpen: boolean
  onClose: () => void
  onSkip: () => void
  onViewDetails: () => void
}

export function OrderAlertDialog({ order, isOpen, onClose, onSkip, onViewDetails }: OrderAlertDialogProps) {
  const getDisplayText = () => {
    if (order.items.length === 1) {
      return order.items[0].name
    }
    return `${order.items[0].name} and more`
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl font-semibold text-center">New Order Received!</AlertDialogTitle>
        </AlertDialogHeader>

        <div className="py-4">
          <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
            <div className="flex-shrink-0">
              {order.items.length === 1 ? (
                <Avatar className="h-12 w-12 rounded-lg">
                  <AvatarImage src={order.items[0].image || "/placeholder.svg"} alt={order.items[0].name} />
                  <AvatarFallback className="rounded-lg text-lg">{order.items[0].name.charAt(0)}</AvatarFallback>
                </Avatar>
              ) : (
                <div className="flex -space-x-2">
                  <Avatar className="h-12 w-12 rounded-lg ring-2 ring-popover">
                    <AvatarImage src={order.items[0].image || "/placeholder.svg"} alt={order.items[0].name} />
                    <AvatarFallback className="rounded-lg">{order.items[0].name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="h-12 w-12 rounded-lg bg-muted ring-2 ring-popover flex items-center justify-center">
                    <span className="text-sm font-medium text-muted-foreground">+{order.items.length - 1}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <p className="font-semibold text-foreground text-lg truncate">{getDisplayText()}</p>
              <p className="text-sm text-muted-foreground">Table No: {order.tableNo}</p>
            </div>
          </div>
        </div>

        <AlertDialogFooter className="flex flex-col gap-2 sm:flex-col">
          <Button
            className="cursor-pointer w-full"
            onClick={onViewDetails}
          >
            View order details
          </Button>
          <a className="cursor-pointer w-full text-center underline underline-offset-2 text-sm"
            onClick={onSkip}>Skip for this time
          </a>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

interface SummaryAlertDialogProps {
  orderCount: number
  isOpen: boolean
  onClose: () => void
  onSkip: () => void
  onViewDetails: () => void
}

export function SummaryAlertDialog({ orderCount, isOpen, onClose, onSkip, onViewDetails }: SummaryAlertDialogProps) {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl font-semibold text-center">Multiple New Orders!</AlertDialogTitle>
        </AlertDialogHeader>

        <div className="py-4">
          <div className="text-center p-6 bg-muted/50 rounded-lg">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">{orderCount}</span>
            </div>
            <p className="text-lg font-medium text-foreground mb-2">New Orders Waiting</p>
            <p className="text-sm text-muted-foreground">{orderCount}+ more orders are waiting in the queue.</p>
          </div>
        </div>

        <AlertDialogFooter className="flex flex-col gap-2 sm:flex-col">
          <Button
            className="cursor-pointer w-full"
            onClick={onViewDetails}
          >
            View all orders
          </Button>
          <a className="cursor-pointer w-full text-center underline underline-offset-2 text-sm"
            onClick={onSkip}>Skip for this time
          </a>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
};
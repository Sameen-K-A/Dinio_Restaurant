import type { Order } from '@/types/admin';
import { ArrowRight } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface OrderTableProps {
  orders: Order[];
}

export function OrderTable({ orders }: OrderTableProps) {

  return (
    <div className="w-full overflow-x-auto rounded-lg border bg-background">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-left px-4 py-2 whitespace-nowrap w-[80px]">Order ID</TableHead>
            <TableHead className="text-left px-4 py-2 whitespace-nowrap">Items</TableHead>
            <TableHead className="text-center px-4 py-2 whitespace-nowrap">Table No</TableHead>
            <TableHead className="text-right px-4 py-2 whitespace-nowrap"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.orderId} className="not-odd:bg-muted/50 hover:bg-muted transition-colors duration-200">
              <TableCell className="text-left px-4 py-2 whitespace-nowrap font-mono text-xs text-muted-foreground">{order.orderId}</TableCell>
              <TableCell className="text-left px-4 py-2 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex gap-2 min-w-[156px] h-12 items-center">
                    {order.items.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-center min-w-[48px]">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-12 w-12 rounded-md object-cover border border-muted"
                          style={{ zIndex: 10 - idx }}
                        />
                      </div>
                    ))}
                    {order.items.length > 2 && (
                      <span className="h-12 w-12 rounded-md flex items-center justify-center bg-muted text-base text-muted-foreground border font-semibold">
                        +{order.items.length - 2}
                      </span>
                    )}
                  </div>
                  <div className="pl-4 flex-1 flex items-center h-12">
                    <span className="text-base text-foreground font-bold leading-tight">
                      {order.items[0]?.name}
                      {order.items.length > 1 && (
                        <span className="text-base text-muted-foreground font-normal ml-1"> and {order.items.length - 1} more</span>
                      )}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-center px-4 py-2 whitespace-nowrap">
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-muted text-base text-foreground border border-muted font-semibold">
                  {order.tableNo}
                </span>
              </TableCell>
              <TableCell className="text-right px-4 py-2 whitespace-nowrap align-middle">
                <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground font-bold shadow flex items-center gap-2 ml-auto cursor-pointer transition-colors duration-150 hover:bg-primary/80 hover:scale-[1.03]">
                  <span className="text-sm font-semibold">Next</span>
                  <ArrowRight size={18} className="text-primary-foreground" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}